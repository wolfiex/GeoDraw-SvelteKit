import { c as create_ssr_component, i as add_attribute } from "../../chunks/index-0029e4b6.js";
const OpenGraph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  let { url = "" } = $$props;
  let { image = "" } = $$props;
  let { type = "article" } = $$props;
  let { print = false } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.print === void 0 && $$bindings.print && print !== void 0)
    $$bindings.print(print);
  return `${$$result.head += `<share data-svelte="svelte-11ry32u"><meta property="${"og:title"}"${add_attribute("content", title, 0)} data-svelte="svelte-11ry32u">
    <meta property="${"og:description"}"${add_attribute("content", description, 0)} data-svelte="svelte-11ry32u">
    <meta property="${"og:url"}"${add_attribute("content", url, 0)} data-svelte="svelte-11ry32u">
    <meta property="${"og:image"}"${add_attribute("content", image, 0)} data-svelte="svelte-11ry32u">
    <meta property="${"og:type"}"${add_attribute("content", type, 0)} data-svelte="svelte-11ry32u">
    <meta property="${"og:locale"}" content="${"en_GB"}" data-svelte="svelte-11ry32u"></share>`, ""}

`;
});
export { OpenGraph as default };
