import { c as create_ssr_component, l as compute_rest_props, o as spread, q as escape_object } from "./index-0029e4b6.js";
const ButtonSet = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["stacked"]);
  let { stacked = false } = $$props;
  if ($$props.stacked === void 0 && $$bindings.stacked && stacked !== void 0)
    $$bindings.stacked(stacked);
  return `<div${spread([escape_object($$restProps)], {
    classes: "bx--btn-set " + (stacked ? "bx--btn-set--stacked" : "")
  })}>${slots.default ? slots.default({}) : ``}</div>`;
});
export { ButtonSet as B };
