import { p as push, q as copy_payload, t as assign_payload, a as pop, e as ensure_array_like, m as escape_html, u as store_get, v as unsubscribe_stores } from './index3-CthgjPPi.js';
import { C as Card } from './card-23nZlDN1.js';
import { C as Card_content } from './card-content-Nxnnhqv4.js';
import { n as formatPrice, o as formatMarketCap, m as formatRelativeTime } from './utils2-CLIgW4-x.js';
import { C as Card_header } from './card-header-CuTABeMH.js';
import { R as Root, P as Popover_trigger, a as Popover_content, b as Pagination, S as Sliders_horizontal, c as Pagination_content, d as Pagination_item, e as Pagination_prev_button, f as Pagination_ellipsis, g as Pagination_link, h as Pagination_next_button } from './pagination-ellipsis-CR9l1Dd_.js';
import { R as Root$1, S as Select_trigger, a as Select_content, b as Select_group, c as Select_item } from './index7-CPsQHBY3.js';
import { I as Input } from './input-BZy6dM-O.js';
import { B as Button } from './button-Cg_QiDbD.js';
import { B as Badge } from './badge-Dggzsmpe.js';
import { L as Label } from './label-CxNim4GD.js';
import { C as CoinIcon } from './CoinIcon-76OONbK8.js';
import './volume-settings-DX3g8058.js';
import { S as Skeleton } from './skeleton-BrIQmewN.js';
import { M as MediaQuery } from './index-server-DH7p7JOq.js';
import { S as SEO } from './SEO-Cqzi3OcQ.js';
import { a as toast } from './Toaster.svelte_svelte_type_style_lang-CcrnaSIn.js';
import { g as goto } from './client-s_UYc3Sk.js';
import { p as page } from './stores-Be-B7Xuq.js';
import { S as Search, R as Refresh_cw } from './search-CCix4b2M.js';
import { C as Chevron_left } from './chevron-left-Cefe-Bo5.js';
import { C as Chevron_right } from './chevron-right-BZJYVhmO.js';
import './index2-D4eROfHK.js';
import './clsx-ChV9xqsO.js';
import './Icon2-Bqt4BCIy.js';
import './scroll-lock-BUIxTk31.js';
import './create-id-Bxd404XN.js';
import './events-CF0F77H5.js';
import './popper-layer-force-mount-BIcocscF.js';
import './mounted-Tbl-FfLm.js';
import './Icon-DETra0Ze.js';
import './get-directional-keys-C2SqNJng.js';
import './use-dom-typeahead.svelte-_8fvw_os.js';
import './index-opKo-a_0.js';
import './exports-Cv9LZeD1.js';

function MarketSkeleton($$payload, $$props) {
  push();
  const isDesktop = new MediaQuery("(min-width: 768px)");
  let perPage = isDesktop.current ? 12 : 9;
  const each_array = ensure_array_like(Array(perPage));
  $$payload.out += `<div class="mb-4 flex items-center justify-between">`;
  Skeleton($$payload, { class: "h-5 w-48" });
  $$payload.out += `<!----> `;
  Skeleton($$payload, { class: "h-5 w-24" });
  $$payload.out += `<!----></div> <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    each_array[$$index];
    $$payload.out += `<!---->`;
    Card($$payload, {
      class: "gap-1",
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        Card_header($$payload2, {
          children: ($$payload3) => {
            $$payload3.out += `<div class="flex items-start justify-between"><div class="flex items-center gap-3">`;
            Skeleton($$payload3, { class: "h-8 w-8 rounded-full" });
            $$payload3.out += `<!----> <div>`;
            Skeleton($$payload3, { class: "mb-1 h-5 w-24" });
            $$payload3.out += `<!----> `;
            Skeleton($$payload3, { class: "h-4 w-16" });
            $$payload3.out += `<!----></div></div> <div class="text-right">`;
            Skeleton($$payload3, { class: "h-3 w-8" });
            $$payload3.out += `<!----></div></div>`;
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!----> <!---->`;
        Card_content($$payload2, {
          children: ($$payload3) => {
            $$payload3.out += `<div class="space-y-3"><div>`;
            Skeleton($$payload3, { class: "mb-2 h-8 w-24" });
            $$payload3.out += `<!----> <div class="mt-1 flex items-center gap-2">`;
            Skeleton($$payload3, { class: "h-5 w-12" });
            $$payload3.out += `<!----> `;
            Skeleton($$payload3, { class: "h-5 w-16" });
            $$payload3.out += `<!----></div></div> <div class="space-y-4 text-sm"><div class="flex justify-between">`;
            Skeleton($$payload3, { class: "h-4 w-16" });
            $$payload3.out += `<!----> `;
            Skeleton($$payload3, { class: "h-4 w-12" });
            $$payload3.out += `<!----></div> <div class="flex justify-between">`;
            Skeleton($$payload3, { class: "h-4 w-20" });
            $$payload3.out += `<!----> `;
            Skeleton($$payload3, { class: "h-4 w-12" });
            $$payload3.out += `<!----></div> <div class="flex justify-between">`;
            Skeleton($$payload3, { class: "h-4 w-12" });
            $$payload3.out += `<!----> `;
            Skeleton($$payload3, { class: "h-4 w-16" });
            $$payload3.out += `<!----></div></div></div>`;
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
  pop();
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let { data } = $$props;
  let coins = [];
  let totalCount = 0;
  let loading = true;
  let searchQuery = data.filters.searchQuery;
  let sortBy = data.filters.sortBy;
  let sortOrder = data.filters.sortOrder;
  let priceFilter = data.filters.priceFilter;
  let changeFilter = data.filters.changeFilter;
  let showFilterPopover = false;
  let currentPage = data.filters.page;
  const isDesktop = new MediaQuery("(min-width: 768px)");
  let perPage = isDesktop.current ? 12 : 9;
  let siblingCount = isDesktop.current ? 1 : 0;
  const priceFilterOptions = [
    { value: "all", label: "All prices" },
    { value: "under1", label: "Under $1" },
    { value: "1to10", label: "$1 - $10" },
    { value: "10to100", label: "$10 - $100" },
    { value: "over100", label: "Over $100" }
  ];
  const changeFilterOptions = [
    { value: "all", label: "All changes" },
    { value: "gainers", label: "Gainers only" },
    { value: "losers", label: "Losers only" },
    { value: "hot", label: "Hot (±10%)" },
    { value: "wild", label: "Wild (±50%)" }
  ];
  const sortOrderOptions = [
    { value: "desc", label: "High to Low" },
    { value: "asc", label: "Low to High" }
  ];
  data.filters.searchQuery;
  function updateURL() {
    const url = new URL(store_get($$store_subs ??= {}, "$page", page).url);
    if (searchQuery) {
      url.searchParams.set("search", searchQuery);
    } else {
      url.searchParams.delete("search");
    }
    if (sortBy !== "marketCap") {
      url.searchParams.set("sortBy", sortBy);
    } else {
      url.searchParams.delete("sortBy");
    }
    if (sortOrder !== "desc") {
      url.searchParams.set("sortOrder", sortOrder);
    } else {
      url.searchParams.delete("sortOrder");
    }
    if (priceFilter !== "all") {
      url.searchParams.set("priceFilter", priceFilter);
    } else {
      url.searchParams.delete("priceFilter");
    }
    if (changeFilter !== "all") {
      url.searchParams.set("changeFilter", changeFilter);
    } else {
      url.searchParams.delete("changeFilter");
    }
    if (currentPage !== 1) {
      url.searchParams.set("page", currentPage.toString());
    } else {
      url.searchParams.delete("page");
    }
    goto(url.toString(), {});
  }
  async function fetchMarketData() {
    loading = true;
    try {
      const params = new URLSearchParams({
        search: searchQuery,
        sortBy,
        sortOrder,
        priceFilter,
        changeFilter,
        page: currentPage.toString(),
        limit: perPage.toString()
      });
      const response = await fetch(`/api/market?${params}`);
      if (response.ok) {
        const result = await response.json();
        coins = result.coins;
        totalCount = result.total;
      } else {
        toast.error("Failed to load market data");
      }
    } catch (e) {
      console.error("Failed to fetch market data:", e);
      toast.error("Failed to load market data");
    } finally {
      loading = false;
    }
  }
  function updateSearchUrl() {
    updateURL();
  }
  function handleSearchKeydown(event) {
    if (event.key === "Enter") {
      updateSearchUrl();
    }
  }
  function handleSortChange(newSortBy) {
    if (sortBy === newSortBy) {
      sortOrder = sortOrder === "asc" ? "desc" : "asc";
    } else {
      sortBy = newSortBy;
      sortOrder = "desc";
    }
    currentPage = 1;
    updateURL();
    fetchMarketData();
  }
  function handleSortOrderChange() {
    currentPage = 1;
    updateURL();
    fetchMarketData();
  }
  function handlePriceFilterChange() {
    currentPage = 1;
    updateURL();
    fetchMarketData();
  }
  function handleChangeFilterChange() {
    currentPage = 1;
    updateURL();
    fetchMarketData();
  }
  function resetFilters() {
    searchQuery = "";
    sortBy = "marketCap";
    sortOrder = "desc";
    priceFilter = "all";
    changeFilter = "all";
    currentPage = 1;
    goto("/market", {});
    fetchMarketData();
    showFilterPopover = false;
  }
  function applyFilters() {
    currentPage = 1;
    updateURL();
    fetchMarketData();
    showFilterPopover = false;
  }
  function getVolatilityBadge(change) {
    const absChange = Math.abs(change);
    if (absChange > 50) return { text: "🚀 WILD", variant: "default" };
    if (absChange > 20) return { text: "📈 HOT", variant: "secondary" };
    if (absChange > 10) return { text: "⚡ ACTIVE", variant: "outline" };
    return null;
  }
  let hasActiveFilters = searchQuery !== "" || priceFilter !== "all" || changeFilter !== "all" || sortBy !== "marketCap" || sortOrder !== "desc";
  let totalPages = Math.ceil(totalCount / perPage);
  let startIndex = (currentPage - 1) * perPage + 1;
  let endIndex = Math.min(currentPage * perPage, totalCount);
  function handlePageChange(page2) {
    currentPage = page2;
    updateURL();
    fetchMarketData();
  }
  let currentPriceFilterLabel = priceFilterOptions.find((option) => option.value === priceFilter)?.label || "All prices";
  let currentChangeFilterLabel = changeFilterOptions.find((option) => option.value === changeFilter)?.label || "All changes";
  let currentSortOrderLabel = sortOrderOptions.find((option) => option.value === sortOrder)?.label || "High to Low";
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    SEO($$payload2, {
      title: "Market - Rugplay",
      description: "Discover and trade virtual cryptocurrencies in our simulation game. Browse all available simulated coins, filter by price and performance, and more.",
      keywords: "virtual cryptocurrency market, crypto trading game, coin discovery simulation, market analysis game, trading practice"
    });
    $$payload2.out += `<!----> <div class="container mx-auto max-w-7xl p-6"><header class="mb-8"><div class="text-center"><h1 class="mb-2 text-3xl font-bold">Market</h1> <p class="text-muted-foreground mb-6">Discover coins, track performance, and find your next investment</p> <div class="mx-auto flex max-w-2xl items-center justify-center gap-2"><div class="relative flex-1">`;
    Search($$payload2, {
      class: "text-muted-foreground absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2"
    });
    $$payload2.out += `<!----> `;
    Input($$payload2, {
      placeholder: "Search coins by name or symbol...",
      class: "pl-10 pr-4",
      onblur: updateSearchUrl,
      onkeydown: handleSearchKeydown,
      get value() {
        return searchQuery;
      },
      set value($$value) {
        searchQuery = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----></div> <!---->`;
    Root($$payload2, {
      get open() {
        return showFilterPopover;
      },
      set open($$value) {
        showFilterPopover = $$value;
        $$settled = false;
      },
      children: ($$payload3) => {
        $$payload3.out += `<!---->`;
        Popover_trigger($$payload3, {
          children: ($$payload4) => {
            Button($$payload4, {
              variant: "outline",
              size: "default",
              class: "flex items-center gap-2",
              children: ($$payload5) => {
                Sliders_horizontal($$payload5, { class: "h-4 w-4" });
                $$payload5.out += `<!----> Filters `;
                if (hasActiveFilters) {
                  $$payload5.out += "<!--[-->";
                  Badge($$payload5, {
                    variant: "secondary",
                    class: "h-5 w-5 rounded-full p-0 text-xs",
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->•`;
                    },
                    $$slots: { default: true }
                  });
                } else {
                  $$payload5.out += "<!--[!-->";
                }
                $$payload5.out += `<!--]-->`;
              },
              $$slots: { default: true }
            });
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> <!---->`;
        Popover_content($$payload3, {
          class: "w-80 p-4",
          align: "end",
          children: ($$payload4) => {
            $$payload4.out += `<div class="space-y-4"><div class="space-y-2">`;
            Label($$payload4, {
              class: "text-sm font-medium",
              children: ($$payload5) => {
                $$payload5.out += `<!---->Sort By`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> <div class="grid grid-cols-2 gap-2">`;
            Button($$payload4, {
              variant: sortBy === "marketCap" ? "default" : "outline",
              size: "sm",
              onclick: () => handleSortChange("marketCap"),
              children: ($$payload5) => {
                $$payload5.out += `<!---->Market Cap`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Button($$payload4, {
              variant: sortBy === "currentPrice" ? "default" : "outline",
              size: "sm",
              onclick: () => handleSortChange("currentPrice"),
              children: ($$payload5) => {
                $$payload5.out += `<!---->Price`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Button($$payload4, {
              variant: sortBy === "change24h" ? "default" : "outline",
              size: "sm",
              onclick: () => handleSortChange("change24h"),
              children: ($$payload5) => {
                $$payload5.out += `<!---->24h Change`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Button($$payload4, {
              variant: sortBy === "volume24h" ? "default" : "outline",
              size: "sm",
              onclick: () => handleSortChange("volume24h"),
              children: ($$payload5) => {
                $$payload5.out += `<!---->Volume`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----></div></div> <div class="space-y-2">`;
            Label($$payload4, {
              class: "text-sm font-medium",
              children: ($$payload5) => {
                $$payload5.out += `<!---->Sort Order`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> <!---->`;
            Root$1($$payload4, {
              type: "single",
              onValueChange: handleSortOrderChange,
              get value() {
                return sortOrder;
              },
              set value($$value) {
                sortOrder = $$value;
                $$settled = false;
              },
              children: ($$payload5) => {
                $$payload5.out += `<!---->`;
                Select_trigger($$payload5, {
                  class: "w-full",
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->${escape_html(currentSortOrderLabel)}`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!----> <!---->`;
                Select_content($$payload5, {
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->`;
                    Select_group($$payload6, {
                      children: ($$payload7) => {
                        const each_array = ensure_array_like(sortOrderOptions);
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
            $$payload4.out += `<!----></div> <div class="space-y-2">`;
            Label($$payload4, {
              class: "text-sm font-medium",
              children: ($$payload5) => {
                $$payload5.out += `<!---->Price Range`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> <!---->`;
            Root$1($$payload4, {
              type: "single",
              onValueChange: handlePriceFilterChange,
              get value() {
                return priceFilter;
              },
              set value($$value) {
                priceFilter = $$value;
                $$settled = false;
              },
              children: ($$payload5) => {
                $$payload5.out += `<!---->`;
                Select_trigger($$payload5, {
                  class: "w-full",
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->${escape_html(currentPriceFilterLabel)}`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!----> <!---->`;
                Select_content($$payload5, {
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->`;
                    Select_group($$payload6, {
                      children: ($$payload7) => {
                        const each_array_1 = ensure_array_like(priceFilterOptions);
                        $$payload7.out += `<!--[-->`;
                        for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
                          let option = each_array_1[$$index_1];
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
            $$payload4.out += `<!----></div> <div class="space-y-2">`;
            Label($$payload4, {
              class: "text-sm font-medium",
              children: ($$payload5) => {
                $$payload5.out += `<!---->24h Change`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> <!---->`;
            Root$1($$payload4, {
              type: "single",
              onValueChange: handleChangeFilterChange,
              get value() {
                return changeFilter;
              },
              set value($$value) {
                changeFilter = $$value;
                $$settled = false;
              },
              children: ($$payload5) => {
                $$payload5.out += `<!---->`;
                Select_trigger($$payload5, {
                  class: "w-full",
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->${escape_html(currentChangeFilterLabel)}`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!----> <!---->`;
                Select_content($$payload5, {
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->`;
                    Select_group($$payload6, {
                      children: ($$payload7) => {
                        const each_array_2 = ensure_array_like(changeFilterOptions);
                        $$payload7.out += `<!--[-->`;
                        for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
                          let option = each_array_2[$$index_2];
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
            $$payload4.out += `<!----></div> <div class="flex gap-2 pt-2">`;
            Button($$payload4, {
              variant: "outline",
              size: "sm",
              onclick: resetFilters,
              class: "flex-1",
              children: ($$payload5) => {
                $$payload5.out += `<!---->Reset`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Button($$payload4, {
              size: "sm",
              onclick: applyFilters,
              class: "flex-1",
              children: ($$payload5) => {
                $$payload5.out += `<!---->Apply`;
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
    $$payload2.out += `<!----> `;
    Button($$payload2, {
      variant: "outline",
      size: "default",
      onclick: fetchMarketData,
      disabled: loading,
      children: ($$payload3) => {
        Refresh_cw($$payload3, { class: "h-4 w-4" });
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----></div></div></header> `;
    if (!loading && totalCount > 0) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<div class="mb-4 flex items-center justify-between"><div class="text-muted-foreground text-sm">Showing ${escape_html(startIndex)}-${escape_html(endIndex)} of ${escape_html(totalCount)} coins</div> `;
      if (hasActiveFilters) {
        $$payload2.out += "<!--[-->";
        Button($$payload2, {
          variant: "link",
          size: "sm",
          onclick: resetFilters,
          class: "h-auto p-0",
          children: ($$payload3) => {
            $$payload3.out += `<!---->Clear all filters`;
          },
          $$slots: { default: true }
        });
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--></div>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (loading) {
      $$payload2.out += "<!--[-->";
      MarketSkeleton($$payload2);
    } else if (coins.length === 0) {
      $$payload2.out += "<!--[1-->";
      $$payload2.out += `<div class="flex h-96 items-center justify-center"><div class="text-center"><div class="mb-4 text-xl">No coins found</div> <div class="text-muted-foreground mb-4">`;
      if (searchQuery) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `No coins match your search "${escape_html(searchQuery)}". Try different keywords or adjust filters.`;
      } else {
        $$payload2.out += "<!--[!-->";
        $$payload2.out += `The market seems quiet... <a href="/coin/create" class="text-primary underline">create a coin</a>? :)`;
      }
      $$payload2.out += `<!--]--></div> `;
      if (hasActiveFilters) {
        $$payload2.out += "<!--[-->";
        Button($$payload2, {
          variant: "outline",
          onclick: resetFilters,
          children: ($$payload3) => {
            $$payload3.out += `<!---->Clear all filters`;
          },
          $$slots: { default: true }
        });
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--></div></div>`;
    } else {
      $$payload2.out += "<!--[!-->";
      const each_array_3 = ensure_array_like(coins);
      $$payload2.out += `<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"><!--[-->`;
      for (let index = 0, $$length = each_array_3.length; index < $$length; index++) {
        let coin = each_array_3[index];
        const volatilityBadge = getVolatilityBadge(coin.change24h);
        const globalIndex = (currentPage - 1) * perPage + index + 1;
        $$payload2.out += `<!---->`;
        Card($$payload2, {
          class: "group cursor-pointer gap-1 transition-all duration-200 hover:shadow-lg",
          onclick: () => goto(`/coin/${coin.symbol}`),
          children: ($$payload3) => {
            $$payload3.out += `<!---->`;
            Card_header($$payload3, {
              children: ($$payload4) => {
                $$payload4.out += `<div class="flex items-start justify-between"><div class="flex items-center gap-3">`;
                CoinIcon($$payload4, {
                  icon: coin.icon,
                  symbol: coin.symbol,
                  size: 8
                });
                $$payload4.out += `<!----> <div><h3 class="truncate max-w-44 text-lg font-semibold leading-tight">${escape_html(coin.name)}</h3> <p class="text-muted-foreground truncate text-sm">*${escape_html(coin.symbol)}</p></div></div> <div class="text-right"><span class="text-muted-foreground font-mono text-xs">#${escape_html(globalIndex)}</span></div></div>`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> <!---->`;
            Card_content($$payload3, {
              children: ($$payload4) => {
                $$payload4.out += `<div class="space-y-3"><div><div class="font-mono text-2xl font-bold">$${escape_html(formatPrice(coin.currentPrice))}</div> <div class="mt-1 flex items-center gap-2">`;
                Badge($$payload4, {
                  variant: coin.change24h >= 0 ? "success" : "destructive",
                  class: "text-xs",
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->${escape_html(coin.change24h >= 0 ? "+" : "")}${escape_html(coin.change24h.toFixed(2))}%`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----> `;
                if (volatilityBadge) {
                  $$payload4.out += "<!--[-->";
                  Badge($$payload4, {
                    variant: volatilityBadge.variant,
                    class: "text-xs",
                    children: ($$payload5) => {
                      $$payload5.out += `<!---->${escape_html(volatilityBadge.text)}`;
                    },
                    $$slots: { default: true }
                  });
                } else {
                  $$payload4.out += "<!--[!-->";
                }
                $$payload4.out += `<!--]--></div></div> <div class="space-y-2 text-sm"><div class="flex justify-between"><span class="text-muted-foreground">Market Cap</span> <span class="font-mono">${escape_html(formatMarketCap(coin.marketCap))}</span></div> <div class="flex justify-between"><span class="text-muted-foreground">Volume (24h)</span> <span class="font-mono">${escape_html(formatMarketCap(coin.volume24h))}</span></div> <div class="flex justify-between"><span class="text-muted-foreground">Created</span> <span class="text-xs">${escape_html(formatRelativeTime(coin.createdAt))}</span></div></div></div>`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!---->`;
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!---->`;
      }
      $$payload2.out += `<!--]--></div> `;
      if (totalPages > 1) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<div class="mt-8 flex justify-center"><!---->`;
        {
          let children = function($$payload3, { pages, currentPage: paginationCurrentPage }) {
            $$payload3.out += `<!---->`;
            Pagination_content($$payload3, {
              children: ($$payload4) => {
                const each_array_4 = ensure_array_like(pages);
                $$payload4.out += `<!---->`;
                Pagination_item($$payload4, {
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->`;
                    Pagination_prev_button($$payload5, {
                      children: ($$payload6) => {
                        Chevron_left($$payload6, { class: "h-4 w-4" });
                        $$payload6.out += `<!----> <span class="hidden sm:block">Previous</span>`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload5.out += `<!---->`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----> <!--[-->`;
                for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
                  let page2 = each_array_4[$$index_4];
                  if (page2.type === "ellipsis") {
                    $$payload4.out += "<!--[-->";
                    $$payload4.out += `<!---->`;
                    Pagination_item($$payload4, {
                      children: ($$payload5) => {
                        $$payload5.out += `<!---->`;
                        Pagination_ellipsis($$payload5, {});
                        $$payload5.out += `<!---->`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload4.out += `<!---->`;
                  } else {
                    $$payload4.out += "<!--[!-->";
                    $$payload4.out += `<!---->`;
                    Pagination_item($$payload4, {
                      children: ($$payload5) => {
                        $$payload5.out += `<!---->`;
                        Pagination_link($$payload5, {
                          page: page2,
                          isActive: paginationCurrentPage === page2.value,
                          children: ($$payload6) => {
                            $$payload6.out += `<!---->${escape_html(page2.value)}`;
                          },
                          $$slots: { default: true }
                        });
                        $$payload5.out += `<!---->`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload4.out += `<!---->`;
                  }
                  $$payload4.out += `<!--]-->`;
                }
                $$payload4.out += `<!--]--> <!---->`;
                Pagination_item($$payload4, {
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->`;
                    Pagination_next_button($$payload5, {
                      children: ($$payload6) => {
                        $$payload6.out += `<span class="hidden sm:block">Next</span> `;
                        Chevron_right($$payload6, { class: "h-4 w-4" });
                        $$payload6.out += `<!---->`;
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
          };
          Pagination($$payload2, {
            count: totalCount,
            perPage,
            siblingCount,
            page: currentPage,
            onPageChange: handlePageChange,
            children,
            $$slots: { default: true }
          });
        }
        $$payload2.out += `<!----></div>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]-->`;
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
//# sourceMappingURL=_page.svelte-G7H77OLw.js.map
