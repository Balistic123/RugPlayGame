import { GET as GET$1 } from './_server.ts-Dt6jWKbC.js';
import { v as verifyApiKeyAndGetUser } from './api-auth-BsBMBtVj.js';
import './index-DzcLzHBX.js';
import './index4-C6Efthht.js';
import 'drizzle-orm/postgres-js';
import 'postgres';
import './shared-server-BfUoNEXY.js';
import 'drizzle-orm/pg-core';
import 'drizzle-orm';
import './validation-CO41QrVa.js';
import './auth-CA5qtupB.js';
import 'better-auth';
import 'better-auth/adapters/drizzle';
import '@aws-sdk/client-s3';
import '@aws-sdk/s3-request-presigner';
import './public-B3YCMw9Q.js';
import 'sharp';
import 'better-auth/plugins';

async function GET({ params, url, request }) {
  await verifyApiKeyAndGetUser(request);
  return await GET$1({ params, url });
}

export { GET };
//# sourceMappingURL=_server.ts-DBZ1gXNo.js.map
