<script>
	import '../../style.css';
    import "carbon-components-svelte/css/g10.css";
    import { Grid, Row, Column } from "carbon-components-svelte";
    import { Search, Button, Toggle} from "carbon-components-svelte";

    let add_mode = true;

</script>




<style>
    :root {
        --header-2-height: clamp(2rem,4vh,60px);
        --header-1-height: clamp(1rem,5vh,40px);
        /* --second-color: #ff7; */
    }
    #toggle{
        height: calc(var(--header-2-height)/2)!important;
    }

    :global(.icon){
        border: 2px solid rgb(89, 89, 89);
        /* margin-left:-1.5px; */
        aspect-ratio: 1/1;
        height:auto;
        width: var(--header-2-height)!important;
    }
    header{
        /* position:absolute; */
        display:block;
        position:fixed;
        width:100vw;
        margin:0!important;
    }
    :global(.bx--grid){
        left:0;
        right:0;
        margin-left:0;
        margin-right:0px;
        padding-left:0px;
        padding-right:0px;
        width:100vw;
    }
    :global(#head1){
        width:100vw;
        height:var(--header-1-height)!important;
        background-color: whitesmoke;
        margin:0;
        
    }
    :global(#head2){
        width:100vw;
        height:var(--header-2-height)!important;
        background-color: #323132
        ;
        margin:0;
    }
    .logo{

        height:calc(var(--header-1-height)*.8)!important;
        width:auto;
    }

    :global(.bx--col){
        /* margin:auto; */
        padding:0!important;
        display:flex;

        flex-grow:5!important;
        /* justify-content: space-between; */
    }
</style>


    
    
        <slot />
    
    