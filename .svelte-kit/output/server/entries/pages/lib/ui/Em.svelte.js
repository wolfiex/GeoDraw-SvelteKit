import { c as create_ssr_component, e as escape } from "../../../../chunks/index-f909a211.js";
import parse from "parse-color";
var Em_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\n.em.svelte-s1t2y4{\n  padding:1px 4px 1px 4px;\n  font-weight:bold\n}\n\n.nowrap.svelte-s1t2y4{\n  white-space:nowrap\n}\n\n/* purgecss end ignore */")();
const css = {
  code: ".em.svelte-s1t2y4{padding:1px 4px 1px 4px;font-weight:bold}.nowrap.svelte-s1t2y4{white-space:nowrap}",
  map: null
};
const Em = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let rgb;
  let { color = "lightgrey" } = $$props;
  let { nowrap = true } = $$props;
  function textColor(rgb2) {
    const brightness = (rgb2[0] * 299 + rgb2[1] * 587 + rgb2[2] * 114) / 1e3;
    return brightness > 125 ? "black" : "white";
  }
  let text = "black";
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.nowrap === void 0 && $$bindings.nowrap && nowrap !== void 0)
    $$bindings.nowrap(nowrap);
  $$result.css.add(css);
  rgb = parse(color).rgb;
  {
    if (rgb) {
      text = textColor(rgb);
    }
  }
  return `<span class="${["em svelte-s1t2y4", nowrap ? "nowrap" : ""].join(" ").trim()}" style="${"background-color: " + escape(color) + "; color: " + escape(text) + ";"}" role="${"presentation"}">${slots.default ? slots.default({}) : ``}
</span>`;
});
export { Em as default };
