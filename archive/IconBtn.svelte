
<script>
    import {Button,} from 'carbon-components-svelte';

    export let path=false;
    export let iconname = 'bolt';
    const icon = import("svelte-material-icons/MaterialDesign/svg/"+iconname+'.svg');

    export let size = "1em";
    export let width = size;
    export let height = size;
    export let color = "currentColor";
    export let viewBox = "0 0 24 24";
    export let id = "button";
    export let onclick=()=>{};
    export let disabled = false;
    export let assistiveText = "Button";

    console.log(icon);

</script>

<Button
          id="{id}"
          on:click={onclick}
          disabled={disabled}
          class="bx--btn bx--btn--secondary bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--bottom bx--tooltip--align-center bx--btn--sm icon drawbtn"
        >
          <span class="bx--assistive-text">{assistiveText}</span>

        {#if path}
        <svg {width} {height} {viewBox}>
          <path d="..." fill={color} />
        </svg>

        {:else}
        <!-- <svelte:component this={icon.component} {color} {size} {width} {height} {viewBox} /> -->
kk
        {/if}
</Button>