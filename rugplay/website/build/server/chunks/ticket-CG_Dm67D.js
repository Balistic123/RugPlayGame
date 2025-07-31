import { w as sanitize_props, b as spread_props, x as slot } from './index3-CthgjPPi.js';
import { I as Icon } from './Icon2-Bqt4BCIy.js';

function Ticket($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
      }
    ],
    ["path", { "d": "M13 5v2" }],
    ["path", { "d": "M13 17v2" }],
    ["path", { "d": "M13 11v2" }]
  ];
  Icon($$payload, spread_props([
    { name: "ticket" },
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

export { Ticket as T };
//# sourceMappingURL=ticket-CG_Dm67D.js.map
