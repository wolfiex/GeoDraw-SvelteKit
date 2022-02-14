<script>
import PlotComponent from '../plotcomponent/index.svelte';
import {default as totals} from './indicator_summary.json'

console.log(totals)

function make_ind(indicator) {

    var data = {}
    data['total'] = indicator.total

    // get area values here
    var sums = {}
    Object.keys(indicator.total).forEach(function(key) {
        sums[key] = Math.random()*1000
    })


    data['area'] = sums

    return data
}

</script>



{#if totals}
<div id='area'>
{#each totals as indicator}

<PlotComponent data={make_ind(indicator)} title={['total','area']} small={['total']} figtitle = {indicator.name + ' - ('+ indicator.code + ')'} />

{/each}

</div>
{/if}



<style>
/* #area {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    max-width:500px;
} */

</style>