import { c as create_ssr_component, d as getContext, b as subscribe, e as escape, j as null_to_empty, f as add_styles, i as each, h as add_attribute } from "../../../../../chunks/index-c9602e46.js";
var Card_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\nh3.svelte-1krn9ab{\n  font-size:1.3rem;\n  font-weight:bold\n}\n\n.blank.svelte-1krn9ab{\n  padding:0;\n  line-height:1\n}\n\n.tile.svelte-1krn9ab,.blank.svelte-1krn9ab{\n  color:black;\n  margin:4px 0 0 !important\n}\n\n/* purgecss end ignore */")();
const css = {
  code: "h3.svelte-1krn9ab{font-size:1.3rem;font-weight:bold}.blank.svelte-1krn9ab{padding:0;line-height:1}.tile.svelte-1krn9ab,.blank.svelte-1krn9ab{color:black;margin:4px 0 0 !important}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $cols, $$unsubscribe_cols;
  let { colspan = 1 } = $$props;
  let { rowspan = 1 } = $$props;
  let { title = null } = $$props;
  let { links = null } = $$props;
  let { blank = false } = $$props;
  const { cols } = getContext("tiles");
  $$unsubscribe_cols = subscribe(cols, (value) => $cols = value);
  if ($$props.colspan === void 0 && $$bindings.colspan && colspan !== void 0)
    $$bindings.colspan(colspan);
  if ($$props.rowspan === void 0 && $$bindings.rowspan && rowspan !== void 0)
    $$bindings.rowspan(rowspan);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.links === void 0 && $$bindings.links && links !== void 0)
    $$bindings.links(links);
  if ($$props.blank === void 0 && $$bindings.blank && blank !== void 0)
    $$bindings.blank(blank);
  $$result.css.add(css);
  $$unsubscribe_cols();
  return `<article class="${[
    escape(null_to_empty(!blank ? "tile tile__content" : "")) + " svelte-1krn9ab",
    blank ? "blank" : ""
  ].join(" ").trim()}"${add_styles({
    "grid-column": `span ${colspan == 1 ? 1 : colspan > $cols ? $cols : colspan}`,
    "grid-row": `span ${rowspan}`
  })}>${title ? `<header class="${"margin-top--1"}"><h3 class="${"margin-top--0 margin-right--0 margin-bottom--0 margin-left--0 svelte-1krn9ab"}">${escape(title)}</h3></header>` : ``}
  ${slots.default ? slots.default({}) : ``}
  ${links && links[0] ? `<div class="${"margin-top--2"}">${each(links, (link) => {
    return `<a${add_attribute("href", link.url, 0)} class="${"tile__link"}"${add_attribute("aria-label", link.label, 0)}${add_attribute("data-gtm-label", link.label, 0)}>${escape(link.label)}
    </a>`;
  })}</div>` : ``}
</article>`;
});
export { Card as default };
