import { c as create_ssr_component, j as compute_rest_props, k as spread, o as escape_object, i as each, e as escape, p as add_classes, v as validate_component, s as setContext } from "../../../../chunks/index-f909a211.js";
import { w as writable } from "../../../../chunks/index-1ceaa7e2.js";
import { C as ChevronRight16, A as AccordionItem } from "../../../../chunks/AccordionItem-80204f4c.js";
import "../../../../chunks/HeaderSearch.svelte_svelte_type_style_lang-c0700dd8.js";
import "flatpickr";
const SkeletonText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let rows;
  let widthNum;
  let widthPx;
  let $$restProps = compute_rest_props($$props, ["lines", "heading", "paragraph", "width"]);
  let { lines = 3 } = $$props;
  let { heading = false } = $$props;
  let { paragraph = false } = $$props;
  let { width = "100%" } = $$props;
  const RANDOM = [0.973, 0.153, 0.567];
  if ($$props.lines === void 0 && $$bindings.lines && lines !== void 0)
    $$bindings.lines(lines);
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  if ($$props.paragraph === void 0 && $$bindings.paragraph && paragraph !== void 0)
    $$bindings.paragraph(paragraph);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  rows = [];
  widthNum = parseInt(width, 10);
  widthPx = width.includes("px");
  {
    if (paragraph) {
      for (let i = 0; i < lines; i++) {
        const min = widthPx ? widthNum - 75 : 0;
        const max = widthPx ? widthNum : 75;
        const rand = Math.floor(RANDOM[i % 3] * (max - min + 1)) + min + "px";
        rows = [
          ...rows,
          {
            width: widthPx ? rand : `calc(${width} - ${rand})`
          }
        ];
      }
    }
  }
  return `
${paragraph ? `<div${spread([escape_object($$restProps)], {})}>${each(rows, ({ width: width2 }) => {
    return `<p style="${"width: " + escape(width2)}"${add_classes(("bx--skeleton__text " + (heading ? "bx--skeleton__heading" : "")).trim())}></p>`;
  })}</div>` : `<p${spread([
    escape_object($$restProps),
    {
      style: "width: " + escape(width) + ";" + escape($$restProps.style)
    }
  ], {
    classes: "bx--skeleton__text " + (heading ? "bx--skeleton__heading" : "")
  })}></p>`}`;
});
const AccordionSkeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["count", "align", "size", "open"]);
  let { count = 4 } = $$props;
  let { align = "end" } = $$props;
  let { size = void 0 } = $$props;
  let { open = true } = $$props;
  if ($$props.count === void 0 && $$bindings.count && count !== void 0)
    $$bindings.count(count);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  return `
<ul${spread([escape_object($$restProps)], {
    classes: "bx--skeleton bx--accordion " + (align === "start" ? "bx--accordion--start" : "") + " " + (align === "end" ? "bx--accordion--end" : "") + " " + (size === "sm" ? "bx--accordion--sm" : "") + " " + (size === "xl" ? "bx--accordion--xl" : "")
  })}>${open ? `<li${add_classes("bx--accordion__item bx--accordion__item--active".trim())}><span${add_classes("bx--accordion__heading".trim())}>${validate_component(ChevronRight16, "ChevronRight16").$$render($$result, { class: "bx--accordion__arrow" }, {}, {})}
        ${validate_component(SkeletonText, "SkeletonText").$$render($$result, { class: "bx--accordion__title" }, {}, {})}</span>
      <div class="${"bx--accordion__content"}">${validate_component(SkeletonText, "SkeletonText").$$render($$result, { width: "90%" }, {}, {})}
        ${validate_component(SkeletonText, "SkeletonText").$$render($$result, { width: "80%" }, {}, {})}
        ${validate_component(SkeletonText, "SkeletonText").$$render($$result, { width: "95%" }, {}, {})}</div></li>` : ``}
  ${each(Array.from({ length: open ? count - 1 : count }, (_, i) => i), (item) => {
    return `<li class="${"bx--accordion__item"}"><span class="${"bx--accordion__heading"}">${validate_component(ChevronRight16, "ChevronRight16").$$render($$result, { class: "bx--accordion__arrow" }, {}, {})}
        ${validate_component(SkeletonText, "SkeletonText").$$render($$result, { class: "bx--accordion__title" }, {}, {})}</span>
    </li>`;
  })}</ul>`;
});
const Accordion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["align", "size", "disabled", "skeleton"]);
  let { align = "end" } = $$props;
  let { size = void 0 } = $$props;
  let { disabled = false } = $$props;
  let { skeleton = false } = $$props;
  const disableItems = writable(disabled);
  setContext("Accordion", { disableItems });
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.skeleton === void 0 && $$bindings.skeleton && skeleton !== void 0)
    $$bindings.skeleton(skeleton);
  {
    disableItems.set(disabled);
  }
  return `
${skeleton ? `${validate_component(AccordionSkeleton, "AccordionSkeleton").$$render($$result, Object.assign($$restProps, { align }, { size }), {}, {})}` : `<ul${spread([escape_object($$restProps)], {
    classes: "bx--accordion " + (align === "start" ? "bx--accordion--start" : "") + " " + (align === "end" ? "bx--accordion--end" : "") + " " + (size === "sm" ? "bx--accordion--sm" : "") + " " + (size === "xl" ? "bx--accordion--xl" : "")
  })}>${slots.default ? slots.default({}) : ``}</ul>`}`;
});
var InfoBox_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\n.bx--accordion__content p{\n  width:100%\n}\n\n.info{\n  width:30%;\n  max-width:600px;\n  min-width:400px;\n  background-color:#f5f5f5;\n  border-radius:0.25rem;\n  padding:.8rem;\n  margin:1rem;\n  border:1px solid rgba(60, 58, 58, 0.454)\n}\n\n/* purgecss end ignore */")();
const css = {
  code: ".bx--accordion__content p{width:100%\n  }.info{width:30%;max-width:600px;min-width:400px;background-color:#f5f5f5;border-radius:0.25rem;padding:.8rem;margin:1rem;border:1px solid rgba(60, 58, 58, 0.454)}",
  map: null
};
const InfoBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Custom Profile (Info)" } = $$props;
  let { text = "Welcome to the custom drawing tool. \n To begin drawing, click on the map and zoom in, or use the search bar below to locate area of interest. " } = $$props;
  let { subtitle = " " } = $$props;
  let { open = true } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  $$result.css.add(css);
  return `${validate_component(Accordion, "Accordion").$$render($$result, { class: "info" }, {}, {
    default: () => {
      return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { open }, {}, {
        title: () => {
          return `<h4>${escape(title)}</h4>
      <h6>${escape(subtitle)}</h6>
      `;
        },
        default: () => {
          return `<p>${escape(text)}</p>
    
`;
        }
      })}
    ${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
export { InfoBox as default };
