import { c as create_ssr_component, i as add_attribute } from "../../../../chunks/index-0029e4b6.js";
const ButtonLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url = "/" } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  return `<a class="${"btn btn--primary btn--full-width width-md--40 margin-bottom--2"}"${add_attribute("href", url, 0)}>${slots.default ? slots.default({}) : ``}</a>`;
});
export { ButtonLink as default };
