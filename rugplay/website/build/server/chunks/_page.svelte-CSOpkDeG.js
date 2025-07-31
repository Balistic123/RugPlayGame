import { p as push, C as head, a as pop, u as store_get, m as escape_html, e as ensure_array_like, v as unsubscribe_stores } from './index3-CthgjPPi.js';
import { C as Card } from './card-23nZlDN1.js';
import { C as Card_content } from './card-content-Nxnnhqv4.js';
import { l as formatQuantity, f as formatValue, b as getPublicUrl, m as formatRelativeTime } from './utils2-CLIgW4-x.js';
import { C as Card_header } from './card-header-CuTABeMH.js';
import { C as Card_title } from './card-title-CxxMmziD.js';
import { B as Badge } from './badge-Dggzsmpe.js';
import { A as Avatar, a as Avatar_fallback } from './avatar-fallback-BVDrtls6.js';
import { A as Avatar_image } from './avatar-image-BuX3_Vs_.js';
import { R as Root, H as Hover_card_trigger, a as Hover_card_content, U as UserProfilePreview } from './UserProfilePreview-DXQRal1C.js';
import { b as allTradesStore, i as isLoadingTrades } from './websocket-DCXra_5K.js';
import { g as goto } from './client-s_UYc3Sk.js';
import { C as CoinIcon } from './CoinIcon-76OONbK8.js';
import { S as Skeleton } from './skeleton-BrIQmewN.js';
import { S as SEO } from './SEO-Cqzi3OcQ.js';
import { A as Activity } from './activity-DwHC2T1s.js';
import { T as Trending_up } from './trending-up-DbscwFys.js';
import { T as Trending_down } from './trending-down-DcTfhCCA.js';
import { C as Clock } from './clock-CAF8Dzum.js';
import './index2-D4eROfHK.js';
import './clsx-ChV9xqsO.js';
import './volume-settings-DX3g8058.js';
import './index-opKo-a_0.js';
import './create-id-Bxd404XN.js';
import './index-server-DH7p7JOq.js';
import './scroll-lock-BUIxTk31.js';
import './events-CF0F77H5.js';
import './popper-layer-force-mount-BIcocscF.js';
import './mounted-Tbl-FfLm.js';
import './use-grace-area.svelte-Dsn6tMKF.js';
import './notifications-5V396xYk.js';
import './user-data-CT5kjyaY.js';
import './Toaster.svelte_svelte_type_style_lang-CcrnaSIn.js';
import './exports-Cv9LZeD1.js';
import './stores-Be-B7Xuq.js';
import './Icon2-Bqt4BCIy.js';

function LiveTradeSkeleton($$payload) {
  const each_array = ensure_array_like(Array(8));
  Skeleton($$payload, { class: "h-6 w-20 rounded-full sm:ml-auto" });
  $$payload.out += `<!----> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    each_array[$$index];
    $$payload.out += `<div class="flex flex-col gap-3 rounded-lg border p-3 sm:flex-row sm:items-center sm:justify-between sm:p-4"><div class="flex items-center gap-3 sm:gap-4"><div class="min-w-0 flex-1"><div class="flex flex-wrap items-center gap-1 sm:gap-2"><div class="flex items-center gap-1.5">`;
    Skeleton($$payload, { class: "h-5 w-5 rounded-full sm:h-6 sm:w-6" });
    $$payload.out += `<!----> `;
    Skeleton($$payload, { class: "h-4 w-20 sm:h-5 sm:w-24" });
    $$payload.out += `<!----></div> `;
    Skeleton($$payload, { class: "h-3 w-12 sm:h-4 sm:w-16" });
    $$payload.out += `<!----> <div class="flex items-center gap-1">`;
    Skeleton($$payload, { class: "h-4 w-4 rounded-full sm:h-5 sm:w-5" });
    $$payload.out += `<!----> `;
    Skeleton($$payload, { class: "h-3 w-16 sm:h-4 sm:w-20" });
    $$payload.out += `<!----></div></div></div></div> <div class="flex items-center justify-between gap-2"><div class="flex items-center gap-2">`;
    Skeleton($$payload, { class: "h-3.5 w-3.5 sm:h-4 sm:w-4" });
    $$payload.out += `<!----> `;
    Skeleton($$payload, { class: "h-4 w-8 sm:h-4 sm:w-10" });
    $$payload.out += `<!----> `;
    Skeleton($$payload, { class: "h-4 w-1" });
    $$payload.out += `<!----> `;
    Skeleton($$payload, { class: "h-4 w-12 sm:h-4 sm:w-16" });
    $$payload.out += `<!----></div> <div class="flex items-center gap-1">`;
    Skeleton($$payload, { class: "h-3 w-3 sm:h-4 sm:w-4" });
    $$payload.out += `<!----> `;
    Skeleton($$payload, { class: "h-3 w-12 sm:h-4 sm:w-16" });
    $$payload.out += `<!----></div></div></div>`;
  }
  $$payload.out += `<!--]-->`;
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  function handleUserClick(username) {
    goto();
  }
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Live Trades - Rugplay</title>`;
    $$payload2.out += `<meta name="description" content="Real-time cryptocurrency trading activity on Rugplay"/>`;
  });
  SEO($$payload, {
    title: "Live Trades - Rugplay",
    description: "Watch real-time virtual cryptocurrency trading activity in the Rugplay simulation game. See live trades, user activity, and market movements as they happen.",
    keywords: "live crypto trades game, real-time trading simulation, virtual trading activity, crypto game stream"
  });
  $$payload.out += `<!----> <div class="container mx-auto max-w-7xl p-6"><header class="mb-8"><div><h1 class="text-2xl font-bold sm:text-3xl">Live Trades</h1> <p class="text-muted-foreground text-sm sm:text-base">Real-time trading activity for all trades</p></div></header> `;
  Card($$payload, {
    children: ($$payload2) => {
      Card_header($$payload2, {
        children: ($$payload3) => {
          Card_title($$payload3, {
            class: "flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-2",
            children: ($$payload4) => {
              $$payload4.out += `<div class="flex items-center gap-2">`;
              Activity($$payload4, { class: "h-5 w-5" });
              $$payload4.out += `<!----> Stream</div> `;
              if (store_get($$store_subs ??= {}, "$allTradesStore", allTradesStore).length > 0) {
                $$payload4.out += "<!--[-->";
                Badge($$payload4, {
                  variant: "secondary",
                  class: "w-fit sm:ml-auto",
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->${escape_html(store_get($$store_subs ??= {}, "$allTradesStore", allTradesStore).length)} trade${escape_html(store_get($$store_subs ??= {}, "$allTradesStore", allTradesStore).length !== 1 ? "s" : "")}`;
                  },
                  $$slots: { default: true }
                });
              } else {
                $$payload4.out += "<!--[!-->";
              }
              $$payload4.out += `<!--]-->`;
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Card_content($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<div class="space-y-3">`;
          if (store_get($$store_subs ??= {}, "$isLoadingTrades", isLoadingTrades)) {
            $$payload3.out += "<!--[-->";
            LiveTradeSkeleton($$payload3);
          } else if (store_get($$store_subs ??= {}, "$allTradesStore", allTradesStore).length === 0) {
            $$payload3.out += "<!--[1-->";
            $$payload3.out += `<div class="flex flex-col items-center justify-center py-12 text-center sm:py-16">`;
            Activity($$payload3, {
              class: "text-muted-foreground/50 mb-4 h-12 w-12 sm:h-16 sm:w-16"
            });
            $$payload3.out += `<!----> <h3 class="mb-2 text-base font-semibold sm:text-lg">Waiting for trades...</h3> <p class="text-muted-foreground text-sm sm:text-base">All trades will appear here in real-time.</p></div>`;
          } else {
            $$payload3.out += "<!--[!-->";
            const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$allTradesStore", allTradesStore));
            $$payload3.out += `<!--[-->`;
            for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
              let trade = each_array[$$index];
              $$payload3.out += `<div class="hover:bg-muted/50 flex flex-col gap-3 rounded-lg border p-3 transition-colors sm:flex-row sm:items-center sm:justify-between sm:p-4"><div class="flex items-center gap-3 sm:gap-4"><div class="min-w-0 flex-1"><div class="flex flex-wrap items-center gap-1 sm:gap-2">`;
              if (trade.type === "TRANSFER_IN" || trade.type === "TRANSFER_OUT") {
                $$payload3.out += "<!--[-->";
                if (trade.amount > 0) {
                  $$payload3.out += "<!--[-->";
                  $$payload3.out += `<button class="flex cursor-pointer items-center gap-1.5 transition-opacity hover:underline hover:opacity-80">`;
                  CoinIcon($$payload3, {
                    icon: trade.coinIcon,
                    symbol: trade.coinSymbol,
                    name: trade.coinName || trade.coinSymbol,
                    size: 5,
                    class: "sm:size-6"
                  });
                  $$payload3.out += `<!----> <span class="font-mono text-sm font-medium sm:text-base">${escape_html(formatQuantity(trade.amount))} *${escape_html(trade.coinSymbol)}</span></button> <span class="text-muted-foreground text-xs sm:text-sm">${escape_html(trade.type === "TRANSFER_IN" ? "received by" : "sent by")}</span>`;
                } else {
                  $$payload3.out += "<!--[!-->";
                  $$payload3.out += `<span class="font-mono text-sm font-medium sm:text-base">${escape_html(formatValue(trade.totalValue))}</span> <span class="text-muted-foreground text-xs sm:text-sm">${escape_html(trade.type === "TRANSFER_IN" ? "received by" : "sent by")}</span>`;
                }
                $$payload3.out += `<!--]-->`;
              } else {
                $$payload3.out += "<!--[!-->";
                $$payload3.out += `<button class="flex cursor-pointer items-center gap-1.5 transition-opacity hover:underline hover:opacity-80">`;
                CoinIcon($$payload3, {
                  icon: trade.coinIcon,
                  symbol: trade.coinSymbol,
                  name: trade.coinName || trade.coinSymbol,
                  size: 5,
                  class: "sm:size-6"
                });
                $$payload3.out += `<!----> <span class="font-mono text-sm font-medium sm:text-base">${escape_html(formatQuantity(trade.amount))} *${escape_html(trade.coinSymbol)}</span></button> <span class="text-muted-foreground text-xs sm:text-sm">${escape_html(trade.type === "BUY" ? "bought by" : "sold by")}</span>`;
              }
              $$payload3.out += `<!--]--> `;
              Root($$payload3, {
                children: ($$payload4) => {
                  Hover_card_trigger($$payload4, {
                    class: "cursor-pointer font-medium underline-offset-4 hover:underline",
                    onclick: () => handleUserClick(trade.username),
                    children: ($$payload5) => {
                      $$payload5.out += `<div class="flex items-center gap-1">`;
                      Avatar($$payload5, {
                        class: "h-4 w-4 sm:h-5 sm:w-5",
                        children: ($$payload6) => {
                          Avatar_image($$payload6, {
                            src: getPublicUrl(trade.userImage ?? null),
                            alt: trade.username
                          });
                          $$payload6.out += `<!----> `;
                          Avatar_fallback($$payload6, {
                            class: "text-xs",
                            children: ($$payload7) => {
                              $$payload7.out += `<!---->${escape_html(trade.username.charAt(0).toUpperCase())}`;
                            },
                            $$slots: { default: true }
                          });
                          $$payload6.out += `<!---->`;
                        },
                        $$slots: { default: true }
                      });
                      $$payload5.out += `<!----> <span class="max-w-[120px] truncate text-xs sm:max-w-none sm:text-sm">@${escape_html(trade.username)}</span></div>`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload4.out += `<!----> `;
                  Hover_card_content($$payload4, {
                    class: "w-80",
                    side: "top",
                    sideOffset: 3,
                    children: ($$payload5) => {
                      UserProfilePreview($$payload5, { userId: parseInt(trade.userId) });
                    },
                    $$slots: { default: true }
                  });
                  $$payload4.out += `<!---->`;
                },
                $$slots: { default: true }
              });
              $$payload3.out += `<!----></div></div></div> <div class="flex items-center justify-between gap-2"><div class="flex items-center gap-2 font-mono text-xs sm:text-sm">`;
              if (trade.type === "TRANSFER_IN" || trade.type === "TRANSFER_OUT") {
                $$payload3.out += "<!--[-->";
                Activity($$payload3, {
                  class: "h-3.5 w-3.5 text-blue-500 sm:h-4 sm:w-4"
                });
                $$payload3.out += `<!----> <span class="text-blue-500">${escape_html(trade.type === "TRANSFER_IN" ? "RECEIVED" : "SENT")}</span> <span class="text-muted-foreground">|</span> <span>${escape_html(formatValue(trade.totalValue))}</span>`;
              } else if (trade.type === "BUY") {
                $$payload3.out += "<!--[1-->";
                Trending_up($$payload3, {
                  class: "h-3.5 w-3.5 text-green-500 sm:h-4 sm:w-4"
                });
                $$payload3.out += `<!----> <span class="text-green-500">BUY</span> <span class="text-muted-foreground">|</span> <span>${escape_html(formatValue(trade.totalValue))}</span>`;
              } else {
                $$payload3.out += "<!--[!-->";
                Trending_down($$payload3, {
                  class: "h-3.5 w-3.5 text-red-500 sm:h-4 sm:w-4"
                });
                $$payload3.out += `<!----> <span class="text-red-500">SELL</span> <span class="text-muted-foreground">|</span> <span>${escape_html(formatValue(trade.totalValue))}</span>`;
              }
              $$payload3.out += `<!--]--></div> <div class="text-muted-foreground flex items-center gap-1 text-xs sm:gap-1 sm:text-sm">`;
              Clock($$payload3, { class: "h-3 w-3 sm:h-4 sm:w-4" });
              $$payload3.out += `<!----> <span class="whitespace-nowrap font-mono">${escape_html(formatRelativeTime(new Date(trade.timestamp)))}</span></div></div></div>`;
            }
            $$payload3.out += `<!--]-->`;
          }
          $$payload3.out += `<!--]--></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CSOpkDeG.js.map
