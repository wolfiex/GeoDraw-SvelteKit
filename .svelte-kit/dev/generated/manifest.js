const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/plotcomponent/index.svelte"),
	() => import("../../../src/routes/viewresults/index.svelte"),
	() => import("../../../src/routes/components/DSPanel.svelte"),
	() => import("../../../src/routes/components/Loader.svelte"),
	() => import("../../../src/routes/maplite/index.svelteds.svelte"),
	() => import("../../../src/routes/maplite/AreaMap.svelteds.svelte"),
	() => import("../../../src/routes/maplite/App.svelteds.svelte"),
	() => import("../../../src/routes/sqltest/index.svelte"),
	() => import("../../../src/routes/util_db.svelte"),
	() => import("../../../src/routes/datano.svelte"),
	() => import("../../../src/routes/intro/index.svelte"),
	() => import("../../../src/routes/intro/AreaMap.svelte"),
	() => import("../../../src/routes/data/index.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/plotcomponent/index.svelte
	[/^\/plotcomponent\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/viewresults/index.svelte
	[/^\/viewresults\/?$/, [c[0], c[4]], [c[1]]],

	,

	// src/routes/components/DSPanel.svelte
	[/^\/components\/DSPanel\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/components/Loader.svelte
	[/^\/components\/Loader\/?$/, [c[0], c[6]], [c[1]]],

	,

	,

	,

	,

	,

	,

	,

	,

	,

	,

	,

	,

	// src/routes/maplite/index.svelteds.svelte
	[/^\/maplite\.svelteds\/?$/, [c[0], c[7]], [c[1]]],

	,

	// src/routes/maplite/AreaMap.svelteds.svelte
	[/^\/maplite\/AreaMap\.svelteds\/?$/, [c[0], c[8]], [c[1]]],

	// src/routes/maplite/App.svelteds.svelte
	[/^\/maplite\/App\.svelteds\/?$/, [c[0], c[9]], [c[1]]],

	,

	,

	,

	,

	// src/routes/sqltest/index.svelte
	[/^\/sqltest\/?$/, [c[0], c[10]], [c[1]]],

	,

	,

	// src/routes/util_db.svelte
	[/^\/util_db\/?$/, [c[0], c[11]], [c[1]]],

	// src/routes/datano.svelte
	[/^\/datano\/?$/, [c[0], c[12]], [c[1]]],

	// src/routes/intro/index.svelte
	[/^\/intro\/?$/, [c[0], c[13]], [c[1]]],

	,

	,

	,

	// src/routes/intro/AreaMap.svelte
	[/^\/intro\/AreaMap\/?$/, [c[0], c[14]], [c[1]]],

	,

	,

	,

	// src/routes/data/index.svelte
	[/^\/data\/?$/, [c[0], c[15]], [c[1]]],

	,

	,

	
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];