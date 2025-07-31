import { GET as GET$1 } from './_server.ts-DkuPT1Qm.js';
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
import './utils2-CLIgW4-x.js';
import './clsx-ChV9xqsO.js';
import './volume-settings-DX3g8058.js';
import './index2-D4eROfHK.js';

async function GET(event) {
  await verifyApiKeyAndGetUser(event.request);
  const hopiumEvent = {
    params: event.params,
    request: event.request,
    url: event.url,
    cookies: event.cookies,
    fetch: event.fetch,
    getClientAddress: event.getClientAddress,
    locals: event.locals,
    platform: event.platform
  };
  return await GET$1(hopiumEvent);
}

export { GET };
//# sourceMappingURL=_server.ts-Dh63xq4r.js.map
