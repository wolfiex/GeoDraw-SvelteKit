import { c as create_ssr_component, l as compute_rest_props, o as spread, p as escape_attribute_value, q as escape_object, v as validate_component, m as missing_component, f as escape, h as createEventDispatcher, r as add_classes, i as add_attribute, b as subscribe, w as is_promise, n as noop } from "../../../chunks/index-0029e4b6.js";
/* empty css                            */import "../../../chunks/HeaderSearch.svelte_svelte_type_style_lang-2747ef20.js";
import { B as Button } from "../../../chunks/Button-a63d0e2e.js";
import "flatpickr";
import { C as Close20 } from "../../../chunks/Close20-fbcece5d.js";
import DrawButtons from "./Toolbar/DrawButtons.svelte.js";
import EditButtons from "./Toolbar/EditButtons.svelte.js";
import { mapobject, selected, mapfunctions, maplayer, mapsource, query, draw_enabled, draw_type, radiusInKm } from "../../endpoints/draw/mapstore.js";
import "postcss";
import InfoBox from "./Toolbar/InfoBox.svelte.js";
import ItemAccordion from "./Toolbar/ItemAccordion.svelte.js";
import AreaMap from "./AreaMap.svelte.js";
import "@mapbox/tilebelt";
import "@turf/union";
import "maplibre-gl";
import "../../../chunks/index-7e61ccad.js";
import "../../../chunks/ButtonSet-fcab3a17.js";
import "../../../chunks/AccordionItem-a3ba0f2a.js";
import "../../endpoints/draw/MapDraw.js";
const NotificationButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["notificationType", "icon", "title", "iconDescription"]);
  let { notificationType = "toast" } = $$props;
  let { icon = Close20 } = $$props;
  let { title = void 0 } = $$props;
  let { iconDescription = "Close icon" } = $$props;
  if ($$props.notificationType === void 0 && $$bindings.notificationType && notificationType !== void 0)
    $$bindings.notificationType(notificationType);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.iconDescription === void 0 && $$bindings.iconDescription && iconDescription !== void 0)
    $$bindings.iconDescription(iconDescription);
  return `
<button${spread([
    { type: "button" },
    {
      "aria-label": escape_attribute_value(iconDescription)
    },
    {
      title: escape_attribute_value(iconDescription)
    },
    escape_object($$restProps)
  ], {
    classes: (notificationType === "toast" ? "bx--toast-notification__close-button" : "") + " " + (notificationType === "inline" ? "bx--inline-notification__close-button" : "")
  })}>${validate_component(icon || missing_component, "svelte:component").$$render($$result, {
    title,
    class: "bx--" + notificationType + "-notification__close-icon"
  }, {}, {})}</button>`;
});
const CheckmarkFilled20 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "CheckmarkFilled20" },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 20 20" },
    { fill: "currentColor" },
    { width: "20" },
    { height: "20" },
    { class: escape_attribute_value(className) },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: escape_attribute_value(style) },
    { id: escape_attribute_value(id) },
    escape_object(attributes)
  ], {})}><path d="${"M10,1c-4.9,0-9,4.1-9,9s4.1,9,9,9s9-4,9-9S15,1,10,1z M8.7,13.5l-3.2-3.2l1-1l2.2,2.2l4.8-4.8l1,1L8.7,13.5z"}"></path><path fill="${"none"}" d="${"M8.7,13.5l-3.2-3.2l1-1l2.2,2.2l4.8-4.8l1,1L8.7,13.5z"}" data-icon-path="${"inner-path"}" opacity="${"0"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
const ErrorFilled20 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "ErrorFilled20" },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 20 20" },
    { fill: "currentColor" },
    { width: "20" },
    { height: "20" },
    { class: escape_attribute_value(className) },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: escape_attribute_value(style) },
    { id: escape_attribute_value(id) },
    escape_object(attributes)
  ], {})}><path d="${"M10,1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S15,1,10,1z M13.5,14.5l-8-8l1-1l8,8L13.5,14.5z"}"></path><path d="${"M13.5,14.5l-8-8l1-1l8,8L13.5,14.5z"}" data-icon-path="${"inner-path"}" opacity="${"0"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
const InformationFilled20 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    {
      "data-carbon-icon": "InformationFilled20"
    },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 32 32" },
    { fill: "currentColor" },
    { width: "20" },
    { height: "20" },
    { class: escape_attribute_value(className) },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: escape_attribute_value(style) },
    { id: escape_attribute_value(id) },
    escape_object(attributes)
  ], {})}><path fill="${"none"}" d="${"M16,8a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,8Zm4,13.875H17.125v-8H13v2.25h1.875v5.75H12v2.25h8Z"}" data-icon-path="${"inner-path"}"></path><path d="${"M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,6a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,8Zm4,16.125H12v-2.25h2.875v-5.75H13v-2.25h4.125v8H20Z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
const InformationSquareFilled20 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    {
      "data-carbon-icon": "InformationSquareFilled20"
    },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 32 32" },
    { fill: "currentColor" },
    { width: "20" },
    { height: "20" },
    { class: escape_attribute_value(className) },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: escape_attribute_value(style) },
    { id: escape_attribute_value(id) },
    escape_object(attributes)
  ], {})}><path fill="${"none"}" d="${"M16,8a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,8Zm4,13.875H17.125v-8H13v2.25h1.875v5.75H12v2.25h8Z"}" data-icon-path="${"inner-path"}"></path><path d="${"M26,4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V6A2,2,0,0,0,26,4ZM16,8a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,8Zm4,16.125H12v-2.25h2.875v-5.75H13v-2.25h4.125v8H20Z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
const WarningFilled20 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "WarningFilled20" },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 20 20" },
    { fill: "currentColor" },
    { width: "20" },
    { height: "20" },
    { class: escape_attribute_value(className) },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: escape_attribute_value(style) },
    { id: escape_attribute_value(id) },
    escape_object(attributes)
  ], {})}><path d="${"M10,1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S15,1,10,1z M9.2,5h1.5v7H9.2V5z M10,16c-0.6,0-1-0.4-1-1s0.4-1,1-1	s1,0.4,1,1S10.6,16,10,16z"}"></path><path d="${"M9.2,5h1.5v7H9.2V5z M10,16c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S10.6,16,10,16z"}" data-icon-path="${"inner-path"}" opacity="${"0"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
const WarningAltFilled20 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "WarningAltFilled20" },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 32 32" },
    { fill: "currentColor" },
    { width: "20" },
    { height: "20" },
    { class: escape_attribute_value(className) },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: escape_attribute_value(style) },
    { id: escape_attribute_value(id) },
    escape_object(attributes)
  ], {})}><path fill="${"none"}" d="${"M16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Zm-1.125-5h2.25V12h-2.25Z"}" data-icon-path="${"inner-path"}"></path><path d="${"M16.002,6.1714h-.004L4.6487,27.9966,4.6506,28H27.3494l.0019-.0034ZM14.875,12h2.25v9h-2.25ZM16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Z"}"></path><path d="${"M29,30H3a1,1,0,0,1-.8872-1.4614l13-25a1,1,0,0,1,1.7744,0l13,25A1,1,0,0,1,29,30ZM4.6507,28H27.3493l.002-.0033L16.002,6.1714h-.004L4.6487,27.9967Z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
const NotificationIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { kind = "error" } = $$props;
  let { notificationType = "toast" } = $$props;
  let { iconDescription = "Closes notification" } = $$props;
  const icons = {
    error: ErrorFilled20,
    "info-square": InformationSquareFilled20,
    info: InformationFilled20,
    success: CheckmarkFilled20,
    warning: WarningFilled20,
    "warning-alt": WarningAltFilled20
  };
  if ($$props.kind === void 0 && $$bindings.kind && kind !== void 0)
    $$bindings.kind(kind);
  if ($$props.notificationType === void 0 && $$bindings.notificationType && notificationType !== void 0)
    $$bindings.notificationType(notificationType);
  if ($$props.iconDescription === void 0 && $$bindings.iconDescription && iconDescription !== void 0)
    $$bindings.iconDescription(iconDescription);
  return `${validate_component(icons[kind] || missing_component, "svelte:component").$$render($$result, {
    title: iconDescription,
    class: "bx--" + notificationType + "-notification__icon"
  }, {}, {})}`;
});
const ToastNotification = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "kind",
    "lowContrast",
    "timeout",
    "role",
    "title",
    "subtitle",
    "caption",
    "iconDescription",
    "hideCloseButton"
  ]);
  let { kind = "error" } = $$props;
  let { lowContrast = false } = $$props;
  let { timeout = 0 } = $$props;
  let { role = "alert" } = $$props;
  let { title = "" } = $$props;
  let { subtitle = "" } = $$props;
  let { caption = "" } = $$props;
  let { iconDescription = "Closes notification" } = $$props;
  let { hideCloseButton = false } = $$props;
  createEventDispatcher();
  if ($$props.kind === void 0 && $$bindings.kind && kind !== void 0)
    $$bindings.kind(kind);
  if ($$props.lowContrast === void 0 && $$bindings.lowContrast && lowContrast !== void 0)
    $$bindings.lowContrast(lowContrast);
  if ($$props.timeout === void 0 && $$bindings.timeout && timeout !== void 0)
    $$bindings.timeout(timeout);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.caption === void 0 && $$bindings.caption && caption !== void 0)
    $$bindings.caption(caption);
  if ($$props.iconDescription === void 0 && $$bindings.iconDescription && iconDescription !== void 0)
    $$bindings.iconDescription(iconDescription);
  if ($$props.hideCloseButton === void 0 && $$bindings.hideCloseButton && hideCloseButton !== void 0)
    $$bindings.hideCloseButton(hideCloseButton);
  return `
${`<div${spread([
    { role: escape_attribute_value(role) },
    { kind: escape_attribute_value(kind) },
    escape_object($$restProps)
  ], {
    classes: "bx--toast-notification " + (lowContrast ? "bx--toast-notification--low-contrast" : "") + " " + (kind === "error" ? "bx--toast-notification--error" : "") + " " + (kind === "info" ? "bx--toast-notification--info" : "") + " " + (kind === "info-square" ? "bx--toast-notification--info-square" : "") + " " + (kind === "success" ? "bx--toast-notification--success" : "") + " " + (kind === "warning" ? "bx--toast-notification--warning" : "") + " " + (kind === "warning-alt" ? "bx--toast-notification--warning-alt" : "")
  })}>${validate_component(NotificationIcon, "NotificationIcon").$$render($$result, { kind }, {}, {})}
    <div${add_classes("bx--toast-notification__details".trim())}><h3${add_classes("bx--toast-notification__title".trim())}>${slots.title ? slots.title({}) : `${escape(title)}`}</h3>
      <div${add_classes("bx--toast-notification__subtitle".trim())}>${slots.subtitle ? slots.subtitle({}) : `${escape(subtitle)}`}</div>
      <div${add_classes("bx--toast-notification__caption".trim())}>${slots.caption ? slots.caption({}) : `${escape(caption)}`}</div>
      ${slots.default ? slots.default({}) : ``}</div>
    ${!hideCloseButton ? `${validate_component(NotificationButton, "NotificationButton").$$render($$result, { iconDescription }, {}, {})}` : ``}</div>`}`;
});
const Slider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelId;
  let range;
  let left;
  let $$restProps = compute_rest_props($$props, [
    "value",
    "max",
    "maxLabel",
    "min",
    "minLabel",
    "step",
    "stepMultiplier",
    "required",
    "inputType",
    "disabled",
    "light",
    "hideTextInput",
    "id",
    "invalid",
    "labelText",
    "name",
    "ref"
  ]);
  let { value = 0 } = $$props;
  let { max = 100 } = $$props;
  let { maxLabel = "" } = $$props;
  let { min = 0 } = $$props;
  let { minLabel = "" } = $$props;
  let { step = 1 } = $$props;
  let { stepMultiplier = 4 } = $$props;
  let { required = false } = $$props;
  let { inputType = "number" } = $$props;
  let { disabled = false } = $$props;
  let { light = false } = $$props;
  let { hideTextInput = false } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { invalid = false } = $$props;
  let { labelText = "" } = $$props;
  let { name = "" } = $$props;
  let { ref = null } = $$props;
  const dispatch = createEventDispatcher();
  let trackRef = null;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.maxLabel === void 0 && $$bindings.maxLabel && maxLabel !== void 0)
    $$bindings.maxLabel(maxLabel);
  if ($$props.min === void 0 && $$bindings.min && min !== void 0)
    $$bindings.min(min);
  if ($$props.minLabel === void 0 && $$bindings.minLabel && minLabel !== void 0)
    $$bindings.minLabel(minLabel);
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  if ($$props.stepMultiplier === void 0 && $$bindings.stepMultiplier && stepMultiplier !== void 0)
    $$bindings.stepMultiplier(stepMultiplier);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.inputType === void 0 && $$bindings.inputType && inputType !== void 0)
    $$bindings.inputType(inputType);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  if ($$props.hideTextInput === void 0 && $$bindings.hideTextInput && hideTextInput !== void 0)
    $$bindings.hideTextInput(hideTextInput);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  labelId = `label-${id}`;
  range = max - min;
  {
    {
      if (value <= min) {
        value = min;
      } else if (value >= max) {
        value = max;
      }
      if (!disabled) {
        dispatch("change", value);
      }
    }
  }
  left = (value - min) / range * 100;
  return `


<div${spread([escape_object($$restProps)], { classes: "bx--form-item" })}><label${add_attribute("for", id, 0)}${add_attribute("id", labelId, 0)}${add_classes(("bx--label " + (disabled ? "bx--label--disabled" : "")).trim())}>${slots.labelText ? slots.labelText({}) : `
      ${escape(labelText)}
    `}</label>
  <div${add_classes("bx--slider-container".trim())}><span${add_classes("bx--slider__range-label".trim())}>${escape(minLabel || min)}</span>
    <div role="${"presentation"}" tabindex="${"-1"}"${add_classes(("bx--slider " + (disabled ? "bx--slider--disabled" : "")).trim())}${add_attribute("this", ref, 0)}><div role="${"slider"}" tabindex="${"0"}" style="${"left: " + escape(left) + "%"}"${add_attribute("aria-valuemax", max, 0)}${add_attribute("aria-valuemin", min, 0)}${add_attribute("aria-valuenow", value, 0)}${add_attribute("id", id, 0)}${add_classes("bx--slider__thumb".trim())}></div>
      <div${add_classes("bx--slider__track".trim())}${add_attribute("this", trackRef, 0)}></div>
      <div style="${"transform: translate(0, -50%) scaleX(" + escape(left / 100) + ")"}"${add_classes("bx--slider__filled-track".trim())}></div>
      <input type="${"hidden"}"${add_attribute("name", name, 0)}${add_attribute("value", value, 0)} ${required ? "required" : ""}${add_attribute("min", min, 0)}${add_attribute("max", max, 0)}${add_attribute("step", step, 0)}${add_classes("bx--slider__input".trim())}></div>
    <span${add_classes("bx--slider__range-label".trim())}>${escape(maxLabel || max)}</span>
    <input${add_attribute("type", hideTextInput ? "hidden" : inputType, 0)}${add_attribute("style", hideTextInput ? "display: none" : void 0, 0)} id="${"input-" + escape(id)}"${add_attribute("name", name, 0)}${add_attribute("value", value, 0)}${add_attribute("aria-labelledby", $$props["aria-label"] ? void 0 : labelId, 0)}${add_attribute("aria-label", $$props["aria-label"] || "Slider number input", 0)} ${disabled ? "disabled" : ""} ${required ? "required" : ""}${add_attribute("min", min, 0)}${add_attribute("max", max, 0)}${add_attribute("step", step, 0)}${add_attribute("data-invalid", invalid || null, 0)}${add_attribute("aria-invalid", invalid || null, 0)}${add_classes(("bx--text-input bx--slider-text-input " + (light ? "bx--text-input--light" : "") + " " + (invalid ? "bx--text-input--invalid" : "")).trim())}></div></div>`;
});
var mapboxGl = /* @__PURE__ */ (() => `/* purgecss start ignore */

.mapboxgl-map{
  font:12px/20px Helvetica Neue,Arial,Helvetica,sans-serif;
  overflow:hidden;
  position:relative;
  -webkit-tap-highlight-color:rgba(0,0,0,0)
}

.mapboxgl-canvas{
  position:absolute;
  left:0;
  top:0
}

.mapboxgl-map:-webkit-full-screen{
  width:100%;
  height:100%
}

.mapboxgl-canary{
  background-color:salmon
}

.mapboxgl-canvas-container.mapboxgl-interactive,.mapboxgl-ctrl-group button.mapboxgl-ctrl-compass{
  cursor:-webkit-grab;
  cursor:grab;
  -moz-user-select:none;
  -webkit-user-select:none;
  -ms-user-select:none;
  user-select:none
}

.mapboxgl-canvas-container.mapboxgl-interactive.mapboxgl-track-pointer{
  cursor:pointer
}

.mapboxgl-canvas-container.mapboxgl-interactive:active,.mapboxgl-ctrl-group button.mapboxgl-ctrl-compass:active{
  cursor:-webkit-grabbing;
  cursor:grabbing
}

.mapboxgl-canvas-container.mapboxgl-touch-zoom-rotate,.mapboxgl-canvas-container.mapboxgl-touch-zoom-rotate .mapboxgl-canvas{
  touch-action:pan-x pan-y
}

.mapboxgl-canvas-container.mapboxgl-touch-drag-pan,.mapboxgl-canvas-container.mapboxgl-touch-drag-pan .mapboxgl-canvas{
  touch-action:pinch-zoom
}

.mapboxgl-canvas-container.mapboxgl-touch-zoom-rotate.mapboxgl-touch-drag-pan,.mapboxgl-canvas-container.mapboxgl-touch-zoom-rotate.mapboxgl-touch-drag-pan .mapboxgl-canvas{
  touch-action:none
}

.mapboxgl-ctrl-bottom-left,.mapboxgl-ctrl-bottom-right,.mapboxgl-ctrl-top-left,.mapboxgl-ctrl-top-right{
  position:absolute;
  pointer-events:none;
  z-index:2
}

.mapboxgl-ctrl-top-left{
  top:0;
  left:0
}

.mapboxgl-ctrl-top-right{
  top:0;
  right:0
}

.mapboxgl-ctrl-bottom-left{
  bottom:0;
  left:0
}

.mapboxgl-ctrl-bottom-right{
  right:0;
  bottom:0
}

.mapboxgl-ctrl{
  clear:both;
  pointer-events:auto;
  transform:translate(0)
}

.mapboxgl-ctrl-top-left .mapboxgl-ctrl{
  margin:10px 0 0 10px;
  float:left
}

.mapboxgl-ctrl-top-right .mapboxgl-ctrl{
  margin:10px 10px 0 0;
  float:right
}

.mapboxgl-ctrl-bottom-left .mapboxgl-ctrl{
  margin:0 0 10px 10px;
  float:left
}

.mapboxgl-ctrl-bottom-right .mapboxgl-ctrl{
  margin:0 10px 10px 0;
  float:right
}

.mapboxgl-ctrl-group{
  border-radius:4px;
  background:#fff
}

.mapboxgl-ctrl-group:not(:empty){
  box-shadow:0 0 0 2px rgba(0,0,0,.1)
}

@media (-ms-high-contrast:active){
  .mapboxgl-ctrl-group:not(:empty){
    box-shadow:0 0 0 2px ButtonText
  }
}

.mapboxgl-ctrl-group button{
  width:29px;
  height:29px;
  display:block;
  padding:0;
  outline:none;
  border:0;
  box-sizing:border-box;
  background-color:transparent;
  cursor:pointer
}

.mapboxgl-ctrl-group button+button{
  border-top:1px solid #ddd
}

.mapboxgl-ctrl button .mapboxgl-ctrl-icon{
  display:block;
  width:100%;
  height:100%;
  background-repeat:no-repeat;
  background-position:50%
}

@media (-ms-high-contrast:active){
  .mapboxgl-ctrl-icon{
    background-color:transparent
  }

  .mapboxgl-ctrl-group button+button{
    border-top:1px solid ButtonText
  }
}

.mapboxgl-ctrl button::-moz-focus-inner{
  border:0;
  padding:0
}

.mapboxgl-ctrl-attrib-button:focus,.mapboxgl-ctrl-group button:focus{
  box-shadow:0 0 2px 2px #0096ff
}

.mapboxgl-ctrl button:disabled{
  cursor:not-allowed
}

.mapboxgl-ctrl button:disabled .mapboxgl-ctrl-icon{
  opacity:.25
}

.mapboxgl-ctrl button:not(:disabled):hover{
  background-color:rgba(0,0,0,.05)
}

.mapboxgl-ctrl-group button:focus:focus-visible{
  box-shadow:0 0 2px 2px #0096ff
}

.mapboxgl-ctrl-group button:focus:not(:focus-visible){
  box-shadow:none
}

.mapboxgl-ctrl-group button:focus:first-child{
  border-radius:4px 4px 0 0
}

.mapboxgl-ctrl-group button:focus:last-child{
  border-radius:0 0 4px 4px
}

.mapboxgl-ctrl-group button:focus:only-child{
  border-radius:inherit
}

.mapboxgl-ctrl button.mapboxgl-ctrl-zoom-out .mapboxgl-ctrl-icon{
  background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg' fill='%23333'%3E%3Cpath d='M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-9z'/%3E%3C/svg%3E")
}

.mapboxgl-ctrl button.mapboxgl-ctrl-zoom-in .mapboxgl-ctrl-icon{
  background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg' fill='%23333'%3E%3Cpath d='M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5z'/%3E%3C/svg%3E")
}

@media (-ms-high-contrast:active){
  .mapboxgl-ctrl button.mapboxgl-ctrl-zoom-out .mapboxgl-ctrl-icon{
    background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg' fill='%23fff'%3E%3Cpath d='M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-9z'/%3E%3C/svg%3E")
  }

  .mapboxgl-ctrl button.mapboxgl-ctrl-zoom-in .mapboxgl-ctrl-icon{
    background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg' fill='%23fff'%3E%3Cpath d='M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5z'/%3E%3C/svg%3E")
  }
}

@media (-ms-high-contrast:black-on-white){
  .mapboxgl-ctrl button.mapboxgl-ctrl-zoom-out .mapboxgl-ctrl-icon{
    background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-9z'/%3E%3C/svg%3E")
  }

  .mapboxgl-ctrl button.mapboxgl-ctrl-zoom-in .mapboxgl-ctrl-icon{
    background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5z'/%3E%3C/svg%3E")
  }
}

.mapboxgl-ctrl button.mapboxgl-ctrl-fullscreen .mapboxgl-ctrl-icon{
  background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg' fill='%23333'%3E%3Cpath d='M24 16v5.5c0 1.75-.75 2.5-2.5 2.5H16v-1l3-1.5-4-5.5 1-1 5.5 4 1.5-3h1zM6 16l1.5 3 5.5-4 1 1-4 5.5 3 1.5v1H7.5C5.75 24 5 23.25 5 21.5V16h1zm7-11v1l-3 1.5 4 5.5-1 1-5.5-4L6 13H5V7.5C5 5.75 5.75 5 7.5 5H13zm11 2.5c0-1.75-.75-2.5-2.5-2.5H16v1l3 1.5-4 5.5 1 1 5.5-4 1.5 3h1V7.5z'/%3E%3C/svg%3E")
}

.mapboxgl-ctrl button.mapboxgl-ctrl-shrink .mapboxgl-ctrl-icon{
  background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18.5 16c-1.75 0-2.5.75-2.5 2.5V24h1l1.5-3 5.5 4 1-1-4-5.5 3-1.5v-1h-5.5zM13 18.5c0-1.75-.75-2.5-2.5-2.5H5v1l3 1.5L4 24l1 1 5.5-4 1.5 3h1v-5.5zm3-8c0 1.75.75 2.5 2.5 2.5H24v-1l-3-1.5L25 5l-1-1-5.5 4L17 5h-1v5.5zM10.5 13c1.75 0 2.5-.75 2.5-2.5V5h-1l-1.5 3L5 4 4 5l4 5.5L5 12v1h5.5z'/%3E%3C/svg%3E")
}

@media (-ms-high-contrast:active){
  .mapboxgl-ctrl button.mapboxgl-ctrl-fullscreen .mapboxgl-ctrl-icon{
    background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg' fill='%23fff'%3E%3Cpath d='M24 16v5.5c0 1.75-.75 2.5-2.5 2.5H16v-1l3-1.5-4-5.5 1-1 5.5 4 1.5-3h1zM6 16l1.5 3 5.5-4 1 1-4 5.5 3 1.5v1H7.5C5.75 24 5 23.25 5 21.5V16h1zm7-11v1l-3 1.5 4 5.5-1 1-5.5-4L6 13H5V7.5C5 5.75 5.75 5 7.5 5H13zm11 2.5c0-1.75-.75-2.5-2.5-2.5H16v1l3 1.5-4 5.5 1 1 5.5-4 1.5 3h1V7.5z'/%3E%3C/svg%3E")
  }

  .mapboxgl-ctrl button.mapboxgl-ctrl-shrink .mapboxgl-ctrl-icon{
    background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg' fill='%23fff'%3E%3Cpath d='M18.5 16c-1.75 0-2.5.75-2.5 2.5V24h1l1.5-3 5.5 4 1-1-4-5.5 3-1.5v-1h-5.5zM13 18.5c0-1.75-.75-2.5-2.5-2.5H5v1l3 1.5L4 24l1 1 5.5-4 1.5 3h1v-5.5zm3-8c0 1.75.75 2.5 2.5 2.5H24v-1l-3-1.5L25 5l-1-1-5.5 4L17 5h-1v5.5zM10.5 13c1.75 0 2.5-.75 2.5-2.5V5h-1l-1.5 3L5 4 4 5l4 5.5L5 12v1h5.5z'/%3E%3C/svg%3E")
  }
}

@media (-ms-high-contrast:black-on-white){
  .mapboxgl-ctrl button.mapboxgl-ctrl-fullscreen .mapboxgl-ctrl-icon{
    background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M24 16v5.5c0 1.75-.75 2.5-2.5 2.5H16v-1l3-1.5-4-5.5 1-1 5.5 4 1.5-3h1zM6 16l1.5 3 5.5-4 1 1-4 5.5 3 1.5v1H7.5C5.75 24 5 23.25 5 21.5V16h1zm7-11v1l-3 1.5 4 5.5-1 1-5.5-4L6 13H5V7.5C5 5.75 5.75 5 7.5 5H13zm11 2.5c0-1.75-.75-2.5-2.5-2.5H16v1l3 1.5-4 5.5 1 1 5.5-4 1.5 3h1V7.5z'/%3E%3C/svg%3E")
  }

  .mapboxgl-ctrl button.mapboxgl-ctrl-shrink .mapboxgl-ctrl-icon{
    background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18.5 16c-1.75 0-2.5.75-2.5 2.5V24h1l1.5-3 5.5 4 1-1-4-5.5 3-1.5v-1h-5.5zM13 18.5c0-1.75-.75-2.5-2.5-2.5H5v1l3 1.5L4 24l1 1 5.5-4 1.5 3h1v-5.5zm3-8c0 1.75.75 2.5 2.5 2.5H24v-1l-3-1.5L25 5l-1-1-5.5 4L17 5h-1v5.5zM10.5 13c1.75 0 2.5-.75 2.5-2.5V5h-1l-1.5 3L5 4 4 5l4 5.5L5 12v1h5.5z'/%3E%3C/svg%3E")
  }
}

.mapboxgl-ctrl button.mapboxgl-ctrl-compass .mapboxgl-ctrl-icon{
  background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg' fill='%23333'%3E%3Cpath d='M10.5 14l4-8 4 8h-8z'/%3E%3Cpath d='M10.5 16l4 8 4-8h-8z' fill='%23ccc'/%3E%3C/svg%3E")
}

@media (-ms-high-contrast:active){
  .mapboxgl-ctrl button.mapboxgl-ctrl-compass .mapboxgl-ctrl-icon{
    background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg' fill='%23fff'%3E%3Cpath d='M10.5 14l4-8 4 8h-8z'/%3E%3Cpath d='M10.5 16l4 8 4-8h-8z' fill='%23999'/%3E%3C/svg%3E")
  }
}

@media (-ms-high-contrast:black-on-white){
  .mapboxgl-ctrl button.mapboxgl-ctrl-compass .mapboxgl-ctrl-icon{
    background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.5 14l4-8 4 8h-8z'/%3E%3Cpath d='M10.5 16l4 8 4-8h-8z' fill='%23ccc'/%3E%3C/svg%3E")
  }
}

.mapboxgl-ctrl button.mapboxgl-ctrl-geolocate .mapboxgl-ctrl-icon{
  background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%23333'%3E%3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 005.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 009 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 003.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0011 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 110-7z'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3C/svg%3E")
}

.mapboxgl-ctrl button.mapboxgl-ctrl-geolocate:disabled .mapboxgl-ctrl-icon{
  background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%23aaa'%3E%3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 005.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 009 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 003.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0011 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 110-7z'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Cpath d='M14 5l1 1-9 9-1-1 9-9z' fill='red'/%3E%3C/svg%3E")
}

.mapboxgl-ctrl button.mapboxgl-ctrl-geolocate.mapboxgl-ctrl-geolocate-active .mapboxgl-ctrl-icon{
  background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%2333b5e5'%3E%3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 005.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 009 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 003.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0011 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 110-7z'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3C/svg%3E")
}

.mapboxgl-ctrl button.mapboxgl-ctrl-geolocate.mapboxgl-ctrl-geolocate-active-error .mapboxgl-ctrl-icon{
  background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%23e58978'%3E%3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 005.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 009 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 003.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0011 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 110-7z'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3C/svg%3E")
}

.mapboxgl-ctrl button.mapboxgl-ctrl-geolocate.mapboxgl-ctrl-geolocate-background .mapboxgl-ctrl-icon{
  background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%2333b5e5'%3E%3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 005.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 009 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 003.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0011 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 110-7z'/%3E%3C/svg%3E")
}

.mapboxgl-ctrl button.mapboxgl-ctrl-geolocate.mapboxgl-ctrl-geolocate-background-error .mapboxgl-ctrl-icon{
  background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%23e54e33'%3E%3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 005.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 009 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 003.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0011 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 110-7z'/%3E%3C/svg%3E")
}

.mapboxgl-ctrl button.mapboxgl-ctrl-geolocate.mapboxgl-ctrl-geolocate-waiting .mapboxgl-ctrl-icon{
  -webkit-animation:mapboxgl-spin 2s linear infinite;
  animation:mapboxgl-spin 2s linear infinite
}

@media (-ms-high-contrast:active){
  .mapboxgl-ctrl button.mapboxgl-ctrl-geolocate .mapboxgl-ctrl-icon{
    background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%23fff'%3E%3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 005.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 009 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 003.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0011 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 110-7z'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3C/svg%3E")
  }

  .mapboxgl-ctrl button.mapboxgl-ctrl-geolocate:disabled .mapboxgl-ctrl-icon{
    background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%23999'%3E%3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 005.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 009 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 003.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0011 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 110-7z'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Cpath d='M14 5l1 1-9 9-1-1 9-9z' fill='red'/%3E%3C/svg%3E")
  }

  .mapboxgl-ctrl button.mapboxgl-ctrl-geolocate.mapboxgl-ctrl-geolocate-active .mapboxgl-ctrl-icon{
    background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%2333b5e5'%3E%3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 005.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 009 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 003.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0011 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 110-7z'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3C/svg%3E")
  }

  .mapboxgl-ctrl button.mapboxgl-ctrl-geolocate.mapboxgl-ctrl-geolocate-active-error .mapboxgl-ctrl-icon{
    background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%23e58978'%3E%3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 005.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 009 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 003.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0011 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 110-7z'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3C/svg%3E")
  }

  .mapboxgl-ctrl button.mapboxgl-ctrl-geolocate.mapboxgl-ctrl-geolocate-background .mapboxgl-ctrl-icon{
    background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%2333b5e5'%3E%3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 005.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 009 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 003.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0011 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 110-7z'/%3E%3C/svg%3E")
  }

  .mapboxgl-ctrl button.mapboxgl-ctrl-geolocate.mapboxgl-ctrl-geolocate-background-error .mapboxgl-ctrl-icon{
    background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%23e54e33'%3E%3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 005.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 009 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 003.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0011 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 110-7z'/%3E%3C/svg%3E")
  }
}

@media (-ms-high-contrast:black-on-white){
  .mapboxgl-ctrl button.mapboxgl-ctrl-geolocate .mapboxgl-ctrl-icon{
    background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 005.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 009 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 003.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0011 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 110-7z'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3C/svg%3E")
  }

  .mapboxgl-ctrl button.mapboxgl-ctrl-geolocate:disabled .mapboxgl-ctrl-icon{
    background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%23666'%3E%3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 005.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 009 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 003.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0011 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 110-7z'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Cpath d='M14 5l1 1-9 9-1-1 9-9z' fill='red'/%3E%3C/svg%3E")
  }
}

@-webkit-keyframes mapboxgl-spin{
  0%{
    -webkit-transform:rotate(0deg)
  }

  to{
    -webkit-transform:rotate(1turn)
  }
}

@keyframes mapboxgl-spin{
  0%{
    transform:rotate(0deg)
  }

  to{
    transform:rotate(1turn)
  }
}

a.mapboxgl-ctrl-logo{
  width:88px;
  height:23px;
  margin:0 0 -4px -4px;
  display:block;
  background-repeat:no-repeat;
  cursor:pointer;
  overflow:hidden;
  background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='88' height='23' viewBox='0 0 88 23' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' fill-rule='evenodd'%3E%3Cdefs%3E%3Cpath id='a' d='M11.5 2.25c5.105 0 9.25 4.145 9.25 9.25s-4.145 9.25-9.25 9.25-9.25-4.145-9.25-9.25 4.145-9.25 9.25-9.25zM6.997 15.983c-.051-.338-.828-5.802 2.233-8.873a4.395 4.395 0 013.13-1.28c1.27 0 2.49.51 3.39 1.42.91.9 1.42 2.12 1.42 3.39 0 1.18-.449 2.301-1.28 3.13C12.72 16.93 7 16 7 16l-.003-.017zM15.3 10.5l-2 .8-.8 2-.8-2-2-.8 2-.8.8-2 .8 2 2 .8z'/%3E%3Cpath id='b' d='M50.63 8c.13 0 .23.1.23.23V9c.7-.76 1.7-1.18 2.73-1.18 2.17 0 3.95 1.85 3.95 4.17s-1.77 4.19-3.94 4.19c-1.04 0-2.03-.43-2.74-1.18v3.77c0 .13-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V8.23c0-.12.1-.23.23-.23h1.4zm-3.86.01c.01 0 .01 0 .01-.01.13 0 .22.1.22.22v7.55c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V15c-.7.76-1.69 1.19-2.73 1.19-2.17 0-3.94-1.87-3.94-4.19 0-2.32 1.77-4.19 3.94-4.19 1.03 0 2.02.43 2.73 1.18v-.75c0-.12.1-.23.23-.23h1.4zm26.375-.19a4.24 4.24 0 00-4.16 3.29c-.13.59-.13 1.19 0 1.77a4.233 4.233 0 004.17 3.3c2.35 0 4.26-1.87 4.26-4.19 0-2.32-1.9-4.17-4.27-4.17zM60.63 5c.13 0 .23.1.23.23v3.76c.7-.76 1.7-1.18 2.73-1.18 1.88 0 3.45 1.4 3.84 3.28.13.59.13 1.2 0 1.8-.39 1.88-1.96 3.29-3.84 3.29-1.03 0-2.02-.43-2.73-1.18v.77c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V5.23c0-.12.1-.23.23-.23h1.4zm-34 11h-1.4c-.13 0-.23-.11-.23-.23V8.22c.01-.13.1-.22.23-.22h1.4c.13 0 .22.11.23.22v.68c.5-.68 1.3-1.09 2.16-1.1h.03c1.09 0 2.09.6 2.6 1.55.45-.95 1.4-1.55 2.44-1.56 1.62 0 2.93 1.25 2.9 2.78l.03 5.2c0 .13-.1.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.8 0-1.46.7-1.59 1.62l.01 4.68c0 .13-.11.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.85 0-1.54.79-1.6 1.8v4.5c0 .13-.1.23-.23.23zm53.615 0h-1.61c-.04 0-.08-.01-.12-.03-.09-.06-.13-.19-.06-.28l2.43-3.71-2.39-3.65a.213.213 0 01-.03-.12c0-.12.09-.21.21-.21h1.61c.13 0 .24.06.3.17l1.41 2.37 1.4-2.37a.34.34 0 01.3-.17h1.6c.04 0 .08.01.12.03.09.06.13.19.06.28l-2.37 3.65 2.43 3.7c0 .05.01.09.01.13 0 .12-.09.21-.21.21h-1.61c-.13 0-.24-.06-.3-.17l-1.44-2.42-1.44 2.42a.34.34 0 01-.3.17zm-7.12-1.49c-1.33 0-2.42-1.12-2.42-2.51 0-1.39 1.08-2.52 2.42-2.52 1.33 0 2.42 1.12 2.42 2.51 0 1.39-1.08 2.51-2.42 2.52zm-19.865 0c-1.32 0-2.39-1.11-2.42-2.48v-.07c.02-1.38 1.09-2.49 2.4-2.49 1.32 0 2.41 1.12 2.41 2.51 0 1.39-1.07 2.52-2.39 2.53zm-8.11-2.48c-.01 1.37-1.09 2.47-2.41 2.47s-2.42-1.12-2.42-2.51c0-1.39 1.08-2.52 2.4-2.52 1.33 0 2.39 1.11 2.41 2.48l.02.08zm18.12 2.47c-1.32 0-2.39-1.11-2.41-2.48v-.06c.02-1.38 1.09-2.48 2.41-2.48s2.42 1.12 2.42 2.51c0 1.39-1.09 2.51-2.42 2.51z'/%3E%3C/defs%3E%3Cmask id='c'%3E%3Crect width='100%25' height='100%25' fill='%23fff'/%3E%3Cuse xlink:href='%23a'/%3E%3Cuse xlink:href='%23b'/%3E%3C/mask%3E%3Cg opacity='.3' stroke='%23000' stroke-width='3'%3E%3Ccircle mask='url(%23c)' cx='11.5' cy='11.5' r='9.25'/%3E%3Cuse xlink:href='%23b' mask='url(%23c)'/%3E%3C/g%3E%3Cg opacity='.9' fill='%23fff'%3E%3Cuse xlink:href='%23a'/%3E%3Cuse xlink:href='%23b'/%3E%3C/g%3E%3C/svg%3E")
}

a.mapboxgl-ctrl-logo.mapboxgl-compact{
  width:23px
}

@media (-ms-high-contrast:active){
  a.mapboxgl-ctrl-logo{
    background-color:transparent;
    background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='88' height='23' viewBox='0 0 88 23' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' fill-rule='evenodd'%3E%3Cdefs%3E%3Cpath id='a' d='M11.5 2.25c5.105 0 9.25 4.145 9.25 9.25s-4.145 9.25-9.25 9.25-9.25-4.145-9.25-9.25 4.145-9.25 9.25-9.25zM6.997 15.983c-.051-.338-.828-5.802 2.233-8.873a4.395 4.395 0 013.13-1.28c1.27 0 2.49.51 3.39 1.42.91.9 1.42 2.12 1.42 3.39 0 1.18-.449 2.301-1.28 3.13C12.72 16.93 7 16 7 16l-.003-.017zM15.3 10.5l-2 .8-.8 2-.8-2-2-.8 2-.8.8-2 .8 2 2 .8z'/%3E%3Cpath id='b' d='M50.63 8c.13 0 .23.1.23.23V9c.7-.76 1.7-1.18 2.73-1.18 2.17 0 3.95 1.85 3.95 4.17s-1.77 4.19-3.94 4.19c-1.04 0-2.03-.43-2.74-1.18v3.77c0 .13-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V8.23c0-.12.1-.23.23-.23h1.4zm-3.86.01c.01 0 .01 0 .01-.01.13 0 .22.1.22.22v7.55c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V15c-.7.76-1.69 1.19-2.73 1.19-2.17 0-3.94-1.87-3.94-4.19 0-2.32 1.77-4.19 3.94-4.19 1.03 0 2.02.43 2.73 1.18v-.75c0-.12.1-.23.23-.23h1.4zm26.375-.19a4.24 4.24 0 00-4.16 3.29c-.13.59-.13 1.19 0 1.77a4.233 4.233 0 004.17 3.3c2.35 0 4.26-1.87 4.26-4.19 0-2.32-1.9-4.17-4.27-4.17zM60.63 5c.13 0 .23.1.23.23v3.76c.7-.76 1.7-1.18 2.73-1.18 1.88 0 3.45 1.4 3.84 3.28.13.59.13 1.2 0 1.8-.39 1.88-1.96 3.29-3.84 3.29-1.03 0-2.02-.43-2.73-1.18v.77c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V5.23c0-.12.1-.23.23-.23h1.4zm-34 11h-1.4c-.13 0-.23-.11-.23-.23V8.22c.01-.13.1-.22.23-.22h1.4c.13 0 .22.11.23.22v.68c.5-.68 1.3-1.09 2.16-1.1h.03c1.09 0 2.09.6 2.6 1.55.45-.95 1.4-1.55 2.44-1.56 1.62 0 2.93 1.25 2.9 2.78l.03 5.2c0 .13-.1.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.8 0-1.46.7-1.59 1.62l.01 4.68c0 .13-.11.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.85 0-1.54.79-1.6 1.8v4.5c0 .13-.1.23-.23.23zm53.615 0h-1.61c-.04 0-.08-.01-.12-.03-.09-.06-.13-.19-.06-.28l2.43-3.71-2.39-3.65a.213.213 0 01-.03-.12c0-.12.09-.21.21-.21h1.61c.13 0 .24.06.3.17l1.41 2.37 1.4-2.37a.34.34 0 01.3-.17h1.6c.04 0 .08.01.12.03.09.06.13.19.06.28l-2.37 3.65 2.43 3.7c0 .05.01.09.01.13 0 .12-.09.21-.21.21h-1.61c-.13 0-.24-.06-.3-.17l-1.44-2.42-1.44 2.42a.34.34 0 01-.3.17zm-7.12-1.49c-1.33 0-2.42-1.12-2.42-2.51 0-1.39 1.08-2.52 2.42-2.52 1.33 0 2.42 1.12 2.42 2.51 0 1.39-1.08 2.51-2.42 2.52zm-19.865 0c-1.32 0-2.39-1.11-2.42-2.48v-.07c.02-1.38 1.09-2.49 2.4-2.49 1.32 0 2.41 1.12 2.41 2.51 0 1.39-1.07 2.52-2.39 2.53zm-8.11-2.48c-.01 1.37-1.09 2.47-2.41 2.47s-2.42-1.12-2.42-2.51c0-1.39 1.08-2.52 2.4-2.52 1.33 0 2.39 1.11 2.41 2.48l.02.08zm18.12 2.47c-1.32 0-2.39-1.11-2.41-2.48v-.06c.02-1.38 1.09-2.48 2.41-2.48s2.42 1.12 2.42 2.51c0 1.39-1.09 2.51-2.42 2.51z'/%3E%3C/defs%3E%3Cmask id='c'%3E%3Crect width='100%25' height='100%25' fill='%23fff'/%3E%3Cuse xlink:href='%23a'/%3E%3Cuse xlink:href='%23b'/%3E%3C/mask%3E%3Cg stroke='%23000' stroke-width='3'%3E%3Ccircle mask='url(%23c)' cx='11.5' cy='11.5' r='9.25'/%3E%3Cuse xlink:href='%23b' mask='url(%23c)'/%3E%3C/g%3E%3Cg fill='%23fff'%3E%3Cuse xlink:href='%23a'/%3E%3Cuse xlink:href='%23b'/%3E%3C/g%3E%3C/svg%3E")
  }
}

@media (-ms-high-contrast:black-on-white){
  a.mapboxgl-ctrl-logo{
    background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='88' height='23' viewBox='0 0 88 23' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' fill-rule='evenodd'%3E%3Cdefs%3E%3Cpath id='a' d='M11.5 2.25c5.105 0 9.25 4.145 9.25 9.25s-4.145 9.25-9.25 9.25-9.25-4.145-9.25-9.25 4.145-9.25 9.25-9.25zM6.997 15.983c-.051-.338-.828-5.802 2.233-8.873a4.395 4.395 0 013.13-1.28c1.27 0 2.49.51 3.39 1.42.91.9 1.42 2.12 1.42 3.39 0 1.18-.449 2.301-1.28 3.13C12.72 16.93 7 16 7 16l-.003-.017zM15.3 10.5l-2 .8-.8 2-.8-2-2-.8 2-.8.8-2 .8 2 2 .8z'/%3E%3Cpath id='b' d='M50.63 8c.13 0 .23.1.23.23V9c.7-.76 1.7-1.18 2.73-1.18 2.17 0 3.95 1.85 3.95 4.17s-1.77 4.19-3.94 4.19c-1.04 0-2.03-.43-2.74-1.18v3.77c0 .13-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V8.23c0-.12.1-.23.23-.23h1.4zm-3.86.01c.01 0 .01 0 .01-.01.13 0 .22.1.22.22v7.55c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V15c-.7.76-1.69 1.19-2.73 1.19-2.17 0-3.94-1.87-3.94-4.19 0-2.32 1.77-4.19 3.94-4.19 1.03 0 2.02.43 2.73 1.18v-.75c0-.12.1-.23.23-.23h1.4zm26.375-.19a4.24 4.24 0 00-4.16 3.29c-.13.59-.13 1.19 0 1.77a4.233 4.233 0 004.17 3.3c2.35 0 4.26-1.87 4.26-4.19 0-2.32-1.9-4.17-4.27-4.17zM60.63 5c.13 0 .23.1.23.23v3.76c.7-.76 1.7-1.18 2.73-1.18 1.88 0 3.45 1.4 3.84 3.28.13.59.13 1.2 0 1.8-.39 1.88-1.96 3.29-3.84 3.29-1.03 0-2.02-.43-2.73-1.18v.77c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V5.23c0-.12.1-.23.23-.23h1.4zm-34 11h-1.4c-.13 0-.23-.11-.23-.23V8.22c.01-.13.1-.22.23-.22h1.4c.13 0 .22.11.23.22v.68c.5-.68 1.3-1.09 2.16-1.1h.03c1.09 0 2.09.6 2.6 1.55.45-.95 1.4-1.55 2.44-1.56 1.62 0 2.93 1.25 2.9 2.78l.03 5.2c0 .13-.1.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.8 0-1.46.7-1.59 1.62l.01 4.68c0 .13-.11.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.85 0-1.54.79-1.6 1.8v4.5c0 .13-.1.23-.23.23zm53.615 0h-1.61c-.04 0-.08-.01-.12-.03-.09-.06-.13-.19-.06-.28l2.43-3.71-2.39-3.65a.213.213 0 01-.03-.12c0-.12.09-.21.21-.21h1.61c.13 0 .24.06.3.17l1.41 2.37 1.4-2.37a.34.34 0 01.3-.17h1.6c.04 0 .08.01.12.03.09.06.13.19.06.28l-2.37 3.65 2.43 3.7c0 .05.01.09.01.13 0 .12-.09.21-.21.21h-1.61c-.13 0-.24-.06-.3-.17l-1.44-2.42-1.44 2.42a.34.34 0 01-.3.17zm-7.12-1.49c-1.33 0-2.42-1.12-2.42-2.51 0-1.39 1.08-2.52 2.42-2.52 1.33 0 2.42 1.12 2.42 2.51 0 1.39-1.08 2.51-2.42 2.52zm-19.865 0c-1.32 0-2.39-1.11-2.42-2.48v-.07c.02-1.38 1.09-2.49 2.4-2.49 1.32 0 2.41 1.12 2.41 2.51 0 1.39-1.07 2.52-2.39 2.53zm-8.11-2.48c-.01 1.37-1.09 2.47-2.41 2.47s-2.42-1.12-2.42-2.51c0-1.39 1.08-2.52 2.4-2.52 1.33 0 2.39 1.11 2.41 2.48l.02.08zm18.12 2.47c-1.32 0-2.39-1.11-2.41-2.48v-.06c.02-1.38 1.09-2.48 2.41-2.48s2.42 1.12 2.42 2.51c0 1.39-1.09 2.51-2.42 2.51z'/%3E%3C/defs%3E%3Cmask id='c'%3E%3Crect width='100%25' height='100%25' fill='%23fff'/%3E%3Cuse xlink:href='%23a'/%3E%3Cuse xlink:href='%23b'/%3E%3C/mask%3E%3Cg stroke='%23fff' stroke-width='3' fill='%23fff'%3E%3Ccircle mask='url(%23c)' cx='11.5' cy='11.5' r='9.25'/%3E%3Cuse xlink:href='%23b' mask='url(%23c)'/%3E%3C/g%3E%3Cuse xlink:href='%23a'/%3E%3Cuse xlink:href='%23b'/%3E%3C/svg%3E")
  }
}

.mapboxgl-ctrl.mapboxgl-ctrl-attrib{
  padding:0 5px;
  background-color:hsla(0,0%,100%,.5);
  margin:0
}

@media screen{
  .mapboxgl-ctrl-attrib.mapboxgl-compact{
    min-height:20px;
    padding:2px 24px 2px 0;
    margin:10px;
    position:relative;
    background-color:#fff;
    border-radius:12px
  }

  .mapboxgl-ctrl-attrib.mapboxgl-compact-show{
    padding:2px 28px 2px 8px;
    visibility:visible
  }

  .mapboxgl-ctrl-bottom-left>.mapboxgl-ctrl-attrib.mapboxgl-compact-show,.mapboxgl-ctrl-top-left>.mapboxgl-ctrl-attrib.mapboxgl-compact-show{
    padding:2px 8px 2px 28px;
    border-radius:12px
  }

  .mapboxgl-ctrl-attrib.mapboxgl-compact .mapboxgl-ctrl-attrib-inner{
    display:none
  }

  .mapboxgl-ctrl-attrib-button{
    display:none;
    cursor:pointer;
    position:absolute;
    background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd'%3E%3Cpath d='M4 10a6 6 0 1012 0 6 6 0 10-12 0m5-3a1 1 0 102 0 1 1 0 10-2 0m0 3a1 1 0 112 0v3a1 1 0 11-2 0'/%3E%3C/svg%3E");
    background-color:hsla(0,0%,100%,.5);
    width:24px;
    height:24px;
    box-sizing:border-box;
    border-radius:12px;
    outline:none;
    top:0;
    right:0;
    border:0
  }

  .mapboxgl-ctrl-bottom-left .mapboxgl-ctrl-attrib-button,.mapboxgl-ctrl-top-left .mapboxgl-ctrl-attrib-button{
    left:0
  }

  .mapboxgl-ctrl-attrib.mapboxgl-compact-show .mapboxgl-ctrl-attrib-inner,.mapboxgl-ctrl-attrib.mapboxgl-compact .mapboxgl-ctrl-attrib-button{
    display:block
  }

  .mapboxgl-ctrl-attrib.mapboxgl-compact-show .mapboxgl-ctrl-attrib-button{
    background-color:rgba(0,0,0,.05)
  }

  .mapboxgl-ctrl-bottom-right>.mapboxgl-ctrl-attrib.mapboxgl-compact:after{
    bottom:0;
    right:0
  }

  .mapboxgl-ctrl-top-right>.mapboxgl-ctrl-attrib.mapboxgl-compact:after{
    top:0;
    right:0
  }

  .mapboxgl-ctrl-top-left>.mapboxgl-ctrl-attrib.mapboxgl-compact:after{
    top:0;
    left:0
  }

  .mapboxgl-ctrl-bottom-left>.mapboxgl-ctrl-attrib.mapboxgl-compact:after{
    bottom:0;
    left:0
  }
}

@media screen and (-ms-high-contrast:active){
  .mapboxgl-ctrl-attrib.mapboxgl-compact:after{
    background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' fill='%23fff'%3E%3Cpath d='M4 10a6 6 0 1012 0 6 6 0 10-12 0m5-3a1 1 0 102 0 1 1 0 10-2 0m0 3a1 1 0 112 0v3a1 1 0 11-2 0'/%3E%3C/svg%3E")
  }
}

@media screen and (-ms-high-contrast:black-on-white){
  .mapboxgl-ctrl-attrib.mapboxgl-compact:after{
    background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd'%3E%3Cpath d='M4 10a6 6 0 1012 0 6 6 0 10-12 0m5-3a1 1 0 102 0 1 1 0 10-2 0m0 3a1 1 0 112 0v3a1 1 0 11-2 0'/%3E%3C/svg%3E")
  }
}

.mapboxgl-ctrl-attrib a{
  color:rgba(0,0,0,.75);
  text-decoration:none
}

.mapboxgl-ctrl-attrib a:hover{
  color:inherit;
  text-decoration:underline
}

.mapboxgl-ctrl-attrib .mapbox-improve-map{
  font-weight:700;
  margin-left:2px
}

.mapboxgl-attrib-empty{
  display:none
}

.mapboxgl-ctrl-scale{
  background-color:hsla(0,0%,100%,.75);
  font-size:10px;
  border:2px solid #333;
  border-top:#333;
  padding:0 5px;
  color:#333;
  box-sizing:border-box
}

.mapboxgl-popup{
  position:absolute;
  top:0;
  left:0;
  display:flex;
  will-change:transform;
  pointer-events:none
}

.mapboxgl-popup-anchor-top,.mapboxgl-popup-anchor-top-left,.mapboxgl-popup-anchor-top-right{
  flex-direction:column
}

.mapboxgl-popup-anchor-bottom,.mapboxgl-popup-anchor-bottom-left,.mapboxgl-popup-anchor-bottom-right{
  flex-direction:column-reverse
}

.mapboxgl-popup-anchor-left{
  flex-direction:row
}

.mapboxgl-popup-anchor-right{
  flex-direction:row-reverse
}

.mapboxgl-popup-tip{
  width:0;
  height:0;
  border:10px solid transparent;
  z-index:1
}

.mapboxgl-popup-anchor-top .mapboxgl-popup-tip{
  align-self:center;
  border-top:none;
  border-bottom-color:#fff
}

.mapboxgl-popup-anchor-top-left .mapboxgl-popup-tip{
  align-self:flex-start;
  border-top:none;
  border-left:none;
  border-bottom-color:#fff
}

.mapboxgl-popup-anchor-top-right .mapboxgl-popup-tip{
  align-self:flex-end;
  border-top:none;
  border-right:none;
  border-bottom-color:#fff
}

.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip{
  align-self:center;
  border-bottom:none;
  border-top-color:#fff
}

.mapboxgl-popup-anchor-bottom-left .mapboxgl-popup-tip{
  align-self:flex-start;
  border-bottom:none;
  border-left:none;
  border-top-color:#fff
}

.mapboxgl-popup-anchor-bottom-right .mapboxgl-popup-tip{
  align-self:flex-end;
  border-bottom:none;
  border-right:none;
  border-top-color:#fff
}

.mapboxgl-popup-anchor-left .mapboxgl-popup-tip{
  align-self:center;
  border-left:none;
  border-right-color:#fff
}

.mapboxgl-popup-anchor-right .mapboxgl-popup-tip{
  align-self:center;
  border-right:none;
  border-left-color:#fff
}

.mapboxgl-popup-close-button{
  position:absolute;
  right:0;
  top:0;
  border:0;
  border-radius:0 3px 0 0;
  cursor:pointer;
  background-color:transparent
}

.mapboxgl-popup-close-button:hover{
  background-color:rgba(0,0,0,.05)
}

.mapboxgl-popup-content{
  position:relative;
  background:#fff;
  border-radius:3px;
  box-shadow:0 1px 2px rgba(0,0,0,.1);
  padding:10px 10px 15px;
  pointer-events:auto
}

.mapboxgl-popup-anchor-top-left .mapboxgl-popup-content{
  border-top-left-radius:0
}

.mapboxgl-popup-anchor-top-right .mapboxgl-popup-content{
  border-top-right-radius:0
}

.mapboxgl-popup-anchor-bottom-left .mapboxgl-popup-content{
  border-bottom-left-radius:0
}

.mapboxgl-popup-anchor-bottom-right .mapboxgl-popup-content{
  border-bottom-right-radius:0
}

.mapboxgl-popup-track-pointer{
  display:none
}

.mapboxgl-popup-track-pointer *{
  pointer-events:none;
  -webkit-user-select:none;
     -moz-user-select:none;
      -ms-user-select:none;
          user-select:none
}

.mapboxgl-map:hover .mapboxgl-popup-track-pointer{
  display:flex
}

.mapboxgl-map:active .mapboxgl-popup-track-pointer{
  display:none
}

.mapboxgl-marker{
  position:absolute;
  top:0;
  left:0;
  will-change:transform
}

.mapboxgl-user-location-dot,.mapboxgl-user-location-dot:before{
  background-color:#1da1f2;
  width:15px;
  height:15px;
  border-radius:50%
}

.mapboxgl-user-location-dot:before{
  content:"";
  position:absolute;
  -webkit-animation:mapboxgl-user-location-dot-pulse 2s infinite;
  animation:mapboxgl-user-location-dot-pulse 2s infinite
}

.mapboxgl-user-location-dot:after{
  border-radius:50%;
  border:2px solid #fff;
  content:"";
  height:19px;
  left:-2px;
  position:absolute;
  top:-2px;
  width:19px;
  box-sizing:border-box;
  box-shadow:0 0 3px rgba(0,0,0,.35)
}

@-webkit-keyframes mapboxgl-user-location-dot-pulse{
  0%{
    -webkit-transform:scale(1);
    opacity:1
  }

  70%{
    -webkit-transform:scale(3);
    opacity:0
  }

  to{
    -webkit-transform:scale(1);
    opacity:0
  }
}

@keyframes mapboxgl-user-location-dot-pulse{
  0%{
    transform:scale(1);
    opacity:1
  }

  70%{
    transform:scale(3);
    opacity:0
  }

  to{
    transform:scale(1);
    opacity:0
  }
}

.mapboxgl-user-location-dot-stale{
  background-color:#aaa
}

.mapboxgl-user-location-dot-stale:after{
  display:none
}

.mapboxgl-user-location-accuracy-circle{
  background-color:rgba(29,161,242,.2);
  width:1px;
  height:1px;
  border-radius:100%
}

.mapboxgl-crosshair,.mapboxgl-crosshair .mapboxgl-interactive,.mapboxgl-crosshair .mapboxgl-interactive:active{
  cursor:crosshair
}

.mapboxgl-boxzoom{
  position:absolute;
  top:0;
  left:0;
  width:0;
  height:0;
  background:#fff;
  border:2px dotted #202020;
  opacity:.5
}

@media print{
  .mapbox-improve-map{
    display:none
  }
}

/* purgecss end ignore */`)();
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\n:root{;;--header-2-height:4em\n    --bar: #343a45\n}\n\n.bx--btn{\n  height:1em!important\n}\n\n.icon{\n  border:1px solid rgb(113, 113, 113);\n  aspect-ratio:1/1;\n  height:1em;\n  width:var(--header-2-height) !important\n}\n\ndrawheader{\n  left:0;\n  right:0;\n  margin-left:0;\n  margin-right:0px;\n  padding-left:0px;\n  padding-right:0px;\n  width:100vw!important;\n  height:1em!important;\n  float:left !important;\n  justify-content:center;\n  padding:0!important;\n  background-color:red\n}\n\nsmall{\n  font:revert;\n  font-size:revert\n}\n\n.bx--btn--secondary{\n  background-color:var(--bar);\n  filter:brightness(0.85)\n}\n\n.trash{\n  background-color:red;\n  color:white;\n  float:right;\n  right:0;\n  margin-left:auto\n}\n\n/* purgecss end ignore */")();
const css = {
  code: ":root{;;--header-2-height:4em\n    --bar: #343a45}.bx--btn{height:1em!important}.icon{border:1px solid rgb(113, 113, 113);aspect-ratio:1/1;height:1em;width:var(--header-2-height) !important}drawheader{left:0;right:0;margin-left:0;margin-right:0px;padding-left:0px;padding-right:0px;width:100vw!important;height:1em!important;float:left !important;justify-content:center;padding:0!important;background-color:red}small{font:revert;font-size:revert}.bx--btn--secondary{background-color:var(--bar);filter:brightness(0.85)}.trash{background-color:red;color:white;float:right;right:0;margin-left:auto}",
  map: null
};
const Draw = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_mapobject;
  let $selected, $$unsubscribe_selected;
  let $$unsubscribe_mapfunctions;
  let $$unsubscribe_maplayer;
  let $$unsubscribe_mapsource;
  let $query, $$unsubscribe_query;
  let $draw_enabled, $$unsubscribe_draw_enabled;
  let $draw_type, $$unsubscribe_draw_type;
  let $$unsubscribe_radiusInKm;
  $$unsubscribe_mapobject = subscribe(mapobject, (value) => value);
  $$unsubscribe_selected = subscribe(selected, (value) => $selected = value);
  $$unsubscribe_mapfunctions = subscribe(mapfunctions, (value) => value);
  $$unsubscribe_maplayer = subscribe(maplayer, (value) => value);
  $$unsubscribe_mapsource = subscribe(mapsource, (value) => value);
  $$unsubscribe_query = subscribe(query, (value) => $query = value);
  $$unsubscribe_draw_enabled = subscribe(draw_enabled, (value) => $draw_enabled = value);
  $$unsubscribe_draw_type = subscribe(draw_type, (value) => $draw_type = value);
  $$unsubscribe_radiusInKm = subscribe(radiusInKm, (value) => value);
  $$result.css.add(css);
  $$unsubscribe_mapobject();
  $$unsubscribe_selected();
  $$unsubscribe_mapfunctions();
  $$unsubscribe_maplayer();
  $$unsubscribe_mapsource();
  $$unsubscribe_query();
  $$unsubscribe_draw_enabled();
  $$unsubscribe_draw_type();
  $$unsubscribe_radiusInKm();
  return `





<main class="${"w-screen min-h-screen flex flex-col"}"><div id="${"map"}">${validate_component(AreaMap, "AreaMap").$$render($$result, { drawing_tools: true }, {}, {})}</div>
  <drawheader>${validate_component(DrawButtons, "DrawButtons").$$render($$result, {}, {}, {})}
    ${validate_component(EditButtons, "EditButtons").$$render($$result, {}, {}, {})}

    ${validate_component(Button, "Button").$$render($$result, { disabled: $query.hasOwnProperty("error") }, {}, {
    default: () => {
      return `Build Profile
    `;
    }
  })}
    ${validate_component(Button, "Button").$$render($$result, {
    kind: "warning",
    class: "bx--btn bx--btn--secondary bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--bottom bx--tooltip--align-center bx--btn--sm icon trash"
  }, {}, {
    default: () => {
      return `<span class="${"bx--assistive-text"}">Clear All</span>
      <svg width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24 "}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill="${"currentColor"}" d="${"M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"}"></path></svg>`;
    }
  })}</drawheader>

  ${validate_component(InfoBox, "InfoBox").$$render($$result, { open: $selected.length < 2 }, {}, {
    default: () => {
      return `${$draw_enabled ? `${validate_component(ToastNotification, "ToastNotification").$$render($$result, {
        style: "width:100%",
        hideCloseButton: true,
        kind: "warning",
        title: "Zoom in to begin drawing. ",
        subtitle: "The map needs to be at least on zoom level 9 to begin drawing. ",
        caption: ""
      }, {}, {})}` : `${$draw_type === "radius" ? `${validate_component(ItemAccordion, "ItemAccordion").$$render($$result, {
        title: "Draw Area",
        subtitle: "Distance Selection Tool"
      }, {}, {
        default: () => {
          return `${validate_component(Slider, "Slider").$$render($$result, {
            ariaLabelInput: "Radius Selection (km)",
            id: "slider",
            labelText: "Radius Selection (km)",
            max: 30,
            min: 0.2,
            step: 0.2,
            stepMuliplier: 4,
            value: 5
          }, {}, {})}

        <p>Move the slider below to select the radius you are interested in, and
          then click to select an area.
        </p>
        <br>`;
        }
      })}` : `${$draw_type === "click" ? `${validate_component(ItemAccordion, "ItemAccordion").$$render($$result, {
        title: "Draw Area",
        subtitle: "Click Selection"
      }, {}, {
        default: () => {
          return `<p>Click on any areas you are interested in.</p>`;
        }
      })}` : `${$draw_type === "poly" ? `${validate_component(ItemAccordion, "ItemAccordion").$$render($$result, {
        title: "Draw Area",
        subtitle: "Polygon Selection"
      }, {}, {
        default: () => {
          return `<p>Click on each corner of the shape you want to build, and then back
          onto the first vertex to select.
        </p>`;
        }
      })}` : ``}`}`}`}

    ${function(__value) {
        if (is_promise(__value)) {
          __value.then(null, noop);
          return ``;
        }
        return function(value) {
          return `
      ${value.error != null ? `${validate_component(ToastNotification, "ToastNotification").$$render($$result, {
            style: "width:100%",
            hideCloseButton: true,
            kind: "error",
            subtitle: value.error_title,
            caption: value.error
          }, {}, {})}` : `${value.oa ? `${validate_component(ItemAccordion, "ItemAccordion").$$render($$result, {
            title: "",
            subtitle: "Compressed Selection"
          }, {}, {
            default: () => {
              return `<small><b>MSOA: </b> <span>${escape(value.properties.msoa.length)}</span> <br>
            <b>LSOA: </b> <span>${escape(value.properties.lsoa.length)}</span> <br>
            <b>OA: </b> <span>${escape(value.properties.oa.length)}</span> <br>
            parent tile: ${escape(value.properties.tile)}; # original output areas ${escape(value.properties.original)}</small>`;
            }
          })}` : ``}`}
    `;
        }(__value);
      }($query)}`;
    }
  })}
</main>`;
});
export { Draw as default };
