import { c as create_ssr_component, s as setContext, e as escape, f as add_styles, d as getContext, b as subscribe, r as null_to_empty, i as each, h as add_attribute, v as validate_component, w as is_promise, n as noop } from "../../../chunks/index-f909a211.js";
/* empty css                            */import { w as writable } from "../../../chunks/index-1ceaa7e2.js";
import * as dfd from "danfojs";
import BarChart from "./BarChart.svelte.js";
import MapAreas from "./MapAreas.svelte.js";
var Cards_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\nh2.svelte-4xzjby{\n  display:inline-block\n}\n\n.tiles-grid.svelte-4xzjby{\n  display:grid;\n  width:100%;\n  justify-content:stretch;\n  grid-auto-flow:row dense;\n  margin:8px 0\n}\n\n/* purgecss end ignore */")();
const css$2 = {
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
  $$result.css.add(css$2);
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
var Card_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\nh3.svelte-1krn9ab{\n  font-size:1.3rem;\n  font-weight:bold\n}\n\n.blank.svelte-1krn9ab{\n  padding:0;\n  line-height:1\n}\n\n.tile.svelte-1krn9ab,.blank.svelte-1krn9ab{\n  color:black;\n  margin:4px 0 0 !important\n}\n\n/* purgecss end ignore */")();
const css$1 = {
  code: "h3.svelte-1krn9ab{font-size:1.3rem;font-weight:bold}.blank.svelte-1krn9ab{padding:0;line-height:1}.tile.svelte-1krn9ab,.blank.svelte-1krn9ab{color:black;margin:4px 0 0 !important}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $cols, $$unsubscribe_cols;
  let { colspan = 1 } = $$props;
  let { rowspan = 1 } = $$props;
  let { title = null } = $$props;
  let { links = null } = $$props;
  let { blank = false } = $$props;
  const { cols } = getContext("tiles");
  $$unsubscribe_cols = subscribe(cols, (value) => $cols = value);
  if ($$props.colspan === void 0 && $$bindings.colspan && colspan !== void 0)
    $$bindings.colspan(colspan);
  if ($$props.rowspan === void 0 && $$bindings.rowspan && rowspan !== void 0)
    $$bindings.rowspan(rowspan);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.links === void 0 && $$bindings.links && links !== void 0)
    $$bindings.links(links);
  if ($$props.blank === void 0 && $$bindings.blank && blank !== void 0)
    $$bindings.blank(blank);
  $$result.css.add(css$1);
  $$unsubscribe_cols();
  return `<article class="${[
    escape(null_to_empty(!blank ? "tile tile__content" : "")) + " svelte-1krn9ab",
    blank ? "blank" : ""
  ].join(" ").trim()}"${add_styles({
    "grid-column": `span ${colspan == 1 ? 1 : colspan > $cols ? $cols : colspan}`,
    "grid-row": `span ${rowspan}`
  })}>${title ? `<header class="${"margin-top--1"}"><h3 class="${"margin-top--0 margin-right--0 margin-bottom--0 margin-left--0 svelte-1krn9ab"}">${escape(title)}</h3></header>` : ``}
  ${slots.default ? slots.default({}) : ``}
  ${links && links[0] ? `<div class="${"margin-top--2"}">${each(links, (link) => {
    return `<a${add_attribute("href", link.url, 0)} class="${"tile__link"}"${add_attribute("aria-label", link.label, 0)}${add_attribute("data-gtm-label", link.label, 0)}>${escape(link.label)}
    </a>`;
  })}</div>` : ``}
</article>`;
});
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\nh1.svelte-nzgl4g{\n  font-size:1.8rem;\n  margin:0 0 -12px 0;\n  font-weight:bold\n}\n\ncodes.svelte-nzgl4g{\n  inline-size:150px;\n  overflow-wrap:break-word\n}\n\nb.svelte-nzgl4g{\n  font-weight:bold\n}\n\n/* purgecss end ignore */")();
const css = {
  code: "h1.svelte-nzgl4g{font-size:1.8rem;margin:0 0 -12px 0;font-weight:bold}codes.svelte-nzgl4g{inline-size:150px;overflow-wrap:break-word}b.svelte-nzgl4g{font-weight:bold}",
  map: null
};
const name = "Custom Area Tables";
const Tables = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cache = {};
  let areas = "";
  var newdata = { tables: [] };
  var coordinates = [];
  var compressed = [];
  const items = (object) => Object.keys(object).map((key) => [key, object[key]]);
  async function get_data(data) {
    var tbls = data.tables.map(async function(table) {
      if (table.code in cache) {
        return cache[table.code];
      } else {
        return await dfd.readCSV(`${table.download}?date=latest&geography=MAKE|MyCustomArea|${areas},K04000001&rural_urban=0&measures=20100&select=geography_name,cell_name,obs_value`).then((d) => d.setIndex({ column: "geography" })).then((de) => {
          var mappings = {};
          var cols = de.columns.filter((d) => d.includes(":"));
          cols.forEach((d, i) => {
            mappings[d] = /:(.+);/.exec(d)[1];
          });
          return de.loc({
            rows: de.index.filter((d) => d),
            columns: cols
          }).rename(mappings, { inplace: false });
        }).then((df) => {
          var cols = df.$columns.filter((d) => !(d.includes("count") || d.includes("All usual") || (d.match(/\;/g) || []).length === 1 || d.includes("sum")));
          df = df.loc({ columns: cols });
          var pc = df.div(df.sum(), { axis: 0 });
          var lists = [];
          dfd.toJSON(pc, { format: "columns" }).forEach((dict, i) => {
            for (var key in dict) {
              lists.push({
                z: ["CustomArea", "England and Wales"][i],
                pc: dict[key],
                column: key
              });
            }
          });
          cache[table.code] = { name: table.name, data: lists };
          return cache[table.code];
        });
      }
    });
    return Promise.all(tbls);
  }
  $$result.css.add(css);
  {
    console.log(newdata);
  }
  return `<h1 class="${"svelte-nzgl4g"}">${escape(name)}</h1>
${validate_component(Cards, "Cards").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Card, "Card").$$render($$result, { title: "Area map" }, {}, {
        default: () => {
          return `${validate_component(MapAreas, "MapAreas").$$render($$result, { minimap: coordinates }, {}, {})}`;
        }
      })}

  ${validate_component(Card, "Card").$$render($$result, { title: "Selected Areas" }, {}, {
        default: () => {
          return `This section outlines all the different areas codes which have been combined
    to produce the following report.
    <br><br>
    ${each(items(compressed), (item) => {
            return `<h4 style="${"display:inline"}"><b class="${"svelte-nzgl4g"}">${escape(item[0].toUpperCase())}</b>:</h4>
      <codes class="${"svelte-nzgl4g"}">${escape(item[1].join(", "))}</codes>
      <br><br>`;
          })}`;
        }
      })}



  ${function(__value) {
        if (is_promise(__value)) {
          __value.then(null, noop);
          return ``;
        }
        return function(tables) {
          return `

  ${validate_component(Card, "Card").$$render($$result, { title: "Embed Url" }, {}, {
            default: () => {
              return `<code>Click here to copy the embed url to your clipboard: <br>
      ${escape(JSON.stringify(tables).length)}</code>`;
            }
          })}
    ${each(tables, (tab) => {
            return `${validate_component(Card, "Card").$$render($$result, { title: tab.name }, {}, {
              default: () => {
                return `

        ${validate_component(BarChart, "BarChart").$$render($$result, {
                  xKey: "pc",
                  yKey: "column",
                  zKey: "z",
                  data: tab.data
                }, {}, {})}
      `;
              }
            })}`;
          })}
  `;
        }(__value);
      }(get_data(newdata))}
  <br>`;
    }
  })}



`;
});
export { Tables as default };
