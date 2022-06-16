var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Card
});
module.exports = __toCommonJS(stdin_exports);
var import_index_f909a211 = require("../../../../../chunks/index-f909a211.js");
var Card_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\nh3.svelte-1krn9ab{\n  font-size:1.3rem;\n  font-weight:bold\n}\n\n.blank.svelte-1krn9ab{\n  padding:0;\n  line-height:1\n}\n\n.tile.svelte-1krn9ab,.blank.svelte-1krn9ab{\n  color:black;\n  margin:4px 0 0 !important\n}\n\n/* purgecss end ignore */")();
const css = {
  code: "h3.svelte-1krn9ab{font-size:1.3rem;font-weight:bold}.blank.svelte-1krn9ab{padding:0;line-height:1}.tile.svelte-1krn9ab,.blank.svelte-1krn9ab{color:black;margin:4px 0 0 !important}",
  map: null
};
const Card = (0, import_index_f909a211.c)(($$result, $$props, $$bindings, slots) => {
  let $cols, $$unsubscribe_cols;
  let { colspan = 1 } = $$props;
  let { rowspan = 1 } = $$props;
  let { title = null } = $$props;
  let { links = null } = $$props;
  let { blank = false } = $$props;
  const { cols } = (0, import_index_f909a211.d)("tiles");
  $$unsubscribe_cols = (0, import_index_f909a211.b)(cols, (value) => $cols = value);
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
    (0, import_index_f909a211.e)((0, import_index_f909a211.r)(!blank ? "tile tile__content" : "")) + " svelte-1krn9ab",
    blank ? "blank" : ""
  ].join(" ").trim()}"${(0, import_index_f909a211.f)({
    "grid-column": `span ${colspan == 1 ? 1 : colspan > $cols ? $cols : colspan}`,
    "grid-row": `span ${rowspan}`
  })}>${title ? `<header class="${"margin-top--1"}"><h3 class="${"margin-top--0 margin-right--0 margin-bottom--0 margin-left--0 svelte-1krn9ab"}">${(0, import_index_f909a211.e)(title)}</h3></header>` : ``}
  ${slots.default ? slots.default({}) : ``}
  ${links && links[0] ? `<div class="${"margin-top--2"}">${(0, import_index_f909a211.i)(links, (link) => {
    return `<a${(0, import_index_f909a211.h)("href", link.url, 0)} class="${"tile__link"}"${(0, import_index_f909a211.h)("aria-label", link.label, 0)}${(0, import_index_f909a211.h)("data-gtm-label", link.label, 0)}>${(0, import_index_f909a211.e)(link.label)}
    </a>`;
  })}</div>` : ``}
</article>`;
});
