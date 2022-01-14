<script>
  // import DesignSystemCode from "./DesignSystemCode.svelte";
  export let title;
  export let code;
  export let width="100%";
</script>

<main class="design-system-panel" style='width:{width}!important;'>
  {#if title}<h3 class="design-system-header">{title}</h2>{/if}
  <div >
    <slot class="design-system-component-panel"/>
  </div>
  {#if code}{/if}
</main>

<style>
  .design-system-panel {
    background-color: #f8f8f8;
    border-radius: 0.5rem;
    padding: 0.5rem 0.5rem;
    margin-bottom: 2rem;
  }

  .design-system-header {
    margin-top: 0;
    margin-block-start: 0;
  }
  .design-system-component-panel {
    background-color: #fff;
    border-radius: 0.2rem;
    padding: 0.5rem;
    margin-bottom: 1rem;
  }
</style>
