import { c as create_ssr_component } from "../../../chunks/index-12fa369c.js";
var __layoutProfile_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\nbody,main.svelte-gv0lcn{\n  margin:0 !important;\n  padding:0 !important\n}\n\n/* purgecss end ignore */")();
const css = {
  code: "body,main.svelte-gv0lcn{margin:0 !important;padding:0 !important}",
  map: null
};
const _layout_profile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main id="${"main"}" class="${"svelte-gv0lcn"}">${slots.default ? slots.default({}) : ``}
</main>`;
});
export { _layout_profile as default };
