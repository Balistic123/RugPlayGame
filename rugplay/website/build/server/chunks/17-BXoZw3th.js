const load = async ({ url }) => {
  return {
    filters: {
      searchQuery: url.searchParams.get("search") || "",
      sortBy: url.searchParams.get("sortBy") || "marketCap",
      sortOrder: url.searchParams.get("sortOrder") || "desc",
      priceFilter: url.searchParams.get("priceFilter") || "all",
      changeFilter: url.searchParams.get("changeFilter") || "all",
      page: Math.max(1, parseInt(url.searchParams.get("page") || "1") || 1)
    }
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 17;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-G7H77OLw.js')).default;
const server_id = "src/routes/market/+page.server.ts";
const imports = ["_app/immutable/nodes/17.B56oncbZ.js","_app/immutable/chunks/BiLdCT7w.js","_app/immutable/chunks/Dc9Cd6uL.js","_app/immutable/chunks/DBnYf9wq.js","_app/immutable/chunks/4JrI1xkN.js","_app/immutable/chunks/DT6MbhOo.js","_app/immutable/chunks/DKQvO5e2.js","_app/immutable/chunks/BE8a_9Ge.js","_app/immutable/chunks/aor5dgAF.js","_app/immutable/chunks/D0g6TdLa.js","_app/immutable/chunks/b_f0gCBc.js","_app/immutable/chunks/QqaU5kKh.js","_app/immutable/chunks/BFn_PWCM.js","_app/immutable/chunks/CZ0yUM0I.js","_app/immutable/chunks/DIGQk_Pb.js","_app/immutable/chunks/D0Gox408.js","_app/immutable/chunks/BBRRXwej.js","_app/immutable/chunks/CbltTT4D.js","_app/immutable/chunks/BGFdVicR.js","_app/immutable/chunks/PVG7Em25.js","_app/immutable/chunks/B8ehKEGt.js","_app/immutable/chunks/BYMHPgMA.js","_app/immutable/chunks/BA--Nk-P.js","_app/immutable/chunks/Bnc3f7Jj.js","_app/immutable/chunks/BZ8NTllV.js","_app/immutable/chunks/C4rMxlEz.js","_app/immutable/chunks/CR4jOsjE.js","_app/immutable/chunks/C1-Kh6se.js","_app/immutable/chunks/CGj66UC_.js","_app/immutable/chunks/5J9eaWb4.js","_app/immutable/chunks/BvtTpaCk.js","_app/immutable/chunks/Ct87CVwI.js","_app/immutable/chunks/KLYSBcZv.js","_app/immutable/chunks/DZFQxItp.js","_app/immutable/chunks/D50NRik3.js","_app/immutable/chunks/BGGxhLCO.js","_app/immutable/chunks/8ie5RpLH.js","_app/immutable/chunks/BnkorlfL.js","_app/immutable/chunks/BR_bh9L_.js","_app/immutable/chunks/DyH1ohg8.js","_app/immutable/chunks/BdYe1mLp.js","_app/immutable/chunks/DrySvPfe.js"];
const stylesheets = ["_app/immutable/assets/index.CV-KWLNP.css","_app/immutable/assets/Toaster.DIZjURCf.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=17-BXoZw3th.js.map
