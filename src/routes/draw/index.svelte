<script>
  // import './css/style.css';
  import 'carbon-components-svelte/css/g10.css';
  import {
    Grid,
    Row,
    Column,
    Breadcrumb,
    BreadcrumbItem,
  } from 'carbon-components-svelte';
  import {Slider} from 'carbon-components-svelte';
  import DrawButtons from './Toolbar/DrawButtons.svelte';
  import EditButtons from './Toolbar/EditButtons.svelte';
  import ProgressButtons from './Toolbar/ProgressButtons.svelte';
  import InfoBox from './Toolbar/InfoBox.svelte';

  let add_mode = true;

  import './css/mapbox-gl.css';
  let webgl_canvas;
  export let width = '100%';
  export let height = '100%';
//   let pending = new Set([]);
  let coordinates;
  let speak = false;
  // import { default as mapboxgl } from "./mapbox-gl.js";
  import {default as AreaMap} from './AreaMap.svelte';
  import mapboxgl, {Popup} from 'mapbox-gl';
  import {onMount} from 'svelte';
  import {writable, get} from 'svelte/store';
  import {csv} from 'd3-fetch';
  import {
    // select,
    mapsource,
    maplayer,
    mapfunctions,
    mapobject,
    mapstyle,
    minzoom,
    maxzoom,
    location,
    maxbounds,
    draw_type,
radiusInKm,
selected,
    // level,
    // zoomed,

  } from './mapstore.js';

  async function init() {

    console.clear();
    console.warn(webgl_canvas);

    console.log('---' + window.location.host.split(':')[0] + '---');
    // map setup and vars
    $mapsource = {
      area: {
        type: 'vector',
        tiles: [
          // `${window.location.origin}/cors_endpoint/{z}/{x}/{y}.pbf`
          `http://localhost:7113/{z}/{x}/{y}.pbf`,
          // `${window.location.origin}/LSOA/{z}/{x}/{y}.pbf`,
          // `https://wolfiex.github.io/ONS_Maptiles/LSOA/{z}/{x}/{y}.pbf`,
        ],
      },
    };

    console.warn('mapsource', $mapsource);

    $maplayer = [
      {
        id: 'bounds',
        source: 'area',
        'source-layer': 'geodraw',
        // tileSize: 256,
        type: 'fill',
        paint: {
          'fill-color': 'transparent',
          'fill-opacity': 0.7,
          'fill-outline-color': 'steelblue',
        },
      },
      {
        id: 'centroids',
        source: 'area',
        'source-layer': 'centroids',
        type:'circle',//background?/
        paint: {
      'circle-radius': .5,
      'circle-color': 'red',
      'circle-opacity': 0.5,
    },
      },
    ];
    if ('SpeechSynthesisUtterance' in window) {
      var msg = new SpeechSynthesisUtterance();
      console.error(
        'speech tools enabled - "context menu". Use two finger click on mac trackpad to trigger'
      );
    }
    $mapfunctions = [
      {
        event: 'contextmenu',
        layer: 'bounds',
        callback: (e) => {
          if (speak) {
            console.log(e.features[0].properties);
            var props = e.features[0].properties;
            msg.text = props.name;
            if (!window.speechSynthesis.speaking) {
              window.speechSynthesis.speak(msg);
            }
          }
        },
      },
    ];

    
	function recolour() {
        const items = $selected[$selected.length-1]
		console.warn("---recolour", ...items.oa);
		$mapobject.setPaintProperty("bounds", "fill-color", [
			"match",
			["get", 'oa'],
			["literal", ...items.oa],
			"orange",
			// [
			// 	"match",
			// 	["get", areatype],
			// 	["literal", ...$selected],
			// 	"green",
			// 	"transparent",
			// ],
            "transparent",
		]);
	}

    selected.subscribe(recolour);



  } //endinit

  

  onMount(init);
</script>
<!-- on:coordinate_change={update_area} /> -->
<main class="w-screen min-h-screen flex flex-col">
  <div id="map">
    <AreaMap drawing_tools={true} />
  </div>
  <header>
    <Grid>
      <Row id="head1">
        <Column
          ><img
            style="margin-left:10px;margin-top:4px"
            class="logo"
            src="https://cdn.ons.gov.uk/assets/images/ons-logo/v2/ons-logo.svg"
            alt="Office for National Statistics logo - Homepage"
          />
        </Column>
        <Column style="float:right;margin-right:2px">
          <Breadcrumb>
            <BreadcrumbItem href="/draw">Draw Area</BreadcrumbItem>
            <BreadcrumbItem href="/">Save + Load Area</BreadcrumbItem>
            <BreadcrumbItem href="/">Build Profile</BreadcrumbItem>
          </Breadcrumb>
        </Column>
      </Row>
      <Row
        style="background-color:#13518d;height:calc(.085*var(--header-1-height));margin-bottom:0px;"
      />
      <Row id="head2">
        <Column>
          <DrawButtons />
        </Column><Column>
          <EditButtons />
        </Column><Column>
          <ProgressButtons />
        </Column>
      </Row>
    </Grid>

    <InfoBox>
      <Slider
        ariaLabelInput="Radius Selection (km)"
        id="slider"
        labelText="Radius Selection (km)"
        max={30}
        min={0.2}
        step={0.2}
        stepMuliplier={4}
        value={5}
        on:change={function(value) {
          console.log('slider value', value.detail);
          $radiusInKm = value.detail;
        }}
      />
    </InfoBox>
  </header>
</main>

<style>
  :root {
    --header-2-height: clamp(2rem, 4vh, 60px);
    --header-1-height: clamp(1rem, 5vh, 40px);
    --bar: #343a45;
    /* --second-color: #ff7; */
  }
  #toggle {
    height: calc(var(--header-2-height) / 2) !important;
  }

  :global(.icon) {
    border: 1px solid rgb(113, 113, 113);
    /* margin-left:-1.5px; */
    aspect-ratio: 1/1;
    height: auto;
    width: var(--header-2-height) !important;
  }
  header {
    /* position:absolute; */
    display: block;
    position: fixed;
    width: 100vw;
    margin: 0 !important;
  }
  :global(.bx--grid) {
    left: 0;
    right: 0;
    margin-left: 0;
    margin-right: 0px;
    padding-left: 0px;
    padding-right: 0px;
    width: 100vw;
  }
  :global(#head1) {
    width: 100vw;
    height: var(--header-1-height) !important;
    background-color: whitesmoke;
    margin: 0;
  }
  :global(#head2) {
    left: 0;
    right: 0;
    padding-left: 10px;
    width: 100%;
    /* height: var(--header-2-height) !important; */
    background-color: var(--bar);
    /* margin: 0; */
    margin-bottom: 1.2rem;
  }
  .logo {
    height: calc(var(--header-1-height) * 0.7) !important;
    width: auto;
  }

  :global(.bx--col) {
    /* margin:auto; */
    padding: 0 !important;
    display: flex;
    float: right;
    right: 0;
    margin: auto;
    flex-grow: 3 !important;
    text-align: right;
    justify-content: space-between;
  }

  :global(.bx--btn--secondary) {
    background-color: var(--bar);
    filter: brightness(0.85);
  }
</style>
