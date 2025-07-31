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

const load = async (event) => {
  const session = await auth.api.getSession({ headers: event.request.headers });
  if (!session?.user) {
    return { apiKey: null, todayUsage: 0 };
  }
  const keys = await auth.api.listApiKeys({ headers: event.request.headers });
  const key = keys.length > 0 ? keys[0] : null;
  const todayUsage = key ? 2e3 - (key.remaining || 0) : 0;
  return {
    apiKey: key,
    todayUsage
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CaKJiu_s.js')).default;
const server_id = "src/routes/api/+page.server.ts";
const imports = ["_app/immutable/nodes/6.DAPHwwrc.js","_app/immutable/chunks/BiLdCT7w.js","_app/immutable/chunks/Dc9Cd6uL.js","_app/immutable/chunks/4JrI1xkN.js","_app/immutable/chunks/DKQvO5e2.js","_app/immutable/chunks/PVG7Em25.js","_app/immutable/chunks/aor5dgAF.js","_app/immutable/chunks/B8ehKEGt.js","_app/immutable/chunks/BE8a_9Ge.js","_app/immutable/chunks/D0g6TdLa.js","_app/immutable/chunks/b_f0gCBc.js","_app/immutable/chunks/jS9pjJ83.js","_app/immutable/chunks/Dxl0dsOs.js","_app/immutable/chunks/DIGQk_Pb.js","_app/immutable/chunks/D0Gox408.js","_app/immutable/chunks/pD04GNng.js","_app/immutable/chunks/BBRRXwej.js","_app/immutable/chunks/CZ0yUM0I.js","_app/immutable/chunks/BR_bh9L_.js","_app/immutable/chunks/DBnYf9wq.js","_app/immutable/chunks/DT6MbhOo.js","_app/immutable/chunks/HRCXpe-l.js","_app/immutable/chunks/BFn_PWCM.js","_app/immutable/chunks/CTHXnj9k.js","_app/immutable/chunks/BUFrtusw.js","_app/immutable/chunks/BpTyYBFh.js","_app/immutable/chunks/BYMHPgMA.js","_app/immutable/chunks/QCXksuBD.js","_app/immutable/chunks/BIYb4alH.js","_app/immutable/chunks/BnkorlfL.js","_app/immutable/chunks/CpfRlYS9.js","_app/immutable/chunks/CbJOjk0Q.js","_app/immutable/chunks/DY5DzamU.js","_app/immutable/chunks/CbbmCp-X.js","_app/immutable/chunks/DrySvPfe.js"];
const stylesheets = ["_app/immutable/assets/Toaster.DIZjURCf.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=6-J89iMaGA.js.map
