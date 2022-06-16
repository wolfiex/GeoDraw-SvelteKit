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
  default: () => Toggle
});
module.exports = __toCommonJS(stdin_exports);
var import_index_f909a211 = require("../../../../chunks/index-f909a211.js");
var Toggle_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => '/* purgecss start ignore */\n\n.switch.svelte-g1x8yy.svelte-g1x8yy{\n  position:relative;\n  display:inline-block\n}\n\n.switch-input.svelte-g1x8yy.svelte-g1x8yy{\n  position:absolute;\n  width:1px;\n  height:1px;\n  margin:-1px;\n  padding:0;\n  overflow:hidden;\n  clip:rect(0, 0, 0, 0);\n  border:0\n}\n\n.switch-label.svelte-g1x8yy.svelte-g1x8yy::before,.switch-label.svelte-g1x8yy.svelte-g1x8yy::after{\n  content:"";\n  display:block;\n  position:absolute;\n  cursor:pointer\n}\n\n.switch-label.svelte-g1x8yy.svelte-g1x8yy{\n  display:block;\n  cursor:pointer;\n  margin-top:-4px;\n  margin-left:58px\n}\n\n.switch-label.svelte-g1x8yy.svelte-g1x8yy::before{\n  box-sizing:border-box;\n  top:0;\n  left:0;\n  width:48px;\n  height:24px;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  -ms-user-select:none;\n  user-select:none;\n  background-color:#aaa;\n  border-radius:9999em;\n  transition:background-color 0.25s ease\n}\n\n.switch-label.svelte-g1x8yy.svelte-g1x8yy::after{\n  top:3px;\n  left:3px;\n  width:18px;\n  height:18px;\n  border-radius:50%;\n  background-color:#fff;\n  transition:left 0.25s ease\n}\n\n.switch-input.svelte-g1x8yy:checked+.switch-label.svelte-g1x8yy::before{\n  background-color:rgb(32, 96, 149)\n}\n\n.switch-input.svelte-g1x8yy:checked+.switch-label.svelte-g1x8yy::after{\n  left:27px;\n  top:3px\n}\n\n.mono.svelte-g1x8yy.svelte-g1x8yy::before{\n  border:2px solid white;\n  background:none !important\n}\n\n/* purgecss end ignore */')();
const css = {
  code: '.switch.svelte-g1x8yy.svelte-g1x8yy{position:relative;display:inline-block}.switch-input.svelte-g1x8yy.svelte-g1x8yy{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.switch-label.svelte-g1x8yy.svelte-g1x8yy::before,.switch-label.svelte-g1x8yy.svelte-g1x8yy::after{content:"";display:block;position:absolute;cursor:pointer}.switch-label.svelte-g1x8yy.svelte-g1x8yy{display:block;cursor:pointer;margin-top:-4px;margin-left:58px}.switch-label.svelte-g1x8yy.svelte-g1x8yy::before{-webkit-box-sizing:border-box;box-sizing:border-box;top:0;left:0;width:48px;height:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#aaa;border-radius:9999em;-webkit-transition:background-color 0.25s ease;-o-transition:background-color 0.25s ease;transition:background-color 0.25s ease}.switch-label.svelte-g1x8yy.svelte-g1x8yy::after{top:3px;left:3px;width:18px;height:18px;border-radius:50%;background-color:#fff;-webkit-transition:left 0.25s ease;-o-transition:left 0.25s ease;transition:left 0.25s ease}.switch-input.svelte-g1x8yy:checked+.switch-label.svelte-g1x8yy::before{background-color:rgb(32, 96, 149)}.switch-input.svelte-g1x8yy:checked+.switch-label.svelte-g1x8yy::after{left:27px;top:3px}.mono.svelte-g1x8yy.svelte-g1x8yy::before{border:2px solid white;background:none !important}',
  map: null
};
const Toggle = (0, import_index_f909a211.c)(($$result, $$props, $$bindings, slots) => {
  let { id = "switch" } = $$props;
  let { label = "Label" } = $$props;
  let { mono = false } = $$props;
  let { checked } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.mono === void 0 && $$bindings.mono && mono !== void 0)
    $$bindings.mono(mono);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  $$result.css.add(css);
  return `<div class="${"switch svelte-g1x8yy"}"><input${(0, import_index_f909a211.h)("id", id, 0)} type="${"checkbox"}" class="${"switch-input svelte-g1x8yy"}" tabindex="${"0"}"${(0, import_index_f909a211.h)("checked", checked, 1)}>
  <label${(0, import_index_f909a211.h)("for", id, 0)} class="${["switch-label svelte-g1x8yy", mono ? "mono" : ""].join(" ").trim()}">${(0, import_index_f909a211.e)(label)}</label>
</div>`;
});
