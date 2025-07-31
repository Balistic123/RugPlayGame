import { a as auth } from './auth-CA5qtupB.js';
import { e as error, j as json } from './index-DzcLzHBX.js';
import { d as db, j as promoCode, g as promoCodeRedemption } from './index4-C6Efthht.js';
import { count, eq } from 'drizzle-orm';
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
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session?.user || !session.user.isAdmin) {
    throw error(403, "Admin access required");
  }
  const { code, description, rewardAmount, maxUses, expiresAt } = await request.json();
  if (!code || !rewardAmount) {
    return json({ error: "Code and reward amount are required" }, { status: 400 });
  }
  const normalizedCode = code.trim().toUpperCase();
  const userId = Number(session.user.id);
  const [existingCode] = await db.select({ id: promoCode.id }).from(promoCode).where(eq(promoCode.code, normalizedCode)).limit(1);
  if (existingCode) {
    return json({ error: "Promo code already exists" }, { status: 400 });
  }
  const [newPromoCode] = await db.insert(promoCode).values({
    code: normalizedCode,
    description: description || null,
    rewardAmount: Number(rewardAmount).toFixed(8),
    maxUses: maxUses || null,
    expiresAt: expiresAt ? new Date(expiresAt) : null,
    createdBy: userId
  }).returning();
  return json({
    success: true,
    promoCode: {
      id: newPromoCode.id,
      code: newPromoCode.code,
      description: newPromoCode.description,
      rewardAmount: Number(newPromoCode.rewardAmount),
      maxUses: newPromoCode.maxUses,
      expiresAt: newPromoCode.expiresAt
    }
  });
};
const GET = async ({ request }) => {
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session?.user || !session.user.isAdmin) {
    throw error(403, "Admin access required");
  }
  const rows = await db.select({
    id: promoCode.id,
    code: promoCode.code,
    description: promoCode.description,
    rewardAmount: promoCode.rewardAmount,
    maxUses: promoCode.maxUses,
    isActive: promoCode.isActive,
    createdAt: promoCode.createdAt,
    expiresAt: promoCode.expiresAt,
    usedCount: count(promoCodeRedemption.id).as("usedCount")
  }).from(promoCode).leftJoin(promoCodeRedemption, eq(promoCode.id, promoCodeRedemption.promoCodeId)).groupBy(promoCode.id);
  return json({
    codes: rows.map((pc) => ({
      ...pc,
      rewardAmount: Number(pc.rewardAmount)
    }))
  });
};

export { GET, POST };
//# sourceMappingURL=_server.ts-DoHCBSEy.js.map
