import { p as push, u as store_get, q as copy_payload, t as assign_payload, v as unsubscribe_stores, a as pop, e as ensure_array_like, d as attr, m as escape_html, w as sanitize_props, b as spread_props, x as slot, o as stringify } from './index3-CthgjPPi.js';
import { C as Card } from './card-23nZlDN1.js';
import { i as formatTimeUntil, j as formatDateWithYear, f as formatValue, b as getPublicUrl } from './utils2-CLIgW4-x.js';
import { C as Card_header } from './card-header-CuTABeMH.js';
import { R as Root, D as Dialog_content } from './index5-D35Z60w5.js';
import { R as Root$1, H as Hover_card_trigger, a as Hover_card_content, U as UserProfilePreview } from './UserProfilePreview-DXQRal1C.js';
import { B as Button } from './button-Cg_QiDbD.js';
import { I as Input } from './input-BZy6dM-O.js';
import { L as Label } from './label-CxNim4GD.js';
import { B as Badge } from './badge-Dggzsmpe.js';
import { A as Avatar, a as Avatar_fallback } from './avatar-fallback-BVDrtls6.js';
import { A as Avatar_image } from './avatar-image-BuX3_Vs_.js';
import './volume-settings-DX3g8058.js';
import { S as Skeleton } from './skeleton-BrIQmewN.js';
import { S as SEO } from './SEO-Cqzi3OcQ.js';
import { U as USER_DATA } from './user-data-CT5kjyaY.js';
import { P as PORTFOLIO_SUMMARY, f as fetchPortfolioSummary } from './portfolio-data-D2WCRVa2.js';
import { a as toast } from './Toaster.svelte_svelte_type_style_lang-CcrnaSIn.js';
import { g as goto } from './client-s_UYc3Sk.js';
import { D as Dialog_header, a as Dialog_title, b as Dialog_description } from './dialog-description-4JjLXrIw.js';
import { I as Icon } from './Icon2-Bqt4BCIy.js';
import { D as Dialog_footer } from './dialog-footer-KlhKHuMF.js';
import { P as Plus } from './plus-D3S3uPbz.js';
import { L as Loader_circle } from './loader-circle-04fw-oOl.js';
import { C as Check } from './check-DvLwJGCG.js';
import { X } from './x-BILdrmxj.js';
import { C as Clock } from './clock-CAF8Dzum.js';
import { T as Trending_up } from './trending-up-DbscwFys.js';
import { T as Trending_down } from './trending-down-DcTfhCCA.js';
import './index2-D4eROfHK.js';
import './clsx-ChV9xqsO.js';
import './scroll-lock-BUIxTk31.js';
import './create-id-Bxd404XN.js';
import './index-server-DH7p7JOq.js';
import './events-CF0F77H5.js';
import './Icon-DETra0Ze.js';
import './popper-layer-force-mount-BIcocscF.js';
import './mounted-Tbl-FfLm.js';
import './use-grace-area.svelte-Dsn6tMKF.js';
import './index-opKo-a_0.js';
import './stores-Be-B7Xuq.js';
import './exports-Cv9LZeD1.js';

function Globe($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "circle",
      { "cx": "12", "cy": "12", "r": "10" }
    ],
    [
      "path",
      {
        "d": "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"
      }
    ],
    ["path", { "d": "M2 12h20" }]
  ];
  Icon($$payload, spread_props([
    { name: "globe" },
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
function Sparkles($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
      }
    ],
    ["path", { "d": "M20 3v4" }],
    ["path", { "d": "M22 5h-4" }],
    ["path", { "d": "M4 17v2" }],
    ["path", { "d": "M5 18H3" }]
  ];
  Icon($$payload, spread_props([
    { name: "sparkles" },
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
function HopiumSkeleton($$payload) {
  const each_array = ensure_array_like(Array(6));
  $$payload.out += `<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    each_array[$$index];
    Card($$payload, {
      class: "flex flex-col",
      children: ($$payload2) => {
        Card_header($$payload2, {
          class: "pb-4",
          children: ($$payload3) => {
            $$payload3.out += `<div class="flex items-start justify-between gap-3"><div class="flex-1 space-y-3">`;
            Skeleton($$payload3, { class: "h-6 w-full" });
            $$payload3.out += `<!----> `;
            Skeleton($$payload3, { class: "h-6 w-3/4" });
            $$payload3.out += `<!----></div> <div class="flex flex-col items-end gap-2"><div class="relative flex h-12 w-16 items-end justify-center">`;
            Skeleton($$payload3, { class: "h-10 w-16 rounded-full" });
            $$payload3.out += `<!----> <div class="absolute bottom-0">`;
            Skeleton($$payload3, { class: "h-4 w-8" });
            $$payload3.out += `<!----></div></div></div></div> <div class="flex items-center gap-2">`;
            Skeleton($$payload3, { class: "h-4 w-24" });
            $$payload3.out += `<!----> `;
            Skeleton($$payload3, { class: "h-1 w-1 rounded-full" });
            $$payload3.out += `<!----> `;
            Skeleton($$payload3, { class: "h-4 w-16" });
            $$payload3.out += `<!----></div> <div class="mb-2 mt-2 flex items-center gap-2">`;
            Skeleton($$payload3, { class: "h-5 w-5 rounded-full" });
            $$payload3.out += `<!----> `;
            Skeleton($$payload3, { class: "h-4 w-20" });
            $$payload3.out += `<!----></div>`;
          },
          $$slots: { default: true }
        });
      },
      $$slots: { default: true }
    });
  }
  $$payload.out += `<!--]--></div>`;
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let questions = [];
  let loading = true;
  let activeTab = "active";
  let showCreateDialog = false;
  let newQuestion = "";
  let creatingQuestion = false;
  let userBalance = store_get($$store_subs ??= {}, "$PORTFOLIO_SUMMARY", PORTFOLIO_SUMMARY) ? store_get($$store_subs ??= {}, "$PORTFOLIO_SUMMARY", PORTFOLIO_SUMMARY).baseCurrencyBalance : 0;
  async function fetchQuestions() {
    try {
      const status = activeTab === "active" ? "ACTIVE" : activeTab === "resolved" ? "RESOLVED" : "ALL";
      const response = await fetch(`/api/hopium/questions?status=${status}&limit=50`);
      if (response.ok) {
        const data = await response.json();
        questions = data.questions;
      } else {
        toast.error("Failed to load questions");
      }
    } catch (e) {
      console.error("Failed to fetch questions:", e);
      toast.error("Failed to load questions");
    } finally {
      loading = false;
    }
  }
  async function createQuestion() {
    if (!newQuestion.trim()) {
      toast.error("Please enter a question");
      return;
    }
    creatingQuestion = true;
    try {
      const response = await fetch("/api/hopium/questions/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: newQuestion })
      });
      const result = await response.json();
      if (response.ok) {
        toast.success("Question created successfully!");
        showCreateDialog = false;
        newQuestion = "";
        fetchQuestions();
        fetchPortfolioSummary();
      } else {
        toast.error(result.error || "Failed to create question", { duration: 2e4 });
      }
    } catch (e) {
      toast.error("Network error");
    } finally {
      creatingQuestion = false;
    }
  }
  function handleCreateQuestion() {
    if (!store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA)) {
      toast.error("You must be logged in to create a question");
      return;
    }
    if (userBalance <= 1e5) {
      toast.error("You need at least $100,000 in your portfolio (cash) to create a question.");
      return;
    }
    showCreateDialog = true;
  }
  const tabs = [
    { value: "active", label: "Active" },
    { value: "resolved", label: "Resolved" },
    { value: "all", label: "All" }
  ];
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    const each_array = ensure_array_like(tabs);
    SEO($$payload2, {
      title: "Hopium - Rugplay",
      description: "AI-powered prediction markets in the Rugplay simulation game. Create yes/no questions, bet on outcomes with virtual currency, and test your forecasting skills.",
      keywords: "AI prediction markets game, virtual betting simulation, cryptocurrency prediction game, forecasting game, virtual currency betting"
    });
    $$payload2.out += `<!----> <!---->`;
    Root($$payload2, {
      get open() {
        return showCreateDialog;
      },
      set open($$value) {
        showCreateDialog = $$value;
        $$settled = false;
      },
      children: ($$payload3) => {
        $$payload3.out += `<!---->`;
        Dialog_content($$payload3, {
          class: "sm:max-w-lg",
          children: ($$payload4) => {
            $$payload4.out += `<!---->`;
            Dialog_header($$payload4, {
              children: ($$payload5) => {
                $$payload5.out += `<!---->`;
                Dialog_title($$payload5, {
                  class: "flex items-center gap-2",
                  children: ($$payload6) => {
                    Sparkles($$payload6, { class: "h-5 w-5" });
                    $$payload6.out += `<!----> Create`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!----> <!---->`;
                Dialog_description($$payload5, {
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->Create a yes/no question that will be resolved by AI.`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> <div class="space-y-4"><div class="space-y-2">`;
            Label($$payload4, {
              for: "question",
              children: ($$payload5) => {
                $$payload5.out += `<!---->Question *`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Input($$payload4, {
              id: "question",
              placeholder: "Will *SKIBIDI reach $100 price today?",
              maxlength: 200,
              get value() {
                return newQuestion;
              },
              set value($$value) {
                newQuestion = $$value;
                $$settled = false;
              }
            });
            $$payload4.out += `<!----> <p class="text-muted-foreground text-xs">${escape_html(newQuestion.length)}/200 characters</p> <p class="text-muted-foreground text-xs">The AI will automatically determine the appropriate resolution date and criteria.</p></div></div> <!---->`;
            Dialog_footer($$payload4, {
              children: ($$payload5) => {
                Button($$payload5, {
                  variant: "outline",
                  onclick: () => showCreateDialog = false,
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->Cancel`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!----> `;
                Button($$payload5, {
                  onclick: createQuestion,
                  disabled: creatingQuestion || !newQuestion.trim(),
                  children: ($$payload6) => {
                    if (creatingQuestion) {
                      $$payload6.out += "<!--[-->";
                      Loader_circle($$payload6, { class: "h-4 w-4 animate-spin" });
                      $$payload6.out += `<!----> Processing...`;
                    } else {
                      $$payload6.out += "<!--[!-->";
                      $$payload6.out += `Publish`;
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
    $$payload2.out += `<!----> <div class="container mx-auto max-w-7xl p-6"><header class="mb-8"><div class="text-center"><h1 class="mb-2 flex items-center justify-center gap-2 text-3xl font-bold">`;
    Sparkles($$payload2, { class: "h-8 w-8 text-purple-500" });
    $$payload2.out += `<!----> Hopium</h1> <p class="text-muted-foreground mb-6">AI-powered prediction markets. Create questions and bet on outcomes.</p></div></header> <div class="w-full"><div class="mb-6 flex items-center justify-center gap-2"><div class="bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]"><div class="grid w-full max-w-md grid-cols-3"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let tab = each_array[$$index];
      $$payload2.out += `<button class="data-[state=active]:bg-background data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring text-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-transparent px-2 py-1 text-sm font-medium transition-[color,box-shadow] focus-visible:outline-1 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm"${attr("data-state", activeTab === tab.value ? "active" : "inactive")}>${escape_html(tab.label)}</button>`;
    }
    $$payload2.out += `<!--]--></div></div> `;
    if (store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA)) {
      $$payload2.out += "<!--[-->";
      Button($$payload2, {
        onclick: handleCreateQuestion,
        children: ($$payload3) => {
          Plus($$payload3, { class: "h-4 w-4" });
          $$payload3.out += `<!----> Ask`;
        },
        $$slots: { default: true }
      });
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--></div> <div class="flex-1 outline-none">`;
    if (loading) {
      $$payload2.out += "<!--[-->";
      HopiumSkeleton($$payload2);
    } else if (questions.length === 0) {
      $$payload2.out += "<!--[1-->";
      $$payload2.out += `<div class="py-16 text-center"><h3 class="mb-2 text-lg font-semibold">No questions yet</h3> <p class="text-muted-foreground mb-6">Be the first to create a prediction question!</p></div>`;
    } else {
      $$payload2.out += "<!--[!-->";
      const each_array_1 = ensure_array_like(questions);
      $$payload2.out += `<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"><!--[-->`;
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let question = each_array_1[$$index_1];
        $$payload2.out += `<!---->`;
        Card($$payload2, {
          class: "bg-card hover:bg-card/90 flex cursor-pointer flex-col transition-colors",
          onclick: () => goto(`/hopium/${question.id}`),
          children: ($$payload3) => {
            $$payload3.out += `<!---->`;
            Card_header($$payload3, {
              class: "pb-4",
              children: ($$payload4) => {
                $$payload4.out += `<div class="flex items-start justify-between gap-3"><div class="flex-1"><h3 class="break-words text-lg font-medium">${escape_html(question.question)}</h3></div> <div class="flex flex-col items-end gap-2">`;
                if (question.status === "RESOLVED") {
                  $$payload4.out += "<!--[-->";
                  Badge($$payload4, {
                    variant: "destructive",
                    class: `flex flex-shrink-0 items-center gap-1 ${stringify(question.aiResolution ? "bg-success/80!" : "")}`,
                    children: ($$payload5) => {
                      if (question.aiResolution) {
                        $$payload5.out += "<!--[-->";
                        Check($$payload5, { class: "h-3 w-3" });
                        $$payload5.out += `<!----> YES`;
                      } else {
                        $$payload5.out += "<!--[!-->";
                        X($$payload5, { class: "h-3 w-3" });
                        $$payload5.out += `<!----> NO`;
                      }
                      $$payload5.out += `<!--]-->`;
                    },
                    $$slots: { default: true }
                  });
                } else if (question.status === "CANCELLED") {
                  $$payload4.out += "<!--[1-->";
                  Badge($$payload4, {
                    variant: "outline",
                    class: "flex flex-shrink-0 items-center gap-1 text-muted-foreground border-muted-foreground",
                    children: ($$payload5) => {
                      X($$payload5, { class: "h-3 w-3" });
                      $$payload5.out += `<!----> SKIP`;
                    },
                    $$slots: { default: true }
                  });
                } else {
                  $$payload4.out += "<!--[!-->";
                }
                $$payload4.out += `<!--]--> <div class="relative flex h-12 w-16 items-end justify-center"><svg class="h-10 w-16" viewBox="0 0 64 32"><path d="M 8 28 A 24 24 0 0 1 56 28" fill="none" stroke="var(--muted-foreground)" stroke-width="3" stroke-linecap="round" opacity="0.3"></path><path d="M 8 28 A 24 24 0 0 1 56 28" fill="none" stroke="var(--primary)" stroke-width="3" stroke-linecap="round"${attr("stroke-dasharray", Math.PI * 24)}${attr("stroke-dashoffset", Math.PI * 24 - question.yesPercentage / 100 * Math.PI * 24)} class="transition-all duration-300 ease-in-out"></path></svg> <div class="absolute bottom-0 text-sm font-medium">${escape_html(question.yesPercentage.toFixed(0))}%</div></div></div></div> <div class="text-muted-foreground flex items-center gap-2 text-sm"><div class="flex items-center gap-1">`;
                Clock($$payload4, { class: "h-3 w-3" });
                $$payload4.out += `<!----> `;
                if (question.status === "ACTIVE") {
                  $$payload4.out += "<!--[-->";
                  $$payload4.out += `${escape_html(formatTimeUntil(question.resolutionDate).startsWith("Ended") ? "Resolving" : `${formatTimeUntil(question.resolutionDate)} remaining`)}`;
                } else {
                  $$payload4.out += "<!--[!-->";
                  $$payload4.out += `Resolved ${escape_html(formatDateWithYear(question.resolvedAt || ""))}`;
                }
                $$payload4.out += `<!--]--></div> <span>•</span> <div class="flex items-center gap-1">${escape_html(formatValue(question.totalAmount))}</div> `;
                if (question.requiresWebSearch) {
                  $$payload4.out += "<!--[-->";
                  $$payload4.out += `<span>•</span> `;
                  Globe($$payload4, { class: "h-3 w-3 text-blue-500" });
                  $$payload4.out += `<!---->`;
                } else {
                  $$payload4.out += "<!--[!-->";
                }
                $$payload4.out += `<!--]--></div> <div class="mb-2 mt-2 flex items-center gap-2 text-sm"><!---->`;
                Root$1($$payload4, {
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->`;
                    Hover_card_trigger($$payload5, {
                      children: ($$payload6) => {
                        $$payload6.out += `<button class="flex cursor-pointer items-center gap-2 text-left hover:underline"><!---->`;
                        Avatar($$payload6, {
                          class: "h-5 w-5",
                          children: ($$payload7) => {
                            $$payload7.out += `<!---->`;
                            Avatar_image($$payload7, {
                              src: getPublicUrl(question.creator.image),
                              alt: question.creator.name
                            });
                            $$payload7.out += `<!----> <!---->`;
                            Avatar_fallback($$payload7, {
                              class: "text-xs",
                              children: ($$payload8) => {
                                $$payload8.out += `<!---->${escape_html(question.creator.name.charAt(0))}`;
                              },
                              $$slots: { default: true }
                            });
                            $$payload7.out += `<!---->`;
                          },
                          $$slots: { default: true }
                        });
                        $$payload6.out += `<!----> <span class="text-muted-foreground">@${escape_html(question.creator.username)}</span></button>`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload5.out += `<!----> <!---->`;
                    Hover_card_content($$payload5, {
                      class: "w-80",
                      children: ($$payload6) => {
                        UserProfilePreview($$payload6, { userId: question.creator.id });
                      },
                      $$slots: { default: true }
                    });
                    $$payload5.out += `<!---->`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----></div> `;
                if (question.userBets && (question.userBets.yesAmount > 0 || question.userBets.noAmount > 0)) {
                  $$payload4.out += "<!--[-->";
                  $$payload4.out += `<div class="text-muted-foreground flex items-center gap-4 text-sm"><span>Your bets:</span> `;
                  if (question.userBets.yesAmount > 0) {
                    $$payload4.out += "<!--[-->";
                    $$payload4.out += `<div class="flex items-center gap-1">`;
                    Trending_up($$payload4, { class: "h-3 w-3 text-green-600" });
                    $$payload4.out += `<!----> <span class="text-green-600">YES: $${escape_html(question.userBets.yesAmount.toFixed(2))}</span></div>`;
                  } else {
                    $$payload4.out += "<!--[!-->";
                  }
                  $$payload4.out += `<!--]--> `;
                  if (question.userBets.noAmount > 0) {
                    $$payload4.out += "<!--[-->";
                    $$payload4.out += `<div class="flex items-center gap-1">`;
                    Trending_down($$payload4, { class: "h-3 w-3 text-red-600" });
                    $$payload4.out += `<!----> <span class="text-red-600">NO: $${escape_html(question.userBets.noAmount.toFixed(2))}</span></div>`;
                  } else {
                    $$payload4.out += "<!--[!-->";
                  }
                  $$payload4.out += `<!--]--></div>`;
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
        $$payload2.out += `<!---->`;
      }
      $$payload2.out += `<!--]--></div>`;
    }
    $$payload2.out += `<!--]--></div></div></div>`;
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
//# sourceMappingURL=_page.svelte-CWpX_wUH.js.map
