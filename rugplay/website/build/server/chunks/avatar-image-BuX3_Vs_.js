import { p as push, q as copy_payload, t as assign_payload, c as bind_props, a as pop, b as spread_props, y as props_id, f as spread_attributes } from './index3-CthgjPPi.js';
import { c as cn } from './utils2-CLIgW4-x.js';
import { a as createId, b as box, m as mergeProps } from './create-id-Bxd404XN.js';
import { u as useAvatarImage } from './avatar-fallback-BVDrtls6.js';

function Avatar_image$1($$payload, $$props) {
  push();
  const uid = props_id($$payload);
  let {
    src,
    child,
    id = createId(uid),
    ref = null,
    crossorigin = void 0,
    referrerpolicy = void 0,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const imageState = useAvatarImage({
    src: box.with(() => src),
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v),
    crossOrigin: box.with(() => crossorigin),
    referrerPolicy: box.with(() => referrerpolicy)
  });
  const mergedProps = mergeProps(restProps, imageState.props);
  if (child) {
    $$payload.out += "<!--[-->";
    child($$payload, { props: mergedProps });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<img${spread_attributes({ ...mergedProps, src }, null)} onload="this.__e=event" onerror="this.__e=event"/>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { ref });
  pop();
}
function Avatar_image($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!---->`;
    Avatar_image$1($$payload2, spread_props([
      {
        "data-slot": "avatar-image",
        class: cn("aspect-square size-full", className)
      },
      restProps,
      {
        get ref() {
          return ref;
        },
        set ref($$value) {
          ref = $$value;
          $$settled = false;
        }
      }
    ]));
    $$payload2.out += `<!---->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { ref });
  pop();
}

export { Avatar_image as A };
//# sourceMappingURL=avatar-image-BuX3_Vs_.js.map
