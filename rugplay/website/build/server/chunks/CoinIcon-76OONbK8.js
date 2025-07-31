import { p as push, d as attr, k as attr_class, m as escape_html, a as pop, o as stringify } from './index3-CthgjPPi.js';
import { b as getPublicUrl } from './utils2-CLIgW4-x.js';

function CoinIcon($$payload, $$props) {
  push();
  let {
    icon,
    symbol,
    name = symbol,
    size = 6,
    class: className = ""
  } = $$props;
  let sizeClass = `h-${size} w-${size}`;
  if (icon) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<img${attr("src", getPublicUrl(icon))}${attr("alt", name)}${attr_class(`${stringify(sizeClass)} rounded-full object-cover ${stringify(className)}`)} loading="lazy" decoding="async"/>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div${attr_class(`${stringify(sizeClass)} bg-primary flex items-center justify-center overflow-hidden rounded-full ${stringify(className)}`)}><span class="text-xs font-bold text-white">${escape_html(symbol.slice(0, 2))}</span></div>`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}

export { CoinIcon as C };
//# sourceMappingURL=CoinIcon-76OONbK8.js.map
