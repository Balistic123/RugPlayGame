import { a as auth } from './auth-CA5qtupB.js';
import { e as error } from './index-DzcLzHBX.js';
import { d as db, u as user, t as transaction, e as coin, h as userPortfolio, a as predictionBet, p as predictionQuestion, c as comment, i as commentLike, g as promoCodeRedemption, j as promoCode, s as session } from './index4-C6Efthht.js';
import { eq, and, lte } from 'drizzle-orm';
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

async function HEAD({ request }) {
  const authSession = await auth.api.getSession({
    headers: request.headers
  });
  if (!authSession?.user) {
    throw error(401, "Not authenticated");
  }
  const userId = Number(authSession.user.id);
  try {
    const userExists = await db.select({ id: user.id }).from(user).where(eq(user.id, userId)).limit(1);
    if (!userExists.length) {
      throw error(404, "User not found");
    }
    const estimatedSize = 1024 * 50;
    return new Response(null, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Content-Disposition": `attachment; filename="rugplay-data-${userId}-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.json"`,
        "Content-Length": estimatedSize.toString(),
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Pragma": "no-cache",
        "Expires": "0"
      }
    });
  } catch (err) {
    console.error("Data export HEAD error:", err);
    throw error(500, "Failed to check export availability");
  }
}
async function GET({ request }) {
  const authSession = await auth.api.getSession({
    headers: request.headers
  });
  if (!authSession?.user) {
    throw error(401, "Not authenticated");
  }
  const userId = Number(authSession.user.id);
  try {
    const userData = await db.select().from(user).where(eq(user.id, userId)).limit(1);
    if (!userData.length) {
      throw error(404, "User not found");
    }
    const transactions = await db.select({
      id: transaction.id,
      coinId: transaction.coinId,
      coinName: coin.name,
      coinSymbol: coin.symbol,
      type: transaction.type,
      quantity: transaction.quantity,
      pricePerCoin: transaction.pricePerCoin,
      totalBaseCurrencyAmount: transaction.totalBaseCurrencyAmount,
      timestamp: transaction.timestamp
    }).from(transaction).leftJoin(coin, eq(transaction.coinId, coin.id)).where(eq(transaction.userId, userId));
    const portfolio = await db.select({
      coinId: userPortfolio.coinId,
      coinName: coin.name,
      coinSymbol: coin.symbol,
      quantity: userPortfolio.quantity,
      updatedAt: userPortfolio.updatedAt
    }).from(userPortfolio).leftJoin(coin, eq(userPortfolio.coinId, coin.id)).where(eq(userPortfolio.userId, userId));
    const predictionBets = await db.select({
      id: predictionBet.id,
      questionId: predictionBet.questionId,
      question: predictionQuestion.question,
      side: predictionBet.side,
      amount: predictionBet.amount,
      actualWinnings: predictionBet.actualWinnings,
      createdAt: predictionBet.createdAt,
      settledAt: predictionBet.settledAt
    }).from(predictionBet).leftJoin(predictionQuestion, eq(predictionBet.questionId, predictionQuestion.id)).where(eq(predictionBet.userId, userId));
    const comments = await db.select({
      id: comment.id,
      coinId: comment.coinId,
      coinName: coin.name,
      coinSymbol: coin.symbol,
      content: comment.content,
      likesCount: comment.likesCount,
      createdAt: comment.createdAt,
      updatedAt: comment.updatedAt,
      isDeleted: comment.isDeleted
    }).from(comment).leftJoin(coin, eq(comment.coinId, coin.id)).where(eq(comment.userId, userId));
    const commentLikes = await db.select({
      commentId: commentLike.commentId,
      createdAt: commentLike.createdAt
    }).from(commentLike).where(eq(commentLike.userId, userId));
    const promoRedemptions = await db.select({
      id: promoCodeRedemption.id,
      promoCodeId: promoCodeRedemption.promoCodeId,
      promoCode: promoCode.code,
      rewardAmount: promoCodeRedemption.rewardAmount,
      redeemedAt: promoCodeRedemption.redeemedAt
    }).from(promoCodeRedemption).leftJoin(promoCode, eq(promoCodeRedemption.promoCodeId, promoCode.id)).where(eq(promoCodeRedemption.userId, userId));
    const sessions = await db.select({
      id: session.id,
      expiresAt: session.expiresAt,
      createdAt: session.createdAt,
      ipAddress: session.ipAddress,
      userAgent: session.userAgent
    }).from(session).where(and(
      eq(session.userId, userId),
      lte(session.expiresAt, /* @__PURE__ */ new Date())
    ));
    const createdCoins = await db.select({
      id: coin.id,
      name: coin.name,
      symbol: coin.symbol,
      icon: coin.icon,
      initialSupply: coin.initialSupply,
      circulatingSupply: coin.circulatingSupply,
      marketCap: coin.marketCap,
      price: coin.currentPrice,
      change24h: coin.change24h,
      poolCoinAmount: coin.poolCoinAmount,
      poolBaseCurrencyAmount: coin.poolBaseCurrencyAmount,
      createdAt: coin.createdAt,
      updatedAt: coin.updatedAt,
      isListed: coin.isListed
    }).from(coin).where(eq(coin.creatorId, userId));
    const createdQuestions = await db.select().from(predictionQuestion).where(eq(predictionQuestion.creatorId, userId));
    const exportData = {
      exportInfo: {
        userId,
        exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
        dataType: "complete_user_data"
      },
      user: userData[0],
      transactions,
      portfolio,
      predictionBets,
      comments,
      commentLikes,
      promoCodeRedemptions: promoRedemptions,
      sessions,
      createdCoins,
      createdQuestions
    };
    const jsonData = JSON.stringify(exportData, null, 2);
    const dataSize = new TextEncoder().encode(jsonData).length;
    return new Response(jsonData, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Content-Disposition": `attachment; filename="rugplay-data-${userId}-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.json"`,
        "Content-Length": dataSize.toString(),
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Pragma": "no-cache",
        "Expires": "0"
      }
    });
  } catch (err) {
    console.error("Data export error:", err);
    throw error(500, "Failed to export user data");
  }
}

export { GET, HEAD };
//# sourceMappingURL=_server.ts-wdixzFeS.js.map
