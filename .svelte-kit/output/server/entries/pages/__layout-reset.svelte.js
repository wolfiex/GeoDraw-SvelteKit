import { c as create_ssr_component } from "../../chunks/index-0029e4b6.js";
var __layoutReset_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\nbody,main.svelte-5evocz{\n  margin:0 !important;\n  padding:0 !important;\n  left:0 !important;\n  top:0 !important\n}\n\n/* purgecss end ignore */")();
const css = {
  code: "body,main.svelte-5evocz{margin:0 !important;padding:0 !important;left:0 !important;top:0 !important}",
  map: null
};
const _layout_reset = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main id="${"main"}" class="${"reset svelte-5evocz"}">${slots.default ? slots.default({}) : ``}
</main>`;
});
export { _layout_reset as default };
