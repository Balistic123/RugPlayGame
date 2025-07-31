import { w as sanitize_props, b as spread_props, x as slot } from './index3-CthgjPPi.js';
import { I as Icon } from './Icon2-Bqt4BCIy.js';

function Target($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "circle",
      { "cx": "12", "cy": "12", "r": "10" }
    ],
    [
      "circle",
      { "cx": "12", "cy": "12", "r": "6" }
    ],
    [
      "circle",
      { "cx": "12", "cy": "12", "r": "2" }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "target" },
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
function Trophy($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      { "d": "M6 9H4.5a2.5 2.5 0 0 1 0-5H6" }
    ],
    [
      "path",
      { "d": "M18 9h1.5a2.5 2.5 0 0 0 0-5H18" }
    ],
    ["path", { "d": "M4 22h16" }],
    [
      "path",
      {
        "d": "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"
      }
    ],
    [
      "path",
      {
        "d": "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"
      }
    ],
    [
      "path",
      { "d": "M18 2H6v7a6 6 0 0 0 12 0V2Z" }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "trophy" },
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

export { Trophy as T, Target as a };
//# sourceMappingURL=trophy-37PUKEsG.js.map
