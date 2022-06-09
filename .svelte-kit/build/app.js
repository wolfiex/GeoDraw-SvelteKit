import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"/favicon.ico\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t" + head + "\n\t</head>\n\t<body>\n\t\t<div id=\"svelte\">" + body + "</div>\n\t</body>\n</html>\n";

let options = null;

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: "/./_app/start-4f672076.js",
			css: ["/./_app/assets/start-8077b9bf.css","/./_app/assets/vendor-a8c7bf42.css"],
			js: ["/./_app/start-4f672076.js","/./_app/chunks/vendor-718580ba.js"]
		},
		fetched: undefined,
		floc: true,
		get_component_path: id => "/./_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: error => {
			console.error(error.stack);
			error.stack = options.get_stack(error);
		},
		hooks: get_hooks(user_hooks),
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		read: settings.read,
		root,
		router: true,
		ssr: true,
		target: null,
		template,
		trailing_slash: "never"
	};
}

const d = decodeURIComponent;
const empty = () => ({});

const manifest = {
	assets: [{"file":"css/style-omt.json","size":32886,"type":"application/json"},{"file":"favicon.ico","size":1150,"type":"image/vnd.microsoft.icon"},{"file":"nest/robot.txt","size":67,"type":"text/plain"},{"file":"robots.txt","size":67,"type":"text/plain"}],
	layout: "src/routes/__layout.svelte",
	error: ".svelte-kit/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'endpoint',
						pattern: /^\/cors_endpoint(?:\/(.*))?$/,
						params: (m) => ({ tile: d(m[1] || '')}),
						load: () => import("../../src/routes/cors_endpoint/[...tile].js")
					},
		{
						type: 'page',
						pattern: /^\/pbf_viewer\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/pbf_viewer.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'endpoint',
						pattern: /^\/test2\/([^/]+?)-([^/]+?)-([^/]+?)\.pbf$/,
						params: (m) => ({ z: d(m[1]), x: d(m[2]), y: d(m[3])}),
						load: () => import("../../src/routes/test2/[z]-[x]-[y].pbf.js")
					},
		{
						type: 'page',
						pattern: /^\/draw\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/draw/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'endpoint',
						pattern: /^\/draw\/mapstore\/?$/,
						params: empty,
						load: () => import("../../src/routes/draw/mapstore.js")
					},
		{
						type: 'page',
						pattern: /^\/draw\/AreaMap\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/draw/AreaMap.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'endpoint',
						pattern: /^\/draw\/MapDraw\/?$/,
						params: empty,
						load: () => import("../../src/routes/draw/MapDraw.js")
					},
		{
						type: 'page',
						pattern: /^\/draw\/Toolbar\/ProgressButtons\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/draw/Toolbar/ProgressButtons.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/draw\/Toolbar\/PostcodeSearch\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/draw/Toolbar/PostcodeSearch.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/draw\/Toolbar\/ItemAccordion\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/draw/Toolbar/ItemAccordion.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/draw\/Toolbar\/DrawButtons\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/draw/Toolbar/DrawButtons.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/draw\/Toolbar\/EditButtons\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/draw/Toolbar/EditButtons.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/draw\/Toolbar\/InfoBox\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/draw/Toolbar/InfoBox.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'endpoint',
						pattern: /^\/draw\/css\/mapbox-gl\/?$/,
						params: empty,
						load: () => import("../../src/routes/draw/css/mapbox-gl.css")
					},
		{
						type: 'endpoint',
						pattern: /^\/draw\/css\/normalize\/?$/,
						params: empty,
						load: () => import("../../src/routes/draw/css/normalize.css")
					},
		{
						type: 'endpoint',
						pattern: /^\/test(?:\/(.*))?$/,
						params: (m) => ({ path: d(m[1] || '')}),
						load: () => import("../../src/routes/test/[...path].js")
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, render }) => render(request))
});

const module_lookup = {
	"src/routes/__layout.svelte": () => import("../../src/routes/__layout.svelte"),".svelte-kit/build/components/error.svelte": () => import("./components/error.svelte"),"src/routes/index.svelte": () => import("../../src/routes/index.svelte"),"src/routes/pbf_viewer.svelte": () => import("../../src/routes/pbf_viewer.svelte"),"src/routes/draw/index.svelte": () => import("../../src/routes/draw/index.svelte"),"src/routes/draw/AreaMap.svelte": () => import("../../src/routes/draw/AreaMap.svelte"),"src/routes/draw/Toolbar/ProgressButtons.svelte": () => import("../../src/routes/draw/Toolbar/ProgressButtons.svelte"),"src/routes/draw/Toolbar/PostcodeSearch.svelte": () => import("../../src/routes/draw/Toolbar/PostcodeSearch.svelte"),"src/routes/draw/Toolbar/ItemAccordion.svelte": () => import("../../src/routes/draw/Toolbar/ItemAccordion.svelte"),"src/routes/draw/Toolbar/DrawButtons.svelte": () => import("../../src/routes/draw/Toolbar/DrawButtons.svelte"),"src/routes/draw/Toolbar/EditButtons.svelte": () => import("../../src/routes/draw/Toolbar/EditButtons.svelte"),"src/routes/draw/Toolbar/InfoBox.svelte": () => import("../../src/routes/draw/Toolbar/InfoBox.svelte")
};

const metadata_lookup = {"src/routes/__layout.svelte":{"entry":"/./_app/pages/__layout.svelte-5d3e5391.js","css":["/./_app/assets/pages/__layout.svelte-1975d51c.css","/./_app/assets/g10-4f8977ce.css","/./_app/assets/vendor-a8c7bf42.css"],"js":["/./_app/pages/__layout.svelte-5d3e5391.js","/./_app/chunks/vendor-718580ba.js"],"styles":null},".svelte-kit/build/components/error.svelte":{"entry":"/./_app/error.svelte-88201dd1.js","css":["/./_app/assets/vendor-a8c7bf42.css"],"js":["/./_app/error.svelte-88201dd1.js","/./_app/chunks/vendor-718580ba.js"],"styles":null},"src/routes/index.svelte":{"entry":"/./_app/pages/index.svelte-79c7cd6a.js","css":["/./_app/assets/vendor-a8c7bf42.css"],"js":["/./_app/pages/index.svelte-79c7cd6a.js","/./_app/chunks/vendor-718580ba.js"],"styles":null},"src/routes/pbf_viewer.svelte":{"entry":"/./_app/pages/pbf_viewer.svelte-b7ae42cf.js","css":["/./_app/assets/pages/pbf_viewer.svelte-ee45b86b.css","/./_app/assets/vendor-a8c7bf42.css"],"js":["/./_app/pages/pbf_viewer.svelte-b7ae42cf.js","/./_app/chunks/vendor-718580ba.js"],"styles":null},"src/routes/draw/index.svelte":{"entry":"/./_app/pages/draw/index.svelte-c766a812.js","css":["/./_app/assets/pages/draw/index.svelte-395a9ae6.css","/./_app/assets/g10-4f8977ce.css","/./_app/assets/vendor-a8c7bf42.css","/./_app/assets/pages/draw/Toolbar/DrawButtons.svelte-103c4406.css","/./_app/assets/pages/draw/Toolbar/InfoBox.svelte-e78a4d50.css","/./_app/assets/pages/draw/Toolbar/ItemAccordion.svelte-599b20c1.css","/./_app/assets/AreaMap-074a9db7.css"],"js":["/./_app/pages/draw/index.svelte-c766a812.js","/./_app/chunks/vendor-718580ba.js","/./_app/pages/draw/Toolbar/DrawButtons.svelte-46cc93ae.js","/./_app/chunks/mapstore-48813ed6.js","/./_app/pages/draw/Toolbar/EditButtons.svelte-f9c48a9e.js","/./_app/pages/draw/Toolbar/ProgressButtons.svelte-0ba6bc3e.js","/./_app/pages/draw/Toolbar/InfoBox.svelte-3efea2c1.js","/./_app/pages/draw/Toolbar/PostcodeSearch.svelte-86de8a69.js","/./_app/pages/draw/Toolbar/ItemAccordion.svelte-9a0c73ad.js","/./_app/chunks/AreaMap-1372633a.js"],"styles":null},"src/routes/draw/AreaMap.svelte":{"entry":"/./_app/pages/draw/AreaMap.svelte-ee2e1826.js","css":["/./_app/assets/vendor-a8c7bf42.css","/./_app/assets/AreaMap-074a9db7.css"],"js":["/./_app/pages/draw/AreaMap.svelte-ee2e1826.js","/./_app/chunks/vendor-718580ba.js","/./_app/chunks/AreaMap-1372633a.js","/./_app/chunks/mapstore-48813ed6.js"],"styles":null},"src/routes/draw/Toolbar/ProgressButtons.svelte":{"entry":"/./_app/pages/draw/Toolbar/ProgressButtons.svelte-0ba6bc3e.js","css":["/./_app/assets/vendor-a8c7bf42.css"],"js":["/./_app/pages/draw/Toolbar/ProgressButtons.svelte-0ba6bc3e.js","/./_app/chunks/vendor-718580ba.js","/./_app/chunks/mapstore-48813ed6.js"],"styles":null},"src/routes/draw/Toolbar/PostcodeSearch.svelte":{"entry":"/./_app/pages/draw/Toolbar/PostcodeSearch.svelte-86de8a69.js","css":["/./_app/assets/vendor-a8c7bf42.css"],"js":["/./_app/pages/draw/Toolbar/PostcodeSearch.svelte-86de8a69.js","/./_app/chunks/vendor-718580ba.js","/./_app/chunks/mapstore-48813ed6.js"],"styles":null},"src/routes/draw/Toolbar/ItemAccordion.svelte":{"entry":"/./_app/pages/draw/Toolbar/ItemAccordion.svelte-9a0c73ad.js","css":["/./_app/assets/pages/draw/Toolbar/ItemAccordion.svelte-599b20c1.css","/./_app/assets/vendor-a8c7bf42.css"],"js":["/./_app/pages/draw/Toolbar/ItemAccordion.svelte-9a0c73ad.js","/./_app/chunks/vendor-718580ba.js"],"styles":null},"src/routes/draw/Toolbar/DrawButtons.svelte":{"entry":"/./_app/pages/draw/Toolbar/DrawButtons.svelte-46cc93ae.js","css":["/./_app/assets/pages/draw/Toolbar/DrawButtons.svelte-103c4406.css","/./_app/assets/vendor-a8c7bf42.css"],"js":["/./_app/pages/draw/Toolbar/DrawButtons.svelte-46cc93ae.js","/./_app/chunks/vendor-718580ba.js","/./_app/chunks/mapstore-48813ed6.js"],"styles":null},"src/routes/draw/Toolbar/EditButtons.svelte":{"entry":"/./_app/pages/draw/Toolbar/EditButtons.svelte-f9c48a9e.js","css":["/./_app/assets/vendor-a8c7bf42.css"],"js":["/./_app/pages/draw/Toolbar/EditButtons.svelte-f9c48a9e.js","/./_app/chunks/vendor-718580ba.js","/./_app/chunks/mapstore-48813ed6.js"],"styles":null},"src/routes/draw/Toolbar/InfoBox.svelte":{"entry":"/./_app/pages/draw/Toolbar/InfoBox.svelte-3efea2c1.js","css":["/./_app/assets/pages/draw/Toolbar/InfoBox.svelte-e78a4d50.css","/./_app/assets/vendor-a8c7bf42.css"],"js":["/./_app/pages/draw/Toolbar/InfoBox.svelte-3efea2c1.js","/./_app/chunks/vendor-718580ba.js"],"styles":null}};

async function load_component(file) {
	return {
		module: await module_lookup[file](),
		...metadata_lookup[file]
	};
}

init({ paths: {"base":"","assets":"/."} });

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}