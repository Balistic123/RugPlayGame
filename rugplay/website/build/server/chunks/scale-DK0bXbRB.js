import { w as sanitize_props, b as spread_props, x as slot } from './index3-CthgjPPi.js';
import { I as Icon } from './Icon2-Bqt4BCIy.js';

function Scale($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"
      }
    ],
    [
      "path",
      {
        "d": "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"
      }
    ],
    ["path", { "d": "M7 21h10" }],
    ["path", { "d": "M12 3v18" }],
    [
      "path",
      { "d": "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "scale" },
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

export { Scale as S };
//# sourceMappingURL=scale-DK0bXbRB.js.map
