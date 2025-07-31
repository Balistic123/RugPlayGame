import { p as push, m as escape_html, a as pop, e as ensure_array_like, k as attr_class, g as clsx, w as sanitize_props, b as spread_props, x as slot } from './index3-CthgjPPi.js';
import { T as Table, a as Table_header, b as Table_body, c as Table_row, d as Table_head, e as Table_cell } from './table-row-CGX-tSUb.js';
import { b as getPublicUrl } from './utils2-CLIgW4-x.js';
import { A as Avatar, a as Avatar_fallback } from './avatar-fallback-BVDrtls6.js';
import { A as Avatar_image } from './avatar-image-BuX3_Vs_.js';
import { R as Root, H as Hover_card_trigger, a as Hover_card_content, U as UserProfilePreview } from './UserProfilePreview-DXQRal1C.js';
import { B as Badge } from './badge-Dggzsmpe.js';
import { C as CoinIcon } from './CoinIcon-76OONbK8.js';
import { I as Icon } from './Icon2-Bqt4BCIy.js';

function Arrow_down($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M12 5v14" }],
    ["path", { "d": "m19 12-7 7-7-7" }]
  ];
  Icon($$payload, spread_props([
    { name: "arrow-down" },
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
function Arrow_up_down($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "m21 16-4 4-4-4" }],
    ["path", { "d": "M17 20V4" }],
    ["path", { "d": "m3 8 4-4 4 4" }],
    ["path", { "d": "M7 4v16" }]
  ];
  Icon($$payload, spread_props([
    { name: "arrow-up-down" },
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
function Arrow_up($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "m5 12 7-7 7 7" }],
    ["path", { "d": "M12 19V5" }]
  ];
  Icon($$payload, spread_props([
    { name: "arrow-up" },
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
function DataTable($$payload, $$props) {
  push();
  let {
    columns,
    data,
    onRowClick,
    emptyMessage = "No data available",
    emptyIcon,
    emptyTitle = "No data",
    emptyDescription = "",
    enableUserPreview = false
  } = $$props;
  const defaultSortColumn = columns.find((col) => col.defaultSort);
  let sortColumn = defaultSortColumn?.key || null;
  let sortDirection = defaultSortColumn?.defaultSort === "asc" ? "asc" : "desc";
  let sortedData = (() => {
    if (!sortColumn) return data;
    return [...data].sort((a, b) => {
      let aValue = a[sortColumn];
      let bValue = b[sortColumn];
      if (typeof aValue === "string" && !isNaN(Number(aValue))) {
        aValue = Number(aValue);
      }
      if (typeof bValue === "string" && !isNaN(Number(bValue))) {
        bValue = Number(bValue);
      }
      if (aValue == null && bValue == null) return 0;
      if (aValue == null) return sortDirection === "asc" ? -1 : 1;
      if (bValue == null) return sortDirection === "asc" ? 1 : -1;
      if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
      if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  })();
  function renderCell(column, row, value, index) {
    if (column.render) {
      const rendered = column.render(value, row, index);
      if (rendered?.component === "badge") {
        return {
          type: "badge",
          variant: rendered.variant || "default",
          text: rendered.text,
          icon: rendered.icon,
          class: rendered.class || ""
        };
      }
      if (rendered?.component === "coin") {
        return {
          type: "coin",
          icon: rendered.icon,
          symbol: rendered.symbol,
          name: rendered.name,
          size: rendered.size || 6
        };
      }
      if (rendered?.component === "text") {
        return {
          type: "text",
          text: rendered.text,
          class: rendered.class || ""
        };
      }
      if (rendered?.component === "rank") {
        return {
          type: "rank",
          icon: rendered.icon,
          color: rendered.color,
          number: rendered.number
        };
      }
      if (rendered?.component === "user") {
        return {
          type: "user",
          image: rendered.image,
          name: rendered.name,
          username: rendered.username
        };
      }
      if (typeof rendered === "string") {
        return { type: "text", text: rendered };
      }
    }
    return { type: "text", text: value };
  }
  if (data.length === 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="py-12 text-center">`;
    if (emptyIcon) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="bg-muted mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full"><emptyIcon class="text-muted-foreground h-6 w-6"></emptyIcon></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <h3 class="mb-2 text-lg font-semibold">${escape_html(emptyTitle)}</h3> <p class="text-muted-foreground">${escape_html(emptyDescription || emptyMessage)}</p></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<!---->`;
    Table($$payload, {
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        Table_header($$payload2, {
          children: ($$payload3) => {
            $$payload3.out += `<!---->`;
            Table_row($$payload3, {
              children: ($$payload4) => {
                const each_array = ensure_array_like(columns);
                $$payload4.out += `<!--[-->`;
                for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                  let column = each_array[$$index];
                  $$payload4.out += `<!---->`;
                  Table_head($$payload4, {
                    class: column.class || "min-w-[80px]",
                    children: ($$payload5) => {
                      if (column.sortable) {
                        $$payload5.out += "<!--[-->";
                        $$payload5.out += `<button class="hover:text-foreground flex items-center gap-1 transition-colors">${escape_html(column.label)} `;
                        if (sortColumn === column.key) {
                          $$payload5.out += "<!--[-->";
                          if (sortDirection === "asc") {
                            $$payload5.out += "<!--[-->";
                            Arrow_up($$payload5, { class: "text-primary h-4 w-4" });
                          } else {
                            $$payload5.out += "<!--[!-->";
                            Arrow_down($$payload5, { class: "text-primary h-4 w-4" });
                          }
                          $$payload5.out += `<!--]-->`;
                        } else {
                          $$payload5.out += "<!--[!-->";
                          Arrow_up_down($$payload5, { class: "h-4 w-4 opacity-50" });
                        }
                        $$payload5.out += `<!--]--></button>`;
                      } else {
                        $$payload5.out += "<!--[!-->";
                        $$payload5.out += `${escape_html(column.label)}`;
                      }
                      $$payload5.out += `<!--]-->`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload4.out += `<!---->`;
                }
                $$payload4.out += `<!--]-->`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!---->`;
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!----> <!---->`;
        Table_body($$payload2, {
          children: ($$payload3) => {
            const each_array_1 = ensure_array_like(sortedData);
            $$payload3.out += `<!--[-->`;
            for (let index = 0, $$length = each_array_1.length; index < $$length; index++) {
              let row = each_array_1[index];
              $$payload3.out += `<!---->`;
              Table_row($$payload3, {
                class: onRowClick ? "hover:bg-muted/50 cursor-pointer transition-colors" : "",
                onclick: onRowClick ? () => onRowClick(row) : void 0,
                children: ($$payload4) => {
                  const each_array_2 = ensure_array_like(columns);
                  $$payload4.out += `<!--[-->`;
                  for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
                    let column = each_array_2[$$index_1];
                    $$payload4.out += `<!---->`;
                    Table_cell($$payload4, {
                      class: column.class,
                      children: ($$payload5) => {
                        const cellData = renderCell(column, row, row[column.key], index);
                        if (cellData.type === "badge") {
                          $$payload5.out += "<!--[-->";
                          Badge($$payload5, {
                            variant: cellData.variant,
                            class: cellData.class,
                            children: ($$payload6) => {
                              if (cellData.icon === "arrow-up") {
                                $$payload6.out += "<!--[-->";
                                Arrow_up($$payload6, { class: "mr-1 h-3 w-3" });
                              } else if (cellData.icon === "arrow-down") {
                                $$payload6.out += "<!--[1-->";
                                Arrow_down($$payload6, { class: "mr-1 h-3 w-3" });
                              } else {
                                $$payload6.out += "<!--[!-->";
                              }
                              $$payload6.out += `<!--]--> ${escape_html(cellData.text)}`;
                            },
                            $$slots: { default: true }
                          });
                        } else if (cellData.type === "coin") {
                          $$payload5.out += "<!--[1-->";
                          $$payload5.out += `<div class="flex items-center gap-2">`;
                          CoinIcon($$payload5, {
                            icon: cellData.icon,
                            symbol: cellData.symbol,
                            size: cellData.size
                          });
                          $$payload5.out += `<!----> <span class="font-medium max-w-44 truncate">${escape_html(cellData.name)}</span></div>`;
                        } else if (cellData.type === "rank") {
                          $$payload5.out += "<!--[2-->";
                          $$payload5.out += `<div class="flex items-center gap-2"><div${attr_class(`${cellData.color} flex h-7 w-7 items-center justify-center rounded-full text-xs font-medium`)}><!---->`;
                          cellData.icon($$payload5, { class: "h-3.5 w-3.5" });
                          $$payload5.out += `<!----></div> <span class="text-sm font-medium">#${escape_html(cellData.number)}</span></div>`;
                        } else if (cellData.type === "user") {
                          $$payload5.out += "<!--[3-->";
                          if (enableUserPreview) {
                            $$payload5.out += "<!--[-->";
                            $$payload5.out += `<!---->`;
                            Root($$payload5, {
                              children: ($$payload6) => {
                                $$payload6.out += `<!---->`;
                                Hover_card_trigger($$payload6, {
                                  children: ($$payload7) => {
                                    $$payload7.out += `<div class="flex items-center gap-2"><!---->`;
                                    Avatar($$payload7, {
                                      class: "h-7 w-7",
                                      children: ($$payload8) => {
                                        $$payload8.out += `<!---->`;
                                        Avatar_image($$payload8, {
                                          src: getPublicUrl(cellData.image),
                                          alt: cellData.name
                                        });
                                        $$payload8.out += `<!----> <!---->`;
                                        Avatar_fallback($$payload8, {
                                          class: "text-xs",
                                          children: ($$payload9) => {
                                            $$payload9.out += `<!---->${escape_html(cellData.name?.charAt(0) || "?")}`;
                                          },
                                          $$slots: { default: true }
                                        });
                                        $$payload8.out += `<!---->`;
                                      },
                                      $$slots: { default: true }
                                    });
                                    $$payload7.out += `<!----> <div class="flex flex-col items-start"><span class="text-sm font-medium">${escape_html(cellData.name)}</span> <span class="text-muted-foreground text-xs">@${escape_html(cellData.username)}</span></div></div>`;
                                  },
                                  $$slots: { default: true }
                                });
                                $$payload6.out += `<!----> <!---->`;
                                Hover_card_content($$payload6, {
                                  class: "w-80",
                                  children: ($$payload7) => {
                                    UserProfilePreview($$payload7, { userId: row.userId });
                                  },
                                  $$slots: { default: true }
                                });
                                $$payload6.out += `<!---->`;
                              },
                              $$slots: { default: true }
                            });
                            $$payload5.out += `<!---->`;
                          } else {
                            $$payload5.out += "<!--[!-->";
                            $$payload5.out += `<div class="flex items-center gap-2"><!---->`;
                            Avatar($$payload5, {
                              class: "h-7 w-7",
                              children: ($$payload6) => {
                                $$payload6.out += `<!---->`;
                                Avatar_image($$payload6, {
                                  src: getPublicUrl(cellData.image),
                                  alt: cellData.name
                                });
                                $$payload6.out += `<!----> <!---->`;
                                Avatar_fallback($$payload6, {
                                  class: "text-xs",
                                  children: ($$payload7) => {
                                    $$payload7.out += `<!---->${escape_html(cellData.name?.charAt(0) || "?")}`;
                                  },
                                  $$slots: { default: true }
                                });
                                $$payload6.out += `<!---->`;
                              },
                              $$slots: { default: true }
                            });
                            $$payload5.out += `<!----> <div class="flex flex-col items-start"><span class="text-sm font-medium">${escape_html(cellData.name)}</span> <span class="text-muted-foreground text-xs">@${escape_html(cellData.username)}</span></div></div>`;
                          }
                          $$payload5.out += `<!--]-->`;
                        } else if (cellData.type === "text") {
                          $$payload5.out += "<!--[4-->";
                          $$payload5.out += `<span${attr_class(clsx(cellData.class))}>${escape_html(cellData.text)}</span>`;
                        } else {
                          $$payload5.out += "<!--[!-->";
                        }
                        $$payload5.out += `<!--]-->`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload4.out += `<!---->`;
                  }
                  $$payload4.out += `<!--]-->`;
                },
                $$slots: { default: true }
              });
              $$payload3.out += `<!---->`;
            }
            $$payload3.out += `<!--]-->`;
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}

export { DataTable as D };
//# sourceMappingURL=DataTable-BFVnrE8w.js.map
