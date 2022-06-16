import { c as create_ssr_component, h as add_attribute } from "../../../../chunks/index-f909a211.js";
var Icon_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\nsvg.svelte-1ior0zp{\n  width:1rem;\n  height:1rem;\n  fill:currentColor;\n  transition:all 0.3s ease-out;\n  overflow:visible\n}\n\n/* purgecss end ignore */")();
const css = {
  code: "svg.svelte-1ior0zp{width:1rem;height:1rem;fill:currentColor;transition:all 0.3s ease-out;overflow:visible}",
  map: null
};
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name = "close" } = $$props;
  const paths = {
    close: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  };
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  $$result.css.add(css);
  return `<svg viewBox="${"0 0 24 24"}" fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" class="${"svelte-1ior0zp"}"><path${add_attribute("d", paths[name], 0)}></path></svg>`;
});
export { Icon as default };
