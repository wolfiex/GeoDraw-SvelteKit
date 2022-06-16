import { c as create_ssr_component, o as subscribe, q as onMount, v as validate_component } from "../../../../chunks/index-12fa369c.js";
import "../../../../chunks/HeaderSearch.svelte_svelte_type_style_lang-a240f088.js";
import { B as Button } from "../../../../chunks/Button-fdcb5c4f.js";
import "flatpickr";
import { R as Row, C as Column } from "../../../../chunks/Column-5653abb6.js";
import { add_mode, selected, draw_type } from "../../../endpoints/draw/mapstore.js";
import "../../../../chunks/index-34c40784.js";
const EditButtons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_add_mode;
  let $selected, $$unsubscribe_selected;
  $$unsubscribe_add_mode = subscribe(add_mode, (value) => value);
  $$unsubscribe_selected = subscribe(selected, (value) => $selected = value);
  let disabled = "false";
  function init() {
    draw_type.subscribe((e) => {
      disabled = e === "click";
    });
  }
  onMount(init);
  $$unsubscribe_add_mode();
  $$unsubscribe_selected();
  return `<main><div>${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Button, "Button").$$render($$result, {
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

        ${validate_component(Button, "Button").$$render($$result, {
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
    ${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
        default: () => {
          return `Edit Selection`;
        }
      })}`;
    }
  })}</div>
</main>`;
});
export { EditButtons as default };
