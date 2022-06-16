import { c as create_ssr_component, d as getContext, b as subscribe, f as add_styles, h as add_attribute, e as escape } from "../../../../../chunks/index-c9602e46.js";
var CardFeature_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\n.tile.svelte-1krn9ab{\n  color:black;\n  margin:4px 0 0 !important\n}\n\n/* purgecss end ignore */")();
const css = {
  code: ".tile.svelte-1krn9ab{color:black;margin:4px 0 0 !important}",
  map: null
};
const CardFeature = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $cols, $$unsubscribe_cols;
  let { colspan = 1 } = $$props;
  let { rowspan = 1 } = $$props;
  let { title = "Local statistics" } = $$props;
  let { url = "https://www.ons.gov.uk/help/localstatistics" } = $$props;
  let { description = "Where to find statistics covering specific areas" } = $$props;
  let { image = "https://static.ons.gov.uk/images/cf4ffa0c-d7ea-43a9-85a4-03ea05bbaaaf/original/local-statistics.png" } = $$props;
  const { cols } = getContext("tiles");
  $$unsubscribe_cols = subscribe(cols, (value) => $cols = value);
  if ($$props.colspan === void 0 && $$bindings.colspan && colspan !== void 0)
    $$bindings.colspan(colspan);
  if ($$props.rowspan === void 0 && $$bindings.rowspan && rowspan !== void 0)
    $$bindings.rowspan(rowspan);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  $$result.css.add(css);
  $$unsubscribe_cols();
  return `<article class="${"tile tile__highlighted-content svelte-1krn9ab"}"${add_styles({
    "grid-column": `span ${colspan == 1 ? 1 : colspan > $cols ? $cols : colspan}`,
    "grid-row": `span ${rowspan}`
  })}><div class="${"tile__highlighted-content-image-container"}"><img class="${"tile__highlighted-content-image"}"${add_attribute("src", image, 0)} alt="${""}"></div>
  <h2 class="${"margin-top--0 margin-bottom--0"}"><a class="${"margin-left--0 tile__link tile__link--highlighted-content-title font-size--24"}"${add_attribute("href", url, 0)} data-gtm-group="${"in-focus"}" data-gtm-group-position="${"1"}">${escape(title)}</a></h2>
  <p class="${"tile__text-description margin-top--0 margin-bottom--0"}">${escape(description)}</p>
</article>`;
});
export { CardFeature as default };
