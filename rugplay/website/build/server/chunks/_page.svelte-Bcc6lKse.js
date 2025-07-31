import { p as push, k as attr_class, m as escape_html, a as pop, w as sanitize_props, b as spread_props, x as slot, o as stringify } from './index3-CthgjPPi.js';
import { S as Skeleton } from './skeleton-BrIQmewN.js';
import { C as Card } from './card-23nZlDN1.js';
import { C as Card_content } from './card-content-Nxnnhqv4.js';
import { C as Card_description } from './card-description-BhiVZbL9.js';
import './volume-settings-DX3g8058.js';
import { C as Card_header } from './card-header-CuTABeMH.js';
import { C as Card_title } from './card-title-CxxMmziD.js';
import { B as Badge } from './badge-Dggzsmpe.js';
import './websocket-DCXra_5K.js';
import { B as Button } from './button-Cg_QiDbD.js';
import { S as SEO } from './SEO-Cqzi3OcQ.js';
import { C as Chart_column } from './chart-column-CyZFLV3I.js';
import { A as Activity } from './activity-DwHC2T1s.js';
import { I as Icon } from './Icon2-Bqt4BCIy.js';
import './index2-D4eROfHK.js';
import './clsx-ChV9xqsO.js';
import './utils2-CLIgW4-x.js';
import './index-opKo-a_0.js';
import './notifications-5V396xYk.js';
import './user-data-CT5kjyaY.js';
import './Toaster.svelte_svelte_type_style_lang-CcrnaSIn.js';
import './index-server-DH7p7JOq.js';
import './client-s_UYc3Sk.js';
import './exports-Cv9LZeD1.js';
import './stores-Be-B7Xuq.js';

function Maximize($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M8 3H5a2 2 0 0 0-2 2v3" }],
    ["path", { "d": "M21 8V5a2 2 0 0 0-2-2h-3" }],
    ["path", { "d": "M3 16v3a2 2 0 0 0 2 2h3" }],
    ["path", { "d": "M16 21h3a2 2 0 0 0 2-2v-3" }]
  ];
  Icon($$payload, spread_props([
    { name: "maximize" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function _page($$payload, $$props) {
  push();
  let coins = [];
  let lastUpdated = /* @__PURE__ */ new Date();
  let isLiveUpdatesEnabled = true;
  let fullscreenContainer;
  ({
    series: [
      {
        data: coins.map((coin) => {
          const change = coin.priceChange24h;
          if (Math.abs(change) < 0.5) {
            return {
              x: coin.symbol,
              y: coin.marketCap,
              fillColor: "rgba(107,114,128,0.3)"
            };
          }
          const intensity = Math.min(Math.abs(change) / 100, 1);
          const alpha = 0.3 + intensity * 0.7;
          const base = change >= 0 ? "16,163,74" : "220,38,38";
          return {
            x: coin.symbol,
            y: coin.marketCap,
            fillColor: `rgba(${base},${alpha})`
          };
        })
      }
    ]
  });
  async function toggleFullscreen() {
    if (!document.fullscreenElement) {
      try {
        await fullscreenContainer.requestFullscreen();
      } catch (err) {
        console.error("Error attempting to enable fullscreen:", err);
      }
    } else {
      try {
        await document.exitFullscreen();
      } catch (err) {
        console.error("Error attempting to exit fullscreen:", err);
      }
    }
  }
  SEO($$payload, {
    title: "Treemap - Rugplay",
    description: "Interactive virtual cryptocurrency market treemap visualization. View simulated market cap and 24h price changes for all coins in our trading game's visual treemap format.",
    keywords: "virtual cryptocurrency treemap, market visualization game, crypto market cap simulation, price changes game, market analysis simulator"
  });
  $$payload.out += `<!----> <div${attr_class(`treemap-container ${stringify("")}`, "svelte-57rotx")}><div${attr_class(`container mx-auto px-4 py-8 ${stringify("")}`, "svelte-57rotx")}><div class="mb-6 svelte-57rotx"><div class="mb-2 flex items-center justify-between"><div class="flex items-center gap-3">`;
  Chart_column($$payload, { class: "h-6 w-6" });
  $$payload.out += `<!----> <h1 class="text-2xl font-bold">Market Treemap</h1></div> <div class="flex items-center gap-2">`;
  Button($$payload, {
    variant: "outline",
    size: "sm",
    onclick: () => isLiveUpdatesEnabled = !isLiveUpdatesEnabled,
    class: isLiveUpdatesEnabled ? "border-green-500 text-green-500" : "border-red-500 text-red-500",
    children: ($$payload2) => {
      if (isLiveUpdatesEnabled) {
        $$payload2.out += "<!--[-->";
        Activity($$payload2, { class: "h-4 w-4" });
        $$payload2.out += `<!----> Live`;
      } else {
        $$payload2.out += "<!--[!-->";
        Activity($$payload2, { class: "h-4 w-4" });
        $$payload2.out += `<!----> Paused`;
      }
      $$payload2.out += `<!--]-->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Button($$payload, {
    variant: "outline",
    size: "sm",
    onclick: toggleFullscreen,
    children: ($$payload2) => {
      {
        $$payload2.out += "<!--[!-->";
        Maximize($$payload2, { class: "h-4 w-4" });
        $$payload2.out += `<!----> Fullscreen`;
      }
      $$payload2.out += `<!--]-->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div> <p class="text-muted-foreground">Visual representation of the cryptocurrency market. Size indicates market cap, color shows
				24h price change.</p> `;
  if (coins.length > 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p class="text-muted-foreground mt-1 text-sm">Last updated: ${escape_html(lastUpdated.toLocaleTimeString())}</p>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> `;
  if (coins.length === 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<!---->`;
    Card($$payload, {
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        Card_header($$payload2, {
          children: ($$payload3) => {
            $$payload3.out += `<!---->`;
            Card_title($$payload3, {
              class: "flex items-center gap-2",
              children: ($$payload4) => {
                Skeleton($$payload4, { class: "h-5 w-5" });
                $$payload4.out += `<!----> `;
                Skeleton($$payload4, { class: "h-6 w-48" });
                $$payload4.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> <!---->`;
            Card_description($$payload3, {
              children: ($$payload4) => {
                Skeleton($$payload4, { class: "h-4 w-64" });
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!---->`;
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!----> <!---->`;
        Card_content($$payload2, {
          children: ($$payload3) => {
            Skeleton($$payload3, { class: "h-[600px] w-full" });
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!---->`;
  } else if (coins.length === 0) {
    $$payload.out += "<!--[2-->";
    $$payload.out += `<!---->`;
    Card($$payload, {
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        Card_content($$payload2, {
          class: "p-8 text-center",
          children: ($$payload3) => {
            $$payload3.out += `<div class="text-muted-foreground">`;
            Chart_column($$payload3, { class: "mx-auto mb-2 h-12 w-12 opacity-50" });
            $$payload3.out += `<!----> <p class="text-lg font-medium">No coins available</p> <p class="text-sm">Create some coins to see the treemap visualization.</p></div>`;
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<!---->`;
    Card($$payload, {
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        Card_content($$payload2, {
          class: "p-6",
          children: ($$payload3) => {
            $$payload3.out += `<div class="text-muted-foreground mb-4 flex flex-wrap gap-4 text-sm"><div class="flex items-center gap-2"><div class="h-3 w-3 rounded bg-green-500"></div> <span>Positive 24h change</span></div> <div class="flex items-center gap-2"><div class="h-3 w-3 rounded bg-red-500"></div> <span>Negative 24h change</span></div> `;
            Badge($$payload3, {
              variant: "outline",
              class: "ml-auto",
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(coins.length)} coins`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----></div> <div></div>`;
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!--]--></div></div>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-Bcc6lKse.js.map
