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
  default: () => ItemAccordion
});
module.exports = __toCommonJS(stdin_exports);
var import_index_092899d0 = require("../../../../chunks/index-092899d0.js");
var import_AccordionItem_7eda311d = require("../../../../chunks/AccordionItem-7eda311d.js");
var import_HeaderSearch_svelte_svelte_type_style_lang_1e6107db = require("../../../../chunks/HeaderSearch.svelte_svelte_type_style_lang-1e6107db.js");
var import_flatpickr = require("flatpickr");
var import_index_cc46cb38 = require("../../../../chunks/index-cc46cb38.js");
var ItemAccordion_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\n.bx--accordion__content p{\n  width:100%\n}\n\n/* purgecss end ignore */")();
const css = {
  code: ".bx--accordion__content p{width:100%\n  }",
  map: null
};
const ItemAccordion = (0, import_index_092899d0.c)(($$result, $$props, $$bindings, slots) => {
  let { title = "Custom Profile (Info)" } = $$props;
  let { subtitle = " " } = $$props;
  let { open = true } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  $$result.css.add(css);
  return `${(0, import_index_092899d0.v)(import_AccordionItem_7eda311d.A, "AccordionItem").$$render($$result, { open }, {}, {
    title: () => {
      return `<h4>${(0, import_index_092899d0.h)(title)}</h4>
      <h7><b>${(0, import_index_092899d0.h)(subtitle)}</b></h7>
      `;
    },
    default: () => {
      return `${slots.default ? slots.default({ style: "width:100%" }) : ``}`;
    }
  })}`;
});
