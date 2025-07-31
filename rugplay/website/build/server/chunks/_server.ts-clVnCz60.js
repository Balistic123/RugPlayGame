import { GET as GET$1 } from './_server.ts-avZd00ED.js';
import { v as verifyApiKeyAndGetUser } from './api-auth-BsBMBtVj.js';
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
  const hopiumEvent = {
    request,
    url,
    cookies: arguments[0].cookies,
    fetch: arguments[0].fetch,
    getClientAddress: arguments[0].getClientAddress,
    locals: arguments[0].locals,
    platform: arguments[0].platform
  };
  return await GET$1(hopiumEvent);
}

export { GET };
//# sourceMappingURL=_server.ts-clVnCz60.js.map
