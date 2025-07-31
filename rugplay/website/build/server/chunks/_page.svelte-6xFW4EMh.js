import { p as push, u as store_get, q as copy_payload, t as assign_payload, v as unsubscribe_stores, a as pop, m as escape_html, l as attr_style, o as stringify, w as sanitize_props, b as spread_props, x as slot } from './index3-CthgjPPi.js';
import './client-s_UYc3Sk.js';
import { b as getPublicUrl, r as debounce } from './utils2-CLIgW4-x.js';
import { B as Button } from './button-Cg_QiDbD.js';
import { I as Input } from './input-BZy6dM-O.js';
import { L as Label } from './label-CxNim4GD.js';
import { T as Textarea } from './textarea-IYfk3NF4.js';
import { A as Avatar, a as Avatar_fallback } from './avatar-fallback-BVDrtls6.js';
import { A as Avatar_image } from './avatar-image-BuX3_Vs_.js';
import { C as Card } from './card-23nZlDN1.js';
import { C as Card_content } from './card-content-Nxnnhqv4.js';
import { C as Card_description } from './card-description-BhiVZbL9.js';
import { C as Card_header } from './card-header-CuTABeMH.js';
import { C as Card_title } from './card-title-CxxMmziD.js';
import { O as onDestroy } from './scroll-lock-BUIxTk31.js';
import { a as toast } from './Toaster.svelte_svelte_type_style_lang-CcrnaSIn.js';
import { v as volumeSettings } from './volume-settings-DX3g8058.js';
import { U as USER_DATA } from './user-data-CT5kjyaY.js';
import { R as Root, D as Dialog_content } from './index5-D35Z60w5.js';
import { S as SEO } from './SEO-Cqzi3OcQ.js';
import { I as Icon } from './Icon2-Bqt4BCIy.js';
import { D as Dialog_header, a as Dialog_title, b as Dialog_description } from './dialog-description-4JjLXrIw.js';
import { D as Dialog_footer } from './dialog-footer-KlhKHuMF.js';
import './index2-D4eROfHK.js';
import './clsx-ChV9xqsO.js';
import './exports-Cv9LZeD1.js';
import './index-opKo-a_0.js';
import './create-id-Bxd404XN.js';
import './index-server-DH7p7JOq.js';
import './events-CF0F77H5.js';
import './Icon-DETra0Ze.js';
import './stores-Be-B7Xuq.js';

function Download($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M12 15V3" }],
    [
      "path",
      {
        "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
      }
    ],
    ["path", { "d": "m7 10 5 5 5-5" }]
  ];
  Icon($$payload, spread_props([
    { name: "download" },
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
function Trash_2($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M3 6h18" }],
    [
      "path",
      { "d": "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }
    ],
    [
      "path",
      { "d": "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" }
    ],
    [
      "line",
      {
        "x1": "10",
        "x2": "10",
        "y1": "11",
        "y2": "17"
      }
    ],
    [
      "line",
      {
        "x1": "14",
        "x2": "14",
        "y1": "11",
        "y2": "17"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "trash-2" },
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
function Volume_2($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"
      }
    ],
    ["path", { "d": "M16 9a5 5 0 0 1 0 6" }],
    [
      "path",
      { "d": "M19.364 18.364a9 9 0 0 0 0-12.728" }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "volume-2" },
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
function Volume_x($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"
      }
    ],
    [
      "line",
      {
        "x1": "22",
        "x2": "16",
        "y1": "9",
        "y2": "15"
      }
    ],
    [
      "line",
      {
        "x1": "16",
        "x2": "22",
        "y1": "9",
        "y2": "15"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "volume-x" },
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
  let name = store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA)?.name || "";
  let bio = store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA)?.bio ?? "";
  let username = store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA)?.username || "";
  const initialUsername = store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA)?.username || "";
  let avatarFile = void 0;
  let currentAvatarUrl = getPublicUrl(store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA)?.image ?? null);
  let isDirty = name !== (store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA)?.name || "") || bio !== (store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA)?.bio ?? "") || username !== (store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA)?.username || "") || avatarFile !== void 0;
  let masterVolume = (store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA)?.volumeMaster || 0) * 100;
  let isMuted = store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA)?.volumeMuted || false;
  let deleteDialogOpen = false;
  let deleteConfirmationText = "";
  let isDeleting = false;
  let isDownloading = false;
  function beforeUnloadHandler(e) {
    if (isDirty) {
      e.preventDefault();
    }
  }
  onDestroy(() => {
    window.removeEventListener("beforeunload", beforeUnloadHandler);
  });
  const debouncedSaveVolume = debounce(
    async (settings) => {
      try {
        const response = await fetch("/api/settings/volume", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(settings)
        });
        if (!response.ok) {
          throw new Error("Failed to save volume settings");
        }
      } catch (error) {
        console.error("Failed to save volume settings:", error);
        toast.error("Failed to save volume settings");
      }
    },
    500
  );
  async function saveVolumeToServer(settings) {
    debouncedSaveVolume(settings);
  }
  function toggleMute() {
    isMuted = !isMuted;
    volumeSettings.setMuted(isMuted);
    saveVolumeToServer({ master: masterVolume / 100, muted: isMuted });
  }
  async function downloadUserData() {
    isDownloading = true;
    try {
      const headResponse = await fetch("/api/settings/data-download", { method: "HEAD" });
      if (!headResponse.ok) {
        throw new Error("Download service unavailable");
      }
      const contentLength = headResponse.headers.get("Content-Length");
      if (contentLength) {
        const sizeInMB = parseInt(contentLength) / (1024 * 1024);
        if (sizeInMB > 50) {
          const proceed = confirm(`Your data export is ${sizeInMB.toFixed(1)}MB. This may take a while to download. Continue?`);
          if (!proceed) {
            isDownloading = false;
            return;
          }
        }
      }
      const downloadUrl = "/api/settings/data-download";
      const downloadWindow = window.open(downloadUrl, "_blank");
      if (!downloadWindow || downloadWindow.closed) {
        const a = document.createElement("a");
        a.href = downloadUrl;
        a.style.display = "none";
        a.target = "_blank";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
        setTimeout(
          () => {
            try {
              downloadWindow.close();
            } catch (e) {
            }
          },
          1e3
        );
      }
      toast.success("Your data download has started");
    } catch (error) {
      console.error("Download error:", error);
      toast.error("Failed to start data download: " + error.message);
    } finally {
      isDownloading = false;
    }
  }
  async function deleteAccount() {
    if (deleteConfirmationText !== "DELETE MY ACCOUNT") {
      toast.error('Please type "DELETE MY ACCOUNT" to confirm');
      return;
    }
    isDeleting = true;
    try {
      const response = await fetch("/api/settings/delete-account", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ confirmationText: deleteConfirmationText })
      });
      const result = await response.json();
      if (!response.ok) {
        if (response.status === 409) {
          toast.error("Account deletion already scheduled", {
            description: "You have already requested account deletion. Contact support to cancel."
          });
        } else {
          throw new Error(result.message || "Failed to delete account");
        }
      } else {
        toast.success("Account deletion scheduled successfully", { description: result.message });
      }
    } catch (error) {
      console.error("Delete account error:", error);
      toast.error("Failed to delete account: " + error.message);
    } finally {
      isDeleting = false;
      deleteDialogOpen = false;
      deleteConfirmationText = "";
    }
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    SEO($$payload2, {
      title: "Settings - Rugplay",
      description: "Manage your Rugplay account settings, profile information, audio preferences, and privacy options.",
      keywords: "game account settings, profile settings game, privacy settings, audio settings game"
    });
    $$payload2.out += `<!----> <div class="container mx-auto max-w-2xl p-6"><h1 class="mb-6 text-2xl font-bold">Settings</h1> `;
    if (!store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA)) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<div class="flex h-96 items-center justify-center"><div class="text-center"><div class="text-muted-foreground mb-4 text-xl">You need to be logged in to view your settings</div> `;
      Button($$payload2, {
        onclick: () => true,
        children: ($$payload3) => {
          $$payload3.out += `<!---->Sign In`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div></div>`;
    } else {
      $$payload2.out += "<!--[!-->";
      $$payload2.out += `<div class="space-y-6"><!---->`;
      Card($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->`;
          Card_header($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->`;
              Card_title($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Profile Settings`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> <!---->`;
              Card_description($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Update your profile information`;
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
              $$payload4.out += `<div class="mb-6 flex items-center gap-4"><div class="group relative cursor-pointer" role="button" tabindex="0"><!---->`;
              Avatar($$payload4, {
                class: "size-20",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->`;
                  Avatar_image($$payload5, { src: currentAvatarUrl, alt: name });
                  $$payload5.out += `<!----> <!---->`;
                  Avatar_fallback($$payload5, {
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->?`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!---->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> <div class="absolute inset-0 flex items-center justify-center rounded-full bg-black/50 opacity-0 transition-opacity group-hover:opacity-100"><span class="text-xs text-white">Change</span></div></div> <div><h3 class="text-lg font-semibold">${escape_html(name)}</h3> <p class="text-muted-foreground text-sm">@${escape_html(username)}</p></div></div> <input type="file" accept="image/*" class="hidden"/> <form class="space-y-4"><div class="space-y-2">`;
              Label($$payload4, {
                for: "name",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Display Name`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              Input($$payload4, {
                id: "name",
                required: true,
                class: "",
                get value() {
                  return name;
                },
                set value($$value) {
                  name = $$value;
                  $$settled = false;
                }
              });
              $$payload4.out += `<!----> `;
              {
                $$payload4.out += "<!--[!-->";
              }
              $$payload4.out += `<!--]--></div> <div class="space-y-2">`;
              Label($$payload4, {
                for: "username",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Username`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> <div class="relative"><span class="text-muted-foreground absolute left-3 top-4 -translate-y-1/2 transform">@</span> `;
              Input($$payload4, {
                id: "username",
                required: true,
                pattern: "^[a-zA-Z0-9_]{3,30}$",
                class: "pl-8",
                get value() {
                  return username;
                },
                set value($$value) {
                  username = $$value;
                  $$settled = false;
                }
              });
              $$payload4.out += `<!----> <div class="absolute right-3 top-1.5">`;
              if (username !== initialUsername) {
                $$payload4.out += "<!--[1-->";
                {
                  $$payload4.out += "<!--[!-->";
                  $$payload4.out += `<span class="text-destructive text-sm">Taken</span>`;
                }
                $$payload4.out += `<!--]-->`;
              } else {
                $$payload4.out += "<!--[!-->";
              }
              $$payload4.out += `<!--]--></div></div> <p class="text-muted-foreground text-xs">Only letters, numbers, underscores. 3–30 characters.</p></div> <div class="space-y-2">`;
              Label($$payload4, {
                for: "bio",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Bio`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              Textarea($$payload4, {
                id: "bio",
                rows: 4,
                placeholder: "Tell us about yourself",
                get value() {
                  return bio;
                },
                set value($$value) {
                  bio = $$value;
                  $$settled = false;
                }
              });
              $$payload4.out += `<!----></div> `;
              Button($$payload4, {
                type: "submit",
                disabled: !isDirty || false,
                children: ($$payload5) => {
                  $$payload5.out += `<!---->${escape_html("Save Changes")}`;
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
      $$payload2.out += `<!----> <!---->`;
      Card($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->`;
          Card_header($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->`;
              Card_title($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Audio Settings`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> <!---->`;
              Card_description($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Adjust volume for game sounds`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!---->`;
          Card_content($$payload3, {
            class: "space-y-4",
            children: ($$payload4) => {
              $$payload4.out += `<div class="space-y-3"><div class="flex items-center justify-between">`;
              Label($$payload4, {
                class: "text-base font-medium",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Volume`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> <div class="flex items-center gap-2">`;
              Button($$payload4, {
                variant: "ghost",
                size: "sm",
                onclick: toggleMute,
                class: "h-8 w-8 p-0",
                children: ($$payload5) => {
                  if (isMuted) {
                    $$payload5.out += "<!--[-->";
                    Volume_x($$payload5, { class: "h-4 w-4" });
                  } else {
                    $$payload5.out += "<!--[!-->";
                    Volume_2($$payload5, { class: "h-4 w-4" });
                  }
                  $$payload5.out += `<!--]-->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> <span class="text-muted-foreground w-10 text-right text-sm">${escape_html(Math.round(masterVolume))}%</span></div></div> `;
              {
                $$payload4.out += "<!--[!-->";
                $$payload4.out += `<div class="relative flex w-full touch-none select-none items-center"><div class="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary"><div class="absolute h-full bg-primary transition-all"${attr_style(`width: ${stringify(masterVolume)}%`)}></div></div></div>`;
              }
              $$payload4.out += `<!--]--> <p class="text-muted-foreground text-xs">Controls all game sounds including effects and background audio</p></div>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> <!---->`;
      Card($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->`;
          Card_header($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->`;
              Card_title($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Data &amp; Privacy`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> <!---->`;
              Card_description($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Manage your personal data and account`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!---->`;
          Card_content($$payload3, {
            class: "space-y-4",
            children: ($$payload4) => {
              $$payload4.out += `<div class="space-y-4"><div class="flex items-center justify-between rounded-lg border p-4"><div class="space-y-1"><h4 class="text-sm font-medium">Download Your Data</h4> <p class="text-muted-foreground text-xs">Export a complete copy of your account data including transactions, bets, and
								profile information.</p></div> `;
              Button($$payload4, {
                variant: "outline",
                size: "sm",
                onclick: downloadUserData,
                disabled: isDownloading,
                class: "ml-4",
                children: ($$payload5) => {
                  Download($$payload5, { class: "h-4 w-4" });
                  $$payload5.out += `<!----> ${escape_html(isDownloading ? "Downloading..." : "Download Data")}`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----></div> <div class="border-destructive/20 bg-destructive/5 flex items-center justify-between rounded-lg border p-4"><div class="space-y-1"><h4 class="text-destructive text-sm font-medium">Delete Account</h4> <p class="text-muted-foreground text-xs">Schedule your account for permanent deletion. This will anonymize your data while
								preserving transaction records for compliance.</p></div> `;
              Button($$payload4, {
                variant: "destructive",
                size: "sm",
                onclick: () => deleteDialogOpen = true,
                class: "ml-4",
                children: ($$payload5) => {
                  Trash_2($$payload5, { class: "h-4 w-4" });
                  $$payload5.out += `<!----> Delete Account`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----></div></div>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div>`;
    }
    $$payload2.out += `<!--]--></div> <!---->`;
    Root($$payload2, {
      get open() {
        return deleteDialogOpen;
      },
      set open($$value) {
        deleteDialogOpen = $$value;
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
                  class: "text-destructive",
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->Delete Account`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!----> <!---->`;
                Dialog_description($$payload5, {
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->This action cannot be undone. Your account will be scheduled for permanent deletion, after a
				grace period of <span class="font-semibold">14 days</span>. Your data will be anonymized.`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> <div class="space-y-4"><div class="bg-destructive/10 rounded-lg p-4"><h4 class="mb-2 text-sm font-medium">What happens when you delete your account:</h4> <ul class="text-muted-foreground space-y-1 text-xs"><li>• Your profile information will be permanently removed</li> <li>• You will be logged out from all devices</li> <li>• Your comments will be anonymized</li> <li>• Transaction history will be preserved for compliance (anonymized)</li> <li>• You will not be able to recover this account</li></ul></div> <div class="space-y-2">`;
            Label($$payload4, {
              for: "delete-confirmation",
              children: ($$payload5) => {
                $$payload5.out += `<!---->Type "DELETE MY ACCOUNT" to confirm:`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Input($$payload4, {
              id: "delete-confirmation",
              placeholder: "DELETE MY ACCOUNT",
              class: "font-mono",
              get value() {
                return deleteConfirmationText;
              },
              set value($$value) {
                deleteConfirmationText = $$value;
                $$settled = false;
              }
            });
            $$payload4.out += `<!----></div></div> <!---->`;
            Dialog_footer($$payload4, {
              children: ($$payload5) => {
                Button($$payload5, {
                  variant: "outline",
                  onclick: () => deleteDialogOpen = false,
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->Cancel`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!----> `;
                Button($$payload5, {
                  variant: "destructive",
                  onclick: deleteAccount,
                  disabled: isDeleting || deleteConfirmationText !== "DELETE MY ACCOUNT",
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->${escape_html(isDeleting ? "Deleting..." : "Delete Account")}`;
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
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-6xFW4EMh.js.map
