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
  default: () => Warning
});
module.exports = __toCommonJS(stdin_exports);
var import_index_c9602e46 = require("../../../../chunks/index-c9602e46.js");
var Warning_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\n.warning.svelte-180bvkl{\n  position:fixed;\n  z-index:100;\n  top:0;\n  width:100%;\n  color:white;\n  background-color:#bb3333;\n  margin-bottom:10px;\n  padding:8px 0;\n  font-size:1em\n}\n\n.spacer.svelte-180bvkl{\n  display:block\n}\n\n/* purgecss end ignore */")();
const css = {
  code: ".warning.svelte-180bvkl{position:fixed;z-index:100;top:0;width:100%;color:white;background-color:#bb3333;margin-bottom:10px;padding:8px 0;font-size:1em}.spacer.svelte-180bvkl{display:block}",
  map: null
};
const Warning = (0, import_index_c9602e46.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<aside role="${"alert"}" class="${"warning svelte-180bvkl"}"><div class="${"wrapper middle"}"><strong>${slots.default ? slots.default({}) : ``}</strong></div></aside>
<div class="${"spacer svelte-180bvkl"}"${(0, import_index_c9602e46.f)({ "height": `${40}px` })}></div>`;
});
