import { c as create_ssr_component, e as escape, i as each, h as add_attribute } from "../../../../../chunks/index-e390a0ae.js";
const Breadcrumb = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { links = [] } = $$props;
  let { mode = "neutral" } = $$props;
  if ($$props.links === void 0 && $$bindings.links && links !== void 0)
    $$bindings.links(links);
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0)
    $$bindings.mode(mode);
  return `<nav aria-label="${"Breadcrumbs"}"><div class="${escape(mode == "neutral" ? "breadcrumb-neutral" : "breadcrumb") + " print--hide"}"><ol class="${"breadcrumb__list"}">${each(links, (link) => {
    return `<li class="${"breadcrumb__item"}">${link.url ? `<a class="${"breadcrumb__link"}"${add_attribute("href", link.url, 0)}>${escape(link.label)}</a>` : `${escape(link.label)}`}
			</li>`;
  })}</ol></div></nav>`;
});
export { Breadcrumb as default };
