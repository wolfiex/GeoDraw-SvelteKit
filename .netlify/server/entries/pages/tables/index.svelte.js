var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Tables
});
module.exports = __toCommonJS(stdin_exports);
var import_index_12fa369c = require("../../../chunks/index-12fa369c.js");
var import_index_34c40784 = require("../../../chunks/index-34c40784.js");
var import_danfojs = require("danfojs");
var import_BarChart_svelte = __toESM(require("./BarChart.svelte.js"));
const css$2 = {
  code: "h2.svelte-4xzjby{display:inline-block}.tiles-grid.svelte-4xzjby{display:grid;width:100%;justify-content:stretch;grid-auto-flow:row dense;margin:8px 0}",
  map: null
};
const Cards = (0, import_index_12fa369c.c)(($$result, $$props, $$bindings, slots) => {
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
  const cols = (0, import_index_34c40784.w)(defs[colwidth].c);
  (0, import_index_12fa369c.s)("tiles", { cols });
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
  return `<div class="${"tiles"}">${title ? `<h2 class="${"svelte-4xzjby"}">${(0, import_index_12fa369c.h)(title)}</h2>
  ${slots.meta ? slots.meta({}) : ``}` : ``}
  <div class="${"tiles-grid margin-bottom svelte-4xzjby"}"${(0, import_index_12fa369c.u)({
    "grid-template-columns": `repeat(${colwidth == "full" ? "1fr" : "auto-fit, minmax(min(" + defs[colwidth].w + "px, 100%), 1fr))"}`,
    "grid-gap": `${gridgap}px`
  })}>${slots.default ? slots.default({}) : ``}</div>
</div>`;
});
const css$1 = {
  code: "h3.svelte-1krn9ab{font-size:1.3rem;font-weight:bold}.blank.svelte-1krn9ab{padding:0;line-height:1}.tile.svelte-1krn9ab,.blank.svelte-1krn9ab{color:black;margin:4px 0 0 !important}",
  map: null
};
const Card = (0, import_index_12fa369c.c)(($$result, $$props, $$bindings, slots) => {
  let $cols, $$unsubscribe_cols;
  let { colspan = 1 } = $$props;
  let { rowspan = 1 } = $$props;
  let { title = null } = $$props;
  let { links = null } = $$props;
  let { blank = false } = $$props;
  const { cols } = (0, import_index_12fa369c.i)("tiles");
  $$unsubscribe_cols = (0, import_index_12fa369c.o)(cols, (value) => $cols = value);
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
    (0, import_index_12fa369c.h)((0, import_index_12fa369c.w)(!blank ? "tile tile__content" : "")) + " svelte-1krn9ab",
    blank ? "blank" : ""
  ].join(" ").trim()}"${(0, import_index_12fa369c.u)({
    "grid-column": `span ${colspan == 1 ? 1 : colspan > $cols ? $cols : colspan}`,
    "grid-row": `span ${rowspan}`
  })}>${title ? `<header class="${"margin-top--1"}"><h3 class="${"margin-top--0 margin-right--0 margin-bottom--0 margin-left--0 svelte-1krn9ab"}">${(0, import_index_12fa369c.h)(title)}</h3></header>` : ``}
  ${slots.default ? slots.default({}) : ``}
  ${links && links[0] ? `<div class="${"margin-top--2"}">${(0, import_index_12fa369c.r)(links, (link) => {
    return `<a${(0, import_index_12fa369c.j)("href", link.url, 0)} class="${"tile__link"}"${(0, import_index_12fa369c.j)("aria-label", link.label, 0)}${(0, import_index_12fa369c.j)("data-gtm-label", link.label, 0)}>${(0, import_index_12fa369c.h)(link.label)}
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
const Tables = (0, import_index_12fa369c.c)(($$result, $$props, $$bindings, slots) => {
  var tables = [];
  $$result.css.add(css);
  return `
<h1 class="${"svelte-1o0h2sq"}">${(0, import_index_12fa369c.h)(name)}</h1>
${(0, import_index_12fa369c.v)(Cards, "Cards").$$render($$result, {}, {}, {
    default: () => {
      return `${(0, import_index_12fa369c.v)(Card, "Card").$$render($$result, { title: "Area map" }, {}, {
        default: () => {
          return `<div${(0, import_index_12fa369c.u)({ "height": `230px`, "width": `100%` })}></div>`;
        }
      })}
  ${(0, import_index_12fa369c.r)(tables, (tab) => {
        return `${(0, import_index_12fa369c.v)(Card, "Card").$$render($$result, { title: tab.name }, {}, {
          default: () => {
            return `

      ${(0, import_index_12fa369c.v)(import_BarChart_svelte.default, "BarChart").$$render($$result, {
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
