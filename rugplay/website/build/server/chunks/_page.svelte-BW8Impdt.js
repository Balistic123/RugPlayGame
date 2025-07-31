import { p as push, q as copy_payload, t as assign_payload, a as pop, m as escape_html, u as store_get, e as ensure_array_like, v as unsubscribe_stores } from './index3-CthgjPPi.js';
import { d as getTimeBasedGreeting } from './utils2-CLIgW4-x.js';
import './badge-Dggzsmpe.js';
import { U as USER_DATA } from './user-data-CT5kjyaY.js';
import { S as SignInConfirmDialog } from './SignInConfirmDialog-CRywm7vo.js';
import { C as Card } from './card-23nZlDN1.js';
import { C as Card_content } from './card-content-Nxnnhqv4.js';
import { C as Card_description } from './card-description-BhiVZbL9.js';
import './volume-settings-DX3g8058.js';
import { C as Card_header } from './card-header-CuTABeMH.js';
import { C as Card_title } from './card-title-CxxMmziD.js';
import { S as Skeleton } from './skeleton-BrIQmewN.js';
import { S as SEO } from './SEO-Cqzi3OcQ.js';
import './Toaster.svelte_svelte_type_style_lang-CcrnaSIn.js';
import './client-s_UYc3Sk.js';
import './index2-D4eROfHK.js';
import './clsx-ChV9xqsO.js';
import './index-opKo-a_0.js';
import './index5-D35Z60w5.js';
import './scroll-lock-BUIxTk31.js';
import './create-id-Bxd404XN.js';
import './index-server-DH7p7JOq.js';
import './events-CF0F77H5.js';
import './Icon-DETra0Ze.js';
import './button-Cg_QiDbD.js';
import 'better-auth/svelte';
import 'better-auth/client/plugins';
import './shared-server-BfUoNEXY.js';
import './index6-BNoyVQ18.js';
import './client2-DLmkXqdH.js';
import './dialog-description-4JjLXrIw.js';
import './stores-Be-B7Xuq.js';
import './exports-Cv9LZeD1.js';

function HomeSkeleton($$payload) {
  const each_array = ensure_array_like(Array(6));
  $$payload.out += `<div class="container mx-auto"><div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    each_array[$$index];
    Card($$payload, {
      class: "h-full",
      children: ($$payload2) => {
        Card_header($$payload2, {
          children: ($$payload3) => {
            Card_title($$payload3, {
              class: "flex items-center justify-between",
              children: ($$payload4) => {
                $$payload4.out += `<div class="flex items-center gap-2">`;
                Skeleton($$payload4, { class: "h-6 w-6 rounded-full" });
                $$payload4.out += `<!----> `;
                Skeleton($$payload4, { class: "h-6 max-w-2xl" });
                $$payload4.out += `<!----></div> `;
                Skeleton($$payload4, { class: "h-6 w-16" });
                $$payload4.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> `;
            Card_description($$payload3, {
              children: ($$payload4) => {
                Skeleton($$payload4, { class: "h-4 w-28" });
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!---->`;
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!----> `;
        Card_content($$payload2, {
          children: ($$payload3) => {
            $$payload3.out += `<div class="flex items-baseline justify-between">`;
            Skeleton($$payload3, { class: "h-9 w-24" });
            $$payload3.out += `<!----> `;
            Skeleton($$payload3, { class: "h-4 w-20" });
            $$payload3.out += `<!----></div>`;
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    });
  }
  $$payload.out += `<!--]--></div> <div class="mt-12">`;
  Skeleton($$payload, { class: "mb-4 h-8 w-40" });
  $$payload.out += `<!----> `;
  Card($$payload, {
    children: ($$payload2) => {
      Card_content($$payload2, {
        class: "p-0",
        children: ($$payload3) => {
          const each_array_1 = ensure_array_like(Array(10));
          $$payload3.out += `<div class="p-6"><!--[-->`;
          for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
            each_array_1[$$index_1];
            $$payload3.out += `<div class="flex items-center gap-4 border-b py-4 last:border-b-0">`;
            Skeleton($$payload3, { class: "h-8 w-8 rounded-full" });
            $$payload3.out += `<!----> <div class="flex-1">`;
            Skeleton($$payload3, { class: "h-4 w-24" });
            $$payload3.out += `<!----> `;
            Skeleton($$payload3, { class: "mt-1 h-3 w-16" });
            $$payload3.out += `<!----></div> `;
            Skeleton($$payload3, { class: "h-4 w-16" });
            $$payload3.out += `<!----> `;
            Skeleton($$payload3, { class: "h-4 w-16" });
            $$payload3.out += `<!----> `;
            Skeleton($$payload3, { class: "h-4 w-20" });
            $$payload3.out += `<!----> `;
            Skeleton($$payload3, { class: "h-4 w-20" });
            $$payload3.out += `<!----></div>`;
          }
          $$payload3.out += `<!--]--></div>`;
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div>`;
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let shouldSignIn = false;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    SEO($$payload2, {
      title: "Rugplay",
      description: "A realistic crypto trading simulator that lets you experience the risks and mechanics of decentralized exchanges without real financial consequences. Create coins, trade with liquidity pools, and learn about 'rug pulls' in a... relatively safe environment :)",
      keywords: "crypto simulation game, trading practice game, rug pull simulation, virtual cryptocurrency game"
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
    $$payload2.out += `<!----> <div class="container mx-auto p-6"><header class="mb-8"><h1 class="mb-2 truncate text-3xl font-bold">${escape_html(store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA) ? getTimeBasedGreeting(store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA)?.name) : "Welcome to Rugplay!")}</h1> <p class="text-muted-foreground">`;
    if (store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA)) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `Here's the market overview for today.`;
    } else {
      $$payload2.out += "<!--[!-->";
      $$payload2.out += `You need to <button class="text-primary underline hover:cursor-pointer">sign in</button> to play.`;
    }
    $$payload2.out += `<!--]--></p></header> `;
    {
      $$payload2.out += "<!--[-->";
      HomeSkeleton($$payload2);
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
//# sourceMappingURL=_page.svelte-BW8Impdt.js.map
