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
  default: () => Figure
});
module.exports = __toCommonJS(stdin_exports);
var import_index_f909a211 = require("../../../../../chunks/index-f909a211.js");
var Figure_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\n.embed-code__success-container.svelte-144diyl.svelte-144diyl{\n  position:relative\n}\n\n.embed-code__success-container.svelte-144diyl>button.svelte-144diyl{\n  top:-21px\n}\n\n.actions.svelte-144diyl>button.svelte-144diyl{\n  border:none;\n  background:none;\n  color:rgb(32, 96, 149);\n  text-decoration:underline;\n  font-size:16px;\n  line-height:normal;\n  margin:0;\n  padding:0 5px 0 0;\n  vertical-align:top\n}\n\n.actions.svelte-144diyl.svelte-144diyl{\n  display:block;\n  margin:5px 0 24px 0\n}\n\n/* purgecss end ignore */")();
const css = {
  code: ".embed-code__success-container.svelte-144diyl.svelte-144diyl{position:relative}.embed-code__success-container.svelte-144diyl>button.svelte-144diyl{top:-21px}.actions.svelte-144diyl>button.svelte-144diyl{border:none;background:none;color:rgb(32, 96, 149);text-decoration:underline;font-size:16px;line-height:normal;margin:0;padding:0 5px 0 0;vertical-align:top}.actions.svelte-144diyl.svelte-144diyl{display:block;margin:5px 0 24px 0}",
  map: null
};
const Figure = (0, import_index_f909a211.c)(($$result, $$props, $$bindings, slots) => {
  let { background = null } = $$props;
  let { embed = null } = $$props;
  let { download = null } = $$props;
  let { height = null } = $$props;
  let { fullwidth = false } = $$props;
  let { id = null } = $$props;
  if (!id)
    id = Math.floor(Math.random() * 1e4);
  let expanded = false;
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.embed === void 0 && $$bindings.embed && embed !== void 0)
    $$bindings.embed(embed);
  if ($$props.download === void 0 && $$bindings.download && download !== void 0)
    $$bindings.download(download);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.fullwidth === void 0 && $$bindings.fullwidth && fullwidth !== void 0)
    $$bindings.fullwidth(fullwidth);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css);
  return `<div class="${[
    "pym-interactive margin-left--0",
    fullwidth ? "pym-interactive--full-width" : ""
  ].join(" ").trim()}"${(0, import_index_f909a211.f)({
    "background-color": background,
    "height": !height ? null : typeof height == "number" ? height + "px" : height
  })}>${slots.default ? slots.default({}) : ``}</div>
<div class="${"actions svelte-144diyl"}">${embed ? `<button aria-label="${"embed code"}"${(0, import_index_f909a211.h)("aria-expanded", expanded, 0)} class="${"svelte-144diyl"}">Embed code</button>` : ``}
	${download ? `<button aria-label="${"download data"}" class="${"svelte-144diyl"}">Download data</button>` : ``}
	${``}
</div>`;
});
