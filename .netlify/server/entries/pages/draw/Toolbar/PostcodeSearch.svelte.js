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
  default: () => import_PostcodeSearch_af481403.P
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e390a0ae = require("../../../../chunks/index-e390a0ae.js");
var import_HeaderSearch_svelte_svelte_type_style_lang_4a3c8574 = require("../../../../chunks/HeaderSearch.svelte_svelte_type_style_lang-4a3c8574.js");
var import_PostcodeSearch_af481403 = require("../../../../chunks/PostcodeSearch-af481403.js");
var import_flatpickr = require("flatpickr");
var import_mapstore = require("../../../endpoints/draw/mapstore.js");
var import_index_a92659a3 = require("../../../../chunks/index-a92659a3.js");
