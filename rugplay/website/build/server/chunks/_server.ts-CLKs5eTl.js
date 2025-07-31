import { a as auth } from './auth-CA5qtupB.js';
import { e as error, j as json } from './index-DzcLzHBX.js';
import { d as db, b as accountDeletionRequest, u as user } from './index4-C6Efthht.js';
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

async function POST({ request }) {
  const authSession = await auth.api.getSession({
    headers: request.headers
  });
  if (!authSession?.user) {
    throw error(401, "Not authenticated");
  }
  const userId = Number(authSession.user.id);
  const body = await request.json();
  const { confirmationText } = body;
  if (confirmationText !== "DELETE MY ACCOUNT") {
    throw error(400, "Invalid confirmation text");
  }
  try {
    const existingRequest = await db.select().from(accountDeletionRequest).where(eq(accountDeletionRequest.userId, userId)).limit(1);
    if (existingRequest.length > 0) {
      throw error(409, "Account deletion already requested");
    }
    const scheduledDeletionAt = /* @__PURE__ */ new Date();
    scheduledDeletionAt.setDate(scheduledDeletionAt.getDate() + 14);
    await db.transaction(async (tx) => {
      await tx.insert(accountDeletionRequest).values({
        userId,
        scheduledDeletionAt,
        reason: "User requested account deletion"
      });
      await tx.update(user).set({
        isBanned: true,
        banReason: "Account deletion requested - scheduled for " + scheduledDeletionAt.toISOString(),
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq(user.id, userId));
    });
    return json({
      success: true,
      message: `Account deletion has been scheduled for ${scheduledDeletionAt.toLocaleDateString()}. Your account has been temporarily suspended. You can cancel this request by contacting support before the scheduled date.`,
      scheduledDeletionAt: scheduledDeletionAt.toISOString()
    });
  } catch (e) {
    if (e && typeof e === "object" && "status" in e) {
      throw e;
    }
    console.error("Account deletion error:", e);
    throw error(500, "Internal server error");
  }
}

export { POST };
//# sourceMappingURL=_server.ts-CLKs5eTl.js.map
