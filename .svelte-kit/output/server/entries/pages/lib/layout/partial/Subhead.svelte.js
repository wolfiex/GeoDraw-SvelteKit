import { c as create_ssr_component, d as getContext, h as add_attribute } from "../../../../../chunks/index-c9602e46.js";
const Subhead = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { mode = getContext("mode") } = $$props;
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0)
    $$bindings.mode(mode);
  return `<p${add_attribute("class", mode == "neutral" ? "page-neutral-intro__content" : "page-intro__content", 0)}>${slots.default ? slots.default({}) : ``}</p>`;
});
export { Subhead as default };
