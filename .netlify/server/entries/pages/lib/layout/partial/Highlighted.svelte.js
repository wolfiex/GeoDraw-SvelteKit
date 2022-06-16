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
  default: () => Highlighted
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e390a0ae = require("../../../../../chunks/index-e390a0ae.js");
const Highlighted = (0, import_index_e390a0ae.c)(($$result, $$props, $$bindings, slots) => {
  let { title = "Highlighted content" } = $$props;
  let { links = [] } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.links === void 0 && $$bindings.links && links !== void 0)
    $$bindings.links(links);
  return `<div class="${"nav-secondary--border-left-lg col col--md-47 col--lg-19 col--lg-offset-2 padding-left margin-top-lg--3"}"><h2 class="${"margin-top-lg--1"}">${(0, import_index_e390a0ae.e)(title)}</h2>
	<ul class="${"list--neutral margin-top--negative-one-fix"}">${(0, import_index_e390a0ae.i)(links, (link) => {
    return `<li><a${(0, import_index_e390a0ae.h)("href", link.url, 0)}${(0, import_index_e390a0ae.h)("data-gtm-title", link.label, 0)} data-gtm-type="${"highlighted-links"}">${(0, import_index_e390a0ae.e)(link.label)}</a>
		</li>`;
  })}</ul></div>`;
});
