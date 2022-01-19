<script>
	import { onMount } from "svelte";
	import { default as AreaMap } from "./AreaMap.svelte";
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
		store1,
		store2,
	} from "./mapstore.js";
	import {
		areatype,
		areaselect,
		areastore,
		geodb,
		individual,
	} from "./store.js";
	// import Loader from "../components/Loader.svelte";
	// import { get } from "svelte/store";
	import "carbon-components-svelte/css/white.css";
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
  import CheckmarkFilled16 from "../../../node_modules/carbon-icons-svelte/lib/CheckmarkFilled16";

	import { default as DSPanel } from "../components/DSPanel.svelte";
	import {
		init_db,
		load_db,
		query_db,
		SQL,
		blob32,
		geojsn,
	} from "../util_db.js";
	// import Header from '../ui/Header.svelte';

	import "../css/normalize.css";

	// import Panel from "../components/Panel.svelte";
	// import { loop_guard } from "svelte/internal";
	// import AreaMap ,{ draw_type } from ".s/AreaMap";

	let alert_notify = false;
	let loaded = false;
	let open = "s1";
	let currentIndex = 1;

	let areas = [
		['OA',"Output_Areas", 'The largest of the selection. There are ....'],
		['MSOA',"Middle_Layer_Super_Output_Areas",'These ... '],
		['LSOA',"Lower_Layer_Super_Output_Areas",'Something here'],
	];

	async function init() {
		loaded = true;
		$draw_type = "simple_select";
		await init_db();
		console.log("started");
	}

	// initial map data
	$mapsource = {
		selector: {
			type: "geojson",
			data: "geojson/Counties_and_Unitary_Authorities_(December_2020)_UK_BGC.geojson",
			generateId: true,
		},
	};

	$maplayer = [];

	//add function variables here
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
			callback: mousemove_callback("selector", "s1", 0),
		},
		{
			event: "mouseleave",
			layer: "select_layer",
			callback: mouseleave_callback("selector", "s1", 0),
		},
	];


	function debounce(cd,ci=undefined) {
		return () =>
			setTimeout(() => {
				open = cd;
				if (ci) currentIndex = ci;
			}, 300);
	}

	$: open,
		(async () => {
			if (!loaded) return 0;
			/// the changer function for each slide accordion
			console.log('∆',open);
			switch (open) {
				case "s1":
					currentIndex = 1
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
									"green",
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
				case "s2":
					currentIndex = 2
					var nlen = $areaselect.length;

					// check we have selected something
					if (nlen < 1) {
						alert_notify = "No Areas Selected";
						open = "s1";
					}

					// document.getElementById("nareas").innerText = nlen;

					console.log($areaselect);
					break;

				case "s3":
					// alert($areatype,'3', $areaselect);
					if (!areatype) {
						alert_notify = "Please select an area type!";
						return (open = "s2");
					}
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

					await Promise.all(promises).then((values) => {
						console.log(values);

						// Attach dbs
						values.forEach((v) => {
							$geodb.run(
								`ATTACH DATABASE '${v.filename}' AS ${v.id};`
							);
							//BEGIN; insert into geography select * from ${v.id}.geography;END; DETACH DATABASE ${v.id}`);
						});
					});

					update_areas(geojsn($geodb, $areaselect));

					loaded = true;

					break;
			}
		})().then(() => {});


	

	onMount(init);

	////////////////////////////////
	//////// Functions /////////////
	////////////////////////////////
	function set_areatype(item) {
		return ()=>{
		$areatype = item
		console.log($areatype, "selected");
		open = "s3";
		currentIndex = 3
		}
		
	}


	function select_callback(e) {
		// only work on first tab
		if (open != "s1") return false;

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

		console.log(e);
		if (open != "s4") return false;

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
			if (open != level) return false;
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
				console.log(hoveredStateId);
			}
		};
	}

	function mouseleave_callback(src, level, hid) {
		return () => {
			if (open != level) return false;
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
			generateId: true,// for hilight only - not needed for selection
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
				callback: mousemove_callback("areas", "s4", 1),
			},
			{
				event: "mouseleave",
				layer: "area_layer",
				callback: mouseleave_callback("areas", "s4", 1),
			},
		];
		open = "s4";
		console.error(open);
	}
</script>

<!-- 
	<!-- 
		<!-- 
			<!-- 
				<!--  -->
--> --> --> -->
<main>
	<!-- <div style="left:0;position:absolute;margin-left=0;margin=1"> -->

	<div class="bx--grid">
		<div class="bx--row">
			<div class="bx--col-md-4" style="float:left;">
				<DSPanel
					title=""
					movable=false
					width="70vw"
					subtitle="______"
					bind:loading={loaded}
				>
					{#if !loaded}
						<ProgressBar slot="loading" helperText="Loading..." />
					{/if}

					{#if currentIndex}
						<ProgressIndicator spaceEqually>
							<ProgressStep
								on:click={debounce('s1')}
								complete={1 < currentIndex}
								label="Select Explatory Areas"
								description="The progress indicator will listen for clicks on the steps"
							/>
							<ProgressStep
								on:click={debounce('s2')}
								current={2 < currentIndex}
								complete={2 < currentIndex}
								label="Pick an Area Type"
								description="The progress indicator will listen for clicks on the steps"
							/>
							<ProgressStep
								on:click={debounce('s3')}
								current={3 < currentIndex}
								complete={3 < currentIndex}
								label="Draw your own Geometry."
								description="The progress indicator will listen for clicks on the steps"
							/>
							<ProgressStep
								current={4 < currentIndex}
								complete={4 < currentIndex}
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

						<h3>Current index: {currentIndex} open = {open}</h3>
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
					{#if open == "s1"}
						Drag or Zoom the map to navigate. Locate areas of
						interest and <b>select them by clicking on the map</b>.
						Once done, press the button below.
						<br /><br />
						<Button
							size="field"
							kind="secondary"
							on:click={debounce("s2")}
							disabled={alert_notify}>Next</Button
						>
						<!-- </p> -->
					
					{:else if open == "s2"}
						<!-- <div
							class="design-system-component-panel"
							style="padding-right:1%!important;width:auto;margin:0;padding:2px;display:inline-block"
						> -->
						<br /><br />

						<p>Groups Selected = <span id="nareas" /></p>

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

						<!-- <RadioButtonGroup
									defaultSelected={areas[0]}
									legend="Group Legend"
									name="radio-button-group"
									valueSelected={areas[0]}
									orientation="vertical"
									on:click={postprocess}
								>
									{#each areas as ar}
										<RadioButton
											id={ar}
											labelText={ar.replaceAll("_", " ")}
											value={ar}
										/>
									{/each}
								</RadioButtonGroup>
							</FormGroup> -->

						<StructuredList selection flush >
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
					{/if}
					{#if open == "s3"}
						LOADING
					{/if}
					{#if open == "s4"}
						fdsafdsafdsafdsa

						<Toggle
							aria-label="Select / Deselect"
							defaultToggled
							id="add"
							labelText="Add Areas"
						/>

						<Dropdown
							ariaLabel="Drawing Dropdown"
							id="drawing_dropdown_ele"
							items={[
								{
									id: "poly",
									text: "Draw Polygon",
									active: true,
								},
								{ id: "box", text: "Select Rectangle" },
								{ id: "circle", text: "Select Radius" },
								{ id: "click", text: "Mouse Select/Deselect" },
								{ id: "clear", text: "Clear All" },
							]}
							label="Please Select a Tool"
							titleText="Select Drawing Tool"
							light="true"
							disabled={alert_notify}
						/>
					{/if}
				</DSPanel>
				<!-- </td><td> -->
			</div>

			<AreaMap width="calc(60vw*.85)" height="70vh" />
		</div>
		<!-- </div> -->
	</div>

	<!-- </span> -->
	<!-- </BasePage> -->
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

	.design-system-component-panel {
		background-color: rgb(255, 255, 255);
		border-radius: 0.4rem;
		padding: 0.5rem;
		margin-bottom: 1rem;
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
