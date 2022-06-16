<script>
import {onMount} from 'svelte';
import 'leaflet/dist/leaflet.css';

export let height = '400px'
export let minimap;
let map= false;

onMount(async ()=>{
   
    const L = await import('leaflet');

    map = L.map("lmap", {
        center: [0., 52.].reverse(),
        zoom: 5
        // dragging:false
    });


    var CyclOSM = L.tileLayer(
        "https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png",
        {
            maxZoom: 20,
            attribution: '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | Office for National Statistics UK'
        }
    );
    map.addLayer(CyclOSM);
    map.on('load',()=>update_map(minimap))

})


function update_map(coordinates){
    if (coordinates.length<1 | !map){
        return; 
    }

    if (typeof coordinates === 'string' || coordinates instanceof String){
    var geojson = JSON.parse(coordinates);}else{
        var geojson = coordinates;
    }

    var geo = L.geoJSON(geojson, {
        style:{color: "red"}

    })
    geo.addTo(map);
    map.fitBounds(geo.getBounds(), { padding: [14, 14] });
    }

$: update_map(minimap)

</script>

<main><div id="lmap" style = 'height:{height}; width:100%' /></main>

<style>
  @import 'https://unpkg.com/leaflet@1.8.0/dist/leaflet.css';
  /* main #lmap {
    height: 800px;
  } */
    #lmap {
        display:inline-block;
        position: relative;
    }
</style>
