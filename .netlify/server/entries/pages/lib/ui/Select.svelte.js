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
  default: () => Select
});
module.exports = __toCommonJS(stdin_exports);
var import_index_12fa369c = require("../../../../chunks/index-12fa369c.js");
var Select_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => '/* purgecss start ignore */\n\n#select.svelte-10s1oab.svelte-10s1oab{\n  text-align:left\n}\n\na.svelte-10s1oab.svelte-10s1oab{\n  text-decoration:none;\n  display:block;\n  padding:0;\n  border:2px solid #206095 !important\n}\n\na.svelte-10s1oab span.svelte-10s1oab{\n  display:inline-block;\n  padding:10px 5px\n}\n\n.selection.svelte-10s1oab.svelte-10s1oab{\n  overflow:hidden;\n  max-width:calc(100% - 50px);\n  white-space:nowrap\n}\n\n#dropdown.svelte-10s1oab ul.svelte-10s1oab{\n  list-style:none;\n  background:#eee;\n  margin:0;\n  margin-top:3px;\n  padding:0;\n  max-height:170px;\n  overflow-y:auto;\n  overflow-x:hidden\n}\n\n#dropdown.svelte-10s1oab li.svelte-10s1oab{\n  line-height:1rem;\n  padding:6px\n}\n\n#dropdown.svelte-10s1oab .highlight.svelte-10s1oab{\n  color:#fff;\n  background-color:#206095;\n  font-weight:500;\n  cursor:pointer\n}\n\n#select.svelte-10s1oab input.svelte-10s1oab{\n  width:calc(100% - 40px);\n  box-sizing:border-box;\n  background:transparent;\n  font-family:inherit;\n  font-size:inherit;\n  color:inherit;\n  font-weight:inherit;\n  line-height:inherit;\n  display:inline-block;\n  padding:10px 5px;\n  margin:0;\n  background-color:#fff;\n  border:2px solid #206095 !important;\n  border-radius:0px;\n  -webkit-appearance:none;\n  -moz-appearance:none\n}\n\n#select.svelte-10s1oab input.svelte-10s1oab:focus{\n  outline:none\n}\n\n#select.svelte-10s1oab.svelte-10s1oab{\n  display:block;\n  width:100%;\n  position:relative\n}\n\n.active.svelte-10s1oab.svelte-10s1oab{\n  z-index:1000;\n  outline:3px solid orange\n}\n\n#toggle.svelte-10s1oab.svelte-10s1oab,#select.svelte-10s1oab input.svelte-10s1oab{\n  line-height:inherit;\n  color:#206095;\n  font-weight:500;\n  cursor:pointer\n}\n\n#dropdown.svelte-10s1oab.svelte-10s1oab{\n  width:100%;\n  position:absolute;\n  left:0;\n  opacity:1\n}\n\n.selected.svelte-10s1oab.svelte-10s1oab{\n  color:#fff !important;\n  background-color:#206095\n}\n\n.button.svelte-10s1oab.svelte-10s1oab{\n  color:#fff;\n  background-color:#206095;\n  background-repeat:no-repeat;\n  background-position:center;\n  display:inline-block;\n  float:right\n}\n\n.down.svelte-10s1oab.svelte-10s1oab{\n  background-image:url("https://bothness.github.io/geo-draw/img/chevron-down.svg");\n  width:30px\n}\n\n.search.svelte-10s1oab.svelte-10s1oab{\n  background-image:url("https://bothness.github.io/geo-draw/img/search.svg");\n  width:30px\n}\n\n.close.svelte-10s1oab.svelte-10s1oab{\n  background-image:url("https://bothness.github.io/geo-draw/img/x-close.svg");\n  width:30px\n}\n\nsmall.svelte-10s1oab.svelte-10s1oab{\n  margin-left:3px\n}\n\n#toggle.svelte-10s1oab small.svelte-10s1oab{\n  color:lightgrey\n}\n\n#dropdown.svelte-10s1oab small.svelte-10s1oab{\n  color:grey\n}\n\n/* purgecss end ignore */')();
const css = {
  code: '#select.svelte-10s1oab.svelte-10s1oab{text-align:left}a.svelte-10s1oab.svelte-10s1oab{text-decoration:none;display:block;padding:0;border:2px solid #206095 !important}a.svelte-10s1oab span.svelte-10s1oab{display:inline-block;padding:10px 5px}.selection.svelte-10s1oab.svelte-10s1oab{overflow:hidden;max-width:calc(100% - 50px);white-space:nowrap}#dropdown.svelte-10s1oab ul.svelte-10s1oab{list-style:none;background:#eee;margin:0;margin-top:3px;padding:0;max-height:170px;overflow-y:auto;overflow-x:hidden}#dropdown.svelte-10s1oab li.svelte-10s1oab{line-height:1rem;padding:6px}#dropdown.svelte-10s1oab .highlight.svelte-10s1oab{color:#fff;background-color:#206095;font-weight:500;cursor:pointer}#select.svelte-10s1oab input.svelte-10s1oab{width:calc(100% - 40px);box-sizing:border-box;background:transparent;font-family:inherit;font-size:inherit;color:inherit;font-weight:inherit;line-height:inherit;display:inline-block;padding:10px 5px;margin:0;background-color:#fff;border:2px solid #206095 !important;border-radius:0px;-webkit-appearance:none;-moz-appearance:none}#select.svelte-10s1oab input.svelte-10s1oab:focus{outline:none}#select.svelte-10s1oab.svelte-10s1oab{display:block;width:100%;position:relative}.active.svelte-10s1oab.svelte-10s1oab{z-index:1000;outline:3px solid orange}#toggle.svelte-10s1oab.svelte-10s1oab,#select.svelte-10s1oab input.svelte-10s1oab{line-height:inherit;color:#206095;font-weight:500;cursor:pointer}#dropdown.svelte-10s1oab.svelte-10s1oab{width:100%;position:absolute;left:0;opacity:1}.selected.svelte-10s1oab.svelte-10s1oab{color:#fff !important;background-color:#206095}.button.svelte-10s1oab.svelte-10s1oab{color:#fff;background-color:#206095;background-repeat:no-repeat;background-position:center;display:inline-block;float:right}.down.svelte-10s1oab.svelte-10s1oab{background-image:url("https://bothness.github.io/geo-draw/img/chevron-down.svg");width:30px}.search.svelte-10s1oab.svelte-10s1oab{background-image:url("https://bothness.github.io/geo-draw/img/search.svg");width:30px}.close.svelte-10s1oab.svelte-10s1oab{background-image:url("https://bothness.github.io/geo-draw/img/x-close.svg");width:30px}small.svelte-10s1oab.svelte-10s1oab{margin-left:3px}#toggle.svelte-10s1oab small.svelte-10s1oab{color:lightgrey}#dropdown.svelte-10s1oab small.svelte-10s1oab{color:grey}',
  map: null
};
const Select = (0, import_index_12fa369c.c)(($$result, $$props, $$bindings, slots) => {
  let regex;
  (0, import_index_12fa369c.p)();
  let { options } = $$props;
  let { selected = null } = $$props;
  let { placeholder = "Find an area" } = $$props;
  let { value = "code" } = $$props;
  let { label = "name" } = $$props;
  let { group = null } = $$props;
  let { search = false } = $$props;
  let selectedPrev = selected;
  let selectedItem = selected ? options.find((d) => {
    d[value] == selected[value];
  }) : null;
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.search === void 0 && $$bindings.search && search !== void 0)
    $$bindings.search(search);
  $$result.css.add(css);
  regex = null;
  {
    {
      regex ? options.filter((option) => regex.test(option[label])) : options;
    }
  }
  {
    if (selectedPrev != selected) {
      selectedItem = options.find((d) => d[value] == selected[value]);
      selectedPrev = selected;
    }
  }
  return `

<div id="${"select"}" class="${["svelte-10s1oab", ""].join(" ").trim()}">${selectedItem && !search ? `<a id="${"toggle"}" class="${"selected svelte-10s1oab"}"><span class="${"selection svelte-10s1oab"}">${(0, import_index_12fa369c.h)(selectedItem[label])} ${group ? `<small class="${"svelte-10s1oab"}">${(0, import_index_12fa369c.h)(selectedItem[group])}</small>` : ``}</span>
		<span class="${"button close svelte-10s1oab"}">\xA0</span></a>` : `<a id="${"toggle"}" class="${"svelte-10s1oab"}"><span class="${"svelte-10s1oab"}">${(0, import_index_12fa369c.h)(placeholder ? placeholder : "Select one")}</span>
		<span class="${[
    "button svelte-10s1oab",
    (search ? "search" : "") + " " + (!search ? "down" : "")
  ].join(" ").trim()}">\xA0</span></a>`}
	${``}</div>`;
});
