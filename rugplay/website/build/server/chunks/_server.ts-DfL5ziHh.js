import { a as auth } from './auth-CA5qtupB.js';
import { j as json, e as error } from './index-DzcLzHBX.js';
import { d as db, e as coin, i as commentLike, c as comment, u as user } from './index4-C6Efthht.js';
import { eq, sql, and, desc } from 'drizzle-orm';
import { c as client } from './redis-LTnnuEqD.js';
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
import 'redis';

async function GET({ params, request }) {
  const session = await auth.api.getSession({
    headers: request.headers
  });
  const { coinSymbol } = params;
  const normalizedSymbol = coinSymbol.toUpperCase();
  try {
    const [coinData] = await db.select({ id: coin.id }).from(coin).where(eq(coin.symbol, normalizedSymbol)).limit(1);
    if (!coinData) {
      return json({ message: "Coin not found" }, { status: 404 });
    }
    const commentsQuery = db.select({
      id: comment.id,
      content: comment.content,
      likesCount: comment.likesCount,
      createdAt: comment.createdAt,
      updatedAt: comment.updatedAt,
      userId: user.id,
      userName: user.name,
      userUsername: user.username,
      userImage: user.image,
      isLikedByUser: session?.user ? sql`EXISTS(SELECT 1 FROM ${commentLike} WHERE ${commentLike.userId} = ${session.user.id} AND ${commentLike.commentId} = ${comment.id})` : sql`FALSE`
    }).from(comment).innerJoin(user, eq(comment.userId, user.id)).where(and(eq(comment.coinId, coinData.id), eq(comment.isDeleted, false))).orderBy(desc(comment.createdAt));
    const comments = await commentsQuery;
    return json({ comments });
  } catch (err) {
    console.error("Failed to fetch comments:", err);
    return json({ message: "Internal server error" }, { status: 500 });
  }
}
async function POST({ request, params }) {
  const session = await auth.api.getSession({
    headers: request.headers
  });
  if (!session?.user) {
    throw error(401, "Not authenticated");
  }
  const { coinSymbol } = params;
  const { content } = await request.json();
  if (!content || content.trim().length === 0) {
    throw error(400, "Comment content is required");
  }
  if (content.length > 500) {
    throw error(400, "Comment must be 500 characters or less");
  }
  if (!await isNameAppropriate(content.trim())) {
    throw error(400, "Comment contains inappropriate content");
  }
  const normalizedSymbol = coinSymbol.toUpperCase();
  const userId = Number(session.user.id);
  try {
    const [coinData] = await db.select({ id: coin.id }).from(coin).where(eq(coin.symbol, normalizedSymbol)).limit(1);
    if (!coinData) {
      throw error(404, "Coin not found");
    }
    const [newComment] = await db.insert(comment).values({
      userId,
      coinId: coinData.id,
      content: content.trim()
    }).returning();
    const [commentWithUser] = await db.select({
      id: comment.id,
      content: comment.content,
      likesCount: comment.likesCount,
      createdAt: comment.createdAt,
      updatedAt: comment.updatedAt,
      userId: comment.userId,
      userName: user.name,
      userUsername: user.username,
      userImage: user.image,
      isLikedByUser: sql`FALSE`
    }).from(comment).innerJoin(user, eq(comment.userId, user.id)).where(eq(comment.id, newComment.id)).limit(1);
    await client.publish(
      `comments:${normalizedSymbol}`,
      JSON.stringify({
        type: "new_comment",
        data: commentWithUser
      })
    );
    return json({ comment: commentWithUser });
  } catch (e) {
    console.error("Error creating comment:", e);
    throw error(500, "Failed to create comment");
  }
}

export { GET, POST };
//# sourceMappingURL=_server.ts-DfL5ziHh.js.map
