import { c as create_ssr_component, b as compute_rest_props, d as spread, e as escape_object, r as each, k as add_classes, v as validate_component, j as add_attribute, m as missing_component, f as escape_attribute_value, l as compute_slots, s as setContext, h as escape, p as createEventDispatcher, o as subscribe, t as is_promise, n as noop } from "../../../chunks/index-092899d0.js";
import { G as Grid } from "../../../chunks/Grid-79c680c5.js";
import "../../../chunks/HeaderSearch.svelte_svelte_type_style_lang-01832d64.js";
import { R as Row, C as Column } from "../../../chunks/Column-3c16437e.js";
import { C as Close20, P as PostcodeSearch } from "../../../chunks/PostcodeSearch-c3dd7593.js";
import DrawButtons from "./Toolbar/DrawButtons.svelte.js";
import EditButtons from "./Toolbar/EditButtons.svelte.js";
import ProgressButtons from "./Toolbar/ProgressButtons.svelte.js";
import InfoBox from "./Toolbar/InfoBox.svelte.js";
import ItemAccordion from "./Toolbar/ItemAccordion.svelte.js";
import AreaMap from "./AreaMap.svelte.js";
import { mapobject, selected, mapfunctions, maplayer, mapsource, draw_enabled, draw_type, radiusInKm, query } from "../../endpoints/draw/mapstore.js";
import "d3-array";
import "@mapbox/tilebelt";
import "../../../chunks/index-cc46cb38.js";
import "../../../chunks/Button-1959039d.js";
import "postcss";
import "../../../chunks/AccordionItem-7eda311d.js";
import "maplibre-gl";
import "../../endpoints/draw/MapDraw.js";
const BreadcrumbSkeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["noTrailingSlash", "count"]);
  let { noTrailingSlash = false } = $$props;
  let { count = 3 } = $$props;
  if ($$props.noTrailingSlash === void 0 && $$bindings.noTrailingSlash && noTrailingSlash !== void 0)
    $$bindings.noTrailingSlash(noTrailingSlash);
  if ($$props.count === void 0 && $$bindings.count && count !== void 0)
    $$bindings.count(count);
  return `
<div${spread([escape_object($$restProps)], {
    classes: "bx--skeleton bx--breadcrumb " + (noTrailingSlash ? "bx--breadcrumb--no-trailing-slash" : "")
  })}>${each(Array.from({ length: count }, (_, i) => i), (item) => {
    return `<div${add_classes("bx--breadcrumb-item".trim())}><span${add_classes("bx--link".trim())}>\xA0</span>
    </div>`;
  })}</div>`;
});
const Breadcrumb = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["noTrailingSlash", "skeleton"]);
  let { noTrailingSlash = false } = $$props;
  let { skeleton = false } = $$props;
  if ($$props.noTrailingSlash === void 0 && $$bindings.noTrailingSlash && noTrailingSlash !== void 0)
    $$bindings.noTrailingSlash(noTrailingSlash);
  if ($$props.skeleton === void 0 && $$bindings.skeleton && skeleton !== void 0)
    $$bindings.skeleton(skeleton);
  return `
${skeleton ? `${validate_component(BreadcrumbSkeleton, "BreadcrumbSkeleton").$$render($$result, Object.assign({ noTrailingSlash }, $$restProps), {}, {})}` : `<nav${spread([{ "aria-label": "Breadcrumb" }, escape_object($$restProps)], {})}><ol${add_classes(("bx--breadcrumb " + (noTrailingSlash ? "bx--breadcrumb--no-trailing-slash" : "")).trim())}>${slots.default ? slots.default({}) : ``}</ol></nav>`}`;
});
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "href", "inline", "icon", "disabled", "visited", "ref"]);
  let $$slots = compute_slots(slots);
  let { size = void 0 } = $$props;
  let { href = void 0 } = $$props;
  let { inline = false } = $$props;
  let { icon = void 0 } = $$props;
  let { disabled = false } = $$props;
  let { visited = false } = $$props;
  let { ref = null } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0)
    $$bindings.inline(inline);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.visited === void 0 && $$bindings.visited && visited !== void 0)
    $$bindings.visited(visited);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  return `
${disabled ? `<p${spread([escape_object($$restProps)], {
    classes: "bx--link " + (disabled ? "bx--link--disabled" : "") + " " + (inline ? "bx--link--inline" : "") + " " + (visited ? "bx--link--visited" : "")
  })}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ``}
    ${!inline && ($$slots.icon || icon) ? `<div${add_classes("bx--link__icon".trim())}>${slots.icon ? slots.icon({}) : `
          ${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})}
        `}</div>` : ``}</p>` : `<a${spread([
    {
      rel: escape_attribute_value($$restProps.target === "_blank" ? "noopener noreferrer" : void 0)
    },
    { href: escape_attribute_value(href) },
    escape_object($$restProps)
  ], {
    classes: "bx--link " + (disabled ? "bx--link--disabled" : "") + " " + (inline ? "bx--link--inline" : "") + " " + (visited ? "bx--link--visited" : "") + " " + (size === "sm" ? "bx--link--sm" : "") + " " + (size === "lg" ? "bx--link--lg" : "")
  })}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ``}
    ${!inline && ($$slots.icon || icon) ? `<div${add_classes("bx--link__icon".trim())}>${slots.icon ? slots.icon({}) : `
          ${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})}
        `}</div>` : ``}</a>`}`;
});
const BreadcrumbItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "isCurrentPage"]);
  let { href = void 0 } = $$props;
  let { isCurrentPage = false } = $$props;
  setContext("BreadcrumbItem", {});
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.isCurrentPage === void 0 && $$bindings.isCurrentPage && isCurrentPage !== void 0)
    $$bindings.isCurrentPage(isCurrentPage);
  return `
<li${spread([escape_object($$restProps)], {
    classes: "bx--breadcrumb-item " + (isCurrentPage && $$restProps["aria-current"] !== "page" ? "bx--breadcrumb-item--current" : "")
  })}>${href ? `${validate_component(Link, "Link").$$render($$result, {
    href,
    "aria-current": $$restProps["aria-current"]
  }, {}, {
    default: () => {
      return `${slots.default ? slots.default({
        props: {
          "aria-current": $$restProps["aria-current"],
          class: "bx--link"
        }
      }) : ``}`;
    }
  })}` : `${slots.default ? slots.default({
    props: {
      "aria-current": $$restProps["aria-current"],
      class: "bx--link"
    }
  }) : ``}`}</li>`;
});
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
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\n:root{\n  --header-2-height:clamp(2rem, 4vh, 60px);\n  --header-1-height:clamp(1rem, 5vh, 40px);\n  --bar:#343a45\n}\n\n.icon{\n  border:1px solid rgb(113, 113, 113);\n  aspect-ratio:1/1;\n  height:auto;\n  width:var(--header-2-height) !important\n}\n\nheader.svelte-10r4fzz{\n  display:block;\n  position:fixed;\n  width:100vw;\n  margin:0 !important\n}\n\n.bx--grid{\n  left:0;\n  right:0;\n  margin-left:0;\n  margin-right:0px;\n  padding-left:0px;\n  padding-right:0px;\n  width:100vw\n}\n\n#head1{\n  width:100vw;\n  height:var(--header-1-height) !important;\n  background-color:whitesmoke;\n  margin:0\n}\n\n#head2{\n  left:0;\n  right:0;\n  margin-left:15px;\n  margin-right:15px;\n  padding-left:0px;\n  padding-right:30px;\n  width:100%;\n  background-color:var(--bar);\n  margin-bottom:1.2rem\n}\n\n.logo.svelte-10r4fzz{\n  height:calc(var(--header-1-height) * 0.7) !important;\n  width:auto\n}\n\n.bx--col{\n  padding:0 !important;\n  display:flex;\n  float:right;\n  right:0;\n  margin:auto;\n  flex-grow:3 !important;\n  text-align:right;\n  justify-content:space-between\n}\n\nsmall{\n  font:revert;\n  font-size:revert\n}\n\n.bx--btn--secondary{\n  background-color:var(--bar);\n  filter:brightness(0.85)\n}\n\nheader{\n  height:100px\n}\n\n/* purgecss end ignore */")();
const css = {
  code: ":root{--header-2-height:clamp(2rem, 4vh, 60px);--header-1-height:clamp(1rem, 5vh, 40px);--bar:#343a45}.icon{border:1px solid rgb(113, 113, 113);aspect-ratio:1/1;height:auto;width:var(--header-2-height) !important}header.svelte-10r4fzz{display:block;position:fixed;width:100vw;margin:0 !important}.bx--grid{left:0;right:0;margin-left:0;margin-right:0px;padding-left:0px;padding-right:0px;width:100vw}#head1{width:100vw;height:var(--header-1-height) !important;background-color:whitesmoke;margin:0}#head2{left:0;right:0;margin-left:15px;margin-right:15px;padding-left:0px;padding-right:30px;width:100%;background-color:var(--bar);margin-bottom:1.2rem}.logo.svelte-10r4fzz{height:calc(var(--header-1-height) * 0.7) !important;width:auto}.bx--col{padding:0 !important;display:flex;float:right;right:0;margin:auto;flex-grow:3 !important;text-align:right;justify-content:space-between}small{font:revert;font-size:revert}.bx--btn--secondary{background-color:var(--bar);filter:brightness(0.85)}header{height:100px}",
  map: null
};
const Draw = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_mapobject;
  let $selected, $$unsubscribe_selected;
  let $$unsubscribe_mapfunctions;
  let $$unsubscribe_maplayer;
  let $$unsubscribe_mapsource;
  let $draw_enabled, $$unsubscribe_draw_enabled;
  let $draw_type, $$unsubscribe_draw_type;
  let $$unsubscribe_radiusInKm;
  let $query, $$unsubscribe_query;
  $$unsubscribe_mapobject = subscribe(mapobject, (value) => value);
  $$unsubscribe_selected = subscribe(selected, (value) => $selected = value);
  $$unsubscribe_mapfunctions = subscribe(mapfunctions, (value) => value);
  $$unsubscribe_maplayer = subscribe(maplayer, (value) => value);
  $$unsubscribe_mapsource = subscribe(mapsource, (value) => value);
  $$unsubscribe_draw_enabled = subscribe(draw_enabled, (value) => $draw_enabled = value);
  $$unsubscribe_draw_type = subscribe(draw_type, (value) => $draw_type = value);
  $$unsubscribe_radiusInKm = subscribe(radiusInKm, (value) => value);
  $$unsubscribe_query = subscribe(query, (value) => $query = value);
  let { width = "100%" } = $$props;
  let { height = "100%" } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  $$result.css.add(css);
  $$unsubscribe_mapobject();
  $$unsubscribe_selected();
  $$unsubscribe_mapfunctions();
  $$unsubscribe_maplayer();
  $$unsubscribe_mapsource();
  $$unsubscribe_draw_enabled();
  $$unsubscribe_draw_type();
  $$unsubscribe_radiusInKm();
  $$unsubscribe_query();
  return `
<main class="${"w-screen min-h-screen flex flex-col"}"><div id="${"map"}">${validate_component(AreaMap, "AreaMap").$$render($$result, { drawing_tools: true }, {}, {})}</div>
  <header class="${"svelte-10r4fzz"}">${validate_component(Grid, "Grid").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, { id: "head1" }, {}, {
        default: () => {
          return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
            default: () => {
              return `<img style="${"margin-left:10px;margin-top:4px"}" class="${"logo svelte-10r4fzz"}" src="${"https://cdn.ons.gov.uk/assets/images/ons-logo/v2/ons-logo.svg"}" alt="${"Office for National Statistics logo - Homepage"}">`;
            }
          })}
        ${validate_component(Column, "Column").$$render($$result, { style: "float:right;margin-right:2px" }, {}, {
            default: () => {
              return `${validate_component(Breadcrumb, "Breadcrumb").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { href: "/draw" }, {}, {
                    default: () => {
                      return `Draw Area`;
                    }
                  })}
            ${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { href: "/" }, {}, {
                    default: () => {
                      return `Save + Load Area`;
                    }
                  })}
            ${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { href: "/" }, {}, {
                    default: () => {
                      return `Build Profile`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}
      ${validate_component(Row, "Row").$$render($$result, {
        style: "background-color:#13518d;height:calc(.085*var(--header-1-height));margin-bottom:0px;"
      }, {}, {})}

      ${validate_component(Row, "Row").$$render($$result, { id: "head2" }, {}, {
        default: () => {
          return `
        ${validate_component(Column, "Column").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(DrawButtons, "DrawButtons").$$render($$result, {}, {}, {})}`;
            }
          })}${validate_component(Column, "Column").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(EditButtons, "EditButtons").$$render($$result, {}, {}, {})}`;
            }
          })}${validate_component(Column, "Column").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(PostcodeSearch, "PostcodeSearch").$$render($$result, {}, {}, {})}
          
          ${validate_component(ProgressButtons, "ProgressButtons").$$render($$result, {}, {}, {})}`;
            }
          })}`;
        }
      })}`;
    }
  })}

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

          <p>Move the slider below to select the radius you are interested in,
            and then click to select an area.
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
              return `<small><b>MSOA: </b> <span>${escape(value.msoa.length)}</span> <br>
              <b>LSOA: </b> <span>${escape(value.lsoa.length)}</span> <br>
              <b>OA: </b> <span>${escape(value.oa.length)}</span> <br>
              parent tile: ${escape(value.tile)}; # original output areas ${escape(value.original)}</small>`;
            }
          })}` : ``}`}
      `;
        }(__value);
      }($query)}`;
    }
  })}</header>
</main>`;
});
export { Draw as default };
