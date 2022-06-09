const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set([".DS_Store","css/.DS_Store","css/style-omt.json","data/nomis_tables.json","favicon.ico","nest/.DS_Store","nest/robot.txt","robots.txt"]),
	mimeTypes: {".json":"application/json",".ico":"image/vnd.microsoft.icon",".txt":"text/plain"},
	_: {
		entry: {"file":"start-d2eada7b.js","js":["start-d2eada7b.js","chunks/index-369e6074.js","chunks/index-3ae34efe.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/10.js')),
			() => Promise.resolve().then(() => require('../server/nodes/9.js')),
			() => Promise.resolve().then(() => require('../server/nodes/11.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js')),
			() => Promise.resolve().then(() => require('../server/nodes/8.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "draw",
				pattern: /^\/draw\/?$/,
				names: [],
				types: [],
				path: "/draw",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "pbf_viewer",
				pattern: /^\/pbf_viewer\/?$/,
				names: [],
				types: [],
				path: "/pbf_viewer",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "draw/mapstore",
				pattern: /^\/draw\/mapstore\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/draw/mapstore.js'))
			},
			{
				type: 'endpoint',
				id: "draw/MapDraw",
				pattern: /^\/draw\/MapDraw\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/draw/MapDraw.js'))
			},
			{
				type: 'page',
				id: "draw/AreaMap",
				pattern: /^\/draw\/AreaMap\/?$/,
				names: [],
				types: [],
				path: "/draw/AreaMap",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "draw/Toolbar/DrawButtons",
				pattern: /^\/draw\/Toolbar\/DrawButtons\/?$/,
				names: [],
				types: [],
				path: "/draw/Toolbar/DrawButtons",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "draw/Toolbar/EditButtons",
				pattern: /^\/draw\/Toolbar\/EditButtons\/?$/,
				names: [],
				types: [],
				path: "/draw/Toolbar/EditButtons",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				id: "draw/Toolbar/InfoBox",
				pattern: /^\/draw\/Toolbar\/InfoBox\/?$/,
				names: [],
				types: [],
				path: "/draw/Toolbar/InfoBox",
				shadow: null,
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				id: "draw/Toolbar/ItemAccordion",
				pattern: /^\/draw\/Toolbar\/ItemAccordion\/?$/,
				names: [],
				types: [],
				path: "/draw/Toolbar/ItemAccordion",
				shadow: null,
				a: [0,9],
				b: [1]
			},
			{
				type: 'page',
				id: "draw/Toolbar/PostcodeSearch",
				pattern: /^\/draw\/Toolbar\/PostcodeSearch\/?$/,
				names: [],
				types: [],
				path: "/draw/Toolbar/PostcodeSearch",
				shadow: null,
				a: [0,10],
				b: [1]
			},
			{
				type: 'page',
				id: "draw/Toolbar/ProgressButtons",
				pattern: /^\/draw\/Toolbar\/ProgressButtons\/?$/,
				names: [],
				types: [],
				path: "/draw/Toolbar/ProgressButtons",
				shadow: null,
				a: [0,11],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "test2/[z]-[x]-[y].pbf",
				pattern: /^\/test2\/([^/]+?)-([^/]+?)-([^/]+?)\.pbf$/,
				names: ["z","x","y"],
				types: [null,null,null],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/test2/_z_-_x_-_y_.pbf.js'))
			},
			{
				type: 'endpoint',
				id: "test/[...path]",
				pattern: /^\/test(?:\/(.*))?\/?$/,
				names: ["path"],
				types: [null],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/test/_...path_.js'))
			},
			{
				type: 'endpoint',
				id: "cors_endpoint/[...tile]",
				pattern: /^\/cors_endpoint(?:\/(.*))?\/?$/,
				names: ["tile"],
				types: [null],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/cors_endpoint/_...tile_.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
