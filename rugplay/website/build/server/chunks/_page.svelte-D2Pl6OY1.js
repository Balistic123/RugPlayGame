import { p as push, u as store_get, q as copy_payload, t as assign_payload, v as unsubscribe_stores, a as pop, c as bind_props, e as ensure_array_like, m as escape_html, o as stringify } from './index3-CthgjPPi.js';
import './volume-settings-DX3g8058.js';
import { B as Button } from './button-Cg_QiDbD.js';
import { B as Badge } from './badge-Dggzsmpe.js';
import { C as Card } from './card-23nZlDN1.js';
import { C as Card_content } from './card-content-Nxnnhqv4.js';
import { C as Card_description } from './card-description-BhiVZbL9.js';
import { C as Card_header } from './card-header-CuTABeMH.js';
import { C as Card_title } from './card-title-CxxMmziD.js';
import { T as Table, a as Table_header, c as Table_row, b as Table_body, d as Table_head, e as Table_cell } from './table-row-CGX-tSUb.js';
import { S as Skeleton } from './skeleton-BrIQmewN.js';
import { S as SEO } from './SEO-Cqzi3OcQ.js';
import { a as toast } from './Toaster.svelte_svelte_type_style_lang-CcrnaSIn.js';
import './client-s_UYc3Sk.js';
import { U as USER_DATA } from './user-data-CT5kjyaY.js';
import { a as PORTFOLIO_DATA, b as fetchPortfolioData } from './portfolio-data-D2WCRVa2.js';
import { R as Root, D as Dialog_content } from './index5-D35Z60w5.js';
import { R as Root$1, S as Select_trigger, a as Select_content, b as Select_group, c as Select_item } from './index7-CPsQHBY3.js';
import { I as Input } from './input-BZy6dM-O.js';
import { L as Label } from './label-CxNim4GD.js';
import { D as Dialog_header, a as Dialog_title, b as Dialog_description } from './dialog-description-4JjLXrIw.js';
import { S as Send, D as Dollar_sign } from './send-Bys6NCOB.js';
import { C as Coins } from './coins-DVrva8oo.js';
import { D as Dialog_footer } from './dialog-footer-KlhKHuMF.js';
import { L as Loader_circle } from './loader-circle-04fw-oOl.js';
import { S as SignInConfirmDialog } from './SignInConfirmDialog-CRywm7vo.js';
import './index2-D4eROfHK.js';
import './clsx-ChV9xqsO.js';
import './utils2-CLIgW4-x.js';
import './index-opKo-a_0.js';
import './stores-Be-B7Xuq.js';
import './index-server-DH7p7JOq.js';
import './exports-Cv9LZeD1.js';
import './scroll-lock-BUIxTk31.js';
import './create-id-Bxd404XN.js';
import './events-CF0F77H5.js';
import './Icon-DETra0Ze.js';
import './mounted-Tbl-FfLm.js';
import './popper-layer-force-mount-BIcocscF.js';
import './use-dom-typeahead.svelte-_8fvw_os.js';
import './Icon2-Bqt4BCIy.js';
import 'better-auth/svelte';
import 'better-auth/client/plugins';
import './shared-server-BfUoNEXY.js';
import './index6-BNoyVQ18.js';
import './client2-DLmkXqdH.js';

function PortfolioSkeleton($$payload) {
  const each_array = ensure_array_like(Array(3));
  $$payload.out += `<div class="container mx-auto max-w-7xl"><div class="mb-6 grid grid-cols-1 gap-4 md:mb-8 lg:grid-cols-3"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    each_array[$$index];
    Card($$payload, {
      class: "gap-1 overflow-hidden",
      children: ($$payload2) => {
        Card_header($$payload2, {
          children: ($$payload3) => {
            Card_title($$payload3, {
              class: "flex items-center gap-2",
              children: ($$payload4) => {
                Skeleton($$payload4, { class: "h-4 w-4" });
                $$payload4.out += `<!----> `;
                Skeleton($$payload4, { class: "h-4 w-16" });
                $$payload4.out += `<!---->`;
              },
              $$slots: { default: true }
            });
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!----> `;
        Card_content($$payload2, {
          children: ($$payload3) => {
            Skeleton($$payload3, { class: "h-8 w-24 md:h-9 md:w-32" });
            $$payload3.out += `<!----> `;
            Skeleton($$payload3, { class: "mt-2 h-3 w-20 md:w-24" });
            $$payload3.out += `<!---->`;
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    });
  }
  $$payload.out += `<!--]--></div> `;
  Card($$payload, {
    class: "overflow-hidden",
    children: ($$payload2) => {
      Card_header($$payload2, {
        class: "pb-3 md:pb-4",
        children: ($$payload3) => {
          Card_title($$payload3, {
            children: ($$payload4) => {
              Skeleton($$payload4, { class: "h-5 w-32 md:h-6 md:w-40" });
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
          Table($$payload3, {
            children: ($$payload4) => {
              Table_header($$payload4, {
                children: ($$payload5) => {
                  Table_row($$payload5, {
                    children: ($$payload6) => {
                      Table_head($$payload6, {
                        class: "w-[30%] min-w-[120px] md:w-[12%]",
                        children: ($$payload7) => {
                          Skeleton($$payload7, { class: "h-4 w-16" });
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out += `<!----> `;
                      Table_head($$payload6, {
                        class: "w-[20%] min-w-[80px] md:w-[12%]",
                        children: ($$payload7) => {
                          Skeleton($$payload7, { class: "h-4 w-16" });
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out += `<!----> `;
                      Table_head($$payload6, {
                        class: "w-[15%] min-w-[70px] md:w-[12%]",
                        children: ($$payload7) => {
                          Skeleton($$payload7, { class: "h-4 w-16" });
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out += `<!----> `;
                      Table_head($$payload6, {
                        class: "w-[20%] min-w-[80px] md:w-[12%]",
                        children: ($$payload7) => {
                          Skeleton($$payload7, { class: "h-4 w-16" });
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out += `<!----> `;
                      Table_head($$payload6, {
                        class: "w-[15%] min-w-[70px] md:w-[12%]",
                        children: ($$payload7) => {
                          Skeleton($$payload7, { class: "h-4 w-16" });
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out += `<!----> `;
                      Table_head($$payload6, {
                        class: "hidden md:table-cell md:w-[12%]",
                        children: ($$payload7) => {
                          Skeleton($$payload7, { class: "h-4 w-16" });
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out += `<!---->`;
                    },
                    $$slots: { default: true }
                  });
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              Table_body($$payload4, {
                children: ($$payload5) => {
                  const each_array_1 = ensure_array_like(Array(4));
                  $$payload5.out += `<!--[-->`;
                  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
                    each_array_1[$$index_1];
                    Table_row($$payload5, {
                      children: ($$payload6) => {
                        Table_cell($$payload6, {
                          children: ($$payload7) => {
                            $$payload7.out += `<div class="flex items-center gap-2">`;
                            Skeleton($$payload7, { class: "h-6 w-6 rounded-full" });
                            $$payload7.out += `<!----> <div>`;
                            Skeleton($$payload7, { class: "h-4 w-16" });
                            $$payload7.out += `<!----> `;
                            Skeleton($$payload7, { class: "mt-1 h-3 w-12" });
                            $$payload7.out += `<!----></div></div>`;
                          },
                          $$slots: { default: true }
                        });
                        $$payload6.out += `<!----> `;
                        Table_cell($$payload6, {
                          children: ($$payload7) => {
                            Skeleton($$payload7, { class: "h-4 w-16" });
                          },
                          $$slots: { default: true }
                        });
                        $$payload6.out += `<!----> `;
                        Table_cell($$payload6, {
                          children: ($$payload7) => {
                            Skeleton($$payload7, { class: "h-4 w-12" });
                          },
                          $$slots: { default: true }
                        });
                        $$payload6.out += `<!----> `;
                        Table_cell($$payload6, {
                          children: ($$payload7) => {
                            Skeleton($$payload7, { class: "h-5 w-14 rounded-md" });
                          },
                          $$slots: { default: true }
                        });
                        $$payload6.out += `<!----> `;
                        Table_cell($$payload6, {
                          children: ($$payload7) => {
                            Skeleton($$payload7, { class: "h-4 w-16" });
                          },
                          $$slots: { default: true }
                        });
                        $$payload6.out += `<!----> `;
                        Table_cell($$payload6, {
                          class: "hidden md:table-cell",
                          children: ($$payload7) => {
                            Skeleton($$payload7, { class: "h-5 w-12 rounded-md" });
                          },
                          $$slots: { default: true }
                        });
                        $$payload6.out += `<!---->`;
                      },
                      $$slots: { default: true }
                    });
                  }
                  $$payload5.out += `<!--]-->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Card($$payload, {
    class: "mt-6 overflow-hidden md:mt-8",
    children: ($$payload2) => {
      Card_header($$payload2, {
        class: "pb-3 md:pb-4",
        children: ($$payload3) => {
          $$payload3.out += `<div class="flex items-center justify-between"><div>`;
          Card_title($$payload3, {
            class: "flex items-center gap-2",
            children: ($$payload4) => {
              Skeleton($$payload4, { class: "h-5 w-5" });
              $$payload4.out += `<!----> `;
              Skeleton($$payload4, { class: "h-5 w-32 md:h-6 md:w-40" });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Card_description($$payload3, {
            class: "mt-1",
            children: ($$payload4) => {
              Skeleton($$payload4, { class: "h-3 w-40 md:h-4 md:w-48" });
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div> `;
          Skeleton($$payload3, { class: "h-8 w-16 rounded-md md:w-20" });
          $$payload3.out += `<!----></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Card_content($$payload2, {
        class: "p-3 pt-0 md:p-6 md:pt-0",
        children: ($$payload3) => {
          Table($$payload3, {
            children: ($$payload4) => {
              Table_header($$payload4, {
                children: ($$payload5) => {
                  Table_row($$payload5, {
                    children: ($$payload6) => {
                      Table_head($$payload6, {
                        class: "w-[15%] min-w-[60px] md:w-[10%]",
                        children: ($$payload7) => {
                          Skeleton($$payload7, { class: "h-4 w-12" });
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out += `<!----> `;
                      Table_head($$payload6, {
                        class: "w-[30%] min-w-[100px] md:w-[20%]",
                        children: ($$payload7) => {
                          Skeleton($$payload7, { class: "h-4 w-12" });
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out += `<!----> `;
                      Table_head($$payload6, {
                        class: "w-[20%] min-w-[80px] md:w-[15%]",
                        children: ($$payload7) => {
                          Skeleton($$payload7, { class: "h-4 w-16" });
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out += `<!----> `;
                      Table_head($$payload6, {
                        class: "w-[15%] min-w-[70px] md:w-[15%]",
                        children: ($$payload7) => {
                          Skeleton($$payload7, { class: "h-4 w-12" });
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out += `<!----> `;
                      Table_head($$payload6, {
                        class: "w-[20%] min-w-[70px] md:w-[15%]",
                        children: ($$payload7) => {
                          Skeleton($$payload7, { class: "h-4 w-12" });
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out += `<!----> `;
                      Table_head($$payload6, {
                        class: "hidden md:table-cell md:w-[25%]",
                        children: ($$payload7) => {
                          Skeleton($$payload7, { class: "h-4 w-12" });
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out += `<!---->`;
                    },
                    $$slots: { default: true }
                  });
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              Table_body($$payload4, {
                children: ($$payload5) => {
                  const each_array_2 = ensure_array_like(Array(5));
                  $$payload5.out += `<!--[-->`;
                  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
                    each_array_2[$$index_2];
                    Table_row($$payload5, {
                      children: ($$payload6) => {
                        Table_cell($$payload6, {
                          children: ($$payload7) => {
                            Skeleton($$payload7, { class: "h-5 w-10 rounded-md" });
                          },
                          $$slots: { default: true }
                        });
                        $$payload6.out += `<!----> `;
                        Table_cell($$payload6, {
                          children: ($$payload7) => {
                            $$payload7.out += `<div class="flex items-center gap-2">`;
                            Skeleton($$payload7, { class: "h-4 w-4 rounded-full" });
                            $$payload7.out += `<!----> <div>`;
                            Skeleton($$payload7, { class: "h-4 w-12" });
                            $$payload7.out += `<!----> `;
                            Skeleton($$payload7, { class: "mt-1 h-3 w-10" });
                            $$payload7.out += `<!----></div></div>`;
                          },
                          $$slots: { default: true }
                        });
                        $$payload6.out += `<!----> `;
                        Table_cell($$payload6, {
                          children: ($$payload7) => {
                            Skeleton($$payload7, { class: "h-4 w-16 font-mono" });
                          },
                          $$slots: { default: true }
                        });
                        $$payload6.out += `<!----> `;
                        Table_cell($$payload6, {
                          children: ($$payload7) => {
                            Skeleton($$payload7, { class: "h-4 w-16" });
                          },
                          $$slots: { default: true }
                        });
                        $$payload6.out += `<!----> `;
                        Table_cell($$payload6, {
                          children: ($$payload7) => {
                            Skeleton($$payload7, { class: "h-4 w-16" });
                          },
                          $$slots: { default: true }
                        });
                        $$payload6.out += `<!----> `;
                        Table_cell($$payload6, {
                          class: "hidden md:table-cell",
                          children: ($$payload7) => {
                            Skeleton($$payload7, { class: "h-4 w-24" });
                          },
                          $$slots: { default: true }
                        });
                        $$payload6.out += `<!---->`;
                      },
                      $$slots: { default: true }
                    });
                  }
                  $$payload5.out += `<!--]-->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
}
function SendMoneyModal($$payload, $$props) {
  push();
  var $$store_subs;
  let {
    open = false,
    onSuccess,
    prefilledUsername = ""
  } = $$props;
  let recipientUsername = "";
  let transferType = "CASH";
  let amount = "";
  let selectedCoinSymbol = "";
  let loading = false;
  let numericAmount = parseFloat(amount) || 0;
  let hasValidAmount = numericAmount > 0;
  let hasValidRecipient = recipientUsername.trim().length > 0;
  let userBalance = store_get($$store_subs ??= {}, "$PORTFOLIO_DATA", PORTFOLIO_DATA) ? store_get($$store_subs ??= {}, "$PORTFOLIO_DATA", PORTFOLIO_DATA).baseCurrencyBalance : 0;
  let coinHoldings = store_get($$store_subs ??= {}, "$PORTFOLIO_DATA", PORTFOLIO_DATA) ? store_get($$store_subs ??= {}, "$PORTFOLIO_DATA", PORTFOLIO_DATA).coinHoldings : [];
  let selectedCoinHolding = coinHoldings.find((holding) => holding.symbol === selectedCoinSymbol);
  let estimatedValue = transferType === "COIN" && selectedCoinHolding && numericAmount > 0 ? numericAmount * selectedCoinHolding.currentPrice : 0;
  let maxAmount = transferType === "CASH" ? userBalance : selectedCoinHolding ? selectedCoinHolding.quantity : 0;
  let hasEnoughFunds = transferType === "CASH" ? numericAmount <= userBalance : selectedCoinHolding ? numericAmount <= selectedCoinHolding.quantity : false;
  let isWithinCashLimit = transferType === "CASH" ? numericAmount >= 10 : true;
  let isWithinCoinValueLimit = transferType === "COIN" ? estimatedValue >= 10 : true;
  let canSend = hasValidAmount && hasValidRecipient && hasEnoughFunds && isWithinCashLimit && isWithinCoinValueLimit && !loading && (transferType === "CASH" || selectedCoinSymbol.length > 0);
  function handleClose() {
    open = false;
    recipientUsername = "";
    transferType = "CASH";
    amount = "";
    selectedCoinSymbol = "";
    loading = false;
  }
  function setMaxAmount() {
    if (transferType === "CASH") {
      amount = Math.max(maxAmount, 10).toString();
    } else {
      amount = maxAmount.toString();
    }
  }
  function handleTypeChange(value) {
    transferType = value;
    if (value === "CASH") {
      selectedCoinSymbol = "";
    } else if (coinHoldings.length > 0) {
      selectedCoinSymbol = coinHoldings[0].symbol;
    }
    amount = "";
  }
  async function handleSend() {
    if (!canSend) return;
    loading = true;
    try {
      const response = await fetch("/api/transfer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          recipientUsername: recipientUsername.trim(),
          type: transferType,
          amount: numericAmount,
          coinSymbol: transferType === "COIN" ? selectedCoinSymbol : void 0
        })
      });
      const result = await response.json();
      if (!response.ok) {
        if (result.message) {
          throw new Error(result.message);
        }
        throw new Error(result.error || "Transfer failed");
      }
      if (result.type === "CASH") {
        toast.success("Money sent successfully!", {
          description: `Sent $${result.amount.toFixed(2)} to @${result.recipient}`
        });
      } else {
        const estimatedValueForToast = estimatedValue;
        toast.success("Coins sent successfully!", {
          description: `Sent ${result.amount.toFixed(6)} ${result.coinSymbol} (≈$${estimatedValueForToast.toFixed(2)}) to @${result.recipient}`
        });
      }
      onSuccess?.();
      handleClose();
    } catch (e) {
      toast.error("Transfer failed", { description: e.message });
    } finally {
      loading = false;
    }
  }
  let transferTypeOptions = [
    { value: "CASH", label: "Cash ($)" },
    { value: "COIN", label: "Coins" }
  ];
  let currentTransferTypeLabel = transferTypeOptions.find((option) => option.value === transferType)?.label || "Select transfer type";
  let currentCoinLabel = !selectedCoinSymbol ? "Select coin to send" : (() => {
    const holding = coinHoldings.find((h) => h.symbol === selectedCoinSymbol);
    return holding ? `*${holding.symbol} (${holding.quantity.toFixed(6)} available)` : selectedCoinSymbol;
  })();
  function handleCoinChange(value) {
    selectedCoinSymbol = value;
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!---->`;
    Root($$payload2, {
      get open() {
        return open;
      },
      set open($$value) {
        open = $$value;
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
                  class: "flex items-center gap-2",
                  children: ($$payload6) => {
                    Send($$payload6, { class: "h-5 w-5" });
                    $$payload6.out += `<!----> Send`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!----> <!---->`;
                Dialog_description($$payload5, {
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->Send cash or coins to another user`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> <div class="space-y-4"><div class="space-y-2">`;
            Label($$payload4, {
              for: "recipient",
              children: ($$payload5) => {
                $$payload5.out += `<!---->Recipient`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Input($$payload4, {
              id: "recipient",
              type: "text",
              placeholder: "Enter username (without @)",
              class: "flex-1",
              get value() {
                return recipientUsername;
              },
              set value($$value) {
                recipientUsername = $$value;
                $$settled = false;
              }
            });
            $$payload4.out += `<!----></div> <div class="space-y-2">`;
            Label($$payload4, {
              children: ($$payload5) => {
                $$payload5.out += `<!---->Type`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> <!---->`;
            Root$1($$payload4, {
              type: "single",
              onValueChange: handleTypeChange,
              get value() {
                return transferType;
              },
              set value($$value) {
                transferType = $$value;
                $$settled = false;
              },
              children: ($$payload5) => {
                $$payload5.out += `<!---->`;
                Select_trigger($$payload5, {
                  class: "w-full",
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->${escape_html(currentTransferTypeLabel)}`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!----> <!---->`;
                Select_content($$payload5, {
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->`;
                    Select_group($$payload6, {
                      children: ($$payload7) => {
                        $$payload7.out += `<!---->`;
                        Select_item($$payload7, {
                          value: "CASH",
                          label: "Cash ($)",
                          children: ($$payload8) => {
                            $$payload8.out += `<div class="flex items-center gap-2">`;
                            Dollar_sign($$payload8, { class: "h-4 w-4" });
                            $$payload8.out += `<!----> Cash ($)</div>`;
                          },
                          $$slots: { default: true }
                        });
                        $$payload7.out += `<!----> <!---->`;
                        Select_item($$payload7, {
                          value: "COIN",
                          label: "Coins",
                          disabled: coinHoldings.length === 0,
                          children: ($$payload8) => {
                            $$payload8.out += `<div class="flex items-center gap-2">`;
                            Coins($$payload8, { class: "h-4 w-4" });
                            $$payload8.out += `<!----> Coins</div>`;
                          },
                          $$slots: { default: true }
                        });
                        $$payload7.out += `<!---->`;
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
            $$payload4.out += `<!----></div> `;
            if (transferType === "COIN") {
              $$payload4.out += "<!--[-->";
              $$payload4.out += `<div class="space-y-2">`;
              Label($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Select Coin`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> <!---->`;
              Root$1($$payload4, {
                type: "single",
                onValueChange: handleCoinChange,
                get value() {
                  return selectedCoinSymbol;
                },
                set value($$value) {
                  selectedCoinSymbol = $$value;
                  $$settled = false;
                },
                children: ($$payload5) => {
                  $$payload5.out += `<!---->`;
                  Select_trigger($$payload5, {
                    class: "w-full",
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->${escape_html(currentCoinLabel)}`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!----> <!---->`;
                  Select_content($$payload5, {
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->`;
                      Select_group($$payload6, {
                        children: ($$payload7) => {
                          const each_array = ensure_array_like(coinHoldings);
                          $$payload7.out += `<!--[-->`;
                          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                            let holding = each_array[$$index];
                            $$payload7.out += `<!---->`;
                            Select_item($$payload7, {
                              value: holding.symbol,
                              label: `*${stringify(holding.symbol)}`,
                              children: ($$payload8) => {
                                $$payload8.out += `<!---->*${escape_html(holding.symbol)} (${escape_html(holding.quantity.toFixed(6))} available)`;
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
              $$payload4.out += `<!----></div>`;
            } else {
              $$payload4.out += "<!--[!-->";
            }
            $$payload4.out += `<!--]--> <div class="space-y-2">`;
            Label($$payload4, {
              for: "amount",
              children: ($$payload5) => {
                $$payload5.out += `<!---->${escape_html(transferType === "CASH" ? "Amount ($)" : `Amount (${selectedCoinSymbol})`)}`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> <div class="flex gap-2">`;
            Input($$payload4, {
              id: "amount",
              type: "number",
              step: transferType === "CASH" ? "0.01" : "0.000001",
              min: "0",
              placeholder: "0.00",
              class: "flex-1",
              get value() {
                return amount;
              },
              set value($$value) {
                amount = $$value;
                $$settled = false;
              }
            });
            $$payload4.out += `<!----> `;
            Button($$payload4, {
              variant: "outline",
              size: "sm",
              onclick: setMaxAmount,
              children: ($$payload5) => {
                $$payload5.out += `<!---->Max`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----></div> <div class="flex justify-between text-xs"><p class="text-muted-foreground">Available: ${escape_html(transferType === "CASH" ? `$${userBalance.toFixed(2)}` : selectedCoinHolding ? `${selectedCoinHolding.quantity.toFixed(6)} ${selectedCoinSymbol}` : "0")}</p> `;
            if (transferType === "COIN" && estimatedValue > 0) {
              $$payload4.out += "<!--[-->";
              $$payload4.out += `<p class="text-muted-foreground">≈ $${escape_html(estimatedValue.toFixed(2))}</p>`;
            } else {
              $$payload4.out += "<!--[!-->";
            }
            $$payload4.out += `<!--]--></div> `;
            if (transferType === "CASH") {
              $$payload4.out += "<!--[-->";
              $$payload4.out += `<p class="text-muted-foreground text-xs">Minimum: $10.00 per transfer</p>`;
            } else if (transferType === "COIN") {
              $$payload4.out += "<!--[1-->";
              $$payload4.out += `<p class="text-muted-foreground text-xs">Minimum estimated value: $10.00 per transfer</p>`;
            } else {
              $$payload4.out += "<!--[!-->";
            }
            $$payload4.out += `<!--]--></div> `;
            if (!hasEnoughFunds && hasValidAmount) {
              $$payload4.out += "<!--[-->";
              Badge($$payload4, {
                variant: "destructive",
                class: "text-xs",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Insufficient ${escape_html(transferType === "CASH" ? "funds" : "coins")}`;
                },
                $$slots: { default: true }
              });
            } else if (!isWithinCashLimit && hasValidAmount) {
              $$payload4.out += "<!--[1-->";
              Badge($$payload4, {
                variant: "destructive",
                class: "text-xs",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Cash transfers require a minimum of $10.00`;
                },
                $$slots: { default: true }
              });
            } else if (!isWithinCoinValueLimit && hasValidAmount) {
              $$payload4.out += "<!--[2-->";
              Badge($$payload4, {
                variant: "destructive",
                class: "text-xs",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Coin transfers require a minimum estimated value of $10.00`;
                },
                $$slots: { default: true }
              });
            } else {
              $$payload4.out += "<!--[!-->";
            }
            $$payload4.out += `<!--]--> `;
            if (hasValidAmount && hasEnoughFunds && hasValidRecipient && isWithinCashLimit && isWithinCoinValueLimit) {
              $$payload4.out += "<!--[-->";
              $$payload4.out += `<div class="bg-muted/50 rounded-lg p-3"><div class="flex items-center justify-between"><span class="text-sm font-medium">You're sending:</span> <div class="text-right"><span class="block font-bold">${escape_html(transferType === "CASH" ? `$${numericAmount.toFixed(2)}` : `${numericAmount.toFixed(6)} ${selectedCoinSymbol}`)}</span> `;
              if (transferType === "COIN" && estimatedValue > 0) {
                $$payload4.out += "<!--[-->";
                $$payload4.out += `<span class="text-muted-foreground text-xs">≈ $${escape_html(estimatedValue.toFixed(2))} USD</span>`;
              } else {
                $$payload4.out += "<!--[!-->";
              }
              $$payload4.out += `<!--]--></div></div> <div class="flex items-center justify-between"><span class="text-sm font-medium">To:</span> <span class="font-bold">@${escape_html(recipientUsername)}</span></div></div>`;
            } else {
              $$payload4.out += "<!--[!-->";
            }
            $$payload4.out += `<!--]--></div> <!---->`;
            Dialog_footer($$payload4, {
              class: "flex gap-2",
              children: ($$payload5) => {
                Button($$payload5, {
                  variant: "outline",
                  onclick: handleClose,
                  disabled: loading,
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->Cancel`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!----> `;
                Button($$payload5, {
                  onclick: handleSend,
                  disabled: !canSend,
                  children: ($$payload6) => {
                    if (loading) {
                      $$payload6.out += "<!--[-->";
                      Loader_circle($$payload6, { class: "h-4 w-4 animate-spin" });
                      $$payload6.out += `<!----> Sending...`;
                    } else {
                      $$payload6.out += "<!--[!-->";
                      Send($$payload6, { class: "h-4 w-4" });
                      $$payload6.out += `<!----> Send`;
                    }
                    $$payload6.out += `<!--]-->`;
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
  bind_props($$props, { open });
  pop();
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let transactions = [];
  let error = null;
  let sendMoneyModalOpen = false;
  let shouldSignIn = false;
  async function loadPortfolioData() {
    try {
      const data = await fetchPortfolioData();
      if (!data) {
        error = "Failed to load portfolio data";
        toast.error("Failed to load portfolio data");
      } else {
        error = null;
      }
    } catch (e) {
      console.error("Failed to fetch portfolio data:", e);
      error = "Failed to load portfolio data";
      toast.error("Failed to load portfolio data");
    }
  }
  async function fetchRecentTransactions() {
    try {
      const response = await fetch("/api/transactions");
      if (response.ok) {
        const result = await response.json();
        transactions = result.transactions.slice(0, 10);
      } else {
        toast.error("Failed to load transactions");
      }
    } catch (e) {
      console.error("Failed to fetch transactions:", e);
      toast.error("Failed to load transactions");
    }
  }
  let portfolioData = store_get($$store_subs ??= {}, "$PORTFOLIO_DATA", PORTFOLIO_DATA);
  portfolioData ? portfolioData.totalValue : 0;
  portfolioData && portfolioData.coinHoldings.length > 0;
  transactions.length > 0;
  async function handleTransferSuccess() {
    await Promise.all([
      loadPortfolioData(),
      fetchRecentTransactions()
    ]);
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    SEO($$payload2, {
      title: "Portfolio - Rugplay",
      description: "View your virtual cryptocurrency portfolio, simulated holdings, and trading performance in the Rugplay simulation game platform.",
      noindex: true,
      keywords: "virtual portfolio management, crypto holdings game, trading performance simulator, investment tracking game"
    });
    $$payload2.out += `<!----> `;
    SendMoneyModal($$payload2, {
      onSuccess: handleTransferSuccess,
      get open() {
        return sendMoneyModalOpen;
      },
      set open($$value) {
        sendMoneyModalOpen = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----> `;
    SignInConfirmDialog($$payload2, {
      get open() {
        return shouldSignIn;
      },
      set open($$value) {
        shouldSignIn = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----> <div class="container mx-auto max-w-7xl p-6"><div class="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center"><div><h1 class="text-3xl font-bold">Portfolio</h1> <p class="text-muted-foreground">Manage your investments and transactions</p></div> `;
    if (store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA)) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<div class="flex gap-2">`;
      Button($$payload2, {
        onclick: () => sendMoneyModalOpen = true,
        children: ($$payload3) => {
          Send($$payload3, { class: "h-4 w-4" });
          $$payload3.out += `<!----> Send Money`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--></div> `;
    {
      $$payload2.out += "<!--[-->";
      PortfolioSkeleton($$payload2);
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
//# sourceMappingURL=_page.svelte-D2Pl6OY1.js.map
