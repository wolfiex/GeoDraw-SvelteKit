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
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_0029e4b6 = require("../../chunks/index-0029e4b6.js");
var import_HeaderSearch_svelte_svelte_type_style_lang_2747ef20 = require("../../chunks/HeaderSearch.svelte_svelte_type_style_lang-2747ef20.js");
var import_Button_a63d0e2e = require("../../chunks/Button-a63d0e2e.js");
var import_flatpickr = require("flatpickr");
var import_examplehash = require("../endpoints/examplehash.js");
var import_OpenGraph_svelte = __toESM(require("./OpenGraph.svelte.js"));
var import_d3 = require("d3");
var import_index_7e61ccad = require("../../chunks/index-7e61ccad.js");
function isOutOfViewport(parent, container) {
  const parentBounding = parent.getBoundingClientRect();
  const boundingContainer = container.getBoundingClientRect();
  const out = {};
  out.top = parentBounding.top < 0;
  out.left = parentBounding.left < 0;
  out.bottom = parentBounding.bottom + boundingContainer.height > (window.innerHeight || document.documentElement.clientHeight);
  out.right = parentBounding.right > (window.innerWidth || document.documentElement.clientWidth);
  out.any = out.top || out.left || out.bottom || out.right;
  return out;
}
var Item_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\n.item.svelte-3e0qet{\n  cursor:default;\n  height:var(--height, 42px);\n  line-height:var(--height, 42px);\n  padding:var(--itemPadding, 0 20px);\n  color:var(--itemColor, inherit);\n  text-overflow:ellipsis;\n  overflow:hidden;\n  white-space:nowrap\n}\n\n.groupHeader.svelte-3e0qet{\n  text-transform:var(--groupTitleTextTransform, uppercase)\n}\n\n.groupItem.svelte-3e0qet{\n  padding-left:var(--groupItemPaddingLeft, 40px)\n}\n\n.item.svelte-3e0qet:active{\n  background:var(--itemActiveBackground, #b9daff)\n}\n\n.item.active.svelte-3e0qet{\n  background:var(--itemIsActiveBG, #007aff);\n  color:var(--itemIsActiveColor, #fff)\n}\n\n.item.notSelectable.svelte-3e0qet{\n  color:var(--itemIsNotSelectableColor, #999)\n}\n\n.item.first.svelte-3e0qet{\n  border-radius:var(--itemFirstBorderRadius, 4px 4px 0 0)\n}\n\n.item.hover.svelte-3e0qet:not(.active){\n  background:var(--itemHoverBG, #e7f2ff);\n  color:var(--itemHoverColor, inherit)\n}\n\n/* purgecss end ignore */")();
const css$6 = {
  code: ".item.svelte-3e0qet{cursor:default;height:var(--height, 42px);line-height:var(--height, 42px);padding:var(--itemPadding, 0 20px);color:var(--itemColor, inherit);text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.groupHeader.svelte-3e0qet{text-transform:var(--groupTitleTextTransform, uppercase)}.groupItem.svelte-3e0qet{padding-left:var(--groupItemPaddingLeft, 40px)}.item.svelte-3e0qet:active{background:var(--itemActiveBackground, #b9daff)}.item.active.svelte-3e0qet{background:var(--itemIsActiveBG, #007aff);color:var(--itemIsActiveColor, #fff)}.item.notSelectable.svelte-3e0qet{color:var(--itemIsNotSelectableColor, #999)}.item.first.svelte-3e0qet{border-radius:var(--itemFirstBorderRadius, 4px 4px 0 0)}.item.hover.svelte-3e0qet:not(.active){background:var(--itemHoverBG, #e7f2ff);color:var(--itemHoverColor, inherit)}",
  map: null
};
const Item = (0, import_index_0029e4b6.c)(($$result, $$props, $$bindings, slots) => {
  let { isActive = false } = $$props;
  let { isFirst = false } = $$props;
  let { isHover = false } = $$props;
  let { isSelectable = false } = $$props;
  let { getOptionLabel = void 0 } = $$props;
  let { item = void 0 } = $$props;
  let { filterText = "" } = $$props;
  let itemClasses = "";
  if ($$props.isActive === void 0 && $$bindings.isActive && isActive !== void 0)
    $$bindings.isActive(isActive);
  if ($$props.isFirst === void 0 && $$bindings.isFirst && isFirst !== void 0)
    $$bindings.isFirst(isFirst);
  if ($$props.isHover === void 0 && $$bindings.isHover && isHover !== void 0)
    $$bindings.isHover(isHover);
  if ($$props.isSelectable === void 0 && $$bindings.isSelectable && isSelectable !== void 0)
    $$bindings.isSelectable(isSelectable);
  if ($$props.getOptionLabel === void 0 && $$bindings.getOptionLabel && getOptionLabel !== void 0)
    $$bindings.getOptionLabel(getOptionLabel);
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  if ($$props.filterText === void 0 && $$bindings.filterText && filterText !== void 0)
    $$bindings.filterText(filterText);
  $$result.css.add(css$6);
  {
    {
      const classes = [];
      if (isActive) {
        classes.push("active");
      }
      if (isFirst) {
        classes.push("first");
      }
      if (isHover) {
        classes.push("hover");
      }
      if (item.isGroupHeader) {
        classes.push("groupHeader");
      }
      if (item.isGroupItem) {
        classes.push("groupItem");
      }
      if (!isSelectable) {
        classes.push("notSelectable");
      }
      itemClasses = classes.join(" ");
    }
  }
  return `<div class="${"item " + (0, import_index_0029e4b6.f)(itemClasses) + " svelte-3e0qet"}"><!-- HTML_TAG_START -->${getOptionLabel(item, filterText)}<!-- HTML_TAG_END --></div>`;
});
var List_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\n.listContainer.svelte-1uyqfml{\n  box-shadow:var(--listShadow, 0 2px 3px 0 rgba(44, 62, 80, 0.24));\n  border-radius:var(--listBorderRadius, 4px);\n  max-height:var(--listMaxHeight, 250px);\n  overflow-y:auto;\n  background:var(--listBackground, #fff);\n  border:var(--listBorder, none);\n  position:var(--listPosition, absolute);\n  z-index:var(--listZIndex, 2);\n  width:100%;\n  left:var(--listLeft, 0);\n  right:var(--listRight, 0)\n}\n\n.virtualList.svelte-1uyqfml{\n  height:var(--virtualListHeight, 200px)\n}\n\n.listGroupTitle.svelte-1uyqfml{\n  color:var(--groupTitleColor, #8f8f8f);\n  cursor:default;\n  font-size:var(--groupTitleFontSize, 12px);\n  font-weight:var(--groupTitleFontWeight, 600);\n  height:var(--height, 42px);\n  line-height:var(--height, 42px);\n  padding:var(--groupTitlePadding, 0 20px);\n  text-overflow:ellipsis;\n  overflow-x:hidden;\n  white-space:nowrap;\n  text-transform:var(--groupTitleTextTransform, uppercase)\n}\n\n.empty.svelte-1uyqfml{\n  text-align:var(--listEmptyTextAlign, center);\n  padding:var(--listEmptyPadding, 20px 0);\n  color:var(--listEmptyColor, #78848f)\n}\n\n/* purgecss end ignore */")();
const css$5 = {
  code: ".listContainer.svelte-1uyqfml{box-shadow:var(--listShadow, 0 2px 3px 0 rgba(44, 62, 80, 0.24));border-radius:var(--listBorderRadius, 4px);max-height:var(--listMaxHeight, 250px);overflow-y:auto;background:var(--listBackground, #fff);border:var(--listBorder, none);position:var(--listPosition, absolute);z-index:var(--listZIndex, 2);width:100%;left:var(--listLeft, 0);right:var(--listRight, 0)}.virtualList.svelte-1uyqfml{height:var(--virtualListHeight, 200px)}.listGroupTitle.svelte-1uyqfml{color:var(--groupTitleColor, #8f8f8f);cursor:default;font-size:var(--groupTitleFontSize, 12px);font-weight:var(--groupTitleFontWeight, 600);height:var(--height, 42px);line-height:var(--height, 42px);padding:var(--groupTitlePadding, 0 20px);text-overflow:ellipsis;overflow-x:hidden;white-space:nowrap;text-transform:var(--groupTitleTextTransform, uppercase)}.empty.svelte-1uyqfml{text-align:var(--listEmptyTextAlign, center);padding:var(--listEmptyPadding, 20px 0);color:var(--listEmptyColor, #78848f)}",
  map: null
};
function isItemActive(item, value, optionIdentifier) {
  return value && value[optionIdentifier] === item[optionIdentifier];
}
function isItemFirst(itemIndex) {
  return itemIndex === 0;
}
function isItemHover(hoverItemIndex, item, itemIndex, items) {
  return isItemSelectable(item) && (hoverItemIndex === itemIndex || items.length === 1);
}
function isItemSelectable(item) {
  return item.isGroupHeader && item.isSelectable || item.selectable || !item.hasOwnProperty("selectable");
}
const List = (0, import_index_0029e4b6.c)(($$result, $$props, $$bindings, slots) => {
  (0, import_index_0029e4b6.h)();
  let { container = void 0 } = $$props;
  let { VirtualList: VirtualList2 = null } = $$props;
  let { Item: Item$1 = Item } = $$props;
  let { isVirtualList = false } = $$props;
  let { items = [] } = $$props;
  let { labelIdentifier = "label" } = $$props;
  let { getOptionLabel = (option, filterText2) => {
    if (option)
      return option.isCreator ? `Create "${filterText2}"` : option[labelIdentifier];
  } } = $$props;
  let { getGroupHeaderLabel = null } = $$props;
  let { itemHeight = 40 } = $$props;
  let { hoverItemIndex = 0 } = $$props;
  let { value = void 0 } = $$props;
  let { optionIdentifier = "value" } = $$props;
  let { hideEmptyState = false } = $$props;
  let { noOptionsMessage = "No options" } = $$props;
  let { isMulti = false } = $$props;
  let { activeItemIndex = 0 } = $$props;
  let { filterText = "" } = $$props;
  let { parent = null } = $$props;
  let { listPlacement = null } = $$props;
  let { listAutoWidth = null } = $$props;
  let { listOffset = 5 } = $$props;
  let listStyle;
  function computePlacement() {
    const { height, width } = parent.getBoundingClientRect();
    listStyle = "";
    listStyle += `min-width:${width}px;width:${listAutoWidth ? "auto" : "100%"};`;
    if (listPlacement === "top" || listPlacement === "auto" && isOutOfViewport(parent, container).bottom) {
      listStyle += `bottom:${height + listOffset}px;`;
    } else {
      listStyle += `top:${height + listOffset}px;`;
    }
  }
  if ($$props.container === void 0 && $$bindings.container && container !== void 0)
    $$bindings.container(container);
  if ($$props.VirtualList === void 0 && $$bindings.VirtualList && VirtualList2 !== void 0)
    $$bindings.VirtualList(VirtualList2);
  if ($$props.Item === void 0 && $$bindings.Item && Item$1 !== void 0)
    $$bindings.Item(Item$1);
  if ($$props.isVirtualList === void 0 && $$bindings.isVirtualList && isVirtualList !== void 0)
    $$bindings.isVirtualList(isVirtualList);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.labelIdentifier === void 0 && $$bindings.labelIdentifier && labelIdentifier !== void 0)
    $$bindings.labelIdentifier(labelIdentifier);
  if ($$props.getOptionLabel === void 0 && $$bindings.getOptionLabel && getOptionLabel !== void 0)
    $$bindings.getOptionLabel(getOptionLabel);
  if ($$props.getGroupHeaderLabel === void 0 && $$bindings.getGroupHeaderLabel && getGroupHeaderLabel !== void 0)
    $$bindings.getGroupHeaderLabel(getGroupHeaderLabel);
  if ($$props.itemHeight === void 0 && $$bindings.itemHeight && itemHeight !== void 0)
    $$bindings.itemHeight(itemHeight);
  if ($$props.hoverItemIndex === void 0 && $$bindings.hoverItemIndex && hoverItemIndex !== void 0)
    $$bindings.hoverItemIndex(hoverItemIndex);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.optionIdentifier === void 0 && $$bindings.optionIdentifier && optionIdentifier !== void 0)
    $$bindings.optionIdentifier(optionIdentifier);
  if ($$props.hideEmptyState === void 0 && $$bindings.hideEmptyState && hideEmptyState !== void 0)
    $$bindings.hideEmptyState(hideEmptyState);
  if ($$props.noOptionsMessage === void 0 && $$bindings.noOptionsMessage && noOptionsMessage !== void 0)
    $$bindings.noOptionsMessage(noOptionsMessage);
  if ($$props.isMulti === void 0 && $$bindings.isMulti && isMulti !== void 0)
    $$bindings.isMulti(isMulti);
  if ($$props.activeItemIndex === void 0 && $$bindings.activeItemIndex && activeItemIndex !== void 0)
    $$bindings.activeItemIndex(activeItemIndex);
  if ($$props.filterText === void 0 && $$bindings.filterText && filterText !== void 0)
    $$bindings.filterText(filterText);
  if ($$props.parent === void 0 && $$bindings.parent && parent !== void 0)
    $$bindings.parent(parent);
  if ($$props.listPlacement === void 0 && $$bindings.listPlacement && listPlacement !== void 0)
    $$bindings.listPlacement(listPlacement);
  if ($$props.listAutoWidth === void 0 && $$bindings.listAutoWidth && listAutoWidth !== void 0)
    $$bindings.listAutoWidth(listAutoWidth);
  if ($$props.listOffset === void 0 && $$bindings.listOffset && listOffset !== void 0)
    $$bindings.listOffset(listOffset);
  $$result.css.add(css$5);
  {
    {
      if (parent && container)
        computePlacement();
    }
  }
  return `

<div class="${["listContainer svelte-1uyqfml", isVirtualList ? "virtualList" : ""].join(" ").trim()}"${(0, import_index_0029e4b6.i)("style", listStyle, 0)}${(0, import_index_0029e4b6.i)("this", container, 0)}>${isVirtualList ? `${(0, import_index_0029e4b6.v)(VirtualList2 || import_index_0029e4b6.m, "svelte:component").$$render($$result, { items, itemHeight }, {}, {
    default: ({ item, i }) => {
      return `<div class="${"listItem"}">${(0, import_index_0029e4b6.v)(Item$1 || import_index_0029e4b6.m, "svelte:component").$$render($$result, {
        item,
        filterText,
        getOptionLabel,
        isFirst: isItemFirst(i),
        isActive: isItemActive(item, value, optionIdentifier),
        isHover: isItemHover(hoverItemIndex, item, i, items),
        isSelectable: isItemSelectable(item)
      }, {}, {})}</div>`;
    }
  })}` : `${items.length ? (0, import_index_0029e4b6.j)(items, (item, i) => {
    return `${item.isGroupHeader && !item.isSelectable ? `<div class="${"listGroupTitle svelte-1uyqfml"}">${(0, import_index_0029e4b6.f)(getGroupHeaderLabel(item))}</div>` : `<div class="${"listItem"}" tabindex="${"-1"}">${(0, import_index_0029e4b6.v)(Item$1 || import_index_0029e4b6.m, "svelte:component").$$render($$result, {
      item,
      filterText,
      getOptionLabel,
      isFirst: isItemFirst(i),
      isActive: isItemActive(item, value, optionIdentifier),
      isHover: isItemHover(hoverItemIndex, item, i, items),
      isSelectable: isItemSelectable(item)
    }, {}, {})}
                </div>`}`;
  }) : `${!hideEmptyState ? `<div class="${"empty svelte-1uyqfml"}">${(0, import_index_0029e4b6.f)(noOptionsMessage)}</div>` : ``}`}`}</div>`;
});
var Selection_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\n.selection.svelte-pu1q1n{\n  text-overflow:ellipsis;\n  overflow-x:hidden;\n  white-space:nowrap\n}\n\n/* purgecss end ignore */")();
const css$4 = {
  code: ".selection.svelte-pu1q1n{text-overflow:ellipsis;overflow-x:hidden;white-space:nowrap}",
  map: null
};
const Selection = (0, import_index_0029e4b6.c)(($$result, $$props, $$bindings, slots) => {
  let { getSelectionLabel = void 0 } = $$props;
  let { item = void 0 } = $$props;
  if ($$props.getSelectionLabel === void 0 && $$bindings.getSelectionLabel && getSelectionLabel !== void 0)
    $$bindings.getSelectionLabel(getSelectionLabel);
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  $$result.css.add(css$4);
  return `<div class="${"selection svelte-pu1q1n"}"><!-- HTML_TAG_START -->${getSelectionLabel(item)}<!-- HTML_TAG_END --></div>`;
});
var MultiSelection_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\n.multiSelectItem.svelte-liu9pa.svelte-liu9pa{\n  background:var(--multiItemBG, #ebedef);\n  margin:var(--multiItemMargin, 5px 5px 0 0);\n  border-radius:var(--multiItemBorderRadius, 16px);\n  height:var(--multiItemHeight, 32px);\n  line-height:var(--multiItemHeight, 32px);\n  display:flex;\n  cursor:default;\n  padding:var(--multiItemPadding, 0 10px 0 15px);\n  max-width:100%\n}\n\n.multiSelectItem_label.svelte-liu9pa.svelte-liu9pa{\n  margin:var(--multiLabelMargin, 0 5px 0 0);\n  overflow:hidden;\n  text-overflow:ellipsis;\n  white-space:nowrap\n}\n\n.multiSelectItem.svelte-liu9pa.svelte-liu9pa:hover,.multiSelectItem.active.svelte-liu9pa.svelte-liu9pa{\n  background-color:var(--multiItemActiveBG, #006fff);\n  color:var(--multiItemActiveColor, #fff)\n}\n\n.multiSelectItem.disabled.svelte-liu9pa.svelte-liu9pa:hover{\n  background:var(--multiItemDisabledHoverBg, #ebedef);\n  color:var(--multiItemDisabledHoverColor, #c1c6cc)\n}\n\n.multiSelectItem_clear.svelte-liu9pa.svelte-liu9pa{\n  border-radius:var(--multiClearRadius, 50%);\n  background:var(--multiClearBG, #52616f);\n  min-width:var(--multiClearWidth, 16px);\n  max-width:var(--multiClearWidth, 16px);\n  height:var(--multiClearHeight, 16px);\n  position:relative;\n  top:var(--multiClearTop, 8px);\n  text-align:var(--multiClearTextAlign, center);\n  padding:var(--multiClearPadding, 1px)\n}\n\n.multiSelectItem_clear.svelte-liu9pa.svelte-liu9pa:hover,.active.svelte-liu9pa .multiSelectItem_clear.svelte-liu9pa{\n  background:var(--multiClearHoverBG, #fff)\n}\n\n.multiSelectItem_clear.svelte-liu9pa:hover svg.svelte-liu9pa,.active.svelte-liu9pa .multiSelectItem_clear svg.svelte-liu9pa{\n  fill:var(--multiClearHoverFill, #006fff)\n}\n\n.multiSelectItem_clear.svelte-liu9pa svg.svelte-liu9pa{\n  fill:var(--multiClearFill, #ebedef);\n  vertical-align:top\n}\n\n/* purgecss end ignore */")();
const css$3 = {
  code: ".multiSelectItem.svelte-liu9pa.svelte-liu9pa{background:var(--multiItemBG, #ebedef);margin:var(--multiItemMargin, 5px 5px 0 0);border-radius:var(--multiItemBorderRadius, 16px);height:var(--multiItemHeight, 32px);line-height:var(--multiItemHeight, 32px);display:flex;cursor:default;padding:var(--multiItemPadding, 0 10px 0 15px);max-width:100%}.multiSelectItem_label.svelte-liu9pa.svelte-liu9pa{margin:var(--multiLabelMargin, 0 5px 0 0);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.multiSelectItem.svelte-liu9pa.svelte-liu9pa:hover,.multiSelectItem.active.svelte-liu9pa.svelte-liu9pa{background-color:var(--multiItemActiveBG, #006fff);color:var(--multiItemActiveColor, #fff)}.multiSelectItem.disabled.svelte-liu9pa.svelte-liu9pa:hover{background:var(--multiItemDisabledHoverBg, #ebedef);color:var(--multiItemDisabledHoverColor, #c1c6cc)}.multiSelectItem_clear.svelte-liu9pa.svelte-liu9pa{border-radius:var(--multiClearRadius, 50%);background:var(--multiClearBG, #52616f);min-width:var(--multiClearWidth, 16px);max-width:var(--multiClearWidth, 16px);height:var(--multiClearHeight, 16px);position:relative;top:var(--multiClearTop, 8px);text-align:var(--multiClearTextAlign, center);padding:var(--multiClearPadding, 1px)}.multiSelectItem_clear.svelte-liu9pa.svelte-liu9pa:hover,.active.svelte-liu9pa .multiSelectItem_clear.svelte-liu9pa{background:var(--multiClearHoverBG, #fff)}.multiSelectItem_clear.svelte-liu9pa:hover svg.svelte-liu9pa,.active.svelte-liu9pa .multiSelectItem_clear svg.svelte-liu9pa{fill:var(--multiClearHoverFill, #006fff)}.multiSelectItem_clear.svelte-liu9pa svg.svelte-liu9pa{fill:var(--multiClearFill, #ebedef);vertical-align:top}",
  map: null
};
const MultiSelection = (0, import_index_0029e4b6.c)(($$result, $$props, $$bindings, slots) => {
  (0, import_index_0029e4b6.h)();
  let { value = [] } = $$props;
  let { activeValue = void 0 } = $$props;
  let { isDisabled = false } = $$props;
  let { multiFullItemClearable = false } = $$props;
  let { getSelectionLabel = void 0 } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.activeValue === void 0 && $$bindings.activeValue && activeValue !== void 0)
    $$bindings.activeValue(activeValue);
  if ($$props.isDisabled === void 0 && $$bindings.isDisabled && isDisabled !== void 0)
    $$bindings.isDisabled(isDisabled);
  if ($$props.multiFullItemClearable === void 0 && $$bindings.multiFullItemClearable && multiFullItemClearable !== void 0)
    $$bindings.multiFullItemClearable(multiFullItemClearable);
  if ($$props.getSelectionLabel === void 0 && $$bindings.getSelectionLabel && getSelectionLabel !== void 0)
    $$bindings.getSelectionLabel(getSelectionLabel);
  $$result.css.add(css$3);
  return `${(0, import_index_0029e4b6.j)(value, (item, i) => {
    return `<div class="${"multiSelectItem " + (0, import_index_0029e4b6.f)(activeValue === i ? "active" : "") + " " + (0, import_index_0029e4b6.f)(isDisabled ? "disabled" : "") + " svelte-liu9pa"}"><div class="${"multiSelectItem_label svelte-liu9pa"}"><!-- HTML_TAG_START -->${getSelectionLabel(item)}<!-- HTML_TAG_END --></div>
        ${!isDisabled && !multiFullItemClearable ? `<div class="${"multiSelectItem_clear svelte-liu9pa"}"><svg width="${"100%"}" height="${"100%"}" viewBox="${"-2 -2 50 50"}" focusable="${"false"}" aria-hidden="${"true"}" role="${"presentation"}" class="${"svelte-liu9pa"}"><path d="${"M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124 l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z"}"></path></svg>
            </div>` : ``}
    </div>`;
  })}`;
});
var VirtualList_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\nsvelte-virtual-list-viewport.svelte-g2cagw{\n  position:relative;\n  overflow-y:auto;\n  -webkit-overflow-scrolling:touch;\n  display:block\n}\n\nsvelte-virtual-list-contents.svelte-g2cagw,svelte-virtual-list-row.svelte-g2cagw{\n  display:block\n}\n\nsvelte-virtual-list-row.svelte-g2cagw{\n  overflow:hidden\n}\n\n/* purgecss end ignore */")();
const css$2 = {
  code: "svelte-virtual-list-viewport.svelte-g2cagw{position:relative;overflow-y:auto;-webkit-overflow-scrolling:touch;display:block}svelte-virtual-list-contents.svelte-g2cagw,svelte-virtual-list-row.svelte-g2cagw{display:block}svelte-virtual-list-row.svelte-g2cagw{overflow:hidden}",
  map: null
};
const VirtualList = (0, import_index_0029e4b6.c)(($$result, $$props, $$bindings, slots) => {
  let { items = void 0 } = $$props;
  let { height = "100%" } = $$props;
  let { itemHeight = 40 } = $$props;
  let { hoverItemIndex = 0 } = $$props;
  let { start = 0 } = $$props;
  let { end = 0 } = $$props;
  let viewport;
  let contents;
  let visible;
  let top = 0;
  let bottom = 0;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.itemHeight === void 0 && $$bindings.itemHeight && itemHeight !== void 0)
    $$bindings.itemHeight(itemHeight);
  if ($$props.hoverItemIndex === void 0 && $$bindings.hoverItemIndex && hoverItemIndex !== void 0)
    $$bindings.hoverItemIndex(hoverItemIndex);
  if ($$props.start === void 0 && $$bindings.start && start !== void 0)
    $$bindings.start(start);
  if ($$props.end === void 0 && $$bindings.end && end !== void 0)
    $$bindings.end(end);
  $$result.css.add(css$2);
  visible = items.slice(start, end).map((data, i) => {
    return { index: i + start, data };
  });
  return `<svelte-virtual-list-viewport style="${"height: " + (0, import_index_0029e4b6.f)(height) + ";"}" class="${"svelte-g2cagw"}"${(0, import_index_0029e4b6.i)("this", viewport, 0)}><svelte-virtual-list-contents style="${"padding-top: " + (0, import_index_0029e4b6.f)(top) + "px; padding-bottom: " + (0, import_index_0029e4b6.f)(bottom) + "px;"}" class="${"svelte-g2cagw"}"${(0, import_index_0029e4b6.i)("this", contents, 0)}>${(0, import_index_0029e4b6.j)(visible, (row) => {
    return `<svelte-virtual-list-row class="${"svelte-g2cagw"}">${slots.default ? slots.default({
      item: row.data,
      i: row.index,
      hoverItemIndex
    }) : `Missing template`}
            </svelte-virtual-list-row>`;
  })}</svelte-virtual-list-contents></svelte-virtual-list-viewport>`;
});
const ClearIcon = (0, import_index_0029e4b6.c)(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"100%"}" height="${"100%"}" viewBox="${"-2 -2 50 50"}" focusable="${"false"}" aria-hidden="${"true"}" role="${"presentation"}"><path fill="${"currentColor"}" d="${"M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124\n    l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z"}"></path></svg>`;
});
function debounce(func, wait, immediate) {
  let timeout;
  return function executedFunction() {
    let context = this;
    let args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate)
        func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow)
      func.apply(context, args);
  };
}
var Select_svelte_svelte_type_style_lang$1 = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\n.selectContainer.svelte-17l1npl.svelte-17l1npl{\n  --internalPadding:0 16px;\n  border:var(--border, 1px solid #d8dbdf);\n  border-radius:var(--borderRadius, 3px);\n  box-sizing:border-box;\n  height:var(--height, 42px);\n  position:relative;\n  display:flex;\n  align-items:center;\n  padding:var(--padding, var(--internalPadding));\n  background:var(--background, #fff);\n  margin:var(--margin, 0)\n}\n\n.selectContainer.svelte-17l1npl input.svelte-17l1npl{\n  cursor:default;\n  border:none;\n  color:var(--inputColor, #3f4f5f);\n  height:var(--height, 42px);\n  line-height:var(--height, 42px);\n  padding:var(--inputPadding, var(--padding, var(--internalPadding)));\n  width:100%;\n  background:transparent;\n  font-size:var(--inputFontSize, 14px);\n  letter-spacing:var(--inputLetterSpacing, -0.08px);\n  position:absolute;\n  left:var(--inputLeft, 0);\n  margin:var(--inputMargin, 0)\n}\n\n.selectContainer.svelte-17l1npl input.svelte-17l1npl::-moz-placeholder{\n  color:var(--placeholderColor, #78848f);\n  opacity:var(--placeholderOpacity, 1)\n}\n\n.selectContainer.svelte-17l1npl input.svelte-17l1npl:-ms-input-placeholder{\n  color:var(--placeholderColor, #78848f);\n  opacity:var(--placeholderOpacity, 1)\n}\n\n.selectContainer.svelte-17l1npl input.svelte-17l1npl::placeholder{\n  color:var(--placeholderColor, #78848f);\n  opacity:var(--placeholderOpacity, 1)\n}\n\n.selectContainer.svelte-17l1npl input.svelte-17l1npl:focus{\n  outline:none\n}\n\n.selectContainer.svelte-17l1npl.svelte-17l1npl:hover{\n  border-color:var(--borderHoverColor, #b2b8bf)\n}\n\n.selectContainer.focused.svelte-17l1npl.svelte-17l1npl{\n  border-color:var(--borderFocusColor, #006fe8)\n}\n\n.selectContainer.disabled.svelte-17l1npl.svelte-17l1npl{\n  background:var(--disabledBackground, #ebedef);\n  border-color:var(--disabledBorderColor, #ebedef);\n  color:var(--disabledColor, #c1c6cc)\n}\n\n.selectContainer.disabled.svelte-17l1npl input.svelte-17l1npl::-moz-placeholder{\n  color:var(--disabledPlaceholderColor, #c1c6cc);\n  opacity:var(--disabledPlaceholderOpacity, 1)\n}\n\n.selectContainer.disabled.svelte-17l1npl input.svelte-17l1npl:-ms-input-placeholder{\n  color:var(--disabledPlaceholderColor, #c1c6cc);\n  opacity:var(--disabledPlaceholderOpacity, 1)\n}\n\n.selectContainer.disabled.svelte-17l1npl input.svelte-17l1npl::placeholder{\n  color:var(--disabledPlaceholderColor, #c1c6cc);\n  opacity:var(--disabledPlaceholderOpacity, 1)\n}\n\n.selectedItem.svelte-17l1npl.svelte-17l1npl{\n  line-height:var(--height, 42px);\n  height:var(--height, 42px);\n  overflow-x:hidden;\n  padding:var(--selectedItemPadding, 0 20px 0 0)\n}\n\n.selectedItem.svelte-17l1npl.svelte-17l1npl:focus{\n  outline:none\n}\n\n.clearSelect.svelte-17l1npl.svelte-17l1npl{\n  position:absolute;\n  right:var(--clearSelectRight, 10px);\n  top:var(--clearSelectTop, 11px);\n  bottom:var(--clearSelectBottom, 11px);\n  width:var(--clearSelectWidth, 20px);\n  color:var(--clearSelectColor, #c5cacf);\n  flex:none !important\n}\n\n.clearSelect.svelte-17l1npl.svelte-17l1npl:hover{\n  color:var(--clearSelectHoverColor, #2c3e50)\n}\n\n.selectContainer.focused.svelte-17l1npl .clearSelect.svelte-17l1npl{\n  color:var(--clearSelectFocusColor, #3f4f5f)\n}\n\n.indicator.svelte-17l1npl.svelte-17l1npl{\n  position:absolute;\n  right:var(--indicatorRight, 10px);\n  top:var(--indicatorTop, 11px);\n  width:var(--indicatorWidth, 20px);\n  height:var(--indicatorHeight, 20px);\n  color:var(--indicatorColor, #c5cacf)\n}\n\n.indicator.svelte-17l1npl svg.svelte-17l1npl{\n  display:inline-block;\n  fill:var(--indicatorFill, currentcolor);\n  line-height:1;\n  stroke:var(--indicatorStroke, currentcolor);\n  stroke-width:0\n}\n\n.spinner.svelte-17l1npl.svelte-17l1npl{\n  position:absolute;\n  right:var(--spinnerRight, 10px);\n  top:var(--spinnerLeft, 11px);\n  width:var(--spinnerWidth, 20px);\n  height:var(--spinnerHeight, 20px);\n  color:var(--spinnerColor, #51ce6c);\n  -webkit-animation:svelte-17l1npl-rotate 0.75s linear infinite;\n          animation:svelte-17l1npl-rotate 0.75s linear infinite\n}\n\n.spinner_icon.svelte-17l1npl.svelte-17l1npl{\n  display:block;\n  height:100%;\n  transform-origin:center center;\n  width:100%;\n  position:absolute;\n  top:0;\n  bottom:0;\n  left:0;\n  right:0;\n  margin:auto;\n  -webkit-transform:none\n}\n\n.spinner_path.svelte-17l1npl.svelte-17l1npl{\n  stroke-dasharray:90;\n  stroke-linecap:round\n}\n\n.multiSelect.svelte-17l1npl.svelte-17l1npl{\n  display:flex;\n  padding:var(--multiSelectPadding, 0 35px 0 16px);\n  height:auto;\n  flex-wrap:wrap;\n  align-items:stretch\n}\n\n.multiSelect.svelte-17l1npl>.svelte-17l1npl{\n  flex:1 1 50px\n}\n\n.selectContainer.multiSelect.svelte-17l1npl input.svelte-17l1npl{\n  padding:var(--multiSelectInputPadding, 0);\n  position:relative;\n  margin:var(--multiSelectInputMargin, 0)\n}\n\n.hasError.svelte-17l1npl.svelte-17l1npl{\n  border:var(--errorBorder, 1px solid #ff2d55);\n  background:var(--errorBackground, #fff)\n}\n\n.a11yText.svelte-17l1npl.svelte-17l1npl{\n  z-index:9999;\n  border:0px;\n  clip:rect(1px, 1px, 1px, 1px);\n  height:1px;\n  width:1px;\n  position:absolute;\n  overflow:hidden;\n  padding:0px;\n  white-space:nowrap\n}\n\n@-webkit-keyframes svelte-17l1npl-rotate{\n  100%{\n    transform:rotate(360deg)\n  }\n}\n\n@keyframes svelte-17l1npl-rotate{\n  100%{\n    transform:rotate(360deg)\n  }\n}\n\n/* purgecss end ignore */")();
const { Object: Object_1 } = import_index_0029e4b6.x;
const css$1 = {
  code: ".selectContainer.svelte-17l1npl.svelte-17l1npl{--internalPadding:0 16px;border:var(--border, 1px solid #d8dbdf);border-radius:var(--borderRadius, 3px);box-sizing:border-box;height:var(--height, 42px);position:relative;display:flex;align-items:center;padding:var(--padding, var(--internalPadding));background:var(--background, #fff);margin:var(--margin, 0)}.selectContainer.svelte-17l1npl input.svelte-17l1npl{cursor:default;border:none;color:var(--inputColor, #3f4f5f);height:var(--height, 42px);line-height:var(--height, 42px);padding:var(--inputPadding, var(--padding, var(--internalPadding)));width:100%;background:transparent;font-size:var(--inputFontSize, 14px);letter-spacing:var(--inputLetterSpacing, -0.08px);position:absolute;left:var(--inputLeft, 0);margin:var(--inputMargin, 0)}.selectContainer.svelte-17l1npl input.svelte-17l1npl::placeholder{color:var(--placeholderColor, #78848f);opacity:var(--placeholderOpacity, 1)}.selectContainer.svelte-17l1npl input.svelte-17l1npl:focus{outline:none}.selectContainer.svelte-17l1npl.svelte-17l1npl:hover{border-color:var(--borderHoverColor, #b2b8bf)}.selectContainer.focused.svelte-17l1npl.svelte-17l1npl{border-color:var(--borderFocusColor, #006fe8)}.selectContainer.disabled.svelte-17l1npl.svelte-17l1npl{background:var(--disabledBackground, #ebedef);border-color:var(--disabledBorderColor, #ebedef);color:var(--disabledColor, #c1c6cc)}.selectContainer.disabled.svelte-17l1npl input.svelte-17l1npl::placeholder{color:var(--disabledPlaceholderColor, #c1c6cc);opacity:var(--disabledPlaceholderOpacity, 1)}.selectedItem.svelte-17l1npl.svelte-17l1npl{line-height:var(--height, 42px);height:var(--height, 42px);overflow-x:hidden;padding:var(--selectedItemPadding, 0 20px 0 0)}.selectedItem.svelte-17l1npl.svelte-17l1npl:focus{outline:none}.clearSelect.svelte-17l1npl.svelte-17l1npl{position:absolute;right:var(--clearSelectRight, 10px);top:var(--clearSelectTop, 11px);bottom:var(--clearSelectBottom, 11px);width:var(--clearSelectWidth, 20px);color:var(--clearSelectColor, #c5cacf);flex:none !important}.clearSelect.svelte-17l1npl.svelte-17l1npl:hover{color:var(--clearSelectHoverColor, #2c3e50)}.selectContainer.focused.svelte-17l1npl .clearSelect.svelte-17l1npl{color:var(--clearSelectFocusColor, #3f4f5f)}.indicator.svelte-17l1npl.svelte-17l1npl{position:absolute;right:var(--indicatorRight, 10px);top:var(--indicatorTop, 11px);width:var(--indicatorWidth, 20px);height:var(--indicatorHeight, 20px);color:var(--indicatorColor, #c5cacf)}.indicator.svelte-17l1npl svg.svelte-17l1npl{display:inline-block;fill:var(--indicatorFill, currentcolor);line-height:1;stroke:var(--indicatorStroke, currentcolor);stroke-width:0}.spinner.svelte-17l1npl.svelte-17l1npl{position:absolute;right:var(--spinnerRight, 10px);top:var(--spinnerLeft, 11px);width:var(--spinnerWidth, 20px);height:var(--spinnerHeight, 20px);color:var(--spinnerColor, #51ce6c);animation:svelte-17l1npl-rotate 0.75s linear infinite}.spinner_icon.svelte-17l1npl.svelte-17l1npl{display:block;height:100%;transform-origin:center center;width:100%;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;-webkit-transform:none}.spinner_path.svelte-17l1npl.svelte-17l1npl{stroke-dasharray:90;stroke-linecap:round}.multiSelect.svelte-17l1npl.svelte-17l1npl{display:flex;padding:var(--multiSelectPadding, 0 35px 0 16px);height:auto;flex-wrap:wrap;align-items:stretch}.multiSelect.svelte-17l1npl>.svelte-17l1npl{flex:1 1 50px}.selectContainer.multiSelect.svelte-17l1npl input.svelte-17l1npl{padding:var(--multiSelectInputPadding, 0);position:relative;margin:var(--multiSelectInputMargin, 0)}.hasError.svelte-17l1npl.svelte-17l1npl{border:var(--errorBorder, 1px solid #ff2d55);background:var(--errorBackground, #fff)}.a11yText.svelte-17l1npl.svelte-17l1npl{z-index:9999;border:0px;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0px;white-space:nowrap}@keyframes svelte-17l1npl-rotate{100%{transform:rotate(360deg)}}",
  map: null
};
function convertStringItemsToObjects(_items) {
  return _items.map((item, index) => {
    return { index, value: item, label: `${item}` };
  });
}
const Select = (0, import_index_0029e4b6.c)(($$result, $$props, $$bindings, slots) => {
  let filteredItems;
  let showSelectedItem;
  let showClearIcon;
  let placeholderText;
  let showMultiSelect;
  let listProps;
  let ariaSelection;
  let ariaContext;
  const dispatch = (0, import_index_0029e4b6.h)();
  let { id = null } = $$props;
  let { container = void 0 } = $$props;
  let { input = void 0 } = $$props;
  let { isMulti = false } = $$props;
  let { multiFullItemClearable = false } = $$props;
  let { isDisabled = false } = $$props;
  let { isCreatable = false } = $$props;
  let { isFocused = false } = $$props;
  let { value = null } = $$props;
  let { filterText = "" } = $$props;
  let { placeholder = "Select..." } = $$props;
  let { placeholderAlwaysShow = false } = $$props;
  let { items = null } = $$props;
  let { itemFilter = (label, filterText2, option) => `${label}`.toLowerCase().includes(filterText2.toLowerCase()) } = $$props;
  let { groupBy = void 0 } = $$props;
  let { groupFilter = (groups) => groups } = $$props;
  let { isGroupHeaderSelectable = false } = $$props;
  let { getGroupHeaderLabel = (option) => {
    return option[labelIdentifier] || option.id;
  } } = $$props;
  let { labelIdentifier = "label" } = $$props;
  let { getOptionLabel = (option, filterText2) => {
    return option.isCreator ? `Create "${filterText2}"` : option[labelIdentifier];
  } } = $$props;
  let { optionIdentifier = "value" } = $$props;
  let { loadOptions = void 0 } = $$props;
  let { hasError = false } = $$props;
  let { containerStyles = "" } = $$props;
  let { getSelectionLabel = (option) => {
    if (option)
      return option[labelIdentifier];
    else
      return null;
  } } = $$props;
  let { createGroupHeaderItem = (groupValue) => {
    return { value: groupValue, label: groupValue };
  } } = $$props;
  let { createItem = (filterText2) => {
    return { value: filterText2, label: filterText2 };
  } } = $$props;
  const getFilteredItems = () => {
    return filteredItems;
  };
  let { isSearchable = true } = $$props;
  let { inputStyles = "" } = $$props;
  let { isClearable = true } = $$props;
  let { isWaiting = false } = $$props;
  let { listPlacement = "auto" } = $$props;
  let { listOpen = false } = $$props;
  let { isVirtualList = false } = $$props;
  let { loadOptionsInterval = 300 } = $$props;
  let { noOptionsMessage = "No options" } = $$props;
  let { hideEmptyState = false } = $$props;
  let { inputAttributes = {} } = $$props;
  let { listAutoWidth = true } = $$props;
  let { itemHeight = 40 } = $$props;
  let { Icon = void 0 } = $$props;
  let { iconProps = {} } = $$props;
  let { showChevron = false } = $$props;
  let { showIndicator = false } = $$props;
  let { containerClasses = "" } = $$props;
  let { indicatorSvg = void 0 } = $$props;
  let { listOffset = 5 } = $$props;
  let { ClearIcon: ClearIcon$1 = ClearIcon } = $$props;
  let { Item: Item$1 = Item } = $$props;
  let { List: List$1 = List } = $$props;
  let { Selection: Selection$1 = Selection } = $$props;
  let { MultiSelection: MultiSelection$1 = MultiSelection } = $$props;
  let { VirtualList: VirtualList$1 = VirtualList } = $$props;
  function filterMethod(args) {
    if (args.loadOptions && args.filterText.length > 0)
      return;
    if (!args.items)
      return [];
    if (args.items && args.items.length > 0 && typeof args.items[0] !== "object") {
      args.items = convertStringItemsToObjects(args.items);
    }
    let filterResults = args.items.filter((item) => {
      let matchesFilter = itemFilter(getOptionLabel(item, args.filterText), args.filterText, item);
      if (matchesFilter && args.isMulti && args.value && Array.isArray(args.value)) {
        matchesFilter = !args.value.some((x) => {
          return x[args.optionIdentifier] === item[args.optionIdentifier];
        });
      }
      return matchesFilter;
    });
    if (args.groupBy) {
      filterResults = filterGroupedItems(filterResults);
    }
    if (args.isCreatable) {
      filterResults = addCreatableItem(filterResults, args.filterText);
    }
    return filterResults;
  }
  function addCreatableItem(_items, _filterText) {
    if (_filterText.length === 0)
      return _items;
    const itemToCreate = createItem(_filterText);
    if (_items[0] && _filterText === _items[0][labelIdentifier])
      return _items;
    itemToCreate.isCreator = true;
    return [..._items, itemToCreate];
  }
  let { selectedValue = null } = $$props;
  let activeValue;
  let prev_value;
  let prev_filterText;
  let prev_isFocused;
  let hoverItemIndex;
  const getItems = debounce(async () => {
    isWaiting = true;
    let res = await loadOptions(filterText).catch((err) => {
      console.warn("svelte-select loadOptions error :>> ", err);
      dispatch("error", { type: "loadOptions", details: err });
    });
    if (res && !res.cancelled) {
      if (res) {
        if (res && res.length > 0 && typeof res[0] !== "object") {
          res = convertStringItemsToObjects(res);
        }
        filteredItems = [...res];
        dispatch("loaded", { items: filteredItems });
      } else {
        filteredItems = [];
      }
      if (isCreatable) {
        filteredItems = addCreatableItem(filteredItems, filterText);
      }
      isWaiting = false;
      isFocused = true;
      listOpen = true;
    }
  }, loadOptionsInterval);
  function setValue() {
    if (typeof value === "string") {
      value = { [optionIdentifier]: value, label: value };
    } else if (isMulti && Array.isArray(value) && value.length > 0) {
      value = value.map((item) => typeof item === "string" ? { value: item, label: item } : item);
    }
  }
  let _inputAttributes;
  function assignInputAttributes() {
    _inputAttributes = Object.assign({
      autocapitalize: "none",
      autocomplete: "off",
      autocorrect: "off",
      spellcheck: false,
      tabindex: 0,
      type: "text",
      "aria-autocomplete": "list"
    }, inputAttributes);
    if (id) {
      _inputAttributes.id = id;
    }
    if (!isSearchable) {
      _inputAttributes.readonly = true;
    }
  }
  function filterGroupedItems(_items) {
    const groupValues = [];
    const groups = {};
    _items.forEach((item) => {
      const groupValue = groupBy(item);
      if (!groupValues.includes(groupValue)) {
        groupValues.push(groupValue);
        groups[groupValue] = [];
        if (groupValue) {
          groups[groupValue].push(Object.assign(createGroupHeaderItem(groupValue, item), {
            id: groupValue,
            isGroupHeader: true,
            isSelectable: isGroupHeaderSelectable
          }));
        }
      }
      groups[groupValue].push(Object.assign({ isGroupItem: !!groupValue }, item));
    });
    const sortedGroupedItems = [];
    groupFilter(groupValues).forEach((groupValue) => {
      sortedGroupedItems.push(...groups[groupValue]);
    });
    return sortedGroupedItems;
  }
  function dispatchSelectedItem() {
    if (isMulti) {
      if (JSON.stringify(value) !== JSON.stringify(prev_value)) {
        if (checkValueForDuplicates()) {
          dispatch("select", value);
        }
      }
      return;
    }
    {
      dispatch("select", value);
    }
  }
  function setupFocus() {
    if (isFocused || listOpen) {
      handleFocus();
    } else {
      if (input)
        input.blur();
    }
  }
  function setupMulti() {
    if (value) {
      if (Array.isArray(value)) {
        value = [...value];
      } else {
        value = [value];
      }
    }
  }
  function setupFilterText() {
    if (filterText.length === 0)
      return;
    isFocused = true;
    listOpen = true;
    if (loadOptions) {
      getItems();
    } else {
      listOpen = true;
      if (isMulti) {
        activeValue = void 0;
      }
    }
  }
  function checkValueForDuplicates() {
    let noDuplicates = true;
    if (value) {
      const ids = [];
      const uniqueValues = [];
      value.forEach((val) => {
        if (!ids.includes(val[optionIdentifier])) {
          ids.push(val[optionIdentifier]);
          uniqueValues.push(val);
        } else {
          noDuplicates = false;
        }
      });
      if (!noDuplicates)
        value = uniqueValues;
    }
    return noDuplicates;
  }
  function findItem(selection) {
    let matchTo = selection ? selection[optionIdentifier] : value[optionIdentifier];
    return items.find((item) => item[optionIdentifier] === matchTo);
  }
  function updateValueDisplay(items2) {
    if (!items2 || items2.length === 0 || items2.some((item) => typeof item !== "object"))
      return;
    if (!value || (isMulti ? value.some((selection) => !selection || !selection[optionIdentifier]) : !value[optionIdentifier]))
      return;
    if (Array.isArray(value)) {
      value = value.map((selection) => findItem(selection) || selection);
    } else {
      value = findItem() || value;
    }
  }
  function handleFocus() {
    isFocused = true;
    if (input)
      input.focus();
  }
  function handleClear() {
    value = void 0;
    listOpen = false;
    dispatch("clear", value);
    handleFocus();
  }
  let { ariaValues = (values) => {
    return `Option ${values}, selected.`;
  } } = $$props;
  let { ariaListOpen = (label, count) => {
    return `You are currently focused on option ${label}. There are ${count} results available.`;
  } } = $$props;
  let { ariaFocused = () => {
    return `Select is focused, type to refine list, press down to open the menu.`;
  } } = $$props;
  function handleAriaSelection() {
    let selected = void 0;
    if (isMulti && value.length > 0) {
      selected = value.map((v) => getSelectionLabel(v)).join(", ");
    } else {
      selected = getSelectionLabel(value);
    }
    return ariaValues(selected);
  }
  function handleAriaContent() {
    if (!isFocused || !filteredItems || filteredItems.length === 0)
      return "";
    let _item = filteredItems[hoverItemIndex];
    if (listOpen && _item) {
      let label = getSelectionLabel(_item);
      let count = filteredItems ? filteredItems.length : 0;
      return ariaListOpen(label, count);
    } else {
      return ariaFocused();
    }
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.container === void 0 && $$bindings.container && container !== void 0)
    $$bindings.container(container);
  if ($$props.input === void 0 && $$bindings.input && input !== void 0)
    $$bindings.input(input);
  if ($$props.isMulti === void 0 && $$bindings.isMulti && isMulti !== void 0)
    $$bindings.isMulti(isMulti);
  if ($$props.multiFullItemClearable === void 0 && $$bindings.multiFullItemClearable && multiFullItemClearable !== void 0)
    $$bindings.multiFullItemClearable(multiFullItemClearable);
  if ($$props.isDisabled === void 0 && $$bindings.isDisabled && isDisabled !== void 0)
    $$bindings.isDisabled(isDisabled);
  if ($$props.isCreatable === void 0 && $$bindings.isCreatable && isCreatable !== void 0)
    $$bindings.isCreatable(isCreatable);
  if ($$props.isFocused === void 0 && $$bindings.isFocused && isFocused !== void 0)
    $$bindings.isFocused(isFocused);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.filterText === void 0 && $$bindings.filterText && filterText !== void 0)
    $$bindings.filterText(filterText);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.placeholderAlwaysShow === void 0 && $$bindings.placeholderAlwaysShow && placeholderAlwaysShow !== void 0)
    $$bindings.placeholderAlwaysShow(placeholderAlwaysShow);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.itemFilter === void 0 && $$bindings.itemFilter && itemFilter !== void 0)
    $$bindings.itemFilter(itemFilter);
  if ($$props.groupBy === void 0 && $$bindings.groupBy && groupBy !== void 0)
    $$bindings.groupBy(groupBy);
  if ($$props.groupFilter === void 0 && $$bindings.groupFilter && groupFilter !== void 0)
    $$bindings.groupFilter(groupFilter);
  if ($$props.isGroupHeaderSelectable === void 0 && $$bindings.isGroupHeaderSelectable && isGroupHeaderSelectable !== void 0)
    $$bindings.isGroupHeaderSelectable(isGroupHeaderSelectable);
  if ($$props.getGroupHeaderLabel === void 0 && $$bindings.getGroupHeaderLabel && getGroupHeaderLabel !== void 0)
    $$bindings.getGroupHeaderLabel(getGroupHeaderLabel);
  if ($$props.labelIdentifier === void 0 && $$bindings.labelIdentifier && labelIdentifier !== void 0)
    $$bindings.labelIdentifier(labelIdentifier);
  if ($$props.getOptionLabel === void 0 && $$bindings.getOptionLabel && getOptionLabel !== void 0)
    $$bindings.getOptionLabel(getOptionLabel);
  if ($$props.optionIdentifier === void 0 && $$bindings.optionIdentifier && optionIdentifier !== void 0)
    $$bindings.optionIdentifier(optionIdentifier);
  if ($$props.loadOptions === void 0 && $$bindings.loadOptions && loadOptions !== void 0)
    $$bindings.loadOptions(loadOptions);
  if ($$props.hasError === void 0 && $$bindings.hasError && hasError !== void 0)
    $$bindings.hasError(hasError);
  if ($$props.containerStyles === void 0 && $$bindings.containerStyles && containerStyles !== void 0)
    $$bindings.containerStyles(containerStyles);
  if ($$props.getSelectionLabel === void 0 && $$bindings.getSelectionLabel && getSelectionLabel !== void 0)
    $$bindings.getSelectionLabel(getSelectionLabel);
  if ($$props.createGroupHeaderItem === void 0 && $$bindings.createGroupHeaderItem && createGroupHeaderItem !== void 0)
    $$bindings.createGroupHeaderItem(createGroupHeaderItem);
  if ($$props.createItem === void 0 && $$bindings.createItem && createItem !== void 0)
    $$bindings.createItem(createItem);
  if ($$props.getFilteredItems === void 0 && $$bindings.getFilteredItems && getFilteredItems !== void 0)
    $$bindings.getFilteredItems(getFilteredItems);
  if ($$props.isSearchable === void 0 && $$bindings.isSearchable && isSearchable !== void 0)
    $$bindings.isSearchable(isSearchable);
  if ($$props.inputStyles === void 0 && $$bindings.inputStyles && inputStyles !== void 0)
    $$bindings.inputStyles(inputStyles);
  if ($$props.isClearable === void 0 && $$bindings.isClearable && isClearable !== void 0)
    $$bindings.isClearable(isClearable);
  if ($$props.isWaiting === void 0 && $$bindings.isWaiting && isWaiting !== void 0)
    $$bindings.isWaiting(isWaiting);
  if ($$props.listPlacement === void 0 && $$bindings.listPlacement && listPlacement !== void 0)
    $$bindings.listPlacement(listPlacement);
  if ($$props.listOpen === void 0 && $$bindings.listOpen && listOpen !== void 0)
    $$bindings.listOpen(listOpen);
  if ($$props.isVirtualList === void 0 && $$bindings.isVirtualList && isVirtualList !== void 0)
    $$bindings.isVirtualList(isVirtualList);
  if ($$props.loadOptionsInterval === void 0 && $$bindings.loadOptionsInterval && loadOptionsInterval !== void 0)
    $$bindings.loadOptionsInterval(loadOptionsInterval);
  if ($$props.noOptionsMessage === void 0 && $$bindings.noOptionsMessage && noOptionsMessage !== void 0)
    $$bindings.noOptionsMessage(noOptionsMessage);
  if ($$props.hideEmptyState === void 0 && $$bindings.hideEmptyState && hideEmptyState !== void 0)
    $$bindings.hideEmptyState(hideEmptyState);
  if ($$props.inputAttributes === void 0 && $$bindings.inputAttributes && inputAttributes !== void 0)
    $$bindings.inputAttributes(inputAttributes);
  if ($$props.listAutoWidth === void 0 && $$bindings.listAutoWidth && listAutoWidth !== void 0)
    $$bindings.listAutoWidth(listAutoWidth);
  if ($$props.itemHeight === void 0 && $$bindings.itemHeight && itemHeight !== void 0)
    $$bindings.itemHeight(itemHeight);
  if ($$props.Icon === void 0 && $$bindings.Icon && Icon !== void 0)
    $$bindings.Icon(Icon);
  if ($$props.iconProps === void 0 && $$bindings.iconProps && iconProps !== void 0)
    $$bindings.iconProps(iconProps);
  if ($$props.showChevron === void 0 && $$bindings.showChevron && showChevron !== void 0)
    $$bindings.showChevron(showChevron);
  if ($$props.showIndicator === void 0 && $$bindings.showIndicator && showIndicator !== void 0)
    $$bindings.showIndicator(showIndicator);
  if ($$props.containerClasses === void 0 && $$bindings.containerClasses && containerClasses !== void 0)
    $$bindings.containerClasses(containerClasses);
  if ($$props.indicatorSvg === void 0 && $$bindings.indicatorSvg && indicatorSvg !== void 0)
    $$bindings.indicatorSvg(indicatorSvg);
  if ($$props.listOffset === void 0 && $$bindings.listOffset && listOffset !== void 0)
    $$bindings.listOffset(listOffset);
  if ($$props.ClearIcon === void 0 && $$bindings.ClearIcon && ClearIcon$1 !== void 0)
    $$bindings.ClearIcon(ClearIcon$1);
  if ($$props.Item === void 0 && $$bindings.Item && Item$1 !== void 0)
    $$bindings.Item(Item$1);
  if ($$props.List === void 0 && $$bindings.List && List$1 !== void 0)
    $$bindings.List(List$1);
  if ($$props.Selection === void 0 && $$bindings.Selection && Selection$1 !== void 0)
    $$bindings.Selection(Selection$1);
  if ($$props.MultiSelection === void 0 && $$bindings.MultiSelection && MultiSelection$1 !== void 0)
    $$bindings.MultiSelection(MultiSelection$1);
  if ($$props.VirtualList === void 0 && $$bindings.VirtualList && VirtualList$1 !== void 0)
    $$bindings.VirtualList(VirtualList$1);
  if ($$props.selectedValue === void 0 && $$bindings.selectedValue && selectedValue !== void 0)
    $$bindings.selectedValue(selectedValue);
  if ($$props.handleClear === void 0 && $$bindings.handleClear && handleClear !== void 0)
    $$bindings.handleClear(handleClear);
  if ($$props.ariaValues === void 0 && $$bindings.ariaValues && ariaValues !== void 0)
    $$bindings.ariaValues(ariaValues);
  if ($$props.ariaListOpen === void 0 && $$bindings.ariaListOpen && ariaListOpen !== void 0)
    $$bindings.ariaListOpen(ariaListOpen);
  if ($$props.ariaFocused === void 0 && $$bindings.ariaFocused && ariaFocused !== void 0)
    $$bindings.ariaFocused(ariaFocused);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    filteredItems = filterMethod({
      loadOptions,
      filterText,
      items,
      value,
      isMulti,
      optionIdentifier,
      groupBy,
      isCreatable
    });
    {
      {
        if (selectedValue)
          console.warn("selectedValue is no longer used. Please use value instead.");
      }
    }
    {
      updateValueDisplay(items);
    }
    {
      {
        if (value)
          setValue();
      }
    }
    {
      {
        if (inputAttributes || !isSearchable)
          assignInputAttributes();
      }
    }
    {
      {
        if (isMulti) {
          setupMulti();
        }
      }
    }
    {
      {
        if (isMulti && value && value.length > 1) {
          checkValueForDuplicates();
        }
      }
    }
    {
      {
        if (value)
          dispatchSelectedItem();
      }
    }
    {
      {
        if (!value && isMulti && prev_value) {
          dispatch("select", value);
        }
      }
    }
    {
      {
        if (isFocused !== prev_isFocused) {
          setupFocus();
        }
      }
    }
    {
      {
        if (filterText !== prev_filterText) {
          setupFilterText();
        }
      }
    }
    showSelectedItem = value && filterText.length === 0;
    showClearIcon = showSelectedItem && isClearable && !isDisabled && !isWaiting;
    placeholderText = placeholderAlwaysShow && isMulti ? placeholder : value ? "" : placeholder;
    showMultiSelect = isMulti && value && value.length > 0;
    listProps = {
      Item: Item$1,
      filterText,
      optionIdentifier,
      noOptionsMessage,
      hideEmptyState,
      isVirtualList,
      VirtualList: VirtualList$1,
      value,
      isMulti,
      getGroupHeaderLabel,
      items: filteredItems,
      itemHeight,
      getOptionLabel,
      listPlacement,
      parent: container,
      listAutoWidth,
      listOffset
    };
    ariaSelection = value ? handleAriaSelection() : "";
    ariaContext = handleAriaContent();
    $$rendered = `

<div class="${[
      "selectContainer " + (0, import_index_0029e4b6.f)(containerClasses) + " svelte-17l1npl",
      (hasError ? "hasError" : "") + " " + (isMulti ? "multiSelect" : "") + " " + (isDisabled ? "disabled" : "") + " " + (isFocused ? "focused" : "")
    ].join(" ").trim()}"${(0, import_index_0029e4b6.i)("style", containerStyles, 0)}${(0, import_index_0029e4b6.i)("this", container, 0)}><span aria-live="${"polite"}" aria-atomic="${"false"}" aria-relevant="${"additions text"}" class="${"a11yText svelte-17l1npl"}">${isFocused ? `<span id="${"aria-selection"}">${(0, import_index_0029e4b6.f)(ariaSelection)}</span>
            <span id="${"aria-context"}">${(0, import_index_0029e4b6.f)(ariaContext)}</span>` : ``}</span>

    ${Icon ? `${(0, import_index_0029e4b6.v)(Icon || import_index_0029e4b6.m, "svelte:component").$$render($$result, Object_1.assign(iconProps), {}, {})}` : ``}

    ${showMultiSelect ? `${(0, import_index_0029e4b6.v)(MultiSelection$1 || import_index_0029e4b6.m, "svelte:component").$$render($$result, {
      value,
      getSelectionLabel,
      activeValue,
      isDisabled,
      multiFullItemClearable
    }, {}, {})}` : ``}

    <input${(0, import_index_0029e4b6.o)([
      { readonly: !isSearchable || null },
      (0, import_index_0029e4b6.q)(_inputAttributes),
      {
        placeholder: (0, import_index_0029e4b6.p)(placeholderText)
      },
      {
        style: (0, import_index_0029e4b6.p)(inputStyles)
      },
      { disabled: isDisabled || null }
    ], { classes: "svelte-17l1npl" })}${(0, import_index_0029e4b6.i)("this", input, 0)}${(0, import_index_0029e4b6.i)("value", filterText, 0)}>

    ${!isMulti && showSelectedItem ? `<div class="${"selectedItem svelte-17l1npl"}">${(0, import_index_0029e4b6.v)(Selection$1 || import_index_0029e4b6.m, "svelte:component").$$render($$result, { item: value, getSelectionLabel }, {}, {})}</div>` : ``}

    ${showClearIcon ? `<div class="${"clearSelect svelte-17l1npl"}" aria-hidden="${"true"}">${(0, import_index_0029e4b6.v)(ClearIcon$1 || import_index_0029e4b6.m, "svelte:component").$$render($$result, {}, {}, {})}</div>` : ``}

    ${!showClearIcon && (showIndicator || showChevron && !value || !isSearchable && !isDisabled && !isWaiting && (showSelectedItem && !isClearable || !showSelectedItem)) ? `<div class="${"indicator svelte-17l1npl"}" aria-hidden="${"true"}">${indicatorSvg ? `<!-- HTML_TAG_START -->${indicatorSvg}<!-- HTML_TAG_END -->` : `<svg width="${"100%"}" height="${"100%"}" viewBox="${"0 0 20 20"}" focusable="${"false"}" aria-hidden="${"true"}" class="${"svelte-17l1npl"}"><path d="${"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747\n          3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0\n          1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502\n          0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0\n          0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}"></path></svg>`}</div>` : ``}

    ${isWaiting ? `<div class="${"spinner svelte-17l1npl"}"><svg class="${"spinner_icon svelte-17l1npl"}" viewBox="${"25 25 50 50"}"><circle class="${"spinner_path svelte-17l1npl"}" cx="${"50"}" cy="${"50"}" r="${"20"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"5"}" stroke-miterlimit="${"10"}"></circle></svg></div>` : ``}

    ${listOpen ? `${(0, import_index_0029e4b6.v)(List$1 || import_index_0029e4b6.m, "svelte:component").$$render($$result, Object_1.assign(listProps, { hoverItemIndex }), {
      hoverItemIndex: ($$value) => {
        hoverItemIndex = $$value;
        $$settled = false;
      }
    }, {})}` : ``}

    ${!isMulti || isMulti && !showMultiSelect ? `<input${(0, import_index_0029e4b6.i)("name", inputAttributes.name, 0)} type="${"hidden"}"${(0, import_index_0029e4b6.i)("value", value ? getSelectionLabel(value) : null, 0)} class="${"svelte-17l1npl"}">` : ``}

    ${isMulti && showMultiSelect ? `${(0, import_index_0029e4b6.j)(value, (item) => {
      return `<input${(0, import_index_0029e4b6.i)("name", inputAttributes.name, 0)} type="${"hidden"}"${(0, import_index_0029e4b6.i)("value", item ? getSelectionLabel(item) : null, 0)} class="${"svelte-17l1npl"}">`;
    })}` : ``}</div>`;
  } while (!$$settled);
  return $$rendered;
});
var Select_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\n.selectbox.svelte-1w33mjb{\n  box-sizing:border-box;\n  margin:0;\n  border:0\n}\n\n.selectbox.svelte-1w33mjb{\n  --border:2px solid var(--borderColor, #206095);\n  --borderRadius:0;\n  --listBorderRadius:0;\n  --itemFirstBorderRadius:0;\n  --multiItemBorderRadius:0;\n  --padding:0 8px;\n  --multiSelectPadding:0 8px;\n  --clearSelectBottom:auto;\n  --clearSelectRight:8px;\n  --clearSelectTop:auto;\n  --clearSelectWidth:24px;\n  --clearSelectColor:#206095;\n  --borderHoverColor:var(--borderColor, #206095);\n  --borderFocusColor:var(--borderColor, #206095);\n  --inputColor:#206095;\n  --itemColor:#206095;\n  --placeholderColor:#206095;\n  --itemIsActiveBG:#206095;\n  --itemHoverBG:#3875d7;\n  --itemHoverColor:white;\n  --clearSelectColor:white;\n  --clearSelectFocusColor:white;\n  --clearSelectHoverColor:white;\n  --indicatorColor:white;\n  --multiItemActiveColor:white;\n  --multiClearFill:white;\n  --multiClearBG:none;\n  --multiClearHoverBG:none;\n  --multiItemBG:grey;\n  --multiItemActiveBG:grey;\n  --spinnerColor:rgba(255,255,255,0)\n}\n\n.selectbox, .selectbox input, .selectbox .item, .selectbox svg{\n  cursor:pointer !important\n}\n\n.selectbox input:focus{\n  cursor:default !important\n}\n\n.selectbox > .selectContainer{\n  box-shadow:inset -40px 0px #206095\n}\n\n.selectbox.multi-selected > .selectContainer{\n  box-shadow:none !important\n}\n\n.selectbox.focused > .selectContainer{\n  outline:4px solid orange\n}\n\n.selectbox.selected > .selectContainer{\n  background-color:#206095 !important\n}\n\n.selectbox.selected .selectedItem{\n  color:white !important;\n  font-weight:bold\n}\n\n.selectbox .selectedItem .group{\n  display:none\n}\n\n.selectbox .item > .group{\n  font-size:smaller;\n  opacity:0.7\n}\n\n.selectbox .selectContainer > .multiSelectItem{\n  color:white !important;\n  font-weight:bold\n}\n\n.selectbox .selectContainer > .multiSelectItem:nth-of-type(1){\n  background-color:var(--firstItem) !important\n}\n\n.selectbox .selectContainer > .multiSelectItem:nth-of-type(2){\n  background-color:var(--secondItem) !important\n}\n\n.selectbox .selectContainer > .multiSelectItem:nth-of-type(3){\n  background-color:var(--thirdItem) !important\n}\n\n.selectbox .selectContainer > .multiSelectItem:nth-of-type(4){\n  background-color:var(--fourthItem) !important\n}\n\n.selectbox .indicator svg{\n  fill:white\n}\n\n.selectbox .clearSelect{\n  height:24px\n}\n\n.selectbox .clearSelect:focus{\n  outline:4px solid orange\n}\n\n.selectbox .indicator{\n  width:20px;\n  height:20px;\n  line-height:1\n}\n\n.selectbox .multiSelectItem .group{\n  display:none\n}\n\n/* purgecss end ignore */")();
const css = {
  code: ".selectbox.svelte-1w33mjb{box-sizing:border-box;margin:0;border:0}.selectbox.svelte-1w33mjb{--border:2px solid var(--borderColor, #206095);--borderRadius:0;--listBorderRadius:0;--itemFirstBorderRadius:0;--multiItemBorderRadius:0;--padding:0 8px;--multiSelectPadding:0 8px;--clearSelectBottom:auto;--clearSelectRight:8px;--clearSelectTop:auto;--clearSelectWidth:24px;--clearSelectColor:#206095;--borderHoverColor:var(--borderColor, #206095);--borderFocusColor:var(--borderColor, #206095);--inputColor:#206095;--itemColor:#206095;--placeholderColor:#206095;--itemIsActiveBG:#206095;--itemHoverBG:#3875d7;--itemHoverColor:white;--clearSelectColor:white;--clearSelectFocusColor:white;--clearSelectHoverColor:white;--indicatorColor:white;--multiItemActiveColor:white;--multiClearFill:white;--multiClearBG:none;--multiClearHoverBG:none;--multiItemBG:grey;--multiItemActiveBG:grey;--spinnerColor:rgba(255,255,255,0)}.selectbox, .selectbox input, .selectbox .item, .selectbox svg{cursor:pointer !important}.selectbox input:focus{cursor:default !important}.selectbox > .selectContainer{box-shadow:inset -40px 0px #206095}.selectbox.multi-selected > .selectContainer{box-shadow:none !important}.selectbox.focused > .selectContainer{outline:4px solid orange}.selectbox.selected > .selectContainer{background-color:#206095 !important}.selectbox.selected .selectedItem{color:white !important;font-weight:bold}.selectbox .selectedItem .group{display:none}.selectbox .item > .group{font-size:smaller;opacity:0.7}.selectbox .selectContainer > .multiSelectItem{color:white !important;font-weight:bold}.selectbox .selectContainer > .multiSelectItem:nth-of-type(1){background-color:var(--firstItem) !important}.selectbox .selectContainer > .multiSelectItem:nth-of-type(2){background-color:var(--secondItem) !important}.selectbox .selectContainer > .multiSelectItem:nth-of-type(3){background-color:var(--thirdItem) !important}.selectbox .selectContainer > .multiSelectItem:nth-of-type(4){background-color:var(--fourthItem) !important}.selectbox .indicator svg{fill:white}.selectbox .clearSelect{height:24px}.selectbox .clearSelect:focus{outline:4px solid orange}.selectbox .indicator{width:20px;height:20px;line-height:1}.selectbox .multiSelectItem .group{display:none}",
  map: null
};
const Select_1 = (0, import_index_0029e4b6.c)(($$result, $$props, $$bindings, slots) => {
  let noOptionsMessage;
  let itemFilter;
  const searchIcon = `<svg viewBox="0 0 20 20" fill-rule="evenodd"><path d="M0,8a8,8,0,1,0,16,0a8,8,0,1,0,-16,0ZM3,8a5,5,0,1,0,10,0a5,5,0,1,0,-10,0Z"/><path d="M18,20L20,18L14,12L12,14Z"/></svg>`;
  const chevronIcon = `<svg viewBox="0 0 20 20"><path d="M1,6L19,6L10,15Z"/></svg>`;
  (0, import_index_0029e4b6.h)();
  let { id = "" } = $$props;
  let { container = void 0 } = $$props;
  let { mode = "default" } = $$props;
  let { items } = $$props;
  let { placeholder = "Select one..." } = $$props;
  let { value = null } = $$props;
  let { filterText = "" } = $$props;
  let { isSearchable = true } = $$props;
  let { isClearable = true } = $$props;
  let { autoClear = false } = $$props;
  let { idKey = "value" } = $$props;
  let { labelKey = "label" } = $$props;
  let { groupKey = null } = $$props;
  let { groupItems = false } = $$props;
  let { loadOptions = void 0 } = $$props;
  let { fontSize = "1em" } = $$props;
  let { height = 42 } = $$props;
  let { isMulti = false } = $$props;
  let { maxSelected = 4 } = $$props;
  let { colors = ["#206095", "#a8bd3a", "#871a5b", "#27a0cc"] } = $$props;
  let { darkMode = false } = $$props;
  let { borderColor = darkMode ? "white" : "#206095" } = $$props;
  const getOptionLabel = groupKey && !groupItems ? (option) => `${option[labelKey]} <span class="group">${option[groupKey]}</span>` : (option) => option[labelKey];
  let { getSelectionLabel = (option) => {
    if (option)
      return getOptionLabel(option);
    else
      return null;
  } } = $$props;
  const groupBy = groupItems && groupKey ? (item) => item[groupKey] : void 0;
  const indicatorSvg = mode == "search" ? searchIcon : chevronIcon;
  const containerStyles = `--inputFontSize: ${fontSize}; --groupTitleFontSize: ${fontSize}; --height: ${height}px; font-size: ${fontSize};`;
  const ariaValues = (values) => `${values}, selected.`;
  const ariaListOpen = (label, count) => `You are currently focused on ${label}. There are ${count} results available.`;
  const ariaFocused = () => `Select is focused, type to refine list, press down to open the menu.`;
  let el;
  let isFocused;
  let listOpen;
  let isWaiting;
  let handleClear;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.container === void 0 && $$bindings.container && container !== void 0)
    $$bindings.container(container);
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0)
    $$bindings.mode(mode);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.filterText === void 0 && $$bindings.filterText && filterText !== void 0)
    $$bindings.filterText(filterText);
  if ($$props.isSearchable === void 0 && $$bindings.isSearchable && isSearchable !== void 0)
    $$bindings.isSearchable(isSearchable);
  if ($$props.isClearable === void 0 && $$bindings.isClearable && isClearable !== void 0)
    $$bindings.isClearable(isClearable);
  if ($$props.autoClear === void 0 && $$bindings.autoClear && autoClear !== void 0)
    $$bindings.autoClear(autoClear);
  if ($$props.idKey === void 0 && $$bindings.idKey && idKey !== void 0)
    $$bindings.idKey(idKey);
  if ($$props.labelKey === void 0 && $$bindings.labelKey && labelKey !== void 0)
    $$bindings.labelKey(labelKey);
  if ($$props.groupKey === void 0 && $$bindings.groupKey && groupKey !== void 0)
    $$bindings.groupKey(groupKey);
  if ($$props.groupItems === void 0 && $$bindings.groupItems && groupItems !== void 0)
    $$bindings.groupItems(groupItems);
  if ($$props.loadOptions === void 0 && $$bindings.loadOptions && loadOptions !== void 0)
    $$bindings.loadOptions(loadOptions);
  if ($$props.fontSize === void 0 && $$bindings.fontSize && fontSize !== void 0)
    $$bindings.fontSize(fontSize);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.isMulti === void 0 && $$bindings.isMulti && isMulti !== void 0)
    $$bindings.isMulti(isMulti);
  if ($$props.maxSelected === void 0 && $$bindings.maxSelected && maxSelected !== void 0)
    $$bindings.maxSelected(maxSelected);
  if ($$props.colors === void 0 && $$bindings.colors && colors !== void 0)
    $$bindings.colors(colors);
  if ($$props.darkMode === void 0 && $$bindings.darkMode && darkMode !== void 0)
    $$bindings.darkMode(darkMode);
  if ($$props.borderColor === void 0 && $$bindings.borderColor && borderColor !== void 0)
    $$bindings.borderColor(borderColor);
  if ($$props.getSelectionLabel === void 0 && $$bindings.getSelectionLabel && getSelectionLabel !== void 0)
    $$bindings.getSelectionLabel(getSelectionLabel);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    noOptionsMessage = isWaiting ? "Loading..." : mode == "search" && filterText.length < 3 ? "Enter 3 or more characters for suggestions" : `No results match ${filterText}`;
    itemFilter = Array.isArray(value) && value.length >= maxSelected || mode == "search" && filterText.length < 3 ? (label, filterText2, option) => false : (label, filterText2, option) => `${label}`.split("<")[0].toLowerCase().slice(0, filterText2.length) == filterText2.toLowerCase();
    $$rendered = `<div class="${[
      "selectbox svelte-1w33mjb",
      (value && isMulti ? "multi-selected" : "") + " " + (isFocused ? "focused" : "") + " " + (value && !listOpen && !isMulti ? "selected" : "")
    ].join(" ").trim()}"${(0, import_index_0029e4b6.i)("this", el, 0)}>${(0, import_index_0029e4b6.v)(Select, "Select").$$render($$result, {
      id,
      container,
      items,
      placeholder,
      isMulti,
      isSearchable,
      groupBy,
      loadOptions,
      getSelectionLabel,
      getOptionLabel,
      itemFilter,
      ariaValues,
      ariaListOpen,
      ariaFocused,
      noOptionsMessage,
      indicatorSvg,
      containerStyles,
      optionIdentifier: idKey,
      showIndicator: true,
      isClearable: !isClearable ? false : !isMulti,
      isFocused,
      value,
      listOpen,
      filterText,
      isWaiting,
      handleClear
    }, {
      isFocused: ($$value) => {
        isFocused = $$value;
        $$settled = false;
      },
      value: ($$value) => {
        value = $$value;
        $$settled = false;
      },
      listOpen: ($$value) => {
        listOpen = $$value;
        $$settled = false;
      },
      filterText: ($$value) => {
        filterText = $$value;
        $$settled = false;
      },
      isWaiting: ($$value) => {
        isWaiting = $$value;
        $$settled = false;
      },
      handleClear: ($$value) => {
        handleClear = $$value;
        $$settled = false;
      }
    }, {})}
</div>`;
  } while (!$$settled);
  return $$rendered;
});
const Routes = (0, import_index_0029e4b6.c)(($$result, $$props, $$bindings, slots) => {
  let places;
  let placeholder = "Type a place name or postcode";
  let filterText = "";
  async function getPostcodes(filterText2) {
    if (filterText2.length > 2 && /\d/.test(filterText2)) {
      let res = await fetch(`https://api.postcodes.io/postcodes/${filterText2}/autocomplete`);
      let json = await res.json();
      return json.result.map((d) => ({ areacd: d, areanm: d, postcode: true }));
    } else if (filterText2.length > 2) {
      return places.filter((p) => p.areanm.toLowerCase().slice(0, filterText2.length) == filterText2.toLowerCase());
    }
    return [];
  }
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<br><br>
${(0, import_index_0029e4b6.v)(import_OpenGraph_svelte.default, "OpenGraph").$$render($$result, { print: "true" }, {}, {})}
${(0, import_index_0029e4b6.v)(Select_1, "Select").$$render($$result, {
      items: places,
      mode: "search",
      idKey: "areacd",
      labelKey: "areanm",
      placeholder,
      loadOptions: getPostcodes,
      autoClear: true,
      filterText
    }, {
      filterText: ($$value) => {
        filterText = $$value;
        $$settled = false;
      }
    }, {})}

${(0, import_index_0029e4b6.v)(import_Button_a63d0e2e.B, "Button").$$render($$result, { href: "/draw" + import_examplehash.drawhash }, {}, {
      default: () => {
        return `draw`;
      }
    })}
${(0, import_index_0029e4b6.v)(import_Button_a63d0e2e.B, "Button").$$render($$result, { kind: "secondary", href: "/build" + import_examplehash.hash }, {}, {
      default: () => {
        return `build`;
      }
    })}
${(0, import_index_0029e4b6.v)(import_Button_a63d0e2e.B, "Button").$$render($$result, {
      kind: "tertiary",
      href: "/embed" + import_examplehash.embedurl
    }, {}, {
      default: () => {
        return `Embeded URL`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
