import { c as create_ssr_component, e as escape, i as each, h as add_attribute } from "../../../../../chunks/index-c9602e46.js";
const Highlighted = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Highlighted content" } = $$props;
  let { links = [] } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.links === void 0 && $$bindings.links && links !== void 0)
    $$bindings.links(links);
  return `<div class="${"nav-secondary--border-left-lg col col--md-47 col--lg-19 col--lg-offset-2 padding-left margin-top-lg--3"}"><h2 class="${"margin-top-lg--1"}">${escape(title)}</h2>
	<ul class="${"list--neutral margin-top--negative-one-fix"}">${each(links, (link) => {
    return `<li><a${add_attribute("href", link.url, 0)}${add_attribute("data-gtm-title", link.label, 0)} data-gtm-type="${"highlighted-links"}">${escape(link.label)}</a>
		</li>`;
  })}</ul></div>`;
});
export { Highlighted as default };
