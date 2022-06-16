import { writable, get } from 'svelte/store';


export const areaselect = writable([]);
export const areatype = writable(undefined); 
export const areastore = writable({}); 
export const individual = writable([]); 


export const geodb = writable(undefined); 