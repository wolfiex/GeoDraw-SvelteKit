<script>
    import {Accordion,AccordionItem,Search} from 'carbon-components-svelte';

    export let title = 'Custom Profile (Info)'
    export let text = 'Welcome to the custom drawing tool. \n To begin drawing, click on the map and zoom in, or use the search bar below to locate area of interest. ';

    

</script>

<Accordion class='info'>
    <AccordionItem title="{title}">
        
        <p>{text}</p>
    

<Search
closeButtonLabelText="Clear search input"
defaultValue="A default value"
autocomplete='on'
id="search-1"
labelText="Search Postcode or Name"
onChange={function noRefCheck(x){return [1,2,3]}}
onKeyDown={function noRefCheck(x){return [1,2,3]}}
size="lg"
/>
    
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