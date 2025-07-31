import { a as auth } from './auth-CA5qtupB.js';
import { e as error, j as json } from './index-DzcLzHBX.js';
import { n as notifications, d as db } from './index4-C6Efthht.js';
import { eq, and, desc, count } from 'drizzle-orm';
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

const GET = async ({ url, request }) => {
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session?.user) throw error(401, "Not authenticated");
  const userId = Number(session.user.id);
  const unreadOnly = url.searchParams.get("unread_only") === "true";
  try {
    const conditions = [eq(notifications.userId, userId)];
    if (unreadOnly) {
      conditions.push(eq(notifications.isRead, false));
    }
    const whereCondition = and(...conditions);
    const notificationsList = await db.select({
      id: notifications.id,
      type: notifications.type,
      title: notifications.title,
      message: notifications.message,
      link: notifications.link,
      isRead: notifications.isRead,
      createdAt: notifications.createdAt
    }).from(notifications).where(whereCondition).orderBy(desc(notifications.createdAt)).limit(50);
    const unreadCount = await db.select({ count: count() }).from(notifications).where(and(eq(notifications.userId, userId), eq(notifications.isRead, false))).then((result) => result[0]?.count || 0);
    return json({
      notifications: notificationsList,
      unreadCount
    });
  } catch (e) {
    console.error("Failed to fetch notificationss:", e);
    throw error(500, "Failed to fetch notificationss");
  }
};
const PATCH = async ({ request }) => {
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session?.user) throw error(401, "Not authenticated");
  const userId = Number(session.user.id);
  const { markAsRead } = await request.json();
  if (typeof markAsRead !== "boolean") {
    throw error(400, "Invalid request body");
  }
  try {
    if (markAsRead) {
      await db.update(notifications).set({ isRead: true }).where(eq(notifications.userId, userId));
    }
    return json({ success: true });
  } catch (e) {
    console.error("Failed to update notifications:", e);
    throw error(500, "Failed to update notifications");
  }
};

export { GET, PATCH };
//# sourceMappingURL=_server.ts-6wRicDyY.js.map
