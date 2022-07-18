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
  default: () => MapAreas
});
module.exports = __toCommonJS(stdin_exports);
var import_index_0029e4b6 = require("../../../chunks/index-0029e4b6.js");
const css = {
  code: "@import 'https://unpkg.com/leaflet@1.8.0/dist/leaflet.css';#lmap.svelte-hs5vhq{display:inline-block;position:relative}",
  map: null
};
const MapAreas = (0, import_index_0029e4b6.c)(($$result, $$props, $$bindings, slots) => {
  let { height = "400px" } = $$props;
  let { minimap } = $$props;
  let map = false;
  function update_map(coordinates) {
    console.log("dd", coordinates.length, typeof coordinates, typeof coordinates === "string" || coordinates instanceof String);
    if (coordinates.length < 1 | !map) {
      console.log(map);
      return;
    }
    if (typeof coordinates === "string" || coordinates instanceof String) {
      var geojson = JSON.parse(coordinates);
      console.log("yay?", geojson);
    } else {
      var geojson = coordinates;
    }
    console.error("ggg", geojson);
    var geo = L.geoJSON(geojson, { style: { color: "red" } });
    geo.addTo(map);
    map.fitBounds(geo.getBounds(), { padding: [14, 14] });
  }
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.minimap === void 0 && $$bindings.minimap && minimap !== void 0)
    $$bindings.minimap(minimap);
  $$result.css.add(css);
  {
    update_map(minimap);
  }
  return `<main><div id="${"lmap"}" style="${"height:" + (0, import_index_0029e4b6.f)(height) + "; width:100%"}" class="${"svelte-hs5vhq"}"></div></main>`;
});
