import { c as create_ssr_component, i as add_attribute, f as escape } from "../../../../chunks/index-0029e4b6.js";
const Banner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Banner title" } = $$props;
  let { label = "This is a description of the link" } = $$props;
  let { url = "/" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  return `<section class="${"background--pineapple-yellow wrapper banner__bottom-shadow margin-top-sm--3 margin-top-md--3 margin-top-lg--3 margin-bottom--3 js-hover-click"}" style="${"position: relative;"}"><div class="${"col-wrap"}"><a${add_attribute("href", url, 0)}><div class="${"col"}"><h1 class="${"banner__heading margin-top--1 font-weight-700 font-size--h2 adjust-font-size--30"}">${escape(title)}</h1>
        <p class="${"underline-link banner__link banner__body margin-top--0 margin-bottom--1"}">${escape(label)}</p></div>
      <span class="${"box__clickable"}"></span></a></div></section>`;
});
export { Banner as default };
