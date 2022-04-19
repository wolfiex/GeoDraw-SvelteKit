import {onDestroy} from 'svelte';
import {get} from 'svelte/store';
import {mapobject, radiusInKm, draw_type, selected} from './mapstore.js';

export let coordinates = [];

////////////////////
///////////////////

export async function init_draw () {
  get (mapobject).addSource ('drawsrc', {
    type: 'geojson',
    data: {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [],
      },
    },
  });

  get (mapobject).addLayer ({
    id: 'draw_layer',
    type: 'line',
    source: 'drawsrc',
    paint: {
      'line-color': '#222',
      'line-width': 5,
      'line-dasharray': [2, 1],
    },
  });

  get (mapobject).addLayer ({
    id: 'circle_layer',
    type: 'circle',
    source: 'drawsrc',
    paint: {
      'circle-radius': {
        base: 2,
        stops: [[0, 0], [22, 180]],
      },
      'circle-color': 'coral',
      'circle-opacity': 0.5,
    },
  });

  // set default
  draw_type.set ('click');
  // clear coordinates each time we change 
  draw_type.subscribe(()=> coordinates=[]);
  // update circle tool each radius change
  radiusInKm.subscribe (circle_paint);

  get (mapobject).on ('click', 'bounds', function clicked (e) {
    console.log (e.lngLat, get (draw_type));
    // const features = get(mapobject).queryRenderedFeatures(e.lngLat,'bounds');
    console.warn (e.features[0].properties);
    // // const features = get(mapobject).querySourceFeatures('centroids')
    // console.log(get(mapobject).queryRenderedFeatures,'dfdf', get(mapobject).querySourceFeatures)
    // // const features = get(mapobject).queryRenderedFeatures({geometry:'circle'},'centroids')
    // console.warn (features);

    switch (get (draw_type)) {
      case 'radius':
        draw_radius (e.lngLat);
        // circle_fast (e.lngLat);
        break;
      case 'poly':
        draw_polygon(e);
        break;
      case 'click':
        draw_point(e);
        break;
    }
  });

  // on move events
  get (mapobject).on ('mousemove', 'bounds', function move (e) {
    // console.log (e.lngLat, get (draw_type));

    switch (get (draw_type)) {
      case 'radius':
        circle_fast (e.lngLat);
        break;
      case 'poly':
        polygon_fast(e.lngLat);
        break;
      case 'click':
        // draw_point(e);
        click_select(e)
        break;
    }
  });
}
/// UPDATE FUNCTIONS
// function update_area (callback) {
//   // if (!coordinates) return;
//   var query;
//   coordinates = callback.detail.code;
//   console.error (callback);
// }

function clear () {
  change_data ('drawsrc', {
    type: 'Feature',
    geometry: {
      type: 'Polygon',
      coordinates: [],
    }})
}

export function change_data (layer, data) {
  get (mapobject).getSource (layer).setData (data);
}

////////////////////
// Click Tool
////////////////////


function point_click(e,layers=['bounds'],buff=4){
  console.warn(e,layers,buff)
  const bbox = [[e.point.x - buff, e.point.y - buff], [e.point.x + buff, e.point.y + buff]];
  var features = get(mapobject).queryRenderedFeatures (bbox, {
    layers: layers//['layers'],
  });
  // features.sort()
  return features
}


// window.g = get(mapobject);

function draw_point (e) {
  // const selectedFeatures = point_click(e,['centroids'])
  // conso
  clicked(new Set(e.features.map(d=>d.properties.oa)))

  console.warn('--clickadd',get(selected))

 
}

function click_select(e){

//   var buff = 4
//   var area = [[e.point.x - buff, e.point.y - buff],[e.point.x + buff, e.point.y - buff], [e.point.x + buff, e.point.y + buff],[e.point.x - buff, e.point.y + buff]];
//   var geo = {
//     type: 'Feature',
//     geometry: {
//       type: 'Polygon',
//       coordinates: [area],
//     }
// };

// change_data ('drawsrc', geo);


}


////////////////////
// Matching Utilities
////////////////////

function update(oa=[],msoa=[],add=true){
  // update the selection 
  var current = get(selected);
  var last = new Set(current[current.length - 1]);
  if (add){
    current.push({oa:new Set([...last.oa,...oa]),msoa:new Set([...last.msoa,...msoa])});
  }else{
    current.push({oa:new Set([...last.oa].filter(x => !new Set(oa).has(x))),msoa:new Set([...last.msoa].filter(x => !new Set(msoa).has(x)))});
  }

  selected.set(current);
  console.warn('updated---',get(selected))
}

function clicked(oalist){
  // add remove clicked oa
  const current = get(selected);
  console.log('ccc',current,oalist,current[current.length - 1],current.oa);
  var last = Object.assign({},current[current.length - 1]);
  // var last = JSON.parse(JSON.stringify(current[current.length - 1]));
  // last = {oa:new Set([...last.oa]),msoa:new Set([...last.msoa])};

  last = {oa:new Set(last.oa),msoa:new Set(last.msoa)};

  console.log('--clicked',oalist,last);
  [...oalist].forEach(oa=>last.oa.has(oa)? last.oa.delete(oa):last.oa.add(oa))

  console.log(last.oa)
  current.push(last);
  selected.set(current)
  

}



function inPolygon (polygon, point) {
  // check if existing 
  var n = polygon.length,
    p = polygon[n - 1],
    [x, y] = point,
    [x0, y0] = p,
    x1,
    y1,
    inside = false;

  for (var i = 0; i < n; ++i) {
    (p = polygon[i]), (x1 = p[0]), (y1 = p[1]);
    if (y1 > y !== y0 > y && x < (x0 - x1) * (y - y1) / (y0 - y1) + x1)
      inside = !inside;
    (x0 = x1), (y0 = y1);
  }

  return inside;
}

////////////////////
// Circle Tools
////////////////////

function draw_radius (center, points = 20) {
  // if(!points) points = 64;
  var coords = {
    latitude: center.lat,
    longitude: center.lng,
  };

  clear ();

  var km = get (radiusInKm);

  var ret = [];
  var distanceX = km / (111.32 * Math.cos (coords.latitude * Math.PI / 180));
  var distanceY = km / 110.574;

  var theta, x, y;
  for (var i = 0; i < points; i++) {
    theta = i / points * (2 * Math.PI);
    x = distanceX * Math.cos (theta);
    y = distanceY * Math.sin (theta);
    ret.push ([coords.longitude + x, coords.latitude + y]);
  }
  ret.push (ret[0]);

  // var geo = {
  //   type: 'Feature',
  //   geometry: {
  //     type: 'Polygon',
  //     coordinates: [ret],
  //   },
  // };
  // change_data ('drawsrc', geo);

  // dispatch ('coordinate_change', {
  //   code: center,
  // });

  // $mapobject.getSource("drawsrc").setData(geo);
  get (mapobject).panTo (center);
}



/// Fast Circle on-move Function
function circle_fast (center) {
  var geo = {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [center.lng, center.lat],
    },
  };
  change_data ('drawsrc', geo);
  return geo;
}

/// Scale Calulation Function.
function circle_paint () {
  if (mapobject) {
    const m2p = (meters, latitude) =>
      meters / 0.075 / Math.cos (latitude * Math.PI / 180);

    get (mapobject).setPaintProperty ('circle_layer', 'circle-radius', {
      base: 2,
      stops: [
        [0, 0],
        [22, m2p (get (radiusInKm) * 2000, get (mapobject).getCenter ().lat)],
      ],
    });
  }
}



////////////////////
// Polygon
////////////////////

function draw_polygon(e){

  var existing = point_click(e,['circle_layer']);
  console.error('eeee',existing)




  e = e.lngLat
  coordinates.push([e.lng, e.lat])
  console.log(coordinates)
  //coordinates.push([e.lng, e.lat]);
  var geo = {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [coordinates],
      }
  };
  console.error(geo);
  change_data ('drawsrc', geo);

  
}
    
function polygon_fast(e){
  var temp = [...coordinates,[e.lng, e.lat]]
  var geo = {
    type: 'Feature',
    geometry: {
      type: 'Polygon',
      coordinates: [temp],
    }
  };
  change_data ('drawsrc', geo);
}




