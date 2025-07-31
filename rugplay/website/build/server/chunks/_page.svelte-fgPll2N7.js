import { p as push, u as store_get, q as copy_payload, t as assign_payload, v as unsubscribe_stores, a as pop, m as escape_html, c as bind_props, o as stringify, e as ensure_array_like, w as sanitize_props, b as spread_props, x as slot } from './index3-CthgjPPi.js';
import { C as Card } from './card-23nZlDN1.js';
import { C as Card_content } from './card-content-Nxnnhqv4.js';
import { b as getPublicUrl } from './utils2-CLIgW4-x.js';
import { C as Card_header } from './card-header-CuTABeMH.js';
import { C as Card_title } from './card-title-CxxMmziD.js';
import { R as Root$2, S as Select_trigger, a as Select_content, b as Select_group, c as Select_item } from './index7-CPsQHBY3.js';
import { B as Badge } from './badge-Dggzsmpe.js';
import { B as Button } from './button-Cg_QiDbD.js';
import { A as Avatar, a as Avatar_fallback } from './avatar-fallback-BVDrtls6.js';
import { A as Avatar_image } from './avatar-image-BuX3_Vs_.js';
import { R as Root, H as Hover_card_trigger, a as Hover_card_content, U as UserProfilePreview } from './UserProfilePreview-DXQRal1C.js';
import { R as Root$1, D as Dialog_content } from './index5-D35Z60w5.js';
import { I as Input } from './input-BZy6dM-O.js';
import { L as Label } from './label-CxNim4GD.js';
import { P as PORTFOLIO_SUMMARY, f as fetchPortfolioSummary } from './portfolio-data-D2WCRVa2.js';
import { a as toast } from './Toaster.svelte_svelte_type_style_lang-CcrnaSIn.js';
import { D as Dialog_header, a as Dialog_title, b as Dialog_description } from './dialog-description-4JjLXrIw.js';
import { T as Trending_up } from './trending-up-DbscwFys.js';
import { T as Trending_down } from './trending-down-DcTfhCCA.js';
import { D as Dialog_footer } from './dialog-footer-KlhKHuMF.js';
import { L as Loader_circle } from './loader-circle-04fw-oOl.js';
import { T as Textarea } from './textarea-IYfk3NF4.js';
import './volume-settings-DX3g8058.js';
import { U as USER_DATA } from './user-data-CT5kjyaY.js';
import { g as goto } from './client-s_UYc3Sk.js';
import { S as SignInConfirmDialog } from './SignInConfirmDialog-CRywm7vo.js';
import { a as isConnectedStore } from './websocket-DCXra_5K.js';
import { I as Icon } from './Icon2-Bqt4BCIy.js';
import { S as Send, D as Dollar_sign } from './send-Bys6NCOB.js';
import { S as Skeleton } from './skeleton-BrIQmewN.js';
import 'lightweight-charts';
import { C as CoinIcon } from './CoinIcon-76OONbK8.js';
import { S as SEO } from './SEO-Cqzi3OcQ.js';
import { C as Chart_column } from './chart-column-CyZFLV3I.js';
import { C as Coins } from './coins-DVrva8oo.js';
import './index2-D4eROfHK.js';
import './clsx-ChV9xqsO.js';
import './create-id-Bxd404XN.js';
import './index-server-DH7p7JOq.js';
import './scroll-lock-BUIxTk31.js';
import './events-CF0F77H5.js';
import './mounted-Tbl-FfLm.js';
import './popper-layer-force-mount-BIcocscF.js';
import './Icon-DETra0Ze.js';
import './use-dom-typeahead.svelte-_8fvw_os.js';
import './index-opKo-a_0.js';
import './use-grace-area.svelte-Dsn6tMKF.js';
import './exports-Cv9LZeD1.js';
import 'better-auth/svelte';
import 'better-auth/client/plugins';
import './shared-server-BfUoNEXY.js';
import './index6-BNoyVQ18.js';
import './client2-DLmkXqdH.js';
import './notifications-5V396xYk.js';
import './stores-Be-B7Xuq.js';

function Message_circle($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      { "d": "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "message-circle" },
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
function Users($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
      }
    ],
    [
      "path",
      { "d": "M16 3.128a4 4 0 0 1 0 7.744" }
    ],
    ["path", { "d": "M22 21v-2a4 4 0 0 0-3-3.87" }],
    ["circle", { "cx": "9", "cy": "7", "r": "4" }]
  ];
  Icon($$payload, spread_props([
    { name: "users" },
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
function TradeModal($$payload, $$props) {
  push();
  var $$store_subs;
  let {
    open = false,
    type,
    coin,
    userHolding = 0,
    onSuccess
  } = $$props;
  let amount = "";
  let loading = false;
  let numericAmount = parseFloat(amount) || 0;
  let currentPrice = coin.currentPrice || 0;
  let maxSellableAmount = type === "SELL" && coin ? Math.min(userHolding, Math.floor(Number(coin.poolCoinAmount) * 0.995)) : userHolding;
  let estimatedResult = calculateEstimate(numericAmount, type, currentPrice);
  let hasValidAmount = numericAmount > 0;
  let userBalance = store_get($$store_subs ??= {}, "$PORTFOLIO_SUMMARY", PORTFOLIO_SUMMARY) ? store_get($$store_subs ??= {}, "$PORTFOLIO_SUMMARY", PORTFOLIO_SUMMARY).baseCurrencyBalance : 0;
  let hasEnoughFunds = type === "BUY" ? numericAmount <= userBalance : numericAmount <= userHolding;
  let canTrade = hasValidAmount && hasEnoughFunds && !loading;
  function calculateEstimate(amount2, tradeType, price) {
    if (!amount2 || !price || !coin) return { result: 0 };
    const poolCoin = Number(coin.poolCoinAmount);
    const poolBase = Number(coin.poolBaseCurrencyAmount);
    if (poolCoin <= 0 || poolBase <= 0) return { result: 0 };
    const k = poolCoin * poolBase;
    if (tradeType === "BUY") {
      const newPoolBase = poolBase + amount2;
      const newPoolCoin = k / newPoolBase;
      return { result: poolCoin - newPoolCoin };
    } else {
      const newPoolCoin = poolCoin + amount2;
      const newPoolBase = k / newPoolCoin;
      return { result: poolBase - newPoolBase };
    }
  }
  function handleClose() {
    open = false;
    amount = "";
    loading = false;
  }
  async function handleTrade() {
    if (!canTrade) return;
    loading = true;
    try {
      const response = await fetch(`/api/coin/${coin.symbol}/trade`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, amount: numericAmount })
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "Trade failed");
      }
      toast.success(`${type === "BUY" ? "Bought" : "Sold"} successfully!`, {
        description: type === "BUY" ? `Purchased ${result.coinsBought.toFixed(6)} ${coin.symbol} for $${result.totalCost.toFixed(6)}` : `Sold ${result.coinsSold.toFixed(6)} ${coin.symbol} for $${result.totalReceived.toFixed(6)}`
      });
      onSuccess?.();
      handleClose();
    } catch (e) {
      toast.error("Trade failed", { description: e.message });
    } finally {
      loading = false;
    }
  }
  function setMaxAmount() {
    if (type === "SELL") {
      amount = maxSellableAmount.toString();
    } else if (store_get($$store_subs ??= {}, "$PORTFOLIO_SUMMARY", PORTFOLIO_SUMMARY)) {
      amount = userBalance.toString();
    }
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!---->`;
    Root$1($$payload2, {
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
          class: "sm:max-w-md",
          children: ($$payload4) => {
            $$payload4.out += `<!---->`;
            Dialog_header($$payload4, {
              children: ($$payload5) => {
                $$payload5.out += `<!---->`;
                Dialog_title($$payload5, {
                  class: "flex items-center gap-2",
                  children: ($$payload6) => {
                    if (type === "BUY") {
                      $$payload6.out += "<!--[-->";
                      Trending_up($$payload6, { class: "h-5 w-5 text-green-500" });
                      $$payload6.out += `<!----> Buy ${escape_html(coin.symbol)}`;
                    } else {
                      $$payload6.out += "<!--[!-->";
                      Trending_down($$payload6, { class: "h-5 w-5 text-red-500" });
                      $$payload6.out += `<!----> Sell ${escape_html(coin.symbol)}`;
                    }
                    $$payload6.out += `<!--]-->`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!----> <!---->`;
                Dialog_description($$payload5, {
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->Current price: $${escape_html(coin.currentPrice.toFixed(6))} per ${escape_html(coin.symbol)}`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> <div class="space-y-4"><div class="space-y-2">`;
            Label($$payload4, {
              for: "amount",
              children: ($$payload5) => {
                $$payload5.out += `<!---->${escape_html(type === "BUY" ? "Amount to spend ($)" : `Amount (${coin.symbol})`)}`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> <div class="flex gap-2">`;
            Input($$payload4, {
              id: "amount",
              type: "number",
              step: type === "BUY" ? "0.01" : "1",
              min: "0",
              placeholder: "0.00",
              class: "flex-1",
              get value() {
                return amount;
              },
              set value($$value) {
                amount = $$value;
                $$settled = false;
              }
            });
            $$payload4.out += `<!----> `;
            Button($$payload4, {
              variant: "outline",
              size: "sm",
              onclick: setMaxAmount,
              children: ($$payload5) => {
                $$payload5.out += `<!---->Max`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----></div> `;
            if (type === "SELL") {
              $$payload4.out += "<!--[-->";
              $$payload4.out += `<p class="text-muted-foreground text-xs">Available: ${escape_html(userHolding.toFixed(6))}
						${escape_html(coin.symbol)} `;
              if (maxSellableAmount < userHolding) {
                $$payload4.out += "<!--[-->";
                $$payload4.out += `<br/>Max sellable: ${escape_html(maxSellableAmount.toFixed(0))} ${escape_html(coin.symbol)} (pool limit)`;
              } else {
                $$payload4.out += "<!--[!-->";
              }
              $$payload4.out += `<!--]--></p>`;
            } else if (store_get($$store_subs ??= {}, "$PORTFOLIO_SUMMARY", PORTFOLIO_SUMMARY)) {
              $$payload4.out += "<!--[1-->";
              $$payload4.out += `<p class="text-muted-foreground text-xs">Balance: $${escape_html(userBalance.toFixed(6))}</p>`;
            } else {
              $$payload4.out += "<!--[!-->";
            }
            $$payload4.out += `<!--]--></div> `;
            if (hasValidAmount) {
              $$payload4.out += "<!--[-->";
              $$payload4.out += `<div class="bg-muted/50 rounded-lg p-3"><div class="flex items-center justify-between"><span class="text-sm font-medium">${escape_html(type === "BUY" ? `${coin.symbol} you'll get:` : "You'll receive:")}</span> <span class="font-bold">${escape_html(type === "BUY" ? `~${estimatedResult.result.toFixed(6)} ${coin.symbol}` : `~$${estimatedResult.result.toFixed(6)}`)}</span></div> <p class="text-muted-foreground mt-1 text-xs">AMM estimation - includes slippage from pool impact</p></div>`;
            } else {
              $$payload4.out += "<!--[!-->";
            }
            $$payload4.out += `<!--]--> `;
            if (!hasEnoughFunds && hasValidAmount) {
              $$payload4.out += "<!--[-->";
              Badge($$payload4, {
                variant: "destructive",
                class: "text-xs",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->${escape_html(type === "BUY" ? "Insufficient funds" : "Insufficient coins")}`;
                },
                $$slots: { default: true }
              });
            } else {
              $$payload4.out += "<!--[!-->";
            }
            $$payload4.out += `<!--]--></div> <!---->`;
            Dialog_footer($$payload4, {
              class: "flex gap-2",
              children: ($$payload5) => {
                Button($$payload5, {
                  variant: "outline",
                  onclick: handleClose,
                  disabled: loading,
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->Cancel`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!----> `;
                Button($$payload5, {
                  onclick: handleTrade,
                  disabled: !canTrade,
                  variant: type === "BUY" ? "default" : "destructive",
                  children: ($$payload6) => {
                    if (loading) {
                      $$payload6.out += "<!--[-->";
                      Loader_circle($$payload6, { class: "h-4 w-4 animate-spin" });
                      $$payload6.out += `<!----> Processing...`;
                    } else {
                      $$payload6.out += "<!--[!-->";
                      $$payload6.out += `${escape_html(type === "BUY" ? "Buy" : "Sell")} ${escape_html(coin.symbol)}`;
                    }
                    $$payload6.out += `<!--]-->`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!---->`;
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
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { open });
  pop();
}
function CommentSection($$payload, $$props) {
  push();
  var $$store_subs;
  const { coinSymbol } = $$props;
  let comments = [];
  let newComment = "";
  let isSubmitting = false;
  let shouldSignIn = false;
  const MAX_COMMENTS = 50;
  async function submitComment() {
    if (!store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA)) {
      shouldSignIn = true;
      return;
    }
    if (!newComment.trim()) return;
    isSubmitting = true;
    try {
      const response = await fetch(`/api/coin/${coinSymbol}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: newComment.trim() })
      });
      if (response.ok) {
        const result = await response.json();
        const commentExists = comments.some((c) => c.id === result.comment.id);
        if (!commentExists) {
          comments = [
            result.comment,
            ...comments.slice(0, MAX_COMMENTS - 1)
          ];
        }
        newComment = "";
      } else {
        const error = await response.json();
        toast.error(error.message || "Failed to post comment");
      }
    } catch (e) {
      toast.error("Failed to post comment");
    } finally {
      isSubmitting = false;
    }
  }
  function handleKeydown(e) {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      submitComment();
    }
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    SignInConfirmDialog($$payload2, {
      get open() {
        return shouldSignIn;
      },
      set open($$value) {
        shouldSignIn = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----> <!---->`;
    Card($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->`;
        Card_header($$payload3, {
          children: ($$payload4) => {
            $$payload4.out += `<!---->`;
            Card_title($$payload4, {
              class: "flex items-center gap-2",
              children: ($$payload5) => {
                Message_circle($$payload5, { class: "h-5 w-5" });
                $$payload5.out += `<!----> Comments (${escape_html(comments.length)})`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!---->`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> <!---->`;
        Card_content($$payload3, {
          class: "space-y-4",
          children: ($$payload4) => {
            if (store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA)) {
              $$payload4.out += "<!--[-->";
              $$payload4.out += `<div class="space-y-3"><div class="relative">`;
              Textarea($$payload4, {
                placeholder: "Share your thoughts about this coin...",
                class: "min-h-[80px] w-full break-words pb-8 pr-20",
                style: "word-break: break-word; overflow-wrap: break-word;",
                maxlength: 500,
                onkeydown: handleKeydown,
                get value() {
                  return newComment;
                },
                set value($$value) {
                  newComment = $$value;
                  $$settled = false;
                }
              });
              $$payload4.out += `<!----> <kbd class="bg-muted pointer-events-none absolute bottom-2 right-2 hidden h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-70 sm:flex"><span class="text-xs">⌘</span>Enter</kbd></div> <div class="flex justify-between"><span class="text-muted-foreground text-xs">${escape_html(newComment.length)}/500 characters</span> `;
              Button($$payload4, {
                onclick: submitComment,
                disabled: !newComment.trim() || isSubmitting,
                size: "sm",
                children: ($$payload5) => {
                  if (isSubmitting) {
                    $$payload5.out += "<!--[-->";
                    Loader_circle($$payload5, { class: "h-4 w-4 animate-spin" });
                    $$payload5.out += `<!----> Posting...`;
                  } else {
                    $$payload5.out += "<!--[!-->";
                    Send($$payload5, { class: "h-4 w-4" });
                    $$payload5.out += `<!----> Post`;
                  }
                  $$payload5.out += `<!--]-->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----></div></div>`;
            } else {
              $$payload4.out += "<!--[!-->";
              $$payload4.out += `<div class="text-center"><p class="text-muted-foreground mb-3 text-sm">Sign in to join the discussion</p> `;
              Button($$payload4, {
                onclick: () => shouldSignIn = true,
                size: "sm",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Sign In`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----></div>`;
            }
            $$payload4.out += `<!--]--> `;
            {
              $$payload4.out += "<!--[-->";
              $$payload4.out += `<div class="text-center">`;
              Loader_circle($$payload4, { class: "mx-auto h-6 w-6 animate-spin" });
              $$payload4.out += `<!----></div>`;
            }
            $$payload4.out += `<!--]-->`;
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
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function HoldersSkeleton($$payload) {
  const each_array = ensure_array_like(Array(3));
  $$payload.out += `<div class="space-y-4"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    each_array[$$index];
    $$payload.out += `<div class="flex items-center gap-2"><div class="flex min-w-0 flex-1 items-center gap-3">`;
    Skeleton($$payload, { class: "h-8 w-8 flex-shrink-0 rounded-full" });
    $$payload.out += `<!----> <div class="min-w-0 flex-1 space-y-1">`;
    Skeleton($$payload, { class: "h-4 w-24" });
    $$payload.out += `<!----> `;
    Skeleton($$payload, { class: "h-3 w-16" });
    $$payload.out += `<!----></div></div> <div class="flex flex-shrink-0 items-center gap-1.5"><div class="hidden sm:block">`;
    Skeleton($$payload, { class: "h-5 w-12 rounded-full" });
    $$payload.out += `<!----></div> <div class="flex flex-col items-end gap-0.5">`;
    Skeleton($$payload, { class: "h-3 w-16" });
    $$payload.out += `<!----> `;
    Skeleton($$payload, { class: "h-3 w-12" });
    $$payload.out += `<!----></div></div></div>`;
  }
  $$payload.out += `<!--]--></div>`;
}
function CoinSkeleton($$payload) {
  const each_array = ensure_array_like(Array(4));
  $$payload.out += `<header class="mb-8"><div class="mb-4 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between"><div class="flex items-center gap-3 sm:gap-4">`;
  Skeleton($$payload, { class: "h-12 w-12 rounded-lg sm:h-16 sm:w-16" });
  $$payload.out += `<!----> <div class="min-w-0 flex-1">`;
  Skeleton($$payload, { class: "mb-2 h-6 w-40 sm:h-10 sm:w-48" });
  $$payload.out += `<!----> <div class="mt-1 flex flex-wrap items-center gap-2">`;
  Skeleton($$payload, { class: "h-5 w-12 sm:h-6 sm:w-24" });
  $$payload.out += `<!----></div></div></div> <div class="flex flex-col items-start gap-2 sm:items-end sm:text-right">`;
  Skeleton($$payload, { class: "h-6 w-28 sm:h-8 sm:w-32" });
  $$payload.out += `<!----> <div class="flex items-center gap-2">`;
  Skeleton($$payload, { class: "h-5 w-12 sm:h-6 sm:w-24" });
  $$payload.out += `<!----></div></div></div> <div class="text-muted-foreground mt-6 flex flex-wrap items-center gap-2 text-sm">`;
  Skeleton($$payload, { class: "h-4 w-20" });
  $$payload.out += `<!----> `;
  Skeleton($$payload, { class: "h-4 w-4 rounded-full" });
  $$payload.out += `<!----> `;
  Skeleton($$payload, { class: "h-4 w-40" });
  $$payload.out += `<!----></div></header> <div class="grid gap-6"><div class="grid grid-cols-1 gap-6 lg:grid-cols-3"><div class="lg:col-span-2">`;
  Card($$payload, {
    class: "flex h-full flex-col",
    children: ($$payload2) => {
      Card_header($$payload2, {
        class: "pb-4",
        children: ($$payload3) => {
          $$payload3.out += `<div class="flex items-center justify-between">`;
          Card_title($$payload3, {
            class: "flex items-center gap-2",
            children: ($$payload4) => {
              Skeleton($$payload4, { class: "h-5 w-5" });
              $$payload4.out += `<!----> `;
              Skeleton($$payload4, { class: "h-6 w-32" });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <div class="w-24">`;
          Skeleton($$payload3, { class: "h-10 w-full" });
          $$payload3.out += `<!----></div></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Card_content($$payload2, {
        class: "flex-1 pt-0",
        children: ($$payload3) => {
          Skeleton($$payload3, { class: "h-full min-h-[500px] w-full" });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> <div class="space-y-6 lg:col-span-1">`;
  Card($$payload, {
    class: "gap-3",
    children: ($$payload2) => {
      Card_header($$payload2, {
        children: ($$payload3) => {
          Card_title($$payload3, {
            children: ($$payload4) => {
              Skeleton($$payload4, { class: "h-6 w-24" });
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
          Skeleton($$payload3, { class: "h-11 w-full" });
          $$payload3.out += `<!----> `;
          Skeleton($$payload3, { class: "h-11 w-full" });
          $$payload3.out += `<!----></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Card($$payload, {
    children: ($$payload2) => {
      Card_content($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<div class="space-y-5"><div>`;
          Skeleton($$payload3, { class: "mb-3 h-5 w-32" });
          $$payload3.out += `<!----> <div class="mt-4 space-y-3"><div class="flex justify-between">`;
          Skeleton($$payload3, { class: "h-4 w-16" });
          $$payload3.out += `<!----> `;
          Skeleton($$payload3, { class: "h-4 w-20" });
          $$payload3.out += `<!----></div> <div class="flex justify-between">`;
          Skeleton($$payload3, { class: "h-4 w-24" });
          $$payload3.out += `<!----> `;
          Skeleton($$payload3, { class: "h-4 w-20" });
          $$payload3.out += `<!----></div></div></div> <div>`;
          Skeleton($$payload3, { class: "mb-3 h-5 w-20" });
          $$payload3.out += `<!----> <div class="mt-4 space-y-3"><div class="flex justify-between">`;
          Skeleton($$payload3, { class: "h-4 w-24" });
          $$payload3.out += `<!----> `;
          Skeleton($$payload3, { class: "h-4 w-20" });
          $$payload3.out += `<!----></div> <div class="flex justify-between">`;
          Skeleton($$payload3, { class: "h-4 w-20" });
          $$payload3.out += `<!----> `;
          Skeleton($$payload3, { class: "h-4 w-20" });
          $$payload3.out += `<!----></div></div></div></div>`;
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Card($$payload, {
    class: "gap-2",
    children: ($$payload2) => {
      Card_header($$payload2, {
        children: ($$payload3) => {
          Card_title($$payload3, {
            class: "flex items-center gap-2",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Top Holders`;
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Card_content($$payload2, {
        class: "relative",
        children: ($$payload3) => {
          HoldersSkeleton($$payload3);
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div> <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    each_array[$$index];
    Card($$payload, {
      class: "gap-1",
      children: ($$payload2) => {
        Card_header($$payload2, {
          children: ($$payload3) => {
            Card_title($$payload3, {
              class: "flex items-center gap-2 text-sm font-medium",
              children: ($$payload4) => {
                Skeleton($$payload4, { class: "h-4 w-4" });
                $$payload4.out += `<!----> `;
                Skeleton($$payload4, { class: "h-4 w-20" });
                $$payload4.out += `<!---->`;
              },
              $$slots: { default: true }
            });
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!----> `;
        Card_content($$payload2, {
          children: ($$payload3) => {
            Skeleton($$payload3, { class: "mb-1 h-6 w-24" });
            $$payload3.out += `<!----> `;
            Skeleton($$payload3, { class: "h-3 w-16" });
            $$payload3.out += `<!---->`;
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    });
  }
  $$payload.out += `<!--]--></div> `;
  Card($$payload, {
    children: ($$payload2) => {
      Card_header($$payload2, {
        children: ($$payload3) => {
          Card_title($$payload3, {
            class: "flex items-center gap-2",
            children: ($$payload4) => {
              Skeleton($$payload4, { class: "h-5 w-5" });
              $$payload4.out += `<!----> `;
              Skeleton($$payload4, { class: "h-6 w-20" });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Card_content($$payload2, {
        children: ($$payload3) => {
          const each_array_1 = ensure_array_like(Array(3));
          $$payload3.out += `<div class="space-y-4"><!--[-->`;
          for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
            each_array_1[$$index_1];
            $$payload3.out += `<div class="flex gap-3 border-b pb-4 last:border-b-0">`;
            Skeleton($$payload3, { class: "h-8 w-8 rounded-full" });
            $$payload3.out += `<!----> <div class="flex-1"><div class="mb-2 flex items-center gap-2">`;
            Skeleton($$payload3, { class: "h-4 w-24" });
            $$payload3.out += `<!----> `;
            Skeleton($$payload3, { class: "h-3 w-16" });
            $$payload3.out += `<!----></div> `;
            Skeleton($$payload3, { class: "h-4 w-full" });
            $$payload3.out += `<!----> `;
            Skeleton($$payload3, { class: "mt-1 h-4 w-3/4" });
            $$payload3.out += `<!----></div></div>`;
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
}
function TopHolders($$payload, $$props) {
  push();
  let holdersData = null;
  let modalOpen = false;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!---->`;
    Card($$payload2, {
      class: `gap-2 ${stringify("")}`,
      onclick: () => holdersData,
      children: ($$payload3) => {
        $$payload3.out += `<!---->`;
        Card_header($$payload3, {
          children: ($$payload4) => {
            $$payload4.out += `<!---->`;
            Card_title($$payload4, {
              class: "flex items-center gap-2",
              children: ($$payload5) => {
                $$payload5.out += `<!---->Top Holders`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!---->`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> <!---->`;
        Card_content($$payload3, {
          class: "relative",
          children: ($$payload4) => {
            {
              $$payload4.out += "<!--[-->";
              HoldersSkeleton($$payload4);
            }
            $$payload4.out += `<!--]--> `;
            {
              $$payload4.out += "<!--[!-->";
            }
            $$payload4.out += `<!--]-->`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> <!---->`;
    Root$1($$payload2, {
      get open() {
        return modalOpen;
      },
      set open($$value) {
        modalOpen = $$value;
        $$settled = false;
      },
      children: ($$payload3) => {
        $$payload3.out += `<!---->`;
        Dialog_content($$payload3, {
          class: "flex max-h-[90vh] w-full max-w-[calc(100%-2rem)] flex-col sm:max-w-[800px] md:max-w-2xl",
          children: ($$payload4) => {
            $$payload4.out += `<!---->`;
            Dialog_header($$payload4, {
              class: "flex-shrink-0",
              children: ($$payload5) => {
                $$payload5.out += `<!---->`;
                Dialog_title($$payload5, {
                  class: "flex items-center gap-2",
                  children: ($$payload6) => {
                    Users($$payload6, { class: "h-5 w-5" });
                    $$payload6.out += `<!----> Top Holders (*${escape_html(holdersData?.coinSymbol)})`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!----> <!---->`;
                Dialog_description($$payload5, {
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->This list is limited to the top 50 holders.`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> <div class="min-h-0 flex-1">`;
            {
              $$payload4.out += "<!--[!-->";
              $$payload4.out += `<div class="flex h-full items-center justify-center py-12 text-center"><div>`;
              Users($$payload4, {
                class: "text-muted-foreground mx-auto mb-4 h-12 w-12"
              });
              $$payload4.out += `<!----> <h3 class="mb-2 text-lg font-semibold">No holders found</h3> <p class="text-muted-foreground">This coin doesn't have any holders yet.</p></div></div>`;
            }
            $$payload4.out += `<!--]--></div>`;
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
  pop();
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  const { data } = $$props;
  let coinSymbol = data.coinSymbol;
  let coin = data.coin;
  let loading = false;
  let chartData = data.chartData;
  let volumeData = data.volumeData;
  let userHolding = 0;
  let buyModalOpen = false;
  let sellModalOpen = false;
  let selectedTimeframe = data.timeframe || "1m";
  let shouldSignIn = false;
  let countdown = null;
  const timeframeOptions = [
    { value: "1m", label: "1 minute" },
    { value: "5m", label: "5 minutes" },
    { value: "15m", label: "15 minutes" },
    { value: "1h", label: "1 hour" },
    { value: "4h", label: "4 hours" },
    { value: "1d", label: "1 day" }
  ];
  async function loadCoinData() {
    try {
      loading = true;
      const response = await fetch(`/api/coin/${coinSymbol}?timeframe=${selectedTimeframe}`);
      if (!response.ok) {
        toast.error(response.status === 404 ? "Coin not found" : "Failed to load coin data");
        return;
      }
      const result = await response.json();
      coin = result.coin;
      chartData = result.candlestickData || [];
      volumeData = result.volumeData || [];
    } catch (e) {
      console.error("Failed to fetch coin data:", e);
      toast.error("Failed to load coin data");
    } finally {
      loading = false;
    }
  }
  async function loadUserHolding() {
    if (!store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA)) return;
    try {
      const response = await fetch("/api/portfolio/total");
      if (response.ok) {
        const result = await response.json();
        const holding = result.coinHoldings.find((h) => h.symbol === coinSymbol.toUpperCase());
        userHolding = holding ? holding.quantity : 0;
      }
    } catch (e) {
      console.error("Failed to load user holding:", e);
    }
  }
  async function handleTradeSuccess() {
    await Promise.all([
      loadCoinData(),
      loadUserHolding(),
      fetchPortfolioSummary()
    ]);
  }
  async function handleTimeframeChange(timeframe) {
    selectedTimeframe = timeframe;
    loading = true;
    await loadCoinData();
    loading = false;
  }
  let currentTimeframeLabel = timeframeOptions.find((option) => option.value === selectedTimeframe)?.label || "1 minute";
  function formatPrice(price) {
    if (price < 1e-6) {
      return price.toFixed(8);
    } else if (price < 0.01) {
      return price.toFixed(6);
    } else if (price < 1) {
      return price.toFixed(4);
    } else {
      return price.toFixed(2);
    }
  }
  function formatMarketCap(value) {
    const num = Number(value);
    if (isNaN(num)) return "$0.00";
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
    if (num >= 1e3) return `$${(num / 1e3).toFixed(2)}K`;
    return `$${num.toFixed(2)}`;
  }
  function formatSupply(value) {
    const num = Number(value);
    if (isNaN(num)) return "0";
    if (num >= 1e9) return `${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `${(num / 1e6).toFixed(2)}M`;
    if (num >= 1e3) return `${(num / 1e3).toFixed(2)}K`;
    return num.toLocaleString();
  }
  let isCreator = coin && store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA) && coin.creatorId === Number(store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA).id);
  let isTradingLocked = coin?.isLocked && countdown !== null && countdown > 0;
  let canTrade = !isTradingLocked || isCreator;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    SEO($$payload2, {
      title: coin ? `${coin.name} (*${coin.symbol}) - Rugplay` : `Loading ${coinSymbol.toUpperCase()} - Rugplay`,
      description: coin ? `Trade ${coin.name} (*${coin.symbol}) in the Rugplay simulation game. Current price: $${formatPrice(coin.currentPrice)}, Market cap: ${formatMarketCap(coin.marketCap)}, 24h change: ${coin.change24h >= 0 ? "+" : ""}${coin.change24h.toFixed(2)}%.` : `Virtual cryptocurrency trading page for ${coinSymbol.toUpperCase()} in the Rugplay simulation game.`,
      keywords: coin ? `${coin.name} cryptocurrency game, *${coin.symbol} virtual trading, ${coin.symbol} price simulation, cryptocurrency trading game, virtual coin ${coin.symbol}` : `${coinSymbol} virtual cryptocurrency, crypto trading simulation, virtual coin trading`,
      image: coin?.icon ? getPublicUrl(coin.icon) : "/apple-touch-icon.png",
      imageAlt: coin ? `${coin.name} (${coin.symbol}) logo` : `${coinSymbol} cryptocurrency logo`,
      twitterCard: "summary"
    });
    $$payload2.out += `<!----> `;
    SignInConfirmDialog($$payload2, {
      get open() {
        return shouldSignIn;
      },
      set open($$value) {
        shouldSignIn = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----> `;
    if (coin) {
      $$payload2.out += "<!--[-->";
      TradeModal($$payload2, {
        type: "BUY",
        coin,
        onSuccess: handleTradeSuccess,
        get open() {
          return buyModalOpen;
        },
        set open($$value) {
          buyModalOpen = $$value;
          $$settled = false;
        }
      });
      $$payload2.out += `<!----> `;
      TradeModal($$payload2, {
        type: "SELL",
        coin,
        userHolding,
        onSuccess: handleTradeSuccess,
        get open() {
          return sellModalOpen;
        },
        set open($$value) {
          sellModalOpen = $$value;
          $$settled = false;
        }
      });
      $$payload2.out += `<!---->`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> <div class="container mx-auto max-w-7xl p-6">`;
    if (loading) {
      $$payload2.out += "<!--[-->";
      CoinSkeleton($$payload2);
    } else if (!coin) {
      $$payload2.out += "<!--[1-->";
      $$payload2.out += `<div class="flex h-96 items-center justify-center"><div class="text-center"><div class="text-muted-foreground mb-4 text-xl">Coin not found</div> `;
      Button($$payload2, {
        onclick: () => goto(),
        children: ($$payload3) => {
          $$payload3.out += `<!---->Go Home`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div></div>`;
    } else {
      $$payload2.out += "<!--[!-->";
      $$payload2.out += `<header class="mb-8"><div class="mb-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"><div class="flex items-center gap-3 sm:gap-4">`;
      CoinIcon($$payload2, {
        icon: coin.icon,
        symbol: coin.symbol,
        name: coin.name,
        size: 12,
        class: "border sm:size-16"
      });
      $$payload2.out += `<!----> <div class="min-w-0 flex-1"><h1 class="text-2xl font-bold sm:text-4xl">${escape_html(coin.name)}</h1> <div class="mt-1 flex flex-wrap items-center gap-2">`;
      Badge($$payload2, {
        variant: "outline",
        class: "text-sm sm:text-lg",
        children: ($$payload3) => {
          $$payload3.out += `<!---->*${escape_html(coin.symbol)}`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      if (store_get($$store_subs ??= {}, "$isConnectedStore", isConnectedStore)) {
        $$payload2.out += "<!--[-->";
        Badge($$payload2, {
          variant: "outline",
          class: "animate-pulse border-green-500 text-xs text-green-500",
          children: ($$payload3) => {
            $$payload3.out += `<!---->● LIVE`;
          },
          $$slots: { default: true }
        });
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (isTradingLocked) {
        $$payload2.out += "<!--[-->";
        Badge($$payload2, {
          variant: "secondary",
          class: "text-xs",
          children: ($$payload3) => {
            $$payload3.out += `<!---->🔒 LOCKED ${escape_html("")}`;
          },
          $$slots: { default: true }
        });
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (!coin.isListed) {
        $$payload2.out += "<!--[-->";
        Badge($$payload2, {
          variant: "destructive",
          children: ($$payload3) => {
            $$payload3.out += `<!---->Delisted`;
          },
          $$slots: { default: true }
        });
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--></div></div></div> <div class="flex flex-col items-start gap-2 sm:items-end sm:text-right"><div class="relative"><p class="text-2xl font-bold sm:text-3xl">$${escape_html(formatPrice(coin.currentPrice))}</p></div> <div class="flex items-center gap-2">`;
      if (coin.change24h >= 0) {
        $$payload2.out += "<!--[-->";
        Trending_up($$payload2, { class: "h-4 w-4 text-green-500" });
      } else {
        $$payload2.out += "<!--[!-->";
        Trending_down($$payload2, { class: "h-4 w-4 text-red-500" });
      }
      $$payload2.out += `<!--]--> `;
      Badge($$payload2, {
        variant: coin.change24h >= 0 ? "success" : "destructive",
        class: "text-sm",
        children: ($$payload3) => {
          $$payload3.out += `<!---->${escape_html(coin.change24h >= 0 ? "+" : "")}${escape_html(Number(coin.change24h).toFixed(2))}%`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div></div></div> `;
      if (coin.creatorName) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<div class="text-muted-foreground flex flex-wrap items-center gap-2 text-sm"><span>Created by</span> <!---->`;
        Root($$payload2, {
          children: ($$payload3) => {
            $$payload3.out += `<!---->`;
            Hover_card_trigger($$payload3, {
              class: "flex min-w-0 max-w-[200px] cursor-pointer items-center gap-1 rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 sm:max-w-[250px]",
              onclick: () => goto(`/user/${coin.creatorUsername}`),
              children: ($$payload4) => {
                $$payload4.out += `<!---->`;
                Avatar($$payload4, {
                  class: "h-4 w-4 flex-shrink-0",
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->`;
                    Avatar_image($$payload5, {
                      src: getPublicUrl(coin.creatorImage),
                      alt: coin.creatorName
                    });
                    $$payload5.out += `<!----> <!---->`;
                    Avatar_fallback($$payload5, {
                      children: ($$payload6) => {
                        $$payload6.out += `<!---->${escape_html(coin.creatorName.charAt(0))}`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload5.out += `<!---->`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----> <span class="block truncate font-medium">${escape_html(coin.creatorName)} (@${escape_html(coin.creatorUsername)})</span>`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> <!---->`;
            Hover_card_content($$payload3, {
              class: "w-80",
              side: "bottom",
              sideOffset: 3,
              children: ($$payload4) => {
                UserProfilePreview($$payload4, { userId: coin.creatorId });
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!---->`;
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!----></div>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--></header> <div class="grid gap-6"><div class="grid grid-cols-1 gap-6 lg:grid-cols-3"><div class="lg:col-span-2"><!---->`;
      Card($$payload2, {
        class: "flex h-full flex-col",
        children: ($$payload3) => {
          $$payload3.out += `<!---->`;
          Card_header($$payload3, {
            class: "pb-4",
            children: ($$payload4) => {
              $$payload4.out += `<div class="flex items-center justify-between"><!---->`;
              Card_title($$payload4, {
                class: "flex items-center gap-2",
                children: ($$payload5) => {
                  Chart_column($$payload5, { class: "h-5 w-5" });
                  $$payload5.out += `<!----> Price Chart (${escape_html(selectedTimeframe)})`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> <div class="w-24"><!---->`;
              Root$2($$payload4, {
                type: "single",
                onValueChange: handleTimeframeChange,
                disabled: loading,
                get value() {
                  return selectedTimeframe;
                },
                set value($$value) {
                  selectedTimeframe = $$value;
                  $$settled = false;
                },
                children: ($$payload5) => {
                  $$payload5.out += `<!---->`;
                  Select_trigger($$payload5, {
                    class: "w-full",
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->${escape_html(currentTimeframeLabel)}`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!----> <!---->`;
                  Select_content($$payload5, {
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->`;
                      Select_group($$payload6, {
                        children: ($$payload7) => {
                          const each_array = ensure_array_like(timeframeOptions);
                          $$payload7.out += `<!--[-->`;
                          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                            let option = each_array[$$index];
                            $$payload7.out += `<!---->`;
                            Select_item($$payload7, {
                              value: option.value,
                              label: option.label,
                              children: ($$payload8) => {
                                $$payload8.out += `<!---->${escape_html(option.label)}`;
                              },
                              $$slots: { default: true }
                            });
                            $$payload7.out += `<!---->`;
                          }
                          $$payload7.out += `<!--]-->`;
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out += `<!---->`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!---->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----></div></div>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!---->`;
          Card_content($$payload3, {
            class: "flex-1 pt-0",
            children: ($$payload4) => {
              if (chartData.length === 0) {
                $$payload4.out += "<!--[-->";
                $$payload4.out += `<div class="flex h-full min-h-[500px] items-center justify-center"><p class="text-muted-foreground">No trading data available yet</p></div>`;
              } else {
                $$payload4.out += "<!--[!-->";
                $$payload4.out += `<div class="h-full min-h-[500px] w-full"></div>`;
              }
              $$payload4.out += `<!--]-->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div> <div class="space-y-6 lg:col-span-1"><!---->`;
      Card($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->`;
          Card_header($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->`;
              Card_title($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Trade ${escape_html(coin.symbol)}`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              if (userHolding > 0) {
                $$payload4.out += "<!--[-->";
                $$payload4.out += `<p class="text-muted-foreground text-sm">You own: ${escape_html(formatSupply(userHolding))}
									${escape_html(coin.symbol)}</p>`;
              } else {
                $$payload4.out += "<!--[!-->";
              }
              $$payload4.out += `<!--]--> `;
              if (isTradingLocked) {
                $$payload4.out += "<!--[-->";
                $$payload4.out += `<p class="text-muted-foreground text-sm">`;
                if (isCreator) {
                  $$payload4.out += "<!--[-->";
                  $$payload4.out += `🔒 Creator-only period: ${escape_html("")} remaining`;
                } else {
                  $$payload4.out += "<!--[!-->";
                  $$payload4.out += `🔒 Trading unlocks in: ${escape_html("")}`;
                }
                $$payload4.out += `<!--]--></p>`;
              } else {
                $$payload4.out += "<!--[!-->";
              }
              $$payload4.out += `<!--]-->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!---->`;
          Card_content($$payload3, {
            children: ($$payload4) => {
              if (store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA)) {
                $$payload4.out += "<!--[-->";
                $$payload4.out += `<div class="space-y-3">`;
                Button($$payload4, {
                  class: "w-full",
                  variant: "default",
                  size: "lg",
                  onclick: () => buyModalOpen = true,
                  disabled: !coin.isListed || !canTrade,
                  children: ($$payload5) => {
                    Trending_up($$payload5, { class: "h-4 w-4" });
                    $$payload5.out += `<!----> Buy ${escape_html(coin.symbol)}`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----> `;
                Button($$payload4, {
                  class: "w-full",
                  variant: "outline",
                  size: "lg",
                  onclick: () => sellModalOpen = true,
                  disabled: !coin.isListed || userHolding <= 0 || !canTrade,
                  children: ($$payload5) => {
                    Trending_down($$payload5, { class: "h-4 w-4" });
                    $$payload5.out += `<!----> Sell ${escape_html(coin.symbol)}`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----></div>`;
              } else {
                $$payload4.out += "<!--[!-->";
                $$payload4.out += `<div class="py-4 text-center"><p class="text-muted-foreground mb-3 text-sm">Sign in to start trading</p> `;
                Button($$payload4, {
                  onclick: () => shouldSignIn = true,
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->Sign In`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----></div>`;
              }
              $$payload4.out += `<!--]-->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> <!---->`;
      Card($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->`;
          Card_content($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<div class="space-y-4"><div><h4 class="mb-3 font-medium">Pool Composition</h4> <div class="space-y-2"><div class="flex justify-between"><span class="text-muted-foreground text-sm">${escape_html(coin.symbol)}:</span> <span class="font-mono text-sm">${escape_html(formatSupply(coin.poolCoinAmount))}</span></div> <div class="flex justify-between"><span class="text-muted-foreground text-sm">Base Currency:</span> <span class="font-mono text-sm">$${escape_html(Number(coin.poolBaseCurrencyAmount).toLocaleString())}</span></div></div></div> <div><h4 class="mb-3 font-medium">Pool Stats</h4> <div class="space-y-2"><div class="flex justify-between"><span class="text-muted-foreground text-sm">Total Liquidity:</span> <span class="font-mono text-sm">$${escape_html((Number(coin.poolBaseCurrencyAmount) * 2).toLocaleString())}</span></div> <div class="flex justify-between"><span class="text-muted-foreground text-sm">Current Price:</span> <span class="font-mono text-sm">$${escape_html(formatPrice(coin.currentPrice))}</span></div></div></div></div>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      TopHolders($$payload2, { coinSymbol: coin.symbol });
      $$payload2.out += `<!----></div></div> <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"><!---->`;
      Card($$payload2, {
        class: "gap-1",
        children: ($$payload3) => {
          $$payload3.out += `<!---->`;
          Card_header($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->`;
              Card_title($$payload4, {
                class: "flex items-center gap-2 text-sm font-medium",
                children: ($$payload5) => {
                  Dollar_sign($$payload5, { class: "h-4 w-4" });
                  $$payload5.out += `<!----> Market Cap`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!---->`;
          Card_content($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<p class="text-xl font-bold">${escape_html(formatMarketCap(coin.marketCap))}</p>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> <!---->`;
      Card($$payload2, {
        class: "gap-1",
        children: ($$payload3) => {
          $$payload3.out += `<!---->`;
          Card_header($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->`;
              Card_title($$payload4, {
                class: "flex items-center gap-2 text-sm font-medium",
                children: ($$payload5) => {
                  Chart_column($$payload5, { class: "h-4 w-4" });
                  $$payload5.out += `<!----> 24h Volume`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!---->`;
          Card_content($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<p class="text-xl font-bold">${escape_html(formatMarketCap(coin.volume24h))}</p>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> <!---->`;
      Card($$payload2, {
        class: "gap-1",
        children: ($$payload3) => {
          $$payload3.out += `<!---->`;
          Card_header($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->`;
              Card_title($$payload4, {
                class: "flex items-center gap-2 text-sm font-medium",
                children: ($$payload5) => {
                  Coins($$payload5, { class: "h-4 w-4" });
                  $$payload5.out += `<!----> Circulating Supply`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!---->`;
          Card_content($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<p class="text-xl font-bold">${escape_html(formatSupply(coin.circulatingSupply))}<span class="text-muted-foreground ml-1 text-xs">of ${escape_html(formatSupply(coin.initialSupply))} total</span></p>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> <!---->`;
      Card($$payload2, {
        class: "gap-1",
        children: ($$payload3) => {
          $$payload3.out += `<!---->`;
          Card_header($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->`;
              Card_title($$payload4, {
                class: "text-sm font-medium",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->24h Change`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!---->`;
          Card_content($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<div class="flex items-center gap-2">`;
              if (coin.change24h >= 0) {
                $$payload4.out += "<!--[-->";
                Trending_up($$payload4, { class: "h-4 w-4 text-green-500" });
              } else {
                $$payload4.out += "<!--[!-->";
                Trending_down($$payload4, { class: "h-4 w-4 text-red-500" });
              }
              $$payload4.out += `<!--]--> `;
              Badge($$payload4, {
                variant: coin.change24h >= 0 ? "success" : "destructive",
                class: "text-sm",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->${escape_html(coin.change24h >= 0 ? "+" : "")}${escape_html(Number(coin.change24h).toFixed(2))}%`;
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
      $$payload2.out += `<!----></div> `;
      CommentSection($$payload2, { coinSymbol });
      $$payload2.out += `<!----></div>`;
    }
    $$payload2.out += `<!--]--></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-fgPll2N7.js.map
