import { p as push, q as copy_payload, t as assign_payload, c as bind_props, a as pop, w as sanitize_props, b as spread_props, x as slot, e as ensure_array_like, m as escape_html, d as attr, k as attr_class, o as stringify } from './index3-CthgjPPi.js';
import { I as Icon } from './Icon2-Bqt4BCIy.js';
import { R as Root, D as Dialog_content } from './index5-D35Z60w5.js';
import { B as Button } from './button-Cg_QiDbD.js';
import './badge-Dggzsmpe.js';
import { C as Coins } from './coins-DVrva8oo.js';
import { C as Chart_column } from './chart-column-CyZFLV3I.js';
import { T as Trending_up } from './trending-up-DbscwFys.js';
import { T as Trending_down } from './trending-down-DcTfhCCA.js';
import { a as Target, T as Trophy } from './trophy-37PUKEsG.js';
import { C as Chevron_left } from './chevron-left-Cefe-Bo5.js';
import { C as Chevron_right } from './chevron-right-BZJYVhmO.js';

function Book_open($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M12 7v14" }],
    [
      "path",
      {
        "d": "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "book-open" },
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
function Dice_1($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "rect",
      {
        "width": "18",
        "height": "18",
        "x": "3",
        "y": "3",
        "rx": "2",
        "ry": "2"
      }
    ],
    ["path", { "d": "M12 12h.01" }]
  ];
  Icon($$payload, spread_props([
    { name: "dice-1" },
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
function Shield($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "shield" },
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
function User($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
      }
    ],
    ["circle", { "cx": "12", "cy": "7", "r": "4" }]
  ];
  Icon($$payload, spread_props([
    { name: "user" },
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
function UserManualModal($$payload, $$props) {
  push();
  let { open = false } = $$props;
  const tips = [
    {
      id: 1,
      title: "Welcome to Rugplay!",
      description: "Rugplay is a cryptocurrency trading simulator where you can practice trading without real financial risk. Start with virtual money, create coins, bet on prediction markets, and most importantly, rugpull!",
      icon: Book_open,
      image: "/tips/cover.avif"
    },
    {
      id: 2,
      title: "Creating Your First Coin",
      description: 'Click "Create coin" in the sidebar to launch your own cryptocurrency. Choose a unique name, symbol, and upload an icon. Each coin starts at $0.000001',
      icon: Coins,
      image: "/tips/coin.avif"
    },
    {
      id: 3,
      title: "Understanding Liquidity Pools",
      description: 'Each coin has a "liquidity pool," with your coin and base currency ($). Prices are determined by the ratio between these amounts. When you buy, the price goes up; when you sell, it goes down.',
      icon: Chart_column,
      image: "/tips/liquidity-pools.avif"
    },
    {
      id: 4,
      title: "AMM - Automated Market Maker",
      description: 'Rugplay uses an AMM system where prices are calculated automatically based on supply and demand. The more you buy, the higher the price goes. The more you sell, the lower it drops. Large trades create "slippage" - the price change during your trade.',
      icon: Chart_column,
      image: "/tips/amm.avif"
    },
    {
      id: 5,
      title: "Buying Coins",
      description: `Navigate to any coin page and click "Buy". Enter the amount you want to spend. The AMM (Automated Market Maker) will show you exactly how many coins you'll receive, including slippage.`,
      icon: Trending_up,
      image: "/tips/buying.avif"
    },
    {
      id: 6,
      title: "Selling Coins",
      description: 'On a coin page, click "Sell" and enter how many coins you want to sell. You can see your holdings in your Portfolio. Remember: selling large amounts can significantly impact the price!',
      icon: Trending_down,
      image: "/tips/selling.avif"
    },
    {
      id: 7,
      title: 'What is a "Rug Pull"?',
      description: 'A "rug pull" happens when large holders (including coin creators) sell their holdings all at once, crashing the price.',
      icon: Target,
      image: "/tips/rugpull.avif"
    },
    {
      id: 8,
      title: "Portfolio Management",
      description: "Check your Portfolio page to see all your holdings, their current values, and recent transactions. Track your performance and see which investments are doing well.",
      icon: Chart_column,
      image: "/tips/portfolio.avif"
    },
    {
      id: 9,
      title: "Market Overview",
      description: "The Market page shows all available coins sorted by market cap, volume, and price changes. Use this to discover trending coins and investment opportunities.",
      icon: Trophy,
      image: "/tips/market.avif"
    },
    {
      id: 10,
      title: "Hopium - Prediction Markets",
      description: "Hopium lets you bet on yes/no questions about the future. AI automatically resolves questions based on real-world data. Test your prediction skills and earn from correct forecasts. Hold $100,000 in cash to create your own Hopium question :)",
      icon: Target,
      image: "/tips/hopium.avif"
    },
    {
      id: 11,
      title: "Gambling Games",
      description: "Visit the Gambling section for high-risk, high-reward games. Remember: these are pure chance games. Only gamble what you can afford to lose, even in this simulation!",
      icon: Dice_1,
      image: "/tips/gambling.avif"
    },
    {
      id: 12,
      title: "Live Trades Feed",
      description: "Watch the Live Trades page to see real-time trading activity across all coins. This helps you spot trending coins and understand market sentiment. The sidebar shows $1,000+ trades, while the main feed displays every transaction.",
      icon: Chart_column,
      image: "/tips/live.avif"
    },
    {
      id: 13,
      title: "Treemap Visualization",
      description: "The Treemap page shows a visual representation of the entire market. Larger squares represent higher market caps, and colors show price performance.",
      icon: Chart_column,
      image: "/tips/treemap.avif"
    },
    {
      id: 14,
      title: "Leaderboards",
      description: "Compete with other users on the Leaderboard. Climb the ranks by making smart investment decisions!",
      icon: Trophy,
      image: "/tips/leaderboard.avif"
    },
    {
      id: 15,
      title: "Daily Rewards",
      description: "Log in daily to claim free money! Your login streak increases your daily bonus. Consistent players get more virtual cash to invest.",
      icon: Coins,
      image: "/tips/daily.avif"
    },
    {
      id: 16,
      title: "Concluding",
      description: "Start small, diversify your holdings, and don't invest everything in one coin. Watch for coins with diversified holders to avoid absolute rug pulls. People get smart!",
      icon: Trending_up,
      image: "/tips/ender.avif"
    }
  ];
  let currentPage = 0;
  let currentTip = tips[currentPage];
  function nextTip() {
    if (currentPage < tips.length - 1) {
      currentPage++;
    }
  }
  function previousTip() {
    if (currentPage > 0) {
      currentPage--;
    }
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!---->`;
    Root($$payload2, {
      get open() {
        return open;
      },
      set open($$value) {
        open = $$value;
        $$settled = false;
      },
      children: ($$payload3) => {
        $$payload3.out += `<!---->`;
        Dialog_content($$payload3, {
          class: "flex max-h-[90vh] w-full max-w-[calc(100%-2rem)] flex-col sm:max-w-2xl",
          children: ($$payload4) => {
            const each_array = ensure_array_like(tips);
            $$payload4.out += `<div class="min-h-0 flex-1 space-y-6 overflow-y-auto"><div class="space-y-4"><div class="flex items-center gap-3"><div class="bg-muted rounded-lg p-3"><!---->`;
            currentTip.icon($$payload4, { class: "h-8 w-8" });
            $$payload4.out += `<!----></div> <h3 class="text-xl font-semibold">${escape_html(currentTip.title)}</h3></div> <p class="text-muted-foreground leading-relaxed">${escape_html(currentTip.description)}</p> `;
            if (currentTip.image) {
              $$payload4.out += "<!--[-->";
              $$payload4.out += `<div class="overflow-hidden rounded-lg border"><img${attr("src", currentTip.image)}${attr("alt", currentTip.title)} class="h-auto w-full"/></div>`;
            } else {
              $$payload4.out += "<!--[!-->";
            }
            $$payload4.out += `<!--]--></div> <div class="flex items-center justify-center gap-2"><!--[-->`;
            for (let index = 0, $$length = each_array.length; index < $$length; index++) {
              each_array[index];
              $$payload4.out += `<button${attr("aria-label", `Go to page ${index + 1}`)}${attr_class(`h-2 w-2 rounded-full transition-colors ${stringify(index === currentPage ? "bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/50")}`)}${attr("aria-current", index === currentPage ? "page" : void 0)}></button>`;
            }
            $$payload4.out += `<!--]--></div></div> <div class="flex items-center justify-between border-t pt-4">`;
            Button($$payload4, {
              variant: "outline",
              onclick: previousTip,
              disabled: currentPage === 0,
              class: "flex items-center gap-2",
              children: ($$payload5) => {
                Chevron_left($$payload5, { class: "h-4 w-4" });
                $$payload5.out += `<!----> Previous`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> <div class="flex items-center gap-2"><span class="text-muted-foreground text-sm">Tip ${escape_html(currentPage + 1)} of ${escape_html(tips.length)}</span></div> `;
            Button($$payload4, {
              variant: "outline",
              onclick: nextTip,
              disabled: currentPage === tips.length - 1,
              class: "flex items-center gap-2",
              children: ($$payload5) => {
                $$payload5.out += `<!---->Next `;
                Chevron_right($$payload5, { class: "h-4 w-4" });
                $$payload5.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----></div>`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!---->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { open });
  pop();
}

export { Book_open as B, Shield as S, UserManualModal as U, User as a };
//# sourceMappingURL=UserManualModal-so0dpq85.js.map
