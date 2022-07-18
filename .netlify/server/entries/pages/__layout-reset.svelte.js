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
  default: () => _layout_reset
});
module.exports = __toCommonJS(stdin_exports);
var import_index_0029e4b6 = require("../../chunks/index-0029e4b6.js");
var __layoutReset_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\nbody,main.svelte-5evocz{\n  margin:0 !important;\n  padding:0 !important;\n  left:0 !important;\n  top:0 !important\n}\n\n/* purgecss end ignore */")();
const css = {
  code: "body,main.svelte-5evocz{margin:0 !important;padding:0 !important;left:0 !important;top:0 !important}",
  map: null
};
const _layout_reset = (0, import_index_0029e4b6.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main id="${"main"}" class="${"reset svelte-5evocz"}">${slots.default ? slots.default({}) : ``}
</main>`;
});
