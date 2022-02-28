<script>
	import { onMount } from "svelte";
	import { default as AreaMap } from "./AreaMap.svelte";
	import {get} from "svelte/store";
	import {
		select,
		mapsource,
		maplayer,
		mapobject,
		draw_type,
		levels,
		level,
		zoomed,
		mapfunctions,
		c2bbox,
		store1,
		store2,
	} from "./mapstore.js";
	import "./mapbox-gl-draw-geodesic.min.js";

	import {
		areatype,
		areaselect,
		areastore,
		geodb,
		individual,
	} from "./store.js";
	import("carbon-components-svelte/css/white.css");
	//white,g10,g80,g100
	import {
		FormGroup,
		Button,
		RadioButton,
		RadioButtonGroup,
		Tooltip,
		Link,
		ProgressBar,
		Switch,
		InlineNotification,
		Dropdown,
		ProgressIndicator,
		ProgressStep,
		Toggle,
	} from "carbon-components-svelte";

	import {
		StructuredList,
		StructuredListHead,
		StructuredListRow,
		StructuredListCell,
		StructuredListBody,
		StructuredListInput,
	} from "carbon-components-svelte";

	// icons
	import { ContentSwitcher } from "carbon-components-svelte";
	import { TooltipIcon } from "carbon-components-svelte";
	import CheckmarkFilled16 from "../../../node_modules/carbon-icons-svelte/lib/CheckmarkFilled16";
	import LassoPolygon16 from "carbon-icons-svelte/lib/LassoPolygon16";
	import Location16 from "carbon-icons-svelte/lib/Location16";
	import NewTab16 from "carbon-icons-svelte/lib/NewTab16";
	import Cursor_216 from "carbon-icons-svelte/lib/Cursor_216";
	// import SmoothingCursor16 from "carbon-icons-svelte/lib/SmoothingCursor16";

	import { default as DSPanel } from "../components/DSPanel.svelte";
	import {
		init_db,
		load_db,
		query_db,
		SQL,
		blob32,
		geojsn,
	} from "../util_db.js";
	import("../css/normalize.css");

	// import { loop_guard } from "svelte/internal";
	// import AreaMap ,{ draw_type } from ".s/AreaMap";

	// Variables le global
	let alert_notify = false;
	let loaded = false;
	let toggled = true;
	let currentIndex = 1;

	let areas = [
		["OA", "Output_Areas", "The ..... of the selection. There are ...."],
		["MSOA", "Middle_Layer_Super_Output_Areas", "These ... "],
		["LSOA", "Lower_Layer_Super_Output_Areas", "Something here"],
	];

	// map setup and vars
	$mapsource = {
		selector: {
			type: "geojson",
			data: "geojson/Counties_and_Unitary_Authorities_(December_2020)_UK_BGC.geojson",
			generateId: true,
		},
	};

	$maplayer = [];
	//add map function variables here
	let hoveredStateId = [null, null];
	$mapfunctions = [
		{
			event: "click",
			layer: "select_layer",
			callback: select_callback,
		},
		{
			event: "mousemove",
			layer: "select_layer",
			callback: mousemove_callback("selector", 1, 0),
		},
		{
			event: "mouseleave",
			layer: "select_layer",
			callback: mouseleave_callback("selector", 1, 0),
		},
	];

	function debounce(ci) {
		return () =>
			setTimeout(() => {
				// open = cd;
				// if (ci)
				currentIndex = ci;
			}, 300);
	}

	$: currentIndex,
		(async () => {
			if (!loaded) return 0;
			/// the changer function for each slide accordion
			console.log("∆", currentIndex);
			switch (currentIndex) {
				case 1:
					$draw_type= undefined
					alert_notify = false;
					$maplayer = [
						{
							id: "select_layer",
							type: "fill",
							source: "selector",
							paint: {
								"fill-opacity": [
									"case",
									[
										"boolean",
										["feature-state", "hover"],
										false,
									],
									0.4,
									0.9,
								],
								"fill-outline-color": [
									"case",
									[
										"boolean",
										["feature-state", "hover"],
										false,
									],
									"red",
									"steelblue",
								],
								"fill-color": [
									"match",
									["get", "CTYUA20CD"],
									["literal", ...$areaselect],
									"orange",
									"transparent",
								],
							},
						},
					];
					break;
				case 2:
					$draw_type= undefined
					var nlen = $areaselect.length;

					// check we have selected something
					if (nlen < 1) {
						alert_notify = "No Areas Selected";
						currentIndex = 1; 
					}

					// document.getElementById("nareas").innerText = nlen;

					console.log($areaselect);
					break;

				case 3:
					// alert($areatype,'3', $areaselect);

					break;
			}
		})().then(() => {});

	onMount(init);

	////////////////////////////////
	//////// Functions /////////////
	////////////////////////////////

	async function init() {
		loaded = true;
		// $draw_type = "simple_select";
		Promise.all([init_db(), init_draw()]);
		console.log("started");

		// $draw_type = "draw_polygon";

		// draw_circle: modes.draw_circle,
		// draw_polygon: modes.draw_polygon,
		// draw_rectangle: DrawRectangle,
		// static: modes.static,
		// simple_select: modes.simple_select,
	}

	function btn(fn, arglist) {
		return () => {
			console.log(fn, arglist);
			fn(...arglist);
		};
	}

	function set_areatype(item) {
		return async () => {
			$areatype = item;
			console.log($areatype, "selected");
			currentIndex = 3;

			loaded = false;
			$geodb = new SQL.Database();

			var promises = $areaselect.map(async (en) => {
				// get each db.
				if ($areastore[en] == undefined)
					$areastore[en] = await load_db(
						`${$areatype}/data/${en}.db`
					);

				// query_db(
				// 	$areastore[en],
				// 	"SELECT * FROM geography LIMIT 1; "
				// );

				return { id: en, filename: $areastore[en].filename };
			});

			// promises.push((async function movemap() {
			// 	var polygons = $mapobject.querySourceFeatures("selector", {
			// 		sourceLayer: "select_layer",
			// 		filter: [
			// 			"match",
			// 			["get", "CTYUA20CD"],
			// 			["literal", ...$areaselect],
			// 			true,
			// 			false
			// 		],
			// 	});

			// 	var lat = []
			// 	var lon = []
			// 	polygons.forEach(element => {
			// 		console.log('eeeeee',element.geometry)
			// 		element.geometry.coordinates.forEach(mcoord => {
			// 			mcoord[0].forEach(coord => {
			// 			lat.push(coord[1])
			// 			lon.push(coord[0])
			// 		})})
			// 	});

			// 	c2bbox
			// 	console.error('aaaa',c2bbox(lat,lon),lat,lon)

			// 	$mapobject.fitBounds(c2bbox(lat,lon));

			// 	return 1;

			// })());

			console.log(promises);
			await Promise.all(promises).then((values) => {
				console.log("pval", values);

				// Attach dbs
				values.forEach((v) => {
					// if (!v) return 0; // if a function
					$geodb.run(`ATTACH DATABASE '${v.filename}' AS ${v.id};`);
					//BEGIN; insert into geography select * from ${v.id}.geography;END; DETACH DATABASE ${v.id}`);
				});
			});

			update_areas(geojsn($geodb, $areaselect));

			loaded = true;
		};
	}

	function select_callback(e) {
		// only work on first tab
		if (currentIndex != 1) return false;

		var d = $mapobject.queryRenderedFeatures(e.point, {
			layers: ["select_layer"],
		})[0].properties;

		var en = d.CTYUA20CD;
		var idx = $areaselect.indexOf(en);
		if (idx >= 0) {
			$areaselect.splice(idx, 1);
		} else {
			$areaselect.push(en);
		}

		/// List PAINT needs to be reset each time the list changes±!!!
		$mapobject.setPaintProperty("select_layer", "fill-color", [
			"match",
			["get", "CTYUA20CD"],
			["literal", ...$areaselect],
			"orange",
			"transparent", //'#206095'
		]);

		if ($areaselect.length > 4) {
			alert_notify =
				"You have selected too many areas. Please deselect some.";
		} else {
			alert_notify = false;
		}
	}

	function area_callback(e) {
		// only work on first tab

		console.log('area click',e, get(draw_type));
		if (currentIndex != 3 || $draw_type != undefined) return false;

		var d = $mapobject.queryRenderedFeatures(e.point, {
			layers: ["area_layer"],
		})[0].properties;

		var en = d.id;
		var idx = $individual.indexOf(en);
		if (idx >= 0) {
			$individual.splice(idx, 1);
		} else {
			$individual.push(en);
		}

		console.warn($individual);

		/// List PAINT needs to be reset each time the list changes±!!!
		$mapobject.setPaintProperty("area_layer", "fill-color", [
			"match",
			["get", "id"],
			["literal", ...$individual],
			"steelblue",
			"transparent",
		]);

		if ($select.length > 4) {
			alert_notify =
				"You have selected too many areas. Please deselect some.";
		} else {
			alert_notify = false;
		}
	}

	function mousemove_callback(src, level, hid) {
		return (e) => {
			if (currentIndex != level) return false;
			if (e.features.length > 0) {
				if (hoveredStateId[hid] !== null) {
					$mapobject.setFeatureState(
						{ source: src, id: hoveredStateId[hid] },
						{ hover: false }
					);
				}
				hoveredStateId[hid] = e.features[0].id;
				$mapobject.setFeatureState(
					{ source: src, id: hoveredStateId[hid] },
					{ hover: true }
				);
				// console.log(hoveredStateId);
			}
		};
	}

	function mouseleave_callback(src, level, hid) {
		return () => {
			if (currentIndex != level) return false;
			if (hoveredStateId[hid] !== null) {
				$mapobject.setFeatureState(
					{ source: src, id: hoveredStateId[hid] },
					{ hover: false }
				);
			}
			hoveredStateId[hid] = null;
		};
	}

	function update_areas(data) {
		if ($mapobject.getSource("areas")) {
			$mapobject.getSource("areas").setData(data);
			console.log("updated areas");
			return false;
		}

		// load centroids data into db
		$mapsource["areas"] = {
			type: "geojson",
			data: data,
			generateId: true, // for hilight only - not needed for selection
		};

		$mapobject.setPaintProperty("select_layer", "fill-opacity", 0.5);
		$mapobject.setPaintProperty("select_layer", "fill-color", [
			"match",
			["get", "CTYUA20CD"],
			["literal", ...$areaselect],
			"orange",
			"white",
		]);

		$maplayer = [
			{
				id: "area_layer",
				type: "fill",
				source: "areas",
				paint: {
					"fill-opacity": [
						"case",
						["boolean", ["feature-state", "hover"], false],
						0.4,
						0.9,
					],
					"fill-outline-color": [
						"case",
						["boolean", ["feature-state", "hover"], false],
						"cyan",
						"purple",
					],
					"fill-color": [
						"match",
						["get", "id"],
						["literal", ...$individual],
						"steelblue",
						"transparent",
					],
				},
			},
		];

		// 	$mapobject.on("click", "areas", console.log);

		// 	$mapobject.on("click",  function (e) {
		// 	var bbox = [[e.point.x - 5, e.point.y - 5], [e.point.x + 5, e.point.y + 5]];
		// 	var features = $mapobject.queryRenderedFeatures(bbox, { layers: ['areas'] });
		// 	console.error(features);
		// });

		// custom geometires do not have a layer id

		$mapfunctions = [
			{
				event: "click",
				layer: "area_layer",
				callback: area_callback,
			},
			{
				event: "mousemove",
				layer: "area_layer",
				callback: mousemove_callback("areas", 3, 1),
			},
			{
				event: "mouseleave",
				layer: "area_layer",
				callback: mouseleave_callback("areas", 3, 1),
			},
		];
		currentIndex = 3;
	}

	////////////////////////////
	//// Draw Functions ////////
	////////////////////////////

	import MapboxDraw from "@mapbox/mapbox-gl-draw";
	// import  './mapbox-gl-draw-geodesic.min.js';
	import DrawRectangle from "mapbox-gl-draw-rectangle-mode";
	import { GlyphCircleStrokeGlyph } from "carbon-icons-svelte";

	var polyselect=[];
	var draw;
	export async function init_draw() {
		let modes = MapboxDrawGeodesic.enable(MapboxDraw.modes);
		console.warn("draws", modes);

		draw = new MapboxDraw({
			displayControlsDefault: true,
			controls: {
				trash: false,
			},
			// defaultMode: 'draw_polygon',
			modes: Object.assign(MapboxDraw.modes, {
				draw_circle: modes.draw_circle,
				draw_polygon: modes.draw_polygon,
				draw_rectangle: DrawRectangle,
				static: modes.static,
				simple_select: modes.simple_select,
			}),
		});
		// mapobject.addControl(draw, 'top-left')

		$mapobject.on("draw.modechange", (event) => {
			console.log("modechange", event.mode);
		});

		["draw.create", "draw.update", "draw.delete"].forEach((event) => {
			$mapobject.on(event, change);
		});

		// draw_type.subscribe(update_draw)
	}

	function update_draw(newtype) {
		console.log("udraw", newtype);
		$draw_type = newtype;
		if (newtype === undefined) {
			try {
				$mapobject.removeControl(draw, "top-right");
				$mapobject.setPaintProperty($level, "fill-color", "#206095");
			} catch (e) {}
		} else {
			try {
				$mapobject.removeControl(draw, "top-right");
			} catch (e) {}
			$mapobject.addControl(draw, "top-right");
			draw.changeMode(newtype);
		}
	}

	function change(event) {
		const geojson = event.features[0];
      	console.log("update", event.action, geojson);

      if (MapboxDrawGeodesic.isCircle(geojson)) {
        const center = MapboxDrawGeodesic.getCircleCenter(geojson);
        const radius = MapboxDrawGeodesic.getCircleRadius(geojson) / 100; // must divide by 100 to get accurate results
        console.log("circle", "center", center, "radius", radius);

        // lets space points around the centre to create a polygon

        var numberOfPoints = 20;
        var theta = (2.0 * Math.PI) / numberOfPoints;

        geojson.geometry.coordinates[0] = [];

        for (var i = 1; i <= numberOfPoints; i++) {
          geojson.geometry.coordinates[0].push([
            radius * Math.cos(theta * i) + center[0],
            radius * Math.sin(theta * i) + center[1],
          ]);
        }
      }

      const coords = geojson.geometry.coordinates[0]
	
      
      var lat = coords.map((p) => p[1]);
      var lng = coords.map((p) => p[0]);

      var min_coords = [Math.min.apply(null, lng), Math.min.apply(null, lat)];
      var max_coords = [Math.max.apply(null, lng), Math.max.apply(null, lat)];

      const bboxosm = [min_coords, max_coords];
	}

	/// a function to transfer the temporary selection array to permanent.
	function store_selection() {
		console.log($individual);
		// click selector should be first! Revert to this
		document.querySelector(".bx--content-switcher-btn").click();
	}
</script>

<!-- 
/////////////////////
/////////////////////
/////////////////////
/////////////////////
/////////////////////
 -->
<main>
	<!-- <div style="left:0;position:absolute;margin-left=0;margin=1"> -->

	<div class="bx--grid">
		<div class="bx--row">
			<div class="bx--col-md-4" style="float:left;position:absolute;right:auto;,margin-top:10px; display:block;z-index=990;margin-left:auto;margin-top:auto">
				<DSPanel
					title=""
					movable="false"
					width="50vw"
					subtitle="______"
				>
					{#if !loaded}
						<ProgressBar slot="loading" helperText="Loading..." />
					{:else}

					{#if currentIndex}
						<ProgressIndicator spaceEqually>
							<ProgressStep
								on:click={debounce(1)}
								complete={1 <= currentIndex}
								current={currentIndex === 1}
								label="Select Explatory Areas"
								description="The progress indicator will listen for clicks on the steps"
							/>
							<ProgressStep
								on:click={debounce(2)}
								current={2 <= currentIndex}
								complete={2 < currentIndex}
								label="Pick an Area Type"
								description="The progress indicator will listen for clicks on the steps"
							/>
							<ProgressStep
								on:click={debounce(3)}
								current={ currentIndex === 3 }
								complete={ 3 < currentIndex}
								label="Draw your own Geometry."
								description="The progress indicator will listen for clicks on the steps"
							/>
							<ProgressStep
								on:click={debounce(4)}
								current={4 < currentIndex}
								complete={4 < currentIndex}
								label="View Data"
								description="The progress indicator will listen for clicks on the steps"
							/>
						</ProgressIndicator>

						<div style="margin: var(--cds-layout-02) 0">
							<!-- <Button
								kind="primary"
								on:click={() => {
									currentIndex = currentIndex + 1;
								}}
							>
								Set currentIndex to
								{currentIndex += 1}
							</Button> -->
						</div>

						<!-- <h3>Current index: {currentIndex}</h3> -->
					{/if}

					<br /><br /> <br /><br />

					{#if alert_notify}
						<div style="" class="blink">
							<InlineNotification
								caption=""
								iconDescription="describes the close button"
								subtitle={alert_notify}
								timeout={0}
								kind="warning"
								title=""
								hideCloseButton="true"
							/>
						</div>
						<br /><br />
					{/if}

					<!-- <p slot="s1"> -->
					{#if currentIndex == 1}
					<p>
						Drag or Zoom the map to navigate. Locate areas of
						interest and <b>select them by clicking on the map</b>.
						Once done, press the button below.
					</p>
						<br /><br />
						<Button
							size="field"
							kind="secondary"
							on:click={debounce(2)}
							disabled={alert_notify}>Next</Button
						>

											
				<!-- 
					///////////////////////
					// 	AREA TYPE    	 //
					///////////////////////

				 -->
					{:else if currentIndex == 2}
						<br /><br />

						<p>Groups Selected = <span id="nareas" />{$areaselect.length}</p>

						<br />

						<Tooltip
							direction="bottom"
							tabIndex={0}
							triggerText="SELECT THE TYPE OF AREA"
						>
							<p style="color:white">
								There are a number of different area types that
								can be selected. These are generally split based
								on poulation... --insert table here--
							</p>
							<div class="bx--tooltip__footer">
								<Link
									href="https://webarchive.nationalarchives.gov.uk/ukgwa/20160106210404/http://www.ons.gov.uk/ons/guide-method/geography/beginner-s-guide/census/index.html"
									>More information on can be found here.</Link
								>
								<!-- <Button size="small">
	Create
  </Button> -->
							</div>
						</Tooltip>

						<StructuredList selection flush>
							<!-- selected={$areatype}> -->
							<StructuredListHead>
								<StructuredListRow head>
									<StructuredListCell head
										>Code</StructuredListCell
									>
									<StructuredListCell head
										>Name</StructuredListCell
									>
									<StructuredListCell head
										>Description</StructuredListCell
									>
									<StructuredListCell head
										>{""}</StructuredListCell
									>
								</StructuredListRow>
							</StructuredListHead>
							<StructuredListBody>
								{#each areas as item}
									<StructuredListRow
										label
										for="row-{item}"
										on:click={set_areatype(item[1])}
									>
										<StructuredListCell>
											{item[0]}</StructuredListCell
										>
										<StructuredListCell>
											{item[1].replaceAll(
												"_",
												" "
											)}</StructuredListCell
										>
										<StructuredListCell>
											{item[2]} -
											<b>
												{$areaselect.length}-test items</b
											>
										</StructuredListCell>
										<StructuredListInput
											id="row-{item}"
											value={item[1]}
											title="row-{item}-title"
											name="row-{item}-name"
										/>
										<StructuredListCell>
											<CheckmarkFilled16
												class="bx--structured-list-svg"
												aria-label="select an option"
												title="select an option"
											/>
										</StructuredListCell>
									</StructuredListRow>
								{/each}
							</StructuredListBody>
						</StructuredList>
		
					<!-- {#if currentIndex == 2.5}
						LOADING
					{/if} -->

					
				<!-- 
					///////////////////////
					// 	DRAW	     	 //
					///////////////////////

				 -->


					{:else if currentIndex == 3}
						fdsafdsafdsafdsa

						<Toggle
							aria-label="Select / Deselect"
							defaultToggled
							bind:toggled
							id="add"
							labelText={toggled
								? "Select Mode"
								: "Deselect Mode"}
						/>

						<br />
						<p>
							Select your editing tool and outline an area. Once
							you are happy with the end result click the 'Store
							Selection' button.
						</p>

						<br />

						<ContentSwitcher>
							<Switch on:click={btn(update_draw, [undefined])}>
								<div
									style="display: flex; align-items: center;"
								>
									<Cursor_216 style="margin-right: 0.5rem;" />
									Click Tool
								</div>
							</Switch>
							<Switch
								on:click={btn(update_draw, ["draw_polygon"])}

							>
								<div
									style="display: flex; align-items: center;"
								>
									<LassoPolygon16
										style="margin-right: 0.5rem;"
									/>
									Draw Polygon
								</div>
							</Switch>
							<Switch on:click={btn(update_draw, ["draw_circle"])}>
								<div
									style="display: flex; align-items: center;"
								>
									<NewTab16 style="margin-right: 0.5rem;" />
									Radial Select
								</div>
							</Switch>
							<Switch
								on:click={btn(update_draw, ["draw_rectangle"])}
							>
								<div
									style="display: flex; align-items: center;"
								>
									<NewTab16 style="margin-right: 0.5rem;" />
									Bounding Box
								</div>
							</Switch>
						</ContentSwitcher>
						<br />
						<Button size="medium" on:click={store_selection}
							>Store Selection</Button
						>
						<!-- <Button size="medium" kind='tertiary'>Clear</Button> -->
						<Button size="medium" kind="secondary">Get Data</Button>
					{:else if currentIndex == 4}
						{#if $areaselect.length > 0}
							<p>
								You have selected {$areaselect.length} super areas.
								<br>
								{$areaselect}
							</p>
							{#if $individual.length}
							<br><br>
							<p>
								You have selected {$individual.length} areas with short ids:
								<br>

								{$individual}
							</p>
							{:else}
							No individual selected
							{/if}
						{:else}
						No Super Areas Selected. Please go back
						{/if}


					{/if}
					{/if}
				</DSPanel>
				<!-- </td><td> -->
			</div>
			
		</div>
	</div>
	<AreaMap width="100vw" height="70vh" />
</main>

<style lang="scss">
	:global(body) {
		margin: 0;
		padding: 0;
	}

	:global(.mapboxgl-map) {
		width: auto;
		height: 100%;
	}

	:global(main) {
		font-size-adjust: 0.1;
		font-size: 10px;
	}

	main {
		left: 0;
		padding: 1px max-width 90vw;
	}

	.blink {
		animation: blinker 4s linear infinite;
		position: relative;
		z-index: 0;
		display: inline;
		margin-left: 20%;
		width: 60%;
		height: auto;
		margin-top: 0;
		margin-bottom: 0;
	}

	@keyframes blinker {
		// 0% {opacity: 1;}
		60% {
			opacity: 1;
		}
		50% {
			opacity: 0.9;
			background-color: rgb(245, 244, 244);
		}
		40% {
			opacity: 1;
		}
	}
</style>
