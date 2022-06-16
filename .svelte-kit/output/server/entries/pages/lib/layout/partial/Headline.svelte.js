import { c as create_ssr_component, i as getContext, h as escape, w as null_to_empty } from "../../../../../chunks/index-12fa369c.js";
var Headline_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\nh1.svelte-m86ur0{\n  line-height:1\n}\n\n/* purgecss end ignore */")();
const css = {
  code: "h1.svelte-m86ur0{line-height:1}",
  map: null
};
const Headline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { mode = getContext("mode") } = $$props;
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0)
    $$bindings.mode(mode);
  $$result.css.add(css);
  return `<h1 class="${escape(null_to_empty(mode == "neutral" ? "page-neutral-intro__title" : "page-intro__title")) + " svelte-m86ur0"}">${slots.default ? slots.default({}) : ``}
</h1>`;
});
export { Headline as default };
