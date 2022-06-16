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
  default: () => Article
});
module.exports = __toCommonJS(stdin_exports);
var import_index_c9602e46 = require("../../../../chunks/index-c9602e46.js");
const Article = (0, import_index_c9602e46.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"wrapper margin-bottom--2"}"><div class="${"col-wrap"}"><article class="${"col col--md-40 col--lg-40 page-neutral-content__main-content margin-left-md--1"}">${slots.default ? slots.default({}) : ``}</article></div></div>`;
});
