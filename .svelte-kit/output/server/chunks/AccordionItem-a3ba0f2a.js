import { c as create_ssr_component, o as spread, p as escape_attribute_value, q as escape_object, f as escape, l as compute_rest_props, d as getContext, i as add_attribute, r as add_classes, v as validate_component } from "./index-0029e4b6.js";
const ChevronRight16 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
<svg${spread([
    { "data-carbon-icon": "ChevronRight16" },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 16 16" },
    { fill: "currentColor" },
    { width: "16" },
    { height: "16" },
    { class: escape_attribute_value(className) },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: escape_attribute_value(style) },
    { id: escape_attribute_value(id) },
    escape_object(attributes)
  ], {})}><path d="${"M11 8L6 13 5.3 12.3 9.6 8 5.3 3.7 6 3z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
const AccordionItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["title", "open", "disabled", "iconDescription"]);
  let { title = "title" } = $$props;
  let { open = false } = $$props;
  let { disabled = false } = $$props;
  let { iconDescription = "Expand/Collapse" } = $$props;
  let initialDisabled = disabled;
  const ctx = getContext("Accordion");
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
<li${spread([escape_object($$restProps)], {
    classes: "bx--accordion__item " + (open ? "bx--accordion__item--active" : "") + " " + (disabled ? "bx--accordion__item--disabled" : "") + "  "
  })}><button type="${"button"}"${add_attribute("title", iconDescription, 0)}${add_attribute("aria-expanded", open, 0)} ${disabled ? "disabled" : ""}${add_classes("bx--accordion__heading".trim())}>${validate_component(ChevronRight16, "ChevronRight16").$$render($$result, {
    class: "bx--accordion__arrow",
    "aria-label": iconDescription
  }, {}, {})}
    <div${add_classes("bx--accordion__title".trim())}>${slots.title ? slots.title({}) : `${escape(title)}`}</div></button>
  <div${add_classes("bx--accordion__content".trim())}>${slots.default ? slots.default({}) : ``}</div></li>`;
});
export { AccordionItem as A, ChevronRight16 as C };
