import { j as json } from './index-DzcLzHBX.js';
import { d as db, u as user, h as userPortfolio, e as coin, t as transaction } from './index4-C6Efthht.js';
import { sql, eq, ilike, desc, count, gte, inArray } from 'drizzle-orm';
import 'drizzle-orm/postgres-js';
import 'postgres';
import './shared-server-BfUoNEXY.js';
import 'drizzle-orm/pg-core';

async function getLeaderboardData() {
  try {
    const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1e3);
    const topRugpullers = await db.select({
      userId: user.id,
      username: user.username,
      name: user.name,
      image: user.image,
      totalSold: sql`COALESCE(SUM(CASE WHEN ${transaction.type} = 'SELL' THEN CAST(${transaction.totalBaseCurrencyAmount} AS NUMERIC) ELSE 0 END), 0)`,
      totalBought: sql`COALESCE(SUM(CASE WHEN ${transaction.type} = 'BUY' THEN CAST(${transaction.totalBaseCurrencyAmount} AS NUMERIC) ELSE 0 END), 0)`
    }).from(transaction).innerJoin(user, eq(transaction.userId, user.id)).where(gte(transaction.timestamp, twentyFourHoursAgo)).groupBy(user.id, user.username, user.name, user.image).orderBy(desc(sql`SUM(CASE WHEN ${transaction.type} = 'SELL' THEN CAST(${transaction.totalBaseCurrencyAmount} AS NUMERIC) ELSE 0 END) - SUM(CASE WHEN ${transaction.type} = 'BUY' THEN CAST(${transaction.totalBaseCurrencyAmount} AS NUMERIC) ELSE 0 END)`)).limit(10);
    const userTransactions = await db.select({
      userId: user.id,
      username: user.username,
      name: user.name,
      image: user.image,
      type: transaction.type,
      coinId: transaction.coinId,
      totalAmount: sql`CAST(${transaction.totalBaseCurrencyAmount} AS NUMERIC)`,
      quantity: sql`CAST(${transaction.quantity} AS NUMERIC)`
    }).from(transaction).innerJoin(user, eq(transaction.userId, user.id)).where(gte(transaction.timestamp, twentyFourHoursAgo));
    const userNetCalculations = /* @__PURE__ */ new Map();
    for (const tx of userTransactions) {
      if (!userNetCalculations.has(tx.userId)) {
        userNetCalculations.set(tx.userId, {
          userId: tx.userId,
          username: tx.username,
          name: tx.name,
          image: tx.image,
          totalBought: 0,
          totalSold: 0,
          coinHoldings: /* @__PURE__ */ new Map()
        });
      }
      const userData = userNetCalculations.get(tx.userId);
      if (tx.type === "BUY") {
        userData.totalBought += Number(tx.totalAmount);
        const currentHolding = userData.coinHoldings.get(tx.coinId) || 0;
        userData.coinHoldings.set(tx.coinId, currentHolding + Number(tx.quantity));
      } else {
        userData.totalSold += Number(tx.totalAmount);
        const currentHolding = userData.coinHoldings.get(tx.coinId) || 0;
        userData.coinHoldings.set(tx.coinId, currentHolding - Number(tx.quantity));
      }
    }
    const uniqueCoinIds = /* @__PURE__ */ new Set();
    for (const userData of userNetCalculations.values()) {
      for (const [coinId] of userData.coinHoldings.entries()) {
        uniqueCoinIds.add(coinId);
      }
    }
    const coinPrices = /* @__PURE__ */ new Map();
    if (uniqueCoinIds.size > 0) {
      const coinPricesData = await db.select({ id: coin.id, currentPrice: coin.currentPrice }).from(coin).where(inArray(coin.id, Array.from(uniqueCoinIds)));
      for (const coinData of coinPricesData) {
        coinPrices.set(coinData.id, Number(coinData.currentPrice || 0));
      }
    }
    const biggestLosersData = [];
    for (const userData of userNetCalculations.values()) {
      let currentHoldingsValue = 0;
      for (const [coinId, quantity] of userData.coinHoldings.entries()) {
        if (quantity > 0) {
          const price = coinPrices.get(coinId) || 0;
          currentHoldingsValue += quantity * price;
        }
      }
      const netLoss = userData.totalBought - userData.totalSold - currentHoldingsValue;
      if (netLoss > 0) {
        biggestLosersData.push({
          userId: userData.userId,
          username: userData.username,
          name: userData.name,
          image: userData.image,
          moneySpent: userData.totalBought,
          moneyReceived: userData.totalSold,
          currentValue: currentHoldingsValue,
          totalLoss: netLoss
        });
      }
    }
    const [cashKings, paperMillionaires] = await Promise.all([
      db.select({
        userId: user.id,
        username: user.username,
        name: user.name,
        image: user.image,
        baseCurrencyBalance: user.baseCurrencyBalance,
        coinValue: sql`COALESCE(SUM(CAST(${userPortfolio.quantity} AS NUMERIC) * CAST(${coin.currentPrice} AS NUMERIC)), 0)`
      }).from(user).leftJoin(userPortfolio, eq(userPortfolio.userId, user.id)).leftJoin(coin, eq(coin.id, userPortfolio.coinId)).groupBy(user.id, user.username, user.name, user.image, user.baseCurrencyBalance).orderBy(desc(sql`CAST(${user.baseCurrencyBalance} AS NUMERIC)`)).limit(10),
      db.select({
        userId: user.id,
        username: user.username,
        name: user.name,
        image: user.image,
        baseCurrencyBalance: user.baseCurrencyBalance,
        coinValue: sql`COALESCE(SUM(CAST(${userPortfolio.quantity} AS NUMERIC) * CAST(${coin.currentPrice} AS NUMERIC)), 0)`
      }).from(user).leftJoin(userPortfolio, eq(userPortfolio.userId, user.id)).leftJoin(coin, eq(coin.id, userPortfolio.coinId)).groupBy(user.id, user.username, user.name, user.image, user.baseCurrencyBalance).orderBy(desc(sql`CAST(${user.baseCurrencyBalance} AS NUMERIC) + COALESCE(SUM(CAST(${userPortfolio.quantity} AS NUMERIC) * CAST(${coin.currentPrice} AS NUMERIC)), 0)`)).limit(10)
    ]);
    const processUser = (user2) => {
      const baseCurrencyBalance = Number(user2.baseCurrencyBalance);
      const coinValue = Number(user2.coinValue);
      const totalPortfolioValue = baseCurrencyBalance + coinValue;
      return {
        ...user2,
        baseCurrencyBalance,
        coinValue,
        totalPortfolioValue,
        liquidityRatio: totalPortfolioValue > 0 ? baseCurrencyBalance / totalPortfolioValue : 0
      };
    };
    const processedRugpullers = topRugpullers.map((user2) => ({ ...user2, totalExtracted: Number(user2.totalSold) - Number(user2.totalBought) })).filter((user2) => user2.totalExtracted > 0);
    const aggregatedLosers = biggestLosersData.sort((a, b) => b.totalLoss - a.totalLoss).slice(0, 10);
    const processedCashKings = cashKings.map(processUser);
    const processedPaperMillionaires = paperMillionaires.map(processUser);
    return json({
      topRugpullers: processedRugpullers,
      biggestLosers: aggregatedLosers,
      cashKings: processedCashKings,
      paperMillionaires: processedPaperMillionaires
    });
  } catch (error) {
    console.error("Failed to fetch leaderboard data:", error);
    return json({
      topRugpullers: [],
      biggestLosers: [],
      cashKings: [],
      paperMillionaires: []
    });
  }
}
async function getSearchedUsers(query, limit = 9, offset = 0) {
  try {
    const results = await db.select({
      id: user.id,
      name: user.name,
      username: user.username,
      image: user.image,
      bio: user.bio,
      baseCurrencyBalance: user.baseCurrencyBalance,
      coinValue: sql`COALESCE(SUM(CAST(${userPortfolio.quantity} AS NUMERIC) * CAST(${coin.currentPrice} AS NUMERIC)), 0)`,
      totalPortfolioValue: sql`CAST(${user.baseCurrencyBalance} AS NUMERIC) + COALESCE(SUM(CAST(${userPortfolio.quantity} AS NUMERIC) * CAST(${coin.currentPrice} AS NUMERIC)), 0)`,
      createdAt: user.createdAt
    }).from(user).leftJoin(userPortfolio, eq(userPortfolio.userId, user.id)).leftJoin(coin, eq(coin.id, userPortfolio.coinId)).groupBy(user.id, user.name, user.username, user.image, user.bio, user.baseCurrencyBalance).where(ilike(user.username, `%${query}%`)).orderBy(desc(user.username)).limit(limit).offset(offset);
    const total = await db.select({ count: count() }).from(user).where(ilike(user.username, `%${query}%`)).limit(1);
    return {
      results,
      total: total[0].count
    };
  } catch (error) {
    return {
      results: [],
      total: 0
    };
  }
}
async function GET({ url }) {
  const query = url.searchParams.get("search");
  if (query?.trim() !== "" && query !== null) {
    const limit = parseInt(url.searchParams.get("limit") || "9");
    const offset = parseInt(url.searchParams.get("offset") || "0");
    let users = await getSearchedUsers(query, limit, offset);
    return json(users);
  }
  return await getLeaderboardData();
}

export { GET };
//# sourceMappingURL=_server.ts-Dkw0L_ww.js.map
