import { p as push, q as copy_payload, t as assign_payload, a as pop, u as store_get, m as escape_html, v as unsubscribe_stores, c as bind_props, b as spread_props, l as attr_style, o as stringify, w as sanitize_props, x as slot, y as props_id, f as spread_attributes, n as derived } from './index3-CthgjPPi.js';
import { B as Button } from './button-Cg_QiDbD.js';
import { C as Card } from './card-23nZlDN1.js';
import { C as Card_content } from './card-content-Nxnnhqv4.js';
import './volume-settings-DX3g8058.js';
import { C as Card_header } from './card-header-CuTABeMH.js';
import { C as Card_title } from './card-title-CxxMmziD.js';
import { c as cn } from './utils2-CLIgW4-x.js';
import { c as createBitsAttrs, a as createId, b as box, m as mergeProps, d as attachRef } from './create-id-Bxd404XN.js';
import { A as Alert } from './alert-9IclKPUx.js';
import { A as Alert_description } from './alert-description-DJRrBUyj.js';
import { a as toast } from './Toaster.svelte_svelte_type_style_lang-CcrnaSIn.js';
import { I as Icon } from './Icon2-Bqt4BCIy.js';
import { C as Check } from './check-DvLwJGCG.js';
import { U as USER_DATA } from './user-data-CT5kjyaY.js';
import { S as SignInConfirmDialog } from './SignInConfirmDialog-CRywm7vo.js';
import { K as Key } from './key-DSJ0UTHG.js';
import { A as Activity } from './activity-DwHC2T1s.js';
import { C as Chevron_right } from './chevron-right-BZJYVhmO.js';
import { T as Triangle_alert } from './triangle-alert-D5MhYm9H.js';
import './index2-D4eROfHK.js';
import './clsx-ChV9xqsO.js';
import './index-opKo-a_0.js';
import './index-server-DH7p7JOq.js';
import './index5-D35Z60w5.js';
import './scroll-lock-BUIxTk31.js';
import './events-CF0F77H5.js';
import './Icon-DETra0Ze.js';
import 'better-auth/svelte';
import 'better-auth/client/plugins';
import './shared-server-BfUoNEXY.js';
import './index6-BNoyVQ18.js';
import './client2-DLmkXqdH.js';
import './client-s_UYc3Sk.js';
import './exports-Cv9LZeD1.js';
import './dialog-description-4JjLXrIw.js';

const progressAttrs = createBitsAttrs({ component: "progress", parts: ["root"] });
class ProgressRootState {
  opts;
  constructor(opts) {
    this.opts = opts;
  }
  #props = derived(() => ({
    role: "progressbar",
    value: this.opts.value.current,
    "aria-valuemin": this.opts.min.current,
    "aria-valuemax": this.opts.max.current,
    "aria-valuenow": this.opts.value.current === null ? void 0 : this.opts.value.current,
    "data-value": this.opts.value.current === null ? void 0 : this.opts.value.current,
    "data-state": getProgressDataState(this.opts.value.current, this.opts.max.current),
    "data-max": this.opts.max.current,
    "data-min": this.opts.min.current,
    "data-indeterminate": this.opts.value.current === null ? "" : void 0,
    [progressAttrs.root]: "",
    ...attachRef(this.opts.ref)
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
function getProgressDataState(value, max) {
  if (value === null) return "indeterminate";
  return value === max ? "loaded" : "loading";
}
function useProgressRootState(props) {
  return new ProgressRootState(props);
}
function Progress$1($$payload, $$props) {
  push();
  const uid = props_id($$payload);
  let {
    child,
    children,
    value = 0,
    max = 100,
    min = 0,
    id = createId(uid),
    ref = null,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const rootState = useProgressRootState({
    value: box.with(() => value),
    max: box.with(() => max),
    min: box.with(() => min),
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, rootState.props);
  if (child) {
    $$payload.out += "<!--[-->";
    child($$payload, { props: mergedProps });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div${spread_attributes({ ...mergedProps }, null)}>`;
    children?.($$payload);
    $$payload.out += `<!----></div>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { ref });
  pop();
}
function Chevron_down($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [["path", { "d": "m6 9 6 6 6-6" }]];
  Icon($$payload, spread_props([
    { name: "chevron-down" },
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
function Copy($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "rect",
      {
        "width": "14",
        "height": "14",
        "x": "8",
        "y": "8",
        "rx": "2",
        "ry": "2"
      }
    ],
    [
      "path",
      {
        "d": "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "copy" },
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
function Progress($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    max = 100,
    value,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!---->`;
    Progress$1($$payload2, spread_props([
      {
        "data-slot": "progress",
        class: cn("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full", className),
        value,
        max
      },
      restProps,
      {
        get ref() {
          return ref;
        },
        set ref($$value) {
          ref = $$value;
          $$settled = false;
        },
        children: ($$payload3) => {
          $$payload3.out += `<div data-slot="progress-indicator" class="bg-primary h-full w-full flex-1 transition-all"${attr_style(`transform: translateX(-${stringify(100 - 100 * (value ?? 0) / (max ?? 1))}%)`)}></div>`;
        },
        $$slots: { default: true }
      }
    ]));
    $$payload2.out += `<!---->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { ref });
  pop();
}
function Collapsible($$payload, $$props) {
  push();
  let {
    ref = null,
    open = false,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    {
      $$payload2.out += "<!--[!-->";
      $$payload2.out += `<div data-slot="collapsible">`;
      children?.($$payload2);
      $$payload2.out += `<!----></div>`;
    }
    $$payload2.out += `<!--]-->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { ref, open });
  pop();
}
function Collapsible_trigger($$payload, $$props) {
  push();
  let {
    ref = null,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    {
      $$payload2.out += "<!--[!-->";
      $$payload2.out += `<button${spread_attributes(
        {
          "data-slot": "collapsible-trigger",
          ...restProps
        },
        null
      )}>`;
      children?.($$payload2);
      $$payload2.out += `<!----></button>`;
    }
    $$payload2.out += `<!--]-->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { ref });
  pop();
}
function Collapsible_content($$payload, $$props) {
  push();
  let {
    ref = null,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    {
      $$payload2.out += "<!--[!-->";
      $$payload2.out += `<div${spread_attributes(
        {
          "data-slot": "collapsible-content",
          ...restProps
        },
        null
      )}>`;
      children?.($$payload2);
      $$payload2.out += `<!----></div>`;
    }
    $$payload2.out += `<!--]-->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { ref });
  pop();
}
function Codeblock($$payload, $$props) {
  const { text = "", displayOnly = false } = $$props;
  let isSuccess = false;
  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(text);
      isSuccess = true;
      setTimeout(
        () => {
          isSuccess = false;
        },
        2e3
      );
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  }
  $$payload.out += `<div class="flex w-full items-center gap-2 overflow-hidden rounded-md border bg-primary/10"><code class="block flex-grow overflow-x-auto whitespace-pre-wrap p-3 font-mono text-sm">${escape_html(text)}</code> `;
  if (!displayOnly) {
    $$payload.out += "<!--[-->";
    Button($$payload, {
      variant: "ghost",
      size: "sm",
      class: "mr-1 h-8 w-8 flex-shrink-0 p-0 hover:bg-primary/15",
      onclick: copyToClipboard,
      "aria-label": "Copy to clipboard",
      children: ($$payload2) => {
        if (isSuccess) {
          $$payload2.out += "<!--[-->";
          $$payload2.out += `<div>`;
          Check($$payload2, { class: "h-4 w-4" });
          $$payload2.out += `<!----></div>`;
        } else {
          $$payload2.out += "<!--[!-->";
          $$payload2.out += `<div>`;
          Copy($$payload2, { class: "h-4 w-4" });
          $$payload2.out += `<!----></div>`;
        }
        $$payload2.out += `<!--]-->`;
      },
      $$slots: { default: true }
    });
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let { data } = $$props;
  let apiKey = null;
  let apiKeyId = data.apiKey?.id || null;
  let justCreated = false;
  let credits = data.apiKey?.remaining || 0;
  let todayUsage = data.todayUsage || 0;
  let shouldSignIn = false;
  const maxDailyRequests = 2e3;
  const usagePercentage = todayUsage / maxDailyRequests * 100;
  let loading = false;
  let authOpen = false;
  let topCoinsOpen = false;
  let marketDataOpen = false;
  let coinDetailsOpen = false;
  let holdersOpen = false;
  let hopiumOpen = false;
  let hopiumDetailsOpen = false;
  let rateLimitingOpen = false;
  let errorResponsesOpen = false;
  async function createKey() {
    loading = true;
    try {
      const response = await fetch("/api/keys", { method: "POST" });
      if (!response.ok) throw new Error("Failed to create key");
      const { id, key, remaining } = await response.json();
      apiKeyId = id;
      apiKey = key;
      credits = remaining;
      justCreated = true;
      toast.success("API key created");
    } catch (err) {
      toast.error("Failed to create API key");
    } finally {
      loading = false;
    }
  }
  async function regenerateKey() {
    loading = true;
    try {
      const response = await fetch(`/api/keys/${apiKeyId}/regenerate`, { method: "POST" });
      if (!response.ok) throw new Error("Failed to regenerate key");
      const { id, key, remaining } = await response.json();
      apiKeyId = id;
      apiKey = key;
      credits = remaining;
      justCreated = true;
      toast.success("API key regenerated");
    } catch (err) {
      toast.error("Failed to regenerate key");
    } finally {
      loading = false;
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
    $$payload2.out += `<!----> <div class="container mx-auto max-w-4xl space-y-6 p-4 md:p-8"><div class="flex flex-col items-center justify-center"><h1 class="text-3xl font-bold">API Access</h1> <p class="text-muted-foreground">Manage your API access and usage</p></div> `;
    if (!store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA)) {
      $$payload2.out += "<!--[-->";
      Card($$payload2, {
        children: ($$payload3) => {
          Card_content($$payload3, {
            class: "flex flex-col items-center justify-center py-12",
            children: ($$payload4) => {
              Key($$payload4, { class: "text-muted-foreground mb-4 h-12 w-12" });
              $$payload4.out += `<!----> <h3 class="mb-2 text-lg font-semibold">Sign in required</h3> <p class="text-muted-foreground mb-4 text-center">Sign in to get your free API key.</p> `;
              Button($$payload4, {
                onclick: () => shouldSignIn = true,
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Sign In`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
    } else {
      $$payload2.out += "<!--[!-->";
      Card($$payload2, {
        children: ($$payload3) => {
          Card_header($$payload3, {
            children: ($$payload4) => {
              Card_title($$payload4, {
                class: "flex items-center gap-2",
                children: ($$payload5) => {
                  Activity($$payload5, { class: "h-5 w-5" });
                  $$payload5.out += `<!----> Today's Usage`;
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Card_content($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<div class="space-y-2"><div class="flex justify-between text-sm"><span>${escape_html(todayUsage.toLocaleString())} requests</span> <span>${escape_html(maxDailyRequests.toLocaleString())} max</span></div> `;
              Progress($$payload4, { value: usagePercentage, class: "h-2" });
              $$payload4.out += `<!----> <p class="text-muted-foreground text-xs">${escape_html(Math.max(0, maxDailyRequests - todayUsage).toLocaleString())} requests remaining today</p></div>`;
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
              $$payload4.out += `<div class="flex items-start justify-between"><div>`;
              Card_title($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->API Key`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> <p class="text-muted-foreground text-sm">Use this key to authenticate your API requests</p></div> `;
              if (apiKeyId) {
                $$payload4.out += "<!--[-->";
                Button($$payload4, {
                  variant: "outline",
                  onclick: regenerateKey,
                  disabled: loading,
                  children: ($$payload5) => {
                    Key($$payload5, { class: "h-4 w-4" });
                    $$payload5.out += `<!----> Regenerate`;
                  },
                  $$slots: { default: true }
                });
              } else {
                $$payload4.out += "<!--[!-->";
              }
              $$payload4.out += `<!--]--></div>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Card_content($$payload3, {
            children: ($$payload4) => {
              if (apiKey && justCreated) {
                $$payload4.out += "<!--[-->";
                $$payload4.out += `<div class="space-y-4">`;
                Codeblock($$payload4, { text: apiKey });
                $$payload4.out += `<!----> `;
                Alert($$payload4, {
                  children: ($$payload5) => {
                    Triangle_alert($$payload5, { class: "h-4 w-4" });
                    $$payload5.out += `<!----> `;
                    Alert_description($$payload5, {
                      children: ($$payload6) => {
                        $$payload6.out += `<!---->This is the only time your full API key will be shown. If you lose it, you'll need
								to create a new one.`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload5.out += `<!---->`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----></div>`;
              } else if (!apiKey && data.apiKey && apiKeyId) {
                $$payload4.out += "<!--[1-->";
                $$payload4.out += `<div class="space-y-4">`;
                Codeblock($$payload4, {
                  text: `${data.apiKey.prefix}${"x".repeat(64)}`,
                  displayOnly: true
                });
                $$payload4.out += `<!----> <p class="text-muted-foreground text-xs">For security reasons, the full API key is only shown once upon creation. If you've
							lost your key, you'll need to regenerate it.</p></div>`;
              } else {
                $$payload4.out += "<!--[!-->";
                Button($$payload4, {
                  onclick: createKey,
                  disabled: loading,
                  children: ($$payload5) => {
                    Key($$payload5, { class: "h-4 w-4" });
                    $$payload5.out += `<!----> Create API Key`;
                  },
                  $$slots: { default: true }
                });
              }
              $$payload4.out += `<!--]-->`;
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
                children: ($$payload5) => {
                  $$payload5.out += `<!---->API Documentation`;
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Card_content($$payload3, {
            class: "space-y-4",
            children: ($$payload4) => {
              $$payload4.out += `<!---->`;
              Collapsible($$payload4, {
                get open() {
                  return authOpen;
                },
                set open($$value) {
                  authOpen = $$value;
                  $$settled = false;
                },
                children: ($$payload5) => {
                  $$payload5.out += `<!---->`;
                  Collapsible_trigger($$payload5, {
                    class: "flex w-full items-center justify-between rounded-lg border p-4 hover:bg-muted/50",
                    children: ($$payload6) => {
                      $$payload6.out += `<h3 class="text-lg font-semibold">Authentication</h3> `;
                      if (authOpen) {
                        $$payload6.out += "<!--[-->";
                        Chevron_down($$payload6, { class: "h-4 w-4" });
                      } else {
                        $$payload6.out += "<!--[!-->";
                        Chevron_right($$payload6, { class: "h-4 w-4" });
                      }
                      $$payload6.out += `<!--]-->`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!----> <!---->`;
                  Collapsible_content($$payload5, {
                    class: "space-y-3 p-4",
                    children: ($$payload6) => {
                      $$payload6.out += `<p class="text-muted-foreground text-sm">Include your API key in the Authorization header for all requests:</p> `;
                      Codeblock($$payload6, {
                        text: `Authorization: Bearer ${data.apiKey?.prefix ?? "rgpl_"}your_api_key`,
                        displayOnly: true
                      });
                      $$payload6.out += `<!---->`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!---->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> <!---->`;
              Collapsible($$payload4, {
                get open() {
                  return topCoinsOpen;
                },
                set open($$value) {
                  topCoinsOpen = $$value;
                  $$settled = false;
                },
                children: ($$payload5) => {
                  $$payload5.out += `<!---->`;
                  Collapsible_trigger($$payload5, {
                    class: "flex w-full items-center justify-between rounded-lg border p-4 hover:bg-muted/50",
                    children: ($$payload6) => {
                      $$payload6.out += `<div class="text-left"><h3 class="text-lg font-semibold">Get Top Coins</h3> <p class="text-muted-foreground text-sm">GET /api/v1/top</p></div> `;
                      if (topCoinsOpen) {
                        $$payload6.out += "<!--[-->";
                        Chevron_down($$payload6, { class: "h-4 w-4" });
                      } else {
                        $$payload6.out += "<!--[!-->";
                        Chevron_right($$payload6, { class: "h-4 w-4" });
                      }
                      $$payload6.out += `<!--]-->`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!----> <!---->`;
                  Collapsible_content($$payload5, {
                    class: "space-y-3 p-4",
                    children: ($$payload6) => {
                      $$payload6.out += `<p class="text-muted-foreground text-sm">Returns the top 50 coins by market cap.</p> <div class="space-y-2"><h4 class="font-medium">Endpoint</h4> `;
                      Codeblock($$payload6, {
                        text: "GET https://rugplay.com/api/v1/top",
                        displayOnly: true
                      });
                      $$payload6.out += `<!----></div> <div class="space-y-2"><h4 class="font-medium">Example Response</h4> `;
                      Codeblock($$payload6, {
                        text: `{
  "coins": [
    {
      "symbol": "TEST",
      "name": "Test",
      "icon": "coins/test.webp",
      "price": 76.52377103,
      "change24h": 7652377003.1039,
      "marketCap": 76523771031.04,
      "volume24h": 13744958.18
    }
  ]
}`,
                        displayOnly: true
                      });
                      $$payload6.out += `<!----></div>`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!---->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> <!---->`;
              Collapsible($$payload4, {
                get open() {
                  return marketDataOpen;
                },
                set open($$value) {
                  marketDataOpen = $$value;
                  $$settled = false;
                },
                children: ($$payload5) => {
                  $$payload5.out += `<!---->`;
                  Collapsible_trigger($$payload5, {
                    class: "flex w-full items-center justify-between rounded-lg border p-4 hover:bg-muted/50",
                    children: ($$payload6) => {
                      $$payload6.out += `<div class="text-left"><h3 class="text-lg font-semibold">Get Market Data</h3> <p class="text-muted-foreground text-sm">GET /api/v1/market</p></div> `;
                      if (marketDataOpen) {
                        $$payload6.out += "<!--[-->";
                        Chevron_down($$payload6, { class: "h-4 w-4" });
                      } else {
                        $$payload6.out += "<!--[!-->";
                        Chevron_right($$payload6, { class: "h-4 w-4" });
                      }
                      $$payload6.out += `<!--]-->`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!----> <!---->`;
                  Collapsible_content($$payload5, {
                    class: "space-y-3 p-4",
                    children: ($$payload6) => {
                      $$payload6.out += `<p class="text-muted-foreground text-sm">Returns paginated market data with filtering and sorting options.</p> <div class="space-y-2"><h4 class="font-medium">Endpoint</h4> `;
                      Codeblock($$payload6, {
                        text: "GET https://rugplay.com/api/v1/market",
                        displayOnly: true
                      });
                      $$payload6.out += `<!----></div> <div class="space-y-2"><h4 class="font-medium">Query Parameters</h4> <div class="rounded-md border p-3"><div class="space-y-1 text-sm"><div><code class="bg-muted rounded px-1">search</code> - Search by coin name or symbol</div> <div><code class="bg-muted rounded px-1">sortBy</code> - Sort field: marketCap, currentPrice, change24h, volume24h, createdAt (default: marketCap)</div> <div><code class="bg-muted rounded px-1">sortOrder</code> - Sort order: asc, desc (default: desc)</div> <div><code class="bg-muted rounded px-1">priceFilter</code> - Price range: all, under1, 1to10, 10to100, over100 (default: all)</div> <div><code class="bg-muted rounded px-1">changeFilter</code> - Change filter: all, gainers, losers, hot, wild (default: all)</div> <div><code class="bg-muted rounded px-1">page</code> - Page number (default: 1)</div> <div><code class="bg-muted rounded px-1">limit</code> - Items per page, max 100 (default: 12)</div></div></div></div> <div class="space-y-2"><h4 class="font-medium">Example Response</h4> `;
                      Codeblock($$payload6, {
                        text: `{
  "coins": [
    {
      "symbol": "TEST",
      "name": "Test",
      "icon": "coins/test.webp",
      "currentPrice": 76.52377103,
      "marketCap": 76523771031.04,
      "volume24h": 13744958.18,
      "change24h": 7652377003.1039,
      "createdAt": "2025-06-24T16:18:51.278Z",
      "creatorName": "FaceDev"
    }
  ],
  "total": 150,
  "page": 1,
  "limit": 12,
  "totalPages": 13
}`,
                        displayOnly: true
                      });
                      $$payload6.out += `<!----></div>`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!---->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> <!---->`;
              Collapsible($$payload4, {
                get open() {
                  return coinDetailsOpen;
                },
                set open($$value) {
                  coinDetailsOpen = $$value;
                  $$settled = false;
                },
                children: ($$payload5) => {
                  $$payload5.out += `<!---->`;
                  Collapsible_trigger($$payload5, {
                    class: "flex w-full items-center justify-between rounded-lg border p-4 hover:bg-muted/50",
                    children: ($$payload6) => {
                      $$payload6.out += `<div class="text-left"><h3 class="text-lg font-semibold">Get Coin Details</h3> <p class="text-muted-foreground text-sm">GET /api/v1/coin/{symbol}</p></div> `;
                      if (coinDetailsOpen) {
                        $$payload6.out += "<!--[-->";
                        Chevron_down($$payload6, { class: "h-4 w-4" });
                      } else {
                        $$payload6.out += "<!--[!-->";
                        Chevron_right($$payload6, { class: "h-4 w-4" });
                      }
                      $$payload6.out += `<!--]-->`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!----> <!---->`;
                  Collapsible_content($$payload5, {
                    class: "space-y-3 p-4",
                    children: ($$payload6) => {
                      $$payload6.out += `<p class="text-muted-foreground text-sm">Returns detailed information about a specific coin including price history.</p> <div class="space-y-2"><h4 class="font-medium">Endpoint</h4> `;
                      Codeblock($$payload6, {
                        text: "GET https://rugplay.com/api/v1/coin/{symbol}",
                        displayOnly: true
                      });
                      $$payload6.out += `<!----></div> <div class="space-y-2"><h4 class="font-medium">Parameters</h4> <div class="rounded-md border p-3"><div class="space-y-1 text-sm"><div><code class="bg-muted rounded px-1">symbol</code> - Coin symbol (e.g., "TEST")</div> <div><code class="bg-muted rounded px-1">timeframe</code> - Optional. Chart timeframe: 1m, 5m, 15m, 1h, 4h, 1d (default: 1m)</div></div></div></div> <div class="space-y-2"><h4 class="font-medium">Example Response</h4> `;
                      Codeblock($$payload6, {
                        text: `{
  "coin": {
    "id": 2668,
    "name": "Test",
    "symbol": "TEST",
    "icon": "coins/test.webp",
    "currentPrice": 76.70938996,
    "marketCap": 76709389959.04,
    "volume24h": 13764558.38,
    "change24h": 7670938895.9045,
    "poolCoinAmount": 114176.23963001,
    "poolBaseCurrencyAmount": 8758389.68983547,
    "circulatingSupply": 1000000000,
    "initialSupply": 1000000000,
    "isListed": true,
    "createdAt": "2025-06-24T16:18:51.278Z",
    "creatorId": 1,
    "creatorName": "FaceDev",
    "creatorUsername": "facedev",
    "creatorBio": "the one and only",
    "creatorImage": "avatars/1.jpg"
  },
  "candlestickData": [
    {
      "time": 1750805760,
      "open": 74.96948181,
      "high": 74.96948181,
      "low": 74.96948181,
      "close": 74.96948181
    }
  ],
  "volumeData": [
    {
      "time": 1750805760,
      "volume": 1234.56
    }
  ],
  "timeframe": "1m"
}`,
                        displayOnly: true
                      });
                      $$payload6.out += `<!----></div>`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!---->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> <!---->`;
              Collapsible($$payload4, {
                get open() {
                  return holdersOpen;
                },
                set open($$value) {
                  holdersOpen = $$value;
                  $$settled = false;
                },
                children: ($$payload5) => {
                  $$payload5.out += `<!---->`;
                  Collapsible_trigger($$payload5, {
                    class: "flex w-full items-center justify-between rounded-lg border p-4 hover:bg-muted/50",
                    children: ($$payload6) => {
                      $$payload6.out += `<div class="text-left"><h3 class="text-lg font-semibold">Get Coin Holders</h3> <p class="text-muted-foreground text-sm">GET /api/v1/holders/{symbol}</p></div> `;
                      if (holdersOpen) {
                        $$payload6.out += "<!--[-->";
                        Chevron_down($$payload6, { class: "h-4 w-4" });
                      } else {
                        $$payload6.out += "<!--[!-->";
                        Chevron_right($$payload6, { class: "h-4 w-4" });
                      }
                      $$payload6.out += `<!--]-->`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!----> <!---->`;
                  Collapsible_content($$payload5, {
                    class: "space-y-3 p-4",
                    children: ($$payload6) => {
                      $$payload6.out += `<p class="text-muted-foreground text-sm">Returns the top 50 holders of a specific coin.</p> <div class="space-y-2"><h4 class="font-medium">Endpoint</h4> `;
                      Codeblock($$payload6, {
                        text: "GET https://rugplay.com/api/v1/holders/{symbol}",
                        displayOnly: true
                      });
                      $$payload6.out += `<!----></div> <div class="space-y-2"><h4 class="font-medium">Parameters</h4> <div class="rounded-md border p-3"><div class="space-y-1 text-sm"><div><code class="bg-muted rounded px-1">symbol</code> - Coin symbol (e.g., "TEST")</div> <div><code class="bg-muted rounded px-1">limit</code> - Number of holders to return, max 200 (default: 50)</div></div></div></div> <div class="space-y-2"><h4 class="font-medium">Example Response</h4> `;
                      Codeblock($$payload6, {
                        text: `{
  "coinSymbol": "TEST",
  "totalHolders": 50,
  "circulatingSupply": 1000000000,
  "poolInfo": {
    "coinAmount": 114176.23963001,
    "baseCurrencyAmount": 8758389.68983547,
    "currentPrice": 76.70938996
  },
  "holders": [
    {
      "rank": 1,
      "userId": 1,
      "username": "facedev",
      "name": "FaceDev",
      "image": "avatars/1.jpg",
      "quantity": 999883146.4679264,
      "percentage": 99.98831464679265,
      "liquidationValue": 4368219.41924125
    }
  ]
}`,
                        displayOnly: true
                      });
                      $$payload6.out += `<!----></div>`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!---->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> <!---->`;
              Collapsible($$payload4, {
                get open() {
                  return hopiumOpen;
                },
                set open($$value) {
                  hopiumOpen = $$value;
                  $$settled = false;
                },
                children: ($$payload5) => {
                  $$payload5.out += `<!---->`;
                  Collapsible_trigger($$payload5, {
                    class: "flex w-full items-center justify-between rounded-lg border p-4 hover:bg-muted/50",
                    children: ($$payload6) => {
                      $$payload6.out += `<div class="text-left"><h3 class="text-lg font-semibold">Get Prediction Markets (Hopium)</h3> <p class="text-muted-foreground text-sm">GET /api/v1/hopium</p></div> `;
                      if (hopiumOpen) {
                        $$payload6.out += "<!--[-->";
                        Chevron_down($$payload6, { class: "h-4 w-4" });
                      } else {
                        $$payload6.out += "<!--[!-->";
                        Chevron_right($$payload6, { class: "h-4 w-4" });
                      }
                      $$payload6.out += `<!--]-->`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!----> <!---->`;
                  Collapsible_content($$payload5, {
                    class: "space-y-3 p-4",
                    children: ($$payload6) => {
                      $$payload6.out += `<p class="text-muted-foreground text-sm">Returns prediction market questions with pagination and filtering options.</p> <div class="space-y-2"><h4 class="font-medium">Endpoint</h4> `;
                      Codeblock($$payload6, {
                        text: "GET https://rugplay.com/api/v1/hopium",
                        displayOnly: true
                      });
                      $$payload6.out += `<!----></div> <div class="space-y-2"><h4 class="font-medium">Query Parameters</h4> <div class="rounded-md border p-3"><div class="space-y-1 text-sm"><div><code class="bg-muted rounded px-1">status</code> - Filter by status: ACTIVE, RESOLVED, CANCELLED, ALL (default: ACTIVE)</div> <div><code class="bg-muted rounded px-1">page</code> - Page number (default: 1)</div> <div><code class="bg-muted rounded px-1">limit</code> - Items per page, max 100 (default: 20)</div></div></div></div> <div class="space-y-2"><h4 class="font-medium">Example Response</h4> `;
                      Codeblock($$payload6, {
                        text: `{
  "questions": [
    {
      "id": 101,
      "question": "will elon musk tweet about rugplay?",
      "status": "ACTIVE",
      "resolutionDate": "2025-07-25T10:39:19.612Z",
      "totalAmount": 4007.76,
      "yesAmount": 3634.65,
      "noAmount": 373.11,
      "yesPercentage": 90.69,
      "noPercentage": 9.31,
      "createdAt": "2025-06-25T10:39:19.613Z",
      "resolvedAt": null,
      "requiresWebSearch": true,
      "aiResolution": null,
      "creator": {
        "id": 3873,
        "name": "Eliaz",
        "username": "eluskulus",
        "image": "avatars/102644133851219200932.png"
      },
      "userBets": null
    }
  ],
  "total": 150,
  "page": 1,
  "limit": 20,
  "totalPages": 8
}`,
                        displayOnly: true
                      });
                      $$payload6.out += `<!----></div>`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!---->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> <!---->`;
              Collapsible($$payload4, {
                get open() {
                  return hopiumDetailsOpen;
                },
                set open($$value) {
                  hopiumDetailsOpen = $$value;
                  $$settled = false;
                },
                children: ($$payload5) => {
                  $$payload5.out += `<!---->`;
                  Collapsible_trigger($$payload5, {
                    class: "flex w-full items-center justify-between rounded-lg border p-4 hover:bg-muted/50",
                    children: ($$payload6) => {
                      $$payload6.out += `<div class="text-left"><h3 class="text-lg font-semibold">Get Prediction Market Details</h3> <p class="text-muted-foreground text-sm">GET /api/v1/hopium/{question_id}</p></div> `;
                      if (hopiumDetailsOpen) {
                        $$payload6.out += "<!--[-->";
                        Chevron_down($$payload6, { class: "h-4 w-4" });
                      } else {
                        $$payload6.out += "<!--[!-->";
                        Chevron_right($$payload6, { class: "h-4 w-4" });
                      }
                      $$payload6.out += `<!--]-->`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!----> <!---->`;
                  Collapsible_content($$payload5, {
                    class: "space-y-3 p-4",
                    children: ($$payload6) => {
                      $$payload6.out += `<p class="text-muted-foreground text-sm">Returns detailed information about a specific prediction market question including recent bets and probability history.</p> <div class="space-y-2"><h4 class="font-medium">Endpoint</h4> `;
                      Codeblock($$payload6, {
                        text: "GET https://rugplay.com/api/v1/hopium/{question_id}",
                        displayOnly: true
                      });
                      $$payload6.out += `<!----></div> <div class="space-y-2"><h4 class="font-medium">Parameters</h4> <div class="rounded-md border p-3"><div class="space-y-1 text-sm"><div><code class="bg-muted rounded px-1">question_id</code> - Question ID (e.g., 101)</div></div></div></div> <div class="space-y-2"><h4 class="font-medium">Example Response</h4> `;
                      Codeblock($$payload6, {
                        text: `{
  "question": {
    "id": 101,
    "question": "will elon musk tweet about rugplay?",
    "status": "ACTIVE",
    "resolutionDate": "2025-07-25T10:39:19.612Z",
    "totalAmount": 4007.76,
    "yesAmount": 3634.65,
    "noAmount": 373.11,
    "yesPercentage": 90.69,
    "noPercentage": 9.31,
    "createdAt": "2025-06-25T10:39:19.613Z",
    "resolvedAt": null,
    "requiresWebSearch": true,
    "aiResolution": null,
    "creator": {
      "id": 3873,
      "name": "Eliaz",
      "username": "eluskulus",
      "image": "avatars/102644133851219200932.png"
    },
    "userBets": null,
    "recentBets": [
      {
        "id": 8066,
        "side": true,
        "amount": 3.84,
        "createdAt": "2025-06-25T14:59:54.201Z",
        "user": {
          "id": 5332,
          "name": "Spam email inhaler",
          "username": "sunny_tiger7616",
          "image": "avatars/111376429189149628011.webp"
        }
      }
    ]
  },
  "probabilityHistory": [
    {
      "time": 1750805760,
      "value": 50.0
    },
    {
      "time": 1750805820,
      "value": 65.2
    }
  ]
}`,
                        displayOnly: true
                      });
                      $$payload6.out += `<!----></div>`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!---->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> <!---->`;
              Collapsible($$payload4, {
                get open() {
                  return rateLimitingOpen;
                },
                set open($$value) {
                  rateLimitingOpen = $$value;
                  $$settled = false;
                },
                children: ($$payload5) => {
                  $$payload5.out += `<!---->`;
                  Collapsible_trigger($$payload5, {
                    class: "flex w-full items-center justify-between rounded-lg border p-4 hover:bg-muted/50",
                    children: ($$payload6) => {
                      $$payload6.out += `<h3 class="text-lg font-semibold">Rate Limiting</h3> `;
                      if (rateLimitingOpen) {
                        $$payload6.out += "<!--[-->";
                        Chevron_down($$payload6, { class: "h-4 w-4" });
                      } else {
                        $$payload6.out += "<!--[!-->";
                        Chevron_right($$payload6, { class: "h-4 w-4" });
                      }
                      $$payload6.out += `<!--]-->`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!----> <!---->`;
                  Collapsible_content($$payload5, {
                    class: "p-4",
                    children: ($$payload6) => {
                      $$payload6.out += `<div class="rounded-md border p-4"><div class="space-y-2 text-sm"><div>• <strong>Daily limit:</strong> ${escape_html(maxDailyRequests.toLocaleString())} requests per day</div> <div>• <strong>Cost:</strong> 1 credit per API call</div> <div>• <strong>Error response:</strong> 429 Too Many Requests when limit exceeded</div> <div>• <strong>Reset:</strong> Daily limits reset every 24 hours</div></div></div>`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!---->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> <!---->`;
              Collapsible($$payload4, {
                get open() {
                  return errorResponsesOpen;
                },
                set open($$value) {
                  errorResponsesOpen = $$value;
                  $$settled = false;
                },
                children: ($$payload5) => {
                  $$payload5.out += `<!---->`;
                  Collapsible_trigger($$payload5, {
                    class: "flex w-full items-center justify-between rounded-lg border p-4 hover:bg-muted/50",
                    children: ($$payload6) => {
                      $$payload6.out += `<h3 class="text-lg font-semibold">Error Responses</h3> `;
                      if (errorResponsesOpen) {
                        $$payload6.out += "<!--[-->";
                        Chevron_down($$payload6, { class: "h-4 w-4" });
                      } else {
                        $$payload6.out += "<!--[!-->";
                        Chevron_right($$payload6, { class: "h-4 w-4" });
                      }
                      $$payload6.out += `<!--]-->`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!----> <!---->`;
                  Collapsible_content($$payload5, {
                    class: "space-y-2 p-4",
                    children: ($$payload6) => {
                      $$payload6.out += `<h4 class="font-medium">Common Error Codes</h4> <div class="rounded-md border p-4"><div class="space-y-2 text-sm"><div>• <code class="bg-muted rounded px-1">400</code> - Bad Request (invalid parameters)</div> <div>• <code class="bg-muted rounded px-1">401</code> - Unauthorized (invalid or missing API key)</div> <div>• <code class="bg-muted rounded px-1">404</code> - Not Found (coin/question doesn't exist)</div> <div>• <code class="bg-muted rounded px-1">429</code> - Too Many Requests (rate limit exceeded)</div> <div>• <code class="bg-muted rounded px-1">500</code> - Internal Server Error</div></div></div>`;
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
//# sourceMappingURL=_page.svelte-CaKJiu_s.js.map
