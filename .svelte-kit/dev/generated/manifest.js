const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/pbf_viewer.svelte"),
	() => import("../../../src/routes/draw/index.svelte"),
	() => import("../../../src/routes/draw/AreaMap.svelte"),
	() => import("../../../src/routes/draw/Toolbar/ProgressButtons.svelte"),
	() => import("../../../src/routes/draw/Toolbar/DrawButtons.svelte"),
	() => import("../../../src/routes/draw/Toolbar/EditButtons.svelte"),
	() => import("../../../src/routes/draw/Toolbar/InfoBox.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/cors_endpoint/[...tile].js
	[/^\/cors_endpoint(?:\/(.*))?$/],

	// src/routes/pbf_viewer.svelte
	[/^\/pbf_viewer\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/test2/[z]-[x]-[y].pbf.js
	[/^\/test2\/([^/]+?)-([^/]+?)-([^/]+?)\.pbf$/],

	// src/routes/draw/index.svelte
	[/^\/draw\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/draw/mapstore.js
	[/^\/draw\/mapstore\/?$/],

	// src/routes/draw/AreaMap.svelte
	[/^\/draw\/AreaMap\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/draw/MapDraw.js
	[/^\/draw\/MapDraw\/?$/],

	// src/routes/draw/Toolbar/ProgressButtons.svelte
	[/^\/draw\/Toolbar\/ProgressButtons\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/draw/Toolbar/DrawButtons.svelte
	[/^\/draw\/Toolbar\/DrawButtons\/?$/, [c[0], c[7]], [c[1]]],

	// src/routes/draw/Toolbar/EditButtons.svelte
	[/^\/draw\/Toolbar\/EditButtons\/?$/, [c[0], c[8]], [c[1]]],

	// src/routes/draw/Toolbar/InfoBox.svelte
	[/^\/draw\/Toolbar\/InfoBox\/?$/, [c[0], c[9]], [c[1]]],

	// src/routes/draw/css/mapbox-gl.css
	[/^\/draw\/css\/mapbox-gl\/?$/],

	// src/routes/draw/css/normalize.css
	[/^\/draw\/css\/normalize\/?$/],

	// src/routes/test/[...path].js
	[/^\/test(?:\/(.*))?$/]
];

export const fallback = [c[0](), c[1]()];