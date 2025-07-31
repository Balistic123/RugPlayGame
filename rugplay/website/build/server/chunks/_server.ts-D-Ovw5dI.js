import { j as json } from './index-DzcLzHBX.js';
import { e as coin, d as db, u as user } from './index4-C6Efthht.js';
import { eq, or, ilike, gte, between, lte, and, asc, desc, count } from 'drizzle-orm';
import 'drizzle-orm/postgres-js';
import 'postgres';
import './shared-server-BfUoNEXY.js';
import 'drizzle-orm/pg-core';

const VALID_SORT_FIELDS = ["marketCap", "currentPrice", "change24h", "volume24h", "createdAt"];
const VALID_SORT_ORDERS = ["asc", "desc"];
const PRICE_FILTERS = {
  ALL: "all",
  UNDER_1: "under1",
  BETWEEN_1_TO_10: "1to10",
  BETWEEN_10_TO_100: "10to100",
  OVER_100: "over100"
};
const CHANGE_FILTERS = {
  ALL: "all",
  GAINERS: "gainers",
  LOSERS: "losers",
  HOT: "hot",
  WILD: "wild"
};
const PRICE_RANGES = {
  ONE: "1.00000000",
  TEN: "10.00000000",
  HUNDRED: "100.00000000"
};
const CHANGE_THRESHOLDS = {
  ZERO: "0.0000",
  MODERATE: "10.0000",
  MODERATE_NEGATIVE: "-10.0000",
  EXTREME: "50.0000",
  EXTREME_NEGATIVE: "-50.0000"
};
async function GET({ url }) {
  const searchQuery = url.searchParams.get("search") || "";
  const sortBy = url.searchParams.get("sortBy") || "marketCap";
  const sortOrder = url.searchParams.get("sortOrder") || "desc";
  const priceFilter = url.searchParams.get("priceFilter") || "all";
  const changeFilter = url.searchParams.get("changeFilter") || "all";
  const page = parseInt(url.searchParams.get("page") || "1");
  const limit = parseInt(url.searchParams.get("limit") || "12");
  if (!VALID_SORT_FIELDS.includes(sortBy) || !VALID_SORT_ORDERS.includes(sortOrder)) {
    return json({ error: "Invalid sort parameters" }, { status: 400 });
  }
  if (page < 1 || limit < 1 || limit > 100) {
    return json({ error: "Invalid pagination parameters" }, { status: 400 });
  }
  if (!Object.values(PRICE_FILTERS).includes(priceFilter) || !Object.values(CHANGE_FILTERS).includes(changeFilter)) {
    return json({ error: "Invalid filter parameters" }, { status: 400 });
  }
  try {
    const conditions = [eq(coin.isListed, true)];
    if (searchQuery) {
      conditions.push(
        or(
          ilike(coin.name, `%${searchQuery}%`),
          ilike(coin.symbol, `%${searchQuery}%`)
        )
      );
    }
    switch (priceFilter) {
      case PRICE_FILTERS.UNDER_1:
        conditions.push(lte(coin.currentPrice, PRICE_RANGES.ONE));
        break;
      case PRICE_FILTERS.BETWEEN_1_TO_10:
        conditions.push(between(coin.currentPrice, PRICE_RANGES.ONE, PRICE_RANGES.TEN));
        break;
      case PRICE_FILTERS.BETWEEN_10_TO_100:
        conditions.push(between(coin.currentPrice, PRICE_RANGES.TEN, PRICE_RANGES.HUNDRED));
        break;
      case PRICE_FILTERS.OVER_100:
        conditions.push(gte(coin.currentPrice, PRICE_RANGES.HUNDRED));
        break;
    }
    switch (changeFilter) {
      case CHANGE_FILTERS.GAINERS:
        conditions.push(gte(coin.change24h, CHANGE_THRESHOLDS.ZERO));
        break;
      case CHANGE_FILTERS.LOSERS:
        conditions.push(lte(coin.change24h, CHANGE_THRESHOLDS.ZERO));
        break;
      case CHANGE_FILTERS.HOT:
        conditions.push(
          or(
            gte(coin.change24h, CHANGE_THRESHOLDS.MODERATE),
            lte(coin.change24h, CHANGE_THRESHOLDS.MODERATE_NEGATIVE)
          )
        );
        break;
      case CHANGE_FILTERS.WILD:
        conditions.push(
          or(
            gte(coin.change24h, CHANGE_THRESHOLDS.EXTREME),
            lte(coin.change24h, CHANGE_THRESHOLDS.EXTREME_NEGATIVE)
          )
        );
        break;
    }
    const whereCondition = and(...conditions);
    const orderFn = sortOrder === "asc" ? asc : desc;
    const sortColumn = (() => {
      switch (sortBy) {
        case "marketCap":
          return coin.marketCap;
        case "currentPrice":
          return coin.currentPrice;
        case "change24h":
          return coin.change24h;
        case "volume24h":
          return coin.volume24h;
        case "createdAt":
          return coin.createdAt;
        default:
          return coin.marketCap;
      }
    })();
    const [[{ total }], coins] = await Promise.all([
      db.select({ total: count() }).from(coin).where(whereCondition),
      db.select({
        symbol: coin.symbol,
        name: coin.name,
        icon: coin.icon,
        currentPrice: coin.currentPrice,
        marketCap: coin.marketCap,
        volume24h: coin.volume24h,
        change24h: coin.change24h,
        createdAt: coin.createdAt,
        creatorName: user.name
      }).from(coin).leftJoin(user, eq(coin.creatorId, user.id)).where(whereCondition).orderBy(orderFn(sortColumn)).limit(limit).offset((page - 1) * limit)
    ]);
    const formattedCoins = coins.map((c) => ({
      symbol: c.symbol,
      name: c.name,
      icon: c.icon,
      currentPrice: Number(c.currentPrice),
      marketCap: Number(c.marketCap),
      volume24h: Number(c.volume24h),
      change24h: Number(c.change24h),
      createdAt: c.createdAt,
      creatorName: c.creatorName
    }));
    return json({
      coins: formattedCoins,
      total: total || 0,
      page,
      limit,
      totalPages: Math.ceil((total || 0) / limit)
    });
  } catch (e) {
    console.error("Error fetching market data:", e);
    return json({ error: "Failed to fetch market data" }, { status: 500 });
  }
}

export { GET };
//# sourceMappingURL=_server.ts-D-Ovw5dI.js.map
