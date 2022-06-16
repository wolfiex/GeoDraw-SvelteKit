import { c as create_ssr_component, f as add_styles } from "../../../../chunks/index-f909a211.js";
var Warning_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\n.warning.svelte-180bvkl{\n  position:fixed;\n  z-index:100;\n  top:0;\n  width:100%;\n  color:white;\n  background-color:#bb3333;\n  margin-bottom:10px;\n  padding:8px 0;\n  font-size:1em\n}\n\n.spacer.svelte-180bvkl{\n  display:block\n}\n\n/* purgecss end ignore */")();
const css = {
  code: ".warning.svelte-180bvkl{position:fixed;z-index:100;top:0;width:100%;color:white;background-color:#bb3333;margin-bottom:10px;padding:8px 0;font-size:1em}.spacer.svelte-180bvkl{display:block}",
  map: null
};
const Warning = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<aside role="${"alert"}" class="${"warning svelte-180bvkl"}"><div class="${"wrapper middle"}"><strong>${slots.default ? slots.default({}) : ``}</strong></div></aside>
<div class="${"spacer svelte-180bvkl"}"${add_styles({ "height": `${40}px` })}></div>`;
});
export { Warning as default };
