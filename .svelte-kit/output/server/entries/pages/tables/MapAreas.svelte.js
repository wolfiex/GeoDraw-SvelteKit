import { c as create_ssr_component, f as escape } from "../../../chunks/index-0029e4b6.js";
/* empty css                                                               */const css = {
  code: "@import 'https://unpkg.com/leaflet@1.8.0/dist/leaflet.css';#lmap.svelte-hs5vhq{display:inline-block;position:relative}",
  map: null
};
const MapAreas = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `<main><div id="${"lmap"}" style="${"height:" + escape(height) + "; width:100%"}" class="${"svelte-hs5vhq"}"></div></main>`;
});
export { MapAreas as default };
