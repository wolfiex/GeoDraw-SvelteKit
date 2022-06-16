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
  default: () => _layout_tables
});
module.exports = __toCommonJS(stdin_exports);
var import_index_12fa369c = require("../../../chunks/index-12fa369c.js");
var __layoutTables_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\nbody,main.svelte-gv0lcn{\n  margin:0 !important;\n  padding:0 !important\n}\n\n/* purgecss end ignore */")();
const css = {
  code: "body,main.svelte-gv0lcn{margin:0 !important;padding:0 !important}",
  map: null
};
const _layout_tables = (0, import_index_12fa369c.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main id="${"main"}" class="${"svelte-gv0lcn"}">${slots.default ? slots.default({}) : ``}
</main>`;
});
