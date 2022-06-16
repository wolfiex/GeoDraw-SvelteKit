import { c as create_ssr_component, h as add_attribute } from "../../../../chunks/index-e390a0ae.js";
const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { backlink = false } = $$props;
  let { hr = false } = $$props;
  let { id = null } = $$props;
  if ($$props.backlink === void 0 && $$bindings.backlink && backlink !== void 0)
    $$bindings.backlink(backlink);
  if ($$props.hr === void 0 && $$bindings.hr && hr !== void 0)
    $$bindings.hr(hr);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<div${add_attribute("id", id, 0)} class="${"section__content--markdown section__content--markdown--neutral-article"}"><section>${slots.default ? slots.default({}) : ``}
		${backlink ? `<p><a href="${"#top"}">\u2191 Back to the top</a></p>` : ``}
		${hr ? `<hr style="${"border: 0; height: 0; border-top: 1px solid #808080;"}">` : ``}</section></div>`;
});
export { Section as default };
