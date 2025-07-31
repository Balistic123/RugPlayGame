import { w as sanitize_props, b as spread_props, x as slot } from './index3-CthgjPPi.js';
import { I as Icon } from './Icon2-Bqt4BCIy.js';

function Coins($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["circle", { "cx": "8", "cy": "8", "r": "6" }],
    [
      "path",
      { "d": "M18.09 10.37A6 6 0 1 1 10.34 18" }
    ],
    ["path", { "d": "M7 6h1v4" }],
    [
      "path",
      { "d": "m16.71 13.88.7.71-2.82 2.82" }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "coins" },
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

export { Coins as C };
//# sourceMappingURL=coins-DVrva8oo.js.map
