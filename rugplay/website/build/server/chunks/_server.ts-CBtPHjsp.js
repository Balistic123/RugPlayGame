import { a as auth } from './auth-CA5qtupB.js';
import { e as error, j as json } from './index-DzcLzHBX.js';
import { d as db, u as user } from './index4-C6Efthht.js';
import { eq, desc } from 'drizzle-orm';
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

const GET = async ({ request }) => {
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session?.user) {
    throw error(401, "Not authenticated");
  }
  const [currentUser] = await db.select({ isAdmin: user.isAdmin }).from(user).where(eq(user.id, Number(session.user.id))).limit(1);
  if (!currentUser?.isAdmin) {
    throw error(403, "Admin access required");
  }
  try {
    const users = await db.select({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
      isBanned: user.isBanned,
      banReason: user.banReason,
      createdAt: user.createdAt
    }).from(user).orderBy(desc(user.createdAt));
    return json(users);
  } catch (e) {
    console.error("Failed to fetch users:", e);
    throw error(500, "Internal server error");
  }
};

export { GET };
//# sourceMappingURL=_server.ts-CBtPHjsp.js.map
