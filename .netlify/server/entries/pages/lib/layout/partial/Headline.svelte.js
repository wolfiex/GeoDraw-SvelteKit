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
  default: () => Headline
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e390a0ae = require("../../../../../chunks/index-e390a0ae.js");
var Headline_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\nh1.svelte-m86ur0{\n  line-height:1\n}\n\n/* purgecss end ignore */")();
const css = {
  code: "h1.svelte-m86ur0{line-height:1}",
  map: null
};
const Headline = (0, import_index_e390a0ae.c)(($$result, $$props, $$bindings, slots) => {
  let { mode = (0, import_index_e390a0ae.d)("mode") } = $$props;
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0)
    $$bindings.mode(mode);
  $$result.css.add(css);
  return `<h1 class="${(0, import_index_e390a0ae.e)((0, import_index_e390a0ae.k)(mode == "neutral" ? "page-neutral-intro__title" : "page-intro__title")) + " svelte-m86ur0"}">${slots.default ? slots.default({}) : ``}
</h1>`;
});
