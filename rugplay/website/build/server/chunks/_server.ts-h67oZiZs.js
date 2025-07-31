import { a as auth } from './auth-CA5qtupB.js';
import { e as error, j as json } from './index-DzcLzHBX.js';
import { d as db, u as user, s as session } from './index4-C6Efthht.js';
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

const POST = async ({ request }) => {
  const authSession = await auth.api.getSession({ headers: request.headers });
  if (!authSession?.user) {
    throw error(401, "Not authenticated");
  }
  const [currentUser] = await db.select({ isAdmin: user.isAdmin }).from(user).where(eq(user.id, Number(authSession.user.id))).limit(1);
  if (!currentUser?.isAdmin) {
    throw error(403, "Admin access required");
  }
  const { username, reason } = await request.json();
  if (!username?.trim() || !reason?.trim()) {
    throw error(400, "Username and reason are required");
  }
  try {
    const [targetUser] = await db.select({ id: user.id, username: user.username, isAdmin: user.isAdmin }).from(user).where(eq(user.username, username.trim())).limit(1);
    if (!targetUser) {
      throw error(404, "User not found");
    }
    if (targetUser.isAdmin) {
      throw error(400, "Cannot ban admin users");
    }
    await db.transaction(async (tx) => {
      await tx.update(user).set({
        isBanned: true,
        banReason: reason.trim(),
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq(user.id, targetUser.id));
      await tx.delete(session).where(eq(session.userId, targetUser.id));
    });
    try {
      const { clearUserCache } = await import('./hooks.server-D0aGGXGp.js');
      clearUserCache(targetUser.id.toString());
    } catch (e) {
      console.warn("Failed to clear user cache:", e);
    }
    return json({ success: true });
  } catch (e) {
    if (e.status) throw e;
    console.error("Failed to ban user:", e);
    throw error(500, "Internal server error");
  }
};

export { POST };
//# sourceMappingURL=_server.ts-h67oZiZs.js.map
