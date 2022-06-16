<LibLoader url="https://cdn.jsdelivr.net/npm/danfojs@1.1.0/lib/bundle.min.js" />


<script>
  import LibLoader from '../LibLoader.svelte'
// reducing svelte bundle size by using third party loaders for scripts... 

  
  import '../app.css';
  // import {page} from '$app/stores';
  import {onMount} from 'svelte';

  // import {assets} from '$app/paths';
  import Cards from '$lib/layout/Cards.svelte';
  import Card from '$lib/layout/partial/Card.svelte';
  // import MapStatic from '$lib/chart/MapStatic.svelte';
  // import BarChart from '$lib/chart/BarChart.svelte';
  // import ProfileChart from '$lib/chart/ProfileChart.svelte';
  //import * as dfd from '';//'danfojs';
  
  import BarChart from './BarChart.svelte';
  import MapAreas from './MapAreas.svelte';

  const name = 'Custom Area Tables';

  let cache = {};
  let areas = '';
  var newdata = {tables: []};
  var coordinates = [];
  var compressed = [];

  const items = (object) =>
    Object.keys(object).map((key) => [key, object[key]]);

  function new_event(event) {
    // if (event.origin !== "http://ons.visual")
    //   return;
    var data = JSON.parse(event.data);
    // console.log('data-tb', data);

    // if we are using the same areas, we can cache the tables
    if (areas != data.areas) {
      areas = data.areas;
      coordinates = JSON.stringify(data.polygon);
      compressed = data.compressed;
      cache = {};
    }

    newdata = data;
  }


  async function get_data(data) {
    var tbls = data.tables.map(async function (table) {

      if (table.code in cache) {
        return cache[table.code];
      } else {
        return await dfd
          .readCSV(
            `${table.download}?date=latest&geography=MAKE|MyCustomArea|${areas},K04000001&rural_urban=0&measures=20100&select=geography_name,cell_name,obs_value`
          )
          .then((d) => d.setIndex({column: 'geography'}))
          .then((de) => {
            var mappings = {};
            var cols = de.columns.filter((d) => d.includes(':'));
            cols.forEach((d, i) => {
              mappings[d] = /:(.+);/.exec(d)[1];
            });
            return de
              .loc({rows: de.index.filter((d) => d), columns: cols})
              .rename(mappings, {inplace: false});
          })
          .then((df) => {
            var cols = df.$columns.filter(
              (d) =>
                !(
                  d.includes('count') ||
                  d.includes('All usual') ||
                  (d.match(/\;/g) || []).length === 1 ||
                  d.includes('sum')
                )
            );

            df = df.loc({columns: cols});
            var pc = df.div(df.sum(), {axis: 0});
            var lists = [];
            dfd.toJSON(pc, {format: 'columns'}).forEach((dict, i) => {
              for (var key in dict) {
                lists.push({
                  z: ['CustomArea', 'England and Wales'][i],
                  pc: dict[key],
                  column: key,
                });
              }
            });

            cache[table.code] = {name: table.name, data: lists};
            return cache[table.code];
          });
      }
    });
    // console.error('444', await Promise.all(tbls));
    return Promise.all(tbls); // no need to await as svelte sorts this out for us
  }

  //////////

  onMount(() => {
    window.addEventListener('message', new_event, false);
    console.log(window.dfd)
  });

  $: console.log(newdata);
</script>









<h1>{name}</h1>
<Cards>
  <Card title={'Area map'}>
    <MapAreas minimap={coordinates} />
  </Card>

  <Card title={'Selected Areas'}>
    This section outlines all the different areas codes which have been combined
    to produce the following report.
    <br /><br />
    {#each items(compressed) as item}
      <h4 style="display:inline"><b>{item[0].toUpperCase()}</b>:</h4>
      <codes>{item[1].join(', ')}</codes>
      <br /><br />
    {/each}
  </Card>



  {#await get_data(newdata) then tables}

  <Card title={'Embed Url'} >
    <code on:click={()=>{navigator.clipboard.writeText(JSON.stringify(tables));console.table(tables);console.log('data copied to clipboard')}}>
      Click here to copy the embed url to your clipboard: <br />
      {JSON.stringify(tables).length}
      
    </code>
  </Card>
    {#each tables as tab}
      <Card title={tab.name}>
        <!-- <svelte:component this={charts[tab.meta.chart]} data={tab.data} suffix={tab.meta.unit} format={format(tab.meta.format)}/> -->

        <BarChart xKey="pc" yKey="column" zKey="z" data={tab.data} />
      </Card>
    {/each}
  {/await}
  <br />
</Cards>

<!-- <span class="footnote">Source: Census 2011 data. Office for National Statistics | <a href="{dataURL(tables)}" download="{name}.csv">Download the data</a> | <a href="{assets}" target="_blank">Build your own profile</a></span> -->

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
</style>
