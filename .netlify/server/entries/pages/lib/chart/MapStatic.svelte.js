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
  default: () => MapStatic
});
module.exports = __toCommonJS(stdin_exports);
var import_index_f909a211 = require("../../../../chunks/index-f909a211.js");
var import_d3_geo = require("d3-geo");
var import_d3_tile = require("d3-tile");
var MapStatic_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\n.svg-container.svelte-am2o7f,svg.svelte-am2o7f{\n  width:100%;\n  height:100%;\n  margin:0;\n  padding:0\n}\n\n/* purgecss end ignore */")();
const css = {
  code: ".svg-container.svelte-am2o7f,svg.svelte-am2o7f{width:100%;height:100%;margin:0;padding:0}",
  map: null
};
const MapStatic = (0, import_index_f909a211.c)(($$result, $$props, $$bindings, slots) => {
  let _geojson;
  let projection;
  let maptile;
  let path;
  let { geojson = null } = $$props;
  let { bounds = [[-9, 49], [2, 61]] } = $$props;
  let { color = "#206095" } = $$props;
  let { lineWidth = 2.5 } = $$props;
  let { fillOpacity = 0.1 } = $$props;
  let { saturation = 0.3 } = $$props;
  let width = 400;
  let height = 400;
  const url = (x, y, z) => `http://b.tile.openstreetmap.fr/hot/${z}/${x}/${y}.png`;
  function makeProjection(width2, height2, _geojson2) {
    const proj = (0, import_d3_geo.geoMercator)().fitSize([width2, height2], _geojson2);
    const zoom = Math.floor(Math.log2(proj.scale() * (2 * Math.PI)));
    const scale = Math.pow(2, zoom) / (2 * Math.PI);
    proj.center(proj.invert([width2 / 2, height2 / 2]));
    proj.scale(scale);
    proj.translate([width2 / 2, height2 / 2]);
    return proj;
  }
  if ($$props.geojson === void 0 && $$bindings.geojson && geojson !== void 0)
    $$bindings.geojson(geojson);
  if ($$props.bounds === void 0 && $$bindings.bounds && bounds !== void 0)
    $$bindings.bounds(bounds);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.lineWidth === void 0 && $$bindings.lineWidth && lineWidth !== void 0)
    $$bindings.lineWidth(lineWidth);
  if ($$props.fillOpacity === void 0 && $$bindings.fillOpacity && fillOpacity !== void 0)
    $$bindings.fillOpacity(fillOpacity);
  if ($$props.saturation === void 0 && $$bindings.saturation && saturation !== void 0)
    $$bindings.saturation(saturation);
  $$result.css.add(css);
  _geojson = geojson ? geojson : {
    "type": "Polygon",
    "coordinates": [
      [
        [bounds[0][0], bounds[0][1]],
        [bounds[0][0], bounds[1][1]],
        [bounds[1][0], bounds[1][1]],
        [bounds[1][0], bounds[0][1]],
        [bounds[0][0], bounds[0][1]]
      ]
    ]
  };
  projection = makeProjection(width, height, _geojson);
  maptile = (0, import_d3_tile.tile)().size([width, height]).scale(projection.scale() * 2 * Math.PI).translate(projection([0, 0])).tileSize(256);
  path = (0, import_d3_geo.geoPath)(projection);
  return `<div class="${"svg-container svelte-am2o7f"}"><svg viewBox="${"0 0 " + (0, import_index_f909a211.e)(width) + " " + (0, import_index_f909a211.e)(height)}" class="${"svelte-am2o7f"}"><filter id="${"desaturate"}"><feColorMatrix type="${"saturate"}"${(0, import_index_f909a211.h)("values", saturation, 0)}></feColorMatrix></filter>${(0, import_index_f909a211.i)(maptile().map(([x, y, z], i, { translate: [tx, ty], scale: k }) => ({ x, y, z, tx, ty, k })), (tile2) => {
    return `<image${(0, import_index_f909a211.h)("xlink:href", url(tile2.x, tile2.y, tile2.z), 0)}${(0, import_index_f909a211.h)("x", Math.round((tile2.x + tile2.tx) * tile2.k), 0)}${(0, import_index_f909a211.h)("y", Math.round((tile2.y + tile2.ty) * tile2.k), 0)}${(0, import_index_f909a211.h)("width", tile2.k, 0)}${(0, import_index_f909a211.h)("height", tile2.k, 0)} filter="${"url(#desaturate)"}"></image>`;
  })}${geojson ? `${fillOpacity ? `<path${(0, import_index_f909a211.h)("fill", color, 0)} stroke="${"none"}"${(0, import_index_f909a211.h)("opacity", fillOpacity, 0)}${(0, import_index_f909a211.h)("d", path(geojson), 0)}></path>` : ``}
		<path fill="${"none"}"${(0, import_index_f909a211.h)("stroke", color, 0)}${(0, import_index_f909a211.h)("stroke-width", lineWidth, 0)}${(0, import_index_f909a211.h)("d", path(geojson), 0)}></path>` : ``}</svg>
</div>`;
});
