<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import {InlineNotification} from 'carbon-components-svelte';
	import '../app.css';
</script>

<Header />

<div style='margin:auto'>
	<br><br>
<InlineNotification subtitle='This is a Demo and should not be used for any purpose other than a proof of concept.' />
</div>
<main>
	<slot />
</main>

<footer>

	<p>Demo <a href="https://github.com/ONSvisual">ONSVisual</a></p>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
		
	}

	header,footer{display: block;}
	footer {
		/* display: flex; */
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 10px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 10px 0;
		}
	}
</style>
