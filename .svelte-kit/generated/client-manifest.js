export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/draw/AreaMap.svelte"),
	() => import("../../src/routes/draw/Toolbar/DrawButtons.svelte"),
	() => import("../../src/routes/draw/Toolbar/EditButtons.svelte"),
	() => import("../../src/routes/draw/Toolbar/InfoBox.svelte"),
	() => import("../../src/routes/draw/Toolbar/ItemAccordion.svelte"),
	() => import("../../src/routes/draw/Toolbar/PostcodeSearch.svelte"),
	() => import("../../src/routes/draw/Toolbar/ProgressButtons.svelte"),
	() => import("../../src/routes/draw/index.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/pbf_viewer.svelte")
];

export const dictionary = {
	"": [[0, 10], [1]],
	"draw": [[0, 9], [1]],
	"pbf_viewer": [[0, 11], [1]],
	"draw/AreaMap": [[0, 2], [1]],
	"draw/Toolbar/DrawButtons": [[0, 3], [1]],
	"draw/Toolbar/EditButtons": [[0, 4], [1]],
	"draw/Toolbar/InfoBox": [[0, 5], [1]],
	"draw/Toolbar/ItemAccordion": [[0, 6], [1]],
	"draw/Toolbar/PostcodeSearch": [[0, 7], [1]],
	"draw/Toolbar/ProgressButtons": [[0, 8], [1]]
};