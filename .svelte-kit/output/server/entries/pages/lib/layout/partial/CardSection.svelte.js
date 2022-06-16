import { c as create_ssr_component, d as getContext, b as subscribe, f as add_styles, h as add_attribute, e as escape } from "../../../../../chunks/index-f909a211.js";
var CardSection_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\narticle.svelte-lpcnsk{\n  position:relative\n}\n\np.svelte-lpcnsk{\n  font-size:14px\n}\n\n/* purgecss end ignore */")();
const css = {
  code: "article.svelte-lpcnsk{position:relative}p.svelte-lpcnsk{font-size:14px}",
  map: null
};
const CardSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $cols, $$unsubscribe_cols;
  let { colspan = 1 } = $$props;
  let { rowspan = 1 } = $$props;
  let { title = "Section title" } = $$props;
  let { url = "/" } = $$props;
  let { description = "A short text description of this section." } = $$props;
  let { image = null } = $$props;
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
  return `<article class="${[
    "height--31-indented-ellipsis padding-top--0 padding-right--0 padding-bottom--0 padding-left--0 js-hover-click svelte-lpcnsk",
    "background--mercury "
  ].join(" ").trim()}"${add_styles({
    "grid-column": `span ${colspan == 1 ? 1 : colspan > $cols ? $cols : colspan}`,
    "grid-row": `span ${rowspan}`
  })}>${!image ? `<div class="${[
    "min-height--10 padding-top--2 padding-left--1 padding-right--1",
    "background--gallery  "
  ].join(" ").trim()}"><h3 class="${"flush"}"><a${add_attribute("href", url, 0)}>${escape(title)}
        <span class="${"box__clickable"}"></span></a></h3></div>
  <div class="${[
    "box__content padding-top--1 padding-right--1 padding-bottom--1 padding-left--1",
    "border-top--iron-sm border-top--iron-md   "
  ].join(" ").trim()}"><p class="${"svelte-lpcnsk"}">${escape(description)}</p></div>` : `<div class="${[
    "js-hover-click height--31 print--hide",
    "background--mercury "
  ].join(" ").trim()}"><div class="${"box__image padding-top--16 padding-right--1 padding-left--1"}"><h3 class="${"flush"}"><a${add_attribute("href", url, 0)}>${escape(title)}
          <span class="${"image-holder height--14"}"><img${add_attribute("src", image, 0)}${add_attribute("alt", title, 0)} class="${"no-border"}"></span>
          <span class="${"box__clickable"}"></span></a></h3>
      <p class="${"box__content flush svelte-lpcnsk"}">${escape(description)}</p></div></div>`}
</article>`;
});
export { CardSection as default };
