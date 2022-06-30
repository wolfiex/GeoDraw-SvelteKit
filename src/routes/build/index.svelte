<script context="module">
  const ptitle = 'Custom Drawn Areas';
</script>

<script>
  import '../app.css';
  import {onMount} from 'svelte';
  import {assets} from '$app/paths';

  // name dict for buttons
  // import { datasets } from "$lib/config";
  // import {datasets} from '$lib/table_select';

  import Titleblock from '$lib/layout/Titleblock.svelte';
  import Headline from '$lib/layout/partial/Headline.svelte';
  import Subhead from '$lib/layout/partial/Subhead.svelte';
  import Content from '$lib/layout/Content.svelte';
  import Icon from '$lib/ui/Icon.svelte';

  import {decode} from '../binary.js';

  let iframe;
  let compressed;
  let polygon;
  let data;


  import {default as datasets} from '../util/custom_profiles_tables.json';  
  // console.error(datasets)

  let dataset_keys = Object.keys(datasets);

  dataset_keys = dataset_keys.filter(
    (key) => !/UK\]| - | by |\[[^K]|WA\]/.test(datasets[key].name)
  ); // strip non k tables, welsh only, and bivariate tables

  // console.error(dataset_keys);

  // keys hilighted
  let selected_keys = ['NM_531_1']//['KS101EW']; //['KS106EW', 'KS102EW', 'KS404EW', 'KS405EW'];

  function send_data() {
    if (!iframe) return;
    // console.log(compressed);

    var tlist = selected_keys.map((key) => datasets[key]); //get obj
    var alist = Object.values(compressed).flat().join(';'); // flatten dict

    var senddata = {
      tables: tlist,
      areas: alist,
      compressed: compressed,
      polygon: polygon,
    };

    // console.log('tlist-sd', tlist,tlist.length);

    iframe.contentWindow.postMessage(
      JSON.stringify(senddata),
      window.location.origin
    );

    setTimeout(() => {
      resizeIframe(iframe)//this
      console.log('resize iframe')
    }, 800);

  }

  onMount(() => {
    data = decode(window.location.hash.slice(1));
    // console.log('tables',data)

    compressed = {
      oa: data.properties.oa,
      lsoa: data.properties.lsoa,
      msoa: data.properties.msoa,
    };

    polygon = data;

    iframe.src = window.location.origin + '/tables';

    send_data();
  });

  $: send_data(compressed);


  function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 20 + 'px';
  }

</script>

<svelte:head>
  <title>Embeddable profile demo</title>
  <meta property="og:title" content="Embeddable profile demo" />
  <meta
    property="og:description"
    content="This is a description of the page."
  />
  <meta name="description" content="This is a description of the page." />
</svelte:head>

<Titleblock
  mode="page"
  breadcrumb={[{label: 'Home', url: `${assets}/`}, {label: ptitle}]}
>
  <Headline>{ptitle}</Headline>
  <Subhead>
    <div class="margin-top--2">
      {#each dataset_keys as key}
        <button
          class="btn"
          class:btn-selected={selected_keys.includes(key)}
          on:click={() => {
            selected_keys.includes(key)
              ? (selected_keys = selected_keys.filter((d) => d != key))
              : (selected_keys = selected_keys.concat([key]));
            send_data();
          }}
        >
          {datasets[key]['Table name']}
          {#if selected_keys.includes(key)}<Icon name="close" />{/if}
        </button>
      {/each}
    </div>
  </Subhead>
</Titleblock>

<Content>
  <iframe
    id="ifr"
    bind:this={iframe}
    on:load={() => setTimeout(send_data, 800)}
    frameBorder=".8"
  />
  <div id="profile" class="margin-top--3" />

  <!-- {#if query}
  <p style:margin-bottom={0}>Embed code</p>
  
  <textarea>{makeEmbed(query)}</textarea>
  {/if} -->
</Content>

<style>
  iframe {
    width: 100%;
    height: 100vh;
  }

  #profile {
    width: 100%;
    border: 1px solid #aaa;
  }
  textarea {
    width: 100%;
    height: 100px;
  }
  .select {
    font-size: 1rem;
    padding: 6px 0;
  }
  .btn {
    margin: 4px 4px 0 0;
    border: 2px solid black;
    border-radius: 3px;
    font-size: 0.9rem;
    padding: 3px 6px;
    vertical-align: baseline;
  }
  .btn-selected {
    background-color: black;
    color: white;
  }
</style>
