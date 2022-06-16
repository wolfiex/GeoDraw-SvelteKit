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
  default: () => Linkbox
});
module.exports = __toCommonJS(stdin_exports);
var import_index_c9602e46 = require("../../../../chunks/index-c9602e46.js");
const Linkbox = (0, import_index_c9602e46.c)(($$result, $$props, $$bindings, slots) => {
  let { mode = "default" } = $$props;
  let { title = "Related links" } = $$props;
  let { id = null } = $$props;
  let { links = [] } = $$props;
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0)
    $$bindings.mode(mode);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.links === void 0 && $$bindings.links && links !== void 0)
    $$bindings.links(links);
  return `${mode == "neutral" ? `<div${(0, import_index_c9602e46.h)("id", id, 0)} class="${"section__content--markdown section__content--markdown--neutral-article"}"><section>${title ? `<h2>${(0, import_index_c9602e46.e)(title)}</h2>` : ``}
    <div class="${"markdown-box-container"}">${(0, import_index_c9602e46.i)(links, (link) => {
    return `<p><a${(0, import_index_c9602e46.h)("href", link.url, 0)}>${(0, import_index_c9602e46.e)(link.label)}</a>
        <br>${(0, import_index_c9602e46.e)(link.type)} | ${(0, import_index_c9602e46.e)(link.meta)}
        <br>${(0, import_index_c9602e46.e)(link.description)}
      </p>`;
  })}</div></section></div>` : `<div${(0, import_index_c9602e46.h)("id", id, 0)} class="${"tile-neutral width-md--40 margin-bottom--2"}">${title ? `<h2 class="${"tile-neutral__heading"}">${(0, import_index_c9602e46.e)(title)}</h2>` : ``}
  <ul class="${"list--neutral margin-bottom--0"}">${(0, import_index_c9602e46.i)(links, (link) => {
    return `<li class="${"margin-bottom--3"}"><a href="${"/peoplepopulationandcommunity/birthsdeathsandmarriages/deaths/bulletins/deathsregisteredweeklyinenglandandwalesprovisional/weekending25february2022"}" class="${"tile-neutral-content__title underline-link"}">Deaths registered weekly in England and Wales, provisional</a>
    <p class="${"tile-neutral-content__meta"}">${(0, import_index_c9602e46.e)(link.type)}
      <span class="${"text--aluminium"}">|</span> ${(0, import_index_c9602e46.e)(link.meta)}</p>
    <p class="${"tile-neutral-content__description margin-top--0 margin-bottom--0 "}">${(0, import_index_c9602e46.e)(link.description)}</p>
    </li>`;
  })}</ul></div>`}`;
});
