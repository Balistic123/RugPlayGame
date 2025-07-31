import { p as push, u as store_get, v as unsubscribe_stores, a as pop, m as escape_html, e as ensure_array_like } from './index3-CthgjPPi.js';
import { C as Card } from './card-23nZlDN1.js';
import { C as Card_content } from './card-content-Nxnnhqv4.js';
import { C as Card_description } from './card-description-BhiVZbL9.js';
import { b as getPublicUrl, f as formatValue, n as formatPrice, u as formatDate, l as formatQuantity } from './utils2-CLIgW4-x.js';
import { C as Card_header } from './card-header-CuTABeMH.js';
import { C as Card_title } from './card-title-CxxMmziD.js';
import { A as Avatar, a as Avatar_fallback } from './avatar-fallback-BVDrtls6.js';
import { A as Avatar_image } from './avatar-image-BuX3_Vs_.js';
import { B as Badge } from './badge-Dggzsmpe.js';
import { B as Button } from './button-Cg_QiDbD.js';
import { D as DataTable } from './DataTable-BFVnrE8w.js';
import { P as ProfileBadges, C as Calendar } from './ProfileBadges-BOQJ5w7t.js';
import './volume-settings-DX3g8058.js';
import { S as Skeleton } from './skeleton-BrIQmewN.js';
import { S as SEO } from './SEO-Cqzi3OcQ.js';
import { a as toast } from './Toaster.svelte_svelte_type_style_lang-CcrnaSIn.js';
import { g as goto } from './client-s_UYc3Sk.js';
import { U as USER_DATA } from './user-data-CT5kjyaY.js';
import { W as Wallet } from './wallet-DXbnVvxq.js';
import { T as Trending_up } from './trending-up-DbscwFys.js';
import { T as Trending_down } from './trending-down-DcTfhCCA.js';
import { C as Coins } from './coins-DVrva8oo.js';
import { A as Activity } from './activity-DwHC2T1s.js';
import { R as Receipt } from './receipt-DwxIpA0b.js';
import './index2-D4eROfHK.js';
import './clsx-ChV9xqsO.js';
import './create-id-Bxd404XN.js';
import './index-server-DH7p7JOq.js';
import './scroll-lock-BUIxTk31.js';
import './events-CF0F77H5.js';
import './index-opKo-a_0.js';
import './table-row-CGX-tSUb.js';
import './UserProfilePreview-DXQRal1C.js';
import './popper-layer-force-mount-BIcocscF.js';
import './mounted-Tbl-FfLm.js';
import './use-grace-area.svelte-Dsn6tMKF.js';
import './CoinIcon-76OONbK8.js';
import './Icon2-Bqt4BCIy.js';
import './star-BqzY1Axl.js';
import './hammer-DUPW_47m.js';
import './stores-Be-B7Xuq.js';
import './exports-Cv9LZeD1.js';

function ProfileSkeleton($$payload) {
  const each_array = ensure_array_like(Array(4));
  const each_array_1 = ensure_array_like(Array(4));
  Card($$payload, {
    class: "mb-6 py-0",
    children: ($$payload2) => {
      Card_content($$payload2, {
        class: "p-6",
        children: ($$payload3) => {
          $$payload3.out += `<div class="flex flex-col gap-4 sm:flex-row sm:items-start"><div class="flex-shrink-0">`;
          Skeleton($$payload3, {
            class: "size-16 rounded-full sm:size-20 md:size-24"
          });
          $$payload3.out += `<!----></div> <div class="min-w-0 flex-1"><div class="mb-3"><div class="mb-1 flex flex-wrap items-center gap-2">`;
          Skeleton($$payload3, { class: "h-6 w-32 sm:h-8 sm:w-48" });
          $$payload3.out += `<!----> `;
          Skeleton($$payload3, { class: "h-5 w-12 sm:h-6 sm:w-16" });
          $$payload3.out += `<!----></div> `;
          Skeleton($$payload3, { class: "h-5 w-24 sm:h-6 sm:w-32" });
          $$payload3.out += `<!----></div> `;
          Skeleton($$payload3, { class: "mb-3 h-4 w-full max-w-2xl" });
          $$payload3.out += `<!----> `;
          Skeleton($$payload3, { class: "mb-6 h-4 max-w-2xl" });
          $$payload3.out += `<!----> <div class="flex items-center gap-2">`;
          Skeleton($$payload3, { class: "h-4 w-4" });
          $$payload3.out += `<!----> `;
          Skeleton($$payload3, { class: "h-4 w-20 sm:w-24" });
          $$payload3.out += `<!----></div></div></div>`;
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    each_array[$$index];
    Card($$payload, {
      class: "py-0",
      children: ($$payload2) => {
        Card_content($$payload2, {
          class: "p-4",
          children: ($$payload3) => {
            $$payload3.out += `<div class="flex items-center justify-between">`;
            Skeleton($$payload3, { class: "h-4 w-20 sm:w-24" });
            $$payload3.out += `<!----> `;
            Skeleton($$payload3, { class: "h-4 w-4" });
            $$payload3.out += `<!----></div> `;
            Skeleton($$payload3, { class: "mt-1 h-6 w-24 sm:h-8 sm:w-32" });
            $$payload3.out += `<!----> `;
            Skeleton($$payload3, { class: "mt-1 h-3 w-16 sm:w-20" });
            $$payload3.out += `<!---->`;
          },
          $$slots: { default: true }
        });
      },
      $$slots: { default: true }
    });
  }
  $$payload.out += `<!--]--></div> <div class="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    each_array_1[$$index_1];
    Card($$payload, {
      class: "py-0",
      children: ($$payload2) => {
        Card_content($$payload2, {
          class: "p-4",
          children: ($$payload3) => {
            $$payload3.out += `<div class="flex items-center justify-between">`;
            Skeleton($$payload3, { class: "h-4 w-20 sm:w-24" });
            $$payload3.out += `<!----> `;
            Skeleton($$payload3, { class: "h-4 w-4" });
            $$payload3.out += `<!----></div> <div class="mt-1">`;
            Skeleton($$payload3, { class: "h-6 w-20 sm:h-8 sm:w-28" });
            $$payload3.out += `<!----> `;
            Skeleton($$payload3, { class: "mt-1 h-3 w-20 sm:w-24" });
            $$payload3.out += `<!----></div> <div class="border-muted mt-3 border-t pt-3">`;
            Skeleton($$payload3, { class: "h-5 w-16 sm:h-6 sm:w-24" });
            $$payload3.out += `<!----> `;
            Skeleton($$payload3, { class: "mt-1 h-3 w-16 sm:w-20" });
            $$payload3.out += `<!----></div>`;
          },
          $$slots: { default: true }
        });
      },
      $$slots: { default: true }
    });
  }
  $$payload.out += `<!--]--></div> `;
  Card($$payload, {
    class: "mb-6",
    children: ($$payload2) => {
      Card_header($$payload2, {
        class: "pb-3",
        children: ($$payload3) => {
          Card_title($$payload3, {
            class: "flex items-center gap-2",
            children: ($$payload4) => {
              Skeleton($$payload4, { class: "h-5 w-5" });
              $$payload4.out += `<!----> `;
              Skeleton($$payload4, { class: "h-5 w-24 sm:h-6 sm:w-32" });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Skeleton($$payload3, { class: "h-4 w-32 sm:w-48" });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Card_content($$payload2, {
        class: "p-0",
        children: ($$payload3) => {
          const each_array_2 = ensure_array_like(Array(3));
          $$payload3.out += `<div class="p-4 sm:p-6"><!--[-->`;
          for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
            each_array_2[$$index_2];
            $$payload3.out += `<div class="flex items-center gap-3 border-b py-3 last:border-b-0 sm:gap-4 sm:py-4">`;
            Skeleton($$payload3, { class: "h-6 w-6 rounded-full sm:h-8 sm:w-8" });
            $$payload3.out += `<!----> <div class="min-w-0 flex-1">`;
            Skeleton($$payload3, { class: "h-4 w-16 sm:w-24" });
            $$payload3.out += `<!----> `;
            Skeleton($$payload3, { class: "mt-1 h-3 w-12 sm:w-16" });
            $$payload3.out += `<!----></div> <div class="hidden sm:block">`;
            Skeleton($$payload3, { class: "h-4 w-16" });
            $$payload3.out += `<!----></div> <div class="hidden md:block">`;
            Skeleton($$payload3, { class: "h-4 w-20" });
            $$payload3.out += `<!----></div> `;
            Skeleton($$payload3, { class: "h-4 w-12 sm:w-16" });
            $$payload3.out += `<!----></div>`;
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
    children: ($$payload2) => {
      Card_header($$payload2, {
        class: "pb-3",
        children: ($$payload3) => {
          Card_title($$payload3, {
            class: "flex items-center gap-2",
            children: ($$payload4) => {
              Skeleton($$payload4, { class: "h-5 w-5" });
              $$payload4.out += `<!----> `;
              Skeleton($$payload4, { class: "h-5 w-32 sm:h-6 sm:w-40" });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Skeleton($$payload3, { class: "h-4 w-36 sm:w-52" });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Card_content($$payload2, {
        class: "p-0",
        children: ($$payload3) => {
          const each_array_3 = ensure_array_like(Array(5));
          $$payload3.out += `<div class="p-4 sm:p-6"><!--[-->`;
          for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
            each_array_3[$$index_3];
            $$payload3.out += `<div class="flex items-center gap-3 border-b py-3 last:border-b-0 sm:gap-4 sm:py-4">`;
            Skeleton($$payload3, { class: "h-5 w-10 sm:h-6 sm:w-12" });
            $$payload3.out += `<!----> `;
            Skeleton($$payload3, { class: "h-6 w-6 rounded-full sm:h-8 sm:w-8" });
            $$payload3.out += `<!----> <div class="min-w-0 flex-1">`;
            Skeleton($$payload3, { class: "h-4 w-16 sm:w-20" });
            $$payload3.out += `<!----> `;
            Skeleton($$payload3, { class: "mt-1 h-3 w-12 sm:w-16" });
            $$payload3.out += `<!----></div> <div class="hidden sm:block">`;
            Skeleton($$payload3, { class: "h-4 w-16" });
            $$payload3.out += `<!----></div> <div class="hidden md:block">`;
            Skeleton($$payload3, { class: "h-4 w-16" });
            $$payload3.out += `<!----></div> `;
            Skeleton($$payload3, { class: "h-4 w-16 sm:w-20" });
            $$payload3.out += `<!----></div>`;
          }
          $$payload3.out += `<!--]--></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let { data } = $$props;
  let username = data.username;
  let profileData = data.profileData;
  let recentTransactions = data.recentTransactions;
  let loading = false;
  store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA) && profileData?.profile && store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA).username === profileData.profile.username;
  async function fetchProfileData() {
    try {
      const response = await fetch(`/api/user/${username}`);
      if (response.ok) {
        profileData = await response.json();
        recentTransactions = profileData?.recentTransactions || [];
      } else {
        toast.error("Failed to load profile data");
      }
    } catch (e) {
      console.error("Failed to fetch profile data:", e);
      toast.error("Failed to load profile data");
    } finally {
      loading = false;
    }
  }
  let memberSince = profileData?.profile ? new Date(profileData.profile.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long" }) : "";
  let hasCreatedCoins = profileData?.createdCoins?.length ? profileData.createdCoins.length > 0 : false;
  let totalTradingVolume = profileData?.stats ? Number(profileData.stats.totalBuyVolume) + Number(profileData.stats.totalSellVolume) : 0;
  let buyPercentage = profileData?.stats && totalTradingVolume > 0 ? Number(profileData.stats.totalBuyVolume) / totalTradingVolume * 100 : 0;
  let sellPercentage = profileData?.stats && totalTradingVolume > 0 ? Number(profileData.stats.totalSellVolume) / totalTradingVolume * 100 : 0;
  let totalPortfolioValue = profileData?.stats?.totalPortfolioValue ? Number(profileData.stats.totalPortfolioValue) : 0;
  let baseCurrencyBalance = profileData?.stats?.baseCurrencyBalance ? Number(profileData.stats.baseCurrencyBalance) : 0;
  let holdingsValue = profileData?.stats?.holdingsValue ? Number(profileData.stats.holdingsValue) : 0;
  let totalBuyVolume = profileData?.stats?.totalBuyVolume ? Number(profileData.stats.totalBuyVolume) : 0;
  let totalSellVolume = profileData?.stats?.totalSellVolume ? Number(profileData.stats.totalSellVolume) : 0;
  let buyVolume24h = profileData?.stats?.buyVolume24h ? Number(profileData.stats.buyVolume24h) : 0;
  let sellVolume24h = profileData?.stats?.sellVolume24h ? Number(profileData.stats.sellVolume24h) : 0;
  let totalTradingVolumeAllTime = totalBuyVolume + totalSellVolume;
  let totalTradingVolume24h = buyVolume24h + sellVolume24h;
  const createdCoinsColumns = [
    {
      key: "coin",
      label: "Coin",
      class: "pl-6 font-medium",
      render: (value, row) => ({
        component: "coin",
        icon: row.icon,
        symbol: row.symbol,
        name: row.name
      })
    },
    {
      key: "currentPrice",
      label: "Price",
      class: "font-mono",
      render: (value) => `$${formatPrice(parseFloat(value))}`
    },
    {
      key: "marketCap",
      label: "Market Cap",
      class: "hidden font-mono sm:table-cell",
      render: (value) => formatValue(parseFloat(value))
    },
    {
      key: "change24h",
      label: "24h Change",
      class: "hidden md:table-cell",
      render: (value) => ({
        component: "badge",
        variant: parseFloat(value) >= 0 ? "success" : "destructive",
        text: `${parseFloat(value) >= 0 ? "+" : ""}${parseFloat(value).toFixed(2)}%`
      })
    },
    {
      key: "createdAt",
      label: "Created",
      class: "text-muted-foreground hidden text-sm lg:table-cell",
      render: (value) => formatDate(value)
    }
  ];
  const transactionsColumns = [
    {
      key: "type",
      label: "Type",
      class: "w-[12%] min-w-[60px] md:w-[8%] pl-6",
      render: (value, row) => {
        if (value === "TRANSFER_IN" || value === "TRANSFER_OUT") {
          return {
            component: "badge",
            variant: "default",
            text: value === "TRANSFER_IN" ? "Received" : "Sent",
            class: "text-xs"
          };
        }
        if (row.isTransfer) {
          return {
            component: "badge",
            variant: "default",
            text: row.isIncoming ? "Received" : "Sent",
            class: "text-xs"
          };
        }
        return {
          component: "badge",
          variant: value === "BUY" ? "success" : "destructive",
          text: value === "BUY" ? "Buy" : "Sell",
          class: "text-xs"
        };
      }
    },
    {
      key: "coin",
      label: "Coin",
      class: "w-[20%] min-w-[100px] md:w-[12%]",
      render: (value, row) => {
        if (row.isTransfer) {
          if (row.isCoinTransfer && row.coin) {
            return {
              component: "coin",
              icon: row.coin.icon,
              symbol: row.coin.symbol,
              name: `*${row.coin.symbol}`,
              size: 4
            };
          }
          return { component: "text", text: "-" };
        }
        if (row.type === "TRANSFER_IN" || row.type === "TRANSFER_OUT") {
          if (row.coinSymbol && Number(row.quantity) > 0) {
            return {
              component: "coin",
              icon: row.coinIcon,
              symbol: row.coinSymbol,
              name: `*${row.coinSymbol}`,
              size: 4
            };
          }
          return { component: "text", text: "-" };
        }
        return {
          component: "coin",
          icon: row.coinIcon || row.coin?.icon,
          symbol: row.coinSymbol || row.coin?.symbol,
          name: `*${row.coinSymbol || row.coin?.symbol}`,
          size: 4
        };
      }
    },
    {
      key: "sender",
      label: "Sender",
      class: "w-[12%] min-w-[70px] md:w-[10%]",
      render: (value, row) => {
        if (row.isTransfer) {
          return {
            component: "text",
            text: row.sender || "Unknown",
            class: row.sender && row.sender !== "Unknown" ? "font-medium" : "text-muted-foreground"
          };
        }
        if (row.type === "TRANSFER_IN" || row.type === "TRANSFER_OUT") {
          return {
            component: "text",
            text: row.senderUsername || "Unknown",
            class: row.senderUsername ? "font-medium" : "text-muted-foreground"
          };
        }
        return {
          component: "text",
          text: "-",
          class: "text-muted-foreground"
        };
      }
    },
    {
      key: "recipient",
      label: "Receiver",
      class: "w-[12%] min-w-[70px] md:w-[10%]",
      render: (value, row) => {
        if (row.isTransfer) {
          return {
            component: "text",
            text: row.recipient || "Unknown",
            class: row.recipient && row.recipient !== "Unknown" ? "font-medium" : "text-muted-foreground"
          };
        }
        if (row.type === "TRANSFER_IN" || row.type === "TRANSFER_OUT") {
          return {
            component: "text",
            text: row.recipientUsername || "Unknown",
            class: row.recipientUsername ? "font-medium" : "text-muted-foreground"
          };
        }
        return {
          component: "text",
          text: "-",
          class: "text-muted-foreground"
        };
      }
    },
    {
      key: "quantity",
      label: "Quantity",
      class: "w-[12%] min-w-[70px] md:w-[10%] font-mono text-sm",
      render: (value, row) => {
        if (row.isTransfer && value === 0 || (row.type === "TRANSFER_IN" || row.type === "TRANSFER_OUT") && value === 0) {
          return "-";
        }
        return formatQuantity(parseFloat(value));
      }
    },
    {
      key: "totalBaseCurrencyAmount",
      label: "Amount",
      class: "w-[12%] min-w-[70px] md:w-[10%] font-mono text-sm font-medium",
      render: (value) => formatValue(parseFloat(value))
    },
    {
      key: "timestamp",
      label: "Date",
      class: "hidden md:table-cell md:w-[18%] text-muted-foreground text-sm",
      render: (value) => formatDate(value)
    }
  ];
  SEO($$payload, {
    title: profileData?.profile?.name ? `${profileData.profile.name} (@${profileData.profile.username}) - Rugplay` : `@${username} - Rugplay`,
    description: profileData?.profile?.bio ? `${profileData.profile.bio} - View ${profileData.profile.name}'s simulated trading activity and virtual portfolio in the Rugplay cryptocurrency simulation game.` : `View @${username}'s profile and simulated trading activity in Rugplay - cryptocurrency trading simulation game platform.`,
    type: "profile",
    image: profileData?.profile?.image ? getPublicUrl(profileData.profile.image) : "/apple-touch-icon.png",
    imageAlt: profileData?.profile?.name ? `${profileData.profile.name}'s profile picture` : `@${username}'s profile`,
    keywords: "crypto trader profile game, virtual trading portfolio, cryptocurrency simulation game, user portfolio simulator",
    twitterCard: "summary"
  });
  $$payload.out += `<!----> <div class="container mx-auto max-w-6xl p-6">`;
  if (loading) {
    $$payload.out += "<!--[-->";
    ProfileSkeleton($$payload);
  } else if (!profileData) {
    $$payload.out += "<!--[1-->";
    $$payload.out += `<div class="flex h-96 items-center justify-center"><div class="text-center"><div class="text-muted-foreground mb-4 text-xl">Failed to load profile</div> `;
    Button($$payload, {
      onclick: fetchProfileData,
      children: ($$payload2) => {
        $$payload2.out += `<!---->Try Again`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<!---->`;
    Card($$payload, {
      class: "mb-6 py-0",
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        Card_content($$payload2, {
          class: "p-6",
          children: ($$payload3) => {
            $$payload3.out += `<div class="flex flex-col gap-4 sm:flex-row sm:items-start"><div class="flex-shrink-0"><!---->`;
            Avatar($$payload3, {
              class: "size-20 sm:size-24",
              children: ($$payload4) => {
                $$payload4.out += `<!---->`;
                Avatar_image($$payload4, {
                  src: getPublicUrl(profileData.profile.image),
                  alt: profileData.profile.name
                });
                $$payload4.out += `<!----> <!---->`;
                Avatar_fallback($$payload4, {
                  class: "text-xl",
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->${escape_html(profileData.profile.name.charAt(0).toUpperCase())}`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----></div> <div class="min-w-0 flex-1"><div class="mb-3"><div class="mb-1 flex flex-wrap items-center gap-2"><h1 class="text-2xl font-bold sm:text-3xl">${escape_html(profileData.profile.name)}</h1> `;
            ProfileBadges($$payload3, { user: profileData.profile });
            $$payload3.out += `<!----></div> <p class="text-muted-foreground text-lg">@${escape_html(profileData.profile.username)}</p></div> `;
            if (profileData.profile.bio) {
              $$payload3.out += "<!--[-->";
              $$payload3.out += `<p class="text-muted-foreground mb-3 max-w-2xl leading-relaxed">${escape_html(profileData.profile.bio)}</p>`;
            } else {
              $$payload3.out += "<!--[!-->";
            }
            $$payload3.out += `<!--]--> <div class="text-muted-foreground flex items-center gap-2 text-sm">`;
            Calendar($$payload3, { class: "h-4 w-4" });
            $$payload3.out += `<!----> <span>Joined ${escape_html(memberSince)}</span></div></div></div>`;
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----> <div class="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"><!---->`;
    Card($$payload, {
      class: "py-0",
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        Card_content($$payload2, {
          class: "p-4",
          children: ($$payload3) => {
            $$payload3.out += `<div class="flex items-center justify-between"><div class="text-muted-foreground text-sm font-medium">Total Portfolio</div> `;
            Wallet($$payload3, { class: "text-muted-foreground h-4 w-4" });
            $$payload3.out += `<!----></div> <div class="mt-1 text-2xl font-bold">${escape_html(formatValue(totalPortfolioValue))}</div> <p class="text-muted-foreground text-xs">${escape_html(profileData.stats.holdingsCount)} holdings</p>`;
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----> <!---->`;
    Card($$payload, {
      class: "py-0",
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        Card_content($$payload2, {
          class: "p-4",
          children: ($$payload3) => {
            $$payload3.out += `<div class="flex items-center justify-between"><div class="text-muted-foreground text-sm font-medium">Liquid Value</div></div> <div class="text-success mt-1 text-2xl font-bold">${escape_html(formatValue(baseCurrencyBalance))}</div> <p class="text-muted-foreground text-xs">Available cash</p>`;
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----> <!---->`;
    Card($$payload, {
      class: "py-0",
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        Card_content($$payload2, {
          class: "p-4",
          children: ($$payload3) => {
            $$payload3.out += `<div class="flex items-center justify-between"><div class="text-muted-foreground text-sm font-medium">Illiquid Value</div></div> <div class="text-success mt-1 text-2xl font-bold">${escape_html(formatValue(holdingsValue))}</div> <p class="text-muted-foreground text-xs">Coin holdings</p>`;
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----> <!---->`;
    Card($$payload, {
      class: "py-0",
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        Card_content($$payload2, {
          class: "p-4",
          children: ($$payload3) => {
            $$payload3.out += `<div class="flex items-center justify-between"><div class="text-muted-foreground text-sm font-medium">Buy/Sell Ratio</div> <div class="flex gap-1"><div class="bg-success h-2 w-2 rounded-full"></div> <div class="h-2 w-2 rounded-full bg-red-500"></div></div></div> <div class="mt-1 flex items-center gap-2"><span class="text-success text-xl font-bold">${escape_html(buyPercentage.toFixed(1))}%</span> <span class="text-muted-foreground text-xs">buy</span> <span class="text-xl font-bold text-red-600">${escape_html(sellPercentage.toFixed(1))}%</span> <span class="text-muted-foreground text-xs">sell</span></div>`;
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----></div> <div class="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-4"><!---->`;
    Card($$payload, {
      class: "py-0",
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        Card_content($$payload2, {
          class: "p-4",
          children: ($$payload3) => {
            $$payload3.out += `<div class="flex items-center justify-between"><div class="text-foreground text-sm font-medium">Buy Activity</div> `;
            Trending_up($$payload3, { class: "text-success h-4 w-4" });
            $$payload3.out += `<!----></div> <div class="mt-1"><div class="text-success text-2xl font-bold">${escape_html(formatValue(totalBuyVolume))}</div> <div class="text-muted-foreground text-xs">Total amount spent</div></div> <div class="border-muted mt-3 border-t pt-3"><div class="text-success text-lg font-bold">${escape_html(formatValue(buyVolume24h))}</div> <div class="text-muted-foreground text-xs">24h buy volume</div></div>`;
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----> <!---->`;
    Card($$payload, {
      class: "py-0",
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        Card_content($$payload2, {
          class: "p-4",
          children: ($$payload3) => {
            $$payload3.out += `<div class="flex items-center justify-between"><div class="text-foreground text-sm font-medium">Sell Activity</div> `;
            Trending_down($$payload3, { class: "h-4 w-4 text-red-600" });
            $$payload3.out += `<!----></div> <div class="mt-1"><div class="text-2xl font-bold text-red-600">${escape_html(formatValue(totalSellVolume))}</div> <div class="text-muted-foreground text-xs">Total amount received</div></div> <div class="border-muted mt-3 border-t pt-3"><div class="text-lg font-bold text-red-600">${escape_html(formatValue(sellVolume24h))}</div> <div class="text-muted-foreground text-xs">24h sell volume</div></div>`;
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----> <!---->`;
    Card($$payload, {
      class: "py-0",
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        Card_content($$payload2, {
          class: "p-4",
          children: ($$payload3) => {
            $$payload3.out += `<div class="flex items-center justify-between"><div class="text-muted-foreground text-sm font-medium">Total Trading Volume</div> `;
            Badge($$payload3, {
              variant: "outline",
              class: "text-xs",
              children: ($$payload4) => {
                $$payload4.out += `<!---->All Time`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----></div> <div class="mt-1 text-2xl font-bold">${escape_html(formatValue(totalTradingVolumeAllTime))}</div> <div class="text-muted-foreground text-xs">${escape_html(profileData.stats.totalTransactions)} total trades</div>`;
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----> <!---->`;
    Card($$payload, {
      class: "py-0",
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        Card_content($$payload2, {
          class: "p-4",
          children: ($$payload3) => {
            $$payload3.out += `<div class="flex items-center justify-between"><div class="text-muted-foreground text-sm font-medium">24h Trading Volume</div> `;
            Badge($$payload3, {
              variant: "outline",
              class: "text-xs",
              children: ($$payload4) => {
                $$payload4.out += `<!---->24h`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----></div> <div class="mt-1 text-2xl font-bold">${escape_html(formatValue(totalTradingVolume24h))}</div> <div class="text-muted-foreground text-xs">${escape_html(profileData.stats.transactions24h || 0)} trades today</div>`;
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----></div> `;
    if (hasCreatedCoins) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<!---->`;
      Card($$payload, {
        class: "mb-6",
        children: ($$payload2) => {
          $$payload2.out += `<!---->`;
          Card_header($$payload2, {
            class: "pb-3",
            children: ($$payload3) => {
              $$payload3.out += `<!---->`;
              Card_title($$payload3, {
                class: "flex items-center gap-2",
                children: ($$payload4) => {
                  Coins($$payload4, { class: "h-5 w-5" });
                  $$payload4.out += `<!----> Created Coins (${escape_html(profileData.createdCoins.length)})`;
                },
                $$slots: { default: true }
              });
              $$payload3.out += `<!----> <!---->`;
              Card_description($$payload3, {
                children: ($$payload4) => {
                  $$payload4.out += `<!---->Coins launched by ${escape_html(profileData.profile.name)}`;
                },
                $$slots: { default: true }
              });
              $$payload3.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload2.out += `<!----> <!---->`;
          Card_content($$payload2, {
            class: "p-0",
            children: ($$payload3) => {
              DataTable($$payload3, {
                columns: createdCoinsColumns,
                data: profileData.createdCoins,
                onRowClick: (coin) => goto(`/coin/${coin.symbol}`)
              });
            },
            $$slots: { default: true }
          });
          $$payload2.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <!---->`;
    Card($$payload, {
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        Card_header($$payload2, {
          class: "pb-3",
          children: ($$payload3) => {
            $$payload3.out += `<!---->`;
            Card_title($$payload3, {
              class: "flex items-center gap-2",
              children: ($$payload4) => {
                Activity($$payload4, { class: "h-5 w-5" });
                $$payload4.out += `<!----> Recent Trading Activity`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> <!---->`;
            Card_description($$payload3, {
              children: ($$payload4) => {
                $$payload4.out += `<!---->Latest transactions by ${escape_html(profileData.profile.name)}`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!---->`;
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!----> <!---->`;
        Card_content($$payload2, {
          class: "p-0",
          children: ($$payload3) => {
            DataTable($$payload3, {
              columns: transactionsColumns,
              data: recentTransactions,
              emptyIcon: Receipt,
              emptyTitle: "No recent activity",
              emptyDescription: "This user hasn't made any trades yet."
            });
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!--]--></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-B1UzUlCa.js.map
