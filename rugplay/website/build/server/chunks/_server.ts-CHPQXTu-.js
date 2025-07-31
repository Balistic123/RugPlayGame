import { e as error, j as json } from './index-DzcLzHBX.js';
import { d as db, c as comment, e as coin, i as commentLike } from './index4-C6Efthht.js';
import { eq, and, sql } from 'drizzle-orm';
import { a as auth } from './auth-CA5qtupB.js';
import { c as client } from './redis-LTnnuEqD.js';
import 'drizzle-orm/postgres-js';
import 'postgres';
import './shared-server-BfUoNEXY.js';
import 'drizzle-orm/pg-core';
import 'better-auth';
import 'better-auth/adapters/drizzle';
import '@aws-sdk/client-s3';
import '@aws-sdk/s3-request-presigner';
import './public-B3YCMw9Q.js';
import 'sharp';
import 'better-auth/plugins';
import 'redis';

const POST = async ({ request, params }) => {
  const session = await auth.api.getSession({
    headers: request.headers
  });
  if (!session?.user) {
    return json({ message: "Not authenticated" }, { status: 401 });
  }
  const commentId = parseInt(params.id);
  const { coinSymbol } = params;
  const userId = Number(session.user.id);
  if (isNaN(commentId)) {
    return json({ message: "Invalid comment ID" }, { status: 400 });
  }
  try {
    const [commentData] = await db.select().from(comment).innerJoin(coin, eq(comment.coinId, coin.id)).where(and(eq(comment.id, commentId), eq(coin.symbol, coinSymbol)));
    if (!commentData) {
      return json({ message: "Comment not found" }, { status: 404 });
    }
    const [existingLike] = await db.select().from(commentLike).where(and(eq(commentLike.userId, userId), eq(commentLike.commentId, commentId)));
    if (existingLike) {
      return json({ message: "Comment already liked" }, { status: 400 });
    }
    await db.transaction(async (tx) => {
      await tx.insert(commentLike).values({ userId, commentId });
      await tx.update(comment).set({ likesCount: sql`${comment.likesCount} + 1` }).where(eq(comment.id, commentId));
    });
    const [updatedComment] = await db.select({ likesCount: comment.likesCount }).from(comment).where(eq(comment.id, commentId));
    await client.publish(
      `comments:${coinSymbol.toUpperCase()}`,
      JSON.stringify({
        type: "comment_liked",
        data: {
          commentId: Number(commentId),
          likesCount: updatedComment.likesCount,
          isLikedByUser: true,
          userId
        }
      })
    );
    return json({ success: true });
  } catch (error2) {
    console.error("Failed to like comment:", error2);
    return json({ message: "Internal server error" }, { status: 500 });
  }
};
const DELETE = async ({ request, params }) => {
  const session = await auth.api.getSession({
    headers: request.headers
  });
  if (!session?.user) {
    throw error(401, "Not authenticated");
  }
  const commentId = parseInt(params.id);
  const { coinSymbol } = params;
  const userId = Number(session.user.id);
  if (isNaN(commentId)) {
    return json({ message: "Invalid comment ID" }, { status: 400 });
  }
  try {
    const [commentData] = await db.select().from(comment).innerJoin(coin, eq(comment.coinId, coin.id)).where(and(eq(comment.id, commentId), eq(coin.symbol, coinSymbol)));
    if (!commentData) {
      return json({ message: "Comment not found" }, { status: 404 });
    }
    const [existingLike] = await db.select().from(commentLike).where(and(eq(commentLike.userId, userId), eq(commentLike.commentId, commentId)));
    if (!existingLike) {
      return json({ message: "Comment not liked" }, { status: 400 });
    }
    await db.transaction(async (tx) => {
      await tx.delete(commentLike).where(and(eq(commentLike.userId, userId), eq(commentLike.commentId, commentId)));
      await tx.update(comment).set({ likesCount: sql`GREATEST(0, ${comment.likesCount} - 1)` }).where(eq(comment.id, commentId));
    });
    const [updatedComment] = await db.select({ likesCount: comment.likesCount }).from(comment).where(eq(comment.id, commentId));
    await client.publish(
      `comments:${coinSymbol.toUpperCase()}`,
      JSON.stringify({
        type: "comment_liked",
        data: {
          commentId: Number(commentId),
          likesCount: updatedComment.likesCount,
          isLikedByUser: false,
          userId
        }
      })
    );
    return json({ success: true });
  } catch (error2) {
    console.error("Failed to unlike comment:", error2);
    return json({ message: "Internal server error" }, { status: 500 });
  }
};

export { DELETE, POST };
//# sourceMappingURL=_server.ts-CHPQXTu-.js.map
