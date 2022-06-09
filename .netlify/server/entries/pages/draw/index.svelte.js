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
  default: () => Draw
});
module.exports = __toCommonJS(stdin_exports);
var import_index_092899d0 = require("../../../chunks/index-092899d0.js");
var import_Grid_79c680c5 = require("../../../chunks/Grid-79c680c5.js");
var import_HeaderSearch_svelte_svelte_type_style_lang_1e6107db = require("../../../chunks/HeaderSearch.svelte_svelte_type_style_lang-1e6107db.js");
var import_flatpickr = require("flatpickr");
var import_Column_3c16437e = require("../../../chunks/Column-3c16437e.js");
var import_PostcodeSearch_f538c78c = require("../../../chunks/PostcodeSearch-f538c78c.js");
var import_DrawButtons_svelte = __toESM(require("./Toolbar/DrawButtons.svelte.js"));
var import_EditButtons_svelte = __toESM(require("./Toolbar/EditButtons.svelte.js"));
var import_ProgressButtons_svelte = __toESM(require("./Toolbar/ProgressButtons.svelte.js"));
var import_InfoBox_svelte = __toESM(require("./Toolbar/InfoBox.svelte.js"));
var import_ItemAccordion_svelte = __toESM(require("./Toolbar/ItemAccordion.svelte.js"));
var import_AreaMap_svelte = __toESM(require("./AreaMap.svelte.js"));
var import_mapstore = require("../../endpoints/draw/mapstore.js");
var import_d3_array = require("d3-array");
var import_tilebelt = require("@mapbox/tilebelt");
var import_index_cc46cb38 = require("../../../chunks/index-cc46cb38.js");
var import_Button_1959039d = require("../../../chunks/Button-1959039d.js");
var import_postcss = require("postcss");
var import_AccordionItem_7eda311d = require("../../../chunks/AccordionItem-7eda311d.js");
var import_maplibre_gl = require("maplibre-gl");
var import_MapDraw = require("../../endpoints/draw/MapDraw.js");
const BreadcrumbSkeleton = (0, import_index_092899d0.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_092899d0.b)($$props, ["noTrailingSlash", "count"]);
  let { noTrailingSlash = false } = $$props;
  let { count = 3 } = $$props;
  if ($$props.noTrailingSlash === void 0 && $$bindings.noTrailingSlash && noTrailingSlash !== void 0)
    $$bindings.noTrailingSlash(noTrailingSlash);
  if ($$props.count === void 0 && $$bindings.count && count !== void 0)
    $$bindings.count(count);
  return `
<div${(0, import_index_092899d0.d)([(0, import_index_092899d0.e)($$restProps)], {
    classes: "bx--skeleton bx--breadcrumb " + (noTrailingSlash ? "bx--breadcrumb--no-trailing-slash" : "")
  })}>${(0, import_index_092899d0.r)(Array.from({ length: count }, (_, i) => i), (item) => {
    return `<div${(0, import_index_092899d0.k)("bx--breadcrumb-item".trim())}><span${(0, import_index_092899d0.k)("bx--link".trim())}>\xA0</span>
    </div>`;
  })}</div>`;
});
const Breadcrumb = (0, import_index_092899d0.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_092899d0.b)($$props, ["noTrailingSlash", "skeleton"]);
  let { noTrailingSlash = false } = $$props;
  let { skeleton = false } = $$props;
  if ($$props.noTrailingSlash === void 0 && $$bindings.noTrailingSlash && noTrailingSlash !== void 0)
    $$bindings.noTrailingSlash(noTrailingSlash);
  if ($$props.skeleton === void 0 && $$bindings.skeleton && skeleton !== void 0)
    $$bindings.skeleton(skeleton);
  return `
${skeleton ? `${(0, import_index_092899d0.v)(BreadcrumbSkeleton, "BreadcrumbSkeleton").$$render($$result, Object.assign({ noTrailingSlash }, $$restProps), {}, {})}` : `<nav${(0, import_index_092899d0.d)([{ "aria-label": "Breadcrumb" }, (0, import_index_092899d0.e)($$restProps)], {})}><ol${(0, import_index_092899d0.k)(("bx--breadcrumb " + (noTrailingSlash ? "bx--breadcrumb--no-trailing-slash" : "")).trim())}>${slots.default ? slots.default({}) : ``}</ol></nav>`}`;
});
const Link = (0, import_index_092899d0.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_092899d0.b)($$props, ["size", "href", "inline", "icon", "disabled", "visited", "ref"]);
  let $$slots = (0, import_index_092899d0.l)(slots);
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
${disabled ? `<p${(0, import_index_092899d0.d)([(0, import_index_092899d0.e)($$restProps)], {
    classes: "bx--link " + (disabled ? "bx--link--disabled" : "") + " " + (inline ? "bx--link--inline" : "") + " " + (visited ? "bx--link--visited" : "")
  })}${(0, import_index_092899d0.j)("this", ref, 0)}>${slots.default ? slots.default({}) : ``}
    ${!inline && ($$slots.icon || icon) ? `<div${(0, import_index_092899d0.k)("bx--link__icon".trim())}>${slots.icon ? slots.icon({}) : `
          ${(0, import_index_092899d0.v)(icon || import_index_092899d0.m, "svelte:component").$$render($$result, {}, {}, {})}
        `}</div>` : ``}</p>` : `<a${(0, import_index_092899d0.d)([
    {
      rel: (0, import_index_092899d0.f)($$restProps.target === "_blank" ? "noopener noreferrer" : void 0)
    },
    { href: (0, import_index_092899d0.f)(href) },
    (0, import_index_092899d0.e)($$restProps)
  ], {
    classes: "bx--link " + (disabled ? "bx--link--disabled" : "") + " " + (inline ? "bx--link--inline" : "") + " " + (visited ? "bx--link--visited" : "") + " " + (size === "sm" ? "bx--link--sm" : "") + " " + (size === "lg" ? "bx--link--lg" : "")
  })}${(0, import_index_092899d0.j)("this", ref, 0)}>${slots.default ? slots.default({}) : ``}
    ${!inline && ($$slots.icon || icon) ? `<div${(0, import_index_092899d0.k)("bx--link__icon".trim())}>${slots.icon ? slots.icon({}) : `
          ${(0, import_index_092899d0.v)(icon || import_index_092899d0.m, "svelte:component").$$render($$result, {}, {}, {})}
        `}</div>` : ``}</a>`}`;
});
const BreadcrumbItem = (0, import_index_092899d0.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_092899d0.b)($$props, ["href", "isCurrentPage"]);
  let { href = void 0 } = $$props;
  let { isCurrentPage = false } = $$props;
  (0, import_index_092899d0.s)("BreadcrumbItem", {});
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.isCurrentPage === void 0 && $$bindings.isCurrentPage && isCurrentPage !== void 0)
    $$bindings.isCurrentPage(isCurrentPage);
  return `
<li${(0, import_index_092899d0.d)([(0, import_index_092899d0.e)($$restProps)], {
    classes: "bx--breadcrumb-item " + (isCurrentPage && $$restProps["aria-current"] !== "page" ? "bx--breadcrumb-item--current" : "")
  })}>${href ? `${(0, import_index_092899d0.v)(Link, "Link").$$render($$result, {
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
const NotificationButton = (0, import_index_092899d0.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_092899d0.b)($$props, ["notificationType", "icon", "title", "iconDescription"]);
  let { notificationType = "toast" } = $$props;
  let { icon = import_PostcodeSearch_f538c78c.C } = $$props;
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
<button${(0, import_index_092899d0.d)([
    { type: "button" },
    {
      "aria-label": (0, import_index_092899d0.f)(iconDescription)
    },
    {
      title: (0, import_index_092899d0.f)(iconDescription)
    },
    (0, import_index_092899d0.e)($$restProps)
  ], {
    classes: (notificationType === "toast" ? "bx--toast-notification__close-button" : "") + " " + (notificationType === "inline" ? "bx--inline-notification__close-button" : "")
  })}>${(0, import_index_092899d0.v)(icon || import_index_092899d0.m, "svelte:component").$$render($$result, {
    title,
    class: "bx--" + notificationType + "-notification__close-icon"
  }, {}, {})}</button>`;
});
const CheckmarkFilled20 = (0, import_index_092899d0.c)(($$result, $$props, $$bindings, slots) => {
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
<svg${(0, import_index_092899d0.d)([
    { "data-carbon-icon": "CheckmarkFilled20" },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 20 20" },
    { fill: "currentColor" },
    { width: "20" },
    { height: "20" },
    { class: (0, import_index_092899d0.f)(className) },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: (0, import_index_092899d0.f)(style) },
    { id: (0, import_index_092899d0.f)(id) },
    (0, import_index_092899d0.e)(attributes)
  ], {})}><path d="${"M10,1c-4.9,0-9,4.1-9,9s4.1,9,9,9s9-4,9-9S15,1,10,1z M8.7,13.5l-3.2-3.2l1-1l2.2,2.2l4.8-4.8l1,1L8.7,13.5z"}"></path><path fill="${"none"}" d="${"M8.7,13.5l-3.2-3.2l1-1l2.2,2.2l4.8-4.8l1,1L8.7,13.5z"}" data-icon-path="${"inner-path"}" opacity="${"0"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${(0, import_index_092899d0.h)(title)}</title>` : ``}
  `}</svg>`;
});
const ErrorFilled20 = (0, import_index_092899d0.c)(($$result, $$props, $$bindings, slots) => {
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
<svg${(0, import_index_092899d0.d)([
    { "data-carbon-icon": "ErrorFilled20" },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 20 20" },
    { fill: "currentColor" },
    { width: "20" },
    { height: "20" },
    { class: (0, import_index_092899d0.f)(className) },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: (0, import_index_092899d0.f)(style) },
    { id: (0, import_index_092899d0.f)(id) },
    (0, import_index_092899d0.e)(attributes)
  ], {})}><path d="${"M10,1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S15,1,10,1z M13.5,14.5l-8-8l1-1l8,8L13.5,14.5z"}"></path><path d="${"M13.5,14.5l-8-8l1-1l8,8L13.5,14.5z"}" data-icon-path="${"inner-path"}" opacity="${"0"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${(0, import_index_092899d0.h)(title)}</title>` : ``}
  `}</svg>`;
});
const InformationFilled20 = (0, import_index_092899d0.c)(($$result, $$props, $$bindings, slots) => {
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
<svg${(0, import_index_092899d0.d)([
    {
      "data-carbon-icon": "InformationFilled20"
    },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 32 32" },
    { fill: "currentColor" },
    { width: "20" },
    { height: "20" },
    { class: (0, import_index_092899d0.f)(className) },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: (0, import_index_092899d0.f)(style) },
    { id: (0, import_index_092899d0.f)(id) },
    (0, import_index_092899d0.e)(attributes)
  ], {})}><path fill="${"none"}" d="${"M16,8a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,8Zm4,13.875H17.125v-8H13v2.25h1.875v5.75H12v2.25h8Z"}" data-icon-path="${"inner-path"}"></path><path d="${"M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,6a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,8Zm4,16.125H12v-2.25h2.875v-5.75H13v-2.25h4.125v8H20Z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${(0, import_index_092899d0.h)(title)}</title>` : ``}
  `}</svg>`;
});
const InformationSquareFilled20 = (0, import_index_092899d0.c)(($$result, $$props, $$bindings, slots) => {
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
<svg${(0, import_index_092899d0.d)([
    {
      "data-carbon-icon": "InformationSquareFilled20"
    },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 32 32" },
    { fill: "currentColor" },
    { width: "20" },
    { height: "20" },
    { class: (0, import_index_092899d0.f)(className) },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: (0, import_index_092899d0.f)(style) },
    { id: (0, import_index_092899d0.f)(id) },
    (0, import_index_092899d0.e)(attributes)
  ], {})}><path fill="${"none"}" d="${"M16,8a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,8Zm4,13.875H17.125v-8H13v2.25h1.875v5.75H12v2.25h8Z"}" data-icon-path="${"inner-path"}"></path><path d="${"M26,4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V6A2,2,0,0,0,26,4ZM16,8a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,8Zm4,16.125H12v-2.25h2.875v-5.75H13v-2.25h4.125v8H20Z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${(0, import_index_092899d0.h)(title)}</title>` : ``}
  `}</svg>`;
});
const WarningFilled20 = (0, import_index_092899d0.c)(($$result, $$props, $$bindings, slots) => {
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
<svg${(0, import_index_092899d0.d)([
    { "data-carbon-icon": "WarningFilled20" },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 20 20" },
    { fill: "currentColor" },
    { width: "20" },
    { height: "20" },
    { class: (0, import_index_092899d0.f)(className) },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: (0, import_index_092899d0.f)(style) },
    { id: (0, import_index_092899d0.f)(id) },
    (0, import_index_092899d0.e)(attributes)
  ], {})}><path d="${"M10,1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S15,1,10,1z M9.2,5h1.5v7H9.2V5z M10,16c-0.6,0-1-0.4-1-1s0.4-1,1-1	s1,0.4,1,1S10.6,16,10,16z"}"></path><path d="${"M9.2,5h1.5v7H9.2V5z M10,16c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S10.6,16,10,16z"}" data-icon-path="${"inner-path"}" opacity="${"0"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${(0, import_index_092899d0.h)(title)}</title>` : ``}
  `}</svg>`;
});
const WarningAltFilled20 = (0, import_index_092899d0.c)(($$result, $$props, $$bindings, slots) => {
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
<svg${(0, import_index_092899d0.d)([
    { "data-carbon-icon": "WarningAltFilled20" },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 32 32" },
    { fill: "currentColor" },
    { width: "20" },
    { height: "20" },
    { class: (0, import_index_092899d0.f)(className) },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: (0, import_index_092899d0.f)(style) },
    { id: (0, import_index_092899d0.f)(id) },
    (0, import_index_092899d0.e)(attributes)
  ], {})}><path fill="${"none"}" d="${"M16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Zm-1.125-5h2.25V12h-2.25Z"}" data-icon-path="${"inner-path"}"></path><path d="${"M16.002,6.1714h-.004L4.6487,27.9966,4.6506,28H27.3494l.0019-.0034ZM14.875,12h2.25v9h-2.25ZM16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Z"}"></path><path d="${"M29,30H3a1,1,0,0,1-.8872-1.4614l13-25a1,1,0,0,1,1.7744,0l13,25A1,1,0,0,1,29,30ZM4.6507,28H27.3493l.002-.0033L16.002,6.1714h-.004L4.6487,27.9967Z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${(0, import_index_092899d0.h)(title)}</title>` : ``}
  `}</svg>`;
});
const NotificationIcon = (0, import_index_092899d0.c)(($$result, $$props, $$bindings, slots) => {
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
  return `${(0, import_index_092899d0.v)(icons[kind] || import_index_092899d0.m, "svelte:component").$$render($$result, {
    title: iconDescription,
    class: "bx--" + notificationType + "-notification__icon"
  }, {}, {})}`;
});
const ToastNotification = (0, import_index_092899d0.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_092899d0.b)($$props, [
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
  (0, import_index_092899d0.p)();
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
${`<div${(0, import_index_092899d0.d)([
    { role: (0, import_index_092899d0.f)(role) },
    { kind: (0, import_index_092899d0.f)(kind) },
    (0, import_index_092899d0.e)($$restProps)
  ], {
    classes: "bx--toast-notification " + (lowContrast ? "bx--toast-notification--low-contrast" : "") + " " + (kind === "error" ? "bx--toast-notification--error" : "") + " " + (kind === "info" ? "bx--toast-notification--info" : "") + " " + (kind === "info-square" ? "bx--toast-notification--info-square" : "") + " " + (kind === "success" ? "bx--toast-notification--success" : "") + " " + (kind === "warning" ? "bx--toast-notification--warning" : "") + " " + (kind === "warning-alt" ? "bx--toast-notification--warning-alt" : "")
  })}>${(0, import_index_092899d0.v)(NotificationIcon, "NotificationIcon").$$render($$result, { kind }, {}, {})}
    <div${(0, import_index_092899d0.k)("bx--toast-notification__details".trim())}><h3${(0, import_index_092899d0.k)("bx--toast-notification__title".trim())}>${slots.title ? slots.title({}) : `${(0, import_index_092899d0.h)(title)}`}</h3>
      <div${(0, import_index_092899d0.k)("bx--toast-notification__subtitle".trim())}>${slots.subtitle ? slots.subtitle({}) : `${(0, import_index_092899d0.h)(subtitle)}`}</div>
      <div${(0, import_index_092899d0.k)("bx--toast-notification__caption".trim())}>${slots.caption ? slots.caption({}) : `${(0, import_index_092899d0.h)(caption)}`}</div>
      ${slots.default ? slots.default({}) : ``}</div>
    ${!hideCloseButton ? `${(0, import_index_092899d0.v)(NotificationButton, "NotificationButton").$$render($$result, { iconDescription }, {}, {})}` : ``}</div>`}`;
});
const Slider = (0, import_index_092899d0.c)(($$result, $$props, $$bindings, slots) => {
  let labelId;
  let range;
  let left;
  let $$restProps = (0, import_index_092899d0.b)($$props, [
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
  const dispatch = (0, import_index_092899d0.p)();
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


<div${(0, import_index_092899d0.d)([(0, import_index_092899d0.e)($$restProps)], { classes: "bx--form-item" })}><label${(0, import_index_092899d0.j)("for", id, 0)}${(0, import_index_092899d0.j)("id", labelId, 0)}${(0, import_index_092899d0.k)(("bx--label " + (disabled ? "bx--label--disabled" : "")).trim())}>${slots.labelText ? slots.labelText({}) : `
      ${(0, import_index_092899d0.h)(labelText)}
    `}</label>
  <div${(0, import_index_092899d0.k)("bx--slider-container".trim())}><span${(0, import_index_092899d0.k)("bx--slider__range-label".trim())}>${(0, import_index_092899d0.h)(minLabel || min)}</span>
    <div role="${"presentation"}" tabindex="${"-1"}"${(0, import_index_092899d0.k)(("bx--slider " + (disabled ? "bx--slider--disabled" : "")).trim())}${(0, import_index_092899d0.j)("this", ref, 0)}><div role="${"slider"}" tabindex="${"0"}" style="${"left: " + (0, import_index_092899d0.h)(left) + "%"}"${(0, import_index_092899d0.j)("aria-valuemax", max, 0)}${(0, import_index_092899d0.j)("aria-valuemin", min, 0)}${(0, import_index_092899d0.j)("aria-valuenow", value, 0)}${(0, import_index_092899d0.j)("id", id, 0)}${(0, import_index_092899d0.k)("bx--slider__thumb".trim())}></div>
      <div${(0, import_index_092899d0.k)("bx--slider__track".trim())}${(0, import_index_092899d0.j)("this", trackRef, 0)}></div>
      <div style="${"transform: translate(0, -50%) scaleX(" + (0, import_index_092899d0.h)(left / 100) + ")"}"${(0, import_index_092899d0.k)("bx--slider__filled-track".trim())}></div>
      <input type="${"hidden"}"${(0, import_index_092899d0.j)("name", name, 0)}${(0, import_index_092899d0.j)("value", value, 0)} ${required ? "required" : ""}${(0, import_index_092899d0.j)("min", min, 0)}${(0, import_index_092899d0.j)("max", max, 0)}${(0, import_index_092899d0.j)("step", step, 0)}${(0, import_index_092899d0.k)("bx--slider__input".trim())}></div>
    <span${(0, import_index_092899d0.k)("bx--slider__range-label".trim())}>${(0, import_index_092899d0.h)(maxLabel || max)}</span>
    <input${(0, import_index_092899d0.j)("type", hideTextInput ? "hidden" : inputType, 0)}${(0, import_index_092899d0.j)("style", hideTextInput ? "display: none" : void 0, 0)} id="${"input-" + (0, import_index_092899d0.h)(id)}"${(0, import_index_092899d0.j)("name", name, 0)}${(0, import_index_092899d0.j)("value", value, 0)}${(0, import_index_092899d0.j)("aria-labelledby", $$props["aria-label"] ? void 0 : labelId, 0)}${(0, import_index_092899d0.j)("aria-label", $$props["aria-label"] || "Slider number input", 0)} ${disabled ? "disabled" : ""} ${required ? "required" : ""}${(0, import_index_092899d0.j)("min", min, 0)}${(0, import_index_092899d0.j)("max", max, 0)}${(0, import_index_092899d0.j)("step", step, 0)}${(0, import_index_092899d0.j)("data-invalid", invalid || null, 0)}${(0, import_index_092899d0.j)("aria-invalid", invalid || null, 0)}${(0, import_index_092899d0.k)(("bx--text-input bx--slider-text-input " + (light ? "bx--text-input--light" : "") + " " + (invalid ? "bx--text-input--invalid" : "")).trim())}></div></div>`;
});
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\n:root{\n  --header-2-height:clamp(2rem, 4vh, 60px);\n  --header-1-height:clamp(1rem, 5vh, 40px);\n  --bar:#343a45\n}\n\n.icon{\n  border:1px solid rgb(113, 113, 113);\n  aspect-ratio:1/1;\n  height:auto;\n  width:var(--header-2-height) !important\n}\n\nheader.svelte-10r4fzz{\n  display:block;\n  position:fixed;\n  width:100vw;\n  margin:0 !important\n}\n\n.bx--grid{\n  left:0;\n  right:0;\n  margin-left:0;\n  margin-right:0px;\n  padding-left:0px;\n  padding-right:0px;\n  width:100vw\n}\n\n#head1{\n  width:100vw;\n  height:var(--header-1-height) !important;\n  background-color:whitesmoke;\n  margin:0\n}\n\n#head2{\n  left:0;\n  right:0;\n  margin-left:15px;\n  margin-right:15px;\n  padding-left:0px;\n  padding-right:30px;\n  width:100%;\n  background-color:var(--bar);\n  margin-bottom:1.2rem\n}\n\n.logo.svelte-10r4fzz{\n  height:calc(var(--header-1-height) * 0.7) !important;\n  width:auto\n}\n\n.bx--col{\n  padding:0 !important;\n  display:flex;\n  float:right;\n  right:0;\n  margin:auto;\n  flex-grow:3 !important;\n  text-align:right;\n  justify-content:space-between\n}\n\nsmall{\n  font:revert;\n  font-size:revert\n}\n\n.bx--btn--secondary{\n  background-color:var(--bar);\n  filter:brightness(0.85)\n}\n\nheader{\n  height:100px\n}\n\n/* purgecss end ignore */")();
const css = {
  code: ":root{--header-2-height:clamp(2rem, 4vh, 60px);--header-1-height:clamp(1rem, 5vh, 40px);--bar:#343a45}.icon{border:1px solid rgb(113, 113, 113);aspect-ratio:1/1;height:auto;width:var(--header-2-height) !important}header.svelte-10r4fzz{display:block;position:fixed;width:100vw;margin:0 !important}.bx--grid{left:0;right:0;margin-left:0;margin-right:0px;padding-left:0px;padding-right:0px;width:100vw}#head1{width:100vw;height:var(--header-1-height) !important;background-color:whitesmoke;margin:0}#head2{left:0;right:0;margin-left:15px;margin-right:15px;padding-left:0px;padding-right:30px;width:100%;background-color:var(--bar);margin-bottom:1.2rem}.logo.svelte-10r4fzz{height:calc(var(--header-1-height) * 0.7) !important;width:auto}.bx--col{padding:0 !important;display:flex;float:right;right:0;margin:auto;flex-grow:3 !important;text-align:right;justify-content:space-between}small{font:revert;font-size:revert}.bx--btn--secondary{background-color:var(--bar);filter:brightness(0.85)}header{height:100px}",
  map: null
};
const Draw = (0, import_index_092899d0.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_mapobject;
  let $selected, $$unsubscribe_selected;
  let $$unsubscribe_mapfunctions;
  let $$unsubscribe_maplayer;
  let $$unsubscribe_mapsource;
  let $draw_enabled, $$unsubscribe_draw_enabled;
  let $draw_type, $$unsubscribe_draw_type;
  let $$unsubscribe_radiusInKm;
  let $query, $$unsubscribe_query;
  $$unsubscribe_mapobject = (0, import_index_092899d0.o)(import_mapstore.mapobject, (value) => value);
  $$unsubscribe_selected = (0, import_index_092899d0.o)(import_mapstore.selected, (value) => $selected = value);
  $$unsubscribe_mapfunctions = (0, import_index_092899d0.o)(import_mapstore.mapfunctions, (value) => value);
  $$unsubscribe_maplayer = (0, import_index_092899d0.o)(import_mapstore.maplayer, (value) => value);
  $$unsubscribe_mapsource = (0, import_index_092899d0.o)(import_mapstore.mapsource, (value) => value);
  $$unsubscribe_draw_enabled = (0, import_index_092899d0.o)(import_mapstore.draw_enabled, (value) => $draw_enabled = value);
  $$unsubscribe_draw_type = (0, import_index_092899d0.o)(import_mapstore.draw_type, (value) => $draw_type = value);
  $$unsubscribe_radiusInKm = (0, import_index_092899d0.o)(import_mapstore.radiusInKm, (value) => value);
  $$unsubscribe_query = (0, import_index_092899d0.o)(import_mapstore.query, (value) => $query = value);
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
<main class="${"w-screen min-h-screen flex flex-col"}"><div id="${"map"}">${(0, import_index_092899d0.v)(import_AreaMap_svelte.default, "AreaMap").$$render($$result, { drawing_tools: true }, {}, {})}</div>
  <header class="${"svelte-10r4fzz"}">${(0, import_index_092899d0.v)(import_Grid_79c680c5.G, "Grid").$$render($$result, {}, {}, {
    default: () => {
      return `${(0, import_index_092899d0.v)(import_Column_3c16437e.R, "Row").$$render($$result, { id: "head1" }, {}, {
        default: () => {
          return `${(0, import_index_092899d0.v)(import_Column_3c16437e.C, "Column").$$render($$result, {}, {}, {
            default: () => {
              return `<img style="${"margin-left:10px;margin-top:4px"}" class="${"logo svelte-10r4fzz"}" src="${"https://cdn.ons.gov.uk/assets/images/ons-logo/v2/ons-logo.svg"}" alt="${"Office for National Statistics logo - Homepage"}">`;
            }
          })}
        ${(0, import_index_092899d0.v)(import_Column_3c16437e.C, "Column").$$render($$result, { style: "float:right;margin-right:2px" }, {}, {
            default: () => {
              return `${(0, import_index_092899d0.v)(Breadcrumb, "Breadcrumb").$$render($$result, {}, {}, {
                default: () => {
                  return `${(0, import_index_092899d0.v)(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { href: "/draw" }, {}, {
                    default: () => {
                      return `Draw Area`;
                    }
                  })}
            ${(0, import_index_092899d0.v)(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { href: "/" }, {}, {
                    default: () => {
                      return `Save + Load Area`;
                    }
                  })}
            ${(0, import_index_092899d0.v)(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { href: "/" }, {}, {
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
      ${(0, import_index_092899d0.v)(import_Column_3c16437e.R, "Row").$$render($$result, {
        style: "background-color:#13518d;height:calc(.085*var(--header-1-height));margin-bottom:0px;"
      }, {}, {})}

      ${(0, import_index_092899d0.v)(import_Column_3c16437e.R, "Row").$$render($$result, { id: "head2" }, {}, {
        default: () => {
          return `
        ${(0, import_index_092899d0.v)(import_Column_3c16437e.C, "Column").$$render($$result, {}, {}, {
            default: () => {
              return `${(0, import_index_092899d0.v)(import_DrawButtons_svelte.default, "DrawButtons").$$render($$result, {}, {}, {})}`;
            }
          })}${(0, import_index_092899d0.v)(import_Column_3c16437e.C, "Column").$$render($$result, {}, {}, {
            default: () => {
              return `${(0, import_index_092899d0.v)(import_EditButtons_svelte.default, "EditButtons").$$render($$result, {}, {}, {})}`;
            }
          })}${(0, import_index_092899d0.v)(import_Column_3c16437e.C, "Column").$$render($$result, {}, {}, {
            default: () => {
              return `${(0, import_index_092899d0.v)(import_PostcodeSearch_f538c78c.P, "PostcodeSearch").$$render($$result, {}, {}, {})}
          
          ${(0, import_index_092899d0.v)(import_ProgressButtons_svelte.default, "ProgressButtons").$$render($$result, {}, {}, {})}`;
            }
          })}`;
        }
      })}`;
    }
  })}

    ${(0, import_index_092899d0.v)(import_InfoBox_svelte.default, "InfoBox").$$render($$result, { open: $selected.length < 2 }, {}, {
    default: () => {
      return `${$draw_enabled ? `${(0, import_index_092899d0.v)(ToastNotification, "ToastNotification").$$render($$result, {
        style: "width:100%",
        hideCloseButton: true,
        kind: "warning",
        title: "Zoom in to begin drawing. ",
        subtitle: "The map needs to be at least on zoom level 9 to begin drawing. ",
        caption: ""
      }, {}, {})}` : `${$draw_type === "radius" ? `${(0, import_index_092899d0.v)(import_ItemAccordion_svelte.default, "ItemAccordion").$$render($$result, {
        title: "Draw Area",
        subtitle: "Distance Selection Tool"
      }, {}, {
        default: () => {
          return `${(0, import_index_092899d0.v)(Slider, "Slider").$$render($$result, {
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
      })}` : `${$draw_type === "click" ? `${(0, import_index_092899d0.v)(import_ItemAccordion_svelte.default, "ItemAccordion").$$render($$result, {
        title: "Draw Area",
        subtitle: "Click Selection"
      }, {}, {
        default: () => {
          return `<p>Click on any areas you are interested in.</p>`;
        }
      })}` : `${$draw_type === "poly" ? `${(0, import_index_092899d0.v)(import_ItemAccordion_svelte.default, "ItemAccordion").$$render($$result, {
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
        if ((0, import_index_092899d0.t)(__value)) {
          __value.then(null, import_index_092899d0.n);
          return ``;
        }
        return function(value) {
          return `
        ${value.error != null ? `${(0, import_index_092899d0.v)(ToastNotification, "ToastNotification").$$render($$result, {
            style: "width:100%",
            hideCloseButton: true,
            kind: "error",
            subtitle: value.error_title,
            caption: value.error
          }, {}, {})}` : `${value.oa ? `${(0, import_index_092899d0.v)(import_ItemAccordion_svelte.default, "ItemAccordion").$$render($$result, {
            title: "",
            subtitle: "Compressed Selection"
          }, {}, {
            default: () => {
              return `<small><b>MSOA: </b> <span>${(0, import_index_092899d0.h)(value.msoa.length)}</span> <br>
              <b>LSOA: </b> <span>${(0, import_index_092899d0.h)(value.lsoa.length)}</span> <br>
              <b>OA: </b> <span>${(0, import_index_092899d0.h)(value.oa.length)}</span> <br>
              parent tile: ${(0, import_index_092899d0.h)(value.tile)}; # original output areas ${(0, import_index_092899d0.h)(value.original)}</small>`;
            }
          })}` : ``}`}
      `;
        }(__value);
      }($query)}`;
    }
  })}</header>
</main>`;
});
