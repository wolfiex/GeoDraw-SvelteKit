import { c as create_ssr_component, v as validate_component, e as escape, h as add_attribute } from "../../../chunks/index-f909a211.js";
import "../../../chunks/HeaderSearch.svelte_svelte_type_style_lang-c0700dd8.js";
import { B as Button } from "../../../chunks/Button-28b43d3f.js";
import "flatpickr";
import "../../../chunks/index-1ceaa7e2.js";
const IconBtn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { path = false } = $$props;
  let { iconname = "bolt" } = $$props;
  const icon = import("svelte-material-icons/MaterialDesign/svg/" + iconname + ".svg");
  let { size = "1em" } = $$props;
  let { width = size } = $$props;
  let { height = size } = $$props;
  let { color = "currentColor" } = $$props;
  let { viewBox = "0 0 24 24" } = $$props;
  let { id = "button" } = $$props;
  let { onclick = () => {
  } } = $$props;
  let { disabled = false } = $$props;
  let { assistiveText = "Button" } = $$props;
  console.log(icon);
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  if ($$props.iconname === void 0 && $$bindings.iconname && iconname !== void 0)
    $$bindings.iconname(iconname);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0)
    $$bindings.viewBox(viewBox);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.onclick === void 0 && $$bindings.onclick && onclick !== void 0)
    $$bindings.onclick(onclick);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.assistiveText === void 0 && $$bindings.assistiveText && assistiveText !== void 0)
    $$bindings.assistiveText(assistiveText);
  return `${validate_component(Button, "Button").$$render($$result, {
    id,
    disabled,
    class: "bx--btn bx--btn--secondary bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--bottom bx--tooltip--align-center bx--btn--sm icon drawbtn"
  }, {}, {
    default: () => {
      return `<span class="${"bx--assistive-text"}">${escape(assistiveText)}</span>

        ${path ? `<svg${add_attribute("width", width, 0)}${add_attribute("height", height, 0)}${add_attribute("viewBox", viewBox, 0)}><path d="${"..."}"${add_attribute("fill", color, 0)}></path></svg>` : `
kk`}`;
    }
  })}`;
});
export { IconBtn as default };
