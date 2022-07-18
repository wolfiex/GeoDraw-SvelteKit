import { c as create_ssr_component, f as escape, v as validate_component } from "../../../chunks/index-0029e4b6.js";
import { C as Cards } from "../../../chunks/Card.svelte_svelte_type_style_lang-c67763ba.js";
/* empty css                                                               *//* empty css                                                               */import "../../../chunks/index-7e61ccad.js";
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\nh1.svelte-1tkm5o0{\n  font-size:1.8rem;\n  margin:0 0 -12px 0;\n  font-weight:bold\n}\n\ncodes.svelte-1tkm5o0{\n  inline-size:150px;\n  overflow-wrap:break-word\n}\n\nb.svelte-1tkm5o0{\n  font-weight:bold\n}\n\n#bset > *{\n  width:100%;\n  margin:4px;\n  padding:auto;\n  left:auto;\n  right:auto;\n  display:inline-flex;\n  position:flex\n}\n\nspan.bx--toggle__switch{\n  display:block;\n  margin:auto !important\n}\n\nspan.radio{\n  display:block;\n  vertical-align:middle;\n  top:-0;\n  float:end;\n  margin:0.05em;\n  padding:5px\n}\n\n/* purgecss end ignore */")();
const css = {
  code: "h1.svelte-1tkm5o0{font-size:1.8rem;margin:0 0 -12px 0;font-weight:bold}codes.svelte-1tkm5o0{inline-size:150px;overflow-wrap:break-word}b.svelte-1tkm5o0{font-weight:bold}#bset > *{width:100%;margin:4px;padding:auto;left:auto;right:auto;display:inline-flex;position:flex}span.bx--toggle__switch{display:block;margin:auto !important}span.radio{display:block;vertical-align:middle;top:-0;float:end;margin:0.05em;padding:5px}",
  map: null
};
const Embed = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let areaname = "";
  var newdata;
  let tabs;
  let { regions = ["CustomArea", "England and Wales"] } = $$props;
  if ($$props.regions === void 0 && $$bindings.regions && regions !== void 0)
    $$bindings.regions(regions);
  $$result.css.add(css);
  {
    console.log("decoded", newdata);
  }
  {
    console.log("read", tabs);
  }
  return `<h1 class="${"svelte-1tkm5o0"}">${escape(areaname)}</h1>
${validate_component(Cards, "Cards").$$render($$result, {}, {}, {
    default: () => {
      return `${``}
  <br>`;
    }
  })}



`;
});
export { Embed as default };
