import { e as error } from './index-DzcLzHBX.js';

async function load({ params, fetch }) {
  const { username } = params;
  try {
    const response = await fetch(`/api/user/${username}`);
    if (!response.ok) {
      if (response.status === 404) {
        throw error(404, "User not found");
      }
      throw error(500, "Failed to load user profile");
    }
    const profileData = await response.json();
    return {
      username,
      profileData,
      recentTransactions: profileData.recentTransactions || []
    };
  } catch (e) {
    console.error("Failed to fetch user profile:", e);
    throw error(500, "Failed to load user profile");
  }
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 24;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-B1UzUlCa.js')).default;
const server_id = "src/routes/user/[username]/+page.server.ts";
const imports = ["_app/immutable/nodes/24.Do5VfFXq.js","_app/immutable/chunks/BiLdCT7w.js","_app/immutable/chunks/Dc9Cd6uL.js","_app/immutable/chunks/DBnYf9wq.js","_app/immutable/chunks/4JrI1xkN.js","_app/immutable/chunks/DKQvO5e2.js","_app/immutable/chunks/BE8a_9Ge.js","_app/immutable/chunks/aor5dgAF.js","_app/immutable/chunks/D0g6TdLa.js","_app/immutable/chunks/CTo_Vl_F.js","_app/immutable/chunks/b_f0gCBc.js","_app/immutable/chunks/jS9pjJ83.js","_app/immutable/chunks/CqEP-Wsq.js","_app/immutable/chunks/DIGQk_Pb.js","_app/immutable/chunks/D0Gox408.js","_app/immutable/chunks/BBRRXwej.js","_app/immutable/chunks/BvtTpaCk.js","_app/immutable/chunks/DT6MbhOo.js","_app/immutable/chunks/B8ehKEGt.js","_app/immutable/chunks/PVG7Em25.js","_app/immutable/chunks/E71pIGAW.js","_app/immutable/chunks/RnzTeRby.js","_app/immutable/chunks/CbltTT4D.js","_app/immutable/chunks/CZ0yUM0I.js","_app/immutable/chunks/BGFdVicR.js","_app/immutable/chunks/C4rMxlEz.js","_app/immutable/chunks/CR4jOsjE.js","_app/immutable/chunks/CoPQeE2P.js","_app/immutable/chunks/DZFQxItp.js","_app/immutable/chunks/CczVD_-I.js","_app/immutable/chunks/BFn_PWCM.js","_app/immutable/chunks/BLMq3BH0.js","_app/immutable/chunks/D2mbqurB.js","_app/immutable/chunks/DP7Et4ci.js","_app/immutable/chunks/KLYSBcZv.js","_app/immutable/chunks/BGGxhLCO.js","_app/immutable/chunks/8ie5RpLH.js","_app/immutable/chunks/BnkorlfL.js","_app/immutable/chunks/BR_bh9L_.js","_app/immutable/chunks/CTHXnj9k.js","_app/immutable/chunks/CvioT2Jg.js","_app/immutable/chunks/BQ1g71Ea.js","_app/immutable/chunks/DY5DzamU.js","_app/immutable/chunks/B8Any_pz.js","_app/immutable/chunks/D6BgCw_H.js"];
const stylesheets = ["_app/immutable/assets/Toaster.DIZjURCf.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=24-CgQx9X8X.js.map
