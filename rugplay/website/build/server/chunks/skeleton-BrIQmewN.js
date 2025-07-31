import { p as push, f as spread_attributes, g as clsx, c as bind_props, a as pop } from './index3-CthgjPPi.js';
import { c as cn } from './utils2-CLIgW4-x.js';

function Skeleton($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out += `<span${spread_attributes(
    {
      "data-slot": "skeleton",
      class: clsx(cn("bg-accent animate-pulse rounded-md", className)),
      ...restProps
    },
    null
  )}></span>`;
  bind_props($$props, { ref });
  pop();
}

export { Skeleton as S };
//# sourceMappingURL=skeleton-BrIQmewN.js.map
