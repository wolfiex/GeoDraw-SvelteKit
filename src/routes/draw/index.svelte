<script>
  // ONS CensusDraw Tilegen
  // import './css/style.css';
  import 'carbon-components-svelte/css/g10.css';
  import {
    Grid,
    Row,
    Button,
    Column,
    Breadcrumb,
    BreadcrumbItem,
    ToastNotification,
  } from 'carbon-components-svelte';
  import {Slider} from 'carbon-components-svelte';
  import DrawButtons from './Toolbar/DrawButtons.svelte';
  import EditButtons from './Toolbar/EditButtons.svelte';
  import ProgressButtons from './Toolbar/ProgressButtons.svelte';
  import InfoBox from './Toolbar/InfoBox.svelte';
  import PostcodeSearch from './Toolbar/PostcodeSearch.svelte';
  import ItemAccordion from './Toolbar/ItemAccordion.svelte';
  import {encode, decode} from '../binary.js';
  let add_mode = true;
  import {get} from 'svelte/store';

  // import { page } from '$app/stores';
  // import { goto } from '$app/navigation';
  import './css/mapbox-gl.css';
  let webgl_canvas;
  export let width = '100%';
  export let height = '100%';
  //   let pending = new Set([]);
  let error = false;
  let speak = false;

  // import { default as mapboxgl } from "./mapbox-gl.js";
  import {default as AreaMap} from './AreaMap.svelte';
  // import mapboxgl, {Popup} from 'mapbox-gl';
  import {onMount} from 'svelte';
  // import {writable, get} from 'svelte/store';
  // import {csv} from 'd3-fetch';
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
    draw_enabled,
    radiusInKm,
    selected,
    query,
    server,
    // level,
    // zoomed,
  } from './mapstore.js';
  import {simplify_query} from './MapDraw.js';
  import {BindVertexArrayOES} from 'maplibre-gl';
  import {goto} from '$app/navigation';
  // import { ZoomHistory } from 'maplibre-gl';

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
          `${server}/{z}/{x}/{y}.pbf`,
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
        type: 'circle', //background?/
        paint: {
          'circle-radius': 0.6,
          'circle-color': 'red',

          'circle-opacity': 0.8,
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

    async function recolour() {
      const items = $selected[$selected.length - 1];

      console.warn('---recolour', ...items.oa);
      $mapobject.setPaintProperty('bounds', 'fill-color', [
        'match',
        ['get', 'oa'],
        ['literal', ...items.oa],
        'orange',
        // [
        // 	"match",
        // 	["get", areatype],
        // 	["literal", ...$selected],
        // 	"green",
        // 	"transparent",
        // ],
        'transparent',
      ]);
      var q = await simplify_query();
      if (q) {
        console.warn('---req  ', q);
        query.set(q); //.then(d=>d.json()).then(query.set); // this is a promise
        // console.log('---bin--', get(query), encode(get(query)));

        // update hash

        if (items.oa.size > 0) {
          items.oa = [...items.oa]; // we can't encode sets
          window.location.hash = encode(items);
          console.warn('--hashsave', items);
        }
      } else {
        console.warn('---no features');
        query.set({error: 'no features'});
      }
    }

    // console.clear();
    console.log('cleared console from index.init()');
    // if we have info in the hash string

    // wait until the data has loaded
    $mapobject.on('load', () => {
      selected.subscribe(recolour);
      // check_existing()
      // $mapobject.on('moveend', check_existing);

      if (window.location.hash.length > 2) {
        var hash = window.location.hash.substring(1);
        var q = decode(hash);
        q.oa = new Set(q.oa);
        selected.set([q]);
        // $mapobject.fitBounds([q.lng[0], q.lat[0], q.lng[1], q.lat[1]],padding: {top: 10, bottom:25, left: 15, right: 5});
        console.warn('--hashload', q);
      } else {
        // move mapobject to location
        $mapobject.fitBounds(location.bounds, {
          padding: 20,
          linear: true,
        });
      }
    });
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
        <div>
          <img
            style="margin-left:10px;"
            class="logo"
            src="https://cdn.ons.gov.uk/assets/images/ons-logo/v2/ons-logo.svg"
            alt="Office for National Statistics logo - Homepage"
          />
        </div>
        <!-- <Column style="float:right;margin-right:2px"> -->
        <div
          style="right:0;float:right;top:0;min-height:auto;position:absolute"
        >
          <Button
            disabled={$query.hasOwnProperty("error")}
            on:click={() => {
              goto('/build#' + encode(get(query)), {replaceState: false});
            }}
          >
            Build Profile
          </Button>
          <Button
            kind="secondary"
            on:click={function clear() {
              selected.set([{oa: new Set(), lat: [], lng: []}]);
              query.set({error: false});
              window.location.hash = 'null';
            }}>Clear Existing</Button
          >
        </div>
        <!-- <Breadcrumb>
            <BreadcrumbItem href="/draw">Draw Area</BreadcrumbItem>
            <BreadcrumbItem href="/" >Save + Load Area</BreadcrumbItem>
            <BreadcrumbItem href="/">Build Profile</BreadcrumbItem>
          </Breadcrumb> -->
        <!-- </Column> -->
      </Row>
      <Row
        style="background-color:#13518d;height:calc(.085*var(--header-1-height));margin-bottom:0px;"
      />

      <Row id="head2">
        <!-- <Column></Column> -->
        <Column>
          <DrawButtons />
          <EditButtons />
          
          <!-- </Column><Column> -->
          <ProgressButtons />
        </Column>
        
      </Row>
      
    </Grid>

    <InfoBox open={$selected.length < 2}>
      {#if $draw_enabled}
        <ToastNotification
          style="width:100%"
          hideCloseButton
          kind="warning"
          title="Zoom in to begin drawing. "
          subtitle="The map needs to be at least on zoom level 9 to begin drawing. "
          caption=""
        />
      {:else if $draw_type === 'radius'}
        <ItemAccordion title="Draw Area" subtitle="Distance Selection Tool">
          <Slider
            ariaLabelInput="Radius Selection (km)"
            id="slider"
            labelText="Radius Selection (km)"
            max={30}
            min={0.2}
            step={0.2}
            stepMuliplier={4}
            value={5}
            on:change={function (value) {
              console.log('slider value', value.detail);
              $radiusInKm = value.detail;
            }}
          />

          <p>
            Move the slider below to select the radius you are interested in,
            and then click to select an area.
          </p>
          <br />
        </ItemAccordion>
      {:else if $draw_type === 'click'}
        <ItemAccordion title="Draw Area" subtitle="Click Selection">
          <p>Click on any areas you are interested in.</p>
        </ItemAccordion>
      {:else if $draw_type === 'poly'}
        <ItemAccordion title="Draw Area" subtitle="Polygon Selection">
          <p>
            Click on each corner of the shape you want to build, and then back
            onto the first vertex to select.
          </p>
        </ItemAccordion>
      {/if}

      {#await $query then value}
        {#if value.error != null}
          <ToastNotification
            style="width:100%"
            hideCloseButton
            kind="error"
            subtitle={value.error_title}
            caption={value.error}
          />
        {:else if value.oa}
          <ItemAccordion title="" subtitle="Compressed Selection">
            <small>
              <b> MSOA: </b> <span>{value.properties.msoa.length}</span> <br />
              <b> LSOA: </b> <span>{value.properties.lsoa.length}</span> <br />
              <b> OA: </b> <span>{value.properties.oa.length}</span> <br />
              parent tile: {value.properties.tile}; # original output areas {value
                .properties.original}
            </small>
          </ItemAccordion>
        {/if}
      {/await}
    </InfoBox>
  </header>
</main>

<style>
  :root {
    --header-2-height: clamp(2rem, 4vh, 60px);
    --header-1-height: clamp(3rem, 5vh, 40px);
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
    display: inline-block;
    height: var(--header-1-height) !important;
    background-color: whitesmoke;
    margin: 0;
  }
  :global(#head2) {
    left: 0;
    right: 0;
    margin-left: 15px;
    margin-right: 15px;
    padding-left: 0px;
    padding-right: 30px;
    width: 100%;
    /* height: var(--header-2-height) !important; */
    background-color: var(--bar);
    /* margin: 0; */
    margin-bottom: 1.2rem;
  }
  .logo {
    height: calc(var(--header-1-height) * 0.9) !important;
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

  :global(small) {
    font: revert;
    font-size: revert;
  }
  :global(.bx--btn--secondary) {
    background-color: var(--bar);
    filter: brightness(0.85);
  }

  :global(header) {
    height: 100px;
  }
</style>
