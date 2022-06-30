
<script>
  import LibLoader from '../LibLoader.svelte';
  // reducing svelte bundle size by using third party loaders for scripts...

  import '../app.css';
  import {onMount} from 'svelte';
  import Cards from '$lib/layout/Cards.svelte';
  import Card from '$lib/layout/partial/Card.svelte';
  import BarChart from '../tables/BarChart.svelte';
  import MapAreas from '../tables/MapAreas.svelte';
  import {default as datasets} from '../util/custom_profiles_tables.json';
  import {decode} from '../binary.js';

  let areaname = '';
  var newdata;
  var geojson;
  let tabs;
  export let regions = ['CustomArea', 'England and Wales'];

  const items = (object) =>
    Object.keys(object).map((key) => [key, object[key]]);

  //////////

  onMount(() => {
    newdata = decode(window.location.hash.slice(1));
    if (newdata.coordinates) geojson = JSON.stringify({"type":"Feature","geometry":{"type":"Polygon","coordinates":newdata.coordinates}})


    areaname = newdata.name;

    tabs = newdata.data.map((table) => {
      const ref = datasets[table.nid];
      var dummy = [];
      const stop = table.did.length;
      let counter = 0;
      let i = 0;

      for (const element of table.data) {
        if (counter >= stop) {
          (counter = 0), i++;
        }
        dummy.push({
          z: regions[i],
          pc: element / 10000,
          column: ref['Cell name'][table.did[counter++]],
        });
      }
      return {name: ref['Table name'], data: dummy};
    });

    console.log(tabs);
  });

  $: console.log('decoded', newdata);
  $: console.log('read', tabs);
  // $: console.log('geo', geojson);
</script>

<h1>{areaname}</h1>
<Cards>
  {#if newdata}
    {#if geojson}
      <Card title={'Area map'}>
        <MapAreas minimap={geojson}/>
      </Card>
    {/if}

    {#if newdata.compressed}
      <Card title={'Selected Areas'}>
        The area codes represented by this profile are as follows:
        <br /><br />
        {#each items(newdata.compressed) as item}
          <h4 style="display:inline"><b>{item[0].toUpperCase()}</b>:</h4>
          <codes>{item[1].join(', ')}</codes>
          <br /><br />
        {/each}
      </Card>
    {/if}


      {#each tabs as tab}
        <Card title={tab.name}>
          <BarChart xKey="pc" yKey="column" zKey="z" data={tab.data} />
        </Card>
      {/each}
   
  {/if}
  <br />
</Cards>

<!-- 
{#await get_data(newdata) then tables}




{/await} -->

<!-- {/if} -->
<style>
  h1 {
    font-size: 1.8rem;
    margin: 0 0 -12px 0;
    font-weight: bold;
  }
  .footnote {
    margin-bottom: -20px;
  }

  codes {
    inline-size: 150px;
    overflow-wrap: break-word;
  }

  b {
    font-weight: bold;
  }

  :global(#bset > *) {
    width: 100%;
    margin: 4px;

    padding: auto;
    left: auto;
    right: auto;
    display: inline-flex;
    position: flex;
  }

  :global(span.bx--toggle__switch) {
    display: block;
    margin: auto !important;
  }
  :global(span.radio) {
    display: block;
    vertical-align: middle;
    top: -0;
    float: end;
    margin: 0.05em;
    padding: 5px;
  }
</style>
