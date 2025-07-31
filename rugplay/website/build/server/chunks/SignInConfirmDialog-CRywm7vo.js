import { p as push, q as copy_payload, t as assign_payload, c as bind_props, a as pop } from './index3-CthgjPPi.js';
import { R as Root, D as Dialog_content } from './index5-D35Z60w5.js';
import { B as Button } from './button-Cg_QiDbD.js';
import { createAuthClient } from 'better-auth/svelte';
import { apiKeyClient } from 'better-auth/client/plugins';
import { p as public_env } from './shared-server-BfUoNEXY.js';
import { p as page } from './index6-BNoyVQ18.js';
import { D as Dialog_header, a as Dialog_title, b as Dialog_description } from './dialog-description-4JjLXrIw.js';

const client = createAuthClient({
  baseURL: public_env.PUBLIC_BETTER_AUTH_URL,
  plugins: [
    apiKeyClient()
  ]
});
const { signIn, signUp, getSession, signOut } = client;
function SignInConfirmDialog($$payload, $$props) {
  push();
  async function onConfirm() {
    await signIn.social({
      provider: "google",
      callbackURL: `${page.url.pathname}?signIn=1`
    });
  }
  let { open = false } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    Root($$payload2, {
      get open() {
        return open;
      },
      set open($$value) {
        open = $$value;
        $$settled = false;
      },
      children: ($$payload3) => {
        Dialog_content($$payload3, {
          class: "sm:max-w-md",
          children: ($$payload4) => {
            Dialog_header($$payload4, {
              children: ($$payload5) => {
                Dialog_title($$payload5, {
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->Sign in to Rugplay`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!----> `;
                Dialog_description($$payload5, {
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->Choose a service to sign in with. Your account will be created automatically if you don't
				have one.`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> <div class="flex flex-col gap-4 py-2">`;
            Button($$payload4, {
              class: "flex w-full items-center justify-center gap-2",
              variant: "outline",
              onclick: () => onConfirm(),
              children: ($$payload5) => {
                $$payload5.out += `<img class="h-5 w-5" src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" alt="Google"/> <span>Continue with Google</span>`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> <p class="text-muted-foreground text-center text-xs">By continuing, you agree to our <a href="/legal/terms" class="text-primary hover:underline">Terms of Service</a> and <a href="/legal/privacy" class="text-primary hover:underline">Privacy Policy</a></p></div>`;
          },
          $$slots: { default: true }
        });
      },
      $$slots: { default: true }
    });
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { open });
  pop();
}

export { SignInConfirmDialog as S, signOut as s };
//# sourceMappingURL=SignInConfirmDialog-CRywm7vo.js.map
