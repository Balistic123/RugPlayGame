import { p as push, a as pop, u as store_get, v as unsubscribe_stores, e as ensure_array_like } from './index3-CthgjPPi.js';
import { C as Card } from './card-23nZlDN1.js';
import { C as Card_content } from './card-content-Nxnnhqv4.js';
import './volume-settings-DX3g8058.js';
import './badge-Dggzsmpe.js';
import { S as SEO } from './SEO-Cqzi3OcQ.js';
import { S as Skeleton } from './skeleton-BrIQmewN.js';
import './notifications-5V396xYk.js';
import { U as USER_DATA } from './user-data-CT5kjyaY.js';
import './client-s_UYc3Sk.js';
import './Toaster.svelte_svelte_type_style_lang-CcrnaSIn.js';
import { B as Bell } from './bell-BZLA0L9E.js';
import './index2-D4eROfHK.js';
import './clsx-ChV9xqsO.js';
import './utils2-CLIgW4-x.js';
import './index-opKo-a_0.js';
import './stores-Be-B7Xuq.js';
import './exports-Cv9LZeD1.js';
import './index-server-DH7p7JOq.js';
import './Icon2-Bqt4BCIy.js';

function NotificationsSkeleton($$payload) {
  const each_array = ensure_array_like(Array(8));
  $$payload.out += `<div class="space-y-1"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    each_array[i];
    $$payload.out += `<div class="flex items-start gap-4 rounded-md p-3">`;
    Skeleton($$payload, { class: "h-8 w-8 flex-shrink-0 rounded-full" });
    $$payload.out += `<!----> <div class="min-w-0 flex-1 space-y-2">`;
    Skeleton($$payload, { class: "h-4 w-48" });
    $$payload.out += `<!----> `;
    Skeleton($$payload, { class: "h-3 w-full max-w-md" });
    $$payload.out += `<!----></div> <div class="flex flex-shrink-0 flex-col items-end gap-1">`;
    Skeleton($$payload, { class: "h-3 w-16" });
    $$payload.out += `<!----></div></div> `;
    if (i < 7) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="border-border border-t"></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div>`;
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  SEO($$payload, {
    title: "Notifications - Rugplay",
    description: "View your notifications and updates from Rugplay."
  });
  $$payload.out += `<!----> <div class="container mx-auto max-w-4xl p-6"><header class="mb-8"><div class="text-center"><h1 class="mb-2 text-3xl font-bold">Notifications</h1> <p class="text-muted-foreground mb-6">Stay updated with your activities</p></div></header> <!---->`;
  Card($$payload, {
    class: "gap-1",
    children: ($$payload2) => {
      $$payload2.out += `<!---->`;
      Card_content($$payload2, {
        children: ($$payload3) => {
          if (!store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA)) {
            $$payload3.out += "<!--[-->";
            $$payload3.out += `<div class="py-12 text-center"><div class="bg-muted mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">`;
            Bell($$payload3, { class: "text-muted-foreground h-8 w-8" });
            $$payload3.out += `<!----></div> <h3 class="mb-2 text-lg font-semibold">Please sign in</h3> <p class="text-muted-foreground">You need to be signed in to view notifications</p></div>`;
          } else {
            $$payload3.out += "<!--[1-->";
            NotificationsSkeleton($$payload3);
          }
          $$payload3.out += `<!--]-->`;
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
//# sourceMappingURL=_page.svelte-BHBjk7uK.js.map
