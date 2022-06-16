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
  default: () => Banner
});
module.exports = __toCommonJS(stdin_exports);
var import_index_f909a211 = require("../../../../chunks/index-f909a211.js");
const Banner = (0, import_index_f909a211.c)(($$result, $$props, $$bindings, slots) => {
  let { title = "Banner title" } = $$props;
  let { label = "This is a description of the link" } = $$props;
  let { url = "/" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  return `<section class="${"background--pineapple-yellow wrapper banner__bottom-shadow margin-top-sm--3 margin-top-md--3 margin-top-lg--3 margin-bottom--3 js-hover-click"}" style="${"position: relative;"}"><div class="${"col-wrap"}"><a${(0, import_index_f909a211.h)("href", url, 0)}><div class="${"col"}"><h1 class="${"banner__heading margin-top--1 font-weight-700 font-size--h2 adjust-font-size--30"}">${(0, import_index_f909a211.e)(title)}</h1>
        <p class="${"underline-link banner__link banner__body margin-top--0 margin-bottom--1"}">${(0, import_index_f909a211.e)(label)}</p></div>
      <span class="${"box__clickable"}"></span></a></div></section>`;
});
