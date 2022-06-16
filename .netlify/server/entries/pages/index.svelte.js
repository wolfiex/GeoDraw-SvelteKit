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
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_12fa369c = require("../../chunks/index-12fa369c.js");
const Heading = (0, import_index_12fa369c.c)(($$result, $$props, $$bindings, slots) => {
  return `<h1 class="${"py-4 text-black text-3xl text-center font-bold"}">${slots.default ? slots.default({}) : ``}</h1>`;
});
const Routes = (0, import_index_12fa369c.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_12fa369c.v)(Heading, "Heading").$$render($$result, {}, {}, {
    default: () => {
      return `Hello, World!`;
    }
  })}`;
});
