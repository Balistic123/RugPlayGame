import { a as auth, b as uploadProfilePicture } from './auth-CA5qtupB.js';
import { e as error, j as json } from './index-DzcLzHBX.js';
import { d as db, u as user } from './index4-C6Efthht.js';
import { eq } from 'drizzle-orm';
import { M as MAX_FILE_SIZE } from './constants-B18hWG_A.js';
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

async function validateInputs(name, bio, username, avatarFile) {
  if (!name || !name.trim()) {
    throw error(400, "Display name is required");
  }
  const trimmedName = name.trim();
  if (trimmedName.length < 2) {
    throw error(400, "Display name must be at least 2 characters");
  }
  if (trimmedName.length > 50) {
    throw error(400, "Display name must be 50 characters or less");
  }
  if (!await isNameAppropriate(trimmedName)) {
    throw error(400, "Name contains inappropriate content");
  }
  if (bio && bio.length > 160) {
    throw error(400, "Bio must be 160 characters or less");
  }
  if (username && (username.length < 3 || username.length > 30)) {
    throw error(400, "Username must be between 3 and 30 characters");
  }
  if (username) {
    const alphanumericRegex = /^[a-z0-9_]+$/;
    if (!alphanumericRegex.test(username)) {
      throw error(400, "Username must contain only lowercase letters, numbers, and underscores");
    }
    const purelyNumericRegex = /^\d+$/;
    if (purelyNumericRegex.test(username)) {
      throw error(400, "Username cannot be purely numeric");
    }
  }
  if (username && !await isNameAppropriate(username)) {
    throw error(400, "Username contains inappropriate content");
  }
  if (bio && !await isNameAppropriate(bio)) {
    throw error(400, "Bio contains inappropriate content");
  }
  if (avatarFile && avatarFile.size > MAX_FILE_SIZE) {
    throw error(400, "Avatar file must be smaller than 1MB");
  }
}
async function POST({ request }) {
  const session = await auth.api.getSession({
    headers: request.headers
  });
  if (!session?.user) {
    throw error(401, "Not authenticated");
  }
  const formData = await request.formData();
  let name = formData.get("name")?.trim();
  const bio = formData.get("bio");
  const username = formData.get("username")?.toLowerCase().trim();
  const avatarFile = formData.get("avatar");
  name = name?.trim().replace(/\s+/g, " ");
  await validateInputs(name, bio, username, avatarFile);
  const updates = {
    name,
    bio,
    username,
    updatedAt: /* @__PURE__ */ new Date()
  };
  if (avatarFile && avatarFile.size > 0) {
    try {
      const arrayBuffer = await avatarFile.arrayBuffer();
      const key = await uploadProfilePicture(
        session.user.id,
        new Uint8Array(arrayBuffer),
        avatarFile.type
      );
      updates.image = key;
    } catch (e) {
      console.error("Avatar upload failed, continuing without update:", e);
    }
  }
  await db.update(user).set(updates).where(eq(user.id, Number(session.user.id)));
  return json({ success: true });
}

export { POST };
//# sourceMappingURL=_server.ts-Ce2-YF4y.js.map
