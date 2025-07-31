import { a as auth } from './auth-CA5qtupB.js';
import { d as db, u as user, p as predictionQuestion, a as predictionBet, b as accountDeletionRequest, t as transaction, c as comment, e as coin, s as session, f as account, g as promoCodeRedemption, h as userPortfolio, i as commentLike } from './index4-C6Efthht.js';
import { eq, and, lte, isNull } from 'drizzle-orm';
import { g as getRugplayData, r as resolveQuestion } from './ai-Dt9WSCpP.js';
import { c as createNotification } from './notification-BUUg7nEu.js';
import { f as formatValue } from './utils2-CLIgW4-x.js';
import { svelteKitHandler } from 'better-auth/svelte-kit';
import { c as client } from './redis-LTnnuEqD.js';
import { r as redirect } from './index-DzcLzHBX.js';
import './volume-settings-DX3g8058.js';
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
import './clsx-ChV9xqsO.js';
import './index2-D4eROfHK.js';
import 'redis';

const MINES_SESSION_PREFIX = "mines:session:";
const getSessionKey = (token) => `${MINES_SESSION_PREFIX}${token}`;
async function minesCleanupInactiveGames() {
  const now = Date.now();
  const keys = [];
  let cursor = "0";
  do {
    const scanResult = await client.scan(cursor, { MATCH: `${MINES_SESSION_PREFIX}*` });
    cursor = scanResult.cursor;
    keys.push(...scanResult.keys);
  } while (cursor !== "0");
  for (const key of keys) {
    const sessionRaw = await client.get(key);
    if (!sessionRaw) continue;
    const game = JSON.parse(sessionRaw);
    if (now - game.lastActivity > 5 * 60 * 1e3) {
      if (game.revealedTiles.length === 0) {
        try {
          const [userData] = await db.select({ baseCurrencyBalance: user.baseCurrencyBalance }).from(user).where(eq(user.id, game.userId)).for("update").limit(1);
          const currentBalance = Number(userData.baseCurrencyBalance);
          const newBalance = Math.round((currentBalance + game.betAmount) * 1e8) / 1e8;
          await db.update(user).set({
            baseCurrencyBalance: newBalance.toFixed(8),
            updatedAt: /* @__PURE__ */ new Date()
          }).where(eq(user.id, game.userId));
        } catch (error) {
          console.error(`Failed to refund inactive game ${game.sessionToken}:`, error);
        }
      }
      await client.del(getSessionKey(game.sessionToken));
    }
  }
}
async function minesAutoCashout() {
  const now = Date.now();
  const keys = [];
  let cursor = "0";
  do {
    const scanResult = await client.scan(cursor, { MATCH: `${MINES_SESSION_PREFIX}*` });
    cursor = scanResult.cursor;
    keys.push(...scanResult.keys);
  } while (cursor !== "0");
  for (const key of keys) {
    const sessionRaw = await client.get(key);
    if (!sessionRaw) continue;
    const game = JSON.parse(sessionRaw);
    if (game.status === "active" && game.revealedTiles.length > 0 && now - game.lastActivity > 2e4 && !game.revealedTiles.some((idx) => game.minePositions.includes(idx))) {
      try {
        const [userData] = await db.select({ baseCurrencyBalance: user.baseCurrencyBalance }).from(user).where(eq(user.id, game.userId)).for("update").limit(1);
        const currentBalance = Number(userData.baseCurrencyBalance);
        const payout = game.betAmount * game.currentMultiplier;
        const roundedPayout = Math.round(payout * 1e8) / 1e8;
        const newBalance = Math.round((currentBalance + roundedPayout) * 1e8) / 1e8;
        await db.update(user).set({
          baseCurrencyBalance: newBalance.toFixed(8),
          updatedAt: /* @__PURE__ */ new Date()
        }).where(eq(user.id, game.userId));
        await client.del(getSessionKey(game.sessionToken));
      } catch (error) {
        console.error(`Failed to auto cashout game ${game.sessionToken}:`, error);
      }
    }
  }
}
async function resolveExpiredQuestions() {
  const now = /* @__PURE__ */ new Date();
  try {
    const expiredQuestions = await db.select({
      id: predictionQuestion.id,
      question: predictionQuestion.question,
      requiresWebSearch: predictionQuestion.requiresWebSearch,
      totalYesAmount: predictionQuestion.totalYesAmount,
      totalNoAmount: predictionQuestion.totalNoAmount
    }).from(predictionQuestion).where(and(
      eq(predictionQuestion.status, "ACTIVE"),
      lte(predictionQuestion.resolutionDate, now),
      isNull(predictionQuestion.aiResolution)
    ));
    console.log(`Found ${expiredQuestions.length} questions to resolve`);
    for (const question of expiredQuestions) {
      try {
        console.log(`Resolving question: ${question.question}`);
        const rugplayData = await getRugplayData();
        const resolution = await resolveQuestion(
          question.question,
          question.requiresWebSearch,
          rugplayData
        );
        if (resolution.confidence < 50) {
          console.log(`Cancelling question ${question.id} due to low confidence: ${resolution.confidence}`);
          await db.transaction(async (tx) => {
            await tx.update(predictionQuestion).set({
              status: "CANCELLED",
              resolvedAt: now
            }).where(eq(predictionQuestion.id, question.id));
            const bets = await tx.select({
              id: predictionBet.id,
              userId: predictionBet.userId,
              side: predictionBet.side,
              amount: predictionBet.amount
            }).from(predictionBet).where(and(
              eq(predictionBet.questionId, question.id),
              isNull(predictionBet.settledAt)
            ));
            const notificationsToCreate = [];
            for (const bet of bets) {
              const refundAmount = Number(bet.amount);
              await tx.update(predictionBet).set({
                actualWinnings: refundAmount.toFixed(8),
                settledAt: now
              }).where(eq(predictionBet.id, bet.id));
              if (bet.userId !== null) {
                const [userData] = await tx.select({ baseCurrencyBalance: user.baseCurrencyBalance }).from(user).where(eq(user.id, bet.userId)).limit(1);
                if (userData) {
                  const newBalance = Number(userData.baseCurrencyBalance) + refundAmount;
                  await tx.update(user).set({
                    baseCurrencyBalance: newBalance.toFixed(8),
                    updatedAt: now
                  }).where(eq(user.id, bet.userId));
                }
                notificationsToCreate.push({
                  userId: bet.userId,
                  amount: refundAmount
                });
              }
            }
            for (const notifData of notificationsToCreate) {
              const { userId, amount } = notifData;
              const title = "Prediction skipped 🥀";
              const message = `You received a full refund of ${formatValue(amount)} for "${question.question}". We recommend betting on more reliable predictions!`;
              await createNotification(
                userId.toString(),
                "HOPIUM",
                title,
                message,
                `/hopium/${question.id}`
              );
            }
          });
          continue;
        }
        await db.transaction(async (tx) => {
          await tx.update(predictionQuestion).set({
            status: "RESOLVED",
            aiResolution: resolution.resolution,
            resolvedAt: now
          }).where(eq(predictionQuestion.id, question.id));
          const bets = await tx.select({
            id: predictionBet.id,
            userId: predictionBet.userId,
            side: predictionBet.side,
            amount: predictionBet.amount
          }).from(predictionBet).where(and(
            eq(predictionBet.questionId, question.id),
            isNull(predictionBet.settledAt)
          ));
          const totalPool = Number(question.totalYesAmount) + Number(question.totalNoAmount);
          const winningSideTotal = resolution.resolution ? Number(question.totalYesAmount) : Number(question.totalNoAmount);
          const notificationsToCreate = [];
          for (const bet of bets) {
            const won = bet.side === resolution.resolution;
            const winnings = won && winningSideTotal > 0 ? totalPool / winningSideTotal * Number(bet.amount) : 0;
            await tx.update(predictionBet).set({
              actualWinnings: winnings.toFixed(8),
              settledAt: now
            }).where(eq(predictionBet.id, bet.id));
            if (won && winnings > 0 && bet.userId !== null) {
              const [userData] = await tx.select({ baseCurrencyBalance: user.baseCurrencyBalance }).from(user).where(eq(user.id, bet.userId)).limit(1);
              if (userData) {
                const newBalance = Number(userData.baseCurrencyBalance) + winnings;
                await tx.update(user).set({
                  baseCurrencyBalance: newBalance.toFixed(8),
                  updatedAt: now
                }).where(eq(user.id, bet.userId));
              }
            }
            if (bet.userId !== null) {
              notificationsToCreate.push({
                userId: bet.userId,
                amount: Number(bet.amount),
                winnings,
                won
              });
            }
          }
          for (const notifData of notificationsToCreate) {
            const { userId, amount, winnings, won } = notifData;
            const title = won ? "Prediction won! 🎉" : "Prediction lost ;(";
            const message = won ? `You won ${formatValue(winnings)} on "${question.question}"` : `You lost ${formatValue(amount)} on "${question.question}"`;
            await createNotification(
              userId.toString(),
              "HOPIUM",
              title,
              message,
              `/hopium/${question.id}`
            );
          }
        });
      } catch (error) {
        console.error(`Failed to resolve question ${question.id}:`, error);
      }
    }
  } catch (error) {
    console.error("Error in resolveExpiredQuestions:", error);
  }
}
async function processAccountDeletions() {
  const now = /* @__PURE__ */ new Date();
  try {
    const expiredRequests = await db.select().from(accountDeletionRequest).where(
      and(
        lte(accountDeletionRequest.scheduledDeletionAt, now),
        eq(accountDeletionRequest.isProcessed, false)
      )
    );
    console.log(`🗑️ Processing ${expiredRequests.length} expired account deletion requests`);
    for (const request of expiredRequests) {
      try {
        await db.transaction(async (tx) => {
          const userId = request.userId;
          await tx.update(transaction).set({ userId: null }).where(eq(transaction.userId, userId));
          await tx.update(comment).set({ userId: null, content: "[deleted]", isDeleted: true }).where(eq(comment.userId, userId));
          await tx.update(predictionBet).set({ userId: null }).where(eq(predictionBet.userId, userId));
          await tx.update(predictionQuestion).set({ creatorId: null }).where(eq(predictionQuestion.creatorId, userId));
          await tx.update(coin).set({ creatorId: null }).where(eq(coin.creatorId, userId));
          await tx.delete(session).where(eq(session.userId, userId));
          await tx.delete(account).where(eq(account.userId, userId));
          await tx.delete(promoCodeRedemption).where(eq(promoCodeRedemption.userId, userId));
          await tx.delete(userPortfolio).where(eq(userPortfolio.userId, userId));
          await tx.delete(commentLike).where(eq(commentLike.userId, userId));
          await tx.update(accountDeletionRequest).set({ isProcessed: true }).where(eq(accountDeletionRequest.id, request.id));
          await tx.delete(user).where(eq(user.id, userId));
        });
        console.log(`✅ Successfully processed account deletion for user ID: ${request.userId}`);
      } catch (error) {
        console.error(`❌ Failed to process account deletion for user ID: ${request.userId}`, error);
        await db.update(accountDeletionRequest).set({
          isProcessed: true,
          // Mark as processed to avoid retries, but log the failure
          reason: request.reason ? `${request.reason} - FAILED: ${error.message}` : `FAILED: ${error.message}`
        }).where(eq(accountDeletionRequest.id, request.id));
      }
    }
  } catch (error) {
    console.error("Error processing account deletions:", error);
  }
}
async function initializeScheduler() {
  try {
    const lockKey = "hopium:scheduler";
    const lockValue = `${process.pid}-${Date.now()}`;
    const lockTTL = 300;
    const result = await client.set(lockKey, lockValue, {
      NX: true,
      EX: lockTTL
    });
    if (result === "OK") {
      console.log(`🕐 Starting scheduler (PID: ${process.pid})`);
      const renewInterval = setInterval(async () => {
        try {
          const currentValue = await client.get(lockKey);
          if (currentValue === lockValue) {
            await client.expire(lockKey, lockTTL);
          } else {
            clearInterval(renewInterval);
            clearInterval(schedulerInterval);
            console.log("Lost scheduler lock, stopping...");
          }
        } catch (error) {
          console.error("Failed to renew scheduler lock:", error);
        }
      }, lockTTL / 2 * 1e3);
      resolveExpiredQuestions().catch(console.error);
      processAccountDeletions().catch(console.error);
      const schedulerInterval = setInterval(() => {
        resolveExpiredQuestions().catch(console.error);
        processAccountDeletions().catch(console.error);
      }, 5 * 60 * 1e3);
      const minesCleanupInterval = setInterval(() => {
        minesCleanupInactiveGames().catch(console.error);
        minesAutoCashout().catch(console.error);
      }, 60 * 1e3);
      const cleanup = async () => {
        clearInterval(renewInterval);
        clearInterval(schedulerInterval);
        clearInterval(minesCleanupInterval);
        const currentValue = await client.get(lockKey);
        if (currentValue === lockValue) {
          await client.del(lockKey);
        }
      };
      process.on("SIGTERM", cleanup);
      process.on("SIGINT", cleanup);
      process.on("beforeExit", cleanup);
    } else {
      console.log("📋 Scheduler already running");
    }
  } catch (error) {
    console.error("Failed to initialize scheduler:", error);
  }
}
initializeScheduler();
const sessionCache = /* @__PURE__ */ new Map();
const CACHE_TTL = 5 * 60 * 1e3;
const CACHE_CLEANUP_INTERVAL = 10 * 60 * 1e3;
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of sessionCache.entries()) {
    if (now - value.timestamp > value.ttl) {
      sessionCache.delete(key);
    }
  }
}, CACHE_CLEANUP_INTERVAL);
const handle = async ({ event, resolve }) => {
  if (event.url.pathname.startsWith("/.well-known/appspecific/com.chrome.devtools")) {
    return new Response(null, { status: 204 });
  }
  const session2 = await auth.api.getSession({
    headers: event.request.headers
  });
  let userData = null;
  if (session2?.user) {
    const userId = session2.user.id;
    const cacheKey = `user:${userId}`;
    const now = Date.now();
    const cached = sessionCache.get(cacheKey);
    if (cached && now - cached.timestamp < cached.ttl) {
      userData = cached.userData;
    } else {
      const [userRecord] = await db.select({
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
        image: user.image,
        isBanned: user.isBanned,
        banReason: user.banReason,
        baseCurrencyBalance: user.baseCurrencyBalance,
        bio: user.bio,
        volumeMaster: user.volumeMaster,
        volumeMuted: user.volumeMuted
      }).from(user).where(eq(user.id, Number(userId))).limit(1);
      if (userRecord?.isBanned) {
        try {
          await auth.api.signOut({
            headers: event.request.headers
          });
        } catch (e) {
          console.error("Failed to sign out banned user:", e);
        }
        if (event.url.pathname !== "/banned") {
          const banReason = encodeURIComponent(userRecord.banReason || "Account suspended");
          throw redirect(302, `/banned?reason=${banReason}`);
        }
      } else if (userRecord) {
        userData = {
          id: userRecord.id.toString(),
          name: userRecord.name,
          username: userRecord.username,
          email: userRecord.email,
          isAdmin: userRecord.isAdmin || false,
          image: userRecord.image || "",
          isBanned: userRecord.isBanned || false,
          banReason: userRecord.banReason,
          avatarUrl: userRecord.image,
          baseCurrencyBalance: parseFloat(userRecord.baseCurrencyBalance || "0"),
          bio: userRecord.bio || "",
          volumeMaster: parseFloat(userRecord.volumeMaster || "0.7"),
          volumeMuted: userRecord.volumeMuted || false
        };
        const cacheTTL = userRecord.isAdmin ? CACHE_TTL * 2 : CACHE_TTL;
        sessionCache.set(cacheKey, {
          userData,
          timestamp: now,
          ttl: cacheTTL
        });
      }
    }
  }
  event.locals.userSession = userData;
  if (event.url.pathname.startsWith("/api/") && !event.url.pathname.startsWith("/api/proxy/")) {
    const response = await svelteKitHandler({ event, resolve, auth });
    response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, private");
    return response;
  }
  return svelteKitHandler({ event, resolve, auth });
};
function clearUserCache(userId) {
  sessionCache.delete(`user:${userId}`);
}

export { clearUserCache, handle };
//# sourceMappingURL=hooks.server-D0aGGXGp.js.map
