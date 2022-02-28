<script>
	import "./css/mapbox-gl.css";

	let webgl_canvas;

	export let width = "100%";
	export let height = "100%";

	let selected = new Set([]);
	let pending = new Set([]);
	let coordinates;

	// import { default as mapboxgl } from "./mapbox-gl.js";
	import { default as AreaMap } from "./AreaMap.svelte";
	import mapboxgl, { Popup } from "mapbox-gl";
	import { onMount } from "svelte";
	import { writable, get } from "svelte/store";
	import { csv } from "d3-fetch";
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
		draw_type,
		radiusInKm,
		// level,
		// zoomed,
		//init_draw,
	} from "./mapstore.js";

	//////// header /////////
	import "carbon-components-svelte/css/all.css";
	import {
		Header,
		SkipToContent,
		HeaderUtilities,
		Content,
		Grid,
		Row,
		Column,
		Theme,
		HeaderNav,
		HeaderNavItem,
		HeaderNavMenu,
		SideNav,
		SideNavItems,
		SideNavMenu,
		SideNavMenuItem,
		SideNavLink,
		SideNavDivider,
		///
		Slider,
		Dropdown,
		ButtonSet,
		Button,
	} from "carbon-components-svelte";

	import Add16 from "carbon-icons-svelte/lib/Add16";
	import Subtract16 from "carbon-icons-svelte/lib/Subtract16";
	import AreaCustom32 from "carbon-icons-svelte/lib/AreaCustom32";
	// // var Add16 = '+'

	let isSideNavOpen = false;
	const areatype = "LSOA";
	//////////// header ///////////////

	console.log("mapboxgl", mapboxgl);

		// // strava does not load on localhost
		// var needcors = "";
		// if (window.location.host.split(":")[0] != "localhost") {
		// 	needcors = "https://cors-anywhere.herokuapp.com/";
		// 	window.open("https://cors-anywhere.herokuapp.com/", "_blank");
		// 	alert('Go to '+"https://cors-anywhere.herokuapp.com/"+' and click "Add CORS Anywhere"');
		// }

	async function init() {
		console.warn(webgl_canvas);




		console.log("---" + window.location.host.split(":")[0] + "---");

		// map setup and vars
		$mapsource = {
			// 'osm': {
			//     type: 'raster',
			//     tiles: [needcors+"http://heatmap-external-a.strava.com/tiles/run/gray/{z}/{x}/{y}.png"],
			//   },
			area: {
				type: "vector",
				tiles: [
					`https://wolfiex.github.io/ONS_Maptiles/${areatype}/{z}/{x}/{y}.pbf`,
				],
			},

			// selector: {
			// 	type: "geojson",
			// 	data: "geojson/Counties_and_Unitary_Authorities_(December_2020)_UK_BGC.geojson",
			// 	generateId: true,
			// },
		};

		$maplayer = [
			{
				id: "bounds",
				source: "area",
				"source-layer": areatype,
				// tileSize: 256,
				type: "fill",
				paint: {
					"fill-color": "transparent",
					"fill-opacity": 0.7,
					"fill-outline-color": "steelblue",
				},
			},
		];

		$mapfunctions = [];

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

		$draw_type = "radius";
	} //endinit

	function recolour() {
		console.warn("recolour", ...pending);
		$mapobject.setPaintProperty("bounds", "fill-color", [
			"match",
			["get", areatype],
			["literal", ...pending],
			"orange",
			[
				"match",
				["get", areatype],
				["literal", ...selected],
				"red",
				"transparent",
			],
		]);
	}

	function update_area(callback) {
		// if (!coordinates) return;
		var query;
		coordinates = callback.detail.code;
		console.error(callback);
		switch ($draw_type) {
			case "radius":
				query = `location=${coordinates.lng},${
					coordinates.lat
				}&radius=${$radiusInKm * 1000}`;
				break;
			case "polygon":
				break;
			case "click":
				pending = new Set(
					coordinates.map((q) => q.properties[areatype])
				);
				recolour();
		}

		if (query)
			csv(
				`http://ec2-18-193-78-190.eu-central-1.compute.amazonaws.com:25252/query/2011?${query}&cols=geography_code,KS102EW0001&geotype=${areatype}`
			)
				.then((d) => {
					pending = new Set(d.map((e) => e.geography_code));
				})
				.then(recolour);

		console.log(pending, "PENDING");
	}
	////////////

	/// Append to the selected list
	function update_selection(direction) {
		// union or difference
		selected = direction
			? new Set([...selected, ...pending])
			: new Set([...selected].filter((x) => !pending.has(x)));

		console.log(selected);
		pending = new Set([]);
		recolour();
	}

	onMount(init);
</script>

<main>
	<div id="header">
		<Header company="ONS" platformName="Custom Data" bind:isSideNavOpen>
			<!-- <div slot="skip-to-content">
			  <SkipToContent />
			</div> -->

			<br />
			{#if $draw_type}
				<ButtonSet id="drawsave">
					<Button icon={Add16} on:click={() => update_selection(true)}
						>Select</Button
					>
					<Button
						icon={Subtract16}
						on:click={() => update_selection(false)}
						kind="secondary">Remove</Button
					>
				</ButtonSet>
			{/if}
			<!-- <h1 style="display:inline-block;position:relative">kldsjkj</h1> -->

			<br /><br />

			 <SideNav bind:isOpen={isSideNavOpen}>
				<HeaderNavItem href="/" text="Link 1" />
				<HeaderNavItem href="/" text="Link 2" />
				<HeaderNavItem href="/" text="Link 3" />
				<HeaderNavMenu text="Menu">
					<HeaderNavItem href="/" text="Link 1" />
					<HeaderNavItem href="/" text="Link 2" />
					<HeaderNavItem href="/" text="Link 3" />
				</HeaderNavMenu>
				<HeaderNavItem href="/" text="Link 4" />

				<SideNavItems>
					<!-- <SideNavLink text="Link 1" />
					<SideNavLink text="Link 2" />
					<SideNavLink text="Link 3" />
					<SideNavMenu text="Menu">
						<SideNavMenuItem href="/" text="Link 1" />
						<SideNavMenuItem href="/" text="Link 2" />
						<SideNavMenuItem href="/" text="Link 3" />
					</SideNavMenu>
					<SideNavDivider />
					<SideNavLink text="Link 4" /> -->
				</SideNavItems>
			</SideNav> 

			<HeaderNav>
				<HeaderNavItem href="/" text="Link 1" />
				<HeaderNavItem href="/" text="Link 2" />
				<HeaderNavItem href="/" text="Link 3" />
				<HeaderNavMenu text="Menu">
					<HeaderNavItem href="/" text="Link 1" />
					<HeaderNavItem href="/" text="Link 2" />
					<HeaderNavItem href="/" text="Link 3" />
				</HeaderNavMenu>
				<HeaderNavItem href="/" text="Link 4" />
			</HeaderNav>
		</Header>

		<!-- <h1>Hello </h1> -->

		<br /><br /><br />

		<div class="menu">
			<Dropdown
				type="inline"
				size="xl"
				titleText=""
				bind:selectedId={$draw_type}
				id="draw_dropdown"
				items={[
					{ id: "radius", text: "Radius Selection Tool"},
					{ id: "polygon", text: "Polygion Selection Tool" },
					{ id: "click", text: "Click Selection " },
				]}
			/>

			{#if $draw_type == "radius"}
				<!-- <p> Radius Selection Tool</p> -->
				<Slider
					labelText="Select Distance (km)"
					min={2}
					max={20}
					bind:value={$radiusInKm}
					hideTextInput
				/>
			{:else if $draw_type == "polygon"}
				<p>Polygon Selection Tool</p>
			{/if}
		</div>
	</div>
	<div id="map">
		<AreaMap drawing_tools={true} on:coordinate_change={update_area} />
	</div>
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

	:global(.bx--form-item label,.bx--slider-container) {
		justify-content: space-around;
		margin-left: auto;
		margin-right: auto;
		display: block;
		/* background-color: red; */
	}
	:global(#drawsave) {
		display: flex;
		justify-content: flex-end;
		align-items: right;
		width: 100%;
	}

	:global(#draw_dropdown span.bx--list-box__label) {
		font-size: 1rem !important;
		/* color:red; */
		font-weight: 400;
		line-height: 1.5;
		letter-spacing: 0;
		justify-content: space-around;
		margin-left: auto;
		margin-right: auto;
	}
</style>
