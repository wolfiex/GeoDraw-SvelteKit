import { c as create_ssr_component, e as escape } from "../../../../chunks/index-f909a211.js";
var NumBlock_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\n.num-big.svelte-19zwnt3.svelte-19zwnt3{\n  display:block;\n  font-size:3rem;\n  font-weight:bold;\n  line-height:1.2\n}\n\n.num-suffix.svelte-19zwnt3.svelte-19zwnt3{\n  display:block;\n  max-width:100%;\n  margin-left:2px\n}\n\n.num-desc.svelte-19zwnt3.svelte-19zwnt3{\n  display:block;\n  margin-top:10px;\n  color:#666\n}\n\n.num-desc.svelte-19zwnt3>mark.svelte-19zwnt3{\n  background-color:lightgrey;\n  font-weight:bold;\n  padding:0 3px\n}\n\n/* purgecss end ignore */")();
const css = {
  code: ".num-big.svelte-19zwnt3.svelte-19zwnt3{display:block;font-size:3rem;font-weight:bold;line-height:1.2}.num-suffix.svelte-19zwnt3.svelte-19zwnt3{display:block;max-width:100%;margin-left:2px}.num-desc.svelte-19zwnt3.svelte-19zwnt3{display:block;margin-top:10px;color:#666}.num-desc.svelte-19zwnt3>mark.svelte-19zwnt3{background-color:lightgrey;font-weight:bold;padding:0 3px}",
  map: null
};
const NumBlock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { suffix = "" } = $$props;
  let { xKey = "value" } = $$props;
  let { zKey = "group" } = $$props;
  let { format = (d) => d } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.suffix === void 0 && $$bindings.suffix && suffix !== void 0)
    $$bindings.suffix(suffix);
  if ($$props.xKey === void 0 && $$bindings.xKey && xKey !== void 0)
    $$bindings.xKey(xKey);
  if ($$props.zKey === void 0 && $$bindings.zKey && zKey !== void 0)
    $$bindings.zKey(zKey);
  if ($$props.format === void 0 && $$bindings.format && format !== void 0)
    $$bindings.format(format);
  $$result.css.add(css);
  return `<div class="${"num-big svelte-19zwnt3"}">${escape(format(data[0][xKey]))}</div>
<div class="${"num-suffix svelte-19zwnt3"}">${escape(suffix)}</div>
<div class="${"num-desc svelte-19zwnt3"}"><mark class="${"svelte-19zwnt3"}">${escape(format(data[1][xKey]))}</mark> 
  for ${escape(data[1][zKey])}
</div>`;
});
export { NumBlock as default };
