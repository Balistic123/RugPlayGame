import { q as copy_payload, t as assign_payload, C as head, w as sanitize_props, b as spread_props, x as slot } from './index3-CthgjPPi.js';
import { C as Card } from './card-23nZlDN1.js';
import { C as Card_content } from './card-content-Nxnnhqv4.js';
import './volume-settings-DX3g8058.js';
import { C as Card_header } from './card-header-CuTABeMH.js';
import { C as Card_title } from './card-title-CxxMmziD.js';
import { B as Button } from './button-Cg_QiDbD.js';
import { U as UserManualModal, B as Book_open, a as User, S as Shield } from './UserManualModal-so0dpq85.js';
import { C as Coins } from './coins-DVrva8oo.js';
import { T as Trending_up } from './trending-up-DbscwFys.js';
import { I as Icon } from './Icon2-Bqt4BCIy.js';
import './index2-D4eROfHK.js';
import './clsx-ChV9xqsO.js';
import './utils2-CLIgW4-x.js';
import './index-opKo-a_0.js';
import './index5-D35Z60w5.js';
import './scroll-lock-BUIxTk31.js';
import './create-id-Bxd404XN.js';
import './index-server-DH7p7JOq.js';
import './events-CF0F77H5.js';
import './Icon-DETra0Ze.js';
import './badge-Dggzsmpe.js';
import './chart-column-CyZFLV3I.js';
import './trending-down-DcTfhCCA.js';
import './trophy-37PUKEsG.js';
import './chevron-left-Cefe-Bo5.js';
import './chevron-right-BZJYVhmO.js';

function Github($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
      }
    ],
    ["path", { "d": "M9 18c-4.51 2-5-2-7-2" }]
  ];
  Icon($$payload, spread_props([
    { name: "github" },
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
function Twitter($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "twitter" },
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
function Youtube($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
      }
    ],
    ["path", { "d": "m10 15 5-3-5-3z" }]
  ];
  Icon($$payload, spread_props([
    { name: "youtube" },
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
function _page($$payload) {
  let showUserManual = false;
  function handleManual() {
    showUserManual = !showUserManual;
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    head($$payload2, ($$payload3) => {
      $$payload3.title = `<title>About - Rugplay</title>`;
      $$payload3.out += `<meta name="description" content="Learn about Rugplay - a realistic cryptocurrency trading simulation focusing on DeFi risks and mechanics."/>`;
    });
    UserManualModal($$payload2, {
      get open() {
        return showUserManual;
      },
      set open($$value) {
        showUserManual = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----> <div class="container mx-auto space-y-8 px-4 py-8"><div class="space-y-4 text-center"><div class="mb-4 flex items-center justify-center gap-2"><img src="/rugplay.svg" class="h-12 w-12" alt="Rugplay"/> <h1 class="text-4xl font-bold">Rugplay</h1></div> <p class="text-muted-foreground mx-auto max-w-2xl text-lg">A crypto trading simulator where you can practice trading without losing real money. Create
			coins, trade them, and rug pull!</p> <div class="flex flex-wrap justify-center gap-4">`;
    Button($$payload2, {
      onclick: handleManual,
      size: "lg",
      children: ($$payload3) => {
        Book_open($$payload3, { class: "h-4 w-4" });
        $$payload3.out += `<!----> User Manual`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----></div></div> <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">`;
    Card($$payload2, {
      children: ($$payload3) => {
        Card_header($$payload3, {
          children: ($$payload4) => {
            Card_title($$payload4, {
              class: "flex items-center gap-2",
              children: ($$payload5) => {
                Coins($$payload5, { class: "text-primary h-5 w-5" });
                $$payload5.out += `<!----> About Rugplay`;
              },
              $$slots: { default: true }
            });
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> `;
        Card_content($$payload3, {
          children: ($$payload4) => {
            $$payload4.out += `<div class="space-y-3"><p class="text-muted-foreground text-sm">Rugplay is a realistic cryptocurrency trading simulation that focuses on DeFi
						(Decentralized Finance) mechanics and the inherent risks of decentralized trading.</p> <p class="text-muted-foreground text-sm">Practice trading strategies, create your own coins, and learn about market dynamics
						without any real financial risk. Experience AMM trading, liquidity pools, and even rug
						pulls. (duh)</p> <p class="text-muted-foreground text-sm">Join the community of degenerates where paranoia is profitable!</p></div>`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    Card($$payload2, {
      children: ($$payload3) => {
        Card_header($$payload3, {
          children: ($$payload4) => {
            Card_title($$payload4, {
              class: "flex items-center gap-2",
              children: ($$payload5) => {
                Trending_up($$payload5, { class: "text-primary h-5 w-5" });
                $$payload5.out += `<!----> Features`;
              },
              $$slots: { default: true }
            });
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> `;
        Card_content($$payload3, {
          children: ($$payload4) => {
            $$payload4.out += `<div class="space-y-2"><div class="flex items-center gap-2 text-sm"><span>🪙</span> <span>Create coins</span></div> <div class="flex items-center gap-2 text-sm"><span>🟢</span> <span>Buy coins</span></div> <div class="flex items-center gap-2 text-sm"><span>🔴</span> <span>Sell coins</span></div> <div class="flex items-center gap-2 text-sm"><span>⚖️</span> <span>Bet on questions (similar to Polymarket)</span></div> <div class="flex items-center gap-2 text-sm"><span>🎲</span> <span>Gamble it all</span></div> <div class="flex items-center gap-2 text-sm"><span>📊</span> <span>View a Treemap graph of the entire market</span></div> <div class="flex items-center gap-2 text-sm"><span>🏆</span> <span>Compete on leaderboards</span></div></div>`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    Card($$payload2, {
      children: ($$payload3) => {
        Card_header($$payload3, {
          children: ($$payload4) => {
            Card_title($$payload4, {
              class: "flex items-center gap-2",
              children: ($$payload5) => {
                User($$payload5, { class: "text-primary h-5 w-5" });
                $$payload5.out += `<!----> Credits`;
              },
              $$slots: { default: true }
            });
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> `;
        Card_content($$payload3, {
          children: ($$payload4) => {
            $$payload4.out += `<div class="space-y-4"><p class="text-muted-foreground text-sm">Created by <strong>FaceDev</strong></p> <div class="flex flex-wrap gap-2">`;
            Button($$payload4, {
              variant: "outline",
              size: "sm",
              href: "https://youtube.com/@FaceDevStuff",
              target: "_blank",
              rel: "noopener",
              children: ($$payload5) => {
                Youtube($$payload5, { class: "h-4 w-4" });
                $$payload5.out += `<!----> YouTube`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Button($$payload4, {
              variant: "outline",
              size: "sm",
              href: "https://x.com/facedevstuff",
              target: "_blank",
              rel: "noopener",
              children: ($$payload5) => {
                Twitter($$payload5, { class: "h-4 w-4" });
                $$payload5.out += `<!----> Twitter`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Button($$payload4, {
              variant: "outline",
              size: "sm",
              href: "https://github.com/outpoot/rugplay",
              target: "_blank",
              rel: "noopener",
              children: ($$payload5) => {
                Github($$payload5, { class: "h-4 w-4" });
                $$payload5.out += `<!----> GitHub`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Button($$payload4, {
              variant: "outline",
              size: "sm",
              href: "https://discord.gg/facedev",
              target: "_blank",
              rel: "noopener",
              children: ($$payload5) => {
                Shield($$payload5, { class: "h-4 w-4" });
                $$payload5.out += `<!----> Discord`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----></div></div>`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----></div></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DDKrveqs.js.map
