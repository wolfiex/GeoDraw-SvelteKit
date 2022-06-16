import { c as create_ssr_component, i as each, e as escape, f as add_styles, r as null_to_empty } from "../../../chunks/index-f909a211.js";
var BarChart_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => '/* purgecss start ignore */\n\n.label-group.svelte-1ri9pb8.svelte-1ri9pb8{\n  margin:4px 0 1px 0;\n  padding:0;\n  line-height:1.2;\n  font-size:0.9rem\n}\n\n.bold.svelte-1ri9pb8.svelte-1ri9pb8{\n  font-weight:bold\n}\n\n.sml.svelte-1ri9pb8.svelte-1ri9pb8{\n  margin-left:3px;\n  font-size:.85rem\n}\n\n.brackets.svelte-1ri9pb8.svelte-1ri9pb8::before{\n  content:"("\n}\n\n.brackets.svelte-1ri9pb8.svelte-1ri9pb8::after{\n  content:")"\n}\n\n.bar-group.svelte-1ri9pb8.svelte-1ri9pb8{\n  display:block;\n  position:relative;\n  width:100%\n}\n\n.bar-group.svelte-1ri9pb8>div.svelte-1ri9pb8{\n  position:absolute;\n  height:100%;\n  top:0\n}\n\n.bar.svelte-1ri9pb8.svelte-1ri9pb8{\n  background-color:#27A0CC\n}\n\n.marker.svelte-1ri9pb8.svelte-1ri9pb8{\n  border-left-color:black;\n  border-left-style:solid\n}\n\nul.legend-block.svelte-1ri9pb8.svelte-1ri9pb8{\n  list-style-type:none;\n  padding:0;\n  margin:0 0 5px 0\n}\n\nul.legend-block.svelte-1ri9pb8>li.svelte-1ri9pb8{\n  display:inline-block;\n  margin:0 10px 0 0;\n  padding:0\n}\n\n.legend-vis.svelte-1ri9pb8.svelte-1ri9pb8{\n  display:inline-block;\n  transform:translate(0,3px)\n}\n\n/* purgecss end ignore */')();
const css = {
  code: '.label-group.svelte-1ri9pb8.svelte-1ri9pb8{margin:4px 0 1px 0;padding:0;line-height:1.2;font-size:0.9rem}.bold.svelte-1ri9pb8.svelte-1ri9pb8{font-weight:bold}.sml.svelte-1ri9pb8.svelte-1ri9pb8{margin-left:3px;font-size:.85rem}.brackets.svelte-1ri9pb8.svelte-1ri9pb8::before{content:"("}.brackets.svelte-1ri9pb8.svelte-1ri9pb8::after{content:")"}.bar-group.svelte-1ri9pb8.svelte-1ri9pb8{display:block;position:relative;width:100%}.bar-group.svelte-1ri9pb8>div.svelte-1ri9pb8{position:absolute;height:100%;top:0}.bar.svelte-1ri9pb8.svelte-1ri9pb8{background-color:#27A0CC}.marker.svelte-1ri9pb8.svelte-1ri9pb8{border-left-color:black;border-left-style:solid}ul.legend-block.svelte-1ri9pb8.svelte-1ri9pb8{list-style-type:none;padding:0;margin:0 0 5px 0}ul.legend-block.svelte-1ri9pb8>li.svelte-1ri9pb8{display:inline-block;margin:0 10px 0 0;padding:0}.legend-vis.svelte-1ri9pb8.svelte-1ri9pb8{display:inline-block;transform:translate(0,3px)}',
  map: null
};
const BarChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let zDomain;
  let xScale;
  let data_grouped;
  let { data } = $$props;
  let { xKey = "value" } = $$props;
  let { yKey = "category" } = $$props;
  let { zKey = "group" } = $$props;
  let { formatTick = (num) => num > 1 ? Math.ceil(num) : (Math.ceil(num * 100) / 100).toFixed(2) } = $$props;
  let { suffix = "%" } = $$props;
  let { barHeight = 25 } = $$props;
  let { markerWidth = 3 } = $$props;
  function groupData(data2, key) {
    let data_indexed = {};
    for (const d of data2) {
      if (!data_indexed[d[key]]) {
        data_indexed[d[key]] = { label: d[key], values: [] };
      }
      data_indexed[d[key]].values.push(d);
    }
    let data_grouped2 = [];
    for (const key2 in data_indexed) {
      data_grouped2.push(data_indexed[key2]);
    }
    return data_grouped2;
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.xKey === void 0 && $$bindings.xKey && xKey !== void 0)
    $$bindings.xKey(xKey);
  if ($$props.yKey === void 0 && $$bindings.yKey && yKey !== void 0)
    $$bindings.yKey(yKey);
  if ($$props.zKey === void 0 && $$bindings.zKey && zKey !== void 0)
    $$bindings.zKey(zKey);
  if ($$props.formatTick === void 0 && $$bindings.formatTick && formatTick !== void 0)
    $$bindings.formatTick(formatTick);
  if ($$props.suffix === void 0 && $$bindings.suffix && suffix !== void 0)
    $$bindings.suffix(suffix);
  if ($$props.barHeight === void 0 && $$bindings.barHeight && barHeight !== void 0)
    $$bindings.barHeight(barHeight);
  if ($$props.markerWidth === void 0 && $$bindings.markerWidth && markerWidth !== void 0)
    $$bindings.markerWidth(markerWidth);
  $$result.css.add(css);
  data.map((d) => d[yKey]).filter((v, i, a) => a.indexOf(v) === i);
  zDomain = data.map((d) => d[zKey]).filter((v, i, a) => a.indexOf(v) === i);
  xScale = (value) => value * 100;
  data_grouped = groupData(data, yKey);
  return `${zDomain[1] ? `<ul class="${"legend-block svelte-1ri9pb8"}">${each(zDomain, (group, i) => {
    return `<li class="${"svelte-1ri9pb8"}"><div class="${"legend-vis " + escape(i == 0 ? "bar" : "marker") + " svelte-1ri9pb8"}"${add_styles({
      "height": `1rem`,
      "width": i == 0 ? "1rem" : markerWidth + "px"
    })}></div>
		<span class="${escape(null_to_empty(i == 0 ? "bold" : "brackets")) + " svelte-1ri9pb8"}">${escape(group)}</span>
	</li>`;
  })}</ul>` : ``}

${each(data_grouped, (group) => {
    return `<div class="${"label-group svelte-1ri9pb8"}">${escape(group.label)}
		${each(group.values, (d, i) => {
      return `<span class="${"label " + escape(i == 0 ? "bold" : "sml brackets") + " svelte-1ri9pb8"}">${escape(formatTick(xScale(d[xKey])))}${escape(suffix)}</span>`;
    })}</div>
	<div class="${"bar-group svelte-1ri9pb8"}"${add_styles({ "height": `${barHeight}px` })}>${each(group.values, (d, i) => {
      return `${i == 0 ? `<div class="${"bar svelte-1ri9pb8"}"${add_styles({
        "left": `0`,
        "width": `${xScale(d[xKey])}%`
      })}></div>` : `<div class="${"marker svelte-1ri9pb8"}"${add_styles({
        "left": `calc(${xScale(d[xKey])}% - ${markerWidth / 2}px)`,
        "border-left-width": `${markerWidth}px`
      })}></div>`}`;
    })}
	</div>`;
  })}`;
});
export { BarChart as default };
