<script>

  import {onMount} from 'svelte';

  export let title = '';
  export let description = '';
  export let url = '';
  export let image = '';
  export let type = 'article';
  export let print = false;

  onMount(() => {
    if (print) console.warn(document.querySelector('share').innerHTML);
  });
</script>

<svelte:head>
  <share>
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={image} />
    <meta property="og:type" content={type} />
    <meta property="og:locale" content="en_GB" />
  </share>
</svelte:head>

<!--  A sharable metadata component by Dan Ellis 2022 -->
