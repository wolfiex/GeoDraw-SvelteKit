import { c as create_ssr_component, h as escape, j as add_attribute, r as each } from "../../../../chunks/index-12fa369c.js";
import { geoPath, geoMercator } from "d3-geo";
import { tile } from "d3-tile";
var MapStatic_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\n.svg-container.svelte-am2o7f,svg.svelte-am2o7f{\n  width:100%;\n  height:100%;\n  margin:0;\n  padding:0\n}\n\n/* purgecss end ignore */")();
const css = {
  code: ".svg-container.svelte-am2o7f,svg.svelte-am2o7f{width:100%;height:100%;margin:0;padding:0}",
  map: null
};
const MapStatic = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    const proj = geoMercator().fitSize([width2, height2], _geojson2);
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
  maptile = tile().size([width, height]).scale(projection.scale() * 2 * Math.PI).translate(projection([0, 0])).tileSize(256);
  path = geoPath(projection);
  return `<div class="${"svg-container svelte-am2o7f"}"><svg viewBox="${"0 0 " + escape(width) + " " + escape(height)}" class="${"svelte-am2o7f"}"><filter id="${"desaturate"}"><feColorMatrix type="${"saturate"}"${add_attribute("values", saturation, 0)}></feColorMatrix></filter>${each(maptile().map(([x, y, z], i, { translate: [tx, ty], scale: k }) => ({ x, y, z, tx, ty, k })), (tile2) => {
    return `<image${add_attribute("xlink:href", url(tile2.x, tile2.y, tile2.z), 0)}${add_attribute("x", Math.round((tile2.x + tile2.tx) * tile2.k), 0)}${add_attribute("y", Math.round((tile2.y + tile2.ty) * tile2.k), 0)}${add_attribute("width", tile2.k, 0)}${add_attribute("height", tile2.k, 0)} filter="${"url(#desaturate)"}"></image>`;
  })}${geojson ? `${fillOpacity ? `<path${add_attribute("fill", color, 0)} stroke="${"none"}"${add_attribute("opacity", fillOpacity, 0)}${add_attribute("d", path(geojson), 0)}></path>` : ``}
		<path fill="${"none"}"${add_attribute("stroke", color, 0)}${add_attribute("stroke-width", lineWidth, 0)}${add_attribute("d", path(geojson), 0)}></path>` : ``}</svg>
</div>`;
});
export { MapStatic as default };
