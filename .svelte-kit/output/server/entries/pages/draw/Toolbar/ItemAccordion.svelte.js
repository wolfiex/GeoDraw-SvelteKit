import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../chunks/index-f909a211.js";
import { A as AccordionItem } from "../../../../chunks/AccordionItem-80204f4c.js";
import "../../../../chunks/HeaderSearch.svelte_svelte_type_style_lang-c0700dd8.js";
import "flatpickr";
import "../../../../chunks/index-1ceaa7e2.js";
var ItemAccordion_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\n.bx--accordion__content p{\n  width:100%\n}\n\n/* purgecss end ignore */")();
const css = {
  code: ".bx--accordion__content p{width:100%\n  }",
  map: null
};
const ItemAccordion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { open }, {}, {
    title: () => {
      return `<h4>${escape(title)}</h4>
      <h7><b>${escape(subtitle)}</b></h7>
      `;
    },
    default: () => {
      return `${slots.default ? slots.default({ style: "width:100%" }) : ``}`;
    }
  })}`;
});
export { ItemAccordion as default };
