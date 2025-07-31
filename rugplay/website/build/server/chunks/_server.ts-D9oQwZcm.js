import { j as json } from './index-DzcLzHBX.js';
import { d as db, u as user } from './index4-C6Efthht.js';
import { eq } from 'drizzle-orm';
import { i as isNameAppropriate } from './moderation-DqfE3f80.js';
import 'drizzle-orm/postgres-js';
import 'postgres';
import './shared-server-BfUoNEXY.js';
import 'drizzle-orm/pg-core';

async function GET({ url }) {
  let username = url.searchParams.get("username")?.toLowerCase().trim();
  if (!username) {
    return json({ available: false, reason: "Username is required." });
  }
  if (username.length < 3 || username.length > 30) {
    return json({
      available: false,
      reason: "Username must be 3-30 characters."
    });
  }
  const alphanumericRegex = /^[a-z0-9_]+$/;
  if (!alphanumericRegex.test(username)) {
    return json({
      available: false,
      reason: "Username can only contain lowercase letters, numbers, and underscores."
    });
  }
  const purelyNumericRegex = /^\d+$/;
  if (purelyNumericRegex.test(username)) {
    return json({
      available: false,
      reason: "Username cannot be purely numeric."
    });
  }
  if (!await isNameAppropriate(username)) {
    return json({ available: false, reason: "Username contains inappropriate content." });
  }
  const exists = await db.query.user.findFirst({
    where: eq(user.username, username)
  });
  if (exists) {
    return json({ available: false, reason: "Username is already taken." });
  }
  return json({ available: true });
}

export { GET };
//# sourceMappingURL=_server.ts-D9oQwZcm.js.map
