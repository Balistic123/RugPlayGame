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

async function POST({ request }) {
  const session = await auth.api.getSession({
    headers: request.headers
  });
  if (!session?.user) {
    throw error(401, "Not authenticated");
  }
  try {
    const { master, muted } = await request.json();
    if (typeof master !== "number" || master < 0 || master > 1) {
      throw error(400, "Invalid master volume");
    }
    if (typeof muted !== "boolean") {
      throw error(400, "Invalid muted setting");
    }
    await db.update(user).set({
      volumeMaster: master.toString(),
      volumeMuted: muted,
      updatedAt: /* @__PURE__ */ new Date()
    }).where(eq(user.id, Number(session.user.id)));
    return json({ success: true });
  } catch (e) {
    console.error("Volume settings save failed:", e);
    throw error(500, "Failed to save volume settings");
  }
}
async function GET({ request }) {
  const session = await auth.api.getSession({
    headers: request.headers
  });
  if (!session?.user) {
    throw error(401, "Not authenticated");
  }
  try {
    const userData = await db.select({
      volumeMaster: user.volumeMaster,
      volumeMuted: user.volumeMuted
    }).from(user).where(eq(user.id, Number(session.user.id)));
    if (!userData[0]) {
      throw error(404, "User not found");
    }
    return json({
      master: parseFloat(userData[0].volumeMaster),
      muted: userData[0].volumeMuted
    });
  } catch (e) {
    console.error("Volume settings load failed:", e);
    throw error(500, "Failed to load volume settings");
  }
}

export { GET, POST };
//# sourceMappingURL=_server.ts-CHM_HUch.js.map
