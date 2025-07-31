import { p as push, u as store_get, C as head, m as escape_html, d as attr, v as unsubscribe_stores, a as pop } from './index3-CthgjPPi.js';
import { p as page } from './stores-Be-B7Xuq.js';

function SEO($$payload, $$props) {
  push();
  var $$store_subs;
  let {
    title = "Rugplay",
    description = "Experience realistic cryptocurrency trading simulation game with AI-powered markets, rug pull mechanics, and virtual currencies. Learn crypto trading without financial risk in this educational game.",
    type = "website",
    image = "/apple-touch-icon.png",
    imageAlt = "Rugplay Logo",
    keywords = "",
    author = "Outpoot",
    canonicalUrl = "",
    noindex = false,
    twitterCard = "summary_large_image"
  } = $$props;
  let currentUrl = store_get($$store_subs ??= {}, "$page", page)?.url?.href || "";
  let canonical = canonicalUrl || currentUrl;
  let fullImageUrl = image?.startsWith("http") ? image : `${store_get($$store_subs ??= {}, "$page", page)?.url?.origin || "https://rugplay.com"}${image}`;
  let defaultKeywords = "cryptocurrency simulation, trading game, crypto simulator, virtual trading, rug pull simulation, defi game, blockchain simulation, bitcoin simulator, ethereum game, trading simulator, educational game, crypto learning";
  let allKeywords = keywords ? `${defaultKeywords}, ${keywords}` : defaultKeywords;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(title)}</title>`;
    $$payload2.out += `<meta name="description"${attr("content", description)}/> <meta name="keywords"${attr("content", allKeywords)}/> <meta name="author"${attr("content", author)}/> `;
    if (noindex) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta name="robots" content="noindex, nofollow"/>`;
    } else {
      $$payload2.out += "<!--[!-->";
      $$payload2.out += `<meta name="robots" content="index, follow"/>`;
    }
    $$payload2.out += `<!--]--> `;
    if (canonical) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<link rel="canonical"${attr("href", canonical)}/>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> <meta property="og:title"${attr("content", title)}/> <meta property="og:description"${attr("content", description)}/> <meta property="og:type"${attr("content", type)}/> <meta property="og:url"${attr("content", currentUrl)}/> <meta property="og:image"${attr("content", fullImageUrl)}/> <meta property="og:image:alt"${attr("content", imageAlt)}/> <meta property="og:site_name" content="Rugplay"/> <meta property="og:locale" content="en_US"/> <meta name="twitter:card"${attr("content", twitterCard)}/> <meta name="twitter:title"${attr("content", title)}/> <meta name="twitter:description"${attr("content", description)}/> <meta name="twitter:image"${attr("content", fullImageUrl)}/> <meta name="twitter:image:alt"${attr("content", imageAlt)}/> <meta name="twitter:site" content="@facedevstuff"/> <meta name="twitter:creator" content="@facedevstuff"/> <meta name="theme-color" content="#fb2c36"/> <meta name="application-name" content="Rugplay"/> <meta name="apple-mobile-web-app-title" content="Rugplay"/> <meta name="apple-mobile-web-app-capable" content="yes"/> <meta name="apple-mobile-web-app-status-bar-style" content="default"/>`;
  });
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { SEO as S };
//# sourceMappingURL=SEO-Cqzi3OcQ.js.map
