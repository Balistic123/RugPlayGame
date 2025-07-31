import { a as auth } from './auth-CA5qtupB.js';
import { e as error, j as json } from './index-DzcLzHBX.js';
import { d as db, u as user, p as predictionQuestion } from './index4-C6Efthht.js';
import { eq, count, and, gte } from 'drizzle-orm';
import { v as validateQuestion } from './ai-Dt9WSCpP.js';
import { i as isNameAppropriate } from './moderation-DqfE3f80.js';
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
import 'openai';
import 'openai/helpers/zod';

const MIN_BALANCE_REQUIRED = 1e5;
const MAX_QUESTIONS_PER_HOUR = 2;
const MIN_RESOLUTION_HOURS = 1;
const MAX_RESOLUTION_DAYS = 30;
const POST = async ({ request }) => {
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session?.user) throw error(401, "Not authenticated");
  const { question } = await request.json();
  const cleaned = (question ?? "").trim();
  if (cleaned.length < 10 || cleaned.length > 200) {
    return json({ error: "Question must be between 10 and 200 characters" }, { status: 400 });
  }
  if (!await isNameAppropriate(cleaned)) {
    return json({ error: "Question contains inappropriate content" }, { status: 400 });
  }
  const userId = Number(session.user.id);
  const now = /* @__PURE__ */ new Date();
  try {
    return await db.transaction(async (tx) => {
      const [userData] = await tx.select({ baseCurrencyBalance: user.baseCurrencyBalance }).from(user).where(eq(user.id, userId)).for("update").limit(1);
      if (!userData || Number(userData.baseCurrencyBalance) < MIN_BALANCE_REQUIRED) {
        throw new Error(`You need at least $${MIN_BALANCE_REQUIRED.toLocaleString()} to create questions`);
      }
      const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1e3);
      const [recentQuestions] = await tx.select({ count: count() }).from(predictionQuestion).where(and(
        eq(predictionQuestion.creatorId, userId),
        gte(predictionQuestion.createdAt, oneHourAgo)
      ));
      if (Number(recentQuestions.count) >= MAX_QUESTIONS_PER_HOUR) {
        throw new Error(`You can only create ${MAX_QUESTIONS_PER_HOUR} questions per hour`);
      }
      const validation = await validateQuestion(question);
      if (!validation.isValid) {
        throw new Error(`Question validation failed: ${validation.reason}`);
      }
      let finalResolutionDate;
      if (validation.suggestedResolutionDate && !isNaN(validation.suggestedResolutionDate.getTime())) {
        finalResolutionDate = validation.suggestedResolutionDate;
      } else {
        finalResolutionDate = new Date(now.getTime() + 24 * 60 * 60 * 1e3);
        console.warn("Using fallback resolution date (24h), AI suggested:", validation.suggestedResolutionDate);
      }
      const minResolutionDate = new Date(now.getTime() + MIN_RESOLUTION_HOURS * 60 * 60 * 1e3);
      const maxResolutionDate = new Date(now.getTime() + MAX_RESOLUTION_DAYS * 24 * 60 * 60 * 1e3);
      if (finalResolutionDate < minResolutionDate) {
        finalResolutionDate = minResolutionDate;
      } else if (finalResolutionDate > maxResolutionDate) {
        finalResolutionDate = maxResolutionDate;
      }
      const [newQuestion] = await tx.insert(predictionQuestion).values({
        creatorId: userId,
        question: question.trim(),
        resolutionDate: finalResolutionDate,
        requiresWebSearch: validation.requiresWebSearch,
        validationReason: validation.reason
      }).returning();
      return json({
        success: true,
        question: {
          id: newQuestion.id,
          question: newQuestion.question,
          resolutionDate: newQuestion.resolutionDate,
          requiresWebSearch: newQuestion.requiresWebSearch
        }
      });
    });
  } catch (e) {
    console.error("Question creation error:", e);
    return json({ error: e.message }, { status: 400 });
  }
};

export { POST };
//# sourceMappingURL=_server.ts-D6LlPA9h.js.map
