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
  default: () => Icon
});
module.exports = __toCommonJS(stdin_exports);
var import_index_f909a211 = require("../../../../chunks/index-f909a211.js");
var Icon_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\nsvg.svelte-1ior0zp{\n  width:1rem;\n  height:1rem;\n  fill:currentColor;\n  transition:all 0.3s ease-out;\n  overflow:visible\n}\n\n/* purgecss end ignore */")();
const css = {
  code: "svg.svelte-1ior0zp{width:1rem;height:1rem;fill:currentColor;transition:all 0.3s ease-out;overflow:visible}",
  map: null
};
const Icon = (0, import_index_f909a211.c)(($$result, $$props, $$bindings, slots) => {
  let { name = "close" } = $$props;
  const paths = {
    close: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  };
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  $$result.css.add(css);
  return `<svg viewBox="${"0 0 24 24"}" fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" class="${"svelte-1ior0zp"}"><path${(0, import_index_f909a211.h)("d", paths[name], 0)}></path></svg>`;
});
