import { a as auth } from './auth-CA5qtupB.js';
import { e as error, j as json } from './index-DzcLzHBX.js';
import { d as db, u as user, h as userPortfolio, e as coin, t as transaction, n as notifications } from './index4-C6Efthht.js';
import { eq, sql } from 'drizzle-orm';
import { f as formatValue, g as getPrestigeName, a as getPrestigeCost } from './utils2-CLIgW4-x.js';
import { e as executeSellTrade } from './amm-C9rVEa8K.js';
import 'better-auth';
import 'better-auth/adapters/drizzle';
import './shared-server-BfUoNEXY.js';
import '@aws-sdk/client-s3';
import '@aws-sdk/s3-request-presigner';
import './public-B3YCMw9Q.js';
import 'sharp';
import 'better-auth/plugins';
import 'drizzle-orm/postgres-js';
import 'postgres';
import 'drizzle-orm/pg-core';
import './clsx-ChV9xqsO.js';
import './volume-settings-DX3g8058.js';
import './index2-D4eROfHK.js';
import './notification-BUUg7nEu.js';
import './redis-LTnnuEqD.js';
import 'redis';

const POST = async ({ request, locals }) => {
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session?.user) throw error(401, "Not authenticated");
  const userId = Number(session.user.id);
  return await db.transaction(async (tx) => {
    const [userData] = await tx.select({
      baseCurrencyBalance: user.baseCurrencyBalance,
      prestigeLevel: user.prestigeLevel
    }).from(user).where(eq(user.id, userId)).for("update").limit(1);
    if (!userData) throw error(404, "User not found");
    const currentPrestige = userData.prestigeLevel || 0;
    const nextPrestige = currentPrestige + 1;
    const prestigeCost = getPrestigeCost(nextPrestige);
    const prestigeName = getPrestigeName(nextPrestige);
    if (!prestigeCost || !prestigeName) {
      throw error(400, "Maximum prestige level reached");
    }
    const currentCashBalance = Number(userData.baseCurrencyBalance);
    if (currentCashBalance < prestigeCost) {
      throw error(400, `Insufficient cash funds for prestige. Need ${formatValue(prestigeCost)} cash, have ${formatValue(currentCashBalance)} cash. Coin holdings cannot be used for prestige costs.`);
    }
    const holdings = await tx.select({
      coinId: userPortfolio.coinId,
      quantity: userPortfolio.quantity,
      currentPrice: coin.currentPrice,
      symbol: coin.symbol,
      poolCoinAmount: coin.poolCoinAmount,
      poolBaseCurrencyAmount: coin.poolBaseCurrencyAmount,
      circulatingSupply: coin.circulatingSupply
    }).from(userPortfolio).leftJoin(coin, eq(userPortfolio.coinId, coin.id)).where(eq(userPortfolio.userId, userId));
    let warningMessage = "";
    let totalSaleValue = 0;
    if (holdings.length > 0) {
      warningMessage = `All ${holdings.length} coin holdings have been sold at current market prices. `;
      for (const holding of holdings) {
        const quantity = Number(holding.quantity);
        const currentPrice = Number(holding.currentPrice);
        if (Number(holding.poolCoinAmount) <= 0 || Number(holding.poolBaseCurrencyAmount) <= 0) {
          const fallbackValue = quantity * currentPrice;
          totalSaleValue += fallbackValue;
          await tx.insert(transaction).values({
            userId,
            coinId: holding.coinId,
            type: "SELL",
            quantity: holding.quantity,
            pricePerCoin: holding.currentPrice || "0",
            totalBaseCurrencyAmount: fallbackValue.toString(),
            timestamp: /* @__PURE__ */ new Date()
          });
          continue;
        }
        const sellResult = await executeSellTrade(tx, {
          id: holding.coinId,
          poolCoinAmount: holding.poolCoinAmount,
          poolBaseCurrencyAmount: holding.poolBaseCurrencyAmount,
          currentPrice: holding.currentPrice,
          circulatingSupply: holding.circulatingSupply
        }, userId, quantity);
        if (sellResult.success && sellResult.baseCurrencyReceived) {
          totalSaleValue += sellResult.baseCurrencyReceived;
        } else {
          totalSaleValue += sellResult.fallbackValue || quantity * currentPrice;
        }
      }
      await tx.delete(userPortfolio).where(eq(userPortfolio.userId, userId));
    }
    await tx.update(user).set({
      baseCurrencyBalance: "100.00000000",
      prestigeLevel: nextPrestige,
      lastRewardClaim: null,
      updatedAt: /* @__PURE__ */ new Date()
    }).where(eq(user.id, userId));
    await tx.delete(userPortfolio).where(eq(userPortfolio.userId, userId));
    await tx.insert(notifications).values({
      userId,
      type: "SYSTEM",
      title: `${prestigeName} Achieved!`,
      message: `Congratulations! You have successfully reached ${prestigeName}. Your portfolio has been reset, daily reward cooldown has been cleared, and you can now start fresh with your new prestige badge and enhanced daily rewards.`,
      link: `/user/${userId}`
    });
    return json({
      success: true,
      newPrestigeLevel: nextPrestige,
      costPaid: prestigeCost,
      coinsSold: holdings.length,
      totalSaleValue,
      message: `${warningMessage}Congratulations! You've reached Prestige ${nextPrestige}!`
    });
  });
};
const GET = async ({ request }) => {
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session?.user) throw error(401, "Not authenticated");
  const userId = Number(session.user.id);
  const [userProfile] = await db.select({
    id: user.id,
    name: user.name,
    username: user.username,
    bio: user.bio,
    image: user.image,
    createdAt: user.createdAt,
    baseCurrencyBalance: user.baseCurrencyBalance,
    isAdmin: user.isAdmin,
    loginStreak: user.loginStreak,
    prestigeLevel: user.prestigeLevel
  }).from(user).where(eq(user.id, userId)).limit(1);
  if (!userProfile) {
    throw error(404, "User not found");
  }
  const [portfolioStats] = await db.select({
    holdingsCount: sql`COUNT(*)`,
    holdingsValue: sql`COALESCE(SUM(CAST(${userPortfolio.quantity} AS NUMERIC) * CAST(${coin.currentPrice} AS NUMERIC)), 0)`
  }).from(userPortfolio).leftJoin(coin, eq(userPortfolio.coinId, coin.id)).where(eq(userPortfolio.userId, userId));
  const baseCurrencyBalance = Number(userProfile.baseCurrencyBalance);
  const holdingsValue = Number(portfolioStats?.holdingsValue || 0);
  const holdingsCount = Number(portfolioStats?.holdingsCount || 0);
  const totalPortfolioValue = baseCurrencyBalance + holdingsValue;
  return json({
    profile: {
      ...userProfile,
      baseCurrencyBalance,
      totalPortfolioValue,
      prestigeLevel: userProfile.prestigeLevel || 0
    },
    stats: {
      totalPortfolioValue,
      baseCurrencyBalance,
      holdingsValue,
      holdingsCount,
      coinsCreated: 0,
      totalTransactions: 0,
      totalBuyVolume: 0,
      totalSellVolume: 0,
      transactions24h: 0,
      buyVolume24h: 0,
      sellVolume24h: 0
    }
  });
};

export { GET, POST };
//# sourceMappingURL=_server.ts-DeEZTDIW.js.map
