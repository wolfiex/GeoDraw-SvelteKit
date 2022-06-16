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
var import_index_f909a211 = require("../../../chunks/index-f909a211.js");
var import_paths_396f020f = require("../../../chunks/paths-396f020f.js");
var import_ONSFooter_222593b3 = require("../../../chunks/ONSFooter-222593b3.js");
let theme = "light";
const _layout_reset = (0, import_index_f909a211.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_f909a211.b)(import_ONSFooter_222593b3.p, (value) => $page = value);
  let path = $page.url.pathname;
  let lang = $page.url.hostname.split(".")[0] == "cy" ? "cy" : "en";
  let baseurl = lang == "cy" ? "//cy.ons.gov.uk" : "//www.ons.gov.uk";
  (0, import_index_f909a211.s)("theme", import_ONSFooter_222593b3.t[theme]);
  $$unsubscribe_page();
  return `${$$result.head += `<link rel="${"icon"}" href="${(0, import_index_f909a211.e)(import_paths_396f020f.a) + "/favicon.ico"}" data-svelte="svelte-1ttl8ld"><meta property="${"og:type"}" content="${"website"}" data-svelte="svelte-1ttl8ld"><meta property="${"og:url"}" content="${(0, import_index_f909a211.e)(import_paths_396f020f.a) + "/"}" data-svelte="svelte-1ttl8ld"><meta property="${"og:image"}" content="${(0, import_index_f909a211.e)(import_paths_396f020f.a) + "/img/og.png"}" data-svelte="svelte-1ttl8ld"><meta property="${"og:image:type"}" content="${"image/png"}" data-svelte="svelte-1ttl8ld">`, ""}

${(0, import_index_f909a211.v)(import_ONSFooter_222593b3.W, "Warning").$$render($$result, {}, {}, {
    default: () => {
      return `WARNING! This is a prototype. Data likely to contain inaccuracies.
`;
    }
  })}

${(0, import_index_f909a211.v)(import_ONSFooter_222593b3.O, "ONSHeader").$$render($$result, { baseurl, path, lang }, {}, {})}

<main id="${"main"}" tabindex="${"-1"}">${slots.default ? slots.default({}) : ``}</main>

${(0, import_index_f909a211.v)(import_ONSFooter_222593b3.a, "ONSFooter").$$render($$result, { baseurl, lang }, {}, {})}`;
});
