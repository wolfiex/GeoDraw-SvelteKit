<script>
    import {AccordionItem} from 'carbon-components-svelte';

    export let title = 'Custom Profile (Info)'
    
    export let subtitle = ' '
    export let open = true

    

</script>

    <AccordionItem open={open}>
      <svelte:fragment slot="title">
      <h4>{title}</h4>
      <h7><b>{subtitle}</b></h7>
      </svelte:fragment>
    <slot style='width:100%'></slot>
    </AccordionItem>
    
  


<style>
  :global(.bx--accordion__content p){
      width:100%
  }

  
</style>