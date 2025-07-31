import { e as error, j as json } from './index-DzcLzHBX.js';
import { d as db, u as user, e as coin, h as userPortfolio, t as transaction } from './index4-C6Efthht.js';
import { eq, desc, sql, count, and, gte } from 'drizzle-orm';
import 'drizzle-orm/postgres-js';
import 'postgres';
import './shared-server-BfUoNEXY.js';
import 'drizzle-orm/pg-core';

async function GET({ params }) {
  const { userId } = params;
  if (!userId) {
    throw error(400, "User ID or username is required");
  }
  try {
    const isNumeric = /^\d+$/.test(userId);
    const userProfile = await db.query.user.findFirst({
      where: isNumeric ? eq(user.id, parseInt(userId)) : eq(user.username, userId),
      columns: {
        id: true,
        name: true,
        username: true,
        bio: true,
        image: true,
        createdAt: true,
        baseCurrencyBalance: true,
        isAdmin: true,
        loginStreak: true,
        prestigeLevel: true
      }
    });
    if (!userProfile) {
      throw error(404, "User not found");
    }
    const actualUserId = userProfile.id;
    const createdCoins = await db.select({
      id: coin.id,
      name: coin.name,
      symbol: coin.symbol,
      icon: coin.icon,
      currentPrice: coin.currentPrice,
      marketCap: coin.marketCap,
      volume24h: coin.volume24h,
      change24h: coin.change24h,
      createdAt: coin.createdAt
    }).from(coin).where(eq(coin.creatorId, actualUserId)).orderBy(desc(coin.createdAt)).limit(10);
    const portfolioHoldings = await db.select({
      quantity: userPortfolio.quantity,
      currentPrice: coin.currentPrice
    }).from(userPortfolio).innerJoin(coin, eq(userPortfolio.coinId, coin.id)).where(eq(userPortfolio.userId, actualUserId));
    const holdingsValue = portfolioHoldings.reduce((total, holding) => {
      const quantity = Number(holding.quantity);
      const price = Number(holding.currentPrice);
      return total + quantity * price;
    }, 0);
    const portfolioStats = {
      holdingsCount: portfolioHoldings.length,
      totalValue: holdingsValue
    };
    const recentTransactions = await db.select({
      id: transaction.id,
      type: transaction.type,
      coinSymbol: coin.symbol,
      coinName: coin.name,
      coinIcon: coin.icon,
      quantity: transaction.quantity,
      pricePerCoin: transaction.pricePerCoin,
      totalBaseCurrencyAmount: transaction.totalBaseCurrencyAmount,
      timestamp: transaction.timestamp,
      senderUsername: sql`(SELECT username FROM ${user} WHERE id = ${transaction.senderUserId})`,
      recipientUsername: sql`(SELECT username FROM ${user} WHERE id = ${transaction.recipientUserId})`,
      senderUserId: transaction.senderUserId,
      recipientUserId: transaction.recipientUserId
    }).from(transaction).innerJoin(coin, eq(transaction.coinId, coin.id)).where(eq(transaction.userId, actualUserId)).orderBy(desc(transaction.timestamp)).limit(10);
    const baseCurrencyBalance = parseFloat(userProfile.baseCurrencyBalance);
    const calculatedHoldingsValue = portfolioStats.totalValue || 0;
    const totalPortfolioValue = baseCurrencyBalance + calculatedHoldingsValue;
    const transactionStats = await db.select({
      totalTransactions: count(),
      totalBuyVolume: sql`COALESCE(SUM(CASE WHEN ${transaction.type} = 'BUY' THEN CAST(${transaction.totalBaseCurrencyAmount} AS NUMERIC) ELSE 0 END), 0)`,
      totalSellVolume: sql`COALESCE(SUM(CASE WHEN ${transaction.type} = 'SELL' THEN CAST(${transaction.totalBaseCurrencyAmount} AS NUMERIC) ELSE 0 END), 0)`
    }).from(transaction).where(eq(transaction.userId, actualUserId));
    const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1e3);
    const transactionStats24h = await db.select({
      transactions24h: count(),
      buyVolume24h: sql`COALESCE(SUM(CASE WHEN ${transaction.type} = 'BUY' THEN CAST(${transaction.totalBaseCurrencyAmount} AS NUMERIC) ELSE 0 END), 0)`,
      sellVolume24h: sql`COALESCE(SUM(CASE WHEN ${transaction.type} = 'SELL' THEN CAST(${transaction.totalBaseCurrencyAmount} AS NUMERIC) ELSE 0 END), 0)`
    }).from(transaction).where(
      and(
        eq(transaction.userId, actualUserId),
        gte(transaction.timestamp, twentyFourHoursAgo)
      )
    );
    return json({
      profile: {
        ...userProfile,
        baseCurrencyBalance,
        totalPortfolioValue
      },
      stats: {
        totalPortfolioValue,
        baseCurrencyBalance,
        holdingsValue: calculatedHoldingsValue,
        holdingsCount: portfolioStats.holdingsCount || 0,
        coinsCreated: createdCoins.length,
        totalTransactions: transactionStats[0]?.totalTransactions || 0,
        totalBuyVolume: transactionStats[0]?.totalBuyVolume || 0,
        totalSellVolume: transactionStats[0]?.totalSellVolume || 0,
        transactions24h: transactionStats24h[0]?.transactions24h || 0,
        buyVolume24h: transactionStats24h[0]?.buyVolume24h || 0,
        sellVolume24h: transactionStats24h[0]?.sellVolume24h || 0
      },
      createdCoins,
      recentTransactions
    });
  } catch (e) {
    console.error("Failed to fetch user profile:", e);
    throw error(500, "Failed to fetch user profile");
  }
}

export { GET };
//# sourceMappingURL=_server.ts-CAfcPEa5.js.map
