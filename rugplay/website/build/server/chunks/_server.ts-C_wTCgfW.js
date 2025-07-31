import { v as verifyApiKeyAndGetUser } from './api-auth-BsBMBtVj.js';
import { GET as GET$1 } from './_server.ts-D-Ovw5dI.js';
import './auth-CA5qtupB.js';
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
import './index-DzcLzHBX.js';

async function GET({ url, request }) {
  await verifyApiKeyAndGetUser(request);
  return await GET$1({ url });
}

export { GET };
//# sourceMappingURL=_server.ts-C_wTCgfW.js.map
