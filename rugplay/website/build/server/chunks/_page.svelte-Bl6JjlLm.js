import { p as push, q as copy_payload, t as assign_payload, a as pop, C as head, u as store_get, e as ensure_array_like, v as unsubscribe_stores, m as escape_html } from './index3-CthgjPPi.js';
import { B as Button } from './button-Cg_QiDbD.js';
import { I as Input } from './input-BZy6dM-O.js';
import { L as Label } from './label-CxNim4GD.js';
import { R as Root, S as Select_trigger, a as Select_content, b as Select_group, c as Select_item } from './index7-CPsQHBY3.js';
import { C as Card } from './card-23nZlDN1.js';
import { C as Card_content } from './card-content-Nxnnhqv4.js';
import { C as Card_description } from './card-description-BhiVZbL9.js';
import './volume-settings-DX3g8058.js';
import { C as Card_header } from './card-header-CuTABeMH.js';
import { C as Card_title } from './card-title-CxxMmziD.js';
import './alert-9IclKPUx.js';
import './badge-Dggzsmpe.js';
import { S as Skeleton } from './skeleton-BrIQmewN.js';
import { U as USER_DATA } from './user-data-CT5kjyaY.js';
import { T as Ticket } from './ticket-CG_Dm67D.js';
import { P as Plus } from './plus-D3S3uPbz.js';
import './index2-D4eROfHK.js';
import './clsx-ChV9xqsO.js';
import './utils2-CLIgW4-x.js';
import './index-opKo-a_0.js';
import './create-id-Bxd404XN.js';
import './index-server-DH7p7JOq.js';
import './scroll-lock-BUIxTk31.js';
import './events-CF0F77H5.js';
import './mounted-Tbl-FfLm.js';
import './popper-layer-force-mount-BIcocscF.js';
import './Icon-DETra0Ze.js';
import './use-dom-typeahead.svelte-_8fvw_os.js';
import './Icon2-Bqt4BCIy.js';

function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let code = "";
  let rewardAmount = "";
  let maxUses = "";
  let expirationOption = "";
  let isCreating = false;
  const expirationOptions = [
    { value: "1h", label: "1 Hour" },
    { value: "1d", label: "1 Day" },
    { value: "3d", label: "3 Days" },
    { value: "7d", label: "7 Days" },
    { value: "30d", label: "30 Days" }
  ];
  let currentExpirationLabel = expirationOptions.find((option) => option.value === expirationOption)?.label || "Select expiration";
  let isFormValid = code.trim() && rewardAmount;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    head($$payload2, ($$payload3) => {
      $$payload3.title = `<title>Promo Codes - Admin | Rugplay</title>`;
      $$payload3.out += `<meta name="robots" content="noindex, nofollow"/>`;
    });
    if (!store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA) || !store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA).isAdmin) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<div class="flex h-screen items-center justify-center"><div class="text-center"><h1 class="text-2xl font-bold">Access Denied</h1> <p class="text-muted-foreground">You don't have permission to access this page.</p></div></div>`;
    } else {
      $$payload2.out += "<!--[!-->";
      $$payload2.out += `<div class="container mx-auto space-y-4 p-4"><div class="flex items-center gap-2">`;
      Ticket($$payload2, { class: "h-5 w-5" });
      $$payload2.out += `<!----> <h1 class="text-2xl font-bold">Promo Codes</h1></div> <div class="grid gap-4 lg:grid-cols-2">`;
      Card($$payload2, {
        children: ($$payload3) => {
          Card_header($$payload3, {
            class: "pb-3",
            children: ($$payload4) => {
              Card_title($$payload4, {
                class: "flex items-center gap-2 text-lg",
                children: ($$payload5) => {
                  Plus($$payload5, { class: "h-4 w-4" });
                  $$payload5.out += `<!----> Create`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              Card_description($$payload4, {
                class: "text-sm",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Draft a new promo code for users to redeem.`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Card_content($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<form class="space-y-3"><div class="grid gap-3 sm:grid-cols-2"><div class="space-y-1">`;
              Label($$payload4, {
                for: "code",
                class: "text-sm",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Code *`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              Input($$payload4, {
                id: "code",
                placeholder: "WELCOME100",
                disabled: isCreating,
                class: "h-8 uppercase",
                style: "text-transform: uppercase;",
                required: true,
                get value() {
                  return code;
                },
                set value($$value) {
                  code = $$value;
                  $$settled = false;
                }
              });
              $$payload4.out += `<!----></div> <div class="space-y-1">`;
              Label($$payload4, {
                for: "reward",
                class: "text-sm",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Reward Amount *`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              Input($$payload4, {
                id: "reward",
                type: "number",
                step: "0.01",
                min: "0",
                placeholder: "100.00",
                disabled: isCreating,
                class: "h-8",
                required: true,
                get value() {
                  return rewardAmount;
                },
                set value($$value) {
                  rewardAmount = $$value;
                  $$settled = false;
                }
              });
              $$payload4.out += `<!----></div></div> <div class="grid gap-3 sm:grid-cols-2"><div class="space-y-1">`;
              Label($$payload4, {
                for: "maxUses",
                class: "text-sm",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Max Uses`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              Input($$payload4, {
                id: "maxUses",
                type: "number",
                min: "1",
                placeholder: "Unlimited",
                disabled: isCreating,
                class: "h-8",
                get value() {
                  return maxUses;
                },
                set value($$value) {
                  maxUses = $$value;
                  $$settled = false;
                }
              });
              $$payload4.out += `<!----></div> <div class="space-y-1">`;
              Label($$payload4, {
                for: "expires",
                class: "text-sm",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Expires In`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> <!---->`;
              Root($$payload4, {
                type: "single",
                disabled: isCreating,
                get value() {
                  return expirationOption;
                },
                set value($$value) {
                  expirationOption = $$value;
                  $$settled = false;
                },
                children: ($$payload5) => {
                  $$payload5.out += `<!---->`;
                  Select_trigger($$payload5, {
                    class: "h-8 w-full",
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->${escape_html(currentExpirationLabel)}`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!----> <!---->`;
                  Select_content($$payload5, {
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->`;
                      Select_group($$payload6, {
                        children: ($$payload7) => {
                          const each_array = ensure_array_like(expirationOptions);
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
              $$payload4.out += `<!----></div></div> `;
              {
                $$payload4.out += "<!--[!-->";
              }
              $$payload4.out += `<!--]--> `;
              Button($$payload4, {
                type: "submit",
                disabled: !isFormValid || isCreating,
                class: "h-8 w-full",
                size: "sm",
                children: ($$payload5) => {
                  {
                    $$payload5.out += "<!--[!-->";
                    Plus($$payload5, { class: "h-3 w-3" });
                    $$payload5.out += `<!----> Create Code`;
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
      $$payload2.out += `<!----> `;
      Card($$payload2, {
        children: ($$payload3) => {
          Card_header($$payload3, {
            class: "pb-3",
            children: ($$payload4) => {
              Card_title($$payload4, {
                class: "text-lg",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Active`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              Card_description($$payload4, {
                class: "text-sm",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Manage existing promo codes.`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Card_content($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<div class="space-y-3">`;
              {
                $$payload4.out += "<!--[-->";
                const each_array_1 = ensure_array_like(Array(3));
                $$payload4.out += `<!--[-->`;
                for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
                  each_array_1[$$index_1];
                  $$payload4.out += `<div class="space-y-2 rounded-lg border p-3"><div class="flex items-center justify-between">`;
                  Skeleton($$payload4, { class: "h-4 w-20" });
                  $$payload4.out += `<!----> `;
                  Skeleton($$payload4, { class: "h-5 w-14" });
                  $$payload4.out += `<!----></div> <div class="grid grid-cols-2 gap-2">`;
                  Skeleton($$payload4, { class: "h-3 w-16" });
                  $$payload4.out += `<!----> `;
                  Skeleton($$payload4, { class: "h-3 w-12" });
                  $$payload4.out += `<!----></div></div>`;
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
      $$payload2.out += `<!----></div></div>`;
    }
    $$payload2.out += `<!--]-->`;
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
//# sourceMappingURL=_page.svelte-Bl6JjlLm.js.map
