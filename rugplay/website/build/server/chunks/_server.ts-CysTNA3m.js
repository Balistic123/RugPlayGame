import { e as error, j as json } from './index-DzcLzHBX.js';
import { a as auth } from './auth-CA5qtupB.js';
import 'better-auth';
import 'better-auth/adapters/drizzle';
import './shared-server-BfUoNEXY.js';
import './index4-C6Efthht.js';
import 'drizzle-orm/postgres-js';
import 'postgres';
import 'drizzle-orm/pg-core';
import 'drizzle-orm';
import '@aws-sdk/client-s3';
import '@aws-sdk/s3-request-presigner';
import './public-B3YCMw9Q.js';
import 'sharp';
import 'better-auth/plugins';

const POST = async (event) => {
  const session = await auth.api.getSession({
    headers: event.request.headers
  });
  if (!session?.user) {
    throw error(401, "Not authenticated");
  }
  const existingKey = await auth.api.getApiKey({
    query: { id: event.params.id },
    headers: event.request.headers
  });
  if (!existingKey) {
    throw error(404, "API key not found");
  }
  if (existingKey.userId !== session.user.id) {
    throw error(403, "Not authorized to regenerate this API key");
  }
  console.log(existingKey.remaining);
  await auth.api.deleteApiKey({
    body: { keyId: event.params.id },
    headers: event.request.headers
  });
  let parsedPermissions = existingKey.permissions;
  if (typeof existingKey.permissions === "string") {
    try {
      const parsed = JSON.parse(existingKey.permissions);
      parsedPermissions = parsed && typeof parsed === "object" ? parsed : void 0;
    } catch {
      parsedPermissions = void 0;
    }
  }
  const newKey = await auth.api.createApiKey({
    body: {
      name: existingKey.name ?? void 0,
      userId: existingKey.userId,
      remaining: existingKey.remaining,
      refillAmount: existingKey.refillAmount ?? void 0,
      refillInterval: existingKey.refillInterval ?? void 0,
      rateLimitEnabled: existingKey.rateLimitEnabled,
      rateLimitTimeWindow: existingKey.rateLimitTimeWindow ?? void 0,
      rateLimitMax: existingKey.rateLimitMax ?? void 0,
      permissions: parsedPermissions,
      metadata: existingKey.metadata
    },
    headers: event.request.headers
  });
  console.log(existingKey.remaining);
  console.log(newKey.remaining);
  return json(newKey);
};

export { POST };
//# sourceMappingURL=_server.ts-CysTNA3m.js.map
