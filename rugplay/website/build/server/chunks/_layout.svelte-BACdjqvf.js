import { p as push, a as pop, b as spread_props, c as bind_props, d as attr, e as ensure_array_like, f as spread_attributes, g as clsx, s as setContext, h as hasContext, j as getContext, k as attr_class, l as attr_style, m as escape_html, n as derived, o as stringify, q as copy_payload, t as assign_payload, u as store_get, v as unsubscribe_stores, w as sanitize_props, x as slot, y as props_id } from './index3-CthgjPPi.js';
import './volume-settings-DX3g8058.js';
import { c as cn$1, f as formatValue, b as getPublicUrl } from './utils2-CLIgW4-x.js';
import { P as Provider, W as Wallet, R as Root$3, T as Tooltip_trigger, a as Tooltip_content } from './wallet-DXbnVvxq.js';
import { M as MediaQuery } from './index-server-DH7p7JOq.js';
import { c as ce } from './index-opKo-a_0.js';
import { c as createBitsAttrs, b as box, m as mergeProps, w as watch, a as createId, d as attachRef, g as getDataOpenClosed, e as getAriaOrientation, f as getDataDisabled, h as getAriaDisabled } from './create-id-Bxd404XN.js';
import { B as Button } from './button-Cg_QiDbD.js';
import { I as Icon$1 } from './Icon-DETra0Ze.js';
import { R as Root$2, D as Dialog_content, a as Dialog, b as Dialog_content$1, c as Dialog_close, X, d as Dialog_overlay$1 } from './index5-D35Z60w5.js';
import { P as Portal, n as noop, F as FocusScopeContext, C as Context$1, D as DOMContext, a as CustomEventDispatcher, b as afterTick, i as isTabbable, T as TAB, c as isHTMLElement, A as ARROW_DOWN, d as PAGE_UP, H as HOME, e as ARROW_UP, f as PAGE_DOWN, E as END, g as focusFirst, h as isElement, j as isElementOrSVGElement, k as getDocument, t as tabbable, l as isFocusable, m as focusable, o as isBrowser, p as ARROW_RIGHT, q as ARROW_LEFT, S as SPACE, r as ENTER } from './scroll-lock-BUIxTk31.js';
import { t as toastState, S as SonnerState, c as cn, L as Loader } from './Toaster.svelte_svelte_type_style_lang-CcrnaSIn.js';
import { M as Mode_watcher, d as derivedMode, s as setMode } from './mode-watcher-Deh9pJeM.js';
import { S as Skeleton } from './skeleton-BrIQmewN.js';
import { D as Dialog_header, a as Dialog_title, b as Dialog_description, c as Dialog_title$1, d as Dialog_description$1 } from './dialog-description-4JjLXrIw.js';
import { I as run } from './index2-D4eROfHK.js';
import { u as useDOMTypeahead } from './use-dom-typeahead.svelte-_8fvw_os.js';
import { g as getElemDirection, a as getDirectionalKeys } from './get-directional-keys-C2SqNJng.js';
import { u as useGraceArea } from './use-grace-area.svelte-Dsn6tMKF.js';
import { F as Floating_layer, P as Popper_layer_force_mount, a as Popper_layer, g as getFloatingContentCSSVars } from './popper-layer-force-mount-BIcocscF.js';
import { A as Avatar, a as Avatar_fallback } from './avatar-fallback-BVDrtls6.js';
import { A as Avatar_image } from './avatar-image-BuX3_Vs_.js';
import { B as Badge } from './badge-Dggzsmpe.js';
import { U as USER_DATA } from './user-data-CT5kjyaY.js';
import { P as PORTFOLIO_SUMMARY } from './portfolio-data-D2WCRVa2.js';
import { S as SignInConfirmDialog, s as signOut } from './SignInConfirmDialog-CRywm7vo.js';
import { g as goto } from './client-s_UYc3Sk.js';
import { L as Loader_circle } from './loader-circle-04fw-oOl.js';
import { I as Input } from './input-BZy6dM-O.js';
import { L as Label } from './label-CxNim4GD.js';
import { A as Alert } from './alert-9IclKPUx.js';
import { A as Alert_description } from './alert-description-DJRrBUyj.js';
import { I as Icon } from './Icon2-Bqt4BCIy.js';
import { C as Check } from './check-DvLwJGCG.js';
import { U as UserManualModal, a as User, B as Book_open, S as Shield } from './UserManualModal-so0dpq85.js';
import { i as isLoadingTrades, l as liveTradesStore } from './websocket-DCXra_5K.js';
import { U as UNREAD_COUNT } from './notifications-5V396xYk.js';
import { T as Trophy } from './trophy-37PUKEsG.js';
import { C as Chart_column } from './chart-column-CyZFLV3I.js';
import { C as Coins } from './coins-DVrva8oo.js';
import { B as Bell } from './bell-BZLA0L9E.js';
import { I as Info } from './info-DOg2g4C3.js';
import { A as Activity } from './activity-DwHC2T1s.js';
import { T as Trending_up } from './trending-up-DbscwFys.js';
import { T as Trending_down } from './trending-down-DcTfhCCA.js';
import { C as Crown } from './crown-D4s6aR5T.js';
import { K as Key } from './key-DSJ0UTHG.js';
import { H as Hammer } from './hammer-DUPW_47m.js';
import { T as Ticket } from './ticket-CG_Dm67D.js';
import { S as Scale } from './scale-DK0bXbRB.js';
import { S as Shield_check } from './shield-check-BKIM_XIg.js';
import { p as page } from './index6-BNoyVQ18.js';
import './clsx-ChV9xqsO.js';
import './events-CF0F77H5.js';
import 'better-auth/svelte';
import 'better-auth/client/plugins';
import './shared-server-BfUoNEXY.js';
import './exports-Cv9LZeD1.js';
import './chevron-left-Cefe-Bo5.js';
import './chevron-right-BZJYVhmO.js';
import './client2-DLmkXqdH.js';

const MOBILE_BREAKPOINT = 768;
class IsMobile extends MediaQuery {
  constructor() {
    super(`max-width: ${MOBILE_BREAKPOINT - 1}px`);
  }
}
const SIDEBAR_COOKIE_NAME = "sidebar:state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";
class SidebarState {
  props;
  #open = derived(() => this.props.open());
  get open() {
    return this.#open();
  }
  set open($$value) {
    return this.#open($$value);
  }
  openMobile = false;
  setOpen;
  #isMobile;
  #state = derived(() => this.open ? "expanded" : "collapsed");
  get state() {
    return this.#state();
  }
  set state($$value) {
    return this.#state($$value);
  }
  constructor(props) {
    this.setOpen = props.setOpen;
    this.#isMobile = new IsMobile();
    this.props = props;
  }
  // Convenience getter for checking if the sidebar is mobile
  // without this, we would need to use `sidebar.isMobile.current` everywhere
  get isMobile() {
    return this.#isMobile.current;
  }
  // Event handler to apply to the `<svelte:window>`
  handleShortcutKeydown = (e) => {
    if (e.key === SIDEBAR_KEYBOARD_SHORTCUT && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      this.toggle();
    }
  };
  setOpenMobile = (value) => {
    this.openMobile = value;
  };
  toggle = () => {
    return this.#isMobile.current ? this.openMobile = !this.openMobile : this.setOpen(!this.open);
  };
}
const SYMBOL_KEY = "scn-sidebar";
function setSidebar(props) {
  return setContext(Symbol.for(SYMBOL_KEY), new SidebarState(props));
}
function useSidebar() {
  return getContext(Symbol.for(SYMBOL_KEY));
}
function Sidebar_content($$payload, $$props) {
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
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      class: clsx(cn$1("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", className)),
      ...restProps
    },
    null
  )}>`;
  children?.($$payload);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { ref });
  pop();
}
function Sidebar_footer($$payload, $$props) {
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
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      class: clsx(cn$1("flex flex-col gap-2 p-2", className)),
      ...restProps
    },
    null
  )}>`;
  children?.($$payload);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { ref });
  pop();
}
function Sidebar_group_content($$payload, $$props) {
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
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      class: clsx(cn$1("w-full text-sm", className)),
      ...restProps
    },
    null
  )}>`;
  children?.($$payload);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { ref });
  pop();
}
function Sidebar_group_label($$payload, $$props) {
  push();
  let {
    ref = null,
    children,
    child,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const mergedProps = {
    class: cn$1("text-sidebar-foreground/70 ring-sidebar-ring outline-hidden flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", className),
    "data-slot": "sidebar-group-label",
    "data-sidebar": "group-label",
    ...restProps
  };
  if (child) {
    $$payload.out += "<!--[-->";
    child($$payload, { props: mergedProps });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div${spread_attributes({ ...mergedProps }, null)}>`;
    children?.($$payload);
    $$payload.out += `<!----></div>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { ref });
  pop();
}
function Sidebar_group($$payload, $$props) {
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
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      class: clsx(cn$1("relative flex w-full min-w-0 flex-col p-2", className)),
      ...restProps
    },
    null
  )}>`;
  children?.($$payload);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { ref });
  pop();
}
function Sidebar_header($$payload, $$props) {
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
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      class: clsx(cn$1("flex flex-col gap-2 p-2", className)),
      ...restProps
    },
    null
  )}>`;
  children?.($$payload);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { ref });
  pop();
}
function Sidebar_inset($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out += `<main${spread_attributes(
    {
      "data-slot": "sidebar-inset",
      class: clsx(cn$1("bg-background relative flex w-full flex-1 flex-col", "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm", className)),
      ...restProps
    },
    null
  )}>`;
  children?.($$payload);
  $$payload.out += `<!----></main>`;
  bind_props($$props, { ref });
  pop();
}
function Sidebar_menu_badge($$payload, $$props) {
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
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      class: clsx(cn$1("text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums", "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", className)),
      ...restProps
    },
    null
  )}>`;
  children?.($$payload);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { ref });
  pop();
}
function useRovingFocus(opts) {
  const currentTabStopId = box(null);
  function getCandidateNodes() {
    if (!isBrowser) return [];
    if (!opts.rootNode.current) return [];
    if (opts.candidateSelector) {
      const candidates = Array.from(opts.rootNode.current.querySelectorAll(opts.candidateSelector));
      return candidates;
    } else if (opts.candidateAttr) {
      const candidates = Array.from(opts.rootNode.current.querySelectorAll(`[${opts.candidateAttr}]:not([data-disabled])`));
      return candidates;
    }
    return [];
  }
  function focusFirstCandidate() {
    const items = getCandidateNodes();
    if (!items.length) return;
    items[0]?.focus();
  }
  function handleKeydown(node, e, both = false) {
    const rootNode = opts.rootNode.current;
    if (!rootNode || !node) return;
    const items = getCandidateNodes();
    if (!items.length) return;
    const currentIndex = items.indexOf(node);
    const dir = getElemDirection(rootNode);
    const { nextKey, prevKey } = getDirectionalKeys(dir, opts.orientation.current);
    const loop = opts.loop.current;
    const keyToIndex = {
      [nextKey]: currentIndex + 1,
      [prevKey]: currentIndex - 1,
      [HOME]: 0,
      [END]: items.length - 1
    };
    if (both) {
      const altNextKey = nextKey === ARROW_DOWN ? ARROW_RIGHT : ARROW_DOWN;
      const altPrevKey = prevKey === ARROW_UP ? ARROW_LEFT : ARROW_UP;
      keyToIndex[altNextKey] = currentIndex + 1;
      keyToIndex[altPrevKey] = currentIndex - 1;
    }
    let itemIndex = keyToIndex[e.key];
    if (itemIndex === void 0) return;
    e.preventDefault();
    if (itemIndex < 0 && loop) {
      itemIndex = items.length - 1;
    } else if (itemIndex === items.length && loop) {
      itemIndex = 0;
    }
    const itemToFocus = items[itemIndex];
    if (!itemToFocus) return;
    itemToFocus.focus();
    currentTabStopId.current = itemToFocus.id;
    opts.onCandidateFocus?.(itemToFocus);
    return itemToFocus;
  }
  function getTabIndex(node) {
    const items = getCandidateNodes();
    const anyActive = currentTabStopId.current !== null;
    if (node && !anyActive && items[0] === node) {
      currentTabStopId.current = node.id;
      return 0;
    } else if (node?.id === currentTabStopId.current) {
      return 0;
    }
    return -1;
  }
  return {
    setCurrentTabStopId(id) {
      currentTabStopId.current = id;
    },
    getTabIndex,
    handleKeydown,
    focusFirstCandidate,
    currentTabStopId
  };
}
const SELECTION_KEYS = [ENTER, SPACE];
const FIRST_KEYS = [ARROW_DOWN, PAGE_UP, HOME];
const LAST_KEYS = [ARROW_UP, PAGE_DOWN, END];
const FIRST_LAST_KEYS = [...FIRST_KEYS, ...LAST_KEYS];
function isMouseEvent(event) {
  return event.pointerType === "mouse";
}
function getTabbableOptions() {
  return {
    getShadowRoot: true,
    displayCheck: (
      // JSDOM does not support the `tabbable` library. To solve this we can
      // check if `ResizeObserver` is a real function (not polyfilled), which
      // determines if the current environment is JSDOM-like.
      typeof ResizeObserver === "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
    )
  };
}
function getTabbableFrom(currentNode, direction) {
  if (!isTabbable(currentNode, getTabbableOptions())) {
    return getTabbableFromFocusable(currentNode, direction);
  }
  const doc = getDocument(currentNode);
  const allTabbable = tabbable(doc.body, getTabbableOptions());
  if (direction === "prev")
    allTabbable.reverse();
  const activeIndex = allTabbable.indexOf(currentNode);
  if (activeIndex === -1)
    return doc.body;
  const nextTabbableElements = allTabbable.slice(activeIndex + 1);
  return nextTabbableElements[0];
}
function getTabbableFromFocusable(currentNode, direction) {
  const doc = getDocument(currentNode);
  if (!isFocusable(currentNode, getTabbableOptions()))
    return doc.body;
  const allFocusable = focusable(doc.body, getTabbableOptions());
  if (direction === "prev")
    allFocusable.reverse();
  const activeIndex = allFocusable.indexOf(currentNode);
  if (activeIndex === -1)
    return doc.body;
  const nextFocusableElements = allFocusable.slice(activeIndex + 1);
  return nextFocusableElements.find((node) => isTabbable(node, getTabbableOptions())) ?? doc.body;
}
const MenuRootContext = new Context$1("Menu.Root");
const MenuMenuContext = new Context$1("Menu.Root | Menu.Sub");
const MenuContentContext = new Context$1("Menu.Content");
const MenuGroupContext = new Context$1("Menu.Group | Menu.RadioGroup");
const MenuOpenEvent = new CustomEventDispatcher("bitsmenuopen", { bubbles: false, cancelable: true });
const menuAttrs = createBitsAttrs({
  component: "menu",
  parts: [
    "trigger",
    "content",
    "sub-trigger",
    "item",
    "group",
    "group-heading",
    "checkbox-group",
    "checkbox-item",
    "radio-group",
    "radio-item",
    "separator",
    "sub-content",
    "arrow"
  ]
});
class MenuRootState {
  opts;
  isUsingKeyboard = new IsUsingKeyboard();
  ignoreCloseAutoFocus = false;
  isPointerInTransit = false;
  constructor(opts) {
    this.opts = opts;
  }
  getBitsAttr = (part) => {
    return menuAttrs.getAttr(part, this.opts.variant.current);
  };
}
class MenuMenuState {
  opts;
  root;
  parentMenu;
  contentId = box.with(() => "");
  contentNode = null;
  triggerNode = null;
  constructor(opts, root, parentMenu) {
    this.opts = opts;
    this.root = root;
    this.parentMenu = parentMenu;
    if (parentMenu) {
      watch(() => parentMenu.opts.open.current, () => {
        if (parentMenu.opts.open.current) return;
        this.opts.open.current = false;
      });
    }
  }
  toggleOpen() {
    this.opts.open.current = !this.opts.open.current;
  }
  onOpen() {
    this.opts.open.current = true;
  }
  onClose() {
    this.opts.open.current = false;
  }
}
class MenuContentState {
  opts;
  parentMenu;
  search = "";
  #timer = 0;
  #handleTypeaheadSearch;
  rovingFocusGroup;
  mounted = false;
  #isSub;
  domContext;
  constructor(opts, parentMenu) {
    this.opts = opts;
    this.parentMenu = parentMenu;
    this.domContext = new DOMContext(opts.ref);
    parentMenu.contentId = opts.id;
    this.#isSub = opts.isSub ?? false;
    this.onkeydown = this.onkeydown.bind(this);
    this.onblur = this.onblur.bind(this);
    this.onfocus = this.onfocus.bind(this);
    this.handleInteractOutside = this.handleInteractOutside.bind(this);
    useGraceArea({
      contentNode: () => this.parentMenu.contentNode,
      triggerNode: () => this.parentMenu.triggerNode,
      enabled: () => this.parentMenu.opts.open.current && Boolean(this.parentMenu.triggerNode?.hasAttribute(this.parentMenu.root.getBitsAttr("sub-trigger"))),
      onPointerExit: () => {
        this.parentMenu.opts.open.current = false;
      },
      setIsPointerInTransit: (value) => {
        this.parentMenu.root.isPointerInTransit = value;
      }
    });
    this.#handleTypeaheadSearch = useDOMTypeahead({
      getActiveElement: () => this.domContext.getActiveElement(),
      getWindow: () => this.domContext.getWindow()
    }).handleTypeaheadSearch;
    this.rovingFocusGroup = useRovingFocus({
      rootNode: box.with(() => this.parentMenu.contentNode),
      candidateAttr: this.parentMenu.root.getBitsAttr("item"),
      loop: this.opts.loop,
      orientation: box.with(() => "vertical")
    });
    watch(() => this.parentMenu.contentNode, (contentNode) => {
      if (!contentNode) return;
      const handler = () => {
        afterTick(() => {
          if (!this.parentMenu.root.isUsingKeyboard.current) return;
          this.rovingFocusGroup.focusFirstCandidate();
        });
      };
      return MenuOpenEvent.listen(contentNode, handler);
    });
  }
  #getCandidateNodes() {
    const node = this.parentMenu.contentNode;
    if (!node) return [];
    const candidates = Array.from(node.querySelectorAll(`[${this.parentMenu.root.getBitsAttr("item")}]:not([data-disabled])`));
    return candidates;
  }
  #isPointerMovingToSubmenu() {
    return this.parentMenu.root.isPointerInTransit;
  }
  onCloseAutoFocus = (e) => {
    this.opts.onCloseAutoFocus.current(e);
    if (e.defaultPrevented || this.#isSub) return;
    if (this.parentMenu.triggerNode && isTabbable(this.parentMenu.triggerNode)) {
      this.parentMenu.triggerNode.focus();
    }
  };
  handleTabKeyDown(e) {
    let rootMenu = this.parentMenu;
    while (rootMenu.parentMenu !== null) {
      rootMenu = rootMenu.parentMenu;
    }
    if (!rootMenu.triggerNode) {
      return;
    }
    e.preventDefault();
    const nodeToFocus = getTabbableFrom(rootMenu.triggerNode, e.shiftKey ? "prev" : "next");
    if (nodeToFocus) {
      this.parentMenu.root.ignoreCloseAutoFocus = true;
      rootMenu.onClose();
      afterTick(() => {
        nodeToFocus.focus();
        afterTick(() => {
          this.parentMenu.root.ignoreCloseAutoFocus = false;
        });
      });
    } else {
      this.domContext.getDocument().body.focus();
    }
  }
  onkeydown(e) {
    if (e.defaultPrevented) return;
    if (e.key === TAB) {
      this.handleTabKeyDown(e);
      return;
    }
    const target = e.target;
    const currentTarget = e.currentTarget;
    if (!isHTMLElement(target) || !isHTMLElement(currentTarget)) return;
    const isKeydownInside = target.closest(`[${this.parentMenu.root.getBitsAttr("content")}]`)?.id === this.parentMenu.contentId.current;
    const isModifierKey = e.ctrlKey || e.altKey || e.metaKey;
    const isCharacterKey = e.key.length === 1;
    const kbdFocusedEl = this.rovingFocusGroup.handleKeydown(target, e);
    if (kbdFocusedEl) return;
    if (e.code === "Space") return;
    const candidateNodes = this.#getCandidateNodes();
    if (isKeydownInside) {
      if (!isModifierKey && isCharacterKey) {
        this.#handleTypeaheadSearch(e.key, candidateNodes);
      }
    }
    if (e.target?.id !== this.parentMenu.contentId.current) return;
    if (!FIRST_LAST_KEYS.includes(e.key)) return;
    e.preventDefault();
    if (LAST_KEYS.includes(e.key)) {
      candidateNodes.reverse();
    }
    focusFirst(candidateNodes, { select: false }, () => this.domContext.getActiveElement());
  }
  onblur(e) {
    if (!isElement(e.currentTarget)) return;
    if (!isElement(e.target)) return;
    if (!e.currentTarget.contains?.(e.target)) {
      this.domContext.getWindow().clearTimeout(this.#timer);
      this.search = "";
    }
  }
  onfocus(_) {
    if (!this.parentMenu.root.isUsingKeyboard.current) return;
    afterTick(() => this.rovingFocusGroup.focusFirstCandidate());
  }
  onItemEnter() {
    return this.#isPointerMovingToSubmenu();
  }
  onItemLeave(e) {
    if (e.currentTarget.hasAttribute(this.parentMenu.root.getBitsAttr("sub-trigger"))) return;
    if (this.#isPointerMovingToSubmenu() || this.parentMenu.root.isUsingKeyboard.current) return;
    const contentNode = this.parentMenu.contentNode;
    contentNode?.focus();
    this.rovingFocusGroup.setCurrentTabStopId("");
  }
  onTriggerLeave() {
    if (this.#isPointerMovingToSubmenu()) return true;
    return false;
  }
  onOpenAutoFocus = (e) => {
    if (e.defaultPrevented) return;
    e.preventDefault();
    const contentNode = this.parentMenu.contentNode;
    contentNode?.focus();
  };
  handleInteractOutside(e) {
    if (!isElementOrSVGElement(e.target)) return;
    const triggerId = this.parentMenu.triggerNode?.id;
    if (e.target.id === triggerId) {
      e.preventDefault();
      return;
    }
    if (e.target.closest(`#${triggerId}`)) {
      e.preventDefault();
    }
  }
  #snippetProps = derived(() => ({ open: this.parentMenu.opts.open.current }));
  get snippetProps() {
    return this.#snippetProps();
  }
  set snippetProps($$value) {
    return this.#snippetProps($$value);
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    role: "menu",
    "aria-orientation": getAriaOrientation("vertical"),
    [this.parentMenu.root.getBitsAttr("content")]: "",
    "data-state": getDataOpenClosed(this.parentMenu.opts.open.current),
    onkeydown: this.onkeydown,
    onblur: this.onblur,
    onfocus: this.onfocus,
    dir: this.parentMenu.root.opts.dir.current,
    style: { pointerEvents: "auto" },
    ...attachRef(this.opts.ref, (v) => {
      run(() => {
        if (this.parentMenu.contentNode !== v) {
          this.parentMenu.contentNode = v;
        }
      });
    })
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
  popperProps = {
    onCloseAutoFocus: (e) => this.onCloseAutoFocus(e)
  };
}
class MenuItemSharedState {
  opts;
  content;
  #isFocused = false;
  constructor(opts, content) {
    this.opts = opts;
    this.content = content;
    this.onpointermove = this.onpointermove.bind(this);
    this.onpointerleave = this.onpointerleave.bind(this);
    this.onfocus = this.onfocus.bind(this);
    this.onblur = this.onblur.bind(this);
  }
  onpointermove(e) {
    if (e.defaultPrevented) return;
    if (!isMouseEvent(e)) return;
    if (this.opts.disabled.current) {
      this.content.onItemLeave(e);
    } else {
      const defaultPrevented = this.content.onItemEnter();
      if (defaultPrevented) return;
      const item = e.currentTarget;
      if (!isHTMLElement(item)) return;
      item.focus();
    }
  }
  onpointerleave(e) {
    if (e.defaultPrevented) return;
    if (!isMouseEvent(e)) return;
    this.content.onItemLeave(e);
  }
  onfocus(e) {
    afterTick(() => {
      if (e.defaultPrevented || this.opts.disabled.current) return;
      this.#isFocused = true;
    });
  }
  onblur(e) {
    afterTick(() => {
      if (e.defaultPrevented) return;
      this.#isFocused = false;
    });
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    tabindex: -1,
    role: "menuitem",
    "aria-disabled": getAriaDisabled(this.opts.disabled.current),
    "data-disabled": getDataDisabled(this.opts.disabled.current),
    "data-highlighted": this.#isFocused ? "" : void 0,
    [this.content.parentMenu.root.getBitsAttr("item")]: "",
    //
    onpointermove: this.onpointermove,
    onpointerleave: this.onpointerleave,
    onfocus: this.onfocus,
    onblur: this.onblur,
    ...attachRef(this.opts.ref)
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class MenuItemState {
  opts;
  item;
  #isPointerDown = false;
  root;
  constructor(opts, item) {
    this.opts = opts;
    this.item = item;
    this.root = item.content.parentMenu.root;
    this.onkeydown = this.onkeydown.bind(this);
    this.onclick = this.onclick.bind(this);
    this.onpointerdown = this.onpointerdown.bind(this);
    this.onpointerup = this.onpointerup.bind(this);
  }
  #handleSelect() {
    if (this.item.opts.disabled.current) return;
    const selectEvent = new CustomEvent("menuitemselect", { bubbles: true, cancelable: true });
    this.opts.onSelect.current(selectEvent);
    afterTick(() => {
      if (selectEvent.defaultPrevented) {
        this.item.content.parentMenu.root.isUsingKeyboard.current = false;
        return;
      }
      if (this.opts.closeOnSelect.current) {
        this.item.content.parentMenu.root.opts.onClose();
      }
    });
  }
  onkeydown(e) {
    const isTypingAhead = this.item.content.search !== "";
    if (this.item.opts.disabled.current || isTypingAhead && e.key === SPACE) return;
    if (SELECTION_KEYS.includes(e.key)) {
      if (!isHTMLElement(e.currentTarget)) return;
      e.currentTarget.click();
      e.preventDefault();
    }
  }
  onclick(_) {
    if (this.item.opts.disabled.current) return;
    this.#handleSelect();
  }
  onpointerup(e) {
    if (e.defaultPrevented) return;
    if (!this.#isPointerDown) {
      if (!isHTMLElement(e.currentTarget)) return;
      e.currentTarget?.click();
    }
  }
  onpointerdown(_) {
    this.#isPointerDown = true;
  }
  #props = derived(() => mergeProps(this.item.props, {
    onclick: this.onclick,
    onpointerdown: this.onpointerdown,
    onpointerup: this.onpointerup,
    onkeydown: this.onkeydown
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class MenuGroupState {
  opts;
  root;
  groupHeadingId = void 0;
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    role: "group",
    "aria-labelledby": this.groupHeadingId,
    [this.root.getBitsAttr("group")]: "",
    ...attachRef(this.opts.ref)
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class MenuSeparatorState {
  opts;
  root;
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    role: "group",
    [this.root.getBitsAttr("separator")]: "",
    ...attachRef(this.opts.ref)
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
function useMenuRoot(props) {
  const root = new MenuRootState(props);
  FocusScopeContext.set({
    get ignoreCloseAutoFocus() {
      return root.ignoreCloseAutoFocus;
    }
  });
  return MenuRootContext.set(root);
}
function useMenuMenu(root, props) {
  return MenuMenuContext.set(new MenuMenuState(props, root, null));
}
function useMenuContent(props) {
  return MenuContentContext.set(new MenuContentState(props, MenuMenuContext.get()));
}
function useMenuItem(props) {
  const item = new MenuItemSharedState(props, MenuContentContext.get());
  return new MenuItemState(props, item);
}
function useMenuGroup(props) {
  return MenuGroupContext.set(new MenuGroupState(props, MenuRootContext.get()));
}
function useMenuSeparator(props) {
  return new MenuSeparatorState(props, MenuRootContext.get());
}
function Menu_item($$payload, $$props) {
  push();
  const uid = props_id($$payload);
  let {
    child,
    children,
    ref = null,
    id = createId(uid),
    disabled = false,
    onSelect = noop,
    closeOnSelect = true,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const itemState = useMenuItem({
    id: box.with(() => id),
    disabled: box.with(() => disabled),
    onSelect: box.with(() => onSelect),
    ref: box.with(() => ref, (v) => ref = v),
    closeOnSelect: box.with(() => closeOnSelect)
  });
  const mergedProps = mergeProps(restProps, itemState.props);
  if (child) {
    $$payload.out += "<!--[-->";
    child($$payload, { props: mergedProps });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div${spread_attributes({ ...mergedProps }, null)}>`;
    children?.($$payload);
    $$payload.out += `<!----></div>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { ref });
  pop();
}
function Menu_group($$payload, $$props) {
  push();
  const uid = props_id($$payload);
  let {
    children,
    child,
    ref = null,
    id = createId(uid),
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const groupState = useMenuGroup({
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, groupState.props);
  if (child) {
    $$payload.out += "<!--[-->";
    child($$payload, { props: mergedProps });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div${spread_attributes({ ...mergedProps }, null)}>`;
    children?.($$payload);
    $$payload.out += `<!----></div>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { ref });
  pop();
}
function Menu_separator($$payload, $$props) {
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
  const separatorState = useMenuSeparator({
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, separatorState.props);
  if (child) {
    $$payload.out += "<!--[-->";
    child($$payload, { props: mergedProps });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div${spread_attributes({ ...mergedProps }, null)}>`;
    children?.($$payload);
    $$payload.out += `<!----></div>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { ref });
  pop();
}
function Menu($$payload, $$props) {
  push();
  let {
    open = false,
    dir = "ltr",
    onOpenChange = noop,
    _internal_variant: variant = "dropdown-menu",
    children
  } = $$props;
  const root = useMenuRoot({
    variant: box.with(() => variant),
    dir: box.with(() => dir),
    onClose: () => {
      open = false;
      onOpenChange(false);
    }
  });
  useMenuMenu(root, {
    open: box.with(() => open, (v) => {
      open = v;
      onOpenChange(v);
    })
  });
  Floating_layer($$payload, {
    children: ($$payload2) => {
      children?.($$payload2);
      $$payload2.out += `<!---->`;
    }
  });
  bind_props($$props, { open });
  pop();
}
function Dropdown_menu_content$1($$payload, $$props) {
  push();
  const uid = props_id($$payload);
  let {
    id = createId(uid),
    child,
    children,
    ref = null,
    loop = true,
    onInteractOutside = noop,
    onEscapeKeydown = noop,
    onCloseAutoFocus = noop,
    forceMount = false,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const contentState = useMenuContent({
    id: box.with(() => id),
    loop: box.with(() => loop),
    ref: box.with(() => ref, (v) => ref = v),
    onCloseAutoFocus: box.with(() => onCloseAutoFocus)
  });
  const mergedProps = mergeProps(restProps, contentState.props);
  function handleInteractOutside(e) {
    contentState.handleInteractOutside(e);
    if (e.defaultPrevented) return;
    onInteractOutside(e);
    if (e.defaultPrevented) return;
    contentState.parentMenu.onClose();
  }
  function handleEscapeKeydown(e) {
    onEscapeKeydown(e);
    if (e.defaultPrevented) return;
    contentState.parentMenu.onClose();
  }
  if (forceMount) {
    $$payload.out += "<!--[-->";
    {
      let popper = function($$payload2, { props, wrapperProps }) {
        const finalProps = mergeProps(props, {
          style: getFloatingContentCSSVars("dropdown-menu")
        });
        if (child) {
          $$payload2.out += "<!--[-->";
          child($$payload2, {
            props: finalProps,
            wrapperProps,
            ...contentState.snippetProps
          });
          $$payload2.out += `<!---->`;
        } else {
          $$payload2.out += "<!--[!-->";
          $$payload2.out += `<div${spread_attributes({ ...wrapperProps }, null)}><div${spread_attributes({ ...finalProps }, null)}>`;
          children?.($$payload2);
          $$payload2.out += `<!----></div></div>`;
        }
        $$payload2.out += `<!--]-->`;
      };
      Popper_layer_force_mount($$payload, spread_props([
        mergedProps,
        contentState.popperProps,
        {
          ref: contentState.opts.ref,
          enabled: contentState.parentMenu.opts.open.current,
          onInteractOutside: handleInteractOutside,
          onEscapeKeydown: handleEscapeKeydown,
          trapFocus: true,
          loop,
          forceMount: true,
          id,
          popper,
          $$slots: { popper: true }
        }
      ]));
    }
  } else if (!forceMount) {
    $$payload.out += "<!--[1-->";
    {
      let popper = function($$payload2, { props, wrapperProps }) {
        const finalProps = mergeProps(props, {
          style: getFloatingContentCSSVars("dropdown-menu")
        });
        if (child) {
          $$payload2.out += "<!--[-->";
          child($$payload2, {
            props: finalProps,
            wrapperProps,
            ...contentState.snippetProps
          });
          $$payload2.out += `<!---->`;
        } else {
          $$payload2.out += "<!--[!-->";
          $$payload2.out += `<div${spread_attributes({ ...wrapperProps }, null)}><div${spread_attributes({ ...finalProps }, null)}>`;
          children?.($$payload2);
          $$payload2.out += `<!----></div></div>`;
        }
        $$payload2.out += `<!--]-->`;
      };
      Popper_layer($$payload, spread_props([
        mergedProps,
        contentState.popperProps,
        {
          ref: contentState.opts.ref,
          present: contentState.parentMenu.opts.open.current,
          onInteractOutside: handleInteractOutside,
          onEscapeKeydown: handleEscapeKeydown,
          trapFocus: true,
          loop,
          forceMount: false,
          id,
          popper,
          $$slots: { popper: true }
        }
      ]));
    }
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { ref });
  pop();
}
let isUsingKeyboard = false;
class IsUsingKeyboard {
  static _refs = 0;
  // Reference counting to avoid multiple listeners.
  static _cleanup;
  constructor() {
  }
  get current() {
    return isUsingKeyboard;
  }
  set current(value) {
    isUsingKeyboard = value;
  }
}
const sidebarMenuButtonVariants = ce({
  base: "peer/menu-button outline-hidden ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground group-has-data-[sidebar=menu-action]/menu-item:pr-8 data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm transition-[width,height,padding] focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:font-medium [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  variants: {
    variant: {
      default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
      outline: "bg-background hover:bg-sidebar-accent hover:text-sidebar-accent-foreground shadow-[0_0_0_1px_var(--sidebar-border)] hover:shadow-[0_0_0_1px_var(--sidebar-accent)]"
    },
    size: {
      default: "h-8 text-sm",
      sm: "h-7 text-xs",
      lg: "group-data-[collapsible=icon]:p-0! h-12 text-sm"
    }
  },
  defaultVariants: { variant: "default", size: "default" }
});
function Sidebar_menu_button($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    children,
    child,
    variant = "default",
    size = "default",
    isActive = false,
    tooltipContent,
    tooltipContentProps,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const sidebar = useSidebar();
  const buttonProps = {
    class: cn$1(sidebarMenuButtonVariants({ variant, size }), className),
    "data-slot": "sidebar-menu-button",
    "data-sidebar": "menu-button",
    "data-size": size,
    "data-active": isActive,
    ...restProps
  };
  function Button2($$payload2, { props }) {
    const mergedProps = mergeProps(buttonProps, props);
    if (child) {
      $$payload2.out += "<!--[-->";
      child($$payload2, { props: mergedProps });
      $$payload2.out += `<!---->`;
    } else {
      $$payload2.out += "<!--[!-->";
      $$payload2.out += `<button${spread_attributes({ ...mergedProps }, null)}>`;
      children?.($$payload2);
      $$payload2.out += `<!----></button>`;
    }
    $$payload2.out += `<!--]-->`;
  }
  if (!tooltipContent) {
    $$payload.out += "<!--[-->";
    Button2($$payload, {});
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<!---->`;
    Root$3($$payload, {
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        {
          let child2 = function($$payload3, { props }) {
            Button2($$payload3, { props });
          };
          Tooltip_trigger($$payload2, { child: child2, $$slots: { child: true } });
        }
        $$payload2.out += `<!----> <!---->`;
        Tooltip_content($$payload2, spread_props([
          {
            side: "right",
            align: "center",
            hidden: sidebar.state !== "collapsed" || sidebar.isMobile
          },
          tooltipContentProps,
          {
            children: ($$payload3) => {
              if (typeof tooltipContent === "string") {
                $$payload3.out += "<!--[-->";
                $$payload3.out += `${escape_html(tooltipContent)}`;
              } else if (tooltipContent) {
                $$payload3.out += "<!--[1-->";
                tooltipContent($$payload3);
                $$payload3.out += `<!---->`;
              } else {
                $$payload3.out += "<!--[!-->";
              }
              $$payload3.out += `<!--]-->`;
            },
            $$slots: { default: true }
          }
        ]));
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { ref });
  pop();
}
function Sidebar_menu_item($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out += `<li${spread_attributes(
    {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      class: clsx(cn$1("group/menu-item relative", className)),
      ...restProps
    },
    null
  )}>`;
  children?.($$payload);
  $$payload.out += `<!----></li>`;
  bind_props($$props, { ref });
  pop();
}
function Sidebar_menu($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out += `<ul${spread_attributes(
    {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      class: clsx(cn$1("flex w-full min-w-0 flex-col gap-1", className)),
      ...restProps
    },
    null
  )}>`;
  children?.($$payload);
  $$payload.out += `<!----></ul>`;
  bind_props($$props, { ref });
  pop();
}
function Sidebar_provider($$payload, $$props) {
  push();
  let {
    ref = null,
    open = true,
    onOpenChange = () => {
    },
    class: className,
    style,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  setSidebar({
    open: () => open,
    setOpen: (value) => {
      open = value;
      onOpenChange(value);
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${open}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    }
  });
  $$payload.out += `<!---->`;
  Provider($$payload, {
    delayDuration: 0,
    children: ($$payload2) => {
      $$payload2.out += `<div${spread_attributes(
        {
          "data-slot": "sidebar-wrapper",
          style: `--sidebar-width: ${stringify(SIDEBAR_WIDTH)}; --sidebar-width-icon: ${stringify(SIDEBAR_WIDTH_ICON)}; ${stringify(style)}`,
          class: clsx(cn$1("group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full", className)),
          ...restProps
        },
        null
      )}>`;
      children?.($$payload2);
      $$payload2.out += `<!----></div>`;
    }
  });
  $$payload.out += `<!---->`;
  bind_props($$props, { ref, open });
  pop();
}
function Panel_left($$payload, $$props) {
  push();
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    [
      "rect",
      {
        "width": "18",
        "height": "18",
        "x": "3",
        "y": "3",
        "rx": "2"
      }
    ],
    ["path", { "d": "M9 3v18" }]
  ];
  Icon$1($$payload, spread_props([
    { name: "panel-left" },
    props,
    {
      iconNode,
      children: ($$payload2) => {
        props.children?.($$payload2);
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
  pop();
}
function Sidebar_trigger($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    onclick,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const sidebar = useSidebar();
  Button($$payload, spread_props([
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      class: cn$1("size-7", className),
      type: "button",
      onclick: (e) => {
        onclick?.(e);
        sidebar.toggle();
      }
    },
    restProps,
    {
      children: ($$payload2) => {
        Panel_left($$payload2, {});
        $$payload2.out += `<!----> <span class="sr-only">Toggle Sidebar</span>`;
      },
      $$slots: { default: true }
    }
  ]));
  bind_props($$props, { ref });
  pop();
}
function Sheet_overlay($$payload, $$props) {
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
    Dialog_overlay$1($$payload2, spread_props([
      {
        "data-slot": "sheet-overlay",
        class: cn$1("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className)
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
  bind_props($$props, { ref, class: className });
  pop();
}
const sheetVariants = ce({
  base: "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  variants: {
    side: {
      top: "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
      bottom: "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
      left: "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
      right: "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm"
    }
  },
  defaultVariants: { side: "right" }
});
function Sheet_content($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    side = "right",
    portalProps,
    children,
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
          Sheet_overlay($$payload3, {});
          $$payload3.out += `<!----> <!---->`;
          Dialog_content$1($$payload3, spread_props([
            {
              "data-slot": "sheet-content",
              class: cn$1(sheetVariants({ side }), className)
            },
            restProps,
            {
              get ref() {
                return ref;
              },
              set ref($$value) {
                ref = $$value;
                $$settled = false;
              },
              children: ($$payload4) => {
                children?.($$payload4);
                $$payload4.out += `<!----> <!---->`;
                Dialog_close($$payload4, {
                  class: "ring-offset-background focus-visible:ring-ring rounded-xs focus-visible:outline-hidden absolute right-4 top-4 opacity-70 transition-opacity hover:opacity-100 focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none",
                  children: ($$payload5) => {
                    X($$payload5, { class: "size-4" });
                    $$payload5.out += `<!----> <span class="sr-only">Close</span>`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!---->`;
              },
              $$slots: { default: true }
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
function Sheet_header($$payload, $$props) {
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
      "data-slot": "sheet-header",
      class: clsx(cn$1("flex flex-col gap-1.5 p-4", className)),
      ...restProps
    },
    null
  )}>`;
  children?.($$payload);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { ref });
  pop();
}
function Sheet_title($$payload, $$props) {
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
    Dialog_title$1($$payload2, spread_props([
      {
        "data-slot": "sheet-title",
        class: cn$1("text-foreground font-semibold", className)
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
function Sheet_description($$payload, $$props) {
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
    Dialog_description$1($$payload2, spread_props([
      {
        "data-slot": "sheet-description",
        class: cn$1("text-muted-foreground text-sm", className)
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
const Root$1 = Dialog;
function Sidebar($$payload, $$props) {
  push();
  let {
    ref = null,
    side = "left",
    variant = "sidebar",
    collapsible = "offcanvas",
    class: className,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const sidebar = useSidebar();
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    if (collapsible === "none") {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<div${spread_attributes(
        {
          class: clsx(cn$1("bg-sidebar text-sidebar-foreground w-(--sidebar-width) flex h-full flex-col", className)),
          ...restProps
        },
        null
      )}>`;
      children?.($$payload2);
      $$payload2.out += `<!----></div>`;
    } else if (sidebar.isMobile) {
      $$payload2.out += "<!--[1-->";
      var bind_get = () => sidebar.openMobile;
      var bind_set = (v) => sidebar.setOpenMobile(v);
      $$payload2.out += `<!---->`;
      Root$1($$payload2, spread_props([
        {
          get open() {
            return bind_get();
          },
          set open($$value) {
            bind_set($$value);
          }
        },
        restProps,
        {
          children: ($$payload3) => {
            $$payload3.out += `<!---->`;
            Sheet_content($$payload3, {
              "data-sidebar": "sidebar",
              "data-slot": "sidebar",
              "data-mobile": "true",
              class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
              style: `--sidebar-width: ${stringify(SIDEBAR_WIDTH_MOBILE)};`,
              side,
              children: ($$payload4) => {
                $$payload4.out += `<!---->`;
                Sheet_header($$payload4, {
                  class: "sr-only",
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->`;
                    Sheet_title($$payload5, {
                      children: ($$payload6) => {
                        $$payload6.out += `<!---->Sidebar`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload5.out += `<!----> <!---->`;
                    Sheet_description($$payload5, {
                      children: ($$payload6) => {
                        $$payload6.out += `<!---->Displays the mobile sidebar.`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload5.out += `<!---->`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----> <div class="flex h-full w-full flex-col">`;
                children?.($$payload4);
                $$payload4.out += `<!----></div>`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!---->`;
          },
          $$slots: { default: true }
        }
      ]));
      $$payload2.out += `<!---->`;
    } else {
      $$payload2.out += "<!--[!-->";
      $$payload2.out += `<div class="text-sidebar-foreground group peer hidden md:block"${attr("data-state", sidebar.state)}${attr("data-collapsible", sidebar.state === "collapsed" ? collapsible : "")}${attr("data-variant", variant)}${attr("data-side", side)} data-slot="sidebar"><div data-slot="sidebar-gap"${attr_class(clsx(cn$1("w-(--sidebar-width) relative bg-transparent transition-[width] duration-200 ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)")))}></div> <div${spread_attributes(
        {
          "data-slot": "sidebar-container",
          class: clsx(cn$1(
            "w-(--sidebar-width) fixed inset-y-0 z-10 hidden h-svh transition-[left,right,width] duration-200 ease-linear md:flex",
            side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
            // Adjust the padding for floating and inset variants.
            variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
            className
          )),
          ...restProps
        },
        null
      )}><div data-sidebar="sidebar" data-slot="sidebar-inner" class="bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm">`;
      children?.($$payload2);
      $$payload2.out += `<!----></div></div></div>`;
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
class Context {
  #name;
  #key;
  /**
   * @param name The name of the context.
   * This is used for generating the context key and error messages.
   */
  constructor(name) {
    this.#name = name;
    this.#key = Symbol(name);
  }
  /**
   * The key used to get and set the context.
   *
   * It is not recommended to use this value directly.
   * Instead, use the methods provided by this class.
   */
  get key() {
    return this.#key;
  }
  /**
   * Checks whether this has been set in the context of a parent component.
   *
   * Must be called during component initialisation.
   */
  exists() {
    return hasContext(this.#key);
  }
  /**
   * Retrieves the context that belongs to the closest parent component.
   *
   * Must be called during component initialisation.
   *
   * @throws An error if the context does not exist.
   */
  get() {
    const context = getContext(this.#key);
    if (context === void 0) {
      throw new Error(`Context "${this.#name}" not found`);
    }
    return context;
  }
  /**
   * Retrieves the context that belongs to the closest parent component,
   * or the given fallback value if the context does not exist.
   *
   * Must be called during component initialisation.
   */
  getOr(fallback) {
    const context = getContext(this.#key);
    if (context === void 0) {
      return fallback;
    }
    return context;
  }
  /**
   * Associates the given value with the current component and returns it.
   *
   * Must be called during component initialisation.
   */
  set(context) {
    return setContext(this.#key, context);
  }
}
const sonnerContext = new Context("<Toaster/>");
function isAction(action) {
  return action.label !== void 0;
}
const TOAST_LIFETIME$1 = 4e3;
const GAP$1 = 14;
const TIME_BEFORE_UNMOUNT = 200;
const DEFAULT_TOAST_CLASSES = {
  toast: "",
  title: "",
  description: "",
  loader: "",
  closeButton: "",
  cancelButton: "",
  actionButton: "",
  action: "",
  warning: "",
  error: "",
  success: "",
  default: "",
  info: "",
  loading: ""
};
function Toast($$payload, $$props) {
  push();
  let {
    toast,
    index,
    expanded,
    invert: invertFromToaster,
    position,
    visibleToasts,
    expandByDefault,
    closeButton: closeButtonFromToaster,
    interacting,
    cancelButtonStyle = "",
    actionButtonStyle = "",
    duration: durationFromToaster,
    descriptionClass = "",
    classes: classesProp,
    unstyled = false,
    loadingIcon,
    successIcon,
    errorIcon,
    warningIcon,
    closeIcon,
    infoIcon,
    defaultRichColors = false,
    swipeDirections: swipeDirectionsProp,
    closeButtonAriaLabel,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const defaultClasses = { ...DEFAULT_TOAST_CLASSES };
  let mounted = false;
  let removed = false;
  let swiping = false;
  let swipeOut = false;
  let isSwiped = false;
  let offsetBeforeRemove = 0;
  let initialHeight = 0;
  toast.duration || durationFromToaster || TOAST_LIFETIME$1;
  let swipeOutDirection = null;
  const isFront = index === 0;
  const isVisible = index + 1 <= visibleToasts;
  const toastType = toast.type;
  const dismissable = toast.dismissable !== false;
  const toastClass = toast.class || "";
  const toastDescriptionClass = toast.descriptionClass || "";
  const heightIndex = toastState.heights.findIndex((height) => height.toastId === toast.id) || 0;
  const closeButton = toast.closeButton ?? closeButtonFromToaster;
  toast.duration ?? durationFromToaster ?? TOAST_LIFETIME$1;
  const coords = position.split("-");
  const toastsHeightBefore = toastState.heights.reduce(
    (prev, curr, reducerIndex) => {
      if (reducerIndex >= heightIndex) return prev;
      return prev + curr.height;
    },
    0
  );
  const invert = toast.invert || invertFromToaster;
  const disabled = toastType === "loading";
  const classes = { ...defaultClasses, ...classesProp };
  toast.title;
  toast.description;
  const offset = Math.round(heightIndex * GAP$1 + toastsHeightBefore);
  function deleteToast() {
    removed = true;
    offsetBeforeRemove = offset;
    toastState.removeHeight(toast.id);
    setTimeout(
      () => {
        toastState.remove(toast.id);
      },
      TIME_BEFORE_UNMOUNT
    );
  }
  toast.promise && toastType === "loading" || toast.duration === Number.POSITIVE_INFINITY;
  const icon = (() => {
    if (toast.icon) return toast.icon;
    if (toastType === "success") return successIcon;
    if (toastType === "error") return errorIcon;
    if (toastType === "warning") return warningIcon;
    if (toastType === "info") return infoIcon;
    if (toastType === "loading") return loadingIcon;
    return null;
  })();
  function LoadingIcon($$payload2) {
    if (loadingIcon) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<div${attr_class(clsx(cn(classes?.loader, toast?.classes?.loader, "sonner-loader")))}${attr("data-visible", toastType === "loading")}>`;
      loadingIcon($$payload2);
      $$payload2.out += `<!----></div>`;
    } else {
      $$payload2.out += "<!--[!-->";
      Loader($$payload2, {
        class: cn(classes?.loader, toast.classes?.loader),
        visible: toastType === "loading"
      });
    }
    $$payload2.out += `<!--]-->`;
  }
  $$payload.out += `<li${attr("tabindex", 0)}${attr_class(clsx(cn(restProps.class, toastClass, classes?.toast, toast?.classes?.toast, classes?.[toastType], toast?.classes?.[toastType])))} data-sonner-toast=""${attr("data-rich-colors", toast.richColors ?? defaultRichColors)}${attr("data-styled", !(toast.component || toast.unstyled || unstyled))}${attr("data-mounted", mounted)}${attr("data-promise", Boolean(toast.promise))}${attr("data-swiped", isSwiped)}${attr("data-removed", removed)}${attr("data-visible", isVisible)}${attr("data-y-position", coords[0])}${attr("data-x-position", coords[1])}${attr("data-index", index)}${attr("data-front", isFront)}${attr("data-swiping", swiping)}${attr("data-dismissable", dismissable)}${attr("data-type", toastType)}${attr("data-invert", invert)}${attr("data-swipe-out", swipeOut)}${attr("data-swipe-direction", swipeOutDirection)}${attr("data-expanded", Boolean(expanded || expandByDefault && mounted))}${attr_style(`${restProps.style} ${toast.style}`, {
    "--index": index,
    "--toasts-before": index,
    "--z-index": toastState.toasts.length - index,
    "--offset": `${removed ? offsetBeforeRemove : offset}px`,
    "--initial-height": expandByDefault ? "auto" : `${initialHeight}px`
  })}>`;
  if (closeButton && !toast.component && toastType !== "loading" && closeIcon !== null) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button${attr("aria-label", closeButtonAriaLabel)}${attr("data-disabled", disabled)} data-close-button=""${attr_class(clsx(cn(classes?.closeButton, toast?.classes?.closeButton)))}>`;
    closeIcon?.($$payload);
    $$payload.out += `<!----></button>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (toast.component) {
    $$payload.out += "<!--[-->";
    const Component = toast.component;
    $$payload.out += `<!---->`;
    Component($$payload, spread_props([
      toast.componentProps,
      { closeToast: deleteToast }
    ]));
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    if ((toastType || toast.icon || toast.promise) && toast.icon !== null && (icon !== null || toast.icon)) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div data-icon=""${attr_class(clsx(cn(classes?.icon, toast?.classes?.icon)))}>`;
      if (toast.promise || toastType === "loading") {
        $$payload.out += "<!--[-->";
        if (toast.icon) {
          $$payload.out += "<!--[-->";
          $$payload.out += `<!---->`;
          toast.icon($$payload, {});
          $$payload.out += `<!---->`;
        } else {
          $$payload.out += "<!--[!-->";
          LoadingIcon($$payload);
        }
        $$payload.out += `<!--]-->`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]--> `;
      if (toast.type !== "loading") {
        $$payload.out += "<!--[-->";
        if (toast.icon) {
          $$payload.out += "<!--[-->";
          $$payload.out += `<!---->`;
          toast.icon($$payload, {});
          $$payload.out += `<!---->`;
        } else if (toastType === "success") {
          $$payload.out += "<!--[1-->";
          successIcon?.($$payload);
          $$payload.out += `<!---->`;
        } else if (toastType === "error") {
          $$payload.out += "<!--[2-->";
          errorIcon?.($$payload);
          $$payload.out += `<!---->`;
        } else if (toastType === "warning") {
          $$payload.out += "<!--[3-->";
          warningIcon?.($$payload);
          $$payload.out += `<!---->`;
        } else if (toastType === "info") {
          $$payload.out += "<!--[4-->";
          infoIcon?.($$payload);
          $$payload.out += `<!---->`;
        } else {
          $$payload.out += "<!--[!-->";
        }
        $$payload.out += `<!--]-->`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]--></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <div data-content=""><div data-title=""${attr_class(clsx(cn(classes?.title, toast?.classes?.title)))}>`;
    if (toast.title) {
      $$payload.out += "<!--[-->";
      if (typeof toast.title !== "string") {
        $$payload.out += "<!--[-->";
        const Title = toast.title;
        $$payload.out += `<!---->`;
        Title($$payload, spread_props([toast.componentProps]));
        $$payload.out += `<!---->`;
      } else {
        $$payload.out += "<!--[!-->";
        $$payload.out += `${escape_html(toast.title)}`;
      }
      $$payload.out += `<!--]-->`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div> `;
    if (toast.description) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div data-description=""${attr_class(clsx(cn(descriptionClass, toastDescriptionClass, classes?.description, toast.classes?.description)))}>`;
      if (typeof toast.description !== "string") {
        $$payload.out += "<!--[-->";
        const Description = toast.description;
        $$payload.out += `<!---->`;
        Description($$payload, spread_props([toast.componentProps]));
        $$payload.out += `<!---->`;
      } else {
        $$payload.out += "<!--[!-->";
        $$payload.out += `${escape_html(toast.description)}`;
      }
      $$payload.out += `<!--]--></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div> `;
    if (toast.cancel) {
      $$payload.out += "<!--[-->";
      if (typeof toast.cancel === "function") {
        $$payload.out += "<!--[-->";
        $$payload.out += `<!---->`;
        toast.cancel($$payload, {});
        $$payload.out += `<!---->`;
      } else if (isAction(toast.cancel)) {
        $$payload.out += "<!--[1-->";
        $$payload.out += `<button data-button="" data-cancel=""${attr_style(toast.cancelButtonStyle ?? cancelButtonStyle)}${attr_class(clsx(cn(classes?.cancelButton, toast?.classes?.cancelButton)))}>${escape_html(toast.cancel.label)}</button>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]-->`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (toast.action) {
      $$payload.out += "<!--[-->";
      if (typeof toast.action === "function") {
        $$payload.out += "<!--[-->";
        $$payload.out += `<!---->`;
        toast.action($$payload, {});
        $$payload.out += `<!---->`;
      } else if (isAction(toast.action)) {
        $$payload.out += "<!--[1-->";
        $$payload.out += `<button data-button=""${attr_style(toast.actionButtonStyle ?? actionButtonStyle)}${attr_class(clsx(cn(classes?.actionButton, toast?.classes?.actionButton)))}>${escape_html(toast.action.label)}</button>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]-->`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></li>`;
  pop();
}
function SuccessIcon($$payload) {
  $$payload.out += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-success-icon=""><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>`;
}
function ErrorIcon($$payload) {
  $$payload.out += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-error-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>`;
}
function WarningIcon($$payload) {
  $$payload.out += `<svg viewBox="0 0 64 64" fill="currentColor" height="20" width="20" data-sonner-warning-icon="" xmlns="http://www.w3.org/2000/svg"><path d="M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z"></path><path d="M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z"></path></svg>`;
}
function InfoIcon($$payload) {
  $$payload.out += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-info-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>`;
}
function CloseIcon($$payload) {
  $$payload.out += `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-sonner-close-icon=""><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
}
const VISIBLE_TOASTS_AMOUNT = 3;
const VIEWPORT_OFFSET = "24px";
const MOBILE_VIEWPORT_OFFSET = "16px";
const TOAST_LIFETIME = 4e3;
const TOAST_WIDTH = 356;
const GAP = 14;
const DARK = "dark";
const LIGHT = "light";
function getOffsetObject(defaultOffset, mobileOffset) {
  const styles = {};
  [defaultOffset, mobileOffset].forEach((offset, index) => {
    const isMobile = index === 1;
    const prefix = isMobile ? "--mobile-offset" : "--offset";
    const defaultValue = isMobile ? MOBILE_VIEWPORT_OFFSET : VIEWPORT_OFFSET;
    function assignAll(offset2) {
      ["top", "right", "bottom", "left"].forEach((key) => {
        styles[`${prefix}-${key}`] = typeof offset2 === "number" ? `${offset2}px` : offset2;
      });
    }
    if (typeof offset === "number" || typeof offset === "string") {
      assignAll(offset);
    } else if (typeof offset === "object") {
      ["top", "right", "bottom", "left"].forEach((key) => {
        const value = offset[key];
        if (value === void 0) {
          styles[`${prefix}-${key}`] = defaultValue;
        } else {
          styles[`${prefix}-${key}`] = typeof value === "number" ? `${value}px` : value;
        }
      });
    } else {
      assignAll(defaultValue);
    }
  });
  return styles;
}
function Toaster($$payload, $$props) {
  push();
  function getInitialTheme(t) {
    if (t !== "system") return t;
    if (typeof window !== "undefined") {
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return DARK;
      }
      return LIGHT;
    }
    return LIGHT;
  }
  function getDocumentDirection() {
    if (typeof window === "undefined") return "ltr";
    if (typeof document === "undefined") return "ltr";
    const dirAttribute = document.documentElement.getAttribute("dir");
    if (dirAttribute === "auto" || !dirAttribute) {
      return window.getComputedStyle(document.documentElement).direction;
    }
    return dirAttribute;
  }
  let {
    invert = false,
    position = "bottom-right",
    hotkey = ["altKey", "KeyT"],
    expand = false,
    closeButton = false,
    offset = VIEWPORT_OFFSET,
    mobileOffset = MOBILE_VIEWPORT_OFFSET,
    theme = "light",
    richColors = false,
    duration = TOAST_LIFETIME,
    visibleToasts = VISIBLE_TOASTS_AMOUNT,
    toastOptions = {},
    dir = getDocumentDirection(),
    gap = GAP,
    loadingIcon: loadingIconProp,
    successIcon: successIconProp,
    errorIcon: errorIconProp,
    warningIcon: warningIconProp,
    closeIcon: closeIconProp,
    infoIcon: infoIconProp,
    containerAriaLabel = "Notifications",
    class: className,
    closeButtonAriaLabel = "Close toast",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const possiblePositions = Array.from(new Set([
    position,
    ...toastState.toasts.filter((toast) => toast.position).map((toast) => toast.position)
  ].filter(Boolean)));
  let expanded = false;
  let interacting = false;
  let actualTheme = getInitialTheme(theme);
  const hotkeyLabel = hotkey.join("+").replace(/Key/g, "").replace(/Digit/g, "");
  sonnerContext.set(new SonnerState());
  $$payload.out += `<section${attr("aria-label", `${stringify(containerAriaLabel)} ${stringify(hotkeyLabel)}`)}${attr("tabindex", -1)} aria-live="polite" aria-relevant="additions text" aria-atomic="false" class="svelte-xsmi9t">`;
  if (toastState.toasts.length > 0) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(possiblePositions);
    $$payload.out += `<!--[-->`;
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let position2 = each_array[index];
      const [y, x] = position2.split("-");
      const isLifted = expanded;
      const offsetObject = getOffsetObject(offset, mobileOffset);
      const each_array_1 = ensure_array_like(toastState.toasts.filter((toast) => !toast.position && index === 0 || toast.position === position2));
      $$payload.out += `<ol${spread_attributes(
        {
          tabindex: -1,
          dir: dir === "auto" ? getDocumentDirection() : dir,
          class: clsx(className),
          "data-sonner-toaster": true,
          "data-sonner-theme": actualTheme,
          "data-y-position": y,
          "data-lifted": isLifted,
          "data-x-position": x,
          style: restProps.style,
          ...restProps
        },
        "svelte-xsmi9t",
        void 0,
        {
          "--front-toast-height": `${toastState.heights[0]?.height}px`,
          "--width": `${TOAST_WIDTH}px`,
          "--gap": `${gap}px`,
          "--offset-top": offsetObject["--offset-top"],
          "--offset-right": offsetObject["--offset-right"],
          "--offset-bottom": offsetObject["--offset-bottom"],
          "--offset-left": offsetObject["--offset-left"],
          "--mobile-offset-top": offsetObject["--mobile-offset-top"],
          "--mobile-offset-right": offsetObject["--mobile-offset-right"],
          "--mobile-offset-bottom": offsetObject["--mobile-offset-bottom"],
          "--mobile-offset-left": offsetObject["--mobile-offset-left"]
        }
      )}><!--[-->`;
      for (let index2 = 0, $$length2 = each_array_1.length; index2 < $$length2; index2++) {
        let toast = each_array_1[index2];
        {
          let successIcon = function($$payload2) {
            if (successIconProp) {
              $$payload2.out += "<!--[-->";
              successIconProp?.($$payload2);
              $$payload2.out += `<!---->`;
            } else if (successIconProp !== null) {
              $$payload2.out += "<!--[1-->";
              SuccessIcon($$payload2);
            } else {
              $$payload2.out += "<!--[!-->";
            }
            $$payload2.out += `<!--]-->`;
          }, errorIcon = function($$payload2) {
            if (errorIconProp) {
              $$payload2.out += "<!--[-->";
              errorIconProp?.($$payload2);
              $$payload2.out += `<!---->`;
            } else if (errorIconProp !== null) {
              $$payload2.out += "<!--[1-->";
              ErrorIcon($$payload2);
            } else {
              $$payload2.out += "<!--[!-->";
            }
            $$payload2.out += `<!--]-->`;
          }, warningIcon = function($$payload2) {
            if (warningIconProp) {
              $$payload2.out += "<!--[-->";
              warningIconProp?.($$payload2);
              $$payload2.out += `<!---->`;
            } else if (warningIconProp !== null) {
              $$payload2.out += "<!--[1-->";
              WarningIcon($$payload2);
            } else {
              $$payload2.out += "<!--[!-->";
            }
            $$payload2.out += `<!--]-->`;
          }, infoIcon = function($$payload2) {
            if (infoIconProp) {
              $$payload2.out += "<!--[-->";
              infoIconProp?.($$payload2);
              $$payload2.out += `<!---->`;
            } else if (infoIconProp !== null) {
              $$payload2.out += "<!--[1-->";
              InfoIcon($$payload2);
            } else {
              $$payload2.out += "<!--[!-->";
            }
            $$payload2.out += `<!--]-->`;
          }, closeIcon = function($$payload2) {
            if (closeIconProp) {
              $$payload2.out += "<!--[-->";
              closeIconProp?.($$payload2);
              $$payload2.out += `<!---->`;
            } else if (closeIconProp !== null) {
              $$payload2.out += "<!--[1-->";
              CloseIcon($$payload2);
            } else {
              $$payload2.out += "<!--[!-->";
            }
            $$payload2.out += `<!--]-->`;
          };
          Toast($$payload, {
            index: index2,
            toast,
            defaultRichColors: richColors,
            duration: toastOptions?.duration ?? duration,
            class: toastOptions?.class ?? "",
            descriptionClass: toastOptions?.descriptionClass || "",
            invert,
            visibleToasts,
            closeButton,
            interacting,
            position: position2,
            style: toastOptions?.style ?? "",
            classes: toastOptions.classes || {},
            unstyled: toastOptions.unstyled ?? false,
            cancelButtonStyle: toastOptions?.cancelButtonStyle ?? "",
            actionButtonStyle: toastOptions?.actionButtonStyle ?? "",
            closeButtonAriaLabel: toastOptions?.closeButtonAriaLabel ?? closeButtonAriaLabel,
            expandByDefault: expand,
            expanded,
            loadingIcon: loadingIconProp,
            successIcon,
            errorIcon,
            warningIcon,
            infoIcon,
            closeIcon,
            $$slots: {
              successIcon: true,
              errorIcon: true,
              warningIcon: true,
              infoIcon: true,
              closeIcon: true
            }
          });
        }
      }
      $$payload.out += `<!--]--></ol>`;
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></section>`;
  pop();
}
function Sonner_1($$payload, $$props) {
  push();
  let { $$slots, $$events, ...restProps } = $$props;
  Toaster($$payload, spread_props([
    {
      theme: derivedMode.current,
      class: "toaster group",
      style: "--normal-bg: var(--popover); --normal-text: var(--popover-foreground); --normal-border: var(--border);"
    },
    restProps
  ]));
  pop();
}
function Dropdown_menu_content($$payload, $$props) {
  push();
  let {
    ref = null,
    sideOffset = 4,
    portalProps,
    class: className,
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
          Dropdown_menu_content$1($$payload3, spread_props([
            {
              "data-slot": "dropdown-menu-content",
              sideOffset,
              class: cn$1("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 max-h-(--radix-dropdown-menu-content-available-height) origin-(--radix-dropdown-menu-content-transform-origin) z-50 min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border p-1 shadow-md", className)
            },
            restProps,
            {
              get ref() {
                return ref;
              },
              set ref($$value) {
                ref = $$value;
                $$settled = false;
              },
              children: ($$payload4) => {
                restProps.children?.($$payload4);
                $$payload4.out += `<!---->`;
              },
              $$slots: { default: true }
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
function Dropdown_menu_group($$payload, $$props) {
  push();
  let { ref = null, $$slots, $$events, ...restProps } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!---->`;
    Menu_group($$payload2, spread_props([
      { "data-slot": "dropdown-menu-group" },
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
function Dropdown_menu_item($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    inset,
    variant = "default",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!---->`;
    Menu_item($$payload2, spread_props([
      {
        "data-slot": "dropdown-menu-item",
        "data-inset": inset,
        "data-variant": variant,
        class: cn$1("data-highlighted:bg-accent data-highlighted:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:data-highlighted:bg-destructive/10 dark:data-[variant=destructive]:data-highlighted:bg-destructive/20 data-[variant=destructive]:data-highlighted:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground outline-hidden relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm data-[disabled]:pointer-events-none data-[inset]:pl-8 data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", className)
      },
      restProps,
      {
        get ref() {
          return ref;
        },
        set ref($$value) {
          ref = $$value;
          $$settled = false;
        },
        children: ($$payload3) => {
          restProps.children?.($$payload3);
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
function Dropdown_menu_label($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    inset,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out += `<div${spread_attributes(
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": inset,
      class: clsx(cn$1("px-2 py-1.5 text-sm font-semibold data-[inset]:pl-8", className)),
      ...restProps
    },
    null
  )}>`;
  children?.($$payload);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { ref });
  pop();
}
function Dropdown_menu_separator($$payload, $$props) {
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
    Menu_separator($$payload2, spread_props([
      {
        "data-slot": "dropdown-menu-separator",
        class: cn$1("bg-border -mx-1 my-1 h-px", className)
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
function Dropdown_menu_trigger($$payload, $$props) {
  push();
  let { ref = null, $$slots, $$events, ...restProps } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    {
      $$payload2.out += "<!--[!-->";
      $$payload2.out += `<button${spread_attributes(
        {
          "data-slot": "dropdown-menu-trigger",
          type: "button",
          ...restProps
        },
        null
      )}>`;
      restProps.children?.($$payload2);
      $$payload2.out += `<!----></button>`;
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
const Root = Menu;
function Briefcase_business($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M12 12h.01" }],
    [
      "path",
      {
        "d": "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"
      }
    ],
    [
      "path",
      { "d": "M22 13a18.15 18.15 0 0 1-20 0" }
    ],
    [
      "rect",
      {
        "width": "20",
        "height": "14",
        "x": "2",
        "y": "6",
        "rx": "2"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "briefcase-business" },
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
function Chevrons_up_down($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "m7 15 5 5 5-5" }],
    ["path", { "d": "m7 9 5-5 5 5" }]
  ];
  Icon($$payload, spread_props([
    { name: "chevrons-up-down" },
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
function Circle_x($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "circle",
      { "cx": "12", "cy": "12", "r": "10" }
    ],
    ["path", { "d": "m15 9-6 6" }],
    ["path", { "d": "m9 9 6 6" }]
  ];
  Icon($$payload, spread_props([
    { name: "circle-x" },
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
function Gift($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "rect",
      {
        "x": "3",
        "y": "8",
        "width": "18",
        "height": "4",
        "rx": "1"
      }
    ],
    ["path", { "d": "M12 8v13" }],
    [
      "path",
      {
        "d": "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"
      }
    ],
    [
      "path",
      {
        "d": "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "gift" },
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
function House($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"
      }
    ],
    [
      "path",
      {
        "d": "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "house" },
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
function Log_out($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "m16 17 5-5-5-5" }],
    ["path", { "d": "M21 12H9" }],
    [
      "path",
      { "d": "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "log-out" },
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
function Moon($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      { "d": "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "moon" },
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
function Piggy_bank($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z"
      }
    ],
    ["path", { "d": "M16 10h.01" }],
    ["path", { "d": "M2 8v1a2 2 0 0 0 2 2h1" }]
  ];
  Icon($$payload, spread_props([
    { name: "piggy-bank" },
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
function Settings($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
      }
    ],
    [
      "circle",
      { "cx": "12", "cy": "12", "r": "3" }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "settings" },
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
function Store($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"
      }
    ],
    [
      "path",
      {
        "d": "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
      }
    ],
    [
      "path",
      {
        "d": "M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"
      }
    ],
    ["path", { "d": "M2 7h20" }],
    [
      "path",
      {
        "d": "M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "store" },
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
function Sun($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "circle",
      { "cx": "12", "cy": "12", "r": "4" }
    ],
    ["path", { "d": "M12 2v2" }],
    ["path", { "d": "M12 20v2" }],
    ["path", { "d": "m4.93 4.93 1.41 1.41" }],
    ["path", { "d": "m17.66 17.66 1.41 1.41" }],
    ["path", { "d": "M2 12h2" }],
    ["path", { "d": "M20 12h2" }],
    ["path", { "d": "m6.34 17.66-1.41 1.41" }],
    ["path", { "d": "m19.07 4.93-1.41 1.41" }]
  ];
  Icon($$payload, spread_props([
    { name: "sun" },
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
function Trending_up_down($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M14.828 14.828 21 21" }],
    ["path", { "d": "M21 16v5h-5" }],
    ["path", { "d": "m21 3-9 9-4-4-6 6" }],
    ["path", { "d": "M21 8V3h-5" }]
  ];
  Icon($$payload, spread_props([
    { name: "trending-up-down" },
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
function DailyRewards($$payload, $$props) {
  push();
  async function claimReward() {
    return;
  }
  Button($$payload, {
    onclick: claimReward,
    disabled: true,
    class: "w-full transition-all duration-300",
    size: "sm",
    variant: "outline",
    children: ($$payload2) => {
      {
        $$payload2.out += "<!--[-->";
        Loader_circle($$payload2, { class: "h-4 w-4 animate-spin" });
        $$payload2.out += `<!----> <span>${escape_html("Loading...")}</span>`;
      }
      $$payload2.out += `<!--]-->`;
    },
    $$slots: { default: true }
  });
  pop();
}
function PromoCodeDialog($$payload, $$props) {
  push();
  let { open = void 0 } = $$props;
  let promoCode = "";
  let isVerifying = false;
  let isSuccess = false;
  let message = "";
  let hasResult = false;
  function resetDialog() {
    promoCode = "";
    isSuccess = false;
    message = "";
    hasResult = false;
    isVerifying = false;
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!---->`;
    Root$2($$payload2, {
      onOpenChange: (isOpen) => {
        if (!isOpen) resetDialog();
      },
      get open() {
        return open;
      },
      set open($$value) {
        open = $$value;
        $$settled = false;
      },
      children: ($$payload3) => {
        $$payload3.out += `<!---->`;
        Dialog_content($$payload3, {
          class: "sm:max-w-md",
          children: ($$payload4) => {
            $$payload4.out += `<!---->`;
            Dialog_header($$payload4, {
              children: ($$payload5) => {
                $$payload5.out += `<!---->`;
                Dialog_title($$payload5, {
                  class: "flex items-center gap-2",
                  children: ($$payload6) => {
                    Gift($$payload6, { class: "h-5 w-5" });
                    $$payload6.out += `<!----> Promo Code`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!----> <!---->`;
                Dialog_description($$payload5, {
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->Enter your promo code below to redeem rewards and bonuses.`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> <form class="space-y-4"><div class="space-y-2">`;
            Label($$payload4, {
              for: "promo-code",
              children: ($$payload5) => {
                $$payload5.out += `<!---->Promo Code`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Input($$payload4, {
              id: "promo-code",
              placeholder: "CODE...",
              disabled: isVerifying,
              class: "uppercase",
              style: "text-transform: uppercase;",
              get value() {
                return promoCode;
              },
              set value($$value) {
                promoCode = $$value;
                $$settled = false;
              }
            });
            $$payload4.out += `<!----></div> `;
            if (hasResult) {
              $$payload4.out += "<!--[-->";
              Alert($$payload4, {
                variant: isSuccess ? "default" : "destructive",
                class: isSuccess ? "text-success" : "",
                children: ($$payload5) => {
                  if (isSuccess) {
                    $$payload5.out += "<!--[-->";
                    Check($$payload5, { class: "h-4 w-4" });
                  } else {
                    $$payload5.out += "<!--[!-->";
                    Circle_x($$payload5, { class: "h-4 w-4" });
                  }
                  $$payload5.out += `<!--]--> `;
                  Alert_description($$payload5, {
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->${escape_html(message)}`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!---->`;
                },
                $$slots: { default: true }
              });
            } else {
              $$payload4.out += "<!--[!-->";
            }
            $$payload4.out += `<!--]--> <div class="flex justify-end gap-2">`;
            Button($$payload4, {
              type: "button",
              variant: "outline",
              onclick: () => open = false,
              disabled: isVerifying,
              children: ($$payload5) => {
                $$payload5.out += `<!---->Cancel`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Button($$payload4, {
              type: "submit",
              disabled: !promoCode.trim() || isVerifying,
              children: ($$payload5) => {
                if (isVerifying) {
                  $$payload5.out += "<!--[-->";
                  Loader_circle($$payload5, { class: "h-4 w-4 animate-spin" });
                  $$payload5.out += `<!----> Verifying...`;
                } else {
                  $$payload5.out += "<!--[!-->";
                  $$payload5.out += `Redeem Code`;
                }
                $$payload5.out += `<!--]-->`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----></div></form>`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!---->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { open });
  pop();
}
function AppSidebar($$payload, $$props) {
  push();
  var $$store_subs;
  const data = {
    navMain: [
      { title: "Home", url: "/", icon: House },
      { title: "Market", url: "/market", icon: Store },
      {
        title: "Hopium",
        url: "/hopium",
        icon: Trending_up_down
      },
      {
        title: "Gambling",
        url: "/gambling",
        icon: Piggy_bank
      },
      {
        title: "Leaderboard",
        url: "/leaderboard",
        icon: Trophy
      },
      {
        title: "Portfolio",
        url: "/portfolio",
        icon: Briefcase_business
      },
      {
        title: "Treemap",
        url: "/treemap",
        icon: Chart_column
      },
      {
        title: "Create coin",
        url: "/coin/create",
        icon: Coins
      },
      {
        title: "Notifications",
        url: "/notifications",
        icon: Bell
      },
      { title: "About", url: "/about", icon: Info }
    ]
  };
  const { setOpenMobile, isMobile } = useSidebar();
  let shouldSignIn = false;
  let showPromoCode = false;
  let showUserManual = false;
  function handleModeToggle() {
    setMode(derivedMode.current === "light" ? "dark" : "light");
  }
  function formatCurrency(value) {
    return value.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }
  function handleAccountClick() {
    if (store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA)) {
      goto(`/user/${store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA).id}`);
      setOpenMobile(false);
    }
  }
  function handleSettingsClick() {
    goto();
    setOpenMobile(false);
  }
  function handleAdminClick() {
    goto();
    setOpenMobile(false);
  }
  function handleUserManagementClick() {
    goto();
    setOpenMobile(false);
  }
  function handlePromoCodesClick() {
    goto();
    setOpenMobile(false);
  }
  function handleTermsClick() {
    goto();
    setOpenMobile(false);
  }
  function handlePrivacyClick() {
    goto();
    setOpenMobile(false);
  }
  function handleUserManualClick() {
    showUserManual = true;
    setOpenMobile(false);
  }
  function handlePrestigeClick() {
    goto();
    setOpenMobile(false);
  }
  function handleAPIClick() {
    goto();
    setOpenMobile(false);
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    SignInConfirmDialog($$payload2, {
      get open() {
        return shouldSignIn;
      },
      set open($$value) {
        shouldSignIn = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----> `;
    PromoCodeDialog($$payload2, {
      get open() {
        return showPromoCode;
      },
      set open($$value) {
        showPromoCode = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----> `;
    UserManualModal($$payload2, {
      get open() {
        return showUserManual;
      },
      set open($$value) {
        showUserManual = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----> <!---->`;
    Sidebar($$payload2, {
      collapsible: "offcanvas",
      children: ($$payload3) => {
        $$payload3.out += `<!---->`;
        Sidebar_header($$payload3, {
          children: ($$payload4) => {
            $$payload4.out += `<div class="flex items-center gap-2 px-2 py-2"><img src="/rugplay.svg" class="h-5 w-5" alt="twoblade"/> <div class="flex items-center gap-2"><span class="text-base font-semibold">Rugplay</span> `;
            if (store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA)?.isAdmin) {
              $$payload4.out += "<!--[-->";
              $$payload4.out += `<span class="text-muted-foreground text-xs">| Admin</span>`;
            } else {
              $$payload4.out += "<!--[!-->";
            }
            $$payload4.out += `<!--]--></div></div>`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> <!---->`;
        Sidebar_content($$payload3, {
          children: ($$payload4) => {
            $$payload4.out += `<!---->`;
            Sidebar_group($$payload4, {
              children: ($$payload5) => {
                $$payload5.out += `<!---->`;
                Sidebar_group_content($$payload5, {
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->`;
                    Sidebar_menu($$payload6, {
                      children: ($$payload7) => {
                        const each_array = ensure_array_like(data.navMain);
                        $$payload7.out += `<!--[-->`;
                        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                          let item = each_array[$$index];
                          $$payload7.out += `<!---->`;
                          Sidebar_menu_item($$payload7, {
                            children: ($$payload8) => {
                              $$payload8.out += `<!---->`;
                              {
                                let child = function($$payload9, { props }) {
                                  $$payload9.out += `<a${attr("href", item.url || "/")}${attr_class(`${props.class} ${item.title === "Notifications" && !store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA) ? "pointer-events-none opacity-50" : ""}`)}><!---->`;
                                  item.icon($$payload9, {});
                                  $$payload9.out += `<!----> <span>${escape_html(item.title)}</span> `;
                                  if (item.title === "Notifications" && store_get($$store_subs ??= {}, "$UNREAD_COUNT", UNREAD_COUNT) > 0 && store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA)) {
                                    $$payload9.out += "<!--[-->";
                                    $$payload9.out += `<!---->`;
                                    Sidebar_menu_badge($$payload9, {
                                      class: "bg-primary text-primary-foreground",
                                      children: ($$payload10) => {
                                        $$payload10.out += `<!---->${escape_html(store_get($$store_subs ??= {}, "$UNREAD_COUNT", UNREAD_COUNT) > 99 ? "99+" : store_get($$store_subs ??= {}, "$UNREAD_COUNT", UNREAD_COUNT))}`;
                                      },
                                      $$slots: { default: true }
                                    });
                                    $$payload9.out += `<!---->`;
                                  } else {
                                    $$payload9.out += "<!--[!-->";
                                  }
                                  $$payload9.out += `<!--]--></a>`;
                                };
                                Sidebar_menu_button($$payload8, { child, $$slots: { child: true } });
                              }
                              $$payload8.out += `<!---->`;
                            },
                            $$slots: { default: true }
                          });
                          $$payload7.out += `<!---->`;
                        }
                        $$payload7.out += `<!--]-->`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload6.out += `<!---->`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            if (store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA)) {
              $$payload4.out += "<!--[-->";
              $$payload4.out += `<!---->`;
              Sidebar_group($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->`;
                  Sidebar_group_content($$payload5, {
                    children: ($$payload6) => {
                      $$payload6.out += `<div class="px-2 py-1">`;
                      if (!store_get($$store_subs ??= {}, "$PORTFOLIO_SUMMARY", PORTFOLIO_SUMMARY)) {
                        $$payload6.out += "<!--[-->";
                        $$payload6.out += `<div class="space-y-2">`;
                        Skeleton($$payload6, { class: "h-8 w-full rounded" });
                        $$payload6.out += `<!----></div>`;
                      } else {
                        $$payload6.out += "<!--[!-->";
                        DailyRewards($$payload6);
                      }
                      $$payload6.out += `<!--]--></div>`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!---->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            } else {
              $$payload4.out += "<!--[!-->";
            }
            $$payload4.out += `<!--]--> <!---->`;
            Sidebar_group($$payload4, {
              children: ($$payload5) => {
                $$payload5.out += `<!---->`;
                Sidebar_group_label($$payload5, {
                  class: "flex items-center justify-between",
                  children: ($$payload6) => {
                    $$payload6.out += `<div class="flex items-center gap-2">`;
                    Activity($$payload6, { class: "h-4 w-4" });
                    $$payload6.out += `<!----> <span>Live Trades</span></div> <button class="text-muted-foreground hover:text-foreground cursor-pointer text-xs transition-colors">View All</button>`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!----> <!---->`;
                Sidebar_group_content($$payload5, {
                  children: ($$payload6) => {
                    $$payload6.out += `<div class="space-y-1 px-2 py-1">`;
                    if (store_get($$store_subs ??= {}, "$isLoadingTrades", isLoadingTrades)) {
                      $$payload6.out += "<!--[-->";
                      const each_array_1 = ensure_array_like(Array(5));
                      $$payload6.out += `<!--[-->`;
                      for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
                        each_array_1[i];
                        $$payload6.out += `<div class="flex items-center gap-2 py-1 text-xs"><div class="flex items-center gap-1">`;
                        Skeleton($$payload6, { class: "h-3 w-3 rounded-full" });
                        $$payload6.out += `<!----> `;
                        Skeleton($$payload6, { class: "h-4 w-8" });
                        $$payload6.out += `<!----></div> <div class="flex-1"><div class="flex items-center gap-1">`;
                        Skeleton($$payload6, { class: "h-3 w-12" });
                        $$payload6.out += `<!----> `;
                        Skeleton($$payload6, { class: "h-3 w-28" });
                        $$payload6.out += `<!----></div></div></div>`;
                      }
                      $$payload6.out += `<!--]-->`;
                    } else if (store_get($$store_subs ??= {}, "$liveTradesStore", liveTradesStore).length === 0) {
                      $$payload6.out += "<!--[1-->";
                      $$payload6.out += `<div class="text-muted-foreground py-2 text-center text-xs">No big trades yet...</div>`;
                    } else {
                      $$payload6.out += "<!--[!-->";
                      const each_array_2 = ensure_array_like(store_get($$store_subs ??= {}, "$liveTradesStore", liveTradesStore).slice(0, 5));
                      $$payload6.out += `<!--[-->`;
                      for (let index = 0, $$length = each_array_2.length; index < $$length; index++) {
                        let trade = each_array_2[index];
                        $$payload6.out += `<button class="hover:bg-muted/50 flex w-full cursor-pointer items-center gap-2 rounded px-1 py-1 text-left text-xs transition-colors"><div class="flex items-center gap-1">`;
                        if (trade.type === "TRANSFER_IN" || trade.type === "TRANSFER_OUT") {
                          $$payload6.out += "<!--[-->";
                          Activity($$payload6, { class: "h-3 w-3 text-blue-500" });
                          $$payload6.out += `<!----> `;
                          Badge($$payload6, {
                            variant: "outline",
                            class: "h-4 border-blue-500 px-1 py-0 text-[10px] text-blue-500",
                            children: ($$payload7) => {
                              $$payload7.out += `<!---->${escape_html(trade.type === "TRANSFER_IN" ? "REC" : "SENT")}`;
                            },
                            $$slots: { default: true }
                          });
                          $$payload6.out += `<!---->`;
                        } else if (trade.type === "BUY") {
                          $$payload6.out += "<!--[1-->";
                          Trending_up($$payload6, { class: "h-3 w-3 text-green-500" });
                          $$payload6.out += `<!----> `;
                          Badge($$payload6, {
                            variant: "outline",
                            class: "h-4 border-green-500 px-1 py-0 text-[10px] text-green-500",
                            children: ($$payload7) => {
                              $$payload7.out += `<!---->BUY`;
                            },
                            $$slots: { default: true }
                          });
                          $$payload6.out += `<!---->`;
                        } else {
                          $$payload6.out += "<!--[!-->";
                          Trending_down($$payload6, { class: "h-3 w-3 text-red-500" });
                          $$payload6.out += `<!----> `;
                          Badge($$payload6, {
                            variant: "outline",
                            class: "h-4 border-red-500 px-1 py-0 text-[10px] text-red-500",
                            children: ($$payload7) => {
                              $$payload7.out += `<!---->SELL`;
                            },
                            $$slots: { default: true }
                          });
                          $$payload6.out += `<!---->`;
                        }
                        $$payload6.out += `<!--]--></div> <div class="flex-1 truncate"><div class="flex items-center gap-1"><span class="text-foreground font-medium">${escape_html(formatValue(trade.totalValue))}</span> `;
                        if (trade.type === "TRANSFER_IN" || trade.type === "TRANSFER_OUT") {
                          $$payload6.out += "<!--[-->";
                          if (trade.amount > 0) {
                            $$payload6.out += "<!--[-->";
                            $$payload6.out += `<span class="text-muted-foreground">*${escape_html(trade.coinSymbol)}</span>`;
                          } else {
                            $$payload6.out += "<!--[!-->";
                          }
                          $$payload6.out += `<!--]--> <span class="text-muted-foreground">${escape_html(trade.type === "TRANSFER_IN" ? "to" : "from")}</span>`;
                        } else {
                          $$payload6.out += "<!--[!-->";
                          $$payload6.out += `<span class="text-muted-foreground">*${escape_html(trade.coinSymbol)}</span> <span class="text-muted-foreground">by</span>`;
                        }
                        $$payload6.out += `<!--]--> <span class="text-muted-foreground">@${escape_html(trade.username)}</span></div></div></button>`;
                      }
                      $$payload6.out += `<!--]-->`;
                    }
                    $$payload6.out += `<!--]--></div>`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            if (store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA)) {
              $$payload4.out += "<!--[-->";
              $$payload4.out += `<!---->`;
              Sidebar_group($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->`;
                  Sidebar_group_label($$payload5, {
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->Portfolio`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!----> <!---->`;
                  Sidebar_group_content($$payload5, {
                    children: ($$payload6) => {
                      $$payload6.out += `<div class="space-y-2 px-2 py-1">`;
                      if (!store_get($$store_subs ??= {}, "$PORTFOLIO_SUMMARY", PORTFOLIO_SUMMARY)) {
                        $$payload6.out += "<!--[-->";
                        $$payload6.out += `<div class="flex items-center justify-between"><div class="flex items-center gap-2">`;
                        Skeleton($$payload6, { class: "h-4 w-4 rounded" });
                        $$payload6.out += `<!----> `;
                        Skeleton($$payload6, { class: "h-4 w-16" });
                        $$payload6.out += `<!----></div> `;
                        Skeleton($$payload6, { class: "h-5 w-16 rounded" });
                        $$payload6.out += `<!----></div> <div class="space-y-1"><div class="flex justify-between">`;
                        Skeleton($$payload6, { class: "h-3 w-8" });
                        $$payload6.out += `<!----> `;
                        Skeleton($$payload6, { class: "h-3 w-12" });
                        $$payload6.out += `<!----></div> <div class="flex justify-between">`;
                        Skeleton($$payload6, { class: "h-3 w-10" });
                        $$payload6.out += `<!----> `;
                        Skeleton($$payload6, { class: "h-3 w-12" });
                        $$payload6.out += `<!----></div></div>`;
                      } else {
                        $$payload6.out += "<!--[!-->";
                        $$payload6.out += `<div class="flex items-center justify-between"><div class="flex items-center gap-2">`;
                        Wallet($$payload6, { class: "text-muted-foreground h-4 w-4" });
                        $$payload6.out += `<!----> <span class="text-sm font-medium">Total Value</span></div> `;
                        Badge($$payload6, {
                          variant: "secondary",
                          class: "font-mono",
                          children: ($$payload7) => {
                            $$payload7.out += `<!---->$${escape_html(formatCurrency(store_get($$store_subs ??= {}, "$PORTFOLIO_SUMMARY", PORTFOLIO_SUMMARY).totalValue))}`;
                          },
                          $$slots: { default: true }
                        });
                        $$payload6.out += `<!----></div> <div class="text-muted-foreground space-y-1 text-xs"><div class="flex justify-between"><span>Cash:</span> <span class="font-mono">$${escape_html(formatCurrency(store_get($$store_subs ??= {}, "$PORTFOLIO_SUMMARY", PORTFOLIO_SUMMARY).baseCurrencyBalance))}</span></div> <div class="flex justify-between"><span>Coins:</span> <span class="font-mono">$${escape_html(formatCurrency(store_get($$store_subs ??= {}, "$PORTFOLIO_SUMMARY", PORTFOLIO_SUMMARY).totalCoinValue))}</span></div></div>`;
                      }
                      $$payload6.out += `<!--]--></div>`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!---->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            } else {
              $$payload4.out += "<!--[!-->";
            }
            $$payload4.out += `<!--]-->`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> `;
        if (store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA)) {
          $$payload3.out += "<!--[-->";
          $$payload3.out += `<!---->`;
          Sidebar_footer($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->`;
              Sidebar_menu($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->`;
                  Sidebar_menu_item($$payload5, {
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->`;
                      Root($$payload6, {
                        children: ($$payload7) => {
                          $$payload7.out += `<!---->`;
                          {
                            let child = function($$payload8, { props }) {
                              $$payload8.out += `<!---->`;
                              Sidebar_menu_button($$payload8, spread_props([
                                {
                                  size: "lg",
                                  class: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                                },
                                props,
                                {
                                  children: ($$payload9) => {
                                    $$payload9.out += `<!---->`;
                                    Avatar($$payload9, {
                                      class: "size-8 rounded-lg",
                                      children: ($$payload10) => {
                                        $$payload10.out += `<!---->`;
                                        Avatar_image($$payload10, {
                                          src: getPublicUrl(store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA).image),
                                          alt: store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA).name
                                        });
                                        $$payload10.out += `<!----> <!---->`;
                                        Avatar_fallback($$payload10, {
                                          class: "rounded-lg",
                                          children: ($$payload11) => {
                                            $$payload11.out += `<!---->?`;
                                          },
                                          $$slots: { default: true }
                                        });
                                        $$payload10.out += `<!---->`;
                                      },
                                      $$slots: { default: true }
                                    });
                                    $$payload9.out += `<!----> <div class="grid flex-1 text-left text-sm leading-tight"><span class="truncate font-medium">${escape_html(store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA).name)}</span> <span class="truncate text-xs">@${escape_html(store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA).username)}</span></div> `;
                                    Chevrons_up_down($$payload9, { class: "ml-auto size-4" });
                                    $$payload9.out += `<!---->`;
                                  },
                                  $$slots: { default: true }
                                }
                              ]));
                              $$payload8.out += `<!---->`;
                            };
                            Dropdown_menu_trigger($$payload7, { child, $$slots: { child: true } });
                          }
                          $$payload7.out += `<!----> <!---->`;
                          Dropdown_menu_content($$payload7, {
                            class: "w-(--bits-dropdown-menu-anchor-width) min-w-56 rounded-lg p-2",
                            side: isMobile ? "bottom" : "right",
                            align: "end",
                            sideOffset: 4,
                            children: ($$payload8) => {
                              $$payload8.out += `<!---->`;
                              Dropdown_menu_label($$payload8, {
                                class: "p-0 font-normal",
                                children: ($$payload9) => {
                                  $$payload9.out += `<div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm"><!---->`;
                                  Avatar($$payload9, {
                                    class: "size-8 rounded-lg",
                                    children: ($$payload10) => {
                                      $$payload10.out += `<!---->`;
                                      Avatar_image($$payload10, {
                                        src: getPublicUrl(store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA).image),
                                        alt: store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA).name
                                      });
                                      $$payload10.out += `<!----> <!---->`;
                                      Avatar_fallback($$payload10, {
                                        class: "rounded-lg",
                                        children: ($$payload11) => {
                                          $$payload11.out += `<!---->?`;
                                        },
                                        $$slots: { default: true }
                                      });
                                      $$payload10.out += `<!---->`;
                                    },
                                    $$slots: { default: true }
                                  });
                                  $$payload9.out += `<!----> <div class="grid flex-1 text-left text-sm leading-tight"><span class="truncate font-medium">${escape_html(store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA).name)}</span> <span class="truncate text-xs">@${escape_html(store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA).username)}</span></div></div>`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!----> <!---->`;
                              Dropdown_menu_separator($$payload8, {});
                              $$payload8.out += `<!----> <!---->`;
                              Dropdown_menu_group($$payload8, {
                                children: ($$payload9) => {
                                  $$payload9.out += `<!---->`;
                                  Dropdown_menu_item($$payload9, {
                                    onclick: handleAccountClick,
                                    children: ($$payload10) => {
                                      User($$payload10, {});
                                      $$payload10.out += `<!----> Account`;
                                    },
                                    $$slots: { default: true }
                                  });
                                  $$payload9.out += `<!----> <!---->`;
                                  Dropdown_menu_item($$payload9, {
                                    onclick: handleSettingsClick,
                                    children: ($$payload10) => {
                                      Settings($$payload10, {});
                                      $$payload10.out += `<!----> Settings`;
                                    },
                                    $$slots: { default: true }
                                  });
                                  $$payload9.out += `<!----> <!---->`;
                                  Dropdown_menu_item($$payload9, {
                                    onclick: handlePrestigeClick,
                                    children: ($$payload10) => {
                                      Crown($$payload10, {});
                                      $$payload10.out += `<!----> Prestige`;
                                    },
                                    $$slots: { default: true }
                                  });
                                  $$payload9.out += `<!---->`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!----> <!---->`;
                              Dropdown_menu_separator($$payload8, {});
                              $$payload8.out += `<!----> <!---->`;
                              Dropdown_menu_group($$payload8, {
                                children: ($$payload9) => {
                                  $$payload9.out += `<!---->`;
                                  Dropdown_menu_item($$payload9, {
                                    onclick: handleAPIClick,
                                    children: ($$payload10) => {
                                      Key($$payload10, {});
                                      $$payload10.out += `<!----> API`;
                                    },
                                    $$slots: { default: true }
                                  });
                                  $$payload9.out += `<!----> <!---->`;
                                  Dropdown_menu_item($$payload9, {
                                    onclick: () => {
                                      showPromoCode = true;
                                      setOpenMobile(false);
                                    },
                                    children: ($$payload10) => {
                                      Gift($$payload10, {});
                                      $$payload10.out += `<!----> Promo code`;
                                    },
                                    $$slots: { default: true }
                                  });
                                  $$payload9.out += `<!----> <!---->`;
                                  Dropdown_menu_item($$payload9, {
                                    onclick: handleUserManualClick,
                                    children: ($$payload10) => {
                                      Book_open($$payload10, {});
                                      $$payload10.out += `<!----> User Manual`;
                                    },
                                    $$slots: { default: true }
                                  });
                                  $$payload9.out += `<!----> <!---->`;
                                  Dropdown_menu_item($$payload9, {
                                    onclick: handleModeToggle,
                                    children: ($$payload10) => {
                                      if (derivedMode.current === "light") {
                                        $$payload10.out += "<!--[-->";
                                        Moon($$payload10, {});
                                        $$payload10.out += `<!----> Dark Mode`;
                                      } else {
                                        $$payload10.out += "<!--[!-->";
                                        Sun($$payload10, {});
                                        $$payload10.out += `<!----> Light Mode`;
                                      }
                                      $$payload10.out += `<!--]-->`;
                                    },
                                    $$slots: { default: true }
                                  });
                                  $$payload9.out += `<!---->`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!----> `;
                              if (store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA)?.isAdmin) {
                                $$payload8.out += "<!--[-->";
                                $$payload8.out += `<!---->`;
                                Dropdown_menu_separator($$payload8, {});
                                $$payload8.out += `<!----> <!---->`;
                                Dropdown_menu_group($$payload8, {
                                  children: ($$payload9) => {
                                    $$payload9.out += `<!---->`;
                                    Dropdown_menu_item($$payload9, {
                                      onclick: handleAdminClick,
                                      class: "text-primary hover:text-primary!",
                                      children: ($$payload10) => {
                                        Shield($$payload10, { class: "text-primary" });
                                        $$payload10.out += `<!----> Admin Panel`;
                                      },
                                      $$slots: { default: true }
                                    });
                                    $$payload9.out += `<!----> <!---->`;
                                    Dropdown_menu_item($$payload9, {
                                      onclick: handleUserManagementClick,
                                      class: "text-primary hover:text-primary!",
                                      children: ($$payload10) => {
                                        Hammer($$payload10, { class: "text-primary" });
                                        $$payload10.out += `<!----> User Management`;
                                      },
                                      $$slots: { default: true }
                                    });
                                    $$payload9.out += `<!----> <!---->`;
                                    Dropdown_menu_item($$payload9, {
                                      onclick: handlePromoCodesClick,
                                      class: "text-primary hover:text-primary!",
                                      children: ($$payload10) => {
                                        Ticket($$payload10, { class: "text-primary" });
                                        $$payload10.out += `<!----> Manage codes`;
                                      },
                                      $$slots: { default: true }
                                    });
                                    $$payload9.out += `<!---->`;
                                  },
                                  $$slots: { default: true }
                                });
                                $$payload8.out += `<!---->`;
                              } else {
                                $$payload8.out += "<!--[!-->";
                              }
                              $$payload8.out += `<!--]--> <!---->`;
                              Dropdown_menu_separator($$payload8, {});
                              $$payload8.out += `<!----> <!---->`;
                              Dropdown_menu_group($$payload8, {
                                children: ($$payload9) => {
                                  $$payload9.out += `<!---->`;
                                  Dropdown_menu_item($$payload9, {
                                    onclick: handleTermsClick,
                                    children: ($$payload10) => {
                                      Scale($$payload10, {});
                                      $$payload10.out += `<!----> Terms of Service`;
                                    },
                                    $$slots: { default: true }
                                  });
                                  $$payload9.out += `<!----> <!---->`;
                                  Dropdown_menu_item($$payload9, {
                                    onclick: handlePrivacyClick,
                                    children: ($$payload10) => {
                                      Shield_check($$payload10, {});
                                      $$payload10.out += `<!----> Privacy Policy`;
                                    },
                                    $$slots: { default: true }
                                  });
                                  $$payload9.out += `<!---->`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!----> <!---->`;
                              Dropdown_menu_separator($$payload8, {});
                              $$payload8.out += `<!----> <!---->`;
                              Dropdown_menu_item($$payload8, {
                                onclick: () => {
                                  signOut().then(() => {
                                    USER_DATA.set(null);
                                    window.location.reload();
                                  });
                                },
                                children: ($$payload9) => {
                                  Log_out($$payload9, {});
                                  $$payload9.out += `<!----> Log out`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!---->`;
                            },
                            $$slots: { default: true }
                          });
                          $$payload7.out += `<!---->`;
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out += `<!---->`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!---->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        } else {
          $$payload3.out += "<!--[!-->";
          $$payload3.out += `<!---->`;
          Sidebar_footer($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->`;
              Sidebar_menu($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->`;
                  Sidebar_menu_item($$payload5, {
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->`;
                      {
                        let child = function($$payload7, { props }) {
                          $$payload7.out += `<a href="/legal/terms"${attr_class(`${props.class}`)}>`;
                          Scale($$payload7, {});
                          $$payload7.out += `<!----> <span>Terms of Service</span></a>`;
                        };
                        Sidebar_menu_button($$payload6, { child, $$slots: { child: true } });
                      }
                      $$payload6.out += `<!---->`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!----> <!---->`;
                  Sidebar_menu_item($$payload5, {
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->`;
                      {
                        let child = function($$payload7, { props }) {
                          $$payload7.out += `<a href="/legal/privacy"${attr_class(`${props.class}`)}>`;
                          Shield_check($$payload7, {});
                          $$payload7.out += `<!----> <span>Privacy Policy</span></a>`;
                        };
                        Sidebar_menu_button($$payload6, { child, $$slots: { child: true } });
                      }
                      $$payload6.out += `<!---->`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!---->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        }
        $$payload3.out += `<!--]-->`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!---->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _layout($$payload, $$props) {
  push();
  let { data, children } = $$props;
  USER_DATA.set(data?.userSession ?? null);
  function getPageTitle(routeId) {
    if (!routeId) return "Rugplay";
    const titleMap = {
      "/": "Home",
      "/market": "Market",
      "/portfolio": "Portfolio",
      "/leaderboard": "Leaderboard",
      "/coin/create": "Create Coin",
      "/settings": "Settings",
      "/admin": "Admin",
      "/admin/promo": "Promo Codes",
      "/transactions": "Transactions",
      "/hopium": "Hopium",
      "/gambling": "Gambling",
      "/live": "Live Trades",
      "/treemap": "Treemap",
      "/about": "About",
      "/legal/privacy": "Privacy Policy",
      "/legal/terms": "Terms of Service"
    };
    if (routeId.startsWith("/coin/[coinSymbol]")) {
      return "Coin Details";
    }
    if (routeId.startsWith("/user/[username]")) {
      return "User Profile";
    }
    if (routeId.startsWith("/hopium/[id]")) {
      return "Prediction Question";
    }
    return titleMap[routeId] || "Rugplay";
  }
  Mode_watcher($$payload, {});
  $$payload.out += `<!----> `;
  Sonner_1($$payload, { richColors: true });
  $$payload.out += `<!----> <!---->`;
  Sidebar_provider($$payload, {
    children: ($$payload2) => {
      AppSidebar($$payload2);
      $$payload2.out += `<!----> <!---->`;
      Sidebar_inset($$payload2, {
        class: "sidebar-container",
        children: ($$payload3) => {
          $$payload3.out += `<header class="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear"><div class="flex w-full items-center gap-4 px-4 lg:px-6"><!---->`;
          Sidebar_trigger($$payload3, { class: "-ml-1" });
          $$payload3.out += `<!----> <h1 class="mr-6 text-base font-medium">${escape_html(getPageTitle(page.route.id))}</h1></div></header> <div class="main-content-area"><div class="@container/main flex flex-col gap-2"><div class="flex flex-col gap-4 md:gap-6"><div class="px-4 md:py-4 lg:px-6">`;
          children($$payload3);
          $$payload3.out += `<!----></div></div></div></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
  pop();
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-BACdjqvf.js.map
