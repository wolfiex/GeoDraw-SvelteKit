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
  default: () => Subhead
});
module.exports = __toCommonJS(stdin_exports);
var import_index_f909a211 = require("../../../../../chunks/index-f909a211.js");
const Subhead = (0, import_index_f909a211.c)(($$result, $$props, $$bindings, slots) => {
  let { mode = (0, import_index_f909a211.d)("mode") } = $$props;
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0)
    $$bindings.mode(mode);
  return `<p${(0, import_index_f909a211.h)("class", mode == "neutral" ? "page-neutral-intro__content" : "page-intro__content", 0)}>${slots.default ? slots.default({}) : ``}</p>`;
});
