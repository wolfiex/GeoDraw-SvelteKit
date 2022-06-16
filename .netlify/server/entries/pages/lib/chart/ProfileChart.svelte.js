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
  default: () => ProfileChart
});
module.exports = __toCommonJS(stdin_exports);
var import_index_12fa369c = require("../../../../chunks/index-12fa369c.js");
var ProfileChart_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => '/* purgecss start ignore */\n\n.bold.svelte-vf344q.svelte-vf344q{\n  font-weight:bold\n}\n\n.brackets.svelte-vf344q.svelte-vf344q::before{\n  content:"("\n}\n\n.brackets.svelte-vf344q.svelte-vf344q::after{\n  content:")"\n}\n\n.bar-group.svelte-vf344q.svelte-vf344q,.x-scale.svelte-vf344q.svelte-vf344q{\n  display:block;\n  position:relative;\n  width:100%\n}\n\n.x-scale.svelte-vf344q.svelte-vf344q{\n  border-top:1px solid #555;\n  font-size:0.9rem\n}\n\n.bar-group.svelte-vf344q>div.svelte-vf344q{\n  position:absolute;\n  height:100%\n}\n\n.x-scale.svelte-vf344q>div.svelte-vf344q{\n  position:absolute;\n  top:0;\n  line-height:normal;\n  padding-top:2px\n}\n\n.bar.svelte-vf344q.svelte-vf344q{\n  background-color:#27A0CC\n}\n\n.marker.svelte-vf344q.svelte-vf344q{\n  border-bottom:2.5px solid black\n}\n\n.marker-vis.svelte-vf344q.svelte-vf344q{\n  border-bottom:2px solid black;\n  transform:translate(0,calc(3px - 0.5rem)) !important\n}\n\nul.legend-block.svelte-vf344q.svelte-vf344q{\n  list-style-type:none;\n  padding:0;\n  margin:0 0 5px 0;\n  min-height:1rem\n}\n\nul.legend-block.svelte-vf344q>li.svelte-vf344q{\n  display:inline-block;\n  margin:0 10px 0 0;\n  padding:0\n}\n\n.legend-vis.svelte-vf344q.svelte-vf344q{\n  display:inline-block;\n  width:1rem;\n  height:1rem;\n  transform:translate(0,3px)\n}\n\n/* purgecss end ignore */')();
const css = {
  code: '.bold.svelte-vf344q.svelte-vf344q{font-weight:bold}.brackets.svelte-vf344q.svelte-vf344q::before{content:"("}.brackets.svelte-vf344q.svelte-vf344q::after{content:")"}.bar-group.svelte-vf344q.svelte-vf344q,.x-scale.svelte-vf344q.svelte-vf344q{display:block;position:relative;width:100%}.x-scale.svelte-vf344q.svelte-vf344q{border-top:1px solid #555;font-size:0.9rem}.bar-group.svelte-vf344q>div.svelte-vf344q{position:absolute;height:100%}.x-scale.svelte-vf344q>div.svelte-vf344q{position:absolute;top:0;line-height:normal;padding-top:2px}.bar.svelte-vf344q.svelte-vf344q{background-color:#27A0CC}.marker.svelte-vf344q.svelte-vf344q{border-bottom:2.5px solid black}.marker-vis.svelte-vf344q.svelte-vf344q{border-bottom:2px solid black;transform:translate(0,calc(3px - 0.5rem)) !important}ul.legend-block.svelte-vf344q.svelte-vf344q{list-style-type:none;padding:0;margin:0 0 5px 0;min-height:1rem}ul.legend-block.svelte-vf344q>li.svelte-vf344q{display:inline-block;margin:0 10px 0 0;padding:0}.legend-vis.svelte-vf344q.svelte-vf344q{display:inline-block;width:1rem;height:1rem;transform:translate(0,3px)}',
  map: null
};
const ProfileChart = (0, import_index_12fa369c.c)(($$result, $$props, $$bindings, slots) => {
  let xDomain;
  let yDomain;
  let zDomain;
  let yScale;
  let data_stacked;
  let { data } = $$props;
  let { xKey = "category" } = $$props;
  let { yKey = "value" } = $$props;
  let { zKey = "group" } = $$props;
  let { height = 65 } = $$props;
  let { markerWidth = 2.5 } = $$props;
  let { minmax = ["0 years", "80 plus"] } = $$props;
  let { format = (d) => Math.round(d) } = $$props;
  function stackData(data2, key) {
    let data_indexed = {};
    for (const d of data2) {
      if (!data_indexed[d[key]]) {
        data_indexed[d[key]] = { label: d[key], values: [] };
      }
      data_indexed[d[key]].values.push(d);
    }
    let data_stacked2 = [];
    for (const key2 in data_indexed) {
      data_stacked2.push(data_indexed[key2]);
    }
    return data_stacked2;
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.xKey === void 0 && $$bindings.xKey && xKey !== void 0)
    $$bindings.xKey(xKey);
  if ($$props.yKey === void 0 && $$bindings.yKey && yKey !== void 0)
    $$bindings.yKey(yKey);
  if ($$props.zKey === void 0 && $$bindings.zKey && zKey !== void 0)
    $$bindings.zKey(zKey);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.markerWidth === void 0 && $$bindings.markerWidth && markerWidth !== void 0)
    $$bindings.markerWidth(markerWidth);
  if ($$props.minmax === void 0 && $$bindings.minmax && minmax !== void 0)
    $$bindings.minmax(minmax);
  if ($$props.format === void 0 && $$bindings.format && format !== void 0)
    $$bindings.format(format);
  $$result.css.add(css);
  xDomain = data.map((d) => d[xKey]).filter((v, i, a) => a.indexOf(v) === i);
  yDomain = [0, Math.max(...data.map((d) => d[yKey]))];
  zDomain = data.map((d) => d[zKey]).filter((v, i, a) => a.indexOf(v) === i);
  yScale = (value) => Math.abs(value / yDomain[1]) * 100;
  data_stacked = stackData(data, zKey);
  return `<ul class="${"legend-block svelte-vf344q"}">${zDomain[1] ? `${(0, import_index_12fa369c.r)(zDomain, (group, i) => {
    return `<li class="${"svelte-vf344q"}"><div class="${"legend-vis " + (0, import_index_12fa369c.h)(i == 0 ? "bar" : "marker-vis") + " svelte-vf344q"}"${(0, import_index_12fa369c.u)({
      "border-bottom-width": `${i == 0 ? 0 : markerWidth}px`
    })}></div>
		<span class="${(0, import_index_12fa369c.h)((0, import_index_12fa369c.w)(i == 0 ? "bold" : "brackets")) + " svelte-vf344q"}">${(0, import_index_12fa369c.h)(group)}</span>
	</li>`;
  })}` : ``}</ul>

<div class="${"bar-group svelte-vf344q"}"${(0, import_index_12fa369c.u)({ "height": `${height}px` })}>${(0, import_index_12fa369c.r)(data_stacked, (stack, i) => {
    return `${i == 0 ? `${(0, import_index_12fa369c.r)(stack.values, (d, j) => {
      return `<div class="${"bar svelte-vf344q"}"${(0, import_index_12fa369c.u)({
        "top": `${100 - yScale(d[yKey])}%`,
        "height": `${yScale(d[yKey])}%`,
        "left": `${j / xDomain.length * 100}%`,
        "width": `calc(${1 / xDomain.length * 100}% + 0.2px)`
      })}></div>`;
    })}` : `${(0, import_index_12fa369c.r)(stack.values, (d, j) => {
      return `<div class="${"marker svelte-vf344q"}"${(0, import_index_12fa369c.u)({
        "bottom": `calc(${yScale(d[yKey])}% - ${markerWidth / 2}px)`,
        "height": `0px`,
        "left": `${j / xDomain.length * 100}%`,
        "width": `${1 / xDomain.length * 100}%`,
        "border-bottom-width": `${markerWidth}px`
      })}></div>`;
    })}`}`;
  })}</div>

<div class="${"x-scale svelte-vf344q"}"${(0, import_index_12fa369c.u)({ "height": `1rem` })}><div class="${"svelte-vf344q"}"${(0, import_index_12fa369c.u)({ "left": 0 })}>${(0, import_index_12fa369c.h)(minmax[0])}</div>
	<div class="${"svelte-vf344q"}"${(0, import_index_12fa369c.u)({ "right": 0 })}>${(0, import_index_12fa369c.h)(minmax[1])}</div>
</div>`;
});
