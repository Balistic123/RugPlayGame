import { a as auth } from './auth-CA5qtupB.js';
import { e as error, j as json } from './index-DzcLzHBX.js';
import { d as db, u as user } from './index4-C6Efthht.js';
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
  const { userId } = await request.json();
  if (!userId) {
    throw error(400, "User ID is required");
  }
  try {
    await db.update(user).set({
      isBanned: false,
      banReason: null,
      updatedAt: /* @__PURE__ */ new Date()
    }).where(eq(user.id, userId));
    return json({ success: true });
  } catch (e) {
    console.error("Failed to unban user:", e);
    throw error(500, "Internal server error");
  }
};

export { POST };
//# sourceMappingURL=_server.ts-DQRGE9RB.js.map
