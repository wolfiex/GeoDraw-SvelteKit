<script>
  export let name = "close";

  const paths = {
    close: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }
</script>

<svg viewBox="0 0 24 24" fill-rule="evenodd" clip-rule="evenodd">
  <path d={paths[name]}></path>
</svg>

<style>
  svg {
    width: 1rem;
    height: 1rem;
    fill: currentColor;
    transition: all 0.3s ease-out;
    overflow: visible;
  }
</style>
