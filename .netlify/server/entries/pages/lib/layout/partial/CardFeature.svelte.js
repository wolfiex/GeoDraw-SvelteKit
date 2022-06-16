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
  default: () => CardFeature
});
module.exports = __toCommonJS(stdin_exports);
var import_index_12fa369c = require("../../../../../chunks/index-12fa369c.js");
var CardFeature_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\n.tile.svelte-1krn9ab{\n  color:black;\n  margin:4px 0 0 !important\n}\n\n/* purgecss end ignore */")();
const css = {
  code: ".tile.svelte-1krn9ab{color:black;margin:4px 0 0 !important}",
  map: null
};
const CardFeature = (0, import_index_12fa369c.c)(($$result, $$props, $$bindings, slots) => {
  let $cols, $$unsubscribe_cols;
  let { colspan = 1 } = $$props;
  let { rowspan = 1 } = $$props;
  let { title = "Local statistics" } = $$props;
  let { url = "https://www.ons.gov.uk/help/localstatistics" } = $$props;
  let { description = "Where to find statistics covering specific areas" } = $$props;
  let { image = "https://static.ons.gov.uk/images/cf4ffa0c-d7ea-43a9-85a4-03ea05bbaaaf/original/local-statistics.png" } = $$props;
  const { cols } = (0, import_index_12fa369c.i)("tiles");
  $$unsubscribe_cols = (0, import_index_12fa369c.o)(cols, (value) => $cols = value);
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
  return `<article class="${"tile tile__highlighted-content svelte-1krn9ab"}"${(0, import_index_12fa369c.u)({
    "grid-column": `span ${colspan == 1 ? 1 : colspan > $cols ? $cols : colspan}`,
    "grid-row": `span ${rowspan}`
  })}><div class="${"tile__highlighted-content-image-container"}"><img class="${"tile__highlighted-content-image"}"${(0, import_index_12fa369c.j)("src", image, 0)} alt="${""}"></div>
  <h2 class="${"margin-top--0 margin-bottom--0"}"><a class="${"margin-left--0 tile__link tile__link--highlighted-content-title font-size--24"}"${(0, import_index_12fa369c.j)("href", url, 0)} data-gtm-group="${"in-focus"}" data-gtm-group-position="${"1"}">${(0, import_index_12fa369c.h)(title)}</a></h2>
  <p class="${"tile__text-description margin-top--0 margin-bottom--0"}">${(0, import_index_12fa369c.h)(description)}</p>
</article>`;
});
