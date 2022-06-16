<script>
	import { geoMercator, geoPath } from "d3-geo";
	import { tile } from "d3-tile";
	
	export let geojson = null;
	export let bounds = [[-9, 49], [2, 61]];
	export let color = "#206095";
	export let lineWidth = 2.5;
	export let fillOpacity = 0.1;
	export let saturation = 0.3;
	
	let width = 400;
	let height = 400;
	
	const url = (x, y, z) => `http://b.tile.openstreetmap.fr/hot/${z}/${x}/${y}.png`;
	
	function makeProjection(width, height, _geojson) {
  	const proj = geoMercator().fitSize([width, height], _geojson);
  	const zoom = Math.floor(Math.log2(proj.scale() * (2 * Math.PI)));
  	const scale = Math.pow(2, zoom) / (2 * Math.PI);
  	proj.center(proj.invert([width / 2, height / 2]));
  	proj.scale(scale);
  	proj.translate([width / 2, height / 2]);
  	return proj;
	}
	
	$: _geojson = geojson ? geojson : {"type": "Polygon",
  "coordinates": [[[bounds[0][0], bounds[0][1]], [bounds[0][0], bounds[1][1]], [bounds[1][0], bounds[1][1]], [bounds[1][0], bounds[0][1]], [bounds[0][0], bounds[0][1]]]]};
	
	$: projection = makeProjection(width, height, _geojson);
	
	$: maptile = tile()
    .size([width, height])
    .scale(projection.scale() * 2 * Math.PI)
    .translate(projection([0, 0]))
    .tileSize(256);
	
	$: path = geoPath(projection);
</script>

<div class="svg-container" bind:clientWidth={width} bind:clientHeight={height}>
	<svg viewBox="0 0 {width} {height}">
		<filter id="desaturate">
    	<feColorMatrix type="saturate" values="{saturation}"/>
  	</filter>
  	{#each maptile().map(([x, y, z], i, {translate: [tx, ty], scale: k}) => ({x, y, z, tx, ty, k})) as tile}
		<image xlink:href="{url(tile.x, tile.y, tile.z)}" x="{Math.round((tile.x + tile.tx) * tile.k)}" y="{Math.round((tile.y + tile.ty) * tile.k)}" width="{tile.k}" height="{tile.k}" filter="url(#desaturate)"/>
		{/each}
		{#if geojson}
		{#if fillOpacity}
		<path fill="{color}" stroke="none" opacity={fillOpacity} d="{path(geojson)}"/>
		{/if}
		<path fill="none" stroke="{color}" stroke-width={lineWidth} d="{path(geojson)}"/>
		{/if}
	</svg>
</div>

<style>
	.svg-container, svg {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
	}
</style>