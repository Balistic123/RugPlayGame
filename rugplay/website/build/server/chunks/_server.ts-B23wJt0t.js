import { a as auth } from './auth-CA5qtupB.js';
import { e as error, j as json } from './index-DzcLzHBX.js';
import { d as db, u as user } from './index4-C6Efthht.js';
import { eq } from 'drizzle-orm';
import { randomBytes } from 'crypto';
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

const POST = async ({ request }) => {
  const session = await auth.api.getSession({
    headers: request.headers
  });
  if (!session?.user) {
    throw error(401, "Not authenticated");
  }
  try {
    const { side, amount } = await request.json();
    if (!["heads", "tails"].includes(side)) {
      return json({ error: "Invalid side" }, { status: 400 });
    }
    if (!amount || amount <= 0 || !Number.isFinite(amount)) {
      return json({ error: "Invalid bet amount" }, { status: 400 });
    }
    if (amount > 1e6) {
      return json({ error: "Bet amount too large" }, { status: 400 });
    }
    const userId = Number(session.user.id);
    const result = await db.transaction(async (tx) => {
      const [userData] = await tx.select({ baseCurrencyBalance: user.baseCurrencyBalance }).from(user).where(eq(user.id, userId)).for("update").limit(1);
      const currentBalance = Number(userData.baseCurrencyBalance);
      const roundedAmount = Math.round(amount * 1e8) / 1e8;
      const roundedBalance = Math.round(currentBalance * 1e8) / 1e8;
      if (roundedAmount > roundedBalance) {
        throw new Error(`Insufficient funds. You need *${roundedAmount.toFixed(2)} but only have *${roundedBalance.toFixed(2)}`);
      }
      const gameResult = randomBytes(1)[0] < 128 ? "heads" : "tails";
      const won = gameResult === side;
      const multiplier = 2;
      const payout = won ? roundedAmount * multiplier : 0;
      const newBalance = roundedBalance - roundedAmount + payout;
      await tx.update(user).set({
        baseCurrencyBalance: newBalance.toFixed(8),
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq(user.id, userId));
      return {
        won,
        result: gameResult,
        newBalance,
        payout,
        amountWagered: roundedAmount
      };
    });
    return json(result);
  } catch (e) {
    console.error("Coinflip API error:", e);
    const errorMessage = e instanceof Error ? e.message : "Internal server error";
    return json({ error: errorMessage }, { status: 400 });
  }
};

export { POST };
//# sourceMappingURL=_server.ts-B23wJt0t.js.map
