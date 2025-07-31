import { a as auth } from './auth-CA5qtupB.js';
import { e as error, j as json } from './index-DzcLzHBX.js';
import { d as db, p as predictionQuestion, u as user, a as predictionBet } from './index4-C6Efthht.js';
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

const POST = async ({ params, request }) => {
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session?.user) throw error(401, "Not authenticated");
  const questionId = parseInt(params.id);
  const { side, amount } = await request.json();
  if (typeof side !== "boolean" || !amount || amount <= 0) {
    return json({ error: "Invalid bet parameters" }, { status: 400 });
  }
  const userId = Number(session.user.id);
  try {
    return await db.transaction(async (tx) => {
      const [questionData] = await tx.select({
        id: predictionQuestion.id,
        status: predictionQuestion.status,
        resolutionDate: predictionQuestion.resolutionDate,
        totalYesAmount: predictionQuestion.totalYesAmount,
        totalNoAmount: predictionQuestion.totalNoAmount
      }).from(predictionQuestion).where(eq(predictionQuestion.id, questionId)).for("update").limit(1);
      if (!questionData) {
        throw new Error("Question not found");
      }
      if (questionData.status !== "ACTIVE") {
        throw new Error("Question is not active for betting");
      }
      if (/* @__PURE__ */ new Date() >= new Date(questionData.resolutionDate)) {
        throw new Error("Question has reached resolution date");
      }
      const [userData] = await tx.select({ baseCurrencyBalance: user.baseCurrencyBalance }).from(user).where(eq(user.id, userId)).for("update").limit(1);
      if (!userData || Number(userData.baseCurrencyBalance) < amount) {
        throw new Error("Insufficient balance");
      }
      await tx.update(user).set({
        baseCurrencyBalance: (Number(userData.baseCurrencyBalance) - amount).toFixed(8),
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq(user.id, userId));
      const [newBet] = await tx.insert(predictionBet).values({
        userId,
        questionId,
        side,
        amount: amount.toFixed(8)
      }).returning();
      const currentYesAmount = Number(questionData.totalYesAmount);
      const currentNoAmount = Number(questionData.totalNoAmount);
      await tx.update(predictionQuestion).set({
        totalYesAmount: side ? (currentYesAmount + amount).toFixed(8) : currentYesAmount.toFixed(8),
        totalNoAmount: !side ? (currentNoAmount + amount).toFixed(8) : currentNoAmount.toFixed(8)
      }).where(eq(predictionQuestion.id, questionId));
      const newTotalYes = side ? currentYesAmount + amount : currentYesAmount;
      const newTotalNo = !side ? currentNoAmount + amount : currentNoAmount;
      const totalPool = newTotalYes + newTotalNo;
      const currentPotentialWinnings = side ? totalPool / newTotalYes * amount : totalPool / newTotalNo * amount;
      return json({
        success: true,
        bet: {
          id: newBet.id,
          side,
          amount,
          potentialWinnings: currentPotentialWinnings
        },
        newBalance: Number(userData.baseCurrencyBalance) - amount
      });
    });
  } catch (e) {
    console.error("Betting error:", e);
    return json({ error: e.message }, { status: 400 });
  }
};

export { POST };
//# sourceMappingURL=_server.ts-CMfl--an.js.map
