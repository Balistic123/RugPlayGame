import { a as auth } from './auth-CA5qtupB.js';
import { e as error, j as json } from './index-DzcLzHBX.js';
import { d as db, e as coin, u as user, h as userPortfolio, t as transaction, l as priceHistory } from './index4-C6Efthht.js';
import { eq, and } from 'drizzle-orm';
import { c as client } from './redis-LTnnuEqD.js';
import { c as calculate24hMetrics, e as executeSellTrade } from './amm-C9rVEa8K.js';
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
import 'redis';
import './notification-BUUg7nEu.js';

async function POST({ params, request }) {
  const session = await auth.api.getSession({
    headers: request.headers
  });
  if (!session?.user) {
    throw error(401, "Not authenticated");
  }
  const { coinSymbol } = params;
  const { type, amount } = await request.json();
  if (!["BUY", "SELL"].includes(type)) {
    throw error(400, "Invalid transaction type");
  }
  if (!amount || typeof amount !== "number" || !Number.isFinite(amount) || amount <= 0) {
    throw error(400, "Invalid amount - must be a positive finite number");
  }
  if (amount > Number.MAX_SAFE_INTEGER) {
    throw error(400, "Amount too large");
  }
  const userId = Number(session.user.id);
  const normalizedSymbol = coinSymbol.toUpperCase();
  const [coinExists] = await db.select({ id: coin.id }).from(coin).where(eq(coin.symbol, normalizedSymbol)).limit(1);
  if (!coinExists) {
    throw error(404, "Coin not found");
  }
  return await db.transaction(async (tx) => {
    const [coinData] = await tx.select({
      id: coin.id,
      symbol: coin.symbol,
      name: coin.name,
      icon: coin.icon,
      currentPrice: coin.currentPrice,
      poolCoinAmount: coin.poolCoinAmount,
      poolBaseCurrencyAmount: coin.poolBaseCurrencyAmount,
      circulatingSupply: coin.circulatingSupply,
      isListed: coin.isListed,
      creatorId: coin.creatorId,
      tradingUnlocksAt: coin.tradingUnlocksAt,
      isLocked: coin.isLocked
    }).from(coin).where(eq(coin.symbol, normalizedSymbol)).for("update").limit(1);
    if (!coinData) {
      throw error(404, "Coin not found");
    }
    if (!coinData.isListed) {
      throw error(400, "This coin is delisted and cannot be traded");
    }
    if (coinData.isLocked && coinData.tradingUnlocksAt && userId !== coinData.creatorId) {
      const unlockTime = new Date(coinData.tradingUnlocksAt);
      if (/* @__PURE__ */ new Date() < unlockTime) {
        const remainingSeconds = Math.ceil((unlockTime.getTime() - Date.now()) / 1e3);
        throw error(400, `Trading is locked. Unlocks in ${remainingSeconds} seconds.`);
      }
      await tx.update(coin).set({ isLocked: false }).where(eq(coin.id, coinData.id));
    }
    const [userData] = await tx.select({
      baseCurrencyBalance: user.baseCurrencyBalance,
      username: user.username,
      image: user.image
    }).from(user).where(eq(user.id, userId)).for("update").limit(1);
    if (!userData) {
      throw error(404, "User not found");
    }
    const userBalance = Number(userData.baseCurrencyBalance);
    const poolCoinAmount = Number(coinData.poolCoinAmount);
    const poolBaseCurrencyAmount = Number(coinData.poolBaseCurrencyAmount);
    const currentPrice = Number(coinData.currentPrice);
    let newPrice;
    let totalCost;
    let priceImpact = 0;
    if (poolCoinAmount <= 0 || poolBaseCurrencyAmount <= 0) {
      throw error(400, "Liquidity pool is not properly initialized or is empty. Trading halted.");
    }
    if (type === "BUY") {
      const k = poolCoinAmount * poolBaseCurrencyAmount;
      const newPoolBaseCurrency = poolBaseCurrencyAmount + amount;
      const newPoolCoin = k / newPoolBaseCurrency;
      const coinsBought = poolCoinAmount - newPoolCoin;
      totalCost = amount;
      newPrice = newPoolBaseCurrency / newPoolCoin;
      priceImpact = (newPrice - currentPrice) / currentPrice * 100;
      if (userBalance < totalCost) {
        throw error(400, `Insufficient funds. You need *${totalCost.toFixed(6)} BUSS but only have *${userBalance.toFixed(6)} BUSS`);
      }
      if (coinsBought <= 0) {
        throw error(400, "Trade amount too small - would result in zero tokens");
      }
      await tx.update(user).set({
        baseCurrencyBalance: (userBalance - totalCost).toString(),
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq(user.id, userId));
      const [existingHolding] = await tx.select({ quantity: userPortfolio.quantity }).from(userPortfolio).where(and(
        eq(userPortfolio.userId, userId),
        eq(userPortfolio.coinId, coinData.id)
      )).limit(1);
      if (existingHolding) {
        const newQuantity = Number(existingHolding.quantity) + coinsBought;
        await tx.update(userPortfolio).set({
          quantity: newQuantity.toString(),
          updatedAt: /* @__PURE__ */ new Date()
        }).where(and(
          eq(userPortfolio.userId, userId),
          eq(userPortfolio.coinId, coinData.id)
        ));
      } else {
        await tx.insert(userPortfolio).values({
          userId,
          coinId: coinData.id,
          quantity: coinsBought.toString()
        });
      }
      await tx.insert(transaction).values({
        userId,
        coinId: coinData.id,
        type: "BUY",
        quantity: coinsBought.toString(),
        pricePerCoin: (totalCost / coinsBought).toString(),
        totalBaseCurrencyAmount: totalCost.toString()
      });
      await tx.insert(priceHistory).values({
        coinId: coinData.id,
        price: newPrice.toString()
      });
      const metrics = await calculate24hMetrics(coinData.id, newPrice);
      await tx.update(coin).set({
        currentPrice: newPrice.toString(),
        marketCap: (Number(coinData.circulatingSupply) * newPrice).toString(),
        poolCoinAmount: newPoolCoin.toString(),
        poolBaseCurrencyAmount: newPoolBaseCurrency.toString(),
        change24h: metrics.change24h.toString(),
        volume24h: metrics.volume24h.toString(),
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq(coin.id, coinData.id));
      const priceUpdateData = {
        currentPrice: newPrice,
        marketCap: Number(coinData.circulatingSupply) * newPrice,
        change24h: metrics.change24h,
        volume24h: metrics.volume24h,
        poolCoinAmount: newPoolCoin,
        poolBaseCurrencyAmount: newPoolBaseCurrency
      };
      const tradeData = {
        type: "BUY",
        username: userData.username,
        userImage: userData.image || "",
        amount: coinsBought,
        coinSymbol: normalizedSymbol,
        coinName: coinData.name,
        coinIcon: coinData.icon || "",
        totalValue: totalCost,
        price: newPrice,
        timestamp: Date.now(),
        userId: userId.toString()
      };
      await client.publish(`prices:${normalizedSymbol}`, JSON.stringify(priceUpdateData));
      await client.publish("trades:all", JSON.stringify({
        type: "all-trades",
        data: tradeData
      }));
      if (totalCost >= 1e3) {
        await client.publish("trades:large", JSON.stringify({
          type: "live-trade",
          data: tradeData
        }));
      }
      return json({
        success: true,
        type: "BUY",
        coinsBought,
        totalCost,
        newPrice,
        priceImpact,
        newBalance: userBalance - totalCost
      });
    } else {
      const [userHolding] = await tx.select({ quantity: userPortfolio.quantity }).from(userPortfolio).where(and(
        eq(userPortfolio.userId, userId),
        eq(userPortfolio.coinId, coinData.id)
      )).limit(1);
      if (!userHolding || Number(userHolding.quantity) < amount) {
        throw error(400, `Insufficient coins. You have ${userHolding ? Number(userHolding.quantity) : 0} but trying to sell ${amount}`);
      }
      const maxSellable = Math.floor(Number(coinData.poolCoinAmount) * 0.995);
      if (amount > maxSellable) {
        throw error(400, `Cannot sell more than 99.5% of pool tokens. Max sellable: ${maxSellable} tokens`);
      }
      const sellResult = await executeSellTrade(tx, coinData, userId, amount);
      if (!sellResult.success) {
        throw error(400, "Trade failed - insufficient liquidity or invalid parameters");
      }
      totalCost = sellResult.baseCurrencyReceived ?? 0;
      newPrice = sellResult.newPrice;
      priceImpact = sellResult.priceImpact;
      if (totalCost <= 0) {
        throw error(400, "Trade amount results in zero base currency received");
      }
      await tx.update(user).set({
        baseCurrencyBalance: (userBalance + totalCost).toString(),
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq(user.id, userId));
      const newQuantity = Number(userHolding.quantity) - amount;
      if (newQuantity > 1e-6) {
        await tx.update(userPortfolio).set({
          quantity: newQuantity.toString(),
          updatedAt: /* @__PURE__ */ new Date()
        }).where(and(
          eq(userPortfolio.userId, userId),
          eq(userPortfolio.coinId, coinData.id)
        ));
      } else {
        await tx.delete(userPortfolio).where(and(
          eq(userPortfolio.userId, userId),
          eq(userPortfolio.coinId, coinData.id)
        ));
      }
      const metrics = sellResult.metrics || await calculate24hMetrics(coinData.id, newPrice);
      const priceUpdateData = {
        currentPrice: newPrice,
        marketCap: Number(coinData.circulatingSupply) * newPrice,
        change24h: metrics.change24h,
        volume24h: metrics.volume24h,
        poolCoinAmount: sellResult.newPoolCoin,
        poolBaseCurrencyAmount: sellResult.newPoolBaseCurrency
      };
      const tradeData = {
        type: "SELL",
        username: userData.username,
        userImage: userData.image || "",
        amount,
        coinSymbol: normalizedSymbol,
        coinName: coinData.name,
        coinIcon: coinData.icon || "",
        totalValue: totalCost,
        price: newPrice,
        timestamp: Date.now(),
        userId: userId.toString()
      };
      await client.publish(`prices:${normalizedSymbol}`, JSON.stringify(priceUpdateData));
      await client.publish("trades:all", JSON.stringify({
        type: "all-trades",
        data: tradeData
      }));
      if (totalCost >= 1e3) {
        await client.publish("trades:large", JSON.stringify({
          type: "live-trade",
          data: tradeData
        }));
      }
      return json({
        success: true,
        type: "SELL",
        coinsSold: amount,
        totalReceived: totalCost,
        newPrice,
        priceImpact,
        newBalance: userBalance + totalCost
      });
    }
  });
}

export { POST };
//# sourceMappingURL=_server.ts-BxcM-7bp.js.map
