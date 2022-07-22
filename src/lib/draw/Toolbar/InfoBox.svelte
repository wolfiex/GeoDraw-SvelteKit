<script>
    import {Accordion,AccordionItem,Search} from 'carbon-components-svelte';

    export let title = 'Custom Profile (Info)'
    export let text = 'Welcome to the custom drawing tool. \n To begin drawing, click on the map and zoom in, or use the search bar below to locate area of interest. ';
    export let subtitle = ' '
    export let open = true

    

</script>

<Accordion class='info'>
    <AccordionItem open={open}>
      <svelte:fragment slot="title">
      <h4>{title}</h4>
      <h6>{subtitle}</h6>
      </svelte:fragment>
        
        <p>{text}</p>
    
<!--  -->
    
    </AccordionItem>
    <slot></slot>
  
</Accordion>

<style>
  :global(.bx--accordion__content p){
      width:100%
  }

  :global(.info){
    width:30%;
    max-width: 600px;
    min-width: 400px;
    background-color: #f5f5f5;
    border-radius: 0.25rem;
    padding: .8rem;
    margin: 1rem;
    border: 1px solid rgba(60, 58, 58, 0.454);
  }
</style>