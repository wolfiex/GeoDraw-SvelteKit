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
  default: () => ButtonLink
});
module.exports = __toCommonJS(stdin_exports);
var import_index_12fa369c = require("../../../../chunks/index-12fa369c.js");
const ButtonLink = (0, import_index_12fa369c.c)(($$result, $$props, $$bindings, slots) => {
  let { url = "/" } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  return `<a class="${"btn btn--primary btn--full-width width-md--40 margin-bottom--2"}"${(0, import_index_12fa369c.j)("href", url, 0)}>${slots.default ? slots.default({}) : ``}</a>`;
});
