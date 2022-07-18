import { c as create_ssr_component, b as subscribe, h as createEventDispatcher, f as escape, i as add_attribute } from "../../../chunks/index-0029e4b6.js";
import "maplibre-gl";
import { init_draw } from "../../endpoints/draw/MapDraw.js";
import { draw_type, mapobject, mapfunctions, maplayer, mapsource } from "../../endpoints/draw/mapstore.js";
import "@mapbox/tilebelt";
import "@turf/union";
import "../../../chunks/index-7e61ccad.js";
const AreaMap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $draw_type, $$unsubscribe_draw_type;
  let $mapobject, $$unsubscribe_mapobject;
  let $mapfunctions, $$unsubscribe_mapfunctions;
  let $maplayer, $$unsubscribe_maplayer;
  let $mapsource, $$unsubscribe_mapsource;
  $$unsubscribe_draw_type = subscribe(draw_type, (value) => $draw_type = value);
  $$unsubscribe_mapobject = subscribe(mapobject, (value) => $mapobject = value);
  $$unsubscribe_mapfunctions = subscribe(mapfunctions, (value) => $mapfunctions = value);
  $$unsubscribe_maplayer = subscribe(maplayer, (value) => $maplayer = value);
  $$unsubscribe_mapsource = subscribe(mapsource, (value) => $mapsource = value);
  createEventDispatcher();
  var loading = true;
  let webgl_canvas;
  let { drawing_tools = false } = $$props;
  let { width = "100vw" } = $$props;
  let { height = "100vh" } = $$props;
  async function SetLayers() {
    console.log("set layers");
    mapsource.subscribe(async () => {
      for (const [key, value] of Object.entries($mapsource)) {
        if ($mapobject.getSource(key))
          $mapobject.removeSource(key);
        if (!$mapobject.getSource(key))
          $mapobject.addSource(key, value);
      }
    });
    maplayer.subscribe(async () => {
      for (const value of $maplayer) {
        console.log("layer", value);
        if ($mapobject.getLayer(value.id))
          $mapobject.removeLayer(value.id);
        $mapobject.addLayer(value);
      }
    });
    mapfunctions.subscribe(async () => {
      for (const e of $mapfunctions) {
        if (!e.off)
          console.log("adding", e.event, e.layer);
        $mapobject.on(e.event, e.layer, e.callback);
      }
    });
    if (drawing_tools)
      await init_draw();
    draw_type.subscribe(() => {
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
<main><div class="${"mapboxgl-canvas"}" tabindex="${"0"}" aria-label="${"Map"}" id="${"mapcontainer"}" style="${"width: " + escape(width) + "; height: " + escape(height) + "; opacity:" + escape(loading ? 0.4 : 1)}"${add_attribute("this", webgl_canvas, 0)}></div>
</main>`;
});
export { AreaMap as default };
