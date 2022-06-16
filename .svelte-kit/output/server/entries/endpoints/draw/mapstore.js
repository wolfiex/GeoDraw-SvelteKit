import { w as writable } from "../../../chunks/index-1ceaa7e2.js";
import "../../../chunks/index-f909a211.js";
const draw_type = writable(void 0);
const selected = writable([{ oa: /* @__PURE__ */ new Set(), lat: [], lng: [] }]);
const mapsource = writable({});
const maplayer = writable([]);
const mapfunctions = writable([]);
const mapobject = writable(void 0);
let add_mode = writable(true);
let draw_enabled = writable(false);
let query = writable({ error: false });
const radiusInKm = writable(5);
const store1 = writable({});
const store2 = writable({});
const store3 = writable({});
let minzoom = 4;
let maxzoom = 14;
let drawtools = true;
let location = {
  bounds: [
    [-5.816, 49.864],
    [1.863, 55.872]
  ]
};
let maxbounds = null;
const mapstyle = `/css/style-omt.json`;
function c2bbox(lat, lng) {
  var min_coords = [
    Math.min.apply(null, lng),
    Math.min.apply(null, lat)
  ];
  var max_coords = [
    Math.max.apply(null, lng),
    Math.max.apply(null, lat)
  ];
  return [min_coords, max_coords];
}
export { add_mode, c2bbox, draw_enabled, draw_type, drawtools, location, mapfunctions, maplayer, mapobject, mapsource, mapstyle, maxbounds, maxzoom, minzoom, query, radiusInKm, selected, store1, store2, store3 };
