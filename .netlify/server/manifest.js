var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set([".DS_Store", "css/.DS_Store", "css/style-omt.json", "data/nomis_tables.json", "data/places.csv", "favicon.ico", "nest/.DS_Store", "nest/robot.txt", "robots.txt"]),
  mimeTypes: { ".json": "application/json", ".csv": "text/csv", ".ico": "image/vnd.microsoft.icon", ".txt": "text/plain" },
  _: {
    entry: { "file": "start-b4069112.js", "js": ["start-b4069112.js", "chunks/index-c4b4a3b1.js", "chunks/index-49558f13.js", "chunks/paths-396f020f.js", "chunks/preload-helper-60cab3ee.js", "chunks/singletons-d1fb5791.js"], "css": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/20.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/6.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/8.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/17.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/19.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/38.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/42.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/7.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/9.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/16.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/18.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/39.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/40.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/41.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/10.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/11.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/12.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/13.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/14.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/15.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/21.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/22.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/23.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/24.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/25.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/26.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/27.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/28.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/29.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/30.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/31.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/32.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/33.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/34.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/35.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/36.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/37.js")))
    ],
    routes: [
      {
        type: "page",
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      },
      {
        type: "endpoint",
        id: "examplehash",
        pattern: /^\/examplehash\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/examplehash.js")))
      },
      {
        type: "endpoint",
        id: "binary",
        pattern: /^\/binary\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/binary.js")))
      },
      {
        type: "page",
        id: "LibLoader",
        pattern: /^\/LibLoader\/?$/,
        names: [],
        types: [],
        path: "/LibLoader",
        shadow: null,
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        id: "OpenGraph",
        pattern: /^\/OpenGraph\/?$/,
        names: [],
        types: [],
        path: "/OpenGraph",
        shadow: null,
        a: [0, 4],
        b: [1]
      },
      {
        type: "page",
        id: "build",
        pattern: /^\/build\/?$/,
        names: [],
        types: [],
        path: "/build",
        shadow: null,
        a: [0, 5],
        b: [1]
      },
      {
        type: "page",
        id: "draw",
        pattern: /^\/draw\/?$/,
        names: [],
        types: [],
        path: "/draw",
        shadow: null,
        a: [0, 6],
        b: [1]
      },
      {
        type: "page",
        id: "embed",
        pattern: /^\/embed\/?$/,
        names: [],
        types: [],
        path: "/embed",
        shadow: null,
        a: [7, 8, 9],
        b: [1]
      },
      {
        type: "page",
        id: "pbf_viewer",
        pattern: /^\/pbf_viewer\/?$/,
        names: [],
        types: [],
        path: "/pbf_viewer",
        shadow: null,
        a: [0, 10],
        b: [1]
      },
      {
        type: "page",
        id: "tables",
        pattern: /^\/tables\/?$/,
        names: [],
        types: [],
        path: "/tables",
        shadow: null,
        a: [7, 11, 12],
        b: [1]
      },
      {
        type: "endpoint",
        id: "lib/table_select",
        pattern: /^\/lib\/table_select\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/lib/table_select.js")))
      },
      {
        type: "endpoint",
        id: "lib/selection",
        pattern: /^\/lib\/selection\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/lib/selection.js")))
      },
      {
        type: "endpoint",
        id: "lib/config",
        pattern: /^\/lib\/config\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/lib/config.js")))
      },
      {
        type: "endpoint",
        id: "draw/mapstore",
        pattern: /^\/draw\/mapstore\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/draw/mapstore.js")))
      },
      {
        type: "endpoint",
        id: "draw/MapDraw",
        pattern: /^\/draw\/MapDraw\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/draw/MapDraw.js")))
      },
      {
        type: "page",
        id: "build/ignore__layout@reset",
        pattern: /^\/build\/ignore__layout\/?$/,
        names: [],
        types: [],
        path: "/build/ignore__layout",
        shadow: null,
        a: [7, 13],
        b: [1]
      },
      {
        type: "page",
        id: "draw/AreaMap",
        pattern: /^\/draw\/AreaMap\/?$/,
        names: [],
        types: [],
        path: "/draw/AreaMap",
        shadow: null,
        a: [0, 14],
        b: [1]
      },
      {
        type: "page",
        id: "draw/ignore__layout@reset",
        pattern: /^\/draw\/ignore__layout\/?$/,
        names: [],
        types: [],
        path: "/draw/ignore__layout",
        shadow: null,
        a: [7, 15],
        b: [1]
      },
      {
        type: "page",
        id: "draw/old_layout",
        pattern: /^\/draw\/old_layout\/?$/,
        names: [],
        types: [],
        path: "/draw/old_layout",
        shadow: null,
        a: [0, 16],
        b: [1]
      },
      {
        type: "page",
        id: "share/LinkPreview",
        pattern: /^\/share\/LinkPreview\/?$/,
        names: [],
        types: [],
        path: "/share/LinkPreview",
        shadow: null,
        a: [0, 17],
        b: [1]
      },
      {
        type: "page",
        id: "tables/BarChart",
        pattern: /^\/tables\/BarChart\/?$/,
        names: [],
        types: [],
        path: "/tables/BarChart",
        shadow: null,
        a: [7, 11, 18],
        b: [1]
      },
      {
        type: "page",
        id: "tables/MapAreas",
        pattern: /^\/tables\/MapAreas\/?$/,
        names: [],
        types: [],
        path: "/tables/MapAreas",
        shadow: null,
        a: [7, 11, 19],
        b: [1]
      },
      {
        type: "page",
        id: "draw/Toolbar/DrawButtons",
        pattern: /^\/draw\/Toolbar\/DrawButtons\/?$/,
        names: [],
        types: [],
        path: "/draw/Toolbar/DrawButtons",
        shadow: null,
        a: [0, 20],
        b: [1]
      },
      {
        type: "page",
        id: "draw/Toolbar/EditButtons",
        pattern: /^\/draw\/Toolbar\/EditButtons\/?$/,
        names: [],
        types: [],
        path: "/draw/Toolbar/EditButtons",
        shadow: null,
        a: [0, 21],
        b: [1]
      },
      {
        type: "page",
        id: "draw/Toolbar/InfoBox",
        pattern: /^\/draw\/Toolbar\/InfoBox\/?$/,
        names: [],
        types: [],
        path: "/draw/Toolbar/InfoBox",
        shadow: null,
        a: [0, 22],
        b: [1]
      },
      {
        type: "page",
        id: "draw/Toolbar/ItemAccordion",
        pattern: /^\/draw\/Toolbar\/ItemAccordion\/?$/,
        names: [],
        types: [],
        path: "/draw/Toolbar/ItemAccordion",
        shadow: null,
        a: [0, 23],
        b: [1]
      },
      {
        type: "page",
        id: "draw/Toolbar/PostcodeSearch",
        pattern: /^\/draw\/Toolbar\/PostcodeSearch\/?$/,
        names: [],
        types: [],
        path: "/draw/Toolbar/PostcodeSearch",
        shadow: null,
        a: [0, 24],
        b: [1]
      },
      {
        type: "page",
        id: "draw/Toolbar/ProgressButtons",
        pattern: /^\/draw\/Toolbar\/ProgressButtons\/?$/,
        names: [],
        types: [],
        path: "/draw/Toolbar/ProgressButtons",
        shadow: null,
        a: [0, 25],
        b: [1]
      },
      {
        type: "page",
        id: "lib/chart/BarChart",
        pattern: /^\/lib\/chart\/BarChart\/?$/,
        names: [],
        types: [],
        path: "/lib/chart/BarChart",
        shadow: null,
        a: [0, 26],
        b: [1]
      },
      {
        type: "page",
        id: "lib/chart/NumBlock",
        pattern: /^\/lib\/chart\/NumBlock\/?$/,
        names: [],
        types: [],
        path: "/lib/chart/NumBlock",
        shadow: null,
        a: [0, 27],
        b: [1]
      },
      {
        type: "page",
        id: "lib/chart/ProfileChart",
        pattern: /^\/lib\/chart\/ProfileChart\/?$/,
        names: [],
        types: [],
        path: "/lib/chart/ProfileChart",
        shadow: null,
        a: [0, 28],
        b: [1]
      },
      {
        type: "page",
        id: "lib/layout/Article",
        pattern: /^\/lib\/layout\/Article\/?$/,
        names: [],
        types: [],
        path: "/lib/layout/Article",
        shadow: null,
        a: [0, 29],
        b: [1]
      },
      {
        type: "page",
        id: "lib/layout/Banner",
        pattern: /^\/lib\/layout\/Banner\/?$/,
        names: [],
        types: [],
        path: "/lib/layout/Banner",
        shadow: null,
        a: [0, 30],
        b: [1]
      },
      {
        type: "page",
        id: "lib/layout/Cards",
        pattern: /^\/lib\/layout\/Cards\/?$/,
        names: [],
        types: [],
        path: "/lib/layout/Cards",
        shadow: null,
        a: [0, 31],
        b: [1]
      },
      {
        type: "page",
        id: "lib/layout/Content",
        pattern: /^\/lib\/layout\/Content\/?$/,
        names: [],
        types: [],
        path: "/lib/layout/Content",
        shadow: null,
        a: [0, 32],
        b: [1]
      },
      {
        type: "page",
        id: "lib/layout/Linkbox",
        pattern: /^\/lib\/layout\/Linkbox\/?$/,
        names: [],
        types: [],
        path: "/lib/layout/Linkbox",
        shadow: null,
        a: [0, 33],
        b: [1]
      },
      {
        type: "page",
        id: "lib/layout/ONSFooter",
        pattern: /^\/lib\/layout\/ONSFooter\/?$/,
        names: [],
        types: [],
        path: "/lib/layout/ONSFooter",
        shadow: null,
        a: [0, 34],
        b: [1]
      },
      {
        type: "page",
        id: "lib/layout/ONSHeader",
        pattern: /^\/lib\/layout\/ONSHeader\/?$/,
        names: [],
        types: [],
        path: "/lib/layout/ONSHeader",
        shadow: null,
        a: [0, 35],
        b: [1]
      },
      {
        type: "page",
        id: "lib/layout/Section",
        pattern: /^\/lib\/layout\/Section\/?$/,
        names: [],
        types: [],
        path: "/lib/layout/Section",
        shadow: null,
        a: [0, 36],
        b: [1]
      },
      {
        type: "page",
        id: "lib/ui/ButtonLink",
        pattern: /^\/lib\/ui\/ButtonLink\/?$/,
        names: [],
        types: [],
        path: "/lib/ui/ButtonLink",
        shadow: null,
        a: [0, 37],
        b: [1]
      },
      {
        type: "page",
        id: "lib/ui/Em",
        pattern: /^\/lib\/ui\/Em\/?$/,
        names: [],
        types: [],
        path: "/lib/ui/Em",
        shadow: null,
        a: [0, 38],
        b: [1]
      },
      {
        type: "page",
        id: "lib/ui/Icon",
        pattern: /^\/lib\/ui\/Icon\/?$/,
        names: [],
        types: [],
        path: "/lib/ui/Icon",
        shadow: null,
        a: [0, 39],
        b: [1]
      },
      {
        type: "page",
        id: "lib/ui/Select",
        pattern: /^\/lib\/ui\/Select\/?$/,
        names: [],
        types: [],
        path: "/lib/ui/Select",
        shadow: null,
        a: [0, 40],
        b: [1]
      },
      {
        type: "page",
        id: "lib/ui/Toggle",
        pattern: /^\/lib\/ui\/Toggle\/?$/,
        names: [],
        types: [],
        path: "/lib/ui/Toggle",
        shadow: null,
        a: [0, 41],
        b: [1]
      },
      {
        type: "page",
        id: "lib/ui/Warning",
        pattern: /^\/lib\/ui\/Warning\/?$/,
        names: [],
        types: [],
        path: "/lib/ui/Warning",
        shadow: null,
        a: [0, 42],
        b: [1]
      },
      {
        type: "endpoint",
        id: "cors_endpoint/[...tile]",
        pattern: /^\/cors_endpoint(?:\/(.*))?\/?$/,
        names: ["tile"],
        types: [null],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/cors_endpoint/_...tile_.js")))
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
