const load = async (event) => {
  if (!event.request.headers.get("cache-control")) {
    event.setHeaders({
      "Cache-Control": "private, max-age=30"
    });
  }
  return {
    userSession: event.locals.userSession,
    url: event.url.pathname
  };
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-BACdjqvf.js')).default;
const universal = {
  "ssr": false
};
const universal_id = "src/routes/+layout.ts";
const server_id = "src/routes/+layout.server.ts";
const imports = ["_app/immutable/nodes/0.ib3KS9VN.js","_app/immutable/chunks/BiLdCT7w.js","_app/immutable/chunks/Dc9Cd6uL.js","_app/immutable/chunks/DBnYf9wq.js","_app/immutable/chunks/aor5dgAF.js","_app/immutable/chunks/DKQvO5e2.js","_app/immutable/chunks/4JrI1xkN.js","_app/immutable/chunks/B8ehKEGt.js","_app/immutable/chunks/CoPQeE2P.js","_app/immutable/chunks/DIGQk_Pb.js","_app/immutable/chunks/D0Gox408.js","_app/immutable/chunks/CbltTT4D.js","_app/immutable/chunks/CZ0yUM0I.js","_app/immutable/chunks/BBRRXwej.js","_app/immutable/chunks/BGFdVicR.js","_app/immutable/chunks/CR4jOsjE.js","_app/immutable/chunks/D50NRik3.js","_app/immutable/chunks/PVG7Em25.js","_app/immutable/chunks/BYMHPgMA.js","_app/immutable/chunks/DT6MbhOo.js","_app/immutable/chunks/BpTyYBFh.js","_app/immutable/chunks/BR_bh9L_.js","_app/immutable/chunks/DGlMOKq6.js","_app/immutable/chunks/DZFQxItp.js","_app/immutable/chunks/CpfRlYS9.js","_app/immutable/chunks/CGj66UC_.js","_app/immutable/chunks/C1-Kh6se.js","_app/immutable/chunks/BA--Nk-P.js","_app/immutable/chunks/CqEP-Wsq.js","_app/immutable/chunks/BvtTpaCk.js","_app/immutable/chunks/CTHXnj9k.js","_app/immutable/chunks/DORihvSD.js","_app/immutable/chunks/BUFrtusw.js","_app/immutable/chunks/QCXksuBD.js","_app/immutable/chunks/BIYb4alH.js","_app/immutable/chunks/BnkorlfL.js","_app/immutable/chunks/khItcEfd.js","_app/immutable/chunks/BFn_PWCM.js","_app/immutable/chunks/HRCXpe-l.js","_app/immutable/chunks/C2PN0pux.js","_app/immutable/chunks/5J9eaWb4.js","_app/immutable/chunks/Ct87CVwI.js","_app/immutable/chunks/pD04GNng.js","_app/immutable/chunks/DpU7WkdO.js","_app/immutable/chunks/BDsQC5Ro.js","_app/immutable/chunks/D6BgCw_H.js","_app/immutable/chunks/CaMfMQj8.js","_app/immutable/chunks/CvioT2Jg.js","_app/immutable/chunks/BQ1g71Ea.js","_app/immutable/chunks/CQYtVDBS.js","_app/immutable/chunks/BiOB00VH.js","_app/immutable/chunks/BdYe1mLp.js","_app/immutable/chunks/DrySvPfe.js","_app/immutable/chunks/rNNGKTep.js","_app/immutable/chunks/pY7SPrgy.js","_app/immutable/chunks/B2-4It8u.js","_app/immutable/chunks/Dk0Zqrvd.js","_app/immutable/chunks/DY5DzamU.js","_app/immutable/chunks/CEKxM8C4.js","_app/immutable/chunks/CbJOjk0Q.js","_app/immutable/chunks/GynVZlbq.js","_app/immutable/chunks/RhthXWZe.js","_app/immutable/chunks/DP7Et4ci.js","_app/immutable/chunks/BLMq3BH0.js"];
const stylesheets = ["_app/immutable/assets/Toaster.DIZjURCf.css","_app/immutable/assets/0.CrOaZxgm.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets, universal, universal_id };
//# sourceMappingURL=0-ClT-eAbJ.js.map
