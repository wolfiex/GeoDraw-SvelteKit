 <script>
	 export let width ='40%'
 </script>
 
 <style>
	main {
		box-sizing: border-box;
		padding: 0;
		height:auto;
		margin: 0;
		z-index: 2;
		/* max-width: 400px; */
		/* min-height: 100vh; */
		position: absolute;
	}
	/* @media (max-width: 900px) {
		main {
			width: 50%;
		}
	} */
	/* @media (max-width: 600px) {
		main {
			width: 100%;
			min-height: 0;
			top: 65%;
		}
	} */
</style>

<main style='width:{width}!important;position:absolute;'>
	<slot ></slot>
</main>