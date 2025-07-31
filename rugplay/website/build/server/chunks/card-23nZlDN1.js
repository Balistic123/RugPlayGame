import { p as push, f as spread_attributes, g as clsx, c as bind_props, a as pop } from './index3-CthgjPPi.js';
import { c as cn } from './utils2-CLIgW4-x.js';

function Card($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out += `<div${spread_attributes(
    {
      "data-slot": "card",
      class: clsx(cn("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className)),
      ...restProps
    },
    null
  )}>`;
  children?.($$payload);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { ref });
  pop();
}

export { Card as C };
//# sourceMappingURL=card-23nZlDN1.js.map
