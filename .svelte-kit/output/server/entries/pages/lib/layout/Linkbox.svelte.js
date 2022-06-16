import { c as create_ssr_component, j as add_attribute, h as escape, r as each } from "../../../../chunks/index-12fa369c.js";
const Linkbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { mode = "default" } = $$props;
  let { title = "Related links" } = $$props;
  let { id = null } = $$props;
  let { links = [] } = $$props;
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0)
    $$bindings.mode(mode);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.links === void 0 && $$bindings.links && links !== void 0)
    $$bindings.links(links);
  return `${mode == "neutral" ? `<div${add_attribute("id", id, 0)} class="${"section__content--markdown section__content--markdown--neutral-article"}"><section>${title ? `<h2>${escape(title)}</h2>` : ``}
    <div class="${"markdown-box-container"}">${each(links, (link) => {
    return `<p><a${add_attribute("href", link.url, 0)}>${escape(link.label)}</a>
        <br>${escape(link.type)} | ${escape(link.meta)}
        <br>${escape(link.description)}
      </p>`;
  })}</div></section></div>` : `<div${add_attribute("id", id, 0)} class="${"tile-neutral width-md--40 margin-bottom--2"}">${title ? `<h2 class="${"tile-neutral__heading"}">${escape(title)}</h2>` : ``}
  <ul class="${"list--neutral margin-bottom--0"}">${each(links, (link) => {
    return `<li class="${"margin-bottom--3"}"><a href="${"/peoplepopulationandcommunity/birthsdeathsandmarriages/deaths/bulletins/deathsregisteredweeklyinenglandandwalesprovisional/weekending25february2022"}" class="${"tile-neutral-content__title underline-link"}">Deaths registered weekly in England and Wales, provisional</a>
    <p class="${"tile-neutral-content__meta"}">${escape(link.type)}
      <span class="${"text--aluminium"}">|</span> ${escape(link.meta)}</p>
    <p class="${"tile-neutral-content__description margin-top--0 margin-bottom--0 "}">${escape(link.description)}</p>
    </li>`;
  })}</ul></div>`}`;
});
export { Linkbox as default };
