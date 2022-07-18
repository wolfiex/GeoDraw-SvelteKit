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
  default: () => PostcodeSearch
});
module.exports = __toCommonJS(stdin_exports);
var import_index_0029e4b6 = require("../../../../chunks/index-0029e4b6.js");
var import_HeaderSearch_svelte_svelte_type_style_lang_2747ef20 = require("../../../../chunks/HeaderSearch.svelte_svelte_type_style_lang-2747ef20.js");
var import_Close20_fbcece5d = require("../../../../chunks/Close20-fbcece5d.js");
var import_flatpickr = require("flatpickr");
var import_mapstore = require("../../../endpoints/draw/mapstore.js");
var import_index_7e61ccad = require("../../../../chunks/index-7e61ccad.js");
const Close16 = (0, import_index_0029e4b6.c)(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "Close16" },
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
  ], {})}><path d="${"M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${(0, import_index_0029e4b6.f)(title)}</title>` : ``}
  `}</svg>`;
});
const Search16 = (0, import_index_0029e4b6.c)(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "Search16" },
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
  ], {})}><path d="${"M15,14.3L10.7,10c1.9-2.3,1.6-5.8-0.7-7.7S4.2,0.7,2.3,3S0.7,8.8,3,10.7c2,1.7,5,1.7,7,0l4.3,4.3L15,14.3z M2,6.5	C2,4,4,2,6.5,2S11,4,11,6.5S9,11,6.5,11S2,9,2,6.5z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${(0, import_index_0029e4b6.f)(title)}</title>` : ``}
  `}</svg>`;
});
const SearchSkeleton = (0, import_index_0029e4b6.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_0029e4b6.l)($$props, ["small", "size"]);
  let { small = false } = $$props;
  let { size = "xl" } = $$props;
  if ($$props.small === void 0 && $$bindings.small && small !== void 0)
    $$bindings.small(small);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `
<div${(0, import_index_0029e4b6.o)([(0, import_index_0029e4b6.q)($$restProps)], {
    classes: "bx--skeleton " + (size === "sm" || small ? "bx--search--sm" : "") + " " + (size === "lg" ? "bx--search--lg" : "") + " " + (size === "xl" ? "bx--search--xl" : "")
  })}><span${(0, import_index_0029e4b6.r)("bx--label".trim())}></span>
  <div${(0, import_index_0029e4b6.r)("bx--search-input".trim())}></div></div>`;
});
const Search = (0, import_index_0029e4b6.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_0029e4b6.l)($$props, [
    "value",
    "small",
    "size",
    "searchClass",
    "skeleton",
    "light",
    "disabled",
    "expandable",
    "expanded",
    "placeholder",
    "autocomplete",
    "autofocus",
    "closeButtonLabelText",
    "labelText",
    "icon",
    "id",
    "ref"
  ]);
  let { value = "" } = $$props;
  let { small = false } = $$props;
  let { size = "xl" } = $$props;
  let { searchClass = "" } = $$props;
  let { skeleton = false } = $$props;
  let { light = false } = $$props;
  let { disabled = false } = $$props;
  let { expandable = false } = $$props;
  let { expanded = false } = $$props;
  let { placeholder = "Search..." } = $$props;
  let { autocomplete = "off" } = $$props;
  let { autofocus = false } = $$props;
  let { closeButtonLabelText = "Clear search input" } = $$props;
  let { labelText = "" } = $$props;
  let { icon = Search16 } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { ref = null } = $$props;
  const dispatch = (0, import_index_0029e4b6.h)();
  let searchRef = null;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.small === void 0 && $$bindings.small && small !== void 0)
    $$bindings.small(small);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.searchClass === void 0 && $$bindings.searchClass && searchClass !== void 0)
    $$bindings.searchClass(searchClass);
  if ($$props.skeleton === void 0 && $$bindings.skeleton && skeleton !== void 0)
    $$bindings.skeleton(skeleton);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.expandable === void 0 && $$bindings.expandable && expandable !== void 0)
    $$bindings.expandable(expandable);
  if ($$props.expanded === void 0 && $$bindings.expanded && expanded !== void 0)
    $$bindings.expanded(expanded);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.autocomplete === void 0 && $$bindings.autocomplete && autocomplete !== void 0)
    $$bindings.autocomplete(autocomplete);
  if ($$props.autofocus === void 0 && $$bindings.autofocus && autofocus !== void 0)
    $$bindings.autofocus(autofocus);
  if ($$props.closeButtonLabelText === void 0 && $$bindings.closeButtonLabelText && closeButtonLabelText !== void 0)
    $$bindings.closeButtonLabelText(closeButtonLabelText);
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  {
    if (expanded && ref)
      ref.focus();
  }
  {
    dispatch(expanded ? "expand" : "collapse");
  }
  return `${skeleton ? `${(0, import_index_0029e4b6.v)(SearchSkeleton, "SearchSkeleton").$$render($$result, Object.assign({ small }, { size }, $$restProps), {}, {})}` : `<div role="${"search"}" aria-labelledby="${(0, import_index_0029e4b6.f)(id) + "-search"}" class="${[
    (0, import_index_0029e4b6.f)(searchClass),
    "bx--search " + (light ? "bx--search--light" : "") + " " + (disabled ? "bx--search--disabled" : "") + " " + (size === "sm" || small ? "bx--search--sm" : "") + " " + (size === "lg" ? "bx--search--lg" : "") + " " + (size === "xl" ? "bx--search--xl" : "") + " " + (expandable ? "bx--search--expandable" : "") + " " + (expanded ? "bx--search--expanded" : "")
  ].join(" ").trim()}"><div${(0, import_index_0029e4b6.r)("bx--search-magnifier".trim())}${(0, import_index_0029e4b6.i)("this", searchRef, 0)}>${(0, import_index_0029e4b6.v)(icon || import_index_0029e4b6.m, "svelte:component").$$render($$result, { class: "bx--search-magnifier-icon" }, {}, {})}</div>
    <label id="${(0, import_index_0029e4b6.f)(id) + "-search"}"${(0, import_index_0029e4b6.i)("for", id, 0)}${(0, import_index_0029e4b6.r)("bx--label".trim())}>${slots.labelText ? slots.labelText({}) : `
        ${(0, import_index_0029e4b6.f)(labelText)}
      `}</label>
    
    <input${(0, import_index_0029e4b6.o)([
    { type: "text" },
    { role: "searchbox" },
    {
      autofocus: (autofocus === true ? true : void 0) || null
    },
    {
      autocomplete: (0, import_index_0029e4b6.p)(autocomplete)
    },
    { disabled: disabled || null },
    { id: (0, import_index_0029e4b6.p)(id) },
    {
      placeholder: (0, import_index_0029e4b6.p)(placeholder)
    },
    (0, import_index_0029e4b6.q)($$restProps)
  ], { classes: "bx--search-input" })}${(0, import_index_0029e4b6.i)("this", ref, 0)}${(0, import_index_0029e4b6.i)("value", value, 0)}>
    <button type="${"button"}"${(0, import_index_0029e4b6.i)("aria-label", closeButtonLabelText, 0)} ${disabled ? "disabled" : ""}${(0, import_index_0029e4b6.r)(("bx--search-close " + (value === "" ? "bx--search-close--hidden" : "")).trim())}>${(0, import_index_0029e4b6.v)((size === "xl" ? import_Close20_fbcece5d.C : Close16) || import_index_0029e4b6.m, "svelte:component").$$render($$result, {}, {}, {})}</button></div>`}`;
});
const PostcodeSearch = (0, import_index_0029e4b6.c)(($$result, $$props, $$bindings, slots) => {
  let $mapobject, $$unsubscribe_mapobject;
  $$unsubscribe_mapobject = (0, import_index_0029e4b6.b)(import_mapstore.mapobject, (value) => $mapobject = value);
  $$unsubscribe_mapobject();
  return `<main>${(0, import_index_0029e4b6.v)(Search, "Search").$$render($$result, {
    closeButtonLabelText: "Clear search input",
    defaultValue: "",
    autocomplete: "on",
    id: "search-1",
    labelText: "Postcode Search",
    onChange(x) {
      console.log(x);
      $mapobject.setCenter(x);
    },
    onKeyDown: function noRefCheck(x) {
      return [1, 2, 3];
    },
    size: "sm",
    style: "max-width:200px;min-width:100px;margin:0 auto;"
  }, {}, {})}
         

     
</main>`;
});
