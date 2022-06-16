import { c as create_ssr_component, s as setContext, e as escape, f as add_styles } from "../../../../chunks/index-f909a211.js";
import { w as writable } from "../../../../chunks/index-1ceaa7e2.js";
var Cards_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\nh2.svelte-4xzjby{\n  display:inline-block\n}\n\n.tiles-grid.svelte-4xzjby{\n  display:grid;\n  width:100%;\n  justify-content:stretch;\n  grid-auto-flow:row dense;\n  margin:8px 0\n}\n\n/* purgecss end ignore */")();
const css = {
  code: "h2.svelte-4xzjby{display:inline-block}.tiles-grid.svelte-4xzjby{display:grid;width:100%;justify-content:stretch;grid-auto-flow:row dense;margin:8px 0}",
  map: null
};
const Cards = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  const cols = writable(defs[colwidth].c);
  setContext("tiles", { cols });
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
  return `<div class="${"tiles"}">${title ? `<h2 class="${"svelte-4xzjby"}">${escape(title)}</h2>
  ${slots.meta ? slots.meta({}) : ``}` : ``}
  <div class="${"tiles-grid margin-bottom svelte-4xzjby"}"${add_styles({
    "grid-template-columns": `repeat(${colwidth == "full" ? "1fr" : "auto-fit, minmax(min(" + defs[colwidth].w + "px, 100%), 1fr))"}`,
    "grid-gap": `${gridgap}px`
  })}>${slots.default ? slots.default({}) : ``}</div>
</div>`;
});
export { Cards as default };
