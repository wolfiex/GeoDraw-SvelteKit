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
  default: () => _layout_reset
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e390a0ae = require("../../../chunks/index-e390a0ae.js");
var import_paths_396f020f = require("../../../chunks/paths-396f020f.js");
var import_ONSFooter_58cc53c8 = require("../../../chunks/ONSFooter-58cc53c8.js");
let theme = "light";
const _layout_reset = (0, import_index_e390a0ae.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_e390a0ae.b)(import_ONSFooter_58cc53c8.p, (value) => $page = value);
  let path = $page.url.pathname;
  let lang = $page.url.hostname.split(".")[0] == "cy" ? "cy" : "en";
  let baseurl = lang == "cy" ? "//cy.ons.gov.uk" : "//www.ons.gov.uk";
  (0, import_index_e390a0ae.s)("theme", import_ONSFooter_58cc53c8.t[theme]);
  $$unsubscribe_page();
  return `${$$result.head += `<link rel="${"icon"}" href="${(0, import_index_e390a0ae.e)(import_paths_396f020f.a) + "/favicon.ico"}" data-svelte="svelte-1ttl8ld"><meta property="${"og:type"}" content="${"website"}" data-svelte="svelte-1ttl8ld"><meta property="${"og:url"}" content="${(0, import_index_e390a0ae.e)(import_paths_396f020f.a) + "/"}" data-svelte="svelte-1ttl8ld"><meta property="${"og:image"}" content="${(0, import_index_e390a0ae.e)(import_paths_396f020f.a) + "/img/og.png"}" data-svelte="svelte-1ttl8ld"><meta property="${"og:image:type"}" content="${"image/png"}" data-svelte="svelte-1ttl8ld">`, ""}

${(0, import_index_e390a0ae.v)(import_ONSFooter_58cc53c8.W, "Warning").$$render($$result, {}, {}, {
    default: () => {
      return `WARNING! This is a prototype. Data likely to contain inaccuracies.
`;
    }
  })}

${(0, import_index_e390a0ae.v)(import_ONSFooter_58cc53c8.O, "ONSHeader").$$render($$result, { baseurl, path, lang }, {}, {})}

<main id="${"main"}" tabindex="${"-1"}">${slots.default ? slots.default({}) : ``}</main>

${(0, import_index_e390a0ae.v)(import_ONSFooter_58cc53c8.a, "ONSFooter").$$render($$result, { baseurl, lang }, {}, {})}`;
});
