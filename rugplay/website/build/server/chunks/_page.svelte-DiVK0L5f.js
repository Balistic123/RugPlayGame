import { p as push, q as copy_payload, t as assign_payload, a as pop, m as escape_html, e as ensure_array_like, w as sanitize_props, b as spread_props, x as slot } from './index3-CthgjPPi.js';
import { C as Card } from './card-23nZlDN1.js';
import { C as Card_content } from './card-content-Nxnnhqv4.js';
import './volume-settings-DX3g8058.js';
import { C as Card_header } from './card-header-CuTABeMH.js';
import { C as Card_title } from './card-title-CxxMmziD.js';
import { R as Root, D as Dialog_content } from './index5-D35Z60w5.js';
import { B as Button } from './button-Cg_QiDbD.js';
import { I as Input } from './input-BZy6dM-O.js';
import { T as Textarea } from './textarea-IYfk3NF4.js';
import './badge-Dggzsmpe.js';
import { S as Skeleton } from './skeleton-BrIQmewN.js';
import { a as toast } from './Toaster.svelte_svelte_type_style_lang-CcrnaSIn.js';
import { H as Hammer } from './hammer-DUPW_47m.js';
import { I as Icon } from './Icon2-Bqt4BCIy.js';
import { D as Dialog_header, a as Dialog_title, b as Dialog_description } from './dialog-description-4JjLXrIw.js';
import { D as Dialog_footer } from './dialog-footer-KlhKHuMF.js';
import './index2-D4eROfHK.js';
import './clsx-ChV9xqsO.js';
import './utils2-CLIgW4-x.js';
import './scroll-lock-BUIxTk31.js';
import './create-id-Bxd404XN.js';
import './index-server-DH7p7JOq.js';
import './events-CF0F77H5.js';
import './Icon-DETra0Ze.js';
import './index-opKo-a_0.js';

function Ban($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "circle",
      { "cx": "12", "cy": "12", "r": "10" }
    ],
    ["path", { "d": "m4.9 4.9 14.2 14.2" }]
  ];
  Icon($$payload, spread_props([
    { name: "ban" },
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
function User_check($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "m16 11 2 2 4-4" }],
    [
      "path",
      {
        "d": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
      }
    ],
    ["circle", { "cx": "9", "cy": "7", "r": "4" }]
  ];
  Icon($$payload, spread_props([
    { name: "user-check" },
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
  let bannedUsers = [];
  let loading = true;
  let actionLoading = false;
  let banDialogOpen = false;
  let usernameToAction = "";
  let banReason = "";
  async function loadBannedUsers() {
    loading = true;
    try {
      const response = await fetch("/api/admin/users/banned-list");
      if (response.ok) {
        bannedUsers = await response.json();
      }
    } catch (e) {
      toast.error("Failed to load banned users");
    } finally {
      loading = false;
    }
  }
  async function banUser() {
    if (!usernameToAction.trim() || !banReason.trim()) return;
    actionLoading = true;
    try {
      const response = await fetch("/api/admin/users/ban", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: usernameToAction.trim(),
          reason: banReason.trim()
        })
      });
      if (response.ok) {
        toast.success("User banned successfully");
        await loadBannedUsers();
        banDialogOpen = false;
        usernameToAction = "";
        banReason = "";
      } else {
        const error = await response.json();
        toast.error(error.message || "Failed to ban user");
      }
    } catch (e) {
      toast.error("Failed to ban user");
    } finally {
      actionLoading = false;
    }
  }
  async function unbanUser(userId) {
    actionLoading = true;
    try {
      const response = await fetch("/api/admin/users/unban", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId })
      });
      if (response.ok) {
        toast.success("User unbanned successfully");
        await loadBannedUsers();
      } else {
        const error = await response.json();
        toast.error(error.message || "Failed to unban user");
      }
    } catch (e) {
      toast.error("Failed to unban user");
    } finally {
      actionLoading = false;
    }
  }
  function openBanDialog() {
    usernameToAction = "";
    banReason = "";
    banDialogOpen = true;
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="container mx-auto max-w-4xl py-6"><!---->`;
    Card($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->`;
        Card_header($$payload3, {
          class: "flex flex-row items-center justify-between",
          children: ($$payload4) => {
            $$payload4.out += `<!---->`;
            Card_title($$payload4, {
              class: "flex items-center gap-2",
              children: ($$payload5) => {
                Hammer($$payload5, { class: "h-5 w-5" });
                $$payload5.out += `<!----> Banned Users (${escape_html(bannedUsers.length)})`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Button($$payload4, {
              onclick: openBanDialog,
              children: ($$payload5) => {
                Ban($$payload5, { class: "h-4 w-4" });
                $$payload5.out += `<!----> Ban User`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!---->`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> <!---->`;
        Card_content($$payload3, {
          children: ($$payload4) => {
            if (loading) {
              $$payload4.out += "<!--[-->";
              const each_array = ensure_array_like(Array(5));
              $$payload4.out += `<div class="space-y-4"><!--[-->`;
              for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                each_array[$$index];
                $$payload4.out += `<div class="flex items-center justify-between p-4 border rounded"><div class="space-y-2 flex-1">`;
                Skeleton($$payload4, { class: "h-4 w-48" });
                $$payload4.out += `<!----> `;
                Skeleton($$payload4, { class: "h-3 w-32" });
                $$payload4.out += `<!----> `;
                Skeleton($$payload4, { class: "h-3 w-64" });
                $$payload4.out += `<!----></div> `;
                Skeleton($$payload4, { class: "h-8 w-16" });
                $$payload4.out += `<!----></div>`;
              }
              $$payload4.out += `<!--]--></div>`;
            } else if (bannedUsers.length === 0) {
              $$payload4.out += "<!--[1-->";
              $$payload4.out += `<div class="text-center py-8"><p class="text-muted-foreground">No banned users found.</p></div>`;
            } else {
              $$payload4.out += "<!--[!-->";
              const each_array_1 = ensure_array_like(bannedUsers);
              $$payload4.out += `<div class="space-y-4"><!--[-->`;
              for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
                let user = each_array_1[$$index_1];
                $$payload4.out += `<div class="flex items-center justify-between p-4 border rounded"><div class="space-y-1 flex-1"><div class="font-medium">${escape_html(user.name)}</div> <div class="text-sm text-muted-foreground">@${escape_html(user.username)}</div> <div class="text-sm"><span class="font-medium">Reason:</span> ${escape_html(user.banReason)}</div></div> `;
                Button($$payload4, {
                  size: "sm",
                  variant: "outline",
                  onclick: () => unbanUser(user.id),
                  disabled: actionLoading,
                  children: ($$payload5) => {
                    User_check($$payload5, { class: "h-4 w-4" });
                    $$payload5.out += `<!----> Unban`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----></div>`;
              }
              $$payload4.out += `<!--]--></div>`;
            }
            $$payload4.out += `<!--]-->`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----></div> <!---->`;
    Root($$payload2, {
      get open() {
        return banDialogOpen;
      },
      set open($$value) {
        banDialogOpen = $$value;
        $$settled = false;
      },
      children: ($$payload3) => {
        $$payload3.out += `<!---->`;
        Dialog_content($$payload3, {
          children: ($$payload4) => {
            $$payload4.out += `<!---->`;
            Dialog_header($$payload4, {
              children: ($$payload5) => {
                $$payload5.out += `<!---->`;
                Dialog_title($$payload5, {
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->Ban User`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!----> <!---->`;
                Dialog_description($$payload5, {
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->Enter the username and reason to ban a user.`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> <div class="space-y-4"><div><label for="username" class="block text-sm font-medium mb-2">Username</label> `;
            Input($$payload4, {
              id: "username",
              placeholder: "Enter username (without @)",
              required: true,
              get value() {
                return usernameToAction;
              },
              set value($$value) {
                usernameToAction = $$value;
                $$settled = false;
              }
            });
            $$payload4.out += `<!----></div> <div><label for="reason" class="block text-sm font-medium mb-2">Reason for ban</label> `;
            Textarea($$payload4, {
              id: "reason",
              placeholder: "Enter the reason for banning this user...",
              required: true,
              get value() {
                return banReason;
              },
              set value($$value) {
                banReason = $$value;
                $$settled = false;
              }
            });
            $$payload4.out += `<!----></div></div> <!---->`;
            Dialog_footer($$payload4, {
              children: ($$payload5) => {
                Button($$payload5, {
                  variant: "outline",
                  onclick: () => banDialogOpen = false,
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->Cancel`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!----> `;
                Button($$payload5, {
                  variant: "destructive",
                  onclick: banUser,
                  disabled: !usernameToAction.trim() || !banReason.trim() || actionLoading,
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->Ban User`;
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
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DiVK0L5f.js.map
