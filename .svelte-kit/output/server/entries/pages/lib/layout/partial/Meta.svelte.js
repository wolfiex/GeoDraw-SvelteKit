import { c as create_ssr_component, e as escape } from "../../../../../chunks/index-c9602e46.js";
const Meta = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { background = "grey" } = $$props;
  let { label = "Last updated" } = $$props;
  let { value = "date" } = $$props;
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  return `<div class="${["meta-wrap--thin", background == "grey" ? "meta-wrap" : ""].join(" ").trim()}"><div class="${"wrapper"}"><dl class="${"col-wrap"}"><div class="${"col padding-left--0 meta__item meta__item--no-border"}"><dt class="${"meta__term inline"}">${escape(label)}:</dt>
				<dd class="${"inline"}"><!-- HTML_TAG_START -->${value}<!-- HTML_TAG_END --></dd></div></dl></div></div>`;
});
export { Meta as default };
