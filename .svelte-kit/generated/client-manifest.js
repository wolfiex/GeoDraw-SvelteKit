export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/__layout-reset.svelte"),
	() => import("../../src/routes/embed/__layout@reset.svelte"),
	() => import("../../src/routes/tables/__layout@reset.svelte"),
	() => import("../../src/routes/LibLoader.svelte"),
	() => import("../../src/routes/OpenGraph.svelte"),
	() => import("../../src/routes/build/ignore__layout@reset.svelte"),
	() => import("../../src/routes/build/index.svelte"),
	() => import("../../src/routes/draw/<InfoBox open={$selected.length < 2}>.svelte"),
	() => import("../../src/routes/draw/AreaMap.svelte"),
	() => import("../../src/routes/draw/Toolbar/DrawButtons.svelte"),
	() => import("../../src/routes/draw/Toolbar/EditButtons.svelte"),
	() => import("../../src/routes/draw/Toolbar/InfoBox.svelte"),
	() => import("../../src/routes/draw/Toolbar/ItemAccordion.svelte"),
	() => import("../../src/routes/draw/Toolbar/PostcodeSearch.svelte"),
	() => import("../../src/routes/draw/Toolbar/ProgressButtons.svelte"),
	() => import("../../src/routes/draw/ignore__layout@reset.svelte"),
	() => import("../../src/routes/draw/index.svelte"),
	() => import("../../src/routes/draw/old_layout.svelte"),
	() => import("../../src/routes/embed/index.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/lib/chart/BarChart.svelte"),
	() => import("../../src/routes/lib/chart/NumBlock.svelte"),
	() => import("../../src/routes/lib/chart/ProfileChart.svelte"),
	() => import("../../src/routes/lib/layout/Article.svelte"),
	() => import("../../src/routes/lib/layout/Banner.svelte"),
	() => import("../../src/routes/lib/layout/Cards.svelte"),
	() => import("../../src/routes/lib/layout/Content.svelte"),
	() => import("../../src/routes/lib/layout/Linkbox.svelte"),
	() => import("../../src/routes/lib/layout/ONSFooter.svelte"),
	() => import("../../src/routes/lib/layout/ONSHeader.svelte"),
	() => import("../../src/routes/lib/layout/Section.svelte"),
	() => import("../../src/routes/lib/ui/ButtonLink.svelte"),
	() => import("../../src/routes/lib/ui/Em.svelte"),
	() => import("../../src/routes/lib/ui/Icon.svelte"),
	() => import("../../src/routes/lib/ui/Select.svelte"),
	() => import("../../src/routes/lib/ui/Toggle.svelte"),
	() => import("../../src/routes/lib/ui/Warning.svelte"),
	() => import("../../src/routes/pbf_viewer.svelte"),
	() => import("../../src/routes/share/LinkPreview.svelte"),
	() => import("../../src/routes/tables/BarChart.svelte"),
	() => import("../../src/routes/tables/MapAreas.svelte"),
	() => import("../../src/routes/tables/index.svelte")
];

export const dictionary = {
	"": [[0, 21], [1]],
	"LibLoader": [[0, 5], [1]],
	"OpenGraph": [[0, 6], [1]],
	"build": [[0, 8], [1]],
	"draw": [[0, 18], [1]],
	"embed": [[2, 3, 20], [1]],
	"pbf_viewer": [[0, 39], [1]],
	"tables": [[2, 4, 43], [1]],
	"build/ignore__layout@reset": [[2, 7], [1]],
	"draw/<InfoBox open={$selected.length < 2}>": [[0, 9], [1]],
	"draw/AreaMap": [[0, 10], [1]],
	"draw/ignore__layout@reset": [[2, 17], [1]],
	"draw/old_layout": [[0, 19], [1]],
	"share/LinkPreview": [[0, 40], [1]],
	"tables/BarChart": [[2, 4, 41], [1]],
	"tables/MapAreas": [[2, 4, 42], [1]],
	"draw/Toolbar/DrawButtons": [[0, 11], [1]],
	"draw/Toolbar/EditButtons": [[0, 12], [1]],
	"draw/Toolbar/InfoBox": [[0, 13], [1]],
	"draw/Toolbar/ItemAccordion": [[0, 14], [1]],
	"draw/Toolbar/PostcodeSearch": [[0, 15], [1]],
	"draw/Toolbar/ProgressButtons": [[0, 16], [1]],
	"lib/chart/BarChart": [[0, 22], [1]],
	"lib/chart/NumBlock": [[0, 23], [1]],
	"lib/chart/ProfileChart": [[0, 24], [1]],
	"lib/layout/Article": [[0, 25], [1]],
	"lib/layout/Banner": [[0, 26], [1]],
	"lib/layout/Cards": [[0, 27], [1]],
	"lib/layout/Content": [[0, 28], [1]],
	"lib/layout/Linkbox": [[0, 29], [1]],
	"lib/layout/ONSFooter": [[0, 30], [1]],
	"lib/layout/ONSHeader": [[0, 31], [1]],
	"lib/layout/Section": [[0, 32], [1]],
	"lib/ui/ButtonLink": [[0, 33], [1]],
	"lib/ui/Em": [[0, 34], [1]],
	"lib/ui/Icon": [[0, 35], [1]],
	"lib/ui/Select": [[0, 36], [1]],
	"lib/ui/Toggle": [[0, 37], [1]],
	"lib/ui/Warning": [[0, 38], [1]]
};