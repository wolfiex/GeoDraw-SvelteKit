import { c as create_ssr_component, o as spread, p as escape_attribute_value, q as escape_object, f as escape, l as compute_rest_props, t as compute_slots, d as getContext, h as createEventDispatcher, r as add_classes, i as add_attribute, v as validate_component, b as subscribe, k as null_to_empty, e as add_styles, j as each, w as is_promise, n as noop } from "../../../chunks/index-0029e4b6.js";
import LibLoader from "../LibLoader.svelte.js";
import { C as Cards } from "../../../chunks/Card.svelte_svelte_type_style_lang-c67763ba.js";
import BarChart from "./BarChart.svelte.js";
import MapAreas from "./MapAreas.svelte.js";
import "../../../chunks/HeaderSearch.svelte_svelte_type_style_lang-2747ef20.js";
import { B as Button } from "../../../chunks/Button-a63d0e2e.js";
import { B as ButtonSet } from "../../../chunks/ButtonSet-fcab3a17.js";
import "flatpickr";
/* empty css                              */import { encode } from "../../endpoints/binary.js";
import "../../../chunks/index-7e61ccad.js";
/* empty css                                                               *//* empty css                                                               */const WarningFilled16 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "WarningFilled16" },
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
  ], {})}><path d="${"M8,1C4.2,1,1,4.2,1,8s3.2,7,7,7s7-3.1,7-7S11.9,1,8,1z M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2	c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z"}"></path><path d="${"M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8	c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z"}" data-icon-path="${"inner-path"}" opacity="${"0"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
const WarningAltFilled16 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "WarningAltFilled16" },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 32 32" },
    { fill: "currentColor" },
    { width: "16" },
    { height: "16" },
    { class: escape_attribute_value(className) },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: escape_attribute_value(style) },
    { id: escape_attribute_value(id) },
    escape_object(attributes)
  ], {})}><path fill="${"none"}" d="${"M16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Zm-1.125-5h2.25V12h-2.25Z"}" data-icon-path="${"inner-path"}"></path><path d="${"M16.002,6.1714h-.004L4.6487,27.9966,4.6506,28H27.3494l.0019-.0034ZM14.875,12h2.25v9h-2.25ZM16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Z"}"></path><path d="${"M29,30H3a1,1,0,0,1-.8872-1.4614l13-25a1,1,0,0,1,1.7744,0l13,25A1,1,0,0,1,29,30ZM4.6507,28H27.3493l.002-.0033L16.002,6.1714h-.004L4.6487,27.9967Z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
const EditOff16 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "EditOff16" },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 32 32" },
    { fill: "currentColor" },
    { width: "16" },
    { height: "16" },
    { class: escape_attribute_value(className) },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: escape_attribute_value(style) },
    { id: escape_attribute_value(id) },
    escape_object(attributes)
  ], {})}><path d="${"M30 28.6L3.4 2 2 3.4l10.1 10.1L4 21.6V28h6.4l8.1-8.1L28.6 30 30 28.6zM9.6 26H6v-3.6l7.5-7.5 3.6 3.6L9.6 26zM29.4 6.2L29.4 6.2l-3.6-3.6c-.8-.8-2-.8-2.8 0l0 0 0 0-8 8 1.4 1.4L20 8.4l3.6 3.6L20 15.6l1.4 1.4 8-8C30.2 8.2 30.2 7 29.4 6.2L29.4 6.2zM25 10.6L21.4 7l3-3L28 7.6 25 10.6z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
const TextInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isFluid;
  let errorId;
  let warnId;
  let $$restProps = compute_rest_props($$props, [
    "size",
    "value",
    "placeholder",
    "light",
    "disabled",
    "helperText",
    "id",
    "name",
    "labelText",
    "hideLabel",
    "invalid",
    "invalidText",
    "warn",
    "warnText",
    "ref",
    "required",
    "inline",
    "readonly"
  ]);
  let $$slots = compute_slots(slots);
  let { size = void 0 } = $$props;
  let { value = "" } = $$props;
  let { placeholder = "" } = $$props;
  let { light = false } = $$props;
  let { disabled = false } = $$props;
  let { helperText = "" } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { name = void 0 } = $$props;
  let { labelText = "" } = $$props;
  let { hideLabel = false } = $$props;
  let { invalid = false } = $$props;
  let { invalidText = "" } = $$props;
  let { warn = false } = $$props;
  let { warnText = "" } = $$props;
  let { ref = null } = $$props;
  let { required = false } = $$props;
  let { inline = false } = $$props;
  let { readonly = false } = $$props;
  const ctx = getContext("Form");
  createEventDispatcher();
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.helperText === void 0 && $$bindings.helperText && helperText !== void 0)
    $$bindings.helperText(helperText);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.invalidText === void 0 && $$bindings.invalidText && invalidText !== void 0)
    $$bindings.invalidText(invalidText);
  if ($$props.warn === void 0 && $$bindings.warn && warn !== void 0)
    $$bindings.warn(warn);
  if ($$props.warnText === void 0 && $$bindings.warnText && warnText !== void 0)
    $$bindings.warnText(warnText);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0)
    $$bindings.inline(inline);
  if ($$props.readonly === void 0 && $$bindings.readonly && readonly !== void 0)
    $$bindings.readonly(readonly);
  isFluid = !!ctx && ctx.isFluid;
  errorId = `error-${id}`;
  warnId = `warn-${id}`;
  return `
<div${add_classes(("bx--form-item bx--text-input-wrapper " + (inline ? "bx--text-input-wrapper--inline" : "") + " " + (light ? "bx--text-input-wrapper--light" : "") + " " + (readonly ? "bx--text-input-wrapper--readonly" : "")).trim())}>${inline ? `<div${add_classes("bx--text-input__label-helper-wrapper".trim())}>${labelText ? `<label${add_attribute("for", id, 0)} class="${[
    escape(inline && !!size && `bx--label--inline--${size}`),
    "bx--label " + (hideLabel ? "bx--visually-hidden" : "") + " " + (disabled ? "bx--label--disabled" : "") + " " + (inline ? "bx--label--inline" : "")
  ].join(" ").trim()}">${slots.labelText ? slots.labelText({}) : `
            ${escape(labelText)}
          `}</label>` : ``}
      ${!isFluid && helperText ? `<div${add_classes(("bx--form__helper-text " + (disabled ? "bx--form__helper-text--disabled" : "") + " " + (inline ? "bx--form__helper-text--inline" : "")).trim())}>${escape(helperText)}</div>` : ``}</div>` : ``}
  ${!inline && (labelText || $$slots.labelText) ? `<label${add_attribute("for", id, 0)} class="${[
    escape(inline && !!size && `bx--label--inline--${size}`),
    "bx--label " + (hideLabel ? "bx--visually-hidden" : "") + " " + (disabled ? "bx--label--disabled" : "") + " " + (inline ? "bx--label--inline" : "")
  ].join(" ").trim()}">${slots.labelText ? slots.labelText({}) : `
        ${escape(labelText)}
      `}</label>` : ``}
  <div${add_classes(("bx--text-input__field-outer-wrapper " + (inline ? "bx--text-input__field-outer-wrapper--inline" : "")).trim())}><div${add_attribute("data-invalid", invalid || void 0, 0)}${add_attribute("data-warn", warn || void 0, 0)}${add_classes(("bx--text-input__field-wrapper " + (!invalid && warn ? "bx--text-input__field-wrapper--warning" : "")).trim())}>${invalid ? `${validate_component(WarningFilled16, "WarningFilled16").$$render($$result, { class: "bx--text-input__invalid-icon" }, {}, {})}` : ``}
      ${!invalid && warn ? `${validate_component(WarningAltFilled16, "WarningAltFilled16").$$render($$result, {
    class: "bx--text-input__invalid-icon\n            bx--text-input__invalid-icon--warning"
  }, {}, {})}` : ``}
      ${readonly ? `${validate_component(EditOff16, "EditOff16").$$render($$result, { class: "bx--text-input__readonly-icon" }, {}, {})}` : ``}
      <input${spread([
    {
      "data-invalid": escape_attribute_value(invalid || void 0)
    },
    {
      "aria-invalid": escape_attribute_value(invalid || void 0)
    },
    {
      "data-warn": escape_attribute_value(warn || void 0)
    },
    {
      "aria-describedby": escape_attribute_value(invalid ? errorId : warn ? warnId : void 0)
    },
    { disabled: disabled || null },
    { id: escape_attribute_value(id) },
    { name: escape_attribute_value(name) },
    {
      placeholder: escape_attribute_value(placeholder)
    },
    { required: required || null },
    { readonly: readonly || null },
    escape_object($$restProps),
    {
      class: escape_attribute_value(size && `bx--text-input--${size}`)
    }
  ], {
    classes: "bx--text-input " + (light ? "bx--text-input--light" : "") + " " + (invalid ? "bx--text-input--invalid" : "") + " " + (warn ? "bx--text-input--warn" : "")
  })}${add_attribute("this", ref, 0)}${add_attribute("value", value, 0)}>
      ${isFluid ? `<hr${add_classes("bx--text-input__divider".trim())}>` : ``}
      ${isFluid && !inline && invalid ? `<div${add_attribute("id", errorId, 0)}${add_classes("bx--form-requirement".trim())}>${escape(invalidText)}</div>` : ``}
      ${isFluid && !inline && warn ? `<div${add_attribute("id", warnId, 0)}${add_classes("bx--form-requirement".trim())}>${escape(warnText)}</div>` : ``}</div>
    ${!invalid && !warn && !isFluid && !inline && helperText ? `<div${add_classes(("bx--form__helper-text " + (disabled ? "bx--form__helper-text--disabled" : "") + " " + (inline ? "bx--form__helper-text--inline" : "")).trim())}>${escape(helperText)}</div>` : ``}
    ${!isFluid && invalid ? `<div${add_attribute("id", errorId, 0)}${add_classes("bx--form-requirement".trim())}>${escape(invalidText)}</div>` : ``}
    ${!isFluid && !invalid && warn ? `<div${add_attribute("id", warnId, 0)}${add_classes("bx--form-requirement".trim())}>${escape(warnText)}</div>` : ``}</div></div>`;
});
const Toggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "toggled", "disabled", "labelA", "labelB", "labelText", "id", "name"]);
  let { size = "default" } = $$props;
  let { toggled = false } = $$props;
  let { disabled = false } = $$props;
  let { labelA = "Off" } = $$props;
  let { labelB = "On" } = $$props;
  let { labelText = "" } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { name = void 0 } = $$props;
  const dispatch = createEventDispatcher();
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.toggled === void 0 && $$bindings.toggled && toggled !== void 0)
    $$bindings.toggled(toggled);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.labelA === void 0 && $$bindings.labelA && labelA !== void 0)
    $$bindings.labelA(labelA);
  if ($$props.labelB === void 0 && $$bindings.labelB && labelB !== void 0)
    $$bindings.labelB(labelB);
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  {
    dispatch("toggle", { toggled });
  }
  return `
<div${spread([escape_object($$restProps)], { classes: "bx--form-item" })}><input type="${"checkbox"}" ${toggled ? "checked" : ""} ${disabled ? "disabled" : ""}${add_attribute("id", id, 0)}${add_attribute("name", name, 0)}${add_classes(("bx--toggle-input " + (size === "sm" ? "bx--toggle-input--small" : "")).trim())}>
  <label${add_attribute("aria-label", labelText ? void 0 : $$props["aria-label"] || "Toggle", 0)}${add_attribute("for", id, 0)}${add_classes("bx--toggle-input__label".trim())}>${slots.labelText ? slots.labelText({}) : `
      ${escape(labelText)}
    `}
    <span${add_classes("bx--toggle__switch".trim())}><span aria-hidden="${"true"}"${add_classes("bx--toggle__text--off".trim())}>${slots.labelA ? slots.labelA({}) : `
          ${escape(labelA)}
        `}</span>
      <span aria-hidden="${"true"}"${add_classes("bx--toggle__text--on".trim())}>${slots.labelB ? slots.labelB({}) : `
          ${escape(labelB)}
        `}</span></span></label></div>`;
});
const css$1 = {
  code: "h3.svelte-1krn9ab{font-size:1.3rem;font-weight:bold}.blank.svelte-1krn9ab{padding:0;line-height:1}.tile.svelte-1krn9ab,.blank.svelte-1krn9ab{color:black;margin:4px 0 0 !important}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $cols, $$unsubscribe_cols;
  let { colspan = 1 } = $$props;
  let { rowspan = 1 } = $$props;
  let { title = null } = $$props;
  let { links = null } = $$props;
  let { blank = false } = $$props;
  const { cols } = getContext("tiles");
  $$unsubscribe_cols = subscribe(cols, (value) => $cols = value);
  if ($$props.colspan === void 0 && $$bindings.colspan && colspan !== void 0)
    $$bindings.colspan(colspan);
  if ($$props.rowspan === void 0 && $$bindings.rowspan && rowspan !== void 0)
    $$bindings.rowspan(rowspan);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.links === void 0 && $$bindings.links && links !== void 0)
    $$bindings.links(links);
  if ($$props.blank === void 0 && $$bindings.blank && blank !== void 0)
    $$bindings.blank(blank);
  $$result.css.add(css$1);
  $$unsubscribe_cols();
  return `<article class="${[
    escape(null_to_empty(!blank ? "tile tile__content" : "")) + " svelte-1krn9ab",
    blank ? "blank" : ""
  ].join(" ").trim()}"${add_styles({
    "grid-column": `span ${colspan == 1 ? 1 : colspan > $cols ? $cols : colspan}`,
    "grid-row": `span ${rowspan}`
  })}>${title ? `<header class="${"margin-top--1"}"><h3 class="${"margin-top--0 margin-right--0 margin-bottom--0 margin-left--0 svelte-1krn9ab"}">${escape(title)}</h3></header>` : ``}
  ${slots.default ? slots.default({}) : ``}
  ${links && links[0] ? `<div class="${"margin-top--2"}">${each(links, (link) => {
    return `<a${add_attribute("href", link.url, 0)} class="${"tile__link"}"${add_attribute("aria-label", link.label, 0)}${add_attribute("data-gtm-label", link.label, 0)}>${escape(link.label)}
    </a>`;
  })}</div>` : ``}
</article>`;
});
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\nh1.svelte-1tkm5o0{\n  font-size:1.8rem;\n  margin:0 0 -12px 0;\n  font-weight:bold\n}\n\ncodes.svelte-1tkm5o0{\n  inline-size:150px;\n  overflow-wrap:break-word\n}\n\nb.svelte-1tkm5o0{\n  font-weight:bold\n}\n\n#bset > *{\n  width:100%;\n  margin:4px;\n  padding:auto;\n  left:auto;\n  right:auto;\n  display:inline-flex;\n  position:flex\n}\n\nspan.bx--toggle__switch{\n  display:block;\n  margin:auto !important\n}\n\nspan.radio{\n  display:block;\n  vertical-align:middle;\n  top:-0;\n  float:end;\n  margin:0.05em;\n  padding:5px\n}\n\n/* purgecss end ignore */")();
const css = {
  code: "h1.svelte-1tkm5o0{font-size:1.8rem;margin:0 0 -12px 0;font-weight:bold}codes.svelte-1tkm5o0{inline-size:150px;overflow-wrap:break-word}b.svelte-1tkm5o0{font-weight:bold}#bset > *{width:100%;margin:4px;padding:auto;left:auto;right:auto;display:inline-flex;position:flex}span.bx--toggle__switch{display:block;margin:auto !important}span.radio{display:block;vertical-align:middle;top:-0;float:end;margin:0.05em;padding:5px}",
  map: null
};
const Tables = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let url = "";
  let areaname = "Custom Area Tables";
  let includecodes = false;
  let includemap = false;
  let embed_data = {};
  let cache = {};
  let areas = "";
  var newdata = { tables: [] };
  var coordinates = [];
  var compressed = [];
  const items = (object) => Object.keys(object).map((key) => [key, object[key]]);
  async function get_data(data) {
    var tbls = data.tables.map(async function(table) {
      if (table["Nomis table"] in cache) {
        return cache[table["Nomis table"]];
      } else {
        return await dfd.readCSV(`https://www.nomisweb.co.uk/api/v01/dataset/${table["Nomis table"].toLowerCase()}.bulk.csv?date=latest&geography=MAKE|MyCustomArea|${areas},K04000001&rural_urban=0&measures=20100&select=geography_name,cell_name,obs_value`).then((d) => d.setIndex({ column: "geography" })).then((de) => {
          var mappings = {};
          var cols = de.columns.filter((d) => d.includes(":"));
          cols.forEach((d, i) => {
            mappings[d] = d.replaceAll(/[\:\;]/g, " ");
          });
          return de.loc({
            rows: de.index.filter((d) => d),
            columns: cols
          }).rename(mappings, { inplace: false });
        }).then((df_old) => {
          var cols = df_old.$columns.filter((d) => !(d.includes("count") || d.includes("All") || (d.match(/\;/g) || []).length === 1 || d.includes("sum") || d.includes("Total")));
          df_old = df_old.loc({ columns: cols });
          const matches = table["Cell name"].map((d) => {
            var match = new Minhash();
            d.match(/\w+/g).forEach((e) => match.update(e));
            return [d, match];
          });
          let colmap = /* @__PURE__ */ new Map();
          df_old.$columns.forEach((m) => {
            const m0 = new Minhash();
            m.match(/\w+/g).forEach((e) => m0.update(e));
            var last = 0;
            var keep = m;
            for (const mx of matches) {
              var j = m0.jaccard(mx[1]);
              if (j > last) {
                last = j;
                keep = mx[0];
              }
            }
            colmap.set([keep, [m, ...colmap.get(keep) || []]]);
          });
          let df = {};
          colmap.forEach((_, item) => {
            var [key, value] = item;
            df[key] = df_old.loc({ columns: value }).sum({ axis: 1 }).$data;
          });
          df = new dfd.DataFrame(df);
          df.print();
          console.log(df, df_old);
          var pc = df.div(df.sum(), { axis: 0 });
          var lists = [];
          let keepcol = table["Cell name"].filter((d) => df.$columns.includes(d));
          dfd.toJSON(pc.loc({ columns: keepcol }), { format: "columns" }).forEach((dict, i) => {
            for (var key in dict) {
              lists.push({
                z: ["CustomArea", "England and Wales"][i],
                pc: dict[key],
                column: key
              });
            }
          });
          cache[table["Nomis table"]] = {
            name: table["Table name"],
            data: lists,
            embed: {
              nid: table["Nomis table"],
              did: keepcol.map((d) => table["Cell name"].indexOf(d)),
              data: [...new Uint16Array(lists.map((d) => d.pc * 1e4))]
            }
          };
          console.error("talbe"), cache[table["Nomis table"]];
          return cache[table["Nomis table"]];
        });
      }
    });
    return Promise.all(tbls).then(async (tables) => {
      embed_data = await tables.map((d) => d.embed);
      update_url();
      return tables;
    });
  }
  async function update_url() {
    if (!embed_data.length)
      return 0;
    let c = includemap ? newdata.polygon.geometry.coordinates : false;
    let s = includecodes ? newdata.compressed : false;
    let edata = {
      data: embed_data,
      coordinates: c,
      compressed: s,
      name: areaname
    };
    console.log("encoded", edata);
    let hashstr = encode(edata);
    console.log(hashstr);
    url = `${window.location.origin}/embed#${hashstr}`;
  }
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      update_url();
    }
    $$rendered = `${validate_component(LibLoader, "LibLoader").$$render($$result, {
      url: "https://cdn.jsdelivr.net/npm/danfojs@1.1.0/lib/bundle.min.js"
    }, {}, {})}
${validate_component(LibLoader, "LibLoader").$$render($$result, {
      url: "https://rawgit.com/duhaime/minhash/master/minhash.min.js"
    }, {}, {})}

${$$result.head += ``, ""}

<h1 class="${"svelte-1tkm5o0"}">${escape(areaname)}</h1>
${validate_component(Cards, "Cards").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Card, "Card").$$render($$result, { title: "Area map" }, {}, {
          default: () => {
            return `${validate_component(MapAreas, "MapAreas").$$render($$result, { minimap: coordinates }, {}, {})}`;
          }
        })}

  ${validate_component(Card, "Card").$$render($$result, { title: "Selected Areas" }, {}, {
          default: () => {
            return `This section outlines all the different areas codes which have been combined
    to produce the following report.
    <br><br>
    ${each(items(compressed), (item) => {
              return `<h4 style="${"display:inline"}"><b class="${"svelte-1tkm5o0"}">${escape(item[0].toUpperCase())}</b>:</h4>
      <codes class="${"svelte-1tkm5o0"}">${escape(item[1].join(", "))}</codes>
      <br><br>`;
            })}`;
          }
        })}

  ${function(__value) {
          if (is_promise(__value)) {
            __value.then(null, noop);
            return ``;
          }
          return function(tables) {
            return `

  ${validate_component(Card, "Card").$$render($$result, { title: "Embed Custom Profile" }, {}, {
              default: () => {
                return `<br>
    ${url ? `<code>Embedding URL length: <br>
        ${escape(url.length)}</code>
      <br><br>
      ${validate_component(TextInput, "TextInput").$$render($$result, {
                  labelText: "Area Name",
                  placeholder: "Loading ...",
                  value: areaname
                }, {
                  value: ($$value) => {
                    areaname = $$value;
                    $$settled = false;
                  }
                }, {})}
      <br>

      <span class="${"radio"}">${validate_component(Toggle, "Toggle").$$render($$result, { size: "sm", toggled: includecodes }, {
                  toggled: ($$value) => {
                    includecodes = $$value;
                    $$settled = false;
                  }
                }, {})}Include Codes</span>

      <span class="${"radio"}">${validate_component(Toggle, "Toggle").$$render($$result, { size: "sm", toggled: includemap }, {
                  toggled: ($$value) => {
                    includemap = $$value;
                    $$settled = false;
                  }
                }, {})} Include
        Map
      </span>

      <br>

      ${validate_component(ButtonSet, "ButtonSet").$$render($$result, { stacked: true, id: "bset" }, {}, {
                  default: () => {
                    return `${validate_component(Button, "Button").$$render($$result, { kind: "primary" }, {}, {
                      default: () => {
                        return `Open Embed Url`;
                      }
                    })}

        ${validate_component(Button, "Button").$$render($$result, { kind: "secondary" }, {}, {
                      default: () => {
                        return `Copyto Clipboard
        `;
                      }
                    })}

        ${validate_component(Button, "Button").$$render($$result, { kind: "sucess" }, {}, {
                      default: () => {
                        return `Download Data`;
                      }
                    })}`;
                  }
                })}` : ``}`;
              }
            })}


    ${each(tables, (tab) => {
              return `${validate_component(Card, "Card").$$render($$result, { title: tab.name }, {}, {
                default: () => {
                  return `
        

        ${validate_component(BarChart, "BarChart").$$render($$result, {
                    xKey: "pc",
                    yKey: "column",
                    zKey: "z",
                    data: tab.data
                  }, {}, {})}
      `;
                }
              })}`;
            })}
  `;
          }(__value);
        }(get_data(newdata))}
  <br>`;
      }
    })}



`;
  } while (!$$settled);
  return $$rendered;
});
export { Tables as default };
