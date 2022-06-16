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
  default: () => Breadcrumb
});
module.exports = __toCommonJS(stdin_exports);
var import_index_12fa369c = require("../../../../../chunks/index-12fa369c.js");
const Breadcrumb = (0, import_index_12fa369c.c)(($$result, $$props, $$bindings, slots) => {
  let { links = [] } = $$props;
  let { mode = "neutral" } = $$props;
  if ($$props.links === void 0 && $$bindings.links && links !== void 0)
    $$bindings.links(links);
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0)
    $$bindings.mode(mode);
  return `<nav aria-label="${"Breadcrumbs"}"><div class="${(0, import_index_12fa369c.h)(mode == "neutral" ? "breadcrumb-neutral" : "breadcrumb") + " print--hide"}"><ol class="${"breadcrumb__list"}">${(0, import_index_12fa369c.r)(links, (link) => {
    return `<li class="${"breadcrumb__item"}">${link.url ? `<a class="${"breadcrumb__link"}"${(0, import_index_12fa369c.j)("href", link.url, 0)}>${(0, import_index_12fa369c.h)(link.label)}</a>` : `${(0, import_index_12fa369c.h)(link.label)}`}
			</li>`;
  })}</ol></div></nav>`;
});
