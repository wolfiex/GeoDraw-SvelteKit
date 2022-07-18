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
  default: () => AreaMap
});
module.exports = __toCommonJS(stdin_exports);
var import_index_0029e4b6 = require("../../../chunks/index-0029e4b6.js");
var import_maplibre_gl = require("maplibre-gl");
var import_MapDraw = require("../../endpoints/draw/MapDraw.js");
var import_mapstore = require("../../endpoints/draw/mapstore.js");
var import_tilebelt = require("@mapbox/tilebelt");
var import_union = require("@turf/union");
var import_index_7e61ccad = require("../../../chunks/index-7e61ccad.js");
const AreaMap = (0, import_index_0029e4b6.c)(($$result, $$props, $$bindings, slots) => {
  let $draw_type, $$unsubscribe_draw_type;
  let $mapobject, $$unsubscribe_mapobject;
  let $mapfunctions, $$unsubscribe_mapfunctions;
  let $maplayer, $$unsubscribe_maplayer;
  let $mapsource, $$unsubscribe_mapsource;
  $$unsubscribe_draw_type = (0, import_index_0029e4b6.b)(import_mapstore.draw_type, (value) => $draw_type = value);
  $$unsubscribe_mapobject = (0, import_index_0029e4b6.b)(import_mapstore.mapobject, (value) => $mapobject = value);
  $$unsubscribe_mapfunctions = (0, import_index_0029e4b6.b)(import_mapstore.mapfunctions, (value) => $mapfunctions = value);
  $$unsubscribe_maplayer = (0, import_index_0029e4b6.b)(import_mapstore.maplayer, (value) => $maplayer = value);
  $$unsubscribe_mapsource = (0, import_index_0029e4b6.b)(import_mapstore.mapsource, (value) => $mapsource = value);
  (0, import_index_0029e4b6.h)();
  var loading = true;
  let webgl_canvas;
  let { drawing_tools = false } = $$props;
  let { width = "100vw" } = $$props;
  let { height = "100vh" } = $$props;
  async function SetLayers() {
    console.log("set layers");
    import_mapstore.mapsource.subscribe(async () => {
      for (const [key, value] of Object.entries($mapsource)) {
        if ($mapobject.getSource(key))
          $mapobject.removeSource(key);
        if (!$mapobject.getSource(key))
          $mapobject.addSource(key, value);
      }
    });
    import_mapstore.maplayer.subscribe(async () => {
      for (const value of $maplayer) {
        console.log("layer", value);
        if ($mapobject.getLayer(value.id))
          $mapobject.removeLayer(value.id);
        $mapobject.addLayer(value);
      }
    });
    import_mapstore.mapfunctions.subscribe(async () => {
      for (const e of $mapfunctions) {
        if (!e.off)
          console.log("adding", e.event, e.layer);
        $mapobject.on(e.event, e.layer, e.callback);
      }
    });
    if (drawing_tools)
      await (0, import_MapDraw.init_draw)();
    import_mapstore.draw_type.subscribe(() => {
      console.warn("------dt-------", $draw_type);
    });
    loading = false;
    console.warn("---loaded---");
  }
  if ($$props.drawing_tools === void 0 && $$bindings.drawing_tools && drawing_tools !== void 0)
    $$bindings.drawing_tools(drawing_tools);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.SetLayers === void 0 && $$bindings.SetLayers && SetLayers !== void 0)
    $$bindings.SetLayers(SetLayers);
  $$unsubscribe_draw_type();
  $$unsubscribe_mapobject();
  $$unsubscribe_mapfunctions();
  $$unsubscribe_maplayer();
  $$unsubscribe_mapsource();
  return `
<main><div class="${"mapboxgl-canvas"}" tabindex="${"0"}" aria-label="${"Map"}" id="${"mapcontainer"}" style="${"width: " + (0, import_index_0029e4b6.f)(width) + "; height: " + (0, import_index_0029e4b6.f)(height) + "; opacity:" + (0, import_index_0029e4b6.f)(loading ? 0.4 : 1)}"${(0, import_index_0029e4b6.i)("this", webgl_canvas, 0)}></div>
</main>`;
});
