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
  A: () => AccordionItem,
  C: () => ChevronRight16
});
module.exports = __toCommonJS(stdin_exports);
var import_index_f909a211 = require("./index-f909a211.js");
const ChevronRight16 = (0, import_index_f909a211.c)(($$result, $$props, $$bindings, slots) => {
  let ariaLabel;
  let ariaLabelledBy;
  let labelled;
  let attributes;
  let { class: className = void 0 } = $$props;
  let { id = void 0 } = $$props;
  let { tabindex = void 0 } = $$props;
  let { focusable = false } = $$props;
  let { title = void 0 } = $$props;
  let { style = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0)
    $$bindings.tabindex(tabindex);
  if ($$props.focusable === void 0 && $$bindings.focusable && focusable !== void 0)
    $$bindings.focusable(focusable);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  ariaLabel = $$props["aria-label"];
  ariaLabelledBy = $$props["aria-labelledby"];
  labelled = ariaLabel || ariaLabelledBy || title;
  attributes = {
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: tabindex === "0" ? true : focusable,
    tabindex
  };
  return `
<svg${(0, import_index_f909a211.k)([
    { "data-carbon-icon": "ChevronRight16" },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 16 16" },
    { fill: "currentColor" },
    { width: "16" },
    { height: "16" },
    { class: (0, import_index_f909a211.l)(className) },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: (0, import_index_f909a211.l)(style) },
    { id: (0, import_index_f909a211.l)(id) },
    (0, import_index_f909a211.o)(attributes)
  ], {})}><path d="${"M11 8L6 13 5.3 12.3 9.6 8 5.3 3.7 6 3z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${(0, import_index_f909a211.e)(title)}</title>` : ``}
  `}</svg>`;
});
const AccordionItem = (0, import_index_f909a211.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_f909a211.j)($$props, ["title", "open", "disabled", "iconDescription"]);
  let { title = "title" } = $$props;
  let { open = false } = $$props;
  let { disabled = false } = $$props;
  let { iconDescription = "Expand/Collapse" } = $$props;
  let initialDisabled = disabled;
  const ctx = (0, import_index_f909a211.d)("Accordion");
  ctx.disableItems.subscribe((value) => {
    if (!value && initialDisabled)
      return;
    disabled = value;
  });
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.iconDescription === void 0 && $$bindings.iconDescription && iconDescription !== void 0)
    $$bindings.iconDescription(iconDescription);
  return `
<li${(0, import_index_f909a211.k)([(0, import_index_f909a211.o)($$restProps)], {
    classes: "bx--accordion__item " + (open ? "bx--accordion__item--active" : "") + " " + (disabled ? "bx--accordion__item--disabled" : "") + "  "
  })}><button type="${"button"}"${(0, import_index_f909a211.h)("title", iconDescription, 0)}${(0, import_index_f909a211.h)("aria-expanded", open, 0)} ${disabled ? "disabled" : ""}${(0, import_index_f909a211.p)("bx--accordion__heading".trim())}>${(0, import_index_f909a211.v)(ChevronRight16, "ChevronRight16").$$render($$result, {
    class: "bx--accordion__arrow",
    "aria-label": iconDescription
  }, {}, {})}
    <div${(0, import_index_f909a211.p)("bx--accordion__title".trim())}>${slots.title ? slots.title({}) : `${(0, import_index_f909a211.e)(title)}`}</div></button>
  <div${(0, import_index_f909a211.p)("bx--accordion__content".trim())}>${slots.default ? slots.default({}) : ``}</div></li>`;
});
