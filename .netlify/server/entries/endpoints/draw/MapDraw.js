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
  change_data: () => change_data,
  coordinates: () => coordinates,
  init_draw: () => init_draw,
  simplify_query: () => simplify_query
});
module.exports = __toCommonJS(stdin_exports);
var import_index_092899d0 = require("../../../chunks/index-092899d0.js");
var import_mapstore = require("./mapstore.js");
var import_tilebelt = require("@mapbox/tilebelt");
var import_index_cc46cb38 = require("../../../chunks/index-cc46cb38.js");
var simplify = {};
let coordinates = [];
async function init_draw() {
  (0, import_index_092899d0.g)(import_mapstore.mapobject).addSource("drawsrc", {
    type: "geojson",
    data: {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: []
      }
    }
  });
  (0, import_index_092899d0.g)(import_mapstore.mapobject).addLayer({
    id: "draw_layer",
    type: "line",
    source: "drawsrc",
    paint: {
      "line-color": "#222",
      "line-width": 5,
      "line-dasharray": [2, 1]
    }
  });
  (0, import_index_092899d0.g)(import_mapstore.mapobject).addLayer({
    id: "circle_layer",
    type: "circle",
    source: "drawsrc",
    paint: {
      "circle-radius": {
        base: 2,
        stops: [[0, 0], [22, 180]]
      },
      "circle-color": "coral",
      "circle-opacity": 0.5
    }
  });
  import_mapstore.draw_type.subscribe(() => {
    coordinates = [];
    circle_paint(clear = (0, import_index_092899d0.g)(import_mapstore.draw_type) != "radius");
  });
  import_mapstore.draw_type.set("radius");
  import_mapstore.radiusInKm.subscribe(circle_paint);
  (0, import_index_092899d0.g)(import_mapstore.mapobject).on("click", "bounds", function boundclick(e) {
    console.log(e.lngLat, (0, import_index_092899d0.g)(import_mapstore.draw_type));
    switch ((0, import_index_092899d0.g)(import_mapstore.draw_type)) {
      case "radius":
        draw_radius(e.lngLat);
        break;
      case "poly":
        draw_polygon(e.lngLat);
        break;
      case "click":
        draw_point(e);
        break;
    }
  });
  (0, import_index_092899d0.g)(import_mapstore.mapobject).on("zoomend", function() {
    import_mapstore.draw_enabled.set((0, import_index_092899d0.g)(import_mapstore.mapobject).getZoom() < 10);
  });
  (0, import_index_092899d0.g)(import_mapstore.mapobject).on("mousemove", "bounds", function move(e) {
    switch ((0, import_index_092899d0.g)(import_mapstore.draw_type)) {
      case "radius":
        circle_fast(e.lngLat);
        break;
      case "poly":
        polygon_fast(e.lngLat);
        break;
    }
  });
}
function clear() {
  change_data("drawsrc", {
    type: "Feature",
    geometry: {
      type: "Polygon",
      coordinates: []
    }
  });
}
function change_data(layer, data) {
  (0, import_index_092899d0.g)(import_mapstore.mapobject).getSource(layer).setData(data);
}
function update(coordinates2) {
  const bbox = getbbox(coordinates2);
  const features = (0, import_index_092899d0.g)(import_mapstore.mapobject).queryRenderedFeatures(bbox.map((d) => (0, import_index_092899d0.g)(import_mapstore.mapobject).project(d)), { layers: ["centroids"] });
  const oa = features.filter((i) => inPolygon(coordinates2, i.geometry.coordinates)).map((d) => d.properties.id);
  var current = (0, import_index_092899d0.g)(import_mapstore.selected);
  var last = current[current.length - 1];
  bbox.map((d) => {
    last.lat.push(d[1]);
    last.lng.push(d[0]);
  });
  if ((0, import_index_092899d0.g)(import_mapstore.add_mode)) {
    current.push({
      oa: /* @__PURE__ */ new Set([...last.oa, ...oa]),
      lng: extent(last.lng),
      lat: extent(last.lat)
    });
  } else {
    current.push({
      oa: new Set([...last.oa].filter((x) => !new Set(oa).has(x))),
      lng: extent(last.lng),
      lat: extent(last.lat)
    });
  }
  import_mapstore.selected.set(current);
  console.warn("updated---", (0, import_index_092899d0.g)(import_mapstore.selected), (0, import_index_092899d0.g)(import_mapstore.add_mode));
}
function draw_point(e) {
  const oalist = new Set(e.features.map((d) => d.properties.oa));
  const current = (0, import_index_092899d0.g)(import_mapstore.selected);
  var last = Object.assign({}, current[current.length - 1]);
  last.lat.push(e.lngLat.lat);
  last.lng.push(e.lngLat.lng);
  last = {
    oa: new Set(last.oa),
    lat: extent(last.lat),
    lng: extent(last.lng)
  };
  [...oalist].forEach((oa) => last.oa.has(oa) ? last.oa.delete(oa) : last.oa.add(oa));
  current.push(last);
  import_mapstore.selected.set(current);
}
function inPolygon(polygon, point) {
  if (!polygon.length)
    return false;
  var n = polygon.length, p = polygon[n - 1], [x, y] = point, [x0, y0] = p, x1, y1, inside = false;
  for (var i = 0; i < n; ++i) {
    p = polygon[i], x1 = p[0], y1 = p[1];
    if (y1 > y !== y0 > y && x < (x0 - x1) * (y - y1) / (y0 - y1) + x1)
      inside = !inside;
    x0 = x1, y0 = y1;
  }
  return inside;
}
function geomean(c1, c2, thresh = 30) {
  c1 = (0, import_index_092899d0.g)(import_mapstore.mapobject).project(c1);
  c2 = (0, import_index_092899d0.g)(import_mapstore.mapobject).project(c2);
  return Math.sqrt((c1.x - c2.x) ** 2 + (c1.y - c2.y) ** 2) < thresh;
}
function getbbox(coords) {
  var lat = coords.map((p) => p[1]);
  var lng = coords.map((p) => p[0]);
  var min_coords = [Math.min.apply(null, lng), Math.min.apply(null, lat)];
  var max_coords = [Math.max.apply(null, lng), Math.max.apply(null, lat)];
  return [min_coords, max_coords];
}
function draw_radius(center, points = 20) {
  var coords = {
    latitude: center.lat,
    longitude: center.lng
  };
  var km = (0, import_index_092899d0.g)(import_mapstore.radiusInKm) / 2;
  var coordinates2 = [];
  var distanceX = km / (111.32 * Math.cos(coords.latitude * Math.PI / 180));
  var distanceY = km / 110.574;
  var theta, x, y;
  for (var i = 0; i < points; i++) {
    theta = i / points * (2 * Math.PI);
    x = distanceX * Math.cos(theta);
    y = distanceY * Math.sin(theta);
    coordinates2.push([coords.longitude + x, coords.latitude + y]);
  }
  coordinates2.push(coordinates2[0]);
  update(coordinates2);
}
function circle_fast(center) {
  var geo = {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [center.lng, center.lat]
    }
  };
  change_data("drawsrc", geo);
  return geo;
}
function circle_paint(clear2 = false) {
  console.warn("-circle", clear2);
  if (import_mapstore.mapobject) {
    if (clear2 == true) {
      return (0, import_index_092899d0.g)(import_mapstore.mapobject).setPaintProperty("circle_layer", "circle-radius", 5);
    }
    const m2p = (meters, latitude) => meters / 0.075 / Math.cos(latitude * Math.PI / 180);
    (0, import_index_092899d0.g)(import_mapstore.mapobject).setPaintProperty("circle_layer", "circle-radius", {
      base: 2,
      stops: [
        [0, 0],
        [22, m2p((0, import_index_092899d0.g)(import_mapstore.radiusInKm) * 2e3, (0, import_index_092899d0.g)(import_mapstore.mapobject).getCenter().lat)]
      ]
    });
  }
}
function draw_polygon(e) {
  if (coordinates.length) {
    if (geomean(coordinates[0], [e.lng, e.lat])) {
      coordinates.push(coordinates[0]);
      update(coordinates);
      console.log("--saving polygon", (0, import_index_092899d0.g)(import_mapstore.selected));
      coordinates = [];
      clear();
      return 1;
    }
  }
  coordinates.push([e.lng, e.lat]);
  var geo = {
    type: "Feature",
    geometry: {
      type: "Polygon",
      coordinates: [coordinates]
    }
  };
  console.error(geo);
  change_data("drawsrc", geo);
}
function polygon_fast(e) {
  var temp = [...coordinates, [e.lng, e.lat]];
  var geo = {
    type: "Feature",
    geometry: {
      type: "Polygon",
      coordinates: [temp]
    }
  };
  change_data("drawsrc", geo);
}
async function simplify_query() {
  const last = (0, import_index_092899d0.g)(import_mapstore.selected)[(0, import_index_092899d0.g)(import_mapstore.selected).length - 1];
  const bbox = [last.lng[0], last.lat[0], last.lng[1], last.lat[1]];
  const [x, y, z] = (0, import_tilebelt.bboxToTile)(bbox);
  if (z === 28)
    return null;
  var tile = `${z}/${x}/${y}`;
  if (z < 7)
    return {
      error_title: "Total area selected exceeds allowed limit. Please use the undo button to reduce area size.",
      error: `Parent Data Tile ${tile}`
    };
  if (simplify[tile]) {
    var simple = simplify[tile];
  } else {
    var simple = await fetch(`http://localhost:7113/encoding/${tile}.json`).then((d) => d.json());
    simple.lsoa = simple.lsoa.map((d) => {
      d[1] = new Set(d[1]);
      return d;
    });
    simple.msoa = simple.msoa.map((d) => {
      d[1] = new Set(d[1]);
      return d;
    });
    simplify[tile] = simple;
  }
  var rm = [];
  var oa = last.oa;
  var lsoa = simple.lsoa.filter((d) => ![...d[1]].filter((x2) => !oa.has(x2)).length);
  lsoa = new Set(lsoa.map((e) => {
    rm.push([...e[1]]);
    return e[0];
  }));
  var msoa = simple.msoa.filter((d) => ![...d[1]].filter((x2) => !lsoa.has(x2)).length);
  rm = new Set(rm.flat());
  var rmlsoa = new Set(msoa.map((d) => d[1]).flat());
  oa = [...oa].filter((e) => !rm.has(e));
  lsoa = [...lsoa].filter((e) => !rmlsoa.has(e));
  msoa = msoa.map((d) => d[0]);
  return { tile, msoa, oa, lsoa, original: [...last.oa].length };
}
function extent(values, valueof) {
  let min;
  let max;
  if (valueof === void 0) {
    for (const value of values) {
      if (value != null) {
        if (min === void 0) {
          if (value >= value)
            min = max = value;
        } else {
          if (min > value)
            min = value;
          if (max < value)
            max = value;
        }
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null) {
        if (min === void 0) {
          if (value >= value)
            min = max = value;
        } else {
          if (min > value)
            min = value;
          if (max < value)
            max = value;
        }
      }
    }
  }
  return [min, max];
}
