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
  default: () => Cards
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e390a0ae = require("../../../../chunks/index-e390a0ae.js");
var import_index_a92659a3 = require("../../../../chunks/index-a92659a3.js");
var Cards_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\nh2.svelte-4xzjby{\n  display:inline-block\n}\n\n.tiles-grid.svelte-4xzjby{\n  display:grid;\n  width:100%;\n  justify-content:stretch;\n  grid-auto-flow:row dense;\n  margin:8px 0\n}\n\n/* purgecss end ignore */")();
const css = {
  code: "h2.svelte-4xzjby{display:inline-block}.tiles-grid.svelte-4xzjby{display:grid;width:100%;justify-content:stretch;grid-auto-flow:row dense;margin:8px 0}",
  map: null
};
const Cards = (0, import_index_e390a0ae.c)(($$result, $$props, $$bindings, slots) => {
  let columns;
  let { title = null } = $$props;
  let { colwidth = "medium" } = $$props;
  let { gridgap = 16 } = $$props;
  const defs = {
    narrow: { w: 180, c: 4 },
    medium: { w: 280, c: 3 },
    wide: { w: 380, c: 2 },
    full: { w: "100%", c: 1 }
  };
  const cols = (0, import_index_a92659a3.w)(defs[colwidth].c);
  (0, import_index_e390a0ae.s)("tiles", { cols });
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.colwidth === void 0 && $$bindings.colwidth && colwidth !== void 0)
    $$bindings.colwidth(colwidth);
  if ($$props.gridgap === void 0 && $$bindings.gridgap && gridgap !== void 0)
    $$bindings.gridgap(gridgap);
  $$result.css.add(css);
  columns = colwidth == "full" ? 1 : defs[colwidth].c;
  {
    cols.set(columns);
  }
  return `<div class="${"tiles"}">${title ? `<h2 class="${"svelte-4xzjby"}">${(0, import_index_e390a0ae.e)(title)}</h2>
  ${slots.meta ? slots.meta({}) : ``}` : ``}
  <div class="${"tiles-grid margin-bottom svelte-4xzjby"}"${(0, import_index_e390a0ae.f)({
    "grid-template-columns": `repeat(${colwidth == "full" ? "1fr" : "auto-fit, minmax(min(" + defs[colwidth].w + "px, 100%), 1fr))"}`,
    "grid-gap": `${gridgap}px`
  })}>${slots.default ? slots.default({}) : ``}</div>
</div>`;
});
