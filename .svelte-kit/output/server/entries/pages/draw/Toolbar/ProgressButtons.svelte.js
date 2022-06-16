import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-f909a211.js";
import "../../../../chunks/HeaderSearch.svelte_svelte_type_style_lang-c0700dd8.js";
import { B as Button } from "../../../../chunks/Button-28b43d3f.js";
import "flatpickr";
import { R as Row, C as Column } from "../../../../chunks/Column-c0d99b3f.js";
import { P as PostcodeSearch } from "../../../../chunks/PostcodeSearch-760d5c5a.js";
import "postcss";
import "../../../../chunks/index-1ceaa7e2.js";
import "../../../endpoints/draw/mapstore.js";
const ProgressButtons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { disabled = false } = $$props;
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  return `<main><div>${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Column, "Column").$$render($$result, { style: "" }, {}, {
        default: () => {
          return `${validate_component(PostcodeSearch, "PostcodeSearch").$$render($$result, {}, {}, {})}`;
        }
      })}${validate_component(Column, "Column").$$render($$result, {}, {}, {
        default: () => {
          return `

      
      
      
      

      ${validate_component(Button, "Button").$$render($$result, {
            style: "margin-left:0px",
            class: "bx--btn bx--btn--secondary bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--bottom bx--tooltip--align-center bx--btn--sm icon"
          }, {}, {
            default: () => {
              return `<span class="${"bx--assistive-text"}">Upload</span>
      <svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" version="${"1.1"}" id="${"mdi-upload"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z"}"></path></svg>`;
            }
          })}

    `;
        }
      })}`;
    }
  })}
         ${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
        default: () => {
          return `IO Tools`;
        }
      })}`;
    }
  })}</div>
        </main>`;
});
export { ProgressButtons as default };
