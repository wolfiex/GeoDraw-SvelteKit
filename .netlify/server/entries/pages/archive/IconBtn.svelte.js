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
  default: () => IconBtn
});
module.exports = __toCommonJS(stdin_exports);
var import_index_f909a211 = require("../../../chunks/index-f909a211.js");
var import_HeaderSearch_svelte_svelte_type_style_lang_c0700dd8 = require("../../../chunks/HeaderSearch.svelte_svelte_type_style_lang-c0700dd8.js");
var import_Button_28b43d3f = require("../../../chunks/Button-28b43d3f.js");
var import_flatpickr = require("flatpickr");
var import_index_1ceaa7e2 = require("../../../chunks/index-1ceaa7e2.js");
const IconBtn = (0, import_index_f909a211.c)(($$result, $$props, $$bindings, slots) => {
  let { path = false } = $$props;
  let { iconname = "bolt" } = $$props;
  const icon = Promise.resolve().then(() => __toESM(require("svelte-material-icons/MaterialDesign/svg/" + iconname + ".svg")));
  let { size = "1em" } = $$props;
  let { width = size } = $$props;
  let { height = size } = $$props;
  let { color = "currentColor" } = $$props;
  let { viewBox = "0 0 24 24" } = $$props;
  let { id = "button" } = $$props;
  let { onclick = () => {
  } } = $$props;
  let { disabled = false } = $$props;
  let { assistiveText = "Button" } = $$props;
  console.log(icon);
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  if ($$props.iconname === void 0 && $$bindings.iconname && iconname !== void 0)
    $$bindings.iconname(iconname);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0)
    $$bindings.viewBox(viewBox);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.onclick === void 0 && $$bindings.onclick && onclick !== void 0)
    $$bindings.onclick(onclick);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.assistiveText === void 0 && $$bindings.assistiveText && assistiveText !== void 0)
    $$bindings.assistiveText(assistiveText);
  return `${(0, import_index_f909a211.v)(import_Button_28b43d3f.B, "Button").$$render($$result, {
    id,
    disabled,
    class: "bx--btn bx--btn--secondary bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--bottom bx--tooltip--align-center bx--btn--sm icon drawbtn"
  }, {}, {
    default: () => {
      return `<span class="${"bx--assistive-text"}">${(0, import_index_f909a211.e)(assistiveText)}</span>

        ${path ? `<svg${(0, import_index_f909a211.h)("width", width, 0)}${(0, import_index_f909a211.h)("height", height, 0)}${(0, import_index_f909a211.h)("viewBox", viewBox, 0)}><path d="${"..."}"${(0, import_index_f909a211.h)("fill", color, 0)}></path></svg>` : `
kk`}`;
    }
  })}`;
});
