import { c as create_ssr_component, v as validate_component, h as escape } from "../../../../chunks/index-092899d0.js";
import { A as AccordionItem } from "../../../../chunks/AccordionItem-7eda311d.js";
import "../../../../chunks/HeaderSearch.svelte_svelte_type_style_lang-1e6107db.js";
import "flatpickr";
import "../../../../chunks/index-cc46cb38.js";
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
