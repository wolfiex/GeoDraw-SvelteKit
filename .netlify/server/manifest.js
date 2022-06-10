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
  assets: /* @__PURE__ */ new Set([".DS_Store", "css/.DS_Store", "css/style-omt.json", "data/nomis_tables.json", "favicon.ico", "nest/.DS_Store", "nest/robot.txt", "robots.txt"]),
  mimeTypes: { ".json": "application/json", ".ico": "image/vnd.microsoft.icon", ".txt": "text/plain" },
  _: {
    entry: { "file": "start-362ce7a0.js", "js": ["start-362ce7a0.js", "chunks/index-369e6074.js", "chunks/index-3ae34efe.js"], "css": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/10.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/9.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/11.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/6.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/7.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/8.js")))
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
        type: "page",
        id: "draw",
        pattern: /^\/draw\/?$/,
        names: [],
        types: [],
        path: "/draw",
        shadow: null,
        a: [0, 3],
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
        a: [0, 4],
        b: [1]
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
        id: "draw/AreaMap",
        pattern: /^\/draw\/AreaMap\/?$/,
        names: [],
        types: [],
        path: "/draw/AreaMap",
        shadow: null,
        a: [0, 5],
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
        a: [0, 6],
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
        a: [0, 7],
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
        a: [0, 8],
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
        a: [0, 9],
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
        a: [0, 10],
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
        a: [0, 11],
        b: [1]
      },
      {
        type: "endpoint",
        id: "test2/[z]-[x]-[y].pbf",
        pattern: /^\/test2\/([^/]+?)-([^/]+?)-([^/]+?)\.pbf$/,
        names: ["z", "x", "y"],
        types: [null, null, null],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/test2/_z_-_x_-_y_.pbf.js")))
      },
      {
        type: "endpoint",
        id: "test/[...path]",
        pattern: /^\/test(?:\/(.*))?\/?$/,
        names: ["path"],
        types: [null],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/test/_...path_.js")))
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
