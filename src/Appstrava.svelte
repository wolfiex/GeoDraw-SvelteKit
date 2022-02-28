<script>
	export let name;

	import './css/mapbox-gl.css';

let webgl_canvas;


export let width = '100%';
	export let height = '100%';


	import {default as mapboxgl} from './mapbox-gl.js';
	import { default as AreaMap } from "./AreaMap.svelte";
	// import mapboxgl, { Popup } from 'mapbox-gl';
	import { onMount } from 'svelte';
	import { writable, get } from 'svelte/store';
	import {
		// select,
		mapsource,
		maplayer,
		mapfunctions,
		mapobject,
		// draw_type,
		datalayers,
		mapstyle,
		minzoom,
		maxzoom,
		location,
		maxbounds,
		// level,
		// zoomed,
		//init_draw,
	} from './mapstore.js';




  //////////// header ///////////////




	console.log('mapboxgl', mapboxgl);



	async function init() {
		console.warn(webgl_canvas);
		
	
	// strava does not load on localhost 
	var needcors=''
	if (window.location.host.split(':')[0] == 'localhost'){
		needcors = 'https://cors-anywhere.herokuapp.com/';
		window.open('https://cors-anywhere.herokuapp.com/', '_blank');
	}

	console.log('---'+window.location.host.split(':')[0]+'---')


		// map setup and vars
	$mapsource = {
		'osm': {
            type: 'raster',
            tiles: [needcors+"http://heatmap-external-a.strava.com/tiles/run/gray/{z}/{x}/{y}.png"],
          },
		// selector: {
		// 	type: "geojson",
		// 	data: "geojson/Counties_and_Unitary_Authorities_(December_2020)_UK_BGC.geojson",
		// 	generateId: true,
		// },
	};




	$maplayer = [
						{
							id: "strava-routes",
							type: "raster",
							source: "osm",
							tileSize: 256,
						},
					];
	
	$mapfunctions = [
	];


		// osm: {
        //     type: 'raster',
        //     tiles: ["https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"],
        //   }
        // },
        // layers: [{
        //   id: 'osm',
        //   type: 'raster',
        //   source: 'osm',
        // }],

		// $mapobject.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
		// $mapobject.doubleClickZoom.disable();

		// correct error - ignore 403 missing tiles

	}

onMount(init)


</script>

<main>
	<div id="header">
		<h1>Hello {name}!</h1>
		<p>
			Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to
			learn how to build Svelte appz.
		</p>
	</div>
	<div id="map"><AreaMap /></div>
</main>

<style>
	#map {
		width: 100%;
		height: auto;
		left: 0;
		margin: auto;
		position: absolute;
	}
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: 100vh;
		}
	}
</style>
