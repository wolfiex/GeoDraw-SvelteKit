<script>
  // ONS CensusDraw Tilegen
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
  import DrawButtons from '$lib/draw/Toolbar/DrawButtons.svelte';
  import EditButtons from '$lib/draw/Toolbar/EditButtons.svelte';
  import ProgressButtons from '$lib/draw//Toolbar/ProgressButtons.svelte';
  // import InfoBox from './Toolbar/InfoBox.svelte';
  import PostcodeSearch from '$lib/draw//Toolbar/PostcodeSearch.svelte';
  import ItemAccordion from '$lib/draw//Toolbar/ItemAccordion.svelte';
  // import {encode, decode} from '../binary.js';
  let add_mode = true;
  import {get} from 'svelte/store';

  // import { page } from '$app/stores';
  // import { goto } from '$app/navigation';
  import '$lib/draw/css/mapbox-gl.css';
  let webgl_canvas;
  let width = '100%';
  let height = '100%';
  //   let pending = new Set([]);
  let error = false;
  let speak = false;

  // import { default as mapboxgl } from "./mapbox-gl.js";
  import {default as AreaMap} from '$lib/draw/AreaMap.svelte';
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
  } from '$lib/draw/mapstore.js';
  import {simplify_query} from '$lib/draw/MapDraw.js';
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
        tiles: [`${server}/{z}/{x}/{y}.pbf`],
      },
    };

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

    /// Read out area names

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
    /// end read out areas

    async function recolour() {
      const items = $selected[$selected.length - 1];

      console.warn('---recolour', ...items.oa);
      $mapobject.setPaintProperty('bounds', 'fill-color', [
        'match',
        ['get', 'oa'],
        ['literal', ...items.oa],
        'orange',
        'transparent',
      ]);
      var q = await simplify_query();
      if (q) {
        console.warn('---req  ', q);
        query.set(q);
        // update hash
        if (items.oa.size > 0) {
          items.oa = [...items.oa]; // we can't encode sets
          localStorage.setItem('draw_data', JSON.stringify(items));
          // window.location.hash = encode(items);
        }
      } else {
        console.warn('---no features');
        query.set({error: 'no features'});
      }
    }

    // console.clear();
    // console.log('cleared console from index.init()');

    $mapobject.on('load', () => {
      selected.subscribe(recolour);
      // if (window.location.hash.length > 2) {
      // var hash = window.location.hash.substring(1);
      // var q = decode(hash);
      if (localStorage.getItem('draw_data') || false) {
        var q = JSON.parse(localStorage.getItem('draw_data'));

        q.oa = new Set(q.oa);
        selected.set([q]);
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

<!--  -->
<!--  -->

<!--  -->
<!--  -->
<!-- on:coordinate_change={update_area} /> -->
<main class="w-screen min-h-screen flex flex-col">
 
  <drawheader>
    <DrawButtons />

   
    <EditButtons />

    <Button
      id='buildprofile'
      disabled={$query.hasOwnProperty('error')}
      on:click={() => {
        // + encode(get(query))
        localStorage.setItem('build_data', JSON.stringify(get(query)));
        goto('/build', {replaceState: false});
      }}
    >
      Build Profile
    </Button>
    <Button
      kind="warning"
      class="bx--btn bx--btn--secondary bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--bottom bx--tooltip--align-center bx--btn--sm icon trash"
     
      on:click={function clear() {
        selected.set([{oa: new Set(), lat: [], lng: []}]);
        query.set({error: false});
        localStorage.clear();
      }}
    >
      <span class="bx--assistive-text">Clear All</span>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24 "
        xmlns="http://www.w3.org/2000/svg"
      >
      <path fill="currentColor" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" />
      </svg></Button
    >
 
  </drawheader>

  {#if $draw_type === 'radius'}
  <div id="slider">
  <Slider
    ariaLabelInput="Radius Selection (km)"
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
</div>

  {/if}
  <div id="map">
    <AreaMap drawing_tools={true} />
  </div>
</main>



<style>
  :root {;
    --header-2-height:2.5em;
    --bar: #343a45;
    --header-1-height: clamp(2em, 5vh, 3em);
    /* --second-color: #ff7; */
  }

  #map{
    z-index: -1;
    position:absolute;
    display: block;
    width:100vw!important;
    height: 50vh!important;
    left:0;
    top:0;
    margin:0;
    padding:0;
    /* filter:invert(1); */
  }


  :global(.bx--btn, .bx--btn-set){
    height:var(--header-1-height)!important;
    display: inline-flex!important;
    min-height: 1em!important;
    max-height:  var(--header-2-height)!important;
    margin:auto;

  }

  :global(.bx--btn--disabled ){
    display:none!important;
  }
  :global(.icon) {
    border: 1px solid rgb(113, 113, 113);
    /* margin-left:-1.5px; */
    aspect-ratio: 1/1;
    height: var(--header-2-height)!important;
    width: var(--header-2-height) !important;
    bottom:0;
    margin:auto;
  }

  :global(drawheader) {
    left: 0;
    right: 0;
    margin-left: 0;
    margin-right: 0px;
    padding:0!important;
    padding-top:var(--header-1-height)!important;
    width: 100vw!important;
    /* height: var(--header-2-height)!important; */
    float:left !important;
    display:flex-block!important;
    width:100vw!important;
    justify-content: space-between;
    /* justify-content: center; */
    
    background-color: var(--bar);
    white-space: nowrap!important;
  }
 
  /* :global(.bx--col) {
    width: 100%;
    padding:0!important;
  }
  */

  :global(small) {
    font: revert;
    font-size: revert;
  }
  :global(.bx--btn--secondary) {
    background-color: var(--bar);
    filter: brightness(0.85);
  }

:global(.trash){background-color:red;
color:white;float:right;right:0;margin-left:auto;}

:global(#buildprofile){
  display:flex;
  justify-content: space-around;
  align-self: center;
  float:none!important;
 
  border-radius: 5px;
  /* height:calc(0.9*var(--header-2-height))!important; */
  margin:auto!important;
  /* padding:auto; */
}
#slider{
  position: absolute;
  top: calc(var(--header-1-height)*2);
  z-index: 9999;
  left:5px;
  backdrop-filter: blur(5px);
}
</style>
