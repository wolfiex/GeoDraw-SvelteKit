var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Profile
});
module.exports = __toCommonJS(stdin_exports);
var import_index_12fa369c = require("../../../chunks/index-12fa369c.js");
var import_pym = require("pym.js");
var import_d3_format = require("d3-format");
var import_d3_dsv = require("d3-dsv");
var import_d3_geo = require("d3-geo");
var import_d3_tile = require("d3-tile");
const getStores = () => {
  const stores = (0, import_index_12fa369c.i)("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var MapStatic_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\n.svg-container.svelte-am2o7f,svg.svelte-am2o7f{\n  width:100%;\n  height:100%;\n  margin:0;\n  padding:0\n}\n\n/* purgecss end ignore */")();
var BarChart_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => '/* purgecss start ignore */\n\n.label-group.svelte-1ri9pb8.svelte-1ri9pb8{\n  margin:4px 0 1px 0;\n  padding:0;\n  line-height:1.2;\n  font-size:0.9rem\n}\n\n.bold.svelte-1ri9pb8.svelte-1ri9pb8{\n  font-weight:bold\n}\n\n.sml.svelte-1ri9pb8.svelte-1ri9pb8{\n  margin-left:3px;\n  font-size:.85rem\n}\n\n.brackets.svelte-1ri9pb8.svelte-1ri9pb8::before{\n  content:"("\n}\n\n.brackets.svelte-1ri9pb8.svelte-1ri9pb8::after{\n  content:")"\n}\n\n.bar-group.svelte-1ri9pb8.svelte-1ri9pb8{\n  display:block;\n  position:relative;\n  width:100%\n}\n\n.bar-group.svelte-1ri9pb8>div.svelte-1ri9pb8{\n  position:absolute;\n  height:100%;\n  top:0\n}\n\n.bar.svelte-1ri9pb8.svelte-1ri9pb8{\n  background-color:#27A0CC\n}\n\n.marker.svelte-1ri9pb8.svelte-1ri9pb8{\n  border-left-color:black;\n  border-left-style:solid\n}\n\nul.legend-block.svelte-1ri9pb8.svelte-1ri9pb8{\n  list-style-type:none;\n  padding:0;\n  margin:0 0 5px 0\n}\n\nul.legend-block.svelte-1ri9pb8>li.svelte-1ri9pb8{\n  display:inline-block;\n  margin:0 10px 0 0;\n  padding:0\n}\n\n.legend-vis.svelte-1ri9pb8.svelte-1ri9pb8{\n  display:inline-block;\n  transform:translate(0,3px)\n}\n\n/* purgecss end ignore */')();
var NumBlock_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\n.num-big.svelte-19zwnt3.svelte-19zwnt3{\n  display:block;\n  font-size:3rem;\n  font-weight:bold;\n  line-height:1.2\n}\n\n.num-suffix.svelte-19zwnt3.svelte-19zwnt3{\n  display:block;\n  max-width:100%;\n  margin-left:2px\n}\n\n.num-desc.svelte-19zwnt3.svelte-19zwnt3{\n  display:block;\n  margin-top:10px;\n  color:#666\n}\n\n.num-desc.svelte-19zwnt3>mark.svelte-19zwnt3{\n  background-color:lightgrey;\n  font-weight:bold;\n  padding:0 3px\n}\n\n/* purgecss end ignore */")();
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\nh1.svelte-bp85os{\n  font-size:1.8rem;\n  margin:0 0 -12px  0;\n  font-weight:bold\n}\n\n.footnote.svelte-bp85os{\n  margin-bottom:-20px\n}\n\n/* purgecss end ignore */")();
const css = {
  code: "h1.svelte-bp85os{font-size:1.8rem;margin:0 0 -12px  0;font-weight:bold}.footnote.svelte-bp85os{margin-bottom:-20px}",
  map: null
};
const Profile = (0, import_index_12fa369c.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_12fa369c.o)(page, (value) => value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${``}`;
});
