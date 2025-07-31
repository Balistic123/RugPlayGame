import { j as json } from './index-DzcLzHBX.js';
import { d as db, t as transaction, e as coin, u as user } from './index4-C6Efthht.js';
import { eq, gte, desc } from 'drizzle-orm';
import { v as validateSearchParams } from './validation-CO41QrVa.js';
import 'drizzle-orm/postgres-js';
import 'postgres';
import './shared-server-BfUoNEXY.js';
import 'drizzle-orm/pg-core';

async function GET({ url }) {
  const params = validateSearchParams(url.searchParams);
  const requestedLimit = params.getPositiveInt("limit", 100);
  const limit = Math.min(requestedLimit, 1e3);
  const minValue = params.getNonNegativeFloat("minValue", 0);
  try {
    const trades = await db.select({
      type: transaction.type,
      username: user.username,
      userImage: user.image,
      amount: transaction.quantity,
      coinSymbol: coin.symbol,
      coinName: coin.name,
      coinIcon: coin.icon,
      totalValue: transaction.totalBaseCurrencyAmount,
      price: transaction.pricePerCoin,
      timestamp: transaction.timestamp,
      userId: transaction.userId
    }).from(transaction).innerJoin(user, eq(user.id, transaction.userId)).innerJoin(coin, eq(coin.id, transaction.coinId)).where(
      minValue > 0 ? gte(transaction.totalBaseCurrencyAmount, minValue.toString()) : void 0
    ).orderBy(desc(transaction.timestamp)).limit(limit);
    const formattedTrades = trades.map((trade) => ({
      type: trade.type,
      username: trade.username,
      userImage: trade.userImage,
      amount: Number(trade.amount),
      coinSymbol: trade.coinSymbol,
      coinName: trade.coinName,
      coinIcon: trade.coinIcon,
      totalValue: Number(trade.totalValue),
      price: Number(trade.price),
      timestamp: trade.timestamp.getTime(),
      userId: trade.userId?.toString() ?? ""
    }));
    return json({ trades: formattedTrades });
  } catch (error) {
    console.error("Error fetching recent trades:", error);
    return json({ trades: [] });
  }
}

export { GET };
//# sourceMappingURL=_server.ts-BzWMLds_.js.map
