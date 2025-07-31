import { p as push, u as store_get, q as copy_payload, t as assign_payload, v as unsubscribe_stores, a as pop, k as attr_class, m as escape_html, g as clsx, w as sanitize_props, b as spread_props, x as slot, d as attr, o as stringify } from './index3-CthgjPPi.js';
import './client-s_UYc3Sk.js';
import { B as Button } from './button-Cg_QiDbD.js';
import { I as Input } from './input-BZy6dM-O.js';
import { L as Label } from './label-CxNim4GD.js';
import { C as Card } from './card-23nZlDN1.js';
import { C as Card_content } from './card-content-Nxnnhqv4.js';
import './volume-settings-DX3g8058.js';
import { C as Card_header } from './card-header-CuTABeMH.js';
import { C as Card_title } from './card-title-CxxMmziD.js';
import { A as Alert } from './alert-9IclKPUx.js';
import { A as Alert_description } from './alert-description-DJRrBUyj.js';
import { S as Separator } from './separator-gqbA9xdr.js';
import { P as PORTFOLIO_SUMMARY } from './portfolio-data-D2WCRVa2.js';
import { T as TOTAL_COST, C as CREATION_FEE, I as INITIAL_LIQUIDITY } from './constants-B18hWG_A.js';
import './Toaster.svelte_svelte_type_style_lang-CcrnaSIn.js';
import { S as SEO } from './SEO-Cqzi3OcQ.js';
import { S as SignInConfirmDialog } from './SignInConfirmDialog-CRywm7vo.js';
import { I as Icon } from './Icon2-Bqt4BCIy.js';
import { I as Info } from './info-DOg2g4C3.js';
import { C as Coins } from './coins-DVrva8oo.js';
import './index2-D4eROfHK.js';
import './clsx-ChV9xqsO.js';
import './exports-Cv9LZeD1.js';
import './utils2-CLIgW4-x.js';
import './index-opKo-a_0.js';
import './create-id-Bxd404XN.js';
import './index-server-DH7p7JOq.js';
import './stores-Be-B7Xuq.js';
import './index5-D35Z60w5.js';
import './scroll-lock-BUIxTk31.js';
import './events-CF0F77H5.js';
import './Icon-DETra0Ze.js';
import 'better-auth/svelte';
import 'better-auth/client/plugins';
import './shared-server-BfUoNEXY.js';
import './index6-BNoyVQ18.js';
import './client2-DLmkXqdH.js';
import './dialog-description-4JjLXrIw.js';

function Image_plus($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M16 5h6" }],
    ["path", { "d": "M19 2v6" }],
    [
      "path",
      {
        "d": "M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5"
      }
    ],
    [
      "path",
      {
        "d": "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
      }
    ],
    ["circle", { "cx": "9", "cy": "9", "r": "2" }]
  ];
  Icon($$payload, spread_props([
    { name: "image-plus" },
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
  var $$store_subs;
  let name = "";
  let symbol = "";
  let iconFile = null;
  let iconPreview = null;
  let nameError = name.length > 0 && (name.length < 2 || name.length > 255) ? "Name must be between 2 and 255 characters" : "";
  let symbolError = symbol.length > 0 && (symbol.length < 2 || symbol.length > 10) ? "Symbol must be between 2 and 10 characters" : "";
  let iconError = iconFile && iconFile.size > 1 * 1024 * 1024 ? "Icon must be smaller than 1MB" : "";
  let isFormValid = name.length >= 2 && symbol.length >= 2 && !nameError && !symbolError && !iconError;
  let hasEnoughFunds = store_get($$store_subs ??= {}, "$PORTFOLIO_SUMMARY", PORTFOLIO_SUMMARY) ? store_get($$store_subs ??= {}, "$PORTFOLIO_SUMMARY", PORTFOLIO_SUMMARY).baseCurrencyBalance >= TOTAL_COST : false;
  let canSubmit = isFormValid && hasEnoughFunds && true;
  function handleIconChange(event) {
    const target = event.target;
    const file = target.files?.[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        iconFile = file;
        console.log(iconFile.size);
        const reader = new FileReader();
        reader.onload = (e) => {
          iconPreview = e.target?.result;
        };
        reader.readAsDataURL(file);
      } else {
        target.value = "";
      }
    } else {
      iconFile = null;
      iconPreview = null;
    }
  }
  let shouldSignIn = false;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    SEO($$payload2, {
      title: "Create Coin - Rugplay",
      description: "Launch your own virtual cryptocurrency in the Rugplay simulation game. Create coins with custom names, symbols, and icons.",
      keywords: "create virtual cryptocurrency, coin creation game, launch crypto simulation, virtual token creation, cryptocurrency game creator"
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
    $$payload2.out += `<!----> <div class="container mx-auto max-w-5xl px-4 py-6 svelte-7yvekx">`;
    if (!store_get($$store_subs ??= {}, "$PORTFOLIO_SUMMARY", PORTFOLIO_SUMMARY)) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<div class="flex h-96 items-center justify-center"><div class="text-center"><div class="text-muted-foreground mb-4 text-xl">Sign in to create your own coin</div> <p class="text-muted-foreground mb-4 text-sm">You need an account to create coins.</p> `;
      Button($$payload2, {
        onclick: () => shouldSignIn = true,
        class: "w-fit",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Sign in to continue`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div></div>`;
    } else {
      $$payload2.out += "<!--[!-->";
      $$payload2.out += `<div class="grid grid-cols-1 gap-6 lg:grid-cols-3"><div class="lg:col-span-2">`;
      Card($$payload2, {
        children: ($$payload3) => {
          Card_header($$payload3, {
            children: ($$payload4) => {
              Card_title($$payload4, {
                class: "text-lg",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Coin Details`;
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Card_content($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<form class="space-y-6"><div>`;
              Label($$payload4, {
                for: "icon",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Coin Icon (Optional)`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> <div class="mt-2 space-y-2"><label for="icon" class="block cursor-pointer"><div class="border-muted-foreground/25 bg-muted/50 hover:border-muted-foreground/50 group h-24 w-24 overflow-hidden rounded-full border-2 border-dashed transition-colors">`;
              Input($$payload4, {
                id: "icon",
                type: "file",
                accept: "image/*",
                onchange: handleIconChange,
                class: "hidden"
              });
              $$payload4.out += `<!----> `;
              if (iconPreview) {
                $$payload4.out += "<!--[-->";
                $$payload4.out += `<img${attr("src", iconPreview)} alt="Preview" class="h-full w-full object-cover"/>`;
              } else {
                $$payload4.out += "<!--[!-->";
                $$payload4.out += `<div class="flex h-full items-center justify-center">`;
                Image_plus($$payload4, { class: "text-muted-foreground h-8 w-8" });
                $$payload4.out += `<!----></div>`;
              }
              $$payload4.out += `<!--]--></div></label> <p${attr_class(`${stringify(iconError ? "text-destructive" : "text-muted-foreground")} text-sm`)}>`;
              if (iconError) {
                $$payload4.out += "<!--[-->";
                $$payload4.out += `${escape_html(iconError)}`;
              } else if (iconFile) {
                $$payload4.out += "<!--[1-->";
                $$payload4.out += `${escape_html(iconFile.name)} (${escape_html((iconFile.size / 1024).toFixed(2))} KB)`;
              } else {
                $$payload4.out += "<!--[!-->";
                $$payload4.out += `Click to upload your coin's icon (PNG or JPG, max 1MB)`;
              }
              $$payload4.out += `<!--]--></p></div></div> <div class="space-y-2">`;
              Label($$payload4, {
                for: "name",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Coin Name`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              Input($$payload4, {
                id: "name",
                type: "text",
                placeholder: "e.g., Bitcoin",
                required: true,
                get value() {
                  return name;
                },
                set value($$value) {
                  name = $$value;
                  $$settled = false;
                }
              });
              $$payload4.out += `<!----> `;
              if (nameError) {
                $$payload4.out += "<!--[-->";
                $$payload4.out += `<p class="text-destructive text-xs">${escape_html(nameError)}</p>`;
              } else {
                $$payload4.out += "<!--[!-->";
                $$payload4.out += `<p class="text-muted-foreground text-sm">Choose a memorable name for your cryptocurrency</p>`;
              }
              $$payload4.out += `<!--]--></div> <div class="space-y-2">`;
              Label($$payload4, {
                for: "symbol",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Symbol`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> <div class="relative"><span class="text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2 text-sm">*</span> `;
              Input($$payload4, {
                id: "symbol",
                type: "text",
                placeholder: "BTC",
                class: "pl-8 uppercase",
                required: true,
                get value() {
                  return symbol;
                },
                set value($$value) {
                  symbol = $$value;
                  $$settled = false;
                }
              });
              $$payload4.out += `<!----></div> `;
              if (symbolError) {
                $$payload4.out += "<!--[-->";
                $$payload4.out += `<p class="text-destructive text-xs">${escape_html(symbolError)}</p>`;
              } else {
                $$payload4.out += "<!--[!-->";
                $$payload4.out += `<p class="text-muted-foreground text-sm">Short identifier for your coin (e.g., BTC for Bitcoin). Will be displayed as *${escape_html(symbol || "SYMBOL")}</p>`;
              }
              $$payload4.out += `<!--]--></div> `;
              Alert($$payload4, {
                variant: "default",
                class: "bg-muted/50",
                children: ($$payload5) => {
                  Info($$payload5, { class: "h-4 w-4" });
                  $$payload5.out += `<!----> `;
                  Alert_description($$payload5, {
                    class: "space-y-2",
                    children: ($$payload6) => {
                      $$payload6.out += `<p class="font-medium">Fair Launch Settings</p> <div class="text-muted-foreground space-y-1 text-sm"><p>• Total Supply: <span class="font-medium">1,000,000,000 tokens</span></p> <p>• Starting Price: <span class="font-medium">$0.000001 per token</span></p> <p>• You receive <span class="font-medium">100%</span> of the supply</p> <p>• Initial Market Cap: <span class="font-medium">$1,000</span></p> <p>• Trading Lock: <span class="font-medium">1 minute creator-only period</span></p> <p class="mt-2 text-sm">After creation, you'll have 1 minute of exclusive trading time before others can trade. This allows you to purchase your initial supply.</p></div>`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!---->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              Button($$payload4, {
                type: "submit",
                disabled: !canSubmit,
                class: "w-full",
                size: "lg",
                children: ($$payload5) => {
                  {
                    $$payload5.out += "<!--[!-->";
                    Coins($$payload5, { class: "h-4 w-4" });
                    $$payload5.out += `<!----> Create Coin ($${escape_html(TOTAL_COST.toFixed(2))})`;
                  }
                  $$payload5.out += `<!--]-->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----></form>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div> <div class="space-y-4">`;
      if (store_get($$store_subs ??= {}, "$PORTFOLIO_SUMMARY", PORTFOLIO_SUMMARY)) {
        $$payload2.out += "<!--[-->";
        Card($$payload2, {
          children: ($$payload3) => {
            Card_header($$payload3, {
              class: "pb-2",
              children: ($$payload4) => {
                $$payload4.out += `<div class="flex items-center justify-between">`;
                Card_title($$payload4, {
                  class: "text-base",
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->Cost Summary`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----> <div class="text-sm"><span class="text-muted-foreground">Balance:</span> <span${attr_class(clsx(hasEnoughFunds ? "text-green-600" : "text-destructive"))}>$${escape_html(store_get($$store_subs ??= {}, "$PORTFOLIO_SUMMARY", PORTFOLIO_SUMMARY).baseCurrencyBalance.toLocaleString())}</span></div></div>`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> `;
            Card_content($$payload3, {
              class: "space-y-2",
              children: ($$payload4) => {
                $$payload4.out += `<div class="flex justify-between text-sm"><span class="text-muted-foreground">Creation Fee</span> <span>$${escape_html(CREATION_FEE)}</span></div> <div class="flex justify-between text-sm"><span class="text-muted-foreground">Initial Liquidity</span> <span>$${escape_html(INITIAL_LIQUIDITY)}</span></div> `;
                Separator($$payload4, { class: "my-2" });
                $$payload4.out += `<!----> <div class="flex justify-between font-medium"><span>Total Cost</span> <span class="text-primary">$${escape_html(TOTAL_COST)}</span></div>`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!---->`;
          },
          $$slots: { default: true }
        });
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      Card($$payload2, {
        children: ($$payload3) => {
          Card_header($$payload3, {
            class: "pb-2",
            children: ($$payload4) => {
              Card_title($$payload4, {
                class: "text-base",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->What Happens After Launch?`;
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
              $$payload4.out += `<div class="space-y-3"><div class="flex gap-3"><div class="bg-primary/10 text-primary flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-medium">1</div> <div><p class="font-medium">Fair Distribution</p> <p class="text-muted-foreground text-sm">Everyone starts buying at the same price - no pre-sales or hidden allocations</p></div></div> <div class="flex gap-3"><div class="bg-primary/10 text-primary flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-medium">2</div> <div><p class="font-medium">Price Discovery</p> <p class="text-muted-foreground text-sm">Token price increases automatically as more people buy, following a bonding
										curve</p></div></div> <div class="flex gap-3"><div class="bg-primary/10 text-primary flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-medium">3</div> <div><p class="font-medium">Instant Trading</p> <p class="text-muted-foreground text-sm">Trading begins immediately - buy, sell, or distribute your tokens as you wish</p></div></div></div>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div></div>`;
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
//# sourceMappingURL=_page.svelte-CtDbvUW3.js.map
