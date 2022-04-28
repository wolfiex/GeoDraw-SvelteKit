<script>
 import { Button , Grid, Column, Row } from "carbon-components-svelte";
import { stringify } from "postcss";
 import {selected, query} from '../mapstore.js';
 
 export let disabled = false

</script>



<main>
<div>
    <Row>
      
      <Column style='flex-grow:0!important;'>


        <Button style='margin-left:0px'
        disabled={$selected.length<2}
        on:click={ function download() {

          return Promise.resolve($query).then(q=>{


          var last = $selected[$selected.length-1];
          var data = {full_list: last.oa, compressed: {oa:q.oa, lsoa:q.lsoa, msoa:q.msoa}}


          var element = document.createElement('a');
          element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(data)));
          element.setAttribute('download', `custom_areas_${new Date().toJSON().slice(0,16)}.json`);
        
          element.style.display = 'none';
          document.body.appendChild(element);
        
          element.click();
        
          document.body.removeChild(element);
          })
        }}
        class="bx--btn bx--btn--secondary bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--bottom bx--tooltip--align-center bx--btn--sm icon">
        <span class="bx--assistive-text">Save</span>
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true"><path d="M30 25L28.586 23.586 26 26.172 26 18 24 18 24 26.172 21.414 23.586 20 25 25 30 30 25zM19 14H23V16H19zM19 10H26V12H19zM9 18h6a3 3 0 013 3v2H16V21a1 1 0 00-1-1H9a1 1 0 00-1 1v2H6V21A3 3 0 019 18zM16 13a4 4 0 10-4 4A4 4 0 0016 13zm-2 0a2 2 0 11-2-2A2 2 0 0114 13z"></path><path d="M18,26H4V6H28V16h2V6a2,2,0,0,0-2-2H4A2,2,0,0,0,2,6V26a2,2,0,0,0,2,2H18Z"></path><title>Download study</title></svg>
      </Button>     

      
      
      <Button style='margin-left:0px'
        class="bx--btn bx--btn--secondary bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--bottom bx--tooltip--align-center bx--btn--sm icon">
        <span class="bx--assistive-text">Build</span>
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true"><path d="M18 13L16.59 14.41 19.17 17 10 17 10 19 19.17 19 16.59 21.59 18 23 23 18 18 13z"></path><path d="M11.1716,6l3.4142,3.4142L15.1716,10H28V26H4V6h7.1716m0-2H4A2,2,0,0,0,2,6V26a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2H16L12.5858,4.5858A2,2,0,0,0,11.1716,4Z"></path><title>Folder move to</title></svg>
      </Button>     
        

      <Button style='margin-left:0px'
      class="bx--btn bx--btn--secondary bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--bottom bx--tooltip--align-center bx--btn--sm icon">
      <span class="bx--assistive-text">Upload</span>
      <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true"><path d="M6 18L7.41 19.41 15 11.83 15 30 17 30 17 11.83 24.59 19.41 26 18 16 8 6 18zM6 8V4H26V8h2V4a2 2 0 00-2-2H6A2 2 0 004 4V8z"></path><title>Upload</title></svg>
    </Button>

    <Button style='margin-left:0px'
    on:click={function clear(){
      selected.set([{oa:new Set(),lat:[],lng:[]}]);
      query.set({error:false});
    }}
    class="bx--btn bx--btn--secondary bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--bottom bx--tooltip--align-center bx--btn--sm icon">
    <span class="bx--assistive-text">Clear</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M16 1.75V3h5.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H8V1.75C8 .784 8.784 0 9.75 0h4.5C15.216 0 16 .784 16 1.75zm-6.5 0a.25.25 0 01.25-.25h4.5a.25.25 0 01.25.25V3h-5V1.75z"/><path d="M4.997 6.178a.75.75 0 10-1.493.144L4.916 20.92a1.75 1.75 0 001.742 1.58h10.684a1.75 1.75 0 001.742-1.581l1.413-14.597a.75.75 0 00-1.494-.144l-1.412 14.596a.25.25 0 01-.249.226H6.658a.25.25 0 01-.249-.226L4.997 6.178z"/><path d="M9.206 7.501a.75.75 0 01.793.705l.5 8.5A.75.75 0 119 16.794l-.5-8.5a.75.75 0 01.705-.793zm6.293.793A.75.75 0 1014 8.206l-.5 8.5a.75.75 0 001.498.088l.5-8.5z"/></svg>
  </Button>


  </Column>
         </Row>
         <Row>
            <Column>IO Tools</Column>
         </Row>
        </div>
        </main>

<style>

</style>