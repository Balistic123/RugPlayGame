import { a as auth } from './auth-CA5qtupB.js';
import { e as error, j as json } from './index-DzcLzHBX.js';
import { d as db, u as user, e as coin, h as userPortfolio } from './index4-C6Efthht.js';
import { eq } from 'drizzle-orm';
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

async function GET({ request }) {
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session?.user) {
    throw error(401, "Not authenticated");
  }
  const userId = Number(session.user.id);
  const [userData, holdings] = await Promise.all([
    db.select({ baseCurrencyBalance: user.baseCurrencyBalance }).from(user).where(eq(user.id, userId)).limit(1),
    db.select({
      quantity: userPortfolio.quantity,
      currentPrice: coin.currentPrice
    }).from(userPortfolio).innerJoin(coin, eq(userPortfolio.coinId, coin.id)).where(eq(userPortfolio.userId, userId))
  ]);
  if (!userData[0]) {
    throw error(404, "User not found");
  }
  let totalCoinValue = 0;
  for (const holding of holdings) {
    const quantity = Number(holding.quantity);
    const price = Number(holding.currentPrice);
    totalCoinValue += quantity * price;
  }
  const baseCurrencyBalance = Number(userData[0].baseCurrencyBalance);
  return json({
    baseCurrencyBalance,
    totalCoinValue,
    totalValue: baseCurrencyBalance + totalCoinValue,
    currency: "$"
  });
}

export { GET };
//# sourceMappingURL=_server.ts-DZdWVTeT.js.map
