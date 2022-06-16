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
  default: () => CardSection
});
module.exports = __toCommonJS(stdin_exports);
var import_index_c9602e46 = require("../../../../../chunks/index-c9602e46.js");
var CardSection_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\narticle.svelte-lpcnsk{\n  position:relative\n}\n\np.svelte-lpcnsk{\n  font-size:14px\n}\n\n/* purgecss end ignore */")();
const css = {
  code: "article.svelte-lpcnsk{position:relative}p.svelte-lpcnsk{font-size:14px}",
  map: null
};
const CardSection = (0, import_index_c9602e46.c)(($$result, $$props, $$bindings, slots) => {
  let $cols, $$unsubscribe_cols;
  let { colspan = 1 } = $$props;
  let { rowspan = 1 } = $$props;
  let { title = "Section title" } = $$props;
  let { url = "/" } = $$props;
  let { description = "A short text description of this section." } = $$props;
  let { image = null } = $$props;
  const { cols } = (0, import_index_c9602e46.d)("tiles");
  $$unsubscribe_cols = (0, import_index_c9602e46.b)(cols, (value) => $cols = value);
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
  ].join(" ").trim()}"${(0, import_index_c9602e46.f)({
    "grid-column": `span ${colspan == 1 ? 1 : colspan > $cols ? $cols : colspan}`,
    "grid-row": `span ${rowspan}`
  })}>${!image ? `<div class="${[
    "min-height--10 padding-top--2 padding-left--1 padding-right--1",
    "background--gallery  "
  ].join(" ").trim()}"><h3 class="${"flush"}"><a${(0, import_index_c9602e46.h)("href", url, 0)}>${(0, import_index_c9602e46.e)(title)}
        <span class="${"box__clickable"}"></span></a></h3></div>
  <div class="${[
    "box__content padding-top--1 padding-right--1 padding-bottom--1 padding-left--1",
    "border-top--iron-sm border-top--iron-md   "
  ].join(" ").trim()}"><p class="${"svelte-lpcnsk"}">${(0, import_index_c9602e46.e)(description)}</p></div>` : `<div class="${[
    "js-hover-click height--31 print--hide",
    "background--mercury "
  ].join(" ").trim()}"><div class="${"box__image padding-top--16 padding-right--1 padding-left--1"}"><h3 class="${"flush"}"><a${(0, import_index_c9602e46.h)("href", url, 0)}>${(0, import_index_c9602e46.e)(title)}
          <span class="${"image-holder height--14"}"><img${(0, import_index_c9602e46.h)("src", image, 0)}${(0, import_index_c9602e46.h)("alt", title, 0)} class="${"no-border"}"></span>
          <span class="${"box__clickable"}"></span></a></h3>
      <p class="${"box__content flush svelte-lpcnsk"}">${(0, import_index_c9602e46.e)(description)}</p></div></div>`}
</article>`;
});
