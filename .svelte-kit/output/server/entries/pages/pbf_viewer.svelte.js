import { c as create_ssr_component, h as escape } from "../../chunks/index-12fa369c.js";
var pbf_viewer_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\nmain.svelte-1c7d7h3{\n  display:flex;\n  position:relative;\n  padding:100px\n}\n\n/* purgecss end ignore */")();
const css = {
  code: "main.svelte-1c7d7h3{display:flex;position:relative;padding:100px}",
  map: null
};
const Pbf_viewer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${"svelte-1c7d7h3"}">${hash ? `<h1>Tile: ${escape(hash)}</h1>` : ``}


</main>`;
});
export { Pbf_viewer as default };
