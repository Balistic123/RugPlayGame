import { GET as GET$1 } from './_server.ts-wQ38TEhK.js';
import { v as verifyApiKeyAndGetUser } from './api-auth-BsBMBtVj.js';
import './index-DzcLzHBX.js';
import './index4-C6Efthht.js';
import 'drizzle-orm/postgres-js';
import 'postgres';
import './shared-server-BfUoNEXY.js';
import 'drizzle-orm/pg-core';
import 'drizzle-orm';
import './utils2-CLIgW4-x.js';
import './clsx-ChV9xqsO.js';
import './volume-settings-DX3g8058.js';
import './index2-D4eROfHK.js';
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
//# sourceMappingURL=_server.ts-57xznbsr.js.map
