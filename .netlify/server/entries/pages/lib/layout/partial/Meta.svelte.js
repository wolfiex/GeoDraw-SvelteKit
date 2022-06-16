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
  default: () => Meta
});
module.exports = __toCommonJS(stdin_exports);
var import_index_c9602e46 = require("../../../../../chunks/index-c9602e46.js");
const Meta = (0, import_index_c9602e46.c)(($$result, $$props, $$bindings, slots) => {
  let { background = "grey" } = $$props;
  let { label = "Last updated" } = $$props;
  let { value = "date" } = $$props;
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  return `<div class="${["meta-wrap--thin", background == "grey" ? "meta-wrap" : ""].join(" ").trim()}"><div class="${"wrapper"}"><dl class="${"col-wrap"}"><div class="${"col padding-left--0 meta__item meta__item--no-border"}"><dt class="${"meta__term inline"}">${(0, import_index_c9602e46.e)(label)}:</dt>
				<dd class="${"inline"}"><!-- HTML_TAG_START -->${value}<!-- HTML_TAG_END --></dd></div></dl></div></div>`;
});
