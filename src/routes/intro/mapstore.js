import { writable, get } from 'svelte/store';


// global variables shared between units. 
export const draw_type = writable(undefined);// drawing tool type
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
export let location = {
    bounds: [[-5.816, 49.864], [1.863, 55.872]], // England & Wales bounding box
};
export let maxbounds = null;[[-9, 47], [5, 57]];
export const mapstyle = '/style-omt.json'//"https://bothness.github.io/ons-basemaps/data/style-omt.json";