import { p as push, u as store_get, q as copy_payload, t as assign_payload, v as unsubscribe_stores, a as pop, m as escape_html, e as ensure_array_like } from './index3-CthgjPPi.js';
import { C as Card } from './card-23nZlDN1.js';
import { C as Card_content } from './card-content-Nxnnhqv4.js';
import { C as Card_description } from './card-description-BhiVZbL9.js';
import { u as formatDate, l as formatQuantity, n as formatPrice, f as formatValue } from './utils2-CLIgW4-x.js';
import { C as Card_header } from './card-header-CuTABeMH.js';
import { C as Card_title } from './card-title-CxxMmziD.js';
import { R as Root, P as Popover_trigger, S as Sliders_horizontal, a as Popover_content, b as Pagination, c as Pagination_content, d as Pagination_item, e as Pagination_prev_button, f as Pagination_ellipsis, g as Pagination_link, h as Pagination_next_button } from './pagination-ellipsis-CR9l1Dd_.js';
import { R as Root$1, S as Select_trigger, a as Select_content, b as Select_group, c as Select_item } from './index7-CPsQHBY3.js';
import { I as Input } from './input-BZy6dM-O.js';
import { B as Button } from './button-Cg_QiDbD.js';
import { B as Badge } from './badge-Dggzsmpe.js';
import { L as Label } from './label-CxNim4GD.js';
import { D as DataTable } from './DataTable-BFVnrE8w.js';
import { S as SEO } from './SEO-Cqzi3OcQ.js';
import { a as toast } from './Toaster.svelte_svelte_type_style_lang-CcrnaSIn.js';
import { M as MediaQuery } from './index-server-DH7p7JOq.js';
import { g as goto } from './client-s_UYc3Sk.js';
import { p as page } from './stores-Be-B7Xuq.js';
import { S as Search, R as Refresh_cw } from './search-CCix4b2M.js';
import { R as Receipt } from './receipt-DwxIpA0b.js';
import { C as Chevron_left } from './chevron-left-Cefe-Bo5.js';
import { C as Chevron_right } from './chevron-right-BZJYVhmO.js';
import './index2-D4eROfHK.js';
import './clsx-ChV9xqsO.js';
import './volume-settings-DX3g8058.js';
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
import './table-row-CGX-tSUb.js';
import './avatar-fallback-BVDrtls6.js';
import './avatar-image-BuX3_Vs_.js';
import './UserProfilePreview-DXQRal1C.js';
import './use-grace-area.svelte-Dsn6tMKF.js';
import './skeleton-BrIQmewN.js';
import './CoinIcon-76OONbK8.js';
import './exports-Cv9LZeD1.js';

function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let transactions = [];
  let totalCount = 0;
  let loading = true;
  let searchQuery = store_get($$store_subs ??= {}, "$page", page).url.searchParams.get("search") || "";
  let typeFilter = store_get($$store_subs ??= {}, "$page", page).url.searchParams.get("type") || "all";
  let sortBy = store_get($$store_subs ??= {}, "$page", page).url.searchParams.get("sortBy") || "timestamp";
  let sortOrder = store_get($$store_subs ??= {}, "$page", page).url.searchParams.get("sortOrder") || "desc";
  let showFilterPopover = false;
  let currentPage = parseInt(store_get($$store_subs ??= {}, "$page", page).url.searchParams.get("page") || "1");
  const isDesktop = new MediaQuery("(min-width: 768px)");
  let perPage = isDesktop.current ? 20 : 15;
  let siblingCount = isDesktop.current ? 1 : 0;
  const typeFilterOptions = [
    { value: "all", label: "All transactions" },
    { value: "BUY", label: "Buys only" },
    { value: "SELL", label: "Sells only" },
    {
      value: "TRANSFER_IN",
      label: "Received transfers"
    },
    {
      value: "TRANSFER_OUT",
      label: "Sent transfers"
    }
  ];
  const sortOrderOptions = [
    { value: "desc", label: "Newest first" },
    { value: "asc", label: "Oldest first" }
  ];
  function updateURL() {
    const url = new URL(store_get($$store_subs ??= {}, "$page", page).url);
    if (searchQuery) {
      url.searchParams.set("search", searchQuery);
    } else {
      url.searchParams.delete("search");
    }
    if (typeFilter !== "all") {
      url.searchParams.set("type", typeFilter);
    } else {
      url.searchParams.delete("type");
    }
    if (sortBy !== "timestamp") {
      url.searchParams.set("sortBy", sortBy);
    } else {
      url.searchParams.delete("sortBy");
    }
    if (sortOrder !== "desc") {
      url.searchParams.set("sortOrder", sortOrder);
    } else {
      url.searchParams.delete("sortOrder");
    }
    if (currentPage !== 1) {
      url.searchParams.set("page", currentPage.toString());
    } else {
      url.searchParams.delete("page");
    }
    goto(url.toString(), {});
  }
  async function fetchTransactions() {
    loading = true;
    try {
      const params = new URLSearchParams({
        search: searchQuery,
        type: typeFilter,
        sortBy,
        sortOrder,
        page: currentPage.toString(),
        limit: perPage.toString()
      });
      const response = await fetch(`/api/transactions?${params}`);
      if (response.ok) {
        const result = await response.json();
        transactions = result.transactions;
        totalCount = result.total;
      } else {
        toast.error("Failed to load transactions");
      }
    } catch (e) {
      console.error("Failed to fetch transactions:", e);
      toast.error("Failed to load transactions");
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
      sortOrder = newSortBy === "timestamp" ? "desc" : "desc";
    }
    currentPage = 1;
    updateURL();
    fetchTransactions();
  }
  function handleTypeFilterChange() {
    currentPage = 1;
    updateURL();
    fetchTransactions();
  }
  function handleSortOrderChange() {
    currentPage = 1;
    updateURL();
    fetchTransactions();
  }
  function resetFilters() {
    searchQuery = "";
    typeFilter = "all";
    sortBy = "timestamp";
    sortOrder = "desc";
    currentPage = 1;
    goto("/transactions", {});
    fetchTransactions();
    showFilterPopover = false;
  }
  function applyFilters() {
    currentPage = 1;
    updateURL();
    fetchTransactions();
    showFilterPopover = false;
  }
  let hasActiveFilters = searchQuery !== "" || typeFilter !== "all" || sortBy !== "timestamp" || sortOrder !== "desc";
  let totalPages = Math.ceil(totalCount / perPage);
  let startIndex = (currentPage - 1) * perPage + 1;
  let endIndex = Math.min(currentPage * perPage, totalCount);
  function handlePageChange(page2) {
    currentPage = page2;
    updateURL();
    fetchTransactions();
  }
  let currentTypeFilterLabel = typeFilterOptions.find((option) => option.value === typeFilter)?.label || "All transactions";
  let currentSortOrderLabel = sortOrderOptions.find((option) => option.value === sortOrder)?.label || "Newest first";
  let transactionsColumns = [
    {
      key: "type",
      label: "Type",
      class: "w-[10%] min-w-[80px]",
      render: (value, row) => {
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
      label: "Asset",
      class: "w-[20%] min-w-[120px]",
      render: (value, row) => {
        if (row.isTransfer) {
          if (row.isCoinTransfer && row.coin) {
            return {
              component: "coin",
              icon: row.coin.icon,
              symbol: row.coin.symbol,
              name: `*${row.coin.symbol}`,
              size: 6
            };
          }
          return {
            component: "text",
            text: "Cash ($)",
            class: "font-medium"
          };
        }
        return {
          component: "coin",
          icon: row.coin.icon,
          symbol: row.coin.symbol,
          name: `*${row.coin.symbol}`,
          size: 6
        };
      }
    },
    {
      key: "sender",
      label: "Sender",
      class: "w-[12%] min-w-[80px]",
      render: (value, row) => ({
        component: "text",
        text: row.isTransfer ? row.sender || "Unknown" : "-",
        class: row.isTransfer && row.sender && row.sender !== "Unknown" ? "font-medium" : "text-muted-foreground"
      })
    },
    {
      key: "recipient",
      label: "Receiver",
      class: "w-[12%] min-w-[80px]",
      render: (value, row) => ({
        component: "text",
        text: row.isTransfer ? row.recipient || "Unknown" : "-",
        class: row.isTransfer && row.recipient && row.recipient !== "Unknown" ? "font-medium" : "text-muted-foreground"
      })
    },
    {
      key: "quantity",
      label: "Quantity",
      class: "w-[15%] min-w-[100px] font-mono",
      render: (value, row) => {
        if (row.isTransfer && value === 0) {
          return "-";
        }
        return formatQuantity(value);
      }
    },
    {
      key: "pricePerCoin",
      label: "Price",
      class: "w-[15%] min-w-[80px] font-mono",
      render: (value, row) => {
        if (row.isTransfer || value === 0) {
          return "-";
        }
        return `$${formatPrice(value)}`;
      }
    },
    {
      key: "totalBaseCurrencyAmount",
      label: "Total",
      class: "w-[15%] min-w-[80px] font-mono font-medium",
      render: (value, row) => {
        const prefix = row.type === "TRANSFER_IN" || row.type === "BUY" ? "+" : "-";
        return `${prefix}${formatValue(value)}`;
      }
    },
    {
      key: "timestamp",
      label: "Date",
      class: "w-[25%] min-w-[120px] text-muted-foreground",
      render: (value) => formatDate(value)
    }
  ];
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    SEO($$payload2, {
      title: "Transactions - Rugplay",
      description: "View your complete trading history and transaction records in the Rugplay cryptocurrency simulation game.",
      noindex: true,
      keywords: "trading history game, transaction records simulator, crypto trading log, virtual trading history"
    });
    $$payload2.out += `<!----> <div class="container mx-auto max-w-7xl p-6"><header class="mb-8"><div class="text-center"><h1 class="mb-2 text-3xl font-bold">Transactions</h1> <p class="text-muted-foreground mb-6">Complete record of your trading activity and transactions</p> <div class="mx-auto flex max-w-2xl items-center justify-center gap-2"><div class="relative flex-1">`;
    Search($$payload2, {
      class: "text-muted-foreground absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2"
    });
    $$payload2.out += `<!----> `;
    Input($$payload2, {
      placeholder: "Search by coin name or symbol...",
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
              variant: sortBy === "timestamp" ? "default" : "outline",
              size: "sm",
              onclick: () => handleSortChange("timestamp"),
              children: ($$payload5) => {
                $$payload5.out += `<!---->Date`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Button($$payload4, {
              variant: sortBy === "totalBaseCurrencyAmount" ? "default" : "outline",
              size: "sm",
              onclick: () => handleSortChange("totalBaseCurrencyAmount"),
              children: ($$payload5) => {
                $$payload5.out += `<!---->Amount`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Button($$payload4, {
              variant: sortBy === "quantity" ? "default" : "outline",
              size: "sm",
              onclick: () => handleSortChange("quantity"),
              children: ($$payload5) => {
                $$payload5.out += `<!---->Quantity`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Button($$payload4, {
              variant: sortBy === "pricePerCoin" ? "default" : "outline",
              size: "sm",
              onclick: () => handleSortChange("pricePerCoin"),
              children: ($$payload5) => {
                $$payload5.out += `<!---->Price`;
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
                $$payload5.out += `<!---->Transaction Type`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> <!---->`;
            Root$1($$payload4, {
              type: "single",
              onValueChange: handleTypeFilterChange,
              get value() {
                return typeFilter;
              },
              set value($$value) {
                typeFilter = $$value;
                $$settled = false;
              },
              children: ($$payload5) => {
                $$payload5.out += `<!---->`;
                Select_trigger($$payload5, {
                  class: "w-full",
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->${escape_html(currentTypeFilterLabel)}`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!----> <!---->`;
                Select_content($$payload5, {
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->`;
                    Select_group($$payload6, {
                      children: ($$payload7) => {
                        const each_array_1 = ensure_array_like(typeFilterOptions);
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
      onclick: fetchTransactions,
      disabled: loading,
      children: ($$payload3) => {
        Refresh_cw($$payload3, { class: "h-4 w-4" });
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----></div></div></header> `;
    if (!loading && totalCount > 0) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<div class="mb-4 flex items-center justify-between"><div class="text-muted-foreground text-sm">Showing ${escape_html(startIndex)}-${escape_html(endIndex)} of ${escape_html(totalCount)} transactions</div> `;
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
    $$payload2.out += `<!--]--> <!---->`;
    Card($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->`;
        Card_header($$payload3, {
          children: ($$payload4) => {
            $$payload4.out += `<!---->`;
            Card_title($$payload4, {
              class: "flex items-center gap-2",
              children: ($$payload5) => {
                Receipt($$payload5, { class: "h-5 w-5" });
                $$payload5.out += `<!----> History`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> <!---->`;
            Card_description($$payload4, {
              children: ($$payload5) => {
                $$payload5.out += `<!---->Complete record of your trading activity and transfers`;
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
              const each_array_2 = ensure_array_like(Array(10));
              $$payload4.out += `<div class="space-y-4"><!--[-->`;
              for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
                each_array_2[$$index_2];
                $$payload4.out += `<div class="bg-muted h-16 animate-pulse rounded-lg"></div>`;
              }
              $$payload4.out += `<!--]--></div>`;
            } else {
              $$payload4.out += "<!--[!-->";
              DataTable($$payload4, {
                columns: transactionsColumns,
                data: transactions,
                onRowClick: (tx) => {
                  if (tx.coin) {
                    goto(`/coin/${tx.coin.symbol}`);
                  }
                },
                emptyIcon: Receipt,
                emptyTitle: "No transactions found",
                emptyDescription: hasActiveFilters ? "No transactions match your current filters. Try adjusting your search criteria." : "You haven't made any trades or transfers yet. Start by buying coins or sending money to other users."
              });
            }
            $$payload4.out += `<!--]-->`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    if (!loading && totalPages > 1) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<div class="mt-8 flex justify-center"><!---->`;
      {
        let children = function($$payload3, { pages, currentPage: paginationCurrentPage }) {
          $$payload3.out += `<!---->`;
          Pagination_content($$payload3, {
            children: ($$payload4) => {
              const each_array_3 = ensure_array_like(pages);
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
              for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
                let page2 = each_array_3[$$index_3];
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
//# sourceMappingURL=_page.svelte-qAnnnGws.js.map
