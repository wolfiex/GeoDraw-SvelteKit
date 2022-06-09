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
  default: () => InfoBox
});
module.exports = __toCommonJS(stdin_exports);
var import_index_092899d0 = require("../../../../chunks/index-092899d0.js");
var import_index_cc46cb38 = require("../../../../chunks/index-cc46cb38.js");
var import_AccordionItem_7eda311d = require("../../../../chunks/AccordionItem-7eda311d.js");
var import_HeaderSearch_svelte_svelte_type_style_lang_01832d64 = require("../../../../chunks/HeaderSearch.svelte_svelte_type_style_lang-01832d64.js");
const SkeletonText = (0, import_index_092899d0.c)(($$result, $$props, $$bindings, slots) => {
  let rows;
  let widthNum;
  let widthPx;
  let $$restProps = (0, import_index_092899d0.b)($$props, ["lines", "heading", "paragraph", "width"]);
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
${paragraph ? `<div${(0, import_index_092899d0.d)([(0, import_index_092899d0.e)($$restProps)], {})}>${(0, import_index_092899d0.r)(rows, ({ width: width2 }) => {
    return `<p style="${"width: " + (0, import_index_092899d0.h)(width2)}"${(0, import_index_092899d0.k)(("bx--skeleton__text " + (heading ? "bx--skeleton__heading" : "")).trim())}></p>`;
  })}</div>` : `<p${(0, import_index_092899d0.d)([
    (0, import_index_092899d0.e)($$restProps),
    {
      style: "width: " + (0, import_index_092899d0.h)(width) + ";" + (0, import_index_092899d0.h)($$restProps.style)
    }
  ], {
    classes: "bx--skeleton__text " + (heading ? "bx--skeleton__heading" : "")
  })}></p>`}`;
});
const AccordionSkeleton = (0, import_index_092899d0.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_092899d0.b)($$props, ["count", "align", "size", "open"]);
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
<ul${(0, import_index_092899d0.d)([(0, import_index_092899d0.e)($$restProps)], {
    classes: "bx--skeleton bx--accordion " + (align === "start" ? "bx--accordion--start" : "") + " " + (align === "end" ? "bx--accordion--end" : "") + " " + (size === "sm" ? "bx--accordion--sm" : "") + " " + (size === "xl" ? "bx--accordion--xl" : "")
  })}>${open ? `<li${(0, import_index_092899d0.k)("bx--accordion__item bx--accordion__item--active".trim())}><span${(0, import_index_092899d0.k)("bx--accordion__heading".trim())}>${(0, import_index_092899d0.v)(import_AccordionItem_7eda311d.C, "ChevronRight16").$$render($$result, { class: "bx--accordion__arrow" }, {}, {})}
        ${(0, import_index_092899d0.v)(SkeletonText, "SkeletonText").$$render($$result, { class: "bx--accordion__title" }, {}, {})}</span>
      <div class="${"bx--accordion__content"}">${(0, import_index_092899d0.v)(SkeletonText, "SkeletonText").$$render($$result, { width: "90%" }, {}, {})}
        ${(0, import_index_092899d0.v)(SkeletonText, "SkeletonText").$$render($$result, { width: "80%" }, {}, {})}
        ${(0, import_index_092899d0.v)(SkeletonText, "SkeletonText").$$render($$result, { width: "95%" }, {}, {})}</div></li>` : ``}
  ${(0, import_index_092899d0.r)(Array.from({ length: open ? count - 1 : count }, (_, i) => i), (item) => {
    return `<li class="${"bx--accordion__item"}"><span class="${"bx--accordion__heading"}">${(0, import_index_092899d0.v)(import_AccordionItem_7eda311d.C, "ChevronRight16").$$render($$result, { class: "bx--accordion__arrow" }, {}, {})}
        ${(0, import_index_092899d0.v)(SkeletonText, "SkeletonText").$$render($$result, { class: "bx--accordion__title" }, {}, {})}</span>
    </li>`;
  })}</ul>`;
});
const Accordion = (0, import_index_092899d0.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_092899d0.b)($$props, ["align", "size", "disabled", "skeleton"]);
  let { align = "end" } = $$props;
  let { size = void 0 } = $$props;
  let { disabled = false } = $$props;
  let { skeleton = false } = $$props;
  const disableItems = (0, import_index_cc46cb38.w)(disabled);
  (0, import_index_092899d0.s)("Accordion", { disableItems });
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
${skeleton ? `${(0, import_index_092899d0.v)(AccordionSkeleton, "AccordionSkeleton").$$render($$result, Object.assign($$restProps, { align }, { size }), {}, {})}` : `<ul${(0, import_index_092899d0.d)([(0, import_index_092899d0.e)($$restProps)], {
    classes: "bx--accordion " + (align === "start" ? "bx--accordion--start" : "") + " " + (align === "end" ? "bx--accordion--end" : "") + " " + (size === "sm" ? "bx--accordion--sm" : "") + " " + (size === "xl" ? "bx--accordion--xl" : "")
  })}>${slots.default ? slots.default({}) : ``}</ul>`}`;
});
var InfoBox_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\n.bx--accordion__content p{\n  width:100%\n}\n\n.info{\n  width:30%;\n  max-width:600px;\n  min-width:400px;\n  background-color:#f5f5f5;\n  border-radius:0.25rem;\n  padding:.8rem;\n  margin:1rem;\n  border:1px solid rgba(60, 58, 58, 0.454)\n}\n\n/* purgecss end ignore */")();
const css = {
  code: ".bx--accordion__content p{width:100%\n  }.info{width:30%;max-width:600px;min-width:400px;background-color:#f5f5f5;border-radius:0.25rem;padding:.8rem;margin:1rem;border:1px solid rgba(60, 58, 58, 0.454)}",
  map: null
};
const InfoBox = (0, import_index_092899d0.c)(($$result, $$props, $$bindings, slots) => {
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
  return `${(0, import_index_092899d0.v)(Accordion, "Accordion").$$render($$result, { class: "info" }, {}, {
    default: () => {
      return `${(0, import_index_092899d0.v)(import_AccordionItem_7eda311d.A, "AccordionItem").$$render($$result, { open }, {}, {
        title: () => {
          return `<h4>${(0, import_index_092899d0.h)(title)}</h4>
      <h6>${(0, import_index_092899d0.h)(subtitle)}</h6>
      `;
        },
        default: () => {
          return `<p>${(0, import_index_092899d0.h)(text)}</p>
    
`;
        }
      })}
    ${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
