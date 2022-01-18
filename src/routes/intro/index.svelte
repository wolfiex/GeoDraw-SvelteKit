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
	import {areatype,areaselect,areastore,geodb} from './store.js'
	import Loader from "../components/Loader.svelte";
	import { get } from "svelte/store";
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
	} from "carbon-components-svelte";

	import { default as DSPanel } from "../components/DSPanel.svelte";
	import { init_db, load_db, query_db,SQL , blob32,geojsn} from "../util_db.js";
	// import Header from '../ui/Header.svelte';

	import "../css/normalize.css";

	import Panel from "../components/Panel.svelte";
	import { loop_guard } from "svelte/internal";
	// import AreaMap ,{ draw_type } from ".s/AreaMap";

	let alert_notify = false;
	let loaded = false;
	let open = "s1";


	let areas = [
		"Output_Areas",
		"Middle_Layer_Super_Output_Areas",
		"Lower_Layer_Super_Output_Areas",
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
	let hoveredStateId = null;

	$mapfunctions = [
		{
			event: "click",
			layer: "select_layer",
			callback: function (e) {
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
					// alert_notify('stop')
					alert_notify =
						"You have selected too many areas. Please deselect some.";
				} else {
					alert_notify = false;
				}
			},
		},
		{
			event: "mousemove",
			layer: "select_layer",
			callback: (e) => {
				if (e.features.length > 0) {
					if (hoveredStateId !== null) {
						$mapobject.setFeatureState(
							{ source: "selector", id: hoveredStateId },
							{ hover: false }
						);
					}
					hoveredStateId = e.features[0].id;
					$mapobject.setFeatureState(
						{ source: "selector", id: hoveredStateId },
						{ hover: true }
					);
				}
			},
		},
		{
			event: "mouseleave",
			layer: "select_layer",
			callback: () => {
				if (hoveredStateId !== null) {
					$mapobject.setFeatureState(
						{ source: "selector", id: hoveredStateId },
						{ hover: false }
					);
				}
				hoveredStateId = null;
			},
		},
	];

	const titles = {
		s2: "2. Select an Area Type",
		s1: "1. Select Counties Areas",
		s3: "3. Draw Custom Geometry",
		s4: "4. Export Data",
	};

	function debounce(cd) {
		return () =>
			setTimeout(() => {
				open = cd;
			}, 300);
	}

	$: open,
		(async () => {
			if (!loaded) return 0;
			/// the changer function for each slide accordion
			console.log(open);
			switch (open) {
				case "s1":
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
									// '#20t6095'
								],
							},
						},
					];
					break;
				case "s2":
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
						alert_notify = 'Please select an area type!'
						return open = 's2'
					}
					loaded = false;




					var promises = $areaselect.map(async (en) => {
						// get each db. 
						console.log(en)
						if ($areastore[en] == undefined) $areastore[en] = await load_db(`${$areatype}/data/${en}.db`)
						
						console.log($areastore[en])
						query_db($areastore[en],'SELECT * FROM geography LIMIT 1; ')
						console.log($areastore[en].exec('SELECT COUNT() FROM geography;')[0].values[0]) //works
						
						return {id:en,filename:$areastore[en].filename}
					});

					$geodb = new SQL.Database();
					
					await Promise.all(promises).then((values) => {
					console.log(values);

					// Attach dbs
					values.forEach((v) => {
						console.log(v)
						$geodb.run(`ATTACH DATABASE '${v.filename}' AS ${v.id};`)
						
						//BEGIN; insert into geography select * from ${v.id}.geography;END; DETACH DATABASE ${v.id}`);
					});
					




					console.log('aaarrghh', $areaselect.map(d=>
						$areastore[d]), $areaselect.join(','))



					});

					var mygeo = geojsn($geodb, $areaselect);
					console.log(mygeo);
					
					$mapsource['areas']={
						type: "geojson",
						data: geojsn($geodb, $areaselect),
						// generateId: true,
					}

					$mapobject.setPaintProperty("select_layer", "fill-opacity", 0.5);
		

					$mapobject.addLayer(
						{
							id: "area_layer",
							type: "fill",
							source: "areas",
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
									"purple",
									"orange",
								],
								"fill-color": 
									// "match",
									// ["get", "CTYUA20CD"],
									// ["literal", ...$areaselect],
									// "orange",
									// "transparent",
									'#222'
								,
							},
						}
					)


					console.warn('source',$mapobject.getSource('areas'));
					console.warn('source',$mapobject.getSource('selector'));




					loaded = true;



					// case 's26888':
					// 	console.log('222');
					// 	var en = 'E06000004';
					// 	// areatype = 'Output_Areas';
					// 	const test = await load_db(`${areatype}/data/${en}.db`);

					// 	areastore[areatype + en] = test;
					// 	console.log(areastore);

					// 	console.log(test, 'dbbb');
					// 	const tables = `
					// 	SELECT name FROM sqlite_schema
					// 	WHERE type = 'table'
					// 	AND name NOT LIKE 'sqlite_%'
					// 	ORDER BY 1;`;
					// 	query_db(test, tables);
					// query_db(test,`SELECT * FROM name LIMIT 10 `)
					// var data = query_db(test,`SELECT * FROM geography LIMIT 10 `)

					// localStorage.setItem('testdb', JSON.stringify(test));

					// console.log(new Float32Array(data.$data[5]))

					break;
			}
		})().then(() => {});

	function postprocess(data = "") {
		// a function to run at the end of a selection
		switch (open) {
			case "s2":
				$areatype = data.target.parentElement.htmlFor;
				console.log($areatype, "selected");
				// debounce('s3')
				open = "s3";

				break;
		}
		// console.log('rrr',open)
		// open = 's'+(parseInt(open[1])+1)
		// console.log('rrree',open)
		// debounce(open)
	}

	onMount(init);
</script>

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

<main>
	<!-- <div style="left:0;position:absolute;margin-left=0;margin=1"> -->

	<div class="bx--grid">
		<div class="bx--row">
			<div class="bx--col-md-4" style="float:left;">
				<DSPanel
					title=""
					movable="true"
					width="35vw"
					itemtitles={titles}
					subtitle="Selecting Custom Areas"
					bind:loading={loaded}
					bind:open
				>
					<!-- {#if !loading}
				<ProgressBar slot='loading' helperText="Loading..." />
				{/if} -->
					<!-- <p slot="s1"> -->
					{#if open == 's1'}
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
					{/if}
					{#if open == 's3'}
					<!-- <p slot="s3">  -->
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
							on:click={undefined}
							disabled={alert_notify}
						/>
					<!-- </p> -->
					{/if}
					<!-- {#if open == 's4'}
					<p slot="s4">
						<b>Select a level</b>
					</p> -->

					<!-- {/if} -->
					{#if open == 's2'}
					<div
						class="design-system-component-panel"
						style="padding-right:1%!important;width:auto;margin:0;padding:2px;display:inline-block"
					>
						<br /><br />

						<p>Groups Selected = <span id="nareas" /></p>

						<br />

						<FormGroup legendText="">
							<Tooltip
								direction="bottom"
								tabIndex={0}
								triggerText="SELECT THE TYPE OF AREA"
							>
								<p style="color:white">
									There are a number of different area types
									that can be selected. These are generally
									split based on poulation... --insert table
									here--
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
							<RadioButtonGroup
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
						</FormGroup>
					</div>

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

	.blink{
		animation:blinker 4s linear infinite;
		position:relative;
		z-index:0;
		display:inline;
		margin-left:20%;
		width:60%;
		height:auto;
		margin-top:0;
		margin-bottom:0;
		
	}

	@keyframes blinker {
		// 0% {opacity: 1;}
		60% {opacity: 1}
		50% {opacity: 0.9; background-color: rgb(245, 244, 244);}
		40% {opacity: 1}
	}
</style>
