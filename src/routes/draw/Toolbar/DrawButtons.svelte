<script>
  import {Button, ButtonSet} from 'carbon-components-svelte';
  import {draw_type, draw_enabled} from '../mapstore.js';

  import {onMount} from 'svelte';

  // export let selected = 'Move';
let disabled = false;

  function buttonclick(e) {
    return function () {
      console.warn(e);
      draw_type.set(e);
      console.warn($draw_type);
    };
  }

  onMount(() => {
    const buttons = [...document.querySelectorAll('.drawbtn')];

    draw_type.subscribe(function (draw) {
      if (draw) {
        buttons.forEach((d) => d.classList.remove('selected'));
        document.getElementById(draw).classList.add('selected');
        // alert(draw)
      }
    });
  });
</script>


<ButtonSet>

        <Button
          id="move"
          on:click={buttonclick('move')}
          style="margin-left:0px;"
          class="bx--btn bx--btn--secondary bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--bottom bx--tooltip--align-center bx--btn--sm icon drawbtn"
        >
          <span class="bx--assistive-text">Move Map</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="mdi-cursor-move"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            ><path
              d="M13,6V11H18V7.75L22.25,12L18,16.25V13H13V18H16.25L12,22.25L7.75,18H11V13H6V16.25L1.75,12L6,7.75V11H11V6H7.75L12,1.75L16.25,6H13Z"
            /></svg
          >
        </Button>

        <Button
          id="poly"
          style="margin-left:0px"
          disabled={$draw_enabled}
          on:click={buttonclick('poly')}
          class="bx--btn bx--btn--secondary bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--bottom bx--tooltip--align-center bx--btn--sm icon drawbtn"
        >
          <span class="bx--assistive-text">Draw Polygon</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="mdi-shape-polygon-plus"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            ><path
              d="M17,15.7V13H19V17L10,21L3,14L7,5H11V7H8.3L5.4,13.6L10.4,18.6L17,15.7M22,5V7H19V10H17V7H14V5H17V2H19V5H22Z"
            /></svg
          >
        </Button>

        <Button
          id="radius"
          on:click={buttonclick('radius')}
          disabled={$draw_enabled}
          class="bx--btn bx--btn--secondary bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--bottom bx--tooltip--align-center bx--btn--sm icon drawbtn"
        >
          <span class="bx--assistive-text">Select a Radius</span>
          <svg width="24" height="24" viewBox='0 0 48 48 ' xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0393 8c-2.211 0-4.2926.41978-6.2418 1.26088-1.9434.83862-3.6432 1.97802-5.0968 3.41832-1.4543 1.4409-2.6009 3.1348-3.43982 5.079C8.41997 19.707 8 21.7754 8 23.9607c0 2.211.41978 4.2926 1.26088 6.2418.83882 1.944 1.98512 3.644 3.43892 5.0977 1.4537 1.4538 3.1537 2.6001 5.0977 3.4389C19.7463 39.58 21.8147 40 24 40c2.211 0 4.2926-.4198 6.2418-1.2609 1.9442-.8389 3.6381-1.9855 5.079-3.4398 1.4403-1.4536 2.5797-3.1534 3.4183-5.0968C39.58 28.2537 40 26.1853 40 24c0-2.211-.4198-4.2926-1.2609-6.2418-.8387-1.9436-1.9783-3.6372-3.4192-5.0781s-3.1345-2.5805-5.0781-3.41922C28.293 8.41997 26.2246 8 24.0393 8Zm-9.286 6.7347c2.5521-2.5393 5.629-3.8061 9.2467-3.8061 3.6445 0 6.7274 1.2671 9.2658 3.8056 2.5385 2.5384 3.8056 5.6213 3.8056 9.2658 0 3.6177-1.2668 6.6946-3.8061 9.2467-2.5385 2.5514-5.6213 3.8247-9.2653 3.8247-3.6173 0-6.6939-1.273-9.2462-3.8252-2.5522-2.5523-3.8252-5.6289-3.8252-9.2462 0-3.644 1.2734-6.7268 3.8247-9.2653Z" />
          </svg>
        </Button>

        <Button
          id="click"
          on:click={buttonclick('click')}
          disabled={$draw_enabled}
          class="bx--btn bx--btn--secondary bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--bottom bx--tooltip--align-center bx--btn--sm icon drawbtn"
        >
          <span class="bx--assistive-text">Click Select</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="mdi-cursor-default-click-outline"
            width="24"
            height="24"
            viewBox="0 0 50 50">
              <path fill-rule="evenodd" clip-rule="evenodd" d="m11.2137 11.2137 6.3993 21.3527 2.8391-8.5985 12.8484 12.8485 3.5159-3.5159-12.8485-12.8484 8.5985-2.8391-21.3527-6.3993Zm.1517-3.07769c-.4159-.13455-.8861-.18641-1.37406-.07624-.50105.11314-.91379.37309-1.23614.69543-.32234.32235-.58229.7351-.69543 1.23614-.11017.48796-.05831.95816.07624 1.37406l6.97569 23.2762c.1333.4761.3895.9648.8444 1.3385.4659.3827 1.0102.5378 1.5231.5612.5222.0237 1.0848-.088 1.5851-.4382.4918-.3443.787-.8237.9578-1.2934l.0076-.021 1.7407-5.2716 9.6883 9.6884c.4642.4642 1.0897.7945 1.8418.7945.7521 0 1.3776-.3303 1.8419-.7945l4.0631-4.0631c.4642-.4643.7945-1.0898.7945-1.8419s-.3303-1.3776-.7945-1.8418l-9.6884-9.6883 5.2716-1.7407.021-.0076c.4697-.1708.9491-.466 1.2934-.9578.3502-.5003.4619-1.0629.4382-1.5851-.0234-.5129-.1785-1.0572-.5612-1.5231-.3737-.4549-.8624-.7111-1.3385-.8444L11.3654 8.13601Z" />
           </svg
          >
        </Button>
      </ButtonSet>


<style>
  :global(.selected) {
    border-color: #0f62fe !important;
    color: rgb(255, 255, 255);
  }
</style>
