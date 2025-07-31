import { p as push, q as copy_payload, t as assign_payload, a as pop, e as ensure_array_like, w as sanitize_props, b as spread_props, x as slot, m as escape_html } from './index3-CthgjPPi.js';
import { C as Card } from './card-23nZlDN1.js';
import { C as Card_content } from './card-content-Nxnnhqv4.js';
import { C as Card_description } from './card-description-BhiVZbL9.js';
import { b as getPublicUrl, f as formatValue } from './utils2-CLIgW4-x.js';
import { C as Card_header } from './card-header-CuTABeMH.js';
import { C as Card_title } from './card-title-CxxMmziD.js';
import { B as Button } from './button-Cg_QiDbD.js';
import { D as DataTable } from './DataTable-BFVnrE8w.js';
import './volume-settings-DX3g8058.js';
import { S as Skeleton } from './skeleton-BrIQmewN.js';
import { S as SEO } from './SEO-Cqzi3OcQ.js';
import { a as toast } from './Toaster.svelte_svelte_type_style_lang-CcrnaSIn.js';
import { g as goto } from './client-s_UYc3Sk.js';
import { I as Input } from './input-BZy6dM-O.js';
import { A as Avatar, a as Avatar_fallback } from './avatar-fallback-BVDrtls6.js';
import { A as Avatar_image } from './avatar-image-BuX3_Vs_.js';
import './badge-Dggzsmpe.js';
import { P as ProfileBadges, C as Calendar } from './ProfileBadges-BOQJ5w7t.js';
import { S as Search, R as Refresh_cw } from './search-CCix4b2M.js';
import { X } from './x-BILdrmxj.js';
import { W as Wallet } from './wallet-DXbnVvxq.js';
import { I as Icon } from './Icon2-Bqt4BCIy.js';
import { T as Trending_down } from './trending-down-DcTfhCCA.js';
import { C as Crown } from './crown-D4s6aR5T.js';
import { T as Trophy, a as Target } from './trophy-37PUKEsG.js';
import './index2-D4eROfHK.js';
import './clsx-ChV9xqsO.js';
import './index-opKo-a_0.js';
import './table-row-CGX-tSUb.js';
import './UserProfilePreview-DXQRal1C.js';
import './scroll-lock-BUIxTk31.js';
import './create-id-Bxd404XN.js';
import './index-server-DH7p7JOq.js';
import './events-CF0F77H5.js';
import './popper-layer-force-mount-BIcocscF.js';
import './mounted-Tbl-FfLm.js';
import './use-grace-area.svelte-Dsn6tMKF.js';
import './CoinIcon-76OONbK8.js';
import './stores-Be-B7Xuq.js';
import './exports-Cv9LZeD1.js';
import './star-BqzY1Axl.js';
import './hammer-DUPW_47m.js';

function Skull($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "m12.5 17-.5-1-.5 1h1z" }],
    [
      "path",
      {
        "d": "M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z"
      }
    ],
    [
      "circle",
      { "cx": "15", "cy": "12", "r": "1" }
    ],
    ["circle", { "cx": "9", "cy": "12", "r": "1" }]
  ];
  Icon($$payload, spread_props([
    { name: "skull" },
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
function LeaderboardSkeleton($$payload) {
  const each_array = ensure_array_like(Array(4));
  $$payload.out += `<div class="grid gap-4 md:gap-6 xl:grid-cols-2"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    each_array[$$index_1];
    Card($$payload, {
      class: "overflow-hidden",
      children: ($$payload2) => {
        Card_header($$payload2, {
          class: "pb-3 md:pb-4",
          children: ($$payload3) => {
            Card_title($$payload3, {
              class: "flex items-center gap-2",
              children: ($$payload4) => {
                Skeleton($$payload4, { class: "h-5 w-5 md:h-6 md:w-6" });
                $$payload4.out += `<!----> `;
                Skeleton($$payload4, { class: "h-5 w-32 md:h-6 md:w-40" });
                $$payload4.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> `;
            Card_description($$payload3, {
              children: ($$payload4) => {
                Skeleton($$payload4, { class: "h-3 w-48 md:h-4 md:w-64" });
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!---->`;
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!----> `;
        Card_content($$payload2, {
          class: "p-3 pt-0 md:p-6 md:pt-0",
          children: ($$payload3) => {
            const each_array_1 = ensure_array_like(Array(5));
            $$payload3.out += `<div class="space-y-3 md:space-y-4"><!--[-->`;
            for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
              each_array_1[$$index];
              $$payload3.out += `<div class="flex items-center gap-2 border-b pb-3 last:border-b-0 md:gap-4 md:pb-4">`;
              Skeleton($$payload3, { class: "h-5 w-6 md:h-6 md:w-8" });
              $$payload3.out += `<!----> `;
              Skeleton($$payload3, { class: "h-6 w-6 rounded-full md:h-8 md:w-8" });
              $$payload3.out += `<!----> <div class="flex-1 min-w-0">`;
              Skeleton($$payload3, { class: "h-3 w-16 md:h-4 md:w-24" });
              $$payload3.out += `<!----> `;
              Skeleton($$payload3, { class: "mt-1 h-2 w-12 md:h-3 md:w-16" });
              $$payload3.out += `<!----></div> `;
              Skeleton($$payload3, { class: "h-3 w-12 md:h-4 md:w-20" });
              $$payload3.out += `<!----> `;
              Skeleton($$payload3, { class: "h-4 w-12 md:h-5 md:w-16" });
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
  }
  $$payload.out += `<!--]--></div>`;
}
function LeaderboardSearchSkeleton($$payload) {
  const each_array = ensure_array_like(Array(9));
  $$payload.out += `<div class="grid gap-4 md:gap-6 xl:grid-cols-2"><div class="flex flex-col xl:col-span-2"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    each_array[$$index];
    Card($$payload, {
      class: "gap-1",
      children: ($$payload2) => {
        Card_content($$payload2, {
          children: ($$payload3) => {
            $$payload3.out += `<div class="flex items-start gap-4">`;
            Skeleton($$payload3, { class: "h-12 w-12 rounded-full shrink-0" });
            $$payload3.out += `<!----> <div class="flex flex-col flex-grow gap-2">`;
            Skeleton($$payload3, { class: "h-4 w-32 md:h-4 md:w-40" });
            $$payload3.out += `<!----> `;
            Skeleton($$payload3, { class: "h-4 w-20 md:h-4 md:w-24" });
            $$payload3.out += `<!----> <div class="flex flex-col gap-1 mt-2"><div class="flex items-center justify-between">`;
            Skeleton($$payload3, { class: "h-3 w-16 md:h-3 md:w-20" });
            $$payload3.out += `<!----> `;
            Skeleton($$payload3, { class: "h-4 w-16 md:h-4 md:w-20" });
            $$payload3.out += `<!----></div> <div class="flex items-center justify-between">`;
            Skeleton($$payload3, { class: "h-3 w-12 md:h-3 md:w-16" });
            $$payload3.out += `<!----> `;
            Skeleton($$payload3, { class: "h-4 w-16 md:h-4 md:w-20" });
            $$payload3.out += `<!----></div></div> <div class="flex items-center gap-2 mt-2">`;
            Skeleton($$payload3, { class: "h-4 w-4" });
            $$payload3.out += `<!----> `;
            Skeleton($$payload3, { class: "h-3 w-24 md:h-3 md:w-32" });
            $$payload3.out += `<!----></div></div></div>`;
          },
          $$slots: { default: true }
        });
      },
      $$slots: { default: true }
    });
  }
  $$payload.out += `<!--]--></div></div></div>`;
}
function _page($$payload, $$props) {
  push();
  let searchOffset = 0;
  let searchQuery = "";
  let searchQueryValue = "";
  let searchQueryTimeout = null;
  let leaderboardData = null;
  let loading = true;
  function handleSearchKeydown(event) {
    if (!/^[a-zA-Z0-9]$/.test(event.key) && event.key !== "Enter") {
      return;
    }
    if (searchQueryTimeout) {
      clearTimeout(searchQueryTimeout);
    }
    if (event.key === "Enter") {
      searchQueryValue = searchQuery;
      fetchLeaderboardData();
      return;
    }
    searchQueryTimeout = setTimeout(
      () => {
        searchQueryValue = searchQuery;
        fetchLeaderboardData();
      },
      500
    );
  }
  async function fetchLeaderboardData(offset = 0) {
    loading = true;
    try {
      const response = await fetch(`/api/leaderboard?search=${searchQueryValue}&offset=${offset}`);
      if (response.ok) {
        leaderboardData = await response.json();
      } else {
        toast.error("Failed to load leaderboard data");
      }
    } catch (e) {
      console.error("Failed to fetch leaderboard data:", e);
      toast.error("Failed to load leaderboard data");
    } finally {
      loading = false;
    }
  }
  function getRankIcon(index) {
    switch (index) {
      case 0:
        return { icon: Crown, color: "text-yellow-500" };
      case 1:
        return { icon: Trophy, color: "text-gray-400" };
      case 2:
        return { icon: Trophy, color: "text-orange-600" };
      default:
        return { icon: Target, color: "text-muted-foreground" };
    }
  }
  function getLiquidityWarning(liquidityRatio) {
    if (liquidityRatio < 0.1) return {
      text: "90%+ illiquid",
      color: "text-destructive"
    };
    if (liquidityRatio < 0.3) return {
      text: "70%+ illiquid",
      color: "text-orange-600"
    };
    if (liquidityRatio < 0.5) return {
      text: "50%+ illiquid",
      color: "text-yellow-600"
    };
    return { text: "Mostly liquid", color: "text-success" };
  }
  const rugpullersColumns = [
    {
      key: "rank",
      label: "Rank",
      render: (value, row, index) => {
        const rankInfo = getRankIcon(index);
        return {
          component: "rank",
          icon: rankInfo.icon,
          color: rankInfo.color,
          number: index + 1
        };
      }
    },
    {
      key: "user",
      label: "User",
      render: (value, row) => ({
        component: "user",
        image: row.image,
        name: row.name,
        username: row.username
      })
    },
    {
      key: "totalExtracted",
      label: "Profit",
      class: "text-success font-mono text-sm font-bold",
      render: (value) => formatValue(value)
    }
  ];
  const losersColumns = [
    {
      key: "rank",
      label: "Rank",
      render: (value, row, index) => {
        const rankInfo = getRankIcon(index);
        return {
          component: "rank",
          icon: rankInfo.icon,
          color: rankInfo.color,
          number: index + 1
        };
      }
    },
    {
      key: "user",
      label: "User",
      render: (value, row) => ({
        component: "user",
        image: row.image,
        name: row.name,
        username: row.username
      })
    },
    {
      key: "totalLoss",
      label: "Loss",
      class: "text-destructive font-mono text-sm font-bold",
      render: (value) => `-${formatValue(value)}`
    }
  ];
  const cashKingsColumns = [
    {
      key: "rank",
      label: "Rank",
      render: (value, row, index) => {
        const rankInfo = getRankIcon(index);
        return {
          component: "rank",
          icon: rankInfo.icon,
          color: rankInfo.color,
          number: index + 1
        };
      }
    },
    {
      key: "user",
      label: "User",
      render: (value, row) => ({
        component: "user",
        image: row.image,
        name: row.name,
        username: row.username
      })
    },
    {
      key: "baseCurrencyBalance",
      label: "Cash",
      class: "text-success font-mono text-sm font-bold",
      render: (value) => formatValue(value)
    }
  ];
  const millionairesColumns = [
    {
      key: "rank",
      label: "Rank",
      render: (value, row, index) => {
        const rankInfo = getRankIcon(index);
        return {
          component: "rank",
          icon: rankInfo.icon,
          color: rankInfo.color,
          number: index + 1
        };
      }
    },
    {
      key: "user",
      label: "User",
      render: (value, row) => ({
        component: "user",
        image: row.image,
        name: row.name,
        username: row.username
      })
    },
    {
      key: "totalPortfolioValue",
      label: "Portfolio",
      class: "text-success font-mono text-sm font-bold",
      render: (value) => formatValue(value)
    },
    {
      key: "liquidityRatio",
      label: "Liquidity",
      render: (value) => {
        const info = getLiquidityWarning(value);
        return {
          component: "badge",
          variant: "secondary",
          class: `text-xs ${info.color}`,
          text: info.text
        };
      }
    }
  ];
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    SEO($$payload2, {
      title: "Leaderboard - Rugplay",
      description: "View top performers in the Rugplay cryptocurrency simulation game. See rankings for biggest profits, losses, cash holders, and portfolio values in our virtual trading game.",
      keywords: "crypto game leaderboard, trading simulation rankings, virtual portfolio rankings, crypto game winners"
    });
    $$payload2.out += `<!----> <div class="container mx-auto max-w-7xl p-4 md:p-6"><header class="mb-6 md:mb-8"><div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div><h1 class="text-2xl font-bold md:text-3xl">Leaderboard</h1> <p class="text-muted-foreground text-sm md:text-base">Top performers and market activity</p></div> <div class="flex items-center gap-4"><div class="relative flex flex-grow items-center">`;
    Search($$payload2, {
      size: 16,
      class: "pointer-events-none absolute left-3"
    });
    $$payload2.out += `<!----> `;
    Input($$payload2, {
      type: "text",
      placeholder: "Search by username...",
      class: "flex-grow pl-10",
      onkeydown: handleSearchKeydown,
      get value() {
        return searchQuery;
      },
      set value($$value) {
        searchQuery = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----></div> `;
    if (searchQueryValue) {
      $$payload2.out += "<!--[-->";
      Button($$payload2, {
        variant: "outline",
        onclick: () => {
          searchQuery = "";
          searchQueryValue = "";
          fetchLeaderboardData();
        },
        disabled: loading,
        class: "w-fit",
        children: ($$payload3) => {
          X($$payload3, { class: "h-4 w-4" });
        },
        $$slots: { default: true }
      });
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    Button($$payload2, {
      variant: "outline",
      onclick: () => fetchLeaderboardData(searchOffset),
      disabled: loading,
      class: "w-fit",
      children: ($$payload3) => {
        Refresh_cw($$payload3, { class: "h-4 w-4" });
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----></div></div></header> `;
    if (loading) {
      $$payload2.out += "<!--[-->";
      if (searchQueryValue) {
        $$payload2.out += "<!--[-->";
        LeaderboardSearchSkeleton($$payload2);
      } else {
        $$payload2.out += "<!--[!-->";
        LeaderboardSkeleton($$payload2);
      }
      $$payload2.out += `<!--]-->`;
    } else if (!leaderboardData) {
      $$payload2.out += "<!--[1-->";
      $$payload2.out += `<div class="flex h-96 items-center justify-center"><div class="text-center"><div class="text-muted-foreground mb-4 text-lg md:text-xl">Failed to load leaderboard</div> `;
      Button($$payload2, {
        onclick: () => fetchLeaderboardData(),
        children: ($$payload3) => {
          $$payload3.out += `<!---->Try Again`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div></div>`;
    } else {
      $$payload2.out += "<!--[!-->";
      $$payload2.out += `<div class="grid gap-4 md:gap-6 xl:grid-cols-2">`;
      if (searchQueryValue) {
        $$payload2.out += "<!--[-->";
        if (leaderboardData.results.length > 0) {
          $$payload2.out += "<!--[-->";
          const each_array = ensure_array_like(leaderboardData.results);
          const each_array_1 = ensure_array_like(Array(Math.ceil(leaderboardData.total / 9)));
          $$payload2.out += `<div class="flex flex-col xl:col-span-2"><div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"><!--[-->`;
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let user = each_array[$$index];
            $$payload2.out += `<!---->`;
            Card($$payload2, {
              class: "hover:bg-muted/50 cursor-pointer gap-1 transition duration-200",
              onclick: () => goto(`/user/${user.username}`),
              children: ($$payload3) => {
                $$payload3.out += `<!---->`;
                Card_content($$payload3, {
                  children: ($$payload4) => {
                    $$payload4.out += `<div class="flex items-start gap-4"><!---->`;
                    Avatar($$payload4, {
                      class: "h-12 w-12 shrink-0",
                      children: ($$payload5) => {
                        $$payload5.out += `<!---->`;
                        Avatar_image($$payload5, {
                          src: getPublicUrl(user.image),
                          alt: user.name
                        });
                        $$payload5.out += `<!----> <!---->`;
                        Avatar_fallback($$payload5, {
                          class: "text-sm",
                          children: ($$payload6) => {
                            $$payload6.out += `<!---->${escape_html(user.name?.charAt(0) || "?")}`;
                          },
                          $$slots: { default: true }
                        });
                        $$payload5.out += `<!---->`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload4.out += `<!----> <div class="flex flex-grow flex-col"><div class="flex items-center gap-2"><h4 class="max-w-[150px] truncate text-sm font-semibold sm:max-w-[200px]">${escape_html(user.name)}</h4> `;
                    ProfileBadges($$payload4, { user, showId: true, size: "sm" });
                    $$payload4.out += `<!----></div> <p class="text-muted-foreground text-sm">@${escape_html(user.username)}</p> <div class="mt-2 flex flex-col gap-1"><div class="flex items-center justify-between"><span class="text-muted-foreground flex items-center gap-2 text-xs">`;
                    Wallet($$payload4, { class: "h-3 w-3" });
                    $$payload4.out += `<!----> Portfolio</span> <span class="font-mono text-sm font-medium">${escape_html(formatValue(user.totalPortfolioValue))}</span></div> <div class="flex items-center justify-between"><span class="text-muted-foreground flex items-center gap-2 text-xs">`;
                    Wallet($$payload4, { class: "h-3 w-3" });
                    $$payload4.out += `<!----> Cash</span> <span class="text-success font-mono text-sm font-medium">${escape_html(formatValue(user.baseCurrencyBalance))}</span></div></div> <div class="mt-2 flex items-center gap-2">`;
                    Calendar($$payload4, { class: "text-muted-foreground h-4 w-4" });
                    $$payload4.out += `<!----> <p class="text-muted-foreground text-xs">Joined ${escape_html(new Date(user.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long" }))}</p></div></div></div>`;
                  },
                  $$slots: { default: true }
                });
                $$payload3.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload2.out += `<!---->`;
          }
          $$payload2.out += `<!--]--></div></div> <div class="flex flex-col items-center justify-between gap-2 lg:flex-row xl:col-span-2"><h2 class="text-muted-foreground text-sm">Showing ${escape_html(1 + searchOffset)} - ${escape_html(Math.min(leaderboardData.results.length, 9) + searchOffset)} of ${escape_html(leaderboardData.total)} results</h2> <div class="flex w-full flex-grow items-center justify-center gap-2 overflow-x-auto lg:w-auto lg:justify-end"><!--[-->`;
          for (let index = 0, $$length = each_array_1.length; index < $$length; index++) {
            each_array_1[index];
            Button($$payload2, {
              variant: searchOffset === index * 9 ? "outline" : "ghost",
              onclick: () => {
                if (searchOffset === index * 9) return;
                if (index * 9 > leaderboardData.total) return;
                searchOffset = index * 9;
                fetchLeaderboardData(searchOffset);
              },
              children: ($$payload3) => {
                $$payload3.out += `<h2 class="text-sm">${escape_html(index + 1)}</h2>`;
              },
              $$slots: { default: true }
            });
          }
          $$payload2.out += `<!--]--></div></div>`;
        } else {
          $$payload2.out += "<!--[!-->";
          $$payload2.out += `<div class="flex h-60 flex-col items-center justify-center xl:col-span-2"><h2 class="mb-4 text-xl">No users found</h2> <p class="text-muted-foreground mb-4 text-sm md:text-base">No users match your search "${escape_html(searchQueryValue)}"</p> `;
          Button($$payload2, {
            variant: "outline",
            onclick: () => {
              searchQuery = "";
              searchQueryValue = "";
              fetchLeaderboardData();
            },
            children: ($$payload3) => {
              $$payload3.out += `<h2 class="text-sm">Clear search</h2>`;
            },
            $$slots: { default: true }
          });
          $$payload2.out += `<!----></div>`;
        }
        $$payload2.out += `<!--]-->`;
      } else {
        $$payload2.out += "<!--[!-->";
        $$payload2.out += `<!---->`;
        Card($$payload2, {
          class: "overflow-hidden",
          children: ($$payload3) => {
            $$payload3.out += `<!---->`;
            Card_header($$payload3, {
              class: "pb-3 md:pb-4",
              children: ($$payload4) => {
                $$payload4.out += `<!---->`;
                Card_title($$payload4, {
                  class: "flex items-center gap-2 text-lg text-red-600 md:text-xl",
                  children: ($$payload5) => {
                    Skull($$payload5, { class: "h-5 w-5 md:h-6 md:w-6" });
                    $$payload5.out += `<!----> <span class="truncate">Top Rugpullers (24h)</span>`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----> <!---->`;
                Card_description($$payload4, {
                  class: "text-xs md:text-sm",
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->Users who made the most profit from selling coins today`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> <!---->`;
            Card_content($$payload3, {
              class: "p-3 pt-0 md:p-6 md:pt-0",
              children: ($$payload4) => {
                DataTable($$payload4, {
                  columns: rugpullersColumns,
                  data: leaderboardData.topRugpullers,
                  onRowClick: (user) => goto(`/user/${user.userUsername || user.username}`),
                  emptyMessage: "No major profits recorded today",
                  enableUserPreview: true
                });
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!---->`;
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!----> <!---->`;
        Card($$payload2, {
          class: "overflow-hidden",
          children: ($$payload3) => {
            $$payload3.out += `<!---->`;
            Card_header($$payload3, {
              class: "pb-3 md:pb-4",
              children: ($$payload4) => {
                $$payload4.out += `<!---->`;
                Card_title($$payload4, {
                  class: "flex items-center gap-2 text-lg text-orange-600 md:text-xl",
                  children: ($$payload5) => {
                    Trending_down($$payload5, { class: "h-5 w-5 md:h-6 md:w-6" });
                    $$payload5.out += `<!----> <span class="truncate">Biggest Losses (24h)</span>`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----> <!---->`;
                Card_description($$payload4, {
                  class: "text-xs md:text-sm",
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->Users who experienced the largest losses today`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> <!---->`;
            Card_content($$payload3, {
              class: "p-3 pt-0 md:p-6 md:pt-0",
              children: ($$payload4) => {
                DataTable($$payload4, {
                  columns: losersColumns,
                  data: leaderboardData.biggestLosers,
                  onRowClick: (user) => goto(`/user/${user.userUsername || user.username}`),
                  emptyMessage: "No major losses recorded today",
                  enableUserPreview: true
                });
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!---->`;
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!----> <!---->`;
        Card($$payload2, {
          class: "overflow-hidden",
          children: ($$payload3) => {
            $$payload3.out += `<!---->`;
            Card_header($$payload3, {
              class: "pb-3 md:pb-4",
              children: ($$payload4) => {
                $$payload4.out += `<!---->`;
                Card_title($$payload4, {
                  class: "flex items-center gap-2 text-lg text-green-600 md:text-xl",
                  children: ($$payload5) => {
                    Crown($$payload5, { class: "h-5 w-5 md:h-6 md:w-6" });
                    $$payload5.out += `<!----> <span class="truncate">Top Cash Holders</span>`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----> <!---->`;
                Card_description($$payload4, {
                  class: "text-xs md:text-sm",
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->Users with the highest liquid cash balances`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> <!---->`;
            Card_content($$payload3, {
              class: "p-3 pt-0 md:p-6 md:pt-0",
              children: ($$payload4) => {
                DataTable($$payload4, {
                  columns: cashKingsColumns,
                  data: leaderboardData.cashKings,
                  onRowClick: (user) => goto(`/user/${user.userUsername || user.username}`),
                  emptyMessage: "Everyone's invested! 💸",
                  enableUserPreview: true
                });
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!---->`;
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!----> <!---->`;
        Card($$payload2, {
          class: "overflow-hidden",
          children: ($$payload3) => {
            $$payload3.out += `<!---->`;
            Card_header($$payload3, {
              class: "pb-3 md:pb-4",
              children: ($$payload4) => {
                $$payload4.out += `<!---->`;
                Card_title($$payload4, {
                  class: "flex items-center gap-2 text-lg text-cyan-600 md:text-xl",
                  children: ($$payload5) => {
                    Trophy($$payload5, { class: "h-5 w-5 md:h-6 md:w-6" });
                    $$payload5.out += `<!----> <span class="truncate">Highest Portfolio Values</span>`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----> <!---->`;
                Card_description($$payload4, {
                  class: "text-xs md:text-sm",
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->Users with the largest total portfolio valuations (including illiquid)`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> <!---->`;
            Card_content($$payload3, {
              class: "p-3 pt-0 md:p-6 md:pt-0",
              children: ($$payload4) => {
                DataTable($$payload4, {
                  columns: millionairesColumns,
                  data: leaderboardData.paperMillionaires,
                  onRowClick: (user) => goto(`/user/${user.userUsername || user.username}`),
                  emptyMessage: "No large portfolios yet! 📉",
                  enableUserPreview: true
                });
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!---->`;
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!---->`;
      }
      $$payload2.out += `<!--]--></div>`;
    }
    $$payload2.out += `<!--]--></div>`;
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
//# sourceMappingURL=_page.svelte-C5bS424M.js.map
