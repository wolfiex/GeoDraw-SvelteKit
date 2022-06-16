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
  default: () => Section
});
module.exports = __toCommonJS(stdin_exports);
var import_index_c9602e46 = require("../../../../chunks/index-c9602e46.js");
const Section = (0, import_index_c9602e46.c)(($$result, $$props, $$bindings, slots) => {
  let { backlink = false } = $$props;
  let { hr = false } = $$props;
  let { id = null } = $$props;
  if ($$props.backlink === void 0 && $$bindings.backlink && backlink !== void 0)
    $$bindings.backlink(backlink);
  if ($$props.hr === void 0 && $$bindings.hr && hr !== void 0)
    $$bindings.hr(hr);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<div${(0, import_index_c9602e46.h)("id", id, 0)} class="${"section__content--markdown section__content--markdown--neutral-article"}"><section>${slots.default ? slots.default({}) : ``}
		${backlink ? `<p><a href="${"#top"}">\u2191 Back to the top</a></p>` : ``}
		${hr ? `<hr style="${"border: 0; height: 0; border-top: 1px solid #808080;"}">` : ``}</section></div>`;
});
