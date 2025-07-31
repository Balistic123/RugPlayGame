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

const GET = async (event) => {
  const session = await auth.api.getSession({
    headers: event.request.headers
  });
  if (!session?.user) {
    throw error(401, "Not authenticated");
  }
  const keyId = event.params.id;
  try {
    const key = await auth.api.getApiKey({
      query: { id: keyId },
      headers: event.request.headers
    });
    if (!key) {
      throw error(404, "API key not found");
    }
    return json(key);
  } catch (err) {
    throw error(404, "API key not found");
  }
};
const DELETE = async (event) => {
  const session = await auth.api.getSession({
    headers: event.request.headers
  });
  if (!session?.user) {
    throw error(401, "Not authenticated");
  }
  const keyId = event.params.id;
  await auth.api.deleteApiKey({
    body: { keyId },
    headers: event.request.headers
  });
  return json({ success: true });
};

export { DELETE, GET };
//# sourceMappingURL=_server.ts-D1jdYfLm.js.map
