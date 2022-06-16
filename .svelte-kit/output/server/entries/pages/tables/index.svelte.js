import { c as create_ssr_component, s as setContext, h as escape, u as add_styles, i as getContext, o as subscribe, w as null_to_empty, r as each, j as add_attribute, v as validate_component } from "../../../chunks/index-12fa369c.js";
import { w as writable } from "../../../chunks/index-34c40784.js";
/* empty css                                                                   */import "danfojs";
import BarChart from "./BarChart.svelte.js";
const css$2 = {
  code: "h2.svelte-4xzjby{display:inline-block}.tiles-grid.svelte-4xzjby{display:grid;width:100%;justify-content:stretch;grid-auto-flow:row dense;margin:8px 0}",
  map: null
};
const Cards = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let columns;
  let { title = null } = $$props;
  let { colwidth = "medium" } = $$props;
  let { gridgap = 16 } = $$props;
  const defs = {
    narrow: { w: 180, c: 4 },
    medium: { w: 280, c: 3 },
    wide: { w: 380, c: 2 },
    full: { w: "100%", c: 1 }
  };
  const cols = writable(defs[colwidth].c);
  setContext("tiles", { cols });
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.colwidth === void 0 && $$bindings.colwidth && colwidth !== void 0)
    $$bindings.colwidth(colwidth);
  if ($$props.gridgap === void 0 && $$bindings.gridgap && gridgap !== void 0)
    $$bindings.gridgap(gridgap);
  $$result.css.add(css$2);
  columns = colwidth == "full" ? 1 : defs[colwidth].c;
  {
    cols.set(columns);
  }
  return `<div class="${"tiles"}">${title ? `<h2 class="${"svelte-4xzjby"}">${escape(title)}</h2>
  ${slots.meta ? slots.meta({}) : ``}` : ``}
  <div class="${"tiles-grid margin-bottom svelte-4xzjby"}"${add_styles({
    "grid-template-columns": `repeat(${colwidth == "full" ? "1fr" : "auto-fit, minmax(min(" + defs[colwidth].w + "px, 100%), 1fr))"}`,
    "grid-gap": `${gridgap}px`
  })}>${slots.default ? slots.default({}) : ``}</div>
</div>`;
});
const css$1 = {
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
  $$result.css.add(css$1);
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
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\nh1.svelte-1o0h2sq{\n  font-size:1.8rem;\n  margin:0 0 -12px 0;\n  font-weight:bold\n}\n\n/* purgecss end ignore */")();
const css = {
  code: "h1.svelte-1o0h2sq{font-size:1.8rem;margin:0 0 -12px 0;font-weight:bold}",
  map: null
};
const name = "Custom Area Tables";
const Tables = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var tables = [];
  $$result.css.add(css);
  return `
<h1 class="${"svelte-1o0h2sq"}">${escape(name)}</h1>
${validate_component(Cards, "Cards").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Card, "Card").$$render($$result, { title: "Area map" }, {}, {
        default: () => {
          return `<div${add_styles({ "height": `230px`, "width": `100%` })}></div>`;
        }
      })}
  ${each(tables, (tab) => {
        return `${validate_component(Card, "Card").$$render($$result, { title: tab.name }, {}, {
          default: () => {
            return `

      ${validate_component(BarChart, "BarChart").$$render($$result, {
              xKey: "pc",
              yKey: "column",
              zKey: "z",
              data: tab.data
            }, {}, {})}
    `;
          }
        })}`;
      })}`;
    }
  })}


`;
});
export { Tables as default };
