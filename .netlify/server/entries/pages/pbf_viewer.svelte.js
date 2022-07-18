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
  default: () => Pbf_viewer
});
module.exports = __toCommonJS(stdin_exports);
var import_index_0029e4b6 = require("../../chunks/index-0029e4b6.js");
var pbf_viewer_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\nmain.svelte-1c7d7h3{\n  display:flex;\n  position:relative;\n  padding:100px\n}\n\n/* purgecss end ignore */")();
const css = {
  code: "main.svelte-1c7d7h3{display:flex;position:relative;padding:100px}",
  map: null
};
const Pbf_viewer = (0, import_index_0029e4b6.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${"svelte-1c7d7h3"}">${hash ? `<h1>Tile: ${(0, import_index_0029e4b6.f)(hash)}</h1>` : ``}


</main>`;
});
