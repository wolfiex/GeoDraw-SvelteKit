import { c as create_ssr_component, j as createEventDispatcher, h as add_attribute } from "../../chunks/index-e390a0ae.js";
const LibLoader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { url } = $$props;
  let script;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  return `// LibLoader.svelte

${$$result.head += `<script${add_attribute("src", url, 0)}${add_attribute("this", script, 0)} data-svelte="svelte-50y8ql"><\/script>`, ""}`;
});
export { LibLoader as default };
