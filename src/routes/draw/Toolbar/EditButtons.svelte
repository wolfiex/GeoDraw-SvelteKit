<script>
  import {Button, Column, Row} from 'carbon-components-svelte';
  import {draw_type} from '../mapstore.js';
  import {
    writable,
    get
} from 'svelte/store';

export const undo = writable(new Date()); 



  export let add_mode = true;
  let disabled='false';

  draw_type.subscribe((e)=> {disabled = e==='click'})

  undo.subscribe((d)=>{console.log('undooooooooo ',d)})

</script>

<main>
  <div>
    <Row>
      <Column>
        <Button
          style="margin-left:0px"
          disabled={disabled}
          on:click={() => {
            add_mode = !add_mode;
          }}
          class="bx--btn bx--btn--secondary bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--bottom bx--tooltip--align-center bx--btn--sm icon"
        >
          {#if add_mode}
            <span class="bx--assistive-text">Additive Selection</span>
            <svg xmlns="http://www.w3.org/2000/svg" id="icon" width="32" height="32" viewBox="0 0 32 32">
              <defs>
                <style>
                  .cls-1 {
                    fill: none;
                  }
                </style>
              </defs>
              <path d="M28,10H22V4a2.0025,2.0025,0,0,0-2-2H4A2.0025,2.0025,0,0,0,2,4V20a2.0025,2.0025,0,0,0,2,2h6v6a2.0025,2.0025,0,0,0,2,2H28a2.0025,2.0025,0,0,0,2-2V12A2.0025,2.0025,0,0,0,28,10ZM4,20V4H20v6H12a2.0025,2.0025,0,0,0-2,2v8Zm8,8V22h8a2.0025,2.0025,0,0,0,2-2V12h6V28Z"/>
              <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"/>
            </svg>
          {:else}
            <span class="bx--assistive-text">Subtractive Selection</span>
            <svg xmlns="http://www.w3.org/2000/svg" id="icon" width="32" height="32" viewBox="0 0 32 32">
              <defs>
                <style>
                  .cls-1 {
                    fill: none;
                  }
                </style>
              </defs>
              <path d="M12,10H22V4a2,2,0,0,0-2-2H4A2,2,0,0,0,2,4V20a2,2,0,0,0,2,2h6V12A2,2,0,0,1,12,10Z"/>
              <path d="M28,10H22V20a2,2,0,0,1-2,2H10v6a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V12A2,2,0,0,0,28,10Z"/>
              <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"/>
            </svg>
          {/if}
        </Button>

        <Button
          disabled = {!get(undo)}
          on:click={()=> {if ((get(undo)-new Date()) > -1000) undo.Set(new Date)}}
          style="margin-left:0px"
          class="bx--btn bx--btn--secondary bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--bottom bx--tooltip--align-center bx--btn--sm icon"
        >
          <span class="bx--assistive-text">Undo</span>
          <svg xmlns="http://www.w3.org/2000/svg" id="icon" viewBox="0 0 32 32"><defs><style>.cls-1{fill:none;}</style></defs><title>reset</title><path d="M18,28A12,12,0,1,0,6,16v6.2L2.4,18.6,1,20l6,6,6-6-1.4-1.4L8,22.2V16H8A10,10,0,1,1,18,26Z"/><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"/></svg>
        </Button>


       
      </Column>
    </Row>
    <Row>
      <Column>Edit Selection</Column>
    </Row>
  </div>
</main>

<style>

</style>
