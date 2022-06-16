import { c as create_ssr_component } from "../../../chunks/index-f909a211.js";
/* empty css                              *//* empty css                            */import "../../../chunks/HeaderSearch.svelte_svelte_type_style_lang-c0700dd8.js";
import "flatpickr";
import "../../../chunks/index-1ceaa7e2.js";
var __layout_reset_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\n:root{\n  --header-2-height:clamp(2rem,4vh,60px);\n  --header-1-height:clamp(1rem,5vh,40px)\n}\n\n.icon{\n  border:2px solid rgb(89, 89, 89);\n  aspect-ratio:1/1;\n  height:auto;\n  width:var(--header-2-height)!important\n}\n\n.bx--grid{\n  left:0;\n  right:0;\n  margin-left:0;\n  margin-right:0px;\n  padding-left:0px;\n  padding-right:0px;\n  width:100vw\n}\n\n#head1{\n  width:100vw;\n  height:var(--header-1-height)!important;\n  background-color:whitesmoke;\n  margin:0\n}\n\n#head2{\n  width:100vw;\n  height:var(--header-2-height)!important;\n  background-color:#323132\n        ;\n  margin:0\n}\n\n.bx--col{\n  padding:0!important;\n  display:flex;\n  flex-grow:5!important\n}\n\n/* purgecss end ignore */")();
const css = {
  code: ":root{--header-2-height:clamp(2rem,4vh,60px);--header-1-height:clamp(1rem,5vh,40px)}.icon{border:2px solid rgb(89, 89, 89);aspect-ratio:1/1;height:auto;width:var(--header-2-height)!important}.bx--grid{left:0;right:0;margin-left:0;margin-right:0px;padding-left:0px;padding-right:0px;width:100vw}#head1{width:100vw;height:var(--header-1-height)!important;background-color:whitesmoke;margin:0}#head2{width:100vw;height:var(--header-2-height)!important;background-color:#323132\n        ;margin:0}.bx--col{padding:0!important;display:flex;flex-grow:5!important}",
  map: null
};
const _layout_reset = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${slots.default ? slots.default({}) : ``}`;
});
export { _layout_reset as default };
