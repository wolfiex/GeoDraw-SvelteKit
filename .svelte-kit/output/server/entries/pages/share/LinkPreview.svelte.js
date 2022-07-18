import { c as create_ssr_component, f as escape, k as null_to_empty, i as add_attribute, w as is_promise, n as noop } from "../../../chunks/index-0029e4b6.js";
var LinkPreview_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\n:root{\n  --primary:black;\n  --secondary:rgb(100, 100, 100)\n}\n\n.Container.svelte-185al1e{\n  text-align:left;\n  background-color:white;\n  display:flex;\n  flex-direction:column;\n  border-radius:7px;\n  border:1px solid #ccc;\n  color:var(--primary);\n  transition:0.3s all ease;\n  height:-webkit-fit-content;\n  height:-moz-fit-content;\n  height:fit-content\n}\n\n.Container.svelte-185al1e:hover{\n  background-color:rgb(250, 250, 250) !important;\n  cursor:pointer\n}\n\n.Secondary.svelte-185al1e{\n  color:var(--secondary)\n}\n\n.LowerContainer.svelte-185al1e{\n  padding:10px\n}\n\n.Title.svelte-185al1e{\n  margin-top:0;\n  margin-bottom:10px\n}\n\n.Image.svelte-185al1e{\n  width:100%;\n  border-top-left-radius:7px;\n  border-top-right-radius:7px;\n  background-size:cover;\n  background-repeat:no-repeat;\n  background-position:center;\n  height:30vh\n}\n\n.SiteDetails.svelte-185al1e{\n  margin-top:10px\n}\n\n@media(max-width: 640px){\n  .Description.svelte-185al1e{\n    display:none\n  }\n}\n\n@media(min-width: 641px) and (max-width: 768px){\n  .Description.svelte-185al1e{\n    display:none\n  }\n}\n\n/* purgecss end ignore */")();
const css = {
  code: ":root{--primary:black;--secondary:rgb(100, 100, 100)}.Container.svelte-185al1e{text-align:left;background-color:white;display:flex;flex-direction:column;border-radius:7px;border:1px solid #ccc;color:var(--primary);transition:0.3s all ease;height:fit-content}.Container.svelte-185al1e:hover{background-color:rgb(250, 250, 250) !important;cursor:pointer}.Secondary.svelte-185al1e{color:var(--secondary)}.LowerContainer.svelte-185al1e{padding:10px}.Title.svelte-185al1e{margin-top:0;margin-bottom:10px}.Image.svelte-185al1e{width:100%;border-top-left-radius:7px;border-top-right-radius:7px;background-size:cover;background-repeat:no-repeat;background-position:center;height:30vh}.SiteDetails.svelte-185al1e{margin-top:10px}@media(max-width: 640px){.Description.svelte-185al1e{display:none}}@media(min-width: 641px) and (max-width: 768px){.Description.svelte-185al1e{display:none}}",
  map: null
};
const proxyUrl = "https://rlp-proxy.herokuapp.com/v2";
const placeholderImg = "https://i.imgur.com/UeDNBNQ.jpeg";
async function getMetadata(url) {
  const data = await fetch(`${proxyUrl}?url=${url}`).then((res) => res.json()).then((r) => r.metadata);
  return data;
}
const LinkPreview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let metadata;
  let { url } = $$props;
  let { width = null } = $$props;
  let { height = null } = $$props;
  let { className = "" } = $$props;
  let { imageHeight = null } = $$props;
  let { textAlign = null } = $$props;
  let { fetcher = null } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.imageHeight === void 0 && $$bindings.imageHeight && imageHeight !== void 0)
    $$bindings.imageHeight(imageHeight);
  if ($$props.textAlign === void 0 && $$bindings.textAlign && textAlign !== void 0)
    $$bindings.textAlign(textAlign);
  if ($$props.fetcher === void 0 && $$bindings.fetcher && fetcher !== void 0)
    $$bindings.fetcher(fetcher);
  $$result.css.add(css);
  metadata = fetcher ? fetcher(url) : getMetadata(url);
  return `<div class="${escape(null_to_empty(`Container ${className}`)) + " svelte-185al1e"}"${add_attribute("style", `width:${width};height:${height};textAlign:${textAlign}`, 0)}>${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(data) {
      return `
		<div class="${"Image svelte-185al1e"}"${add_attribute("style", `background-image:url(${data.image || placeholderImg});height:${imageHeight}`, 0)}></div>
		<div class="${"LowerContainer svelte-185al1e"}"><h3 class="${"Title svelte-185al1e"}">${escape(data.title)}</h3>
			<span class="${"Description Secondary svelte-185al1e"}">${escape(data.description)}</span>
			<div class="${"Secondary SiteDetails svelte-185al1e"}">${data.siteName ? `<span>${escape(data.siteName)} \u2022 </span>` : ``}
				<span>${escape(data.hostname)}</span></div></div>
	`;
    }(__value);
  }(metadata)}
</div>`;
});
export { LinkPreview as default };
