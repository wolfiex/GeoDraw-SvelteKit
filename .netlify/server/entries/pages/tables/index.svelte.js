var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Tables
});
module.exports = __toCommonJS(stdin_exports);
var import_index_0029e4b6 = require("../../../chunks/index-0029e4b6.js");
var import_LibLoader_svelte = __toESM(require("../LibLoader.svelte.js"));
var import_Card_svelte_svelte_type_style_lang_c67763ba = require("../../../chunks/Card.svelte_svelte_type_style_lang-c67763ba.js");
var import_BarChart_svelte = __toESM(require("./BarChart.svelte.js"));
var import_MapAreas_svelte = __toESM(require("./MapAreas.svelte.js"));
var import_HeaderSearch_svelte_svelte_type_style_lang_2747ef20 = require("../../../chunks/HeaderSearch.svelte_svelte_type_style_lang-2747ef20.js");
var import_Button_a63d0e2e = require("../../../chunks/Button-a63d0e2e.js");
var import_ButtonSet_fcab3a17 = require("../../../chunks/ButtonSet-fcab3a17.js");
var import_flatpickr = require("flatpickr");
var import_binary = require("../../endpoints/binary.js");
var import_index_7e61ccad = require("../../../chunks/index-7e61ccad.js");
const WarningFilled16 = (0, import_index_0029e4b6.c)(($$result, $$props, $$bindings, slots) => {
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
<svg${(0, import_index_0029e4b6.o)([
    { "data-carbon-icon": "WarningFilled16" },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 16 16" },
    { fill: "currentColor" },
    { width: "16" },
    { height: "16" },
    { class: (0, import_index_0029e4b6.p)(className) },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: (0, import_index_0029e4b6.p)(style) },
    { id: (0, import_index_0029e4b6.p)(id) },
    (0, import_index_0029e4b6.q)(attributes)
  ], {})}><path d="${"M8,1C4.2,1,1,4.2,1,8s3.2,7,7,7s7-3.1,7-7S11.9,1,8,1z M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2	c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z"}"></path><path d="${"M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8	c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z"}" data-icon-path="${"inner-path"}" opacity="${"0"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${(0, import_index_0029e4b6.f)(title)}</title>` : ``}
  `}</svg>`;
});
const WarningAltFilled16 = (0, import_index_0029e4b6.c)(($$result, $$props, $$bindings, slots) => {
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
<svg${(0, import_index_0029e4b6.o)([
    { "data-carbon-icon": "WarningAltFilled16" },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 32 32" },
    { fill: "currentColor" },
    { width: "16" },
    { height: "16" },
    { class: (0, import_index_0029e4b6.p)(className) },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: (0, import_index_0029e4b6.p)(style) },
    { id: (0, import_index_0029e4b6.p)(id) },
    (0, import_index_0029e4b6.q)(attributes)
  ], {})}><path fill="${"none"}" d="${"M16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Zm-1.125-5h2.25V12h-2.25Z"}" data-icon-path="${"inner-path"}"></path><path d="${"M16.002,6.1714h-.004L4.6487,27.9966,4.6506,28H27.3494l.0019-.0034ZM14.875,12h2.25v9h-2.25ZM16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Z"}"></path><path d="${"M29,30H3a1,1,0,0,1-.8872-1.4614l13-25a1,1,0,0,1,1.7744,0l13,25A1,1,0,0,1,29,30ZM4.6507,28H27.3493l.002-.0033L16.002,6.1714h-.004L4.6487,27.9967Z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${(0, import_index_0029e4b6.f)(title)}</title>` : ``}
  `}</svg>`;
});
const EditOff16 = (0, import_index_0029e4b6.c)(($$result, $$props, $$bindings, slots) => {
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
<svg${(0, import_index_0029e4b6.o)([
    { "data-carbon-icon": "EditOff16" },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 32 32" },
    { fill: "currentColor" },
    { width: "16" },
    { height: "16" },
    { class: (0, import_index_0029e4b6.p)(className) },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: (0, import_index_0029e4b6.p)(style) },
    { id: (0, import_index_0029e4b6.p)(id) },
    (0, import_index_0029e4b6.q)(attributes)
  ], {})}><path d="${"M30 28.6L3.4 2 2 3.4l10.1 10.1L4 21.6V28h6.4l8.1-8.1L28.6 30 30 28.6zM9.6 26H6v-3.6l7.5-7.5 3.6 3.6L9.6 26zM29.4 6.2L29.4 6.2l-3.6-3.6c-.8-.8-2-.8-2.8 0l0 0 0 0-8 8 1.4 1.4L20 8.4l3.6 3.6L20 15.6l1.4 1.4 8-8C30.2 8.2 30.2 7 29.4 6.2L29.4 6.2zM25 10.6L21.4 7l3-3L28 7.6 25 10.6z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${(0, import_index_0029e4b6.f)(title)}</title>` : ``}
  `}</svg>`;
});
const TextInput = (0, import_index_0029e4b6.c)(($$result, $$props, $$bindings, slots) => {
  let isFluid;
  let errorId;
  let warnId;
  let $$restProps = (0, import_index_0029e4b6.l)($$props, [
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
  let $$slots = (0, import_index_0029e4b6.t)(slots);
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
  const ctx = (0, import_index_0029e4b6.d)("Form");
  (0, import_index_0029e4b6.h)();
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
<div${(0, import_index_0029e4b6.r)(("bx--form-item bx--text-input-wrapper " + (inline ? "bx--text-input-wrapper--inline" : "") + " " + (light ? "bx--text-input-wrapper--light" : "") + " " + (readonly ? "bx--text-input-wrapper--readonly" : "")).trim())}>${inline ? `<div${(0, import_index_0029e4b6.r)("bx--text-input__label-helper-wrapper".trim())}>${labelText ? `<label${(0, import_index_0029e4b6.i)("for", id, 0)} class="${[
    (0, import_index_0029e4b6.f)(inline && !!size && `bx--label--inline--${size}`),
    "bx--label " + (hideLabel ? "bx--visually-hidden" : "") + " " + (disabled ? "bx--label--disabled" : "") + " " + (inline ? "bx--label--inline" : "")
  ].join(" ").trim()}">${slots.labelText ? slots.labelText({}) : `
            ${(0, import_index_0029e4b6.f)(labelText)}
          `}</label>` : ``}
      ${!isFluid && helperText ? `<div${(0, import_index_0029e4b6.r)(("bx--form__helper-text " + (disabled ? "bx--form__helper-text--disabled" : "") + " " + (inline ? "bx--form__helper-text--inline" : "")).trim())}>${(0, import_index_0029e4b6.f)(helperText)}</div>` : ``}</div>` : ``}
  ${!inline && (labelText || $$slots.labelText) ? `<label${(0, import_index_0029e4b6.i)("for", id, 0)} class="${[
    (0, import_index_0029e4b6.f)(inline && !!size && `bx--label--inline--${size}`),
    "bx--label " + (hideLabel ? "bx--visually-hidden" : "") + " " + (disabled ? "bx--label--disabled" : "") + " " + (inline ? "bx--label--inline" : "")
  ].join(" ").trim()}">${slots.labelText ? slots.labelText({}) : `
        ${(0, import_index_0029e4b6.f)(labelText)}
      `}</label>` : ``}
  <div${(0, import_index_0029e4b6.r)(("bx--text-input__field-outer-wrapper " + (inline ? "bx--text-input__field-outer-wrapper--inline" : "")).trim())}><div${(0, import_index_0029e4b6.i)("data-invalid", invalid || void 0, 0)}${(0, import_index_0029e4b6.i)("data-warn", warn || void 0, 0)}${(0, import_index_0029e4b6.r)(("bx--text-input__field-wrapper " + (!invalid && warn ? "bx--text-input__field-wrapper--warning" : "")).trim())}>${invalid ? `${(0, import_index_0029e4b6.v)(WarningFilled16, "WarningFilled16").$$render($$result, { class: "bx--text-input__invalid-icon" }, {}, {})}` : ``}
      ${!invalid && warn ? `${(0, import_index_0029e4b6.v)(WarningAltFilled16, "WarningAltFilled16").$$render($$result, {
    class: "bx--text-input__invalid-icon\n            bx--text-input__invalid-icon--warning"
  }, {}, {})}` : ``}
      ${readonly ? `${(0, import_index_0029e4b6.v)(EditOff16, "EditOff16").$$render($$result, { class: "bx--text-input__readonly-icon" }, {}, {})}` : ``}
      <input${(0, import_index_0029e4b6.o)([
    {
      "data-invalid": (0, import_index_0029e4b6.p)(invalid || void 0)
    },
    {
      "aria-invalid": (0, import_index_0029e4b6.p)(invalid || void 0)
    },
    {
      "data-warn": (0, import_index_0029e4b6.p)(warn || void 0)
    },
    {
      "aria-describedby": (0, import_index_0029e4b6.p)(invalid ? errorId : warn ? warnId : void 0)
    },
    { disabled: disabled || null },
    { id: (0, import_index_0029e4b6.p)(id) },
    { name: (0, import_index_0029e4b6.p)(name) },
    {
      placeholder: (0, import_index_0029e4b6.p)(placeholder)
    },
    { required: required || null },
    { readonly: readonly || null },
    (0, import_index_0029e4b6.q)($$restProps),
    {
      class: (0, import_index_0029e4b6.p)(size && `bx--text-input--${size}`)
    }
  ], {
    classes: "bx--text-input " + (light ? "bx--text-input--light" : "") + " " + (invalid ? "bx--text-input--invalid" : "") + " " + (warn ? "bx--text-input--warn" : "")
  })}${(0, import_index_0029e4b6.i)("this", ref, 0)}${(0, import_index_0029e4b6.i)("value", value, 0)}>
      ${isFluid ? `<hr${(0, import_index_0029e4b6.r)("bx--text-input__divider".trim())}>` : ``}
      ${isFluid && !inline && invalid ? `<div${(0, import_index_0029e4b6.i)("id", errorId, 0)}${(0, import_index_0029e4b6.r)("bx--form-requirement".trim())}>${(0, import_index_0029e4b6.f)(invalidText)}</div>` : ``}
      ${isFluid && !inline && warn ? `<div${(0, import_index_0029e4b6.i)("id", warnId, 0)}${(0, import_index_0029e4b6.r)("bx--form-requirement".trim())}>${(0, import_index_0029e4b6.f)(warnText)}</div>` : ``}</div>
    ${!invalid && !warn && !isFluid && !inline && helperText ? `<div${(0, import_index_0029e4b6.r)(("bx--form__helper-text " + (disabled ? "bx--form__helper-text--disabled" : "") + " " + (inline ? "bx--form__helper-text--inline" : "")).trim())}>${(0, import_index_0029e4b6.f)(helperText)}</div>` : ``}
    ${!isFluid && invalid ? `<div${(0, import_index_0029e4b6.i)("id", errorId, 0)}${(0, import_index_0029e4b6.r)("bx--form-requirement".trim())}>${(0, import_index_0029e4b6.f)(invalidText)}</div>` : ``}
    ${!isFluid && !invalid && warn ? `<div${(0, import_index_0029e4b6.i)("id", warnId, 0)}${(0, import_index_0029e4b6.r)("bx--form-requirement".trim())}>${(0, import_index_0029e4b6.f)(warnText)}</div>` : ``}</div></div>`;
});
const Toggle = (0, import_index_0029e4b6.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_0029e4b6.l)($$props, ["size", "toggled", "disabled", "labelA", "labelB", "labelText", "id", "name"]);
  let { size = "default" } = $$props;
  let { toggled = false } = $$props;
  let { disabled = false } = $$props;
  let { labelA = "Off" } = $$props;
  let { labelB = "On" } = $$props;
  let { labelText = "" } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { name = void 0 } = $$props;
  const dispatch = (0, import_index_0029e4b6.h)();
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
<div${(0, import_index_0029e4b6.o)([(0, import_index_0029e4b6.q)($$restProps)], { classes: "bx--form-item" })}><input type="${"checkbox"}" ${toggled ? "checked" : ""} ${disabled ? "disabled" : ""}${(0, import_index_0029e4b6.i)("id", id, 0)}${(0, import_index_0029e4b6.i)("name", name, 0)}${(0, import_index_0029e4b6.r)(("bx--toggle-input " + (size === "sm" ? "bx--toggle-input--small" : "")).trim())}>
  <label${(0, import_index_0029e4b6.i)("aria-label", labelText ? void 0 : $$props["aria-label"] || "Toggle", 0)}${(0, import_index_0029e4b6.i)("for", id, 0)}${(0, import_index_0029e4b6.r)("bx--toggle-input__label".trim())}>${slots.labelText ? slots.labelText({}) : `
      ${(0, import_index_0029e4b6.f)(labelText)}
    `}
    <span${(0, import_index_0029e4b6.r)("bx--toggle__switch".trim())}><span aria-hidden="${"true"}"${(0, import_index_0029e4b6.r)("bx--toggle__text--off".trim())}>${slots.labelA ? slots.labelA({}) : `
          ${(0, import_index_0029e4b6.f)(labelA)}
        `}</span>
      <span aria-hidden="${"true"}"${(0, import_index_0029e4b6.r)("bx--toggle__text--on".trim())}>${slots.labelB ? slots.labelB({}) : `
          ${(0, import_index_0029e4b6.f)(labelB)}
        `}</span></span></label></div>`;
});
const css$1 = {
  code: "h3.svelte-1krn9ab{font-size:1.3rem;font-weight:bold}.blank.svelte-1krn9ab{padding:0;line-height:1}.tile.svelte-1krn9ab,.blank.svelte-1krn9ab{color:black;margin:4px 0 0 !important}",
  map: null
};
const Card = (0, import_index_0029e4b6.c)(($$result, $$props, $$bindings, slots) => {
  let $cols, $$unsubscribe_cols;
  let { colspan = 1 } = $$props;
  let { rowspan = 1 } = $$props;
  let { title = null } = $$props;
  let { links = null } = $$props;
  let { blank = false } = $$props;
  const { cols } = (0, import_index_0029e4b6.d)("tiles");
  $$unsubscribe_cols = (0, import_index_0029e4b6.b)(cols, (value) => $cols = value);
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
    (0, import_index_0029e4b6.f)((0, import_index_0029e4b6.k)(!blank ? "tile tile__content" : "")) + " svelte-1krn9ab",
    blank ? "blank" : ""
  ].join(" ").trim()}"${(0, import_index_0029e4b6.e)({
    "grid-column": `span ${colspan == 1 ? 1 : colspan > $cols ? $cols : colspan}`,
    "grid-row": `span ${rowspan}`
  })}>${title ? `<header class="${"margin-top--1"}"><h3 class="${"margin-top--0 margin-right--0 margin-bottom--0 margin-left--0 svelte-1krn9ab"}">${(0, import_index_0029e4b6.f)(title)}</h3></header>` : ``}
  ${slots.default ? slots.default({}) : ``}
  ${links && links[0] ? `<div class="${"margin-top--2"}">${(0, import_index_0029e4b6.j)(links, (link) => {
    return `<a${(0, import_index_0029e4b6.i)("href", link.url, 0)} class="${"tile__link"}"${(0, import_index_0029e4b6.i)("aria-label", link.label, 0)}${(0, import_index_0029e4b6.i)("data-gtm-label", link.label, 0)}>${(0, import_index_0029e4b6.f)(link.label)}
    </a>`;
  })}</div>` : ``}
</article>`;
});
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\nh1.svelte-1tkm5o0{\n  font-size:1.8rem;\n  margin:0 0 -12px 0;\n  font-weight:bold\n}\n\ncodes.svelte-1tkm5o0{\n  inline-size:150px;\n  overflow-wrap:break-word\n}\n\nb.svelte-1tkm5o0{\n  font-weight:bold\n}\n\n#bset > *{\n  width:100%;\n  margin:4px;\n  padding:auto;\n  left:auto;\n  right:auto;\n  display:inline-flex;\n  position:flex\n}\n\nspan.bx--toggle__switch{\n  display:block;\n  margin:auto !important\n}\n\nspan.radio{\n  display:block;\n  vertical-align:middle;\n  top:-0;\n  float:end;\n  margin:0.05em;\n  padding:5px\n}\n\n/* purgecss end ignore */")();
const css = {
  code: "h1.svelte-1tkm5o0{font-size:1.8rem;margin:0 0 -12px 0;font-weight:bold}codes.svelte-1tkm5o0{inline-size:150px;overflow-wrap:break-word}b.svelte-1tkm5o0{font-weight:bold}#bset > *{width:100%;margin:4px;padding:auto;left:auto;right:auto;display:inline-flex;position:flex}span.bx--toggle__switch{display:block;margin:auto !important}span.radio{display:block;vertical-align:middle;top:-0;float:end;margin:0.05em;padding:5px}",
  map: null
};
const Tables = (0, import_index_0029e4b6.c)(($$result, $$props, $$bindings, slots) => {
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
    let hashstr = (0, import_binary.encode)(edata);
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
    $$rendered = `${(0, import_index_0029e4b6.v)(import_LibLoader_svelte.default, "LibLoader").$$render($$result, {
      url: "https://cdn.jsdelivr.net/npm/danfojs@1.1.0/lib/bundle.min.js"
    }, {}, {})}
${(0, import_index_0029e4b6.v)(import_LibLoader_svelte.default, "LibLoader").$$render($$result, {
      url: "https://rawgit.com/duhaime/minhash/master/minhash.min.js"
    }, {}, {})}

${$$result.head += ``, ""}

<h1 class="${"svelte-1tkm5o0"}">${(0, import_index_0029e4b6.f)(areaname)}</h1>
${(0, import_index_0029e4b6.v)(import_Card_svelte_svelte_type_style_lang_c67763ba.C, "Cards").$$render($$result, {}, {}, {
      default: () => {
        return `${(0, import_index_0029e4b6.v)(Card, "Card").$$render($$result, { title: "Area map" }, {}, {
          default: () => {
            return `${(0, import_index_0029e4b6.v)(import_MapAreas_svelte.default, "MapAreas").$$render($$result, { minimap: coordinates }, {}, {})}`;
          }
        })}

  ${(0, import_index_0029e4b6.v)(Card, "Card").$$render($$result, { title: "Selected Areas" }, {}, {
          default: () => {
            return `This section outlines all the different areas codes which have been combined
    to produce the following report.
    <br><br>
    ${(0, import_index_0029e4b6.j)(items(compressed), (item) => {
              return `<h4 style="${"display:inline"}"><b class="${"svelte-1tkm5o0"}">${(0, import_index_0029e4b6.f)(item[0].toUpperCase())}</b>:</h4>
      <codes class="${"svelte-1tkm5o0"}">${(0, import_index_0029e4b6.f)(item[1].join(", "))}</codes>
      <br><br>`;
            })}`;
          }
        })}

  ${function(__value) {
          if ((0, import_index_0029e4b6.w)(__value)) {
            __value.then(null, import_index_0029e4b6.n);
            return ``;
          }
          return function(tables) {
            return `

  ${(0, import_index_0029e4b6.v)(Card, "Card").$$render($$result, { title: "Embed Custom Profile" }, {}, {
              default: () => {
                return `<br>
    ${url ? `<code>Embedding URL length: <br>
        ${(0, import_index_0029e4b6.f)(url.length)}</code>
      <br><br>
      ${(0, import_index_0029e4b6.v)(TextInput, "TextInput").$$render($$result, {
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

      <span class="${"radio"}">${(0, import_index_0029e4b6.v)(Toggle, "Toggle").$$render($$result, { size: "sm", toggled: includecodes }, {
                  toggled: ($$value) => {
                    includecodes = $$value;
                    $$settled = false;
                  }
                }, {})}Include Codes</span>

      <span class="${"radio"}">${(0, import_index_0029e4b6.v)(Toggle, "Toggle").$$render($$result, { size: "sm", toggled: includemap }, {
                  toggled: ($$value) => {
                    includemap = $$value;
                    $$settled = false;
                  }
                }, {})} Include
        Map
      </span>

      <br>

      ${(0, import_index_0029e4b6.v)(import_ButtonSet_fcab3a17.B, "ButtonSet").$$render($$result, { stacked: true, id: "bset" }, {}, {
                  default: () => {
                    return `${(0, import_index_0029e4b6.v)(import_Button_a63d0e2e.B, "Button").$$render($$result, { kind: "primary" }, {}, {
                      default: () => {
                        return `Open Embed Url`;
                      }
                    })}

        ${(0, import_index_0029e4b6.v)(import_Button_a63d0e2e.B, "Button").$$render($$result, { kind: "secondary" }, {}, {
                      default: () => {
                        return `Copyto Clipboard
        `;
                      }
                    })}

        ${(0, import_index_0029e4b6.v)(import_Button_a63d0e2e.B, "Button").$$render($$result, { kind: "sucess" }, {}, {
                      default: () => {
                        return `Download Data`;
                      }
                    })}`;
                  }
                })}` : ``}`;
              }
            })}


    ${(0, import_index_0029e4b6.j)(tables, (tab) => {
              return `${(0, import_index_0029e4b6.v)(Card, "Card").$$render($$result, { title: tab.name }, {}, {
                default: () => {
                  return `
        

        ${(0, import_index_0029e4b6.v)(import_BarChart_svelte.default, "BarChart").$$render($$result, {
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
