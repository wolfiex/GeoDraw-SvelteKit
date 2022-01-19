<script>
	// // A movalbe ONStyle panel
	// import DesignSystemCode from '../ui/DesignSystemCode.svelte';
	// import { InlineNotification } from 'carbon-components-svelte';

	import { onMount } from 'svelte';
	import { Accordion, AccordionItem ,ProgressIndicator,ProgressStep,ProgressBar} from 'carbon-components-svelte';
	import Header from '../ui/Header.svelte';
	import { loop_guard } from 'svelte/internal';
	import 'carbon-components-svelte/css/g10.css';

	export let title;
	export let subtitle = '';
	export let width = '100%';
	export let height = 'auto';
	export let movable = false;
	export let open = 's1';
	export let itemtitles = {};
	export let loaded = true

	let panel;
	let acc;

	function dragElement(elmnt) {
		var pos1 = 0,
			pos2 = 0,
			pos3 = 0,
			pos4 = 0;
		if (document.getElementById(elmnt.id + 'header')) {
			document.getElementById(elmnt.id + 'header').onmousedown = dragMouseDown; // if present, the header is where you move the DIV from:
		} else {
			elmnt.onmousedown = dragMouseDown; // otherwise, move the DIV from anywhere inside the DIV:
		}

		function dragMouseDown(e) {
			e = e || window.event;
			e.preventDefault();
			pos3 = e.clientX;
			pos4 = e.clientY;
			document.onmouseup = onDragEnd;
			document.onmousemove = onDrag;
		}

		function onDrag(e) {
			e = e || window.event;
			e.preventDefault();
			// calculate the new cursor position:
			pos1 = pos3 - e.clientX;
			pos2 = pos4 - e.clientY;
			pos3 = e.clientX;
			pos4 = e.clientY;
			// set the element's new position:
			elmnt.style.top = elmnt.offsetTop - pos2 + 'px';
			elmnt.style.left = elmnt.offsetLeft - pos1 + 'px';
		}

		function onDragEnd() {
			document.onmouseup = null;
			document.onmousemove = null;
		}
	}

	onMount(function () {
		if (movable) dragElement(panel);
		console.log($$props, $$slots);

		acc = document.getElementsByClassName('bx--accordion__item');

		// open=id
	});

	// function highlander(ele) {
	// 	open = ele.srcElement.parentElement.parentElement.id || ele.srcElement.parentElement.id;
	// }
</script>

<main
	bind:this={panel}
	class="ONSvisual-design-system-panel"
	style="bottom{movable
		? 'auto'
		: '0px'}width:{width}!important;z-index:{movable
		? 100
		: 9};display:inline-block;overflow-y:scroll;height:{height}!important;"
>


<slot name='title'>
	{#if title || subtitle}
		<div class="ONSvisual-design-system-header">
			<!-- <h3 class='ONSvisual-design-system-header'>{title}</h3>    -->
			<Header serviceTitle={title} description={subtitle} />
		</div>
	{/if}
</slot>


{#if !loaded}
				<ProgressBar  helperText="Loading..." />
{:else}
	<div class="ONSvisual-design-system-component-panel" style="">
		
		<!-- <Accordion on:click={highlander}>
			{#if $$slots.s1}
				<AccordionItem title={itemtitles['s1'] || ''} id="s1" open={open === 's1'}>
					<slot name="s1" />
					
				</AccordionItem>
			{/if}

			{#if $$slots.s2}
				<AccordionItem title={itemtitles['s2'] || ''} id="s2" open={open === 's2'}>
				
					<slot name="s2" />

				</AccordionItem>
			{/if}

			{#if $$slots.s3}
				<AccordionItem title={itemtitles['s3'] || ''} id="s3" open={open === 's3'}>
					<slot name="s3" />
				</AccordionItem>
			{/if}

			{#if $$slots.s4}
				<AccordionItem title={itemtitles['s4'] || ''} id="s4" open={open === 's4'}>
					<slot name="s4" />
				</AccordionItem>
			{/if}

			<slot />

	
		</Accordion> -->
		<slot />
	</div>
	{/if}
</main>

<style>
	.ONSvisual-design-system-panel {
		background-color: #f8f8f8;
		border-radius: 0.5rem;
		padding: 0.5rem 0.5rem;
		margin-bottom: 2rem;
		position: fixed;
		padding: 1px;
		max-height: 70vh;

		/* background-color: #f1f1f1; */
		border: 1px solid #d3d3d3;
		text-align: center;
		display: block;
	}

	span {
		margin-top: 1;
		margin-bottom: 1;
		/* height:100px!important; */
	}

	:global(.bx--accordion__content) {
		width: auto;
		padding-right: 5%;
		padding-left: 5%;
	}

	.ONSvisual-design-system-header {
		margin: 0;
		padding: 0;
		margin-block-start: 0;
		font-size: 1rem;
		color: #222;
		font-family: OpenSans, Helvetica Neue, arial, sans-serif;
	}
	.ONSvisual-design-system-component-panel {
		/* background-color: #fff; */
		border-radius: 0.2rem;
		padding: 0.5rem;
		margin-bottom: 1rem;
		/* overflow-y: scroll; */
	}

	:global(Accordion) {
		margin: 1;
		padding: 1;
		background-color: #fff !important;
		border-radius: 0.2rem;
		padding: 0.5rem;
		margin-bottom: 1rem;
	}

	#mydivheader {
		padding: 10px;
		cursor: move;
		z-index: 10;
		background-color: #2196f3;
		color: #fff;
	}

	/* custom scrollbar */
	::-webkit-scrollbar {
		width: 4px;
	}

	::-webkit-scrollbar-track {
		background-color: transparent;
	}

	::-webkit-scrollbar-thumb {
		background-color: hsla(224, 100%, 75%, 0.384);
		border-radius: 10px;
		border: 0.1px solid transparent;
		background-clip: content-box;
	}

	::-webkit-scrollbar-thumb:hover {
		background-color: #007adf;
	}
</style>
