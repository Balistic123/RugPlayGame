import { p as push, o as stringify, a as pop, w as sanitize_props, b as spread_props, x as slot, k as attr_class, m as escape_html } from './index3-CthgjPPi.js';
import { I as Icon } from './Icon2-Bqt4BCIy.js';
import { R as Root, T as Tooltip_trigger, a as Tooltip_content } from './wallet-DXbnVvxq.js';
import { g as getPrestigeName, k as getPrestigeColor } from './utils2-CLIgW4-x.js';
import { S as Star } from './star-BqzY1Axl.js';
import { H as Hammer } from './hammer-DUPW_47m.js';

function Calendar($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M8 2v4" }],
    ["path", { "d": "M16 2v4" }],
    [
      "rect",
      {
        "width": "18",
        "height": "18",
        "x": "3",
        "y": "4",
        "rx": "2"
      }
    ],
    ["path", { "d": "M3 10h18" }]
  ];
  Icon($$payload, spread_props([
    { name: "calendar" },
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
function Flame($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "flame" },
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
function Hash($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "line",
      { "x1": "4", "x2": "20", "y1": "9", "y2": "9" }
    ],
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "15",
        "y2": "15"
      }
    ],
    [
      "line",
      {
        "x1": "10",
        "x2": "8",
        "y1": "3",
        "y2": "21"
      }
    ],
    [
      "line",
      {
        "x1": "16",
        "x2": "14",
        "y1": "3",
        "y2": "21"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "hash" },
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
function SilentBadge($$payload, $$props) {
  let { icon: Icon2, text, class: className } = $$props;
  $$payload.out += `<!---->`;
  Root($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->`;
      Tooltip_trigger($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<div${attr_class(`cursor-pointer rounded-full p-1 opacity-80 hover:opacity-100 ${stringify(className)}`)}><!---->`;
          Icon2($$payload3, { class: "h-4 w-4" });
          $$payload3.out += `<!----></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> <!---->`;
      Tooltip_content($$payload2, {
        class: "bg-secondary text-secondary-foreground ring-border ring-1",
        arrowClasses: "bg-secondary",
        children: ($$payload3) => {
          $$payload3.out += `<p>${escape_html(text)}</p>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
}
function ProfileBadges($$payload, $$props) {
  push();
  let { user, showId = true, size = "default" } = $$props;
  let badgeClass = size === "sm" ? "text-xs" : "";
  let prestigeName = user.prestigeLevel ? getPrestigeName(user.prestigeLevel) : null;
  let prestigeColor = user.prestigeLevel ? getPrestigeColor(user.prestigeLevel) : "text-gray-500";
  $$payload.out += `<div class="flex items-center gap-1">`;
  if (showId) {
    $$payload.out += "<!--[-->";
    SilentBadge($$payload, {
      icon: Hash,
      class: `text-muted-foreground ${stringify(badgeClass)}`,
      text: `#${stringify(user.id)} to join`
    });
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (prestigeName) {
    $$payload.out += "<!--[-->";
    SilentBadge($$payload, {
      icon: Star,
      text: prestigeName,
      class: `${stringify(prestigeColor)} ${stringify(badgeClass)}`
    });
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (user.loginStreak && user.loginStreak > 1) {
    $$payload.out += "<!--[-->";
    SilentBadge($$payload, {
      icon: Flame,
      text: `${stringify(user.loginStreak)} day streak`,
      class: `text-orange-500 ${stringify(badgeClass)}`
    });
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (user.isAdmin) {
    $$payload.out += "<!--[-->";
    SilentBadge($$payload, {
      icon: Hammer,
      text: "Admin",
      class: `text-primary ${stringify(badgeClass)}`
    });
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}

export { Calendar as C, ProfileBadges as P };
//# sourceMappingURL=ProfileBadges-BOQJ5w7t.js.map
