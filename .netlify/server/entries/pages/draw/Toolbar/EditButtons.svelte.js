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
  default: () => EditButtons
});
module.exports = __toCommonJS(stdin_exports);
var import_index_092899d0 = require("../../../../chunks/index-092899d0.js");
var import_HeaderSearch_svelte_svelte_type_style_lang_01832d64 = require("../../../../chunks/HeaderSearch.svelte_svelte_type_style_lang-01832d64.js");
var import_Button_1959039d = require("../../../../chunks/Button-1959039d.js");
var import_Column_3c16437e = require("../../../../chunks/Column-3c16437e.js");
var import_mapstore = require("../../../endpoints/draw/mapstore.js");
var import_index_cc46cb38 = require("../../../../chunks/index-cc46cb38.js");
const EditButtons = (0, import_index_092899d0.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_add_mode;
  let $selected, $$unsubscribe_selected;
  $$unsubscribe_add_mode = (0, import_index_092899d0.o)(import_mapstore.add_mode, (value) => value);
  $$unsubscribe_selected = (0, import_index_092899d0.o)(import_mapstore.selected, (value) => $selected = value);
  let disabled = "false";
  function init() {
    import_mapstore.draw_type.subscribe((e) => {
      disabled = e === "click";
    });
  }
  (0, import_index_092899d0.q)(init);
  $$unsubscribe_add_mode();
  $$unsubscribe_selected();
  return `<main><div>${(0, import_index_092899d0.v)(import_Column_3c16437e.R, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${(0, import_index_092899d0.v)(import_Column_3c16437e.C, "Column").$$render($$result, {}, {}, {
        default: () => {
          return `${(0, import_index_092899d0.v)(import_Button_1959039d.B, "Button").$$render($$result, {
            style: "margin-left:0px",
            disabled,
            class: "bx--btn bx--btn--secondary bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--bottom bx--tooltip--align-center bx--btn--sm icon"
          }, {}, {
            default: () => {
              return `${`<span class="${"bx--assistive-text"}">Additive Selection</span>
            <svg xmlns="${"http://www.w3.org/2000/svg"}" id="${"icon"}" width="${"32"}" height="${"32"}" viewBox="${"0 0 32 32"}"><defs><style>.cls-1 {
                    fill: none;
                  }
                </style></defs><path d="${"M28,10H22V4a2.0025,2.0025,0,0,0-2-2H4A2.0025,2.0025,0,0,0,2,4V20a2.0025,2.0025,0,0,0,2,2h6v6a2.0025,2.0025,0,0,0,2,2H28a2.0025,2.0025,0,0,0,2-2V12A2.0025,2.0025,0,0,0,28,10ZM4,20V4H20v6H12a2.0025,2.0025,0,0,0-2,2v8Zm8,8V22h8a2.0025,2.0025,0,0,0,2-2V12h6V28Z"}"></path><rect id="${"_Transparent_Rectangle_"}" data-name="${"<Transparent Rectangle>"}" class="${"cls-1"}" width="${"32"}" height="${"32"}"></rect></svg>`}`;
            }
          })}

        ${(0, import_index_092899d0.v)(import_Button_1959039d.B, "Button").$$render($$result, {
            disabled: $selected.length < 2,
            style: "margin-left:0px",
            class: "bx--btn bx--btn--secondary bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--bottom bx--tooltip--align-center bx--btn--sm icon"
          }, {}, {
            default: () => {
              return `<span class="${"bx--assistive-text"}">Undo</span>
          <svg xmlns="${"http://www.w3.org/2000/svg"}" id="${"icon"}" viewBox="${"0 0 32 32"}"><defs><style>.cls-1 {
                  fill: none;
                }
              </style></defs><title>reset</title><path d="${"M18,28A12,12,0,1,0,6,16v6.2L2.4,18.6,1,20l6,6,6-6-1.4-1.4L8,22.2V16H8A10,10,0,1,1,18,26Z"}"></path><rect id="${"_Transparent_Rectangle_"}" data-name="${"<Transparent Rectangle>"}" class="${"cls-1"}" width="${"32"}" height="${"32"}"></rect></svg>`;
            }
          })}`;
        }
      })}`;
    }
  })}
    ${(0, import_index_092899d0.v)(import_Column_3c16437e.R, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${(0, import_index_092899d0.v)(import_Column_3c16437e.C, "Column").$$render($$result, {}, {}, {
        default: () => {
          return `Edit Selection`;
        }
      })}`;
    }
  })}</div>
</main>`;
});
