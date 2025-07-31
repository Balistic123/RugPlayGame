import { p as push, u as store_get, v as unsubscribe_stores, a as pop, m as escape_html } from './index3-CthgjPPi.js';
import { p as page } from './stores-Be-B7Xuq.js';
import { C as Card } from './card-23nZlDN1.js';
import { C as Card_content } from './card-content-Nxnnhqv4.js';
import './volume-settings-DX3g8058.js';
import { C as Card_header } from './card-header-CuTABeMH.js';
import { C as Card_title } from './card-title-CxxMmziD.js';
import { T as Triangle_alert } from './triangle-alert-D5MhYm9H.js';
import './index2-D4eROfHK.js';
import './clsx-ChV9xqsO.js';
import './client-s_UYc3Sk.js';
import './exports-Cv9LZeD1.js';
import './utils2-CLIgW4-x.js';
import './Icon2-Bqt4BCIy.js';

function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let reason = store_get($$store_subs ??= {}, "$page", page).url.searchParams.get("reason") || "none";
  $$payload.out += `<div class="container mx-auto max-w-2xl py-20"><!---->`;
  Card($$payload, {
    class: "border-primary",
    children: ($$payload2) => {
      $$payload2.out += `<!---->`;
      Card_header($$payload2, {
        class: "text-center",
        children: ($$payload3) => {
          $$payload3.out += `<div class="bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">`;
          Triangle_alert($$payload3, { class: "text-primary h-8 w-8" });
          $$payload3.out += `<!----></div> <!---->`;
          Card_title($$payload3, {
            class: "text-primary text-2xl",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Account Suspended`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> <!---->`;
      Card_content($$payload2, {
        class: "space-y-4 text-center",
        children: ($$payload3) => {
          $$payload3.out += `<p class="text-muted-foreground">REASON PROVIDED BY ADMINS: ${escape_html(reason)}</p> <p class="text-muted-foreground text-sm">If you believe this is an error, <a href="https://discord.gg/cKWNV2uZUP" class="text-primary underline">please contact support</a>.</p>`;
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
//# sourceMappingURL=_page.svelte-D2LcSS5H.js.map
