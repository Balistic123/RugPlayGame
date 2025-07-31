import { p as push, f as spread_attributes, g as clsx, c as bind_props, a as pop } from './index3-CthgjPPi.js';
import { c as cn } from './utils2-CLIgW4-x.js';

function Card_header($$payload, $$props) {
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
      "data-slot": "card-header",
      class: clsx(cn("@container/card-header has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6", className)),
      ...restProps
    },
    null
  )}>`;
  children?.($$payload);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { ref });
  pop();
}

export { Card_header as C };
//# sourceMappingURL=card-header-CuTABeMH.js.map
