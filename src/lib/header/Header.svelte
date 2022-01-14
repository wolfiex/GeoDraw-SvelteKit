<script lang="ts">
	import { page } from '$app/stores';
	// import { ModalWrapper } from "carbon-components-svelte";
	import {Tooltip,Link,Button} from "carbon-components-svelte";
	// import logo from './svelte-logo.svg';
</script>

<header>

	


	<div class="flex-container">
	<div class="corner">
		<!-- <a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a> -->
				<a href="/">
					<img
						class="logo"
						style='width:180px;margin-left:120px;'
						src="https://cdn.ons.gov.uk/assets/images/ons-logo/v2/ons-logo.svg"
						alt="Office for National Statistics logo - Homepage"
					/>
					<!--[endif]---->
				</a>
			


</div>

	<nav>


		
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li class:active={$page.url.pathname === '/intro'}><a sveltekit:prefetch href="/intro">Learn</a></li>
			<li class:active={$page.url.pathname === '/maplite'}>
				<a sveltekit:prefetch href="/maplite">draw </a>
			</li>
			
			<li class:active={$page.url.pathname === '/data'}>
				<a sveltekit:prefetch href="/data">explore</a>
			</li>
			
			<li class:active={$page.url.pathname === '/todos'}>
				<!-- <a sveltekit:prefetch href="/todos">Todos</a> -->
				  
			</li>
	
			
			
		</ul>


	</nav>

</div>
<!-- 
	<div class="corner">
		TODO put something else here? github link?
	</div> -->
</header>



<style>
.flex-container {
  display: block;
  position:absolute;
  flex-wrap: nowrap;
  background-color: #f5f5f6;
  z-index: 900;
  width: 100vw;
  top:0;
  right:0;
  left:0;
  padding:0;
  margin: 0px;
}

	header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 30px;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		top:0;
		display: flex;
		justify-content: center;
		--background: #414042;
		float:right;
		width:auto;
		margin-left:auto;
		margin-right:0;
		/* width:calc(100%-300px); */
		right:0;
		position:absolute;

	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1.4em;
		/* color: var(--heading-color); */
		color:whitesmoke;
		font-weight: 700;
		font-size: 0.6rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
		font-family: open sans,Helvetica,Arial,sans-serif;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
