<script>
  export let data;
  export let suffix = "";
  export let xKey = "value";
  export let zKey = "group";
	export let format = d => d;
</script>

<div class="num-big">{format(data[0][xKey])}</div>
<div class="num-suffix">{suffix}</div>
<div class="num-desc">
  <mark>{format(data[1][xKey])}</mark> 
  for {data[1][zKey]}
</div>

<style>
  .num-big {
    display: block;
    font-size: 3rem;
    font-weight: bold;
    line-height: 1.2;
  }
  .num-suffix {
    display: block;
    max-width: 100%;
    margin-left: 2px;
  }
  .num-desc {
    display: block;
    margin-top: 10px;
    color: #666;
  }
  .num-desc > mark {
    background-color: lightgrey;
    font-weight: bold;
    padding: 0 3px;
  }
</style>