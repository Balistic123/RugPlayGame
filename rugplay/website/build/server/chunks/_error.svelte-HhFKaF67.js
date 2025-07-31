import { p as push, C as head, m as escape_html, a as pop } from './index3-CthgjPPi.js';
import { p as page } from './index6-BNoyVQ18.js';
import { B as Button } from './button-Cg_QiDbD.js';
import './index2-D4eROfHK.js';
import './clsx-ChV9xqsO.js';
import './client2-DLmkXqdH.js';
import './client-s_UYc3Sk.js';
import './exports-Cv9LZeD1.js';
import './utils2-CLIgW4-x.js';
import './volume-settings-DX3g8058.js';
import './index-opKo-a_0.js';

function _error($$payload, $$props) {
  push();
  const status = page.status;
  const message = getDefaultMessage(status);
  function getDefaultMessage(status2) {
    switch (status2) {
      case 404:
        return "This page doesn't exist. Just like the original Vyntr! Or the context mismatch popups in Bliptext";
      case 403:
        return "You don't have permission to access this page. Your credentials are likely ####.";
      case 429:
        return "Too many requests! You're hitting our servers. They have feelings too :(";
      case 500:
        return "Our magic machine just imploded. Don't worry though, we're on it!";
      default:
        return "Something went wrong. We have no idea what happened, but you can blame us for it on X!";
    }
  }
  let tooltipMessage = "ts pmo too icl";
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(status)} | Rugplay</title>`;
    $$payload2.out += `<meta name="robots" content="noindex"/>`;
  });
  $$payload.out += `<div class="flex min-h-[70vh] items-center justify-center gap-12"><div class="flex max-w-lg flex-col items-center justify-center text-center"><h1 class="text-primary mb-4 font-bold" style="font-size: 3rem; line-height: 1;">${escape_html(status)} WRONG TURN?</h1> <p class="text-muted-foreground mb-8 text-lg">${escape_html(message)}</p> <div class="flex flex-col">`;
  Button($$payload, {
    variant: "link",
    href: "https://discord.gg/cKWNV2uZUP",
    target: "_blank",
    children: ($$payload2) => {
      $$payload2.out += `<!---->@Discord`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Button($$payload, {
    variant: "link",
    href: "https://x.com/facedevstuff",
    target: "_blank",
    children: ($$payload2) => {
      $$payload2.out += `<!---->@X`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div> <div class="group relative hidden lg:block" role="button" tabindex="0" aria-label="Click to interact with error illustration"><img src="/404.gif" alt="404 Error Illustration" class="h-64 w-64 cursor-pointer object-contain transition-transform duration-300 hover:rotate-12 hover:scale-110"/> <div class="absolute -top-12 left-1/2 z-10 -translate-x-1/2 transform whitespace-nowrap rounded-lg bg-black px-3 py-1 text-sm text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">${escape_html(tooltipMessage)} <div class="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 transform border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div></div></div></div>`;
  pop();
}

export { _error as default };
//# sourceMappingURL=_error.svelte-HhFKaF67.js.map
