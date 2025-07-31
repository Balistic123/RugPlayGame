import { p as push, f as spread_attributes, g as clsx, c as bind_props, a as pop } from './index3-CthgjPPi.js';
import { c as cn } from './utils2-CLIgW4-x.js';

function Card_description($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out += `<p${spread_attributes(
    {
      "data-slot": "card-description",
      class: clsx(cn("text-muted-foreground text-sm", className)),
      ...restProps
    },
    null
  )}>`;
  children?.($$payload);
  $$payload.out += `<!----></p>`;
  bind_props($$props, { ref });
  pop();
}

export { Card_description as C };
//# sourceMappingURL=card-description-BhiVZbL9.js.map
