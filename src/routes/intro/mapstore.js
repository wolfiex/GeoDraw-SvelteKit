import {
    writable,
    get
} from 'svelte/store';

// global variables shared between units. 
export const draw_type = writable(undefined); // drawing tool type
export const datalayers = writable(); // which layers contain data e.g. ['centroids']
export const select = writable([]); // selected areacodes
export const mapsource = writable({}); // source dictionary
export const maplayer = writable([]); // layer list
export const mapobject = writable(undefined); // the mapbox 'map' object
export const level = writable('oa'); // which level are we currently showing. 
export const levels = writable([]); // center of map
export const zoomed = writable(false); // center of map
export const mapfunctions = writable([]);

export const store1 = writable({});
export const store2 = writable({});
export const store3 = writable({});

// map constants
export let minzoom = 4;
export let maxzoom = 14;
export let drawtools = true

export let location = {
    bounds: [
        [-5.816, 49.864],
        [1.863, 55.872]
    ], // England & Wales bounding box
};
export let maxbounds = null;
[
    [-9, 47],
    [5, 57]
];
export const mapstyle = '/style-omt.json' //"https://bothness.github.io/ons-basemaps/data/style-omt.json";

export function c2bbox(lat, lng) {
    // const coords = geojson.geometry.coordinates[0].map(d => proj4(wgs84, osgb, d))
    // var lat = coords.map(p => p[1]);
    // var lng = coords.map(p => p[0]);

    var min_coords = [
        Math.min.apply(null, lng),
        Math.min.apply(null, lat)
    ]
    var max_coords = [
        Math.max.apply(null, lng),
        Math.max.apply(null, lat)
    ]

    return [min_coords, max_coords]
}


//         //     /// create or update

//         async function change(event) {
//                 const geojson = event.features[0];
//                 console.log("update", event.action, geojson);

//                 if (MapboxDrawGeodesic.isCircle(geojson)) {
//                     const center = MapboxDrawGeodesic.getCircleCenter(geojson);
//                     const radius = MapboxDrawGeodesic.getCircleRadius(geojson) / 100; // must divide by 100 to get accurate results
//                     console.log("circle", "center", center, "radius", radius);

//                     // lets space points around the centre to create a polygon

//                     var numberOfPoints = 20;
//                     var theta = (2.0 * Math.PI) / numberOfPoints;

//                     geojson.geometry.coordinates[0] = [];

//                     for (var i = 1; i <= numberOfPoints; i++) {
//                         geojson.geometry.coordinates[0].push([
//                             radius * Math.cos(theta * i) + center[0],
//                             radius * Math.sin(theta * i) + center[1],
//                         ]);
//                     }


//                     console.log('draw',geojson.geometry.coordinates)
//                 }


