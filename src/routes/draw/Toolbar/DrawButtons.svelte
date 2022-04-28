<script>
  import {Button, Grid, Column, Row} from 'carbon-components-svelte';
  import {draw_type,draw_enabled} from '../mapstore.js';
  import {onMount} from 'svelte';

  // export let selected = 'Move';
  export let disabled = false;


  function buttonclick(e) {
    return function() {
      console.warn(e);
      draw_type.set(e);
      console.warn($draw_type)
    };
  }

  onMount(()=>{

    const buttons = [...document.querySelectorAll('.drawbtn')];
  

    draw_type.subscribe(function(draw){
      if (draw){
        buttons.forEach(d=>d.classList.remove("selected"))
        document.getElementById(draw).classList.add("selected");
        // alert(draw)
      }
})





  })
 

</script>

<main>
  <div>
    <Row>
      <Column>
        <!-- &nspar; -->
        <Button
          id= 'move'
          on:click={buttonclick('move')}
          style="margin-left:0px;"
          class="bx--btn bx--btn--secondary bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--bottom bx--tooltip--align-center bx--btn--sm icon drawbtn"
        >
          <span class="bx--assistive-text">Move Map</span>
          <svg xmlns="http://www.w3.org/2000/svg" id="icon" viewBox="0 0 32 32"
            ><defs
              ><style>
                .cls-1 {
                  fill: none;
                }
              </style></defs
            ><title>move</title><polygon
              points="25 11 23.59 12.41 26.17 15 17 15 17 5.83 19.59 8.41 21 7 16 2 11 7 12.41 8.41 15 5.83 15 15 5.83 15 8.41 12.41 7 11 2 16 7 21 8.41 19.59 5.83 17 15 17 15 26.17 12.41 23.59 11 25 16 30 21 25 19.59 23.59 17 26.17 17 17 26.17 17 23.59 19.59 25 21 30 16 25 11"
            /><rect
              id="_Transparent_Rectangle_"
              data-name="&lt;Transparent Rectangle&gt;"
              class="cls-1"
              width="32"
              height="32"
            /></svg
          >
        </Button>

        <Button
          id = 'poly'
          style="margin-left:0px"
          disabled = {$draw_enabled}
          on:click={buttonclick('poly')}
          class="bx--btn bx--btn--secondary bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--bottom bx--tooltip--align-center bx--btn--sm icon drawbtn"
        >
          <span class="bx--assistive-text">Draw Polygon</span>
          <svg
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
            style="will-change: transform; width:95%;height:95%"
            xmlns="http://www.w3.org/2000/svg"
            class="bx--btn__icon"
            viewBox="3 3 19 19"
            aria-hidden="true"
            ><path
              d="m17 15.7v-2.7h2v4l-9 4-7-7 4-9h4v2h-2.7l-2.9 6.6 5 5zm5-10.7v2h-3v3h-2v-3h-3v-2h3v-3h2v3z"
            /></svg
          >
        </Button>

        <Button
          id='radius'
          on:click={buttonclick('radius')}
          disabled = {$draw_enabled}
          class="bx--btn bx--btn--secondary bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--bottom bx--tooltip--align-center bx--btn--sm icon drawbtn"
        >
          <span class="bx--assistive-text">Select a Radius</span>
          <svg xmlns="http://www.w3.org/2000/svg" id="icon" viewBox="0 0 32 32"
            ><defs
              ><style>
                .cls-1 {
                  fill: none;
                }
              </style></defs
            ><title>watson-health--circle-measurement</title><path
              d="M16,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30ZM16,4A12,12,0,1,0,28,16,12,12,0,0,0,16,4Z"
            /><path
              d="M21,12.41V16h2V9H16v2h3.59L11,19.59V16H9v7h7V21H12.41Z"
            /><rect
              id="_Transparent_Rectangle_"
              data-name="&lt;Transparent Rectangle&gt;"
              class="cls-1"
              width="32"
              height="32"
            /></svg
          >
        </Button>

        <Button
          id='click'
          on:click={buttonclick('click')}
          disabled = {$draw_enabled}
          class="bx--btn bx--btn--secondary bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--bottom bx--tooltip--align-center bx--btn--sm icon drawbtn"
        >
          <span class="bx--assistive-text">Click Select</span>
          <svg
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
            style="will-change: transform;width:95%;height:95%"
            xmlns="http://www.w3.org/2000/svg"
            class="bx--btn__icon"
            viewBox="2 4 19 14"
            aria-hidden="true"
            ><path
              d="m18.2848192 17.5777124 2.5687342 2.5687342c.1952621.1952622.1952621.5118446 0 .7071068-.1952622.1952621-.5118446.1952621-.7071068 0l-2.5687342-2.5687342-1.6616873 2.4925309c-.2260679.3391019-.7410894.2798123-.8841897-.1017884l-3-8c-.1507287-.4019432.2417831-.794455.6437263-.6437263l8 3c.3816007.1431003.4408903.6581218.1017884.8841897zm-1.0535788-.4994645 2.1792312-1.4528208-6.0560712-2.2710267 2.2710267 6.0560712 1.4528208-2.1792312c.0191996-.0300662.0419325-.0585276.0681987-.0847938s.0547276-.0489991.0847938-.0681987zm-11.7312404-14.0782479c.27614237 0 .5.22385763.5.5s-.22385763.5-.5.5c-.82842712 0-1.5.67157288-1.5 1.5 0 .27614237-.22385763.5-.5.5s-.5-.22385763-.5-.5c0-1.38071187 1.11928813-2.5 2.5-2.5zm3 1c-.27614237 0-.5-.22385763-.5-.5s.22385763-.5.5-.5h2c.2761424 0 .5.22385763.5.5s-.2238576.5-.5.5zm5 0c-.2761424 0-.5-.22385763-.5-.5s.2238576-.5.5-.5h2c.2761424 0 .5.22385763.5.5s-.2238576.5-.5.5zm-5 17c-.27614237 0-.5-.2238576-.5-.5s.22385763-.5.5-.5h2c.2761424 0 .5.2238576.5.5s-.2238576.5-.5.5zm-5.5-12.5c0-.27614237.22385763-.5.5-.5s.5.22385763.5.5v2c0 .2761424-.22385763.5-.5.5s-.5-.2238576-.5-.5zm0 5c0-.2761424.22385763-.5.5-.5s.5.2238576.5.5v2c0 .2761424-.22385763.5-.5.5s-.5-.2238576-.5-.5zm0 5c0-.2761424.22385763-.5.5-.5s.5.2238576.5.5c0 .8284271.67157288 1.5 1.5 1.5.27614237 0 .5.2238576.5.5s-.22385763.5-.5.5c-1.38071187 0-2.5-1.1192881-2.5-2.5zm18-8c0 .2761424-.2238576.5-.5.5s-.5-.2238576-.5-.5v-2c0-.27614237.2238576-.5.5-.5s.5.22385763.5.5zm0-5c0 .27614237-.2238576.5-.5.5s-.5-.22385763-.5-.5c0-.82842712-.6715729-1.5-1.5-1.5-.2761424 0-.5-.22385763-.5-.5s.2238576-.5.5-.5c1.3807119 0 2.5 1.11928813 2.5 2.5z"
            /></svg
          >
        </Button>
      </Column>
    </Row>
    <Row>
      <Column>Draw Tools</Column>
    </Row>
  </div>
</main>

<style>
  :global(.selected) {
    border-color: #0f62fe !important;
    color:rgb(255, 255, 255);
    
  }
</style>
