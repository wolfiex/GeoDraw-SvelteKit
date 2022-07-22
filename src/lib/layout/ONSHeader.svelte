<script>
  import { themes } from '$lib/config';
	import { getContext } from 'svelte';
	import ONSLogo from "./ONSLogo.svelte";
	import CensusLogo from "./CensusLogo.svelte";
	
	export let theme = getContext('theme') ? getContext('theme') : "light";
	export let filled = true;
	export let center = false;
	export let census = true;
	export let overlay = false;
	export let margin_top = null;

	let primary = theme == "dark" ? "white" : filled ? "#003c57" : "#222222";
	let secondary = theme == "dark" || filled ? "#a8bd3a" : "#222222";
	let census_color = theme == "dark" ? "white" : "#902082";
</script>

<nav style:margin-top="{margin_top ? `${margin_top}px` : null}" style:border-bottom-color="{themes[theme]['muted']}" style:background-color="{filled ? themes[theme]['background'] : null}" class:overlay>
  <div class="col-wide middle" class:center>
		<div class="logo-block">
			<a href="https://www.ons.gov.uk/" class="logo" style:width="270px">
				<ONSLogo {primary} {secondary}/>
			</a>
			{#if census}
			<a href="https://www.ons.gov.uk/census/" class="logo" style:width="160px">
				<CensusLogo color={census_color}/>
			</a>
			{/if}
		</div>
  </div>
</nav>

<style>
	nav {
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		position: relative;
		height: 46px;
		border-bottom: 1px solid #777;
		z-index: 1;
	}
	.overlay {
		margin-bottom: -46px;
	}
	.col-wide {
		width: calc(100% - 48px) !important;
	}
	.logo-block {
		position: relative;
		display: flex;
		flex-direction: row;
		align-items: center;
		max-width: 100%;
	}
	.logo {
		box-sizing: border-box;
		cursor: pointer;
		padding: 4px;
		margin: 0;
		line-height: 1;
	}
</style>