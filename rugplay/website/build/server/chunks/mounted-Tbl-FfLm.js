import { p as push, a as pop, c as bind_props } from './index3-CthgjPPi.js';
import { b as box } from './create-id-Bxd404XN.js';
import { u as useFloatingAnchorState } from './popper-layer-force-mount-BIcocscF.js';
import { n as noop } from './scroll-lock-BUIxTk31.js';

function Floating_layer_anchor($$payload, $$props) {
  push();
  let {
    id,
    children,
    virtualEl,
    ref,
    tooltip = false
  } = $$props;
  useFloatingAnchorState(
    {
      id: box.with(() => id),
      virtualEl: box.with(() => virtualEl),
      ref
    },
    tooltip
  );
  children?.($$payload);
  $$payload.out += `<!---->`;
  pop();
}
function Mounted($$payload, $$props) {
  push();
  let { mounted = false, onMountedChange = noop } = $$props;
  bind_props($$props, { mounted });
  pop();
}

export { Floating_layer_anchor as F, Mounted as M };
//# sourceMappingURL=mounted-Tbl-FfLm.js.map
