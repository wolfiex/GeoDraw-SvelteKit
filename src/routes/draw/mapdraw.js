
import { onDestroy } from 'svelte';
import {mapobject,radiusInKm,draw_type} from './mapdraw.js';

let initiated = false;
export let coordinates=[];
$draw_type = 'radius';


function update_area(callback) {
    // if (!coordinates) return;
    var query;
    coordinates = callback.detail.code;
    console.error(callback);
  }


  export function change_data(layer, data) {
    $mapobject.getSource(layer).setData(data);
}




// if the mapobject has been created
const unsubscribe = mapobject.subscribe(value => {
    if (value && !initiated) {
        print('initiated',$mapobject);
        initiated = true;
        onDestroy(unsubscribe); 

        radiusInKm.subscribe(() => {
            // this is only visible on radial draw
            console.log("radius", get(radiusInKm), coordinates, coordinates.length);
            if ($mapobject) draw_radius(coordinates);
        });




      
}});

initiated? onDestroy(unsubscribe): null;
