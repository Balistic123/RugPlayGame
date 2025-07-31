import { w as sanitize_props, b as spread_props, x as slot } from './index3-CthgjPPi.js';
import { I as Icon } from './Icon2-Bqt4BCIy.js';

function Trending_down($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M16 17h6v-6" }],
    ["path", { "d": "m22 17-8.5-8.5-5 5L2 7" }]
  ];
  Icon($$payload, spread_props([
    { name: "trending-down" },
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

export { Trending_down as T };
//# sourceMappingURL=trending-down-DcTfhCCA.js.map
