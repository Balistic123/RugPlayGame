import { p as push, u as store_get, q as copy_payload, t as assign_payload, v as unsubscribe_stores, a as pop, e as ensure_array_like, m as escape_html } from './index3-CthgjPPi.js';
import { B as Button } from './button-Cg_QiDbD.js';
import { f as formatValue, P as PRESTIGE_COSTS, q as PRESTIGE_NAMES } from './utils2-CLIgW4-x.js';
import { A as Alert } from './alert-9IclKPUx.js';
import { A as Alert_description } from './alert-description-DJRrBUyj.js';
import { R as Root, D as Dialog_content } from './index5-D35Z60w5.js';
import { I as Input } from './input-BZy6dM-O.js';
import { L as Label } from './label-CxNim4GD.js';
import { a as toast } from './Toaster.svelte_svelte_type_style_lang-CcrnaSIn.js';
import { U as USER_DATA } from './user-data-CT5kjyaY.js';
import { S as SEO } from './SEO-Cqzi3OcQ.js';
import { S as SignInConfirmDialog } from './SignInConfirmDialog-CRywm7vo.js';
import { C as Card } from './card-23nZlDN1.js';
import { C as Card_content } from './card-content-Nxnnhqv4.js';
import './volume-settings-DX3g8058.js';
import { C as Card_header } from './card-header-CuTABeMH.js';
import { C as Card_title } from './card-title-CxxMmziD.js';
import { S as Skeleton } from './skeleton-BrIQmewN.js';
import { A as Avatar, a as Avatar_fallback } from './avatar-fallback-BVDrtls6.js';
import { S as Star } from './star-BqzY1Axl.js';
import { D as Dialog_header, a as Dialog_title, b as Dialog_description } from './dialog-description-4JjLXrIw.js';
import { T as Triangle_alert } from './triangle-alert-D5MhYm9H.js';
import { D as Dialog_footer } from './dialog-footer-KlhKHuMF.js';
import { L as Loader_circle } from './loader-circle-04fw-oOl.js';
import './index2-D4eROfHK.js';
import './clsx-ChV9xqsO.js';
import './index-opKo-a_0.js';
import './scroll-lock-BUIxTk31.js';
import './create-id-Bxd404XN.js';
import './index-server-DH7p7JOq.js';
import './events-CF0F77H5.js';
import './Icon-DETra0Ze.js';
import './stores-Be-B7Xuq.js';
import './client-s_UYc3Sk.js';
import './exports-Cv9LZeD1.js';
import 'better-auth/svelte';
import 'better-auth/client/plugins';
import './shared-server-BfUoNEXY.js';
import './index6-BNoyVQ18.js';
import './client2-DLmkXqdH.js';
import './Icon2-Bqt4BCIy.js';

function PrestigeSkeleton($$payload) {
  $$payload.out += `<div class="grid grid-cols-1 gap-6 lg:grid-cols-3"><div class="flex flex-col lg:col-span-2">`;
  Card($$payload, {
    class: "mb-6 gap-1",
    children: ($$payload2) => {
      Card_header($$payload2, {
        class: "pb-2",
        children: ($$payload3) => {
          Card_title($$payload3, {
            class: "text-base",
            children: ($$payload4) => {
              $$payload4.out += `<!---->How`;
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Card_content($$payload2, {
        class: "space-y-4",
        children: ($$payload3) => {
          const each_array = ensure_array_like(Array(3));
          $$payload3.out += `<div class="grid grid-cols-1 gap-4 md:grid-cols-3"><!--[-->`;
          for (let i = 0, $$length = each_array.length; i < $$length; i++) {
            each_array[i];
            $$payload3.out += `<div class="flex gap-3"><div class="bg-primary/10 text-primary flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-medium">${escape_html(i + 1)}</div> <div class="flex-1 space-y-2">`;
            Skeleton($$payload3, { class: "h-4 w-24" });
            $$payload3.out += `<!----> `;
            Skeleton($$payload3, { class: "h-3 w-full" });
            $$payload3.out += `<!----> `;
            Skeleton($$payload3, { class: "h-3 w-3/4" });
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
  $$payload.out += `<!----> `;
  Card($$payload, {
    class: "flex flex-1 flex-col gap-1",
    children: ($$payload2) => {
      Card_header($$payload2, {
        children: ($$payload3) => {
          Card_title($$payload3, {
            class: "flex items-center gap-2",
            children: ($$payload4) => {
              Star($$payload4, { class: "h-5 w-5" });
              $$payload4.out += `<!----> Progress`;
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Card_content($$payload2, {
        class: "flex flex-1 flex-col space-y-6",
        children: ($$payload3) => {
          const each_array_1 = ensure_array_like(Array(3));
          $$payload3.out += `<div class="space-y-6"><div class="space-y-2"><div class="flex items-center justify-between text-sm">`;
          Skeleton($$payload3, { class: "h-4 w-32" });
          $$payload3.out += `<!----> `;
          Skeleton($$payload3, { class: "h-4 w-12" });
          $$payload3.out += `<!----></div> `;
          Skeleton($$payload3, { class: "h-2 w-full rounded-full" });
          $$payload3.out += `<!----></div> <div class="overflow-hidden rounded-xl border"><table class="w-full text-sm"><tbody class="divide-y"><!--[-->`;
          for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
            each_array_1[$$index_1];
            $$payload3.out += `<tr><td class="px-3 py-2">`;
            Skeleton($$payload3, { class: "h-4 w-20" });
            $$payload3.out += `<!----></td><td class="px-3 py-2 text-right">`;
            Skeleton($$payload3, { class: "ml-auto h-4 w-24" });
            $$payload3.out += `<!----></td></tr>`;
          }
          $$payload3.out += `<!--]--></tbody></table></div></div> `;
          Skeleton($$payload3, { class: "h-4 w-40" });
          $$payload3.out += `<!----> `;
          Skeleton($$payload3, { class: "h-12 w-full rounded-lg" });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> <div class="flex flex-col space-y-4">`;
  Card($$payload, {
    class: "flex-1 gap-1",
    children: ($$payload2) => {
      Card_header($$payload2, {
        class: "pb-2",
        children: ($$payload3) => {
          Card_title($$payload3, {
            class: "text-base",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Preview`;
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Card_content($$payload2, {
        class: "space-y-4",
        children: ($$payload3) => {
          $$payload3.out += `<div class="space-y-2">`;
          Skeleton($$payload3, { class: "h-3 w-12" });
          $$payload3.out += `<!----> <div class="flex items-center gap-3 rounded-lg border p-3">`;
          Avatar($$payload3, {
            class: "h-10 w-10 shrink-0",
            children: ($$payload4) => {
              Avatar_fallback($$payload4, {
                children: ($$payload5) => {
                  Skeleton($$payload5, { class: "h-full w-full rounded-full" });
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <div class="min-w-0 flex-1 space-y-1"><div class="flex min-w-0 items-center gap-2">`;
          Skeleton($$payload3, { class: "h-4 w-20" });
          $$payload3.out += `<!----> `;
          Skeleton($$payload3, { class: "h-4 w-16" });
          $$payload3.out += `<!----></div> `;
          Skeleton($$payload3, { class: "h-3 w-16" });
          $$payload3.out += `<!----></div></div></div> <div class="space-y-2">`;
          Skeleton($$payload3, { class: "h-3 w-10" });
          $$payload3.out += `<!----> <div class="flex items-center gap-3 rounded-lg border-2 border-yellow-500/30 bg-yellow-50/50 p-3 dark:bg-yellow-950/20">`;
          Avatar($$payload3, {
            class: "h-10 w-10 shrink-0",
            children: ($$payload4) => {
              Avatar_fallback($$payload4, {
                children: ($$payload5) => {
                  Skeleton($$payload5, { class: "h-full w-full rounded-full" });
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <div class="min-w-0 flex-1 space-y-1"><div class="flex min-w-0 items-center gap-2">`;
          Skeleton($$payload3, { class: "h-4 w-20" });
          $$payload3.out += `<!----> `;
          Skeleton($$payload3, { class: "h-4 w-20" });
          $$payload3.out += `<!----></div> `;
          Skeleton($$payload3, { class: "h-3 w-16" });
          $$payload3.out += `<!----></div></div></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Card($$payload, {
    class: "flex-1 gap-1",
    children: ($$payload2) => {
      Card_header($$payload2, {
        class: "pb-2",
        children: ($$payload3) => {
          Card_title($$payload3, {
            class: "text-base",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Levels`;
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Card_content($$payload2, {
        class: "space-y-1",
        children: ($$payload3) => {
          const each_array_2 = ensure_array_like(Array(5));
          $$payload3.out += `<!--[-->`;
          for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
            each_array_2[$$index_2];
            $$payload3.out += `<div class="flex items-center justify-between py-1"><div class="flex items-center gap-2">`;
            Skeleton($$payload3, { class: "h-4 w-4" });
            $$payload3.out += `<!----> `;
            Skeleton($$payload3, { class: "h-4 w-20" });
            $$payload3.out += `<!----></div> `;
            Skeleton($$payload3, { class: "h-3 w-16" });
            $$payload3.out += `<!----></div>`;
          }
          $$payload3.out += `<!--]-->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div>`;
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let isPrestiging = false;
  let shouldSignIn = false;
  let showConfirmDialog = false;
  let confirmationText = "";
  let prestigeData = null;
  let userData = store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA);
  const currentPrestige = prestigeData?.profile?.prestigeLevel || 0;
  const prestigeCost = (() => {
    if (!prestigeData) return null;
    const nextLevel = currentPrestige + 1;
    return PRESTIGE_COSTS[nextLevel] || null;
  })();
  const prestigeName = (() => {
    if (!prestigeData) return null;
    const nextLevel = currentPrestige + 1;
    return PRESTIGE_NAMES[nextLevel] || null;
  })();
  const currentBalance = prestigeData?.profile?.baseCurrencyBalance || 0;
  const holdingsValue = prestigeData?.stats?.holdingsValue || 0;
  const totalValue = prestigeData?.profile?.totalPortfolioValue || 0;
  const canAfford = prestigeCost ? currentBalance >= prestigeCost : false;
  async function fetchPrestigeData() {
    if (!userData) return;
    try {
      const response = await fetch("/api/prestige");
      if (!response.ok) throw new Error("Failed to fetch prestige data");
      prestigeData = await response.json();
    } catch (e) {
      console.error("Failed to fetch prestige data:", e);
      toast.error("Failed to load prestige data");
    }
  }
  async function handlePrestige() {
    if (!canAfford || !userData) return;
    isPrestiging = true;
    try {
      const response = await fetch("/api/prestige", {
        method: "POST",
        headers: { "Content-Type": "application/json" }
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "Failed to prestige");
      }
      toast.success(`Congratulations! You've reached ${prestigeName}!`);
      await fetchPrestigeData();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An error occurred";
      toast.error(errorMessage);
    } finally {
      isPrestiging = false;
      showConfirmDialog = false;
      confirmationText = "";
    }
  }
  function closeConfirmDialog() {
    showConfirmDialog = false;
    confirmationText = "";
  }
  const canConfirmPrestige = confirmationText.toUpperCase() === "PRESTIGE";
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    SEO($$payload2, {
      title: "Prestige - Rugplay",
      description: "Advance your trading status and reset your progress for prestige rewards in the Rugplay cryptocurrency simulation.",
      noindex: true
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
    $$payload2.out += `<!----> <!---->`;
    Root($$payload2, {
      get open() {
        return showConfirmDialog;
      },
      set open($$value) {
        showConfirmDialog = $$value;
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
                    Triangle_alert($$payload6, { class: "text-destructive h-5 w-5" });
                    $$payload6.out += `<!----> Confirm`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!----> <!---->`;
                Dialog_description($$payload5, {
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->This action is permanent and cannot be undone. Please review the consequences carefully.`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> <div class="space-y-4">`;
            Alert($$payload4, {
              variant: "destructive",
              children: ($$payload5) => {
                Triangle_alert($$payload5, { class: "h-4 w-4" });
                $$payload5.out += `<!----> `;
                Alert_description($$payload5, {
                  children: ($$payload6) => {
                    $$payload6.out += `<strong>You will lose:</strong> <ul class="mt-2 list-disc space-y-1 pl-4"><li>Cash balance: ${escape_html(formatValue(currentBalance))}</li> `;
                    if (holdingsValue > 0) {
                      $$payload6.out += "<!--[-->";
                      $$payload6.out += `<li>All coin holdings worth ${escape_html(formatValue(holdingsValue))}</li>`;
                    } else {
                      $$payload6.out += "<!--[!-->";
                    }
                    $$payload6.out += `<!--]--> <li>Total portfolio value: ${escape_html(formatValue(totalValue))}</li></ul> <strong class="mt-2 block text-green-600">You will gain:</strong> <ul class="mt-1 list-disc space-y-1 pl-4"><li>More money in daily rewards</li> <li>A daily reward reset</li> <li>Prestige badge and status</li></ul> We will automatically sell all your coin holdings.`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> <div class="space-y-2">`;
            Label($$payload4, {
              for: "confirmation",
              class: "text-sm font-medium",
              children: ($$payload5) => {
                $$payload5.out += `<!---->Type "PRESTIGE" to confirm:`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Input($$payload4, {
              id: "confirmation",
              placeholder: "Type PRESTIGE here",
              class: "uppercase",
              get value() {
                return confirmationText;
              },
              set value($$value) {
                confirmationText = $$value;
                $$settled = false;
              }
            });
            $$payload4.out += `<!----></div></div> <!---->`;
            Dialog_footer($$payload4, {
              children: ($$payload5) => {
                Button($$payload5, {
                  variant: "ghost",
                  onclick: closeConfirmDialog,
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->Cancel`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!----> `;
                Button($$payload5, {
                  onclick: handlePrestige,
                  disabled: !canConfirmPrestige || isPrestiging,
                  children: ($$payload6) => {
                    if (isPrestiging) {
                      $$payload6.out += "<!--[-->";
                      Loader_circle($$payload6, { class: "h-4 w-4 animate-spin" });
                      $$payload6.out += `<!----> Advancing...`;
                    } else {
                      $$payload6.out += "<!--[!-->";
                      $$payload6.out += `Proceed`;
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
    $$payload2.out += `<!----> <div class="container mx-auto max-w-7xl p-6 svelte-7yvekx"><header class="mb-8"><div class="text-center"><div class="mb-2 flex items-center justify-center gap-3">`;
    Star($$payload2, { class: "h-8 w-8 text-yellow-500" });
    $$payload2.out += `<!----> <h1 class="text-3xl font-bold">Prestige</h1></div> <p class="text-muted-foreground mb-6">Reset your progress to advance your trading status</p></div></header> `;
    {
      $$payload2.out += "<!--[-->";
      PrestigeSkeleton($$payload2);
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
//# sourceMappingURL=_page.svelte-BB3a8UrA.js.map
