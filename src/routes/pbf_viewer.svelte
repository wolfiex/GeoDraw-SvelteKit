<script context='module' lang='ts'>

// import {VectorTile} from '@mapbox/vector-tile';
// import {Pbf} from 'pbf';
// import {onMount} from 'svelte';
// import {zlib} from 'zlib';

// console.error('example usage: http://localhost:3000/pbf_viewer#http://localhost:3000/infomap_tiles/4/7/4.pbf')

// let hash='dsfsd'

// let Protobuf = Pbf

// // init functions need to be async
// async function init(){
// hash = window.location.hash.slice(1);
// // hash = 'dsf'
// console.log(window.location.hash)
// console.warn(new Protobuf(hash))

// // var tile;
// // gunzip(hash, function(buffer) {
// //     console.warn(new Protobuf(buffer))
// //     tile = new VectorTile(new Protobuf(buffer));
// // }
// // Contains a map of all layers
// const layers = tile.layers;

// console.log(layers);
// console.warn(tile)

// }

// onMount(init)
</script>

<main>
    {#if hash}
    <h1> Tile: {hash}</h1>
    {/if}


</main>

<style>
main {
    display:flex;
    position:relative;
    padding: 100px;
}
</style>