import { p as push, u as store_get, q as copy_payload, t as assign_payload, v as unsubscribe_stores, a as pop, m as escape_html, w as sanitize_props, b as spread_props, x as slot, e as ensure_array_like } from './index3-CthgjPPi.js';
import './client2-DLmkXqdH.js';
import { g as goto } from './client-s_UYc3Sk.js';
import { C as Card } from './card-23nZlDN1.js';
import { C as Card_content } from './card-content-Nxnnhqv4.js';
import { i as formatTimeUntil, b as getPublicUrl, j as formatDateWithYear } from './utils2-CLIgW4-x.js';
import { C as Card_header } from './card-header-CuTABeMH.js';
import { C as Card_title } from './card-title-CxxMmziD.js';
import { R as Root, H as Hover_card_trigger, a as Hover_card_content, U as UserProfilePreview } from './UserProfilePreview-DXQRal1C.js';
import { B as Button } from './button-Cg_QiDbD.js';
import { I as Input } from './input-BZy6dM-O.js';
import { B as Badge } from './badge-Dggzsmpe.js';
import { A as Avatar, a as Avatar_fallback } from './avatar-fallback-BVDrtls6.js';
import { A as Avatar_image } from './avatar-image-BuX3_Vs_.js';
import { S as Separator } from './separator-gqbA9xdr.js';
import { S as SEO } from './SEO-Cqzi3OcQ.js';
import { U as USER_DATA } from './user-data-CT5kjyaY.js';
import { P as PORTFOLIO_SUMMARY, f as fetchPortfolioSummary } from './portfolio-data-D2WCRVa2.js';
import { a as toast } from './Toaster.svelte_svelte_type_style_lang-CcrnaSIn.js';
import 'lightweight-charts';
import './volume-settings-DX3g8058.js';
import { S as Skeleton } from './skeleton-BrIQmewN.js';
import { I as Icon } from './Icon2-Bqt4BCIy.js';
import { C as Check } from './check-DvLwJGCG.js';
import { X } from './x-BILdrmxj.js';
import { C as Chart_column } from './chart-column-CyZFLV3I.js';
import { L as Loader_circle } from './loader-circle-04fw-oOl.js';
import './index2-D4eROfHK.js';
import './clsx-ChV9xqsO.js';
import './exports-Cv9LZeD1.js';
import './scroll-lock-BUIxTk31.js';
import './create-id-Bxd404XN.js';
import './index-server-DH7p7JOq.js';
import './events-CF0F77H5.js';
import './popper-layer-force-mount-BIcocscF.js';
import './mounted-Tbl-FfLm.js';
import './use-grace-area.svelte-Dsn6tMKF.js';
import './index-opKo-a_0.js';
import './stores-Be-B7Xuq.js';

function Calculator($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "rect",
      {
        "width": "16",
        "height": "20",
        "x": "4",
        "y": "2",
        "rx": "2"
      }
    ],
    [
      "line",
      { "x1": "8", "x2": "16", "y1": "6", "y2": "6" }
    ],
    [
      "line",
      {
        "x1": "16",
        "x2": "16",
        "y1": "14",
        "y2": "18"
      }
    ],
    ["path", { "d": "M16 10h.01" }],
    ["path", { "d": "M12 10h.01" }],
    ["path", { "d": "M8 10h.01" }],
    ["path", { "d": "M12 14h.01" }],
    ["path", { "d": "M8 14h.01" }],
    ["path", { "d": "M12 18h.01" }],
    ["path", { "d": "M8 18h.01" }]
  ];
  Icon($$payload, spread_props([
    { name: "calculator" },
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
function History($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
      }
    ],
    ["path", { "d": "M3 3v5h5" }],
    ["path", { "d": "M12 7v5l4 2" }]
  ];
  Icon($$payload, spread_props([
    { name: "history" },
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
function Message_circle_question($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      { "d": "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }
    ],
    [
      "path",
      { "d": "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }
    ],
    ["path", { "d": "M12 17h.01" }]
  ];
  Icon($$payload, spread_props([
    { name: "message-circle-question" },
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
function HopiumQuestionSkeleton($$payload) {
  $$payload.out += `<div class="flex items-center gap-3"><div class="bg-muted rounded-lg p-4">`;
  Skeleton($$payload, { class: "h-14 w-14" });
  $$payload.out += `<!----></div> <div class="flex-1">`;
  Skeleton($$payload, { class: "mb-2 h-8 w-3/4" });
  $$payload.out += `<!----> `;
  Skeleton($$payload, { class: "h-4 w-1/3" });
  $$payload.out += `<!----></div></div> <div class="mb-4 mt-3 flex flex-wrap items-center gap-1.5">`;
  Skeleton($$payload, { class: "h-3 w-16" });
  $$payload.out += `<!----> `;
  Skeleton($$payload, { class: "h-4 w-4 rounded-full" });
  $$payload.out += `<!----> `;
  Skeleton($$payload, { class: "h-4 w-32" });
  $$payload.out += `<!----></div> <div class="grid gap-8"><div class="grid grid-cols-1 gap-8 lg:grid-cols-3"><div class="lg:col-span-2">`;
  Card($$payload, {
    class: "shadow-sm",
    children: ($$payload2) => {
      Card_header($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<div class="flex items-center justify-between"><div class="flex items-center gap-3">`;
          Skeleton($$payload3, { class: "h-6 w-6" });
          $$payload3.out += `<!----> `;
          Skeleton($$payload3, { class: "h-6 w-16" });
          $$payload3.out += `<!----></div> <div class="text-right">`;
          Skeleton($$payload3, { class: "mb-1 h-10 w-20" });
          $$payload3.out += `<!----> `;
          Skeleton($$payload3, { class: "h-4 w-16" });
          $$payload3.out += `<!----></div></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Card_content($$payload2, {
        children: ($$payload3) => {
          Skeleton($$payload3, { class: "h-[400px] w-full rounded-lg" });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> <div class="space-y-6 lg:col-span-1">`;
  Card($$payload, {
    children: ($$payload2) => {
      Card_header($$payload2, {
        children: ($$payload3) => {
          Skeleton($$payload3, { class: "h-6 w-20" });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Card_content($$payload2, {
        class: "space-y-6",
        children: ($$payload3) => {
          $$payload3.out += `<div class="grid grid-cols-2 gap-4">`;
          Skeleton($$payload3, { class: "h-12 w-full rounded-md" });
          $$payload3.out += `<!----> `;
          Skeleton($$payload3, { class: "h-12 w-full rounded-md" });
          $$payload3.out += `<!----></div> `;
          Skeleton($$payload3, { class: "h-10 w-full rounded-md" });
          $$payload3.out += `<!----> <div class="flex gap-2">`;
          Skeleton($$payload3, { class: "h-9 flex-1 rounded-md" });
          $$payload3.out += `<!----> `;
          Skeleton($$payload3, { class: "h-9 flex-1 rounded-md" });
          $$payload3.out += `<!----> `;
          Skeleton($$payload3, { class: "h-9 flex-1 rounded-md" });
          $$payload3.out += `<!----> `;
          Skeleton($$payload3, { class: "h-9 flex-1 rounded-md" });
          $$payload3.out += `<!----></div> <div class="space-y-2"><div class="flex justify-between">`;
          Skeleton($$payload3, { class: "h-4 w-16" });
          $$payload3.out += `<!----> `;
          Skeleton($$payload3, { class: "h-4 w-12" });
          $$payload3.out += `<!----></div> <div class="flex justify-between">`;
          Skeleton($$payload3, { class: "h-4 w-16" });
          $$payload3.out += `<!----> `;
          Skeleton($$payload3, { class: "h-4 w-12" });
          $$payload3.out += `<!----></div></div> `;
          Skeleton($$payload3, { class: "h-12 w-full rounded-md" });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div> <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">`;
  Card($$payload, {
    class: "gap-1",
    children: ($$payload2) => {
      Card_header($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<div class="flex items-center gap-3"><div class="bg-muted rounded-full p-2">`;
          Skeleton($$payload3, { class: "h-5 w-5" });
          $$payload3.out += `<!----></div> `;
          Skeleton($$payload3, { class: "h-6 w-32" });
          $$payload3.out += `<!----></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Card_content($$payload2, {
        class: "pb-4",
        children: ($$payload3) => {
          $$payload3.out += `<div class="space-y-3"><div class="flex items-center justify-between"><div>`;
          Skeleton($$payload3, { class: "mb-1 h-4 w-16" });
          $$payload3.out += `<!----> `;
          Skeleton($$payload3, { class: "h-3 w-20" });
          $$payload3.out += `<!----></div> `;
          Skeleton($$payload3, { class: "h-6 w-16" });
          $$payload3.out += `<!----></div> <div class="flex items-center justify-between"><div>`;
          Skeleton($$payload3, { class: "mb-1 h-4 w-14" });
          $$payload3.out += `<!----> `;
          Skeleton($$payload3, { class: "h-3 w-20" });
          $$payload3.out += `<!----></div> `;
          Skeleton($$payload3, { class: "h-6 w-16" });
          $$payload3.out += `<!----></div> `;
          Separator($$payload3, {});
          $$payload3.out += `<!----> <div class="flex items-center justify-between">`;
          Skeleton($$payload3, { class: "h-4 w-24" });
          $$payload3.out += `<!----> `;
          Skeleton($$payload3, { class: "h-6 w-16" });
          $$payload3.out += `<!----></div></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Card($$payload, {
    class: "gap-1",
    children: ($$payload2) => {
      Card_header($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<div class="flex items-center gap-3"><div class="bg-muted rounded-full p-2">`;
          Skeleton($$payload3, { class: "h-5 w-5" });
          $$payload3.out += `<!----></div> `;
          Skeleton($$payload3, { class: "h-6 w-28" });
          $$payload3.out += `<!----></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Card_content($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<div class="space-y-2"><div class="flex justify-between">`;
          Skeleton($$payload3, { class: "h-4 w-20" });
          $$payload3.out += `<!----> `;
          Skeleton($$payload3, { class: "h-4 w-16" });
          $$payload3.out += `<!----></div> <div class="flex justify-between">`;
          Skeleton($$payload3, { class: "h-4 w-16" });
          $$payload3.out += `<!----> `;
          Skeleton($$payload3, { class: "h-4 w-8" });
          $$payload3.out += `<!----></div> <div class="flex justify-between">`;
          Skeleton($$payload3, { class: "h-4 w-14" });
          $$payload3.out += `<!----> `;
          Skeleton($$payload3, { class: "h-4 w-20" });
          $$payload3.out += `<!----></div> <div class="flex justify-between">`;
          Skeleton($$payload3, { class: "h-4 w-16" });
          $$payload3.out += `<!----> `;
          Skeleton($$payload3, { class: "h-4 w-20" });
          $$payload3.out += `<!----></div></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> `;
  Card($$payload, {
    class: "shadow-sm",
    children: ($$payload2) => {
      Card_header($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<div class="flex items-center gap-3"><div class="bg-muted rounded-full p-2">`;
          Skeleton($$payload3, { class: "h-6 w-6" });
          $$payload3.out += `<!----></div> `;
          Skeleton($$payload3, { class: "h-6 w-32" });
          $$payload3.out += `<!----></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Card_content($$payload2, {
        class: "pb-6",
        children: ($$payload3) => {
          const each_array = ensure_array_like(Array(3));
          $$payload3.out += `<div class="space-y-4"><!--[-->`;
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            each_array[$$index];
            $$payload3.out += `<div class="flex items-center justify-between rounded-xl border p-4"><div class="flex items-center gap-4">`;
            Skeleton($$payload3, { class: "h-10 w-10 rounded-full" });
            $$payload3.out += `<!----> <div>`;
            Skeleton($$payload3, { class: "mb-1 h-4 w-24" });
            $$payload3.out += `<!----> `;
            Skeleton($$payload3, { class: "h-3 w-16" });
            $$payload3.out += `<!----></div> `;
            Skeleton($$payload3, { class: "h-5 w-8 rounded-full" });
            $$payload3.out += `<!----></div> <div class="text-right">`;
            Skeleton($$payload3, { class: "mb-1 h-5 w-12" });
            $$payload3.out += `<!----> `;
            Skeleton($$payload3, { class: "h-3 w-16" });
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
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  const { data } = $$props;
  let question = data.question;
  let loading = false;
  let probabilityData = data.probabilityData;
  let betSide = true;
  let placingBet = false;
  let customBetAmount = "";
  let userBalance = store_get($$store_subs ??= {}, "$PORTFOLIO_SUMMARY", PORTFOLIO_SUMMARY) ? store_get($$store_subs ??= {}, "$PORTFOLIO_SUMMARY", PORTFOLIO_SUMMARY).baseCurrencyBalance : 0;
  let questionId = data.questionId;
  async function fetchQuestion() {
    try {
      loading = true;
      const response = await fetch(`/api/hopium/questions/${questionId}`);
      if (response.ok) {
        const result = await response.json();
        question = result.question || result;
        probabilityData = result.probabilityHistory || [];
      } else if (response.status === 404) {
        toast.error("Question not found");
        goto("/hopium");
      } else {
        toast.error("Failed to load question");
      }
    } catch (e) {
      console.error("Failed to fetch question:", e);
      toast.error("Failed to load question");
    } finally {
      loading = false;
    }
  }
  async function placeBet() {
    if (!question || !customBetAmount || Number(customBetAmount) <= 0) {
      toast.error("Please enter a valid bet amount");
      return;
    }
    placingBet = true;
    try {
      const response = await fetch(`/api/hopium/questions/${question.id}/bet`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          side: betSide,
          amount: Number(customBetAmount)
        })
      });
      const result = await response.json();
      if (response.ok) {
        toast.success(`Bet placed! Potential winnings: $${result.bet.potentialWinnings.toFixed(2)}`);
        customBetAmount = "";
        fetchQuestion();
        fetchPortfolioSummary();
      } else {
        toast.error(result.error || "Failed to place bet");
      }
    } catch (e) {
      toast.error("Network error");
    } finally {
      placingBet = false;
    }
  }
  let estimatedYesPayout = !question?.userBets?.yesAmount || question.userBets.yesAmount <= 0 ? 0 : question.userBets.estimatedYesWinnings || 0;
  let estimatedNoPayout = !question?.userBets?.noAmount || question.userBets.noAmount <= 0 ? 0 : question.userBets.estimatedNoWinnings || 0;
  let estimatedWin = (() => {
    const amount = Number(customBetAmount);
    if (!amount || amount <= 0 || !question) return 0;
    const totalPool = question.yesAmount + question.noAmount + amount;
    const relevantPool = betSide ? question.yesAmount + amount : question.noAmount + amount;
    return relevantPool > 0 ? totalPool / relevantPool * amount : 0;
  })();
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    SEO($$payload2, {
      title: question ? `${question.question} - Hopium - Rugplay` : "Loading Question - Hopium - Rugplay",
      description: question ? `Bet on "${question.question}" in Rugplay's AI-powered prediction market. Current odds: ${question.yesPercentage.toFixed(1)}% YES, ${question.noPercentage.toFixed(1)}% NO. Total volume: $${question.totalAmount.toFixed(2)}.` : "AI-powered prediction market question in the Rugplay simulation game.",
      keywords: "AI prediction market question, virtual betting, cryptocurrency prediction game, yes no betting, forecasting simulation"
    });
    $$payload2.out += `<!----> <div class="container mx-auto max-w-7xl p-6">`;
    if (loading) {
      $$payload2.out += "<!--[-->";
      HopiumQuestionSkeleton($$payload2);
    } else if (!question) {
      $$payload2.out += "<!--[1-->";
      $$payload2.out += `<div class="flex h-96 items-center justify-center"><div class="text-center"><h3 class="mb-2 text-xl font-semibold">Question not found</h3> <p class="text-muted-foreground mb-6">This question may have been removed or doesn't exist.</p></div></div>`;
    } else {
      $$payload2.out += "<!--[!-->";
      $$payload2.out += `<div class="flex items-center gap-3"><div class="bg-muted rounded-lg p-4">`;
      Message_circle_question($$payload2, { class: "h-14 w-14" });
      $$payload2.out += `<!----></div> <div class="flex-1"><h1 class="text-2xl font-semibold break-all">${escape_html(question.question)}</h1> `;
      if (question.status === "ACTIVE") {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<p class="text-muted-foreground mt-1 text-sm">${escape_html(formatTimeUntil(question.resolutionDate).startsWith("Ended") ? "Resolving" : `Ends in ${formatTimeUntil(question.resolutionDate)}`)}</p>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (question.status === "RESOLVED") {
        $$payload2.out += "<!--[-->";
        Badge($$payload2, {
          variant: "destructive",
          class: question.aiResolution ? "bg-success/80!" : "",
          children: ($$payload3) => {
            if (question.aiResolution) {
              $$payload3.out += "<!--[-->";
              Check($$payload3, { class: "h-4 w-4" });
              $$payload3.out += `<!----> RESOLVED: YES`;
            } else {
              $$payload3.out += "<!--[!-->";
              X($$payload3, { class: "h-4 w-4" });
              $$payload3.out += `<!----> RESOLVED: NO`;
            }
            $$payload3.out += `<!--]-->`;
          },
          $$slots: { default: true }
        });
      } else if (question.status === "CANCELLED") {
        $$payload2.out += "<!--[1-->";
        Badge($$payload2, {
          variant: "outline",
          class: "text-muted-foreground border-muted-foreground",
          children: ($$payload3) => {
            X($$payload3, { class: "h-4 w-4" });
            $$payload3.out += `<!----> SKIP`;
          },
          $$slots: { default: true }
        });
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--></div></div> <div class="text-muted-foreground mb-4 mt-3 flex flex-wrap items-center gap-1.5 text-xs"><span>Created by</span> <!---->`;
      Root($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->`;
          Hover_card_trigger($$payload3, {
            class: "flex max-w-[180px] cursor-pointer items-center gap-1 rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 sm:max-w-[220px]",
            onclick: () => goto(`/user/${question?.creator.username}`),
            children: ($$payload4) => {
              $$payload4.out += `<!---->`;
              Avatar($$payload4, {
                class: "h-4 w-4",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->`;
                  Avatar_image($$payload5, {
                    src: getPublicUrl(question.creator.image),
                    alt: question.creator.username
                  });
                  $$payload5.out += `<!----> <!---->`;
                  Avatar_fallback($$payload5, {
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->${escape_html(question.creator.username.charAt(0))}`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!---->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> <span>${escape_html(question.creator.name)} (@${escape_html(question.creator.username)})</span>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!---->`;
          Hover_card_content($$payload3, {
            class: "w-80",
            side: "bottom",
            sideOffset: 3,
            children: ($$payload4) => {
              UserProfilePreview($$payload4, { userId: question.creator.id });
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div> <div class="grid gap-8"><div class="grid grid-cols-1 gap-8 lg:grid-cols-3"><div class="lg:col-span-2"><!---->`;
      Card($$payload2, {
        class: "shadow-sm",
        children: ($$payload3) => {
          $$payload3.out += `<!---->`;
          Card_header($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<div class="flex items-center justify-between"><!---->`;
              Card_title($$payload4, {
                class: "flex items-center gap-3 text-xl font-bold",
                children: ($$payload5) => {
                  Chart_column($$payload5, { class: "h-6 w-6" });
                  $$payload5.out += `<!----> Chart`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> <div class="text-right"><div class="text-success text-4xl font-bold">${escape_html(question.yesPercentage.toFixed(1))}%</div> <div class="text-muted-foreground text-sm font-medium">YES chance</div></div></div>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!---->`;
          Card_content($$payload3, {
            children: ($$payload4) => {
              if (probabilityData.length === 0) {
                $$payload4.out += "<!--[-->";
                $$payload4.out += `<div class="border-muted flex h-[400px] items-center justify-center rounded-lg border-2 border-dashed"><div class="text-center">`;
                Chart_column($$payload4, {
                  class: "text-muted-foreground mx-auto mb-3 h-12 w-12"
                });
                $$payload4.out += `<!----> <p class="text-muted-foreground text-sm">Chart will appear after first bet</p></div></div>`;
              } else {
                $$payload4.out += "<!--[!-->";
                $$payload4.out += `<div class="h-[400px] w-full rounded-lg border"></div>`;
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
                  $$payload5.out += `<!---->Place Bet`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!---->`;
          Card_content($$payload3, {
            class: "space-y-6",
            children: ($$payload4) => {
              $$payload4.out += `<div class="grid grid-cols-2 gap-4">`;
              Button($$payload4, {
                class: betSide ? "bg-success/80 hover:bg-success/90 w-full" : "bg-muted hover:bg-muted/90 w-full",
                size: "lg",
                onclick: () => betSide = true,
                disabled: question.aiResolution !== null,
                children: ($$payload5) => {
                  $$payload5.out += `<div class="flex w-full min-w-0 items-baseline gap-2"><span class="truncate text-xl font-bold">YES</span> <span class="truncate text-sm">${escape_html(question.yesPercentage.toFixed(1))}¢</span></div>`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              Button($$payload4, {
                class: !betSide ? "bg-destructive hover:bg-destructive/90 w-full" : "bg-muted hover:bg-muted/90 w-full",
                size: "lg",
                onclick: () => betSide = false,
                disabled: question.aiResolution !== null,
                children: ($$payload5) => {
                  $$payload5.out += `<div class="flex w-full min-w-0 items-baseline gap-2"><span class="truncate text-xl font-bold">NO</span> <span class="truncate text-sm">${escape_html(question.noPercentage.toFixed(1))}¢</span></div>`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----></div> <div class="space-y-2">`;
              Input($$payload4, {
                type: "number",
                step: "0.01",
                min: "0.01",
                placeholder: "Enter amount...",
                disabled: question.aiResolution !== null,
                get value() {
                  return customBetAmount;
                },
                set value($$value) {
                  customBetAmount = $$value;
                  $$settled = false;
                }
              });
              $$payload4.out += `<!----></div> <div class="flex-wrapper flex gap-2">`;
              Button($$payload4, {
                variant: "outline",
                class: "flex-1 truncate",
                onclick: () => customBetAmount = "1",
                disabled: question.aiResolution !== null,
                children: ($$payload5) => {
                  $$payload5.out += `<!---->$1`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              Button($$payload4, {
                variant: "outline",
                class: "flex-1 truncate",
                onclick: () => customBetAmount = "20",
                disabled: question.aiResolution !== null,
                children: ($$payload5) => {
                  $$payload5.out += `<!---->$20`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              Button($$payload4, {
                variant: "outline",
                class: "flex-1 truncate",
                onclick: () => customBetAmount = "100",
                disabled: question.aiResolution !== null,
                children: ($$payload5) => {
                  $$payload5.out += `<!---->$100`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              Button($$payload4, {
                variant: "outline",
                class: "flex-1 truncate",
                onclick: () => customBetAmount = userBalance.toString(),
                disabled: question.aiResolution !== null,
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Max`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----></div> <div class="space-y-2"><div class="flex justify-between text-sm"><span class="text-muted-foreground">To win:</span> <span class="font-mono">$${escape_html(estimatedWin.toFixed(2))}</span></div> <div class="flex justify-between text-sm"><span class="text-muted-foreground">Balance:</span> <span class="font-mono">$${escape_html(userBalance.toFixed(2))}</span></div></div> `;
              Button($$payload4, {
                class: "w-full",
                size: "lg",
                disabled: !customBetAmount || Number(customBetAmount) <= 0 || Number(customBetAmount) > userBalance || placingBet || question.aiResolution !== null,
                onclick: placeBet,
                children: ($$payload5) => {
                  if (placingBet) {
                    $$payload5.out += "<!--[-->";
                    Loader_circle($$payload5, { class: "h-4 w-4 animate-spin" });
                    $$payload5.out += `<!----> Placing Bet...`;
                  } else {
                    $$payload5.out += "<!--[!-->";
                    $$payload5.out += `Pay $${escape_html(Number(customBetAmount || 0).toFixed(2))}`;
                  }
                  $$payload5.out += `<!--]-->`;
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
      $$payload2.out += `<!----> `;
      if (!store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA)) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<!---->`;
        Card($$payload2, {
          class: "shadow-sm",
          children: ($$payload3) => {
            $$payload3.out += `<!---->`;
            Card_header($$payload3, {
              children: ($$payload4) => {
                $$payload4.out += `<!---->`;
                Card_title($$payload4, {
                  class: "text-lg font-bold",
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->Start Betting`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> <!---->`;
            Card_content($$payload3, {
              class: "pb-6",
              children: ($$payload4) => {
                $$payload4.out += `<div class="py-6 text-center"><p class="text-muted-foreground mb-4 text-sm">Sign in to place bets</p> `;
                Button($$payload4, {
                  size: "lg",
                  onclick: () => goto(),
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->Sign In`;
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
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--></div></div> <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">`;
      if (store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA) && question.userBets && question.userBets.totalAmount && question.userBets.totalAmount > 0) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<!---->`;
        Card($$payload2, {
          class: "gap-1",
          children: ($$payload3) => {
            $$payload3.out += `<!---->`;
            Card_header($$payload3, {
              children: ($$payload4) => {
                $$payload4.out += `<!---->`;
                Card_title($$payload4, {
                  class: "flex items-center gap-3 text-lg font-bold",
                  children: ($$payload5) => {
                    $$payload5.out += `<div class="bg-muted rounded-full p-2">`;
                    Calculator($$payload5, { class: "h-5 w-5" });
                    $$payload5.out += `<!----></div> Your Position`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> <!---->`;
            Card_content($$payload3, {
              class: "pb-4",
              children: ($$payload4) => {
                $$payload4.out += `<div class="space-y-3">`;
                if (question.userBets.yesAmount > 0) {
                  $$payload4.out += "<!--[-->";
                  $$payload4.out += `<div class="flex items-center justify-between"><div><div class="text-sm font-medium text-green-600">YES Bet</div> <div class="text-muted-foreground text-xs">Payout: $${escape_html(estimatedYesPayout.toFixed(2))}</div></div> <div class="text-lg font-bold text-green-600">$${escape_html(question.userBets.yesAmount.toFixed(2))}</div></div>`;
                } else {
                  $$payload4.out += "<!--[!-->";
                }
                $$payload4.out += `<!--]--> `;
                if (question.userBets.noAmount > 0) {
                  $$payload4.out += "<!--[-->";
                  $$payload4.out += `<div class="flex items-center justify-between"><div><div class="text-sm font-medium text-red-600">NO Bet</div> <div class="text-muted-foreground text-xs">Payout: $${escape_html(estimatedNoPayout.toFixed(2))}</div></div> <div class="text-lg font-bold text-red-600">$${escape_html(question.userBets.noAmount.toFixed(2))}</div></div>`;
                } else {
                  $$payload4.out += "<!--[!-->";
                }
                $$payload4.out += `<!--]--> `;
                if (question.userBets.yesAmount > 0 && question.userBets.noAmount > 0) {
                  $$payload4.out += "<!--[-->";
                  Separator($$payload4, {});
                } else {
                  $$payload4.out += "<!--[!-->";
                }
                $$payload4.out += `<!--]--> <div class="flex items-center justify-between"><span class="text-muted-foreground text-sm font-medium">Total Invested</span> <span class="text-lg font-bold">$${escape_html(question.userBets.totalAmount.toFixed(2))}</span></div></div>`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!---->`;
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!---->`;
      } else if (store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA)) {
        $$payload2.out += "<!--[1-->";
        $$payload2.out += `<!---->`;
        Card($$payload2, {
          class: "gap-1",
          children: ($$payload3) => {
            $$payload3.out += `<!---->`;
            Card_header($$payload3, {
              children: ($$payload4) => {
                $$payload4.out += `<!---->`;
                Card_title($$payload4, {
                  children: ($$payload5) => {
                    $$payload5.out += `<div class="inline-flex items-center gap-2">`;
                    Calculator($$payload5, { class: "h-5 w-5" });
                    $$payload5.out += `<!----> Place Your Bet</div>`;
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
                if (question.status === "ACTIVE") {
                  $$payload4.out += "<!--[-->";
                  $$payload4.out += `<p class="text-muted-foreground mb-6 text-sm">You haven't placed any bets yet</p>`;
                } else {
                  $$payload4.out += "<!--[!-->";
                  $$payload4.out += `<div class="py-6 text-center"><p class="text-muted-foreground text-sm">This question has been resolved</p></div>`;
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
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> <!---->`;
      Card($$payload2, {
        class: "gap-1",
        children: ($$payload3) => {
          $$payload3.out += `<!---->`;
          Card_header($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->`;
              Card_title($$payload4, {
                class: "flex items-center gap-3 text-lg font-bold",
                children: ($$payload5) => {
                  $$payload5.out += `<div class="bg-muted rounded-full p-2">`;
                  Chart_column($$payload5, { class: "h-5 w-5" });
                  $$payload5.out += `<!----></div> Market Stats`;
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
              $$payload4.out += `<div class="flex justify-between"><span class="text-muted-foreground text-sm">Total Volume:</span> <span class="font-mono text-sm">$${escape_html(question.totalAmount.toFixed(2))}</span></div> <div class="flex justify-between"><span class="text-muted-foreground text-sm">Total Bets:</span> <span class="font-mono text-sm">${escape_html(question.recentBets?.length || 0)}</span></div> <div class="flex justify-between"><span class="text-muted-foreground text-sm">Created:</span> <span class="font-mono text-sm">${escape_html(formatDateWithYear(question.createdAt))}</span></div> `;
              if (question.status === "ACTIVE") {
                $$payload4.out += "<!--[-->";
                $$payload4.out += `<div class="flex justify-between"><span class="text-muted-foreground text-sm">Resolves:</span> <span class="font-mono text-sm">${escape_html(formatDateWithYear(question.resolutionDate))}</span></div>`;
              } else {
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
      $$payload2.out += `<!----></div> `;
      if (question.recentBets && question.recentBets.length > 0) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<!---->`;
        Card($$payload2, {
          class: "shadow-sm",
          children: ($$payload3) => {
            $$payload3.out += `<!---->`;
            Card_header($$payload3, {
              children: ($$payload4) => {
                $$payload4.out += `<!---->`;
                Card_title($$payload4, {
                  class: "flex items-center gap-3 text-xl font-bold",
                  children: ($$payload5) => {
                    $$payload5.out += `<div class="bg-muted rounded-full p-2">`;
                    History($$payload5, { class: "h-6 w-6" });
                    $$payload5.out += `<!----></div> Recent Activity`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> <!---->`;
            Card_content($$payload3, {
              class: "pb-6",
              children: ($$payload4) => {
                const each_array = ensure_array_like(question.recentBets);
                $$payload4.out += `<div class="space-y-4"><!--[-->`;
                for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                  let bet = each_array[$$index];
                  if (bet.user) {
                    $$payload4.out += "<!--[-->";
                    $$payload4.out += `<div class="flex items-center justify-between rounded-xl border p-4"><div class="flex items-center gap-4"><!---->`;
                    Root($$payload4, {
                      children: ($$payload5) => {
                        $$payload5.out += `<!---->`;
                        Hover_card_trigger($$payload5, {
                          children: ($$payload6) => {
                            $$payload6.out += `<button class="flex cursor-pointer items-center gap-3 text-left"><!---->`;
                            Avatar($$payload6, {
                              class: "h-10 w-10",
                              children: ($$payload7) => {
                                $$payload7.out += `<!---->`;
                                Avatar_image($$payload7, {
                                  src: getPublicUrl(bet.user?.image || null),
                                  alt: bet.user?.name || bet.user?.username
                                });
                                $$payload7.out += `<!----> <!---->`;
                                Avatar_fallback($$payload7, {
                                  class: "text-sm",
                                  children: ($$payload8) => {
                                    $$payload8.out += `<!---->${escape_html((bet.user?.name || bet.user?.username || "U").charAt(0))}`;
                                  },
                                  $$slots: { default: true }
                                });
                                $$payload7.out += `<!---->`;
                              },
                              $$slots: { default: true }
                            });
                            $$payload6.out += `<!----> <div><div class="font-semibold hover:underline">${escape_html(bet.user?.name || "Deleted User")}</div> <div class="text-muted-foreground text-sm">@${escape_html(bet.user?.username || "deleted_user")}</div></div></button>`;
                          },
                          $$slots: { default: true }
                        });
                        $$payload5.out += `<!----> <!---->`;
                        Hover_card_content($$payload5, {
                          class: "w-80",
                          children: ($$payload6) => {
                            if (bet.user?.id) {
                              $$payload6.out += "<!--[-->";
                              UserProfilePreview($$payload6, { userId: bet.user?.id });
                            } else {
                              $$payload6.out += "<!--[!-->";
                            }
                            $$payload6.out += `<!--]-->`;
                          },
                          $$slots: { default: true }
                        });
                        $$payload5.out += `<!---->`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload4.out += `<!----> `;
                    Badge($$payload4, {
                      variant: "destructive",
                      class: bet.side ? "bg-success/80!" : "",
                      children: ($$payload5) => {
                        $$payload5.out += `<!---->${escape_html(bet.side ? "YES" : "NO")}`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload4.out += `<!----></div> <div class="text-right"><div class="text-lg font-bold">$${escape_html(bet.amount.toFixed(2))}</div> <div class="text-muted-foreground text-sm">${escape_html(new Date(bet.createdAt).toLocaleDateString())}</div></div></div>`;
                  } else {
                    $$payload4.out += "<!--[!-->";
                  }
                  $$payload4.out += `<!--]-->`;
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
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--></div>`;
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
//# sourceMappingURL=_page.svelte-OpREUW7A.js.map
