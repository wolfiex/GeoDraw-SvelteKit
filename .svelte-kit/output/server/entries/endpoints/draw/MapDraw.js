import { g as get_store_value } from "../../../chunks/index-c9602e46.js";
import { draw_type, radiusInKm, draw_enabled, selected, mapobject, add_mode } from "./mapstore.js";
import { bboxToTile } from "@mapbox/tilebelt";
import union from "@turf/union";
import "../../../chunks/index-4d87e63a.js";
var simplify = {};
let coordinates = [];
async function init_draw() {
  get_store_value(mapobject).addSource("drawsrc", {
    type: "geojson",
    data: {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: []
      }
    }
  });
  get_store_value(mapobject).addLayer({
    id: "draw_layer",
    type: "line",
    source: "drawsrc",
    paint: {
      "line-color": "#222",
      "line-width": 5,
      "line-dasharray": [2, 1]
    }
  });
  get_store_value(mapobject).addLayer({
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
  draw_type.subscribe(() => {
    coordinates = [];
    circle_paint(get_store_value(draw_type) != "radius");
  });
  draw_type.set("radius");
  radiusInKm.subscribe(circle_paint);
  get_store_value(mapobject).on("click", "bounds", function boundclick(e) {
    console.log(e.lngLat, get_store_value(draw_type));
    switch (get_store_value(draw_type)) {
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
  get_store_value(mapobject).on("zoomend", function() {
    draw_enabled.set(get_store_value(mapobject).getZoom() < 10);
  });
  get_store_value(mapobject).on("mousemove", "bounds", function move(e) {
    switch (get_store_value(draw_type)) {
      case "radius":
        circle_fast(e.lngLat);
        break;
      case "poly":
        polygon_fast(e.lngLat);
        break;
    }
  });
}
function change_data(layer, data) {
  get_store_value(mapobject).getSource(layer).setData(data);
}
function update(coordinates2) {
  const bbox = getbbox(coordinates2);
  const features = get_store_value(mapobject).queryRenderedFeatures(bbox.map((d) => get_store_value(mapobject).project(d)), { layers: ["centroids"] });
  const oa = features.filter((i) => inPolygon(coordinates2, i.geometry.coordinates)).map((d) => d.properties.id);
  var current = get_store_value(selected);
  var last = current[current.length - 1];
  bbox.map((d) => {
    last.lat.push(d[1]);
    last.lng.push(d[0]);
  });
  if (get_store_value(add_mode)) {
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
  selected.set(current);
  console.warn("updated---", get_store_value(selected), get_store_value(add_mode));
}
function draw_point(e) {
  const oalist = new Set(e.features.map((d) => d.properties.oa));
  const current = get_store_value(selected);
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
  selected.set(current);
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
  c1 = get_store_value(mapobject).project(c1);
  c2 = get_store_value(mapobject).project(c2);
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
  var km = get_store_value(radiusInKm) / 2;
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
function circle_paint(clear = false) {
  console.warn("-circle", clear);
  if (mapobject) {
    if (clear == true) {
      return get_store_value(mapobject).setPaintProperty("circle_layer", "circle-radius", 5);
    }
    const m2p = (meters, latitude) => meters / 0.075 / Math.cos(latitude * Math.PI / 180);
    get_store_value(mapobject).setPaintProperty("circle_layer", "circle-radius", {
      base: 2,
      stops: [
        [0, 0],
        [22, m2p(get_store_value(radiusInKm) * 2e3, get_store_value(mapobject).getCenter().lat)]
      ]
    });
  }
}
function draw_polygon(e) {
  if (coordinates.length) {
    if (geomean(coordinates[0], [e.lng, e.lat])) {
      coordinates.push(coordinates[0]);
      update(coordinates);
      console.log("--saving polygon", get_store_value(selected));
      coordinates = [];
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
  const last = get_store_value(selected)[get_store_value(selected).length - 1];
  const bbox = [last.lng[0], last.lat[0], last.lng[1], last.lat[1]];
  const [x, y, z] = bboxToTile(bbox);
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
  console.warn("lsoa", tile, msoa, oa, lsoa, last.oa);
  get_store_value(mapobject).fitBounds(bbox, { padding: 200, animation: false, linear: true, duration: 200 });
  const oalist = [...last.oa];
  await new Promise((res) => setTimeout(res, 500));
  const features = get_store_value(mapobject).queryRenderedFeatures({
    layers: ["bounds"]
  }).filter((d) => oalist.includes(d.properties.oa));
  console.warn("features", features, get_store_value(mapobject).queryRenderedFeatures({
    layers: ["bounds"]
  }));
  if (!features.length) {
    return false;
  }
  let merge = features[0];
  for (let i = 1; i < features.length; i++) {
    merge = union(merge, features[i]);
  }
  merge.properties = { tile, msoa, oa, lsoa, original: oalist.length };
  console.log("---merge---", merge);
  return merge;
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
export { change_data, coordinates, init_draw, simplify_query };
