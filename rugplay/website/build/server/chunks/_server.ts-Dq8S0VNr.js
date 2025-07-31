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
  const keys = await auth.api.listApiKeys({
    headers: event.request.headers
  });
  return json(keys);
};
const POST = async (event) => {
  const session = await auth.api.getSession({
    headers: event.request.headers
  });
  if (!session?.user) {
    throw error(401, "Not authenticated");
  }
  const existingKeys = await auth.api.listApiKeys({
    headers: event.request.headers
  });
  if (existingKeys.length > 0) {
    throw error(400, "You can only have one API key at a time");
  }
  const apiKey = await auth.api.createApiKey({
    body: {
      name: "API Key",
      remaining: 2e3,
      permissions: {
        api: ["read"]
      },
      userId: session.user.id
    },
    headers: event.request.headers
  });
  return json(apiKey);
};

export { GET, POST };
//# sourceMappingURL=_server.ts-Dq8S0VNr.js.map
