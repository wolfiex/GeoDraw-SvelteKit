var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Em
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e390a0ae = require("../../../../chunks/index-e390a0ae.js");
var import_parse_color = __toESM(require("parse-color"));
var Em_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\n.em.svelte-s1t2y4{\n  padding:1px 4px 1px 4px;\n  font-weight:bold\n}\n\n.nowrap.svelte-s1t2y4{\n  white-space:nowrap\n}\n\n/* purgecss end ignore */")();
const css = {
  code: ".em.svelte-s1t2y4{padding:1px 4px 1px 4px;font-weight:bold}.nowrap.svelte-s1t2y4{white-space:nowrap}",
  map: null
};
const Em = (0, import_index_e390a0ae.c)(($$result, $$props, $$bindings, slots) => {
  let rgb;
  let { color = "lightgrey" } = $$props;
  let { nowrap = true } = $$props;
  function textColor(rgb2) {
    const brightness = (rgb2[0] * 299 + rgb2[1] * 587 + rgb2[2] * 114) / 1e3;
    return brightness > 125 ? "black" : "white";
  }
  let text = "black";
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.nowrap === void 0 && $$bindings.nowrap && nowrap !== void 0)
    $$bindings.nowrap(nowrap);
  $$result.css.add(css);
  rgb = (0, import_parse_color.default)(color).rgb;
  {
    if (rgb) {
      text = textColor(rgb);
    }
  }
  return `<span class="${["em svelte-s1t2y4", nowrap ? "nowrap" : ""].join(" ").trim()}" style="${"background-color: " + (0, import_index_e390a0ae.e)(color) + "; color: " + (0, import_index_e390a0ae.e)(text) + ";"}" role="${"presentation"}">${slots.default ? slots.default({}) : ``}
</span>`;
});
