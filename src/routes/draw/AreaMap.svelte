<script>
	// imports
	import mapboxgl, { Popup } from "mapbox-gl";
	// console.log(mapboxgl)
	// import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
	// import MapboxDraw from "@mapbox/mapbox-gl-draw";
	// import { default as mapboxgl } from "./mapbox-gl.js";
	import { createEventDispatcher, onMount } from "svelte";
	import { writable, get } from "svelte/store";
	const dispatch = createEventDispatcher();
	import {
		// select,
		mapsource,
		maplayer,
		mapfunctions,
		mapobject,
		draw_type,
		// datalayers,
		mapstyle,
		minzoom,
		maxzoom,
		location,
		maxbounds,
		
		// level,
		// zoomed,
		//init_draw,
	} from "./mapstore.js";

	//styling
	// import 'mapbox-gl/dist/mapbox-gl-draw.css'
	import "./css/mapbox-gl.css";

	let webgl_canvas;

	export let drawing_tools = false;
	export let width = "100vw";
	export let height = "100vh";
	let coordinates = [];
	let draw;

	/// MAP creation
	async function init() {
		console.warn(webgl_canvas);

		$mapobject = new mapboxgl.Map({
			container: "mapcontainer",
			style: mapstyle,
			minZoom: minzoom,
			maxZoom: maxzoom,
			maxBounds: maxbounds,
			pitch: 10, // 30,
			center: [0, 52],
			zoom: 4,
		});

		// scale bar
		$mapobject.addControl(
			new mapboxgl.ScaleControl({
				position: 'bottom-left'
			})
		);

		// navigation
		$mapobject.addControl(new mapboxgl.NavigationControl(), "bottom-right");

		//disable double click and rotation
		$mapobject.doubleClickZoom.disable();
		$mapobject.dragRotate.disable();

		// correct error - ignore 403 missing tiles
		$mapobject.on("error", (e) => {
			if (e.error.status != 403 && e.error.message != 'Failed to fetch' && !/CORS/.test(e.error.message)) {
				console.error(e.error.status, e.error.message);
		}});

		$mapobject.on("load", SetLayers);
	}


	/// Set all Mapbox Parameters ///
	export async function SetLayers() {
		// set mapbox layers
		console.log("set layers");

		mapsource.subscribe(async () => {
			// set the sources
			for (const [key, value] of Object.entries($mapsource)) {
				if ($mapobject.getSource(key)) $mapobject.removeSource(key);
				// if (value.hasOwnProperty('data')) value.data = await value.data; // for async loads
				if (!$mapobject.getSource(key))
					$mapobject.addSource(key, value); // as it may nto be removable
			}
		});

		maplayer.subscribe(async () => {
			// set the layers
			for (const value of $maplayer) {
				console.log("layer", value);
				if ($mapobject.getLayer(value.id))
					$mapobject.removeLayer(value.id);
				$mapobject.addLayer(value);
			}
		});

		mapfunctions.subscribe(async () => {
			// console.warn('fnreload',$mapfunctions)
			// set the functions
			for (const e of $mapfunctions) {
				// $mapobject.off(e.event, e.layer, e.callback);
				if (!e.off) console.log("adding", e.event, e.layer);
				$mapobject.on(e.event, e.layer, e.callback);
			}
		});




		if (drawing_tools) await init_draw();


		// move mapobject to location
		$mapobject.fitBounds(location.bounds, {
			padding: 20,
		});
	}




	///DRAWING


	export function draw_radius(center, points = 20) {
		// if(!points) points = 64;
		// console.log(center);

		var coords = {
			latitude: center.lat,
			longitude: center.lng,
		};

		coordinates = center;

		var km = $radiusInKm;

		var ret = [];
		var distanceX =
			km / (111.32 * Math.cos((coords.latitude * Math.PI) / 180));
		var distanceY = km / 110.574;

		var theta, x, y;
		for (var i = 0; i < points; i++) {
			theta = (i / points) * (2 * Math.PI);
			x = distanceX * Math.cos(theta);
			y = distanceY * Math.sin(theta);
			ret.push([coords.longitude + x, coords.latitude + y]);
		}
		ret.push(ret[0]);

		

		var geo = {
			type: "Feature",
			geometry: {
				type: "Polygon",
				coordinates: [ret],
			},
		};

		change_data("drawsrc", geo);

		dispatch("coordinate_change", {
			code: center,
		});

		// $mapobject.getSource("drawsrc").setData(geo);
		$mapobject.panTo(center);
	}

	function clean() {
		change_data("drawsrc", {
			type: "Feature",
			geometry: {
				type: "Polygon",
				coordinates: [],
			},
		});
	}

	function draw_point(e) {
		// console.log(e);
		const bbox = [
			[e.point.x - 4, e.point.y - 4],
			[e.point.x + 4, e.point.y + 4],
		];

		const selectedFeatures = $mapobject.queryRenderedFeatures(bbox, {
			layers: ["bounds"],
		});

		console.log(selectedFeatures);

		dispatch("coordinate_change", {
			code: selectedFeatures,
		});
	}

	async function init_draw() {
		// console.log("init_draw", get(mapobject));

		$mapobject.addSource("drawsrc", {
			type: "geojson",
			data: {
				type: "Feature",
				geometry: {
					type: "Polygon",
					coordinates: [],
				},
			},
		});

		$mapobject.addLayer({
			id: "draw_layer",
			type: "line",
			source: "drawsrc",
			paint: {
				"line-color": "#222",
				"line-width": 5,
				"line-dasharray": [2, 1],
			},
		});

		$mapobject.on("click", "bounds", function clicked(e) {
			console.log(e.lngLat, $draw_type);

			// const features = 4//$mapobject.queryRenderedFeatures(e.lngLat,'bounds');
			console.warn(e.features[0].properties);

			switch ($draw_type) {
				case "radius":
					draw_radius(e.lngLat);
					break;
				// case "polygon":
				// 	draw_polygon(e.lngLat);
				// 	break;
				case "click":
					draw_point(e);
					break;
			}
		});

		
		draw_type.subscribe(() => {
			console.warn("------dt-------", $draw_type);
			if (draw) {


				clean();

				if (e.target.checked) {
					map[handler].enable();
					} else {
					map[handler].disable();
					}

				// try {
				// 	$mapobject.removeControl(draw);
				// } catch (e) {}

				// if ($draw_type === "polygon") {
				// 	$mapobject.addControl(draw);
				// }
			}
		});

		// on polygon change
		function drawchange(e) {
			dispatch("coordinate_change", {
				code: e.features,
			});
		}
		// $mapobject.on("draw.create",drawchange );
		// $mapobject.on("draw.update",drawchange );

		// we only need to initialise the drawing tools once
		drawing_tools = false;
	}

	/// main
	onMount(init);
</script>

<!-- Script autogenerated by Svelte-Jinja (author: Dan Ellis) -->
<main>
	<div
		class="mapboxgl-canvas"
		tabindex="0"
		aria-label="Map"
		id="mapcontainer"
		style="width: {width}; height: {height}; "
		bind:this={webgl_canvas}
	/>
</main>

<style lang="scss">
	main {
		position: absolute;
		top: 0;
		left: 0;
		margin: auto;
	}
</style>
