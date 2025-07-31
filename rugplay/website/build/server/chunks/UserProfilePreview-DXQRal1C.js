import { p as push, c as bind_props, a as pop, q as copy_payload, t as assign_payload, b as spread_props, y as props_id, n as derived, f as spread_attributes } from './index3-CthgjPPi.js';
import { c as cn } from './utils2-CLIgW4-x.js';
import { n as noop, C as Context, D as DOMContext, L as getTabbableCandidates, I as afterSleep, P as Portal, M as isTouch, N as isFocusVisible, h as isElement } from './scroll-lock-BUIxTk31.js';
import { b as box, w as watch, c as createBitsAttrs, a as createId, m as mergeProps, d as attachRef, g as getDataOpenClosed, p as getAriaExpanded } from './create-id-Bxd404XN.js';
import { F as Floating_layer, P as Popper_layer_force_mount, a as Popper_layer, g as getFloatingContentCSSVars } from './popper-layer-force-mount-BIcocscF.js';
import { F as Floating_layer_anchor, M as Mounted } from './mounted-Tbl-FfLm.js';
import './volume-settings-DX3g8058.js';
import { o as on } from './events-CF0F77H5.js';
import { u as useGraceArea } from './use-grace-area.svelte-Dsn6tMKF.js';
import './badge-Dggzsmpe.js';
import { S as Skeleton } from './skeleton-BrIQmewN.js';

const linkPreviewAttrs = createBitsAttrs({
  component: "link-preview",
  parts: ["content", "trigger"]
});
class LinkPreviewRootState {
  opts;
  hasSelection = false;
  isPointerDownOnContent = false;
  containsSelection = false;
  timeout = null;
  contentNode = null;
  contentMounted = false;
  triggerNode = null;
  isOpening = false;
  domContext = new DOMContext(() => null);
  constructor(opts) {
    this.opts = opts;
    watch(() => this.opts.open.current, (isOpen) => {
      if (!isOpen) {
        this.hasSelection = false;
        return;
      }
      if (!this.domContext) return;
      const handlePointerUp = () => {
        this.containsSelection = false;
        this.isPointerDownOnContent = false;
        afterSleep(1, () => {
          const isSelection = this.domContext.getDocument().getSelection()?.toString() !== "";
          if (isSelection) {
            this.hasSelection = true;
          } else {
            this.hasSelection = false;
          }
        });
      };
      const unsubListener = on(this.domContext.getDocument(), "pointerup", handlePointerUp);
      if (!this.contentNode) return;
      const tabCandidates = getTabbableCandidates(this.contentNode);
      for (const candidate of tabCandidates) {
        candidate.setAttribute("tabindex", "-1");
      }
      return () => {
        unsubListener();
        this.hasSelection = false;
        this.isPointerDownOnContent = false;
      };
    });
  }
  clearTimeout() {
    if (this.timeout) {
      this.domContext.clearTimeout(this.timeout);
      this.timeout = null;
    }
  }
  handleOpen() {
    this.clearTimeout();
    if (this.opts.open.current) return;
    this.isOpening = true;
    this.timeout = this.domContext.setTimeout(
      () => {
        if (this.isOpening) {
          this.opts.open.current = true;
          this.isOpening = false;
        }
      },
      this.opts.openDelay.current
    );
  }
  immediateClose() {
    this.clearTimeout();
    this.isOpening = false;
    this.opts.open.current = false;
  }
  handleClose() {
    this.isOpening = false;
    this.clearTimeout();
    if (!this.isPointerDownOnContent && !this.hasSelection) {
      this.timeout = this.domContext.setTimeout(
        () => {
          this.opts.open.current = false;
        },
        this.opts.closeDelay.current
      );
    }
  }
}
class LinkPreviewTriggerState {
  opts;
  root;
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.root.domContext = new DOMContext(opts.ref);
    this.onpointerenter = this.onpointerenter.bind(this);
    this.onpointerleave = this.onpointerleave.bind(this);
    this.onfocus = this.onfocus.bind(this);
    this.onblur = this.onblur.bind(this);
  }
  onpointerenter(e) {
    if (isTouch(e)) return;
    this.root.handleOpen();
  }
  onpointerleave(e) {
    if (isTouch(e)) return;
    if (!this.root.contentMounted) {
      this.root.immediateClose();
    }
  }
  onfocus(e) {
    if (!isFocusVisible(e.currentTarget)) return;
    this.root.handleOpen();
  }
  onblur(_) {
    this.root.handleClose();
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    "aria-haspopup": "dialog",
    "aria-expanded": getAriaExpanded(this.root.opts.open.current),
    "data-state": getDataOpenClosed(this.root.opts.open.current),
    "aria-controls": this.root.contentNode?.id,
    role: "button",
    [linkPreviewAttrs.trigger]: "",
    onpointerenter: this.onpointerenter,
    onfocus: this.onfocus,
    onblur: this.onblur,
    onpointerleave: this.onpointerleave,
    ...attachRef(this.opts.ref, (v) => this.root.triggerNode = v)
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class LinkPreviewContentState {
  opts;
  root;
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.root.domContext = new DOMContext(opts.ref);
    this.onpointerdown = this.onpointerdown.bind(this);
    this.onpointerenter = this.onpointerenter.bind(this);
    this.onfocusout = this.onfocusout.bind(this);
    useGraceArea({
      triggerNode: () => this.root.triggerNode,
      contentNode: () => this.opts.ref.current,
      enabled: () => this.root.opts.open.current,
      onPointerExit: () => {
        this.root.handleClose();
      }
    });
  }
  onpointerdown(e) {
    const target = e.target;
    if (!isElement(target)) return;
    if (e.currentTarget.contains(target)) {
      this.root.containsSelection = true;
    }
    this.root.hasSelection = true;
    this.root.isPointerDownOnContent = true;
  }
  onpointerenter(e) {
    if (isTouch(e)) return;
    this.root.handleOpen();
  }
  onfocusout(e) {
    e.preventDefault();
  }
  onInteractOutside = (e) => {
    this.opts.onInteractOutside.current(e);
    if (e.defaultPrevented) return;
    this.root.handleClose();
  };
  onEscapeKeydown = (e) => {
    this.opts.onEscapeKeydown.current?.(e);
    if (e.defaultPrevented) return;
    this.root.handleClose();
  };
  onOpenAutoFocus = (e) => {
    e.preventDefault();
  };
  onCloseAutoFocus = (e) => {
    e.preventDefault();
  };
  #snippetProps = derived(() => ({ open: this.root.opts.open.current }));
  get snippetProps() {
    return this.#snippetProps();
  }
  set snippetProps($$value) {
    return this.#snippetProps($$value);
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    tabindex: -1,
    "data-state": getDataOpenClosed(this.root.opts.open.current),
    [linkPreviewAttrs.content]: "",
    onpointerdown: this.onpointerdown,
    onpointerenter: this.onpointerenter,
    onfocusout: this.onfocusout,
    ...attachRef(this.opts.ref, (v) => this.root.contentNode = v)
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
  popperProps = {
    onInteractOutside: this.onInteractOutside,
    onEscapeKeydown: this.onEscapeKeydown,
    onOpenAutoFocus: this.onOpenAutoFocus,
    onCloseAutoFocus: this.onCloseAutoFocus
  };
}
const LinkPreviewRootContext = new Context("LinkPreview.Root");
function useLinkPreviewRoot(props) {
  return LinkPreviewRootContext.set(new LinkPreviewRootState(props));
}
function useLinkPreviewTrigger(props) {
  return new LinkPreviewTriggerState(props, LinkPreviewRootContext.get());
}
function useLinkPreviewContent(props) {
  return new LinkPreviewContentState(props, LinkPreviewRootContext.get());
}
function Link_preview($$payload, $$props) {
  push();
  let {
    open = false,
    onOpenChange = noop,
    openDelay = 700,
    closeDelay = 300,
    children
  } = $$props;
  useLinkPreviewRoot({
    open: box.with(() => open, (v) => {
      open = v;
      onOpenChange(v);
    }),
    openDelay: box.with(() => openDelay),
    closeDelay: box.with(() => closeDelay)
  });
  $$payload.out += `<!---->`;
  Floating_layer($$payload, {
    children: ($$payload2) => {
      children?.($$payload2);
      $$payload2.out += `<!---->`;
    }
  });
  $$payload.out += `<!---->`;
  bind_props($$props, { open });
  pop();
}
function Link_preview_content($$payload, $$props) {
  push();
  const uid = props_id($$payload);
  let {
    children,
    child,
    id = createId(uid),
    ref = null,
    side = "top",
    sideOffset = 0,
    align = "center",
    avoidCollisions = true,
    arrowPadding = 0,
    sticky = "partial",
    hideWhenDetached = false,
    collisionPadding = 0,
    onInteractOutside = noop,
    onEscapeKeydown = noop,
    forceMount = false,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const contentState = useLinkPreviewContent({
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v),
    onInteractOutside: box.with(() => onInteractOutside),
    onEscapeKeydown: box.with(() => onEscapeKeydown)
  });
  const floatingProps = {
    side,
    sideOffset,
    align,
    avoidCollisions,
    arrowPadding,
    sticky,
    hideWhenDetached,
    collisionPadding
  };
  const mergedProps = mergeProps(restProps, floatingProps, contentState.props);
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    if (forceMount) {
      $$payload2.out += "<!--[-->";
      {
        let popper = function($$payload3, { props, wrapperProps }) {
          const mergedProps2 = mergeProps(props, {
            style: getFloatingContentCSSVars("link-preview")
          });
          if (child) {
            $$payload3.out += "<!--[-->";
            child($$payload3, {
              props: mergedProps2,
              wrapperProps,
              ...contentState.snippetProps
            });
            $$payload3.out += `<!---->`;
          } else {
            $$payload3.out += "<!--[!-->";
            $$payload3.out += `<div${spread_attributes({ ...wrapperProps }, null)}><div${spread_attributes({ ...mergedProps2 }, null)}>`;
            children?.($$payload3);
            $$payload3.out += `<!----></div></div>`;
          }
          $$payload3.out += `<!--]-->`;
        };
        Popper_layer_force_mount($$payload2, spread_props([
          mergedProps,
          contentState.popperProps,
          {
            ref: contentState.opts.ref,
            enabled: contentState.root.opts.open.current,
            id,
            trapFocus: false,
            loop: false,
            preventScroll: false,
            forceMount: true,
            popper,
            $$slots: { popper: true }
          }
        ]));
      }
    } else if (!forceMount) {
      $$payload2.out += "<!--[1-->";
      {
        let popper = function($$payload3, { props, wrapperProps }) {
          const mergedProps2 = mergeProps(props, {
            style: getFloatingContentCSSVars("link-preview")
          });
          if (child) {
            $$payload3.out += "<!--[-->";
            child($$payload3, {
              props: mergedProps2,
              wrapperProps,
              ...contentState.snippetProps
            });
            $$payload3.out += `<!---->`;
          } else {
            $$payload3.out += "<!--[!-->";
            $$payload3.out += `<div${spread_attributes({ ...wrapperProps }, null)}><div${spread_attributes({ ...mergedProps2 }, null)}>`;
            children?.($$payload3);
            $$payload3.out += `<!----></div></div>`;
          }
          $$payload3.out += `<!--]--> `;
          Mounted($$payload3, {
            get mounted() {
              return contentState.root.contentMounted;
            },
            set mounted($$value) {
              contentState.root.contentMounted = $$value;
              $$settled = false;
            }
          });
          $$payload3.out += `<!---->`;
        };
        Popper_layer($$payload2, spread_props([
          mergedProps,
          contentState.popperProps,
          {
            ref: contentState.opts.ref,
            present: contentState.root.opts.open.current,
            id,
            trapFocus: false,
            loop: false,
            preventScroll: false,
            forceMount: false,
            popper,
            $$slots: { popper: true }
          }
        ]));
      }
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]-->`;
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
function Link_preview_trigger($$payload, $$props) {
  push();
  const uid = props_id($$payload);
  let {
    ref = null,
    id = createId(uid),
    child,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const triggerState = useLinkPreviewTrigger({
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, triggerState.props);
  $$payload.out += `<!---->`;
  Floating_layer_anchor($$payload, {
    id,
    ref: triggerState.opts.ref,
    children: ($$payload2) => {
      if (child) {
        $$payload2.out += "<!--[-->";
        child($$payload2, { props: mergedProps });
        $$payload2.out += `<!---->`;
      } else {
        $$payload2.out += "<!--[!-->";
        $$payload2.out += `<a${spread_attributes({ ...mergedProps }, null)}>`;
        children?.($$payload2);
        $$payload2.out += `<!----></a>`;
      }
      $$payload2.out += `<!--]-->`;
    }
  });
  $$payload.out += `<!---->`;
  bind_props($$props, { ref });
  pop();
}
function Hover_card_content($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    align = "center",
    sideOffset = 4,
    portalProps,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!---->`;
    Portal($$payload2, spread_props([
      portalProps,
      {
        children: ($$payload3) => {
          $$payload3.out += `<!---->`;
          Link_preview_content($$payload3, spread_props([
            {
              "data-slot": "hover-card-content",
              align,
              sideOffset,
              class: cn("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 outline-hidden z-50 mt-3 w-64 rounded-md border p-4 shadow-md outline-none", className)
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
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
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
function Hover_card_trigger($$payload, $$props) {
  push();
  let { ref = null, $$slots, $$events, ...restProps } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!---->`;
    Link_preview_trigger($$payload2, spread_props([
      { "data-slot": "hover-card-trigger" },
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
const Root = Link_preview;
function UserProfilePreview($$payload, $$props) {
  push();
  let { userId, showBio = true } = $$props;
  $$payload.out += `<div class="p-4">`;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="flex gap-4">`;
    Skeleton($$payload, { class: "size-14 shrink-0 rounded-full" });
    $$payload.out += `<!----> <div class="min-w-0 flex-1 space-y-2"><div class="flex items-center space-x-2">`;
    Skeleton($$payload, { class: "h-5 w-[150px]" });
    $$payload.out += `<!----> `;
    Skeleton($$payload, { class: "h-5 w-[80px]" });
    $$payload.out += `<!----></div> `;
    Skeleton($$payload, { class: "h-4 w-[130px]" });
    $$payload.out += `<!----> `;
    Skeleton($$payload, { class: "h-4 w-[200px]" });
    $$payload.out += `<!----> `;
    Skeleton($$payload, { class: "h-4 w-[200px]" });
    $$payload.out += `<!----> `;
    Skeleton($$payload, { class: "h-4 w-[200px]" });
    $$payload.out += `<!----> `;
    Skeleton($$payload, { class: "h-4 w-[200px]" });
    $$payload.out += `<!----> <div class="space-y-1 pt-2"><div class="flex items-center justify-between">`;
    Skeleton($$payload, { class: "h-4 w-[80px]" });
    $$payload.out += `<!----> `;
    Skeleton($$payload, { class: "h-4 w-[100px]" });
    $$payload.out += `<!----></div> <div class="flex items-center justify-between">`;
    Skeleton($$payload, { class: "h-4 w-[50px]" });
    $$payload.out += `<!----> `;
    Skeleton($$payload, { class: "h-4 w-[90px]" });
    $$payload.out += `<!----></div></div> `;
    Skeleton($$payload, { class: "h-4 w-[180px]" });
    $$payload.out += `<!----></div></div>`;
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}

export { Hover_card_trigger as H, Root as R, UserProfilePreview as U, Hover_card_content as a };
//# sourceMappingURL=UserProfilePreview-DXQRal1C.js.map
