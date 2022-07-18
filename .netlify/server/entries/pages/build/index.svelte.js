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
  default: () => Build
});
module.exports = __toCommonJS(stdin_exports);
var import_index_0029e4b6 = require("../../../chunks/index-0029e4b6.js");
var import_paths_396f020f = require("../../../chunks/paths-396f020f.js");
const Breadcrumb = (0, import_index_0029e4b6.c)(($$result, $$props, $$bindings, slots) => {
  let { links = [] } = $$props;
  let { mode = "neutral" } = $$props;
  if ($$props.links === void 0 && $$bindings.links && links !== void 0)
    $$bindings.links(links);
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0)
    $$bindings.mode(mode);
  return `<nav aria-label="${"Breadcrumbs"}"><div class="${(0, import_index_0029e4b6.f)(mode == "neutral" ? "breadcrumb-neutral" : "breadcrumb") + " print--hide"}"><ol class="${"breadcrumb__list"}">${(0, import_index_0029e4b6.j)(links, (link) => {
    return `<li class="${"breadcrumb__item"}">${link.url ? `<a class="${"breadcrumb__link"}"${(0, import_index_0029e4b6.i)("href", link.url, 0)}>${(0, import_index_0029e4b6.f)(link.label)}</a>` : `${(0, import_index_0029e4b6.f)(link.label)}`}
			</li>`;
  })}</ol></div></nav>`;
});
const Highlighted = (0, import_index_0029e4b6.c)(($$result, $$props, $$bindings, slots) => {
  let { title = "Highlighted content" } = $$props;
  let { links = [] } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.links === void 0 && $$bindings.links && links !== void 0)
    $$bindings.links(links);
  return `<div class="${"nav-secondary--border-left-lg col col--md-47 col--lg-19 col--lg-offset-2 padding-left margin-top-lg--3"}"><h2 class="${"margin-top-lg--1"}">${(0, import_index_0029e4b6.f)(title)}</h2>
	<ul class="${"list--neutral margin-top--negative-one-fix"}">${(0, import_index_0029e4b6.j)(links, (link) => {
    return `<li><a${(0, import_index_0029e4b6.i)("href", link.url, 0)}${(0, import_index_0029e4b6.i)("data-gtm-title", link.label, 0)} data-gtm-type="${"highlighted-links"}">${(0, import_index_0029e4b6.f)(link.label)}</a>
		</li>`;
  })}</ul></div>`;
});
var Navbox_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => '/* purgecss start ignore */\n\n.ons-toc.svelte-1dyzlhu{\n  box-sizing:border-box;\n  display:block;\n  overflow-wrap:break-word;\n  margin-top:24px\n}\n\n.ons-toc__title.svelte-1dyzlhu{\n  font-size:16px !important;\n  display:block;\n  font-weight:600;\n  -webkit-margin-after:18px;\n          margin-block-end:18px;\n  -webkit-margin-before:0;\n          margin-block-start:0;\n  -webkit-margin-end:0;\n          margin-inline-end:0;\n  -webkit-margin-start:0;\n          margin-inline-start:0;\n  margin:0 0 18px 0;\n  padding:0\n}\n\n.ons-list.svelte-1dyzlhu{\n  display:block;\n  list-style-image:none;\n  list-style-position:outside;\n  list-style-type:none;\n  -webkit-margin-after:27px;\n          margin-block-end:27px;\n  -webkit-margin-before:0;\n          margin-block-start:0;\n  margin:0 0 27px 0;\n  -webkit-margin-end:0;\n          margin-inline-end:0;\n  -webkit-margin-start:0;\n          margin-inline-start:0;\n  padding:0;\n  -webkit-padding-start:0;\n          padding-inline-start:0\n}\n\n.ons-list__item.svelte-1dyzlhu{\n  display:list-item;\n  margin:0 0 9px 25px;\n  padding:0;\n  position:relative;\n  font-size:16px !important\n}\n\n.ons-list__item.svelte-1dyzlhu::before{\n  border-top-style:solid;\n  border-top-width:1px;\n  content:"";\n  display:block;\n  height:1px;\n  left:0;\n  margin-left:-25px;\n  position:absolute;\n  top:14px;\n  width:15px\n}\n\n/* purgecss end ignore */')();
const css$3 = {
  code: '.ons-toc.svelte-1dyzlhu{box-sizing:border-box;display:block;overflow-wrap:break-word;margin-top:24px}.ons-toc__title.svelte-1dyzlhu{font-size:16px !important;display:block;font-weight:600;margin-block-end:18px;margin-block-start:0;margin-inline-end:0;margin-inline-start:0;margin:0 0 18px 0;padding:0}.ons-list.svelte-1dyzlhu{display:block;list-style-image:none;list-style-position:outside;list-style-type:none;margin-block-end:27px;margin-block-start:0;margin:0 0 27px 0;margin-inline-end:0;margin-inline-start:0;padding:0;padding-inline-start:0}.ons-list__item.svelte-1dyzlhu{display:list-item;margin:0 0 9px 25px;padding:0;position:relative;font-size:16px !important}.ons-list__item.svelte-1dyzlhu::before{border-top-style:solid;border-top-width:1px;content:"";display:block;height:1px;left:0;margin-left:-25px;position:absolute;top:14px;width:15px}',
  map: null
};
const Navbox = (0, import_index_0029e4b6.c)(($$result, $$props, $$bindings, slots) => {
  let { title = null } = $$props;
  let { links = [] } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.links === void 0 && $$bindings.links && links !== void 0)
    $$bindings.links(links);
  $$result.css.add(css$3);
  return `<nav class="${"ons-toc svelte-1dyzlhu"}" aria-label="${"Pages in this section"}">${title ? `<h2 class="${"ons-toc__title ons-u-fs-r--b ons-u-mb-s svelte-1dyzlhu"}">${(0, import_index_0029e4b6.f)(title)}</h2>` : ``}
	<ol class="${"ons-list ons-u-mb-m ons-list--dashed svelte-1dyzlhu"}">${(0, import_index_0029e4b6.j)(links, (link) => {
    return `${link.url ? `<li class="${"ons-list__item svelte-1dyzlhu"}"><a${(0, import_index_0029e4b6.i)("href", link.url, 0)} class="${"ons-list__link"}">${(0, import_index_0029e4b6.f)(link.label)}</a>
		</li>` : `<li class="${"ons-list__item svelte-1dyzlhu"}" aria-current="${"true"}">${(0, import_index_0029e4b6.f)(link.label)}</li>`}`;
  })}</ol>
</nav>`;
});
const Meta = (0, import_index_0029e4b6.c)(($$result, $$props, $$bindings, slots) => {
  let { background = "grey" } = $$props;
  let { label = "Last updated" } = $$props;
  let { value = "date" } = $$props;
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  return `<div class="${["meta-wrap--thin", background == "grey" ? "meta-wrap" : ""].join(" ").trim()}"><div class="${"wrapper"}"><dl class="${"col-wrap"}"><div class="${"col padding-left--0 meta__item meta__item--no-border"}"><dt class="${"meta__term inline"}">${(0, import_index_0029e4b6.f)(label)}:</dt>
				<dd class="${"inline"}"><!-- HTML_TAG_START -->${value}<!-- HTML_TAG_END --></dd></div></dl></div></div>`;
});
const Titleblock = (0, import_index_0029e4b6.c)(($$result, $$props, $$bindings, slots) => {
  let { mode = "neutral" } = $$props;
  let { background = "grey" } = $$props;
  let { breadcrumb = null } = $$props;
  let { contents = null } = $$props;
  let { highlighted = null } = $$props;
  let { date = null } = $$props;
  let { updated = null } = $$props;
  let { hr = true } = $$props;
  (0, import_index_0029e4b6.s)("mode", mode);
  (0, import_index_0029e4b6.s)("background", background);
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0)
    $$bindings.mode(mode);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.breadcrumb === void 0 && $$bindings.breadcrumb && breadcrumb !== void 0)
    $$bindings.breadcrumb(breadcrumb);
  if ($$props.contents === void 0 && $$bindings.contents && contents !== void 0)
    $$bindings.contents(contents);
  if ($$props.highlighted === void 0 && $$bindings.highlighted && highlighted !== void 0)
    $$bindings.highlighted(highlighted);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.updated === void 0 && $$bindings.updated && updated !== void 0)
    $$bindings.updated(updated);
  if ($$props.hr === void 0 && $$bindings.hr && hr !== void 0)
    $$bindings.hr(hr);
  return `<div class="${"page-neutral-intro " + (0, import_index_0029e4b6.f)(background == "grey" ? "background--gallery" : "")}"><div class="${"wrapper"}"><div class="${"col-wrap"}"><div class="${"col"}">${breadcrumb ? `${(0, import_index_0029e4b6.v)(Breadcrumb, "Breadcrumb").$$render($$result, {
    links: breadcrumb,
    mode: background == "none" ? "neutral" : mode
  }, {}, {})}` : ``}
				<div class="${[
    "col col--md-47",
    (highlighted ? "col--lg-38" : "") + " " + (!highlighted ? "col--lg-48" : "")
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}
					${date ? `<p class="${"page-neutral-intro__meta margin-top--0 margin-bottom--3"}">${(0, import_index_0029e4b6.f)(date)}</p>` : ``}
					${contents ? `${(0, import_index_0029e4b6.v)(Navbox, "Navbox").$$render($$result, { links: contents, title: "Contents" }, {}, {})}` : ``}</div>
				${highlighted ? `${(0, import_index_0029e4b6.v)(Highlighted, "Highlighted").$$render($$result, { links: highlighted }, {}, {})}` : ``}</div></div></div>
	${slots.meta ? slots.meta({}) : ``}
	${updated ? `${(0, import_index_0029e4b6.v)(Meta, "Meta").$$render($$result, {
    label: "Last updated",
    value: updated,
    background
  }, {}, {})}` : ``}
	${background == "none" && hr ? `<div class="${"wrapper"}"><div class="${"col-wrap"}"><div class="${"col"}"><hr style="${"border: 0; height: 0; border-top: 1px solid #808080;"}"></div></div></div>` : ``}</div>`;
});
var Headline_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\nh1.svelte-m86ur0{\n  line-height:1\n}\n\n/* purgecss end ignore */")();
const css$2 = {
  code: "h1.svelte-m86ur0{line-height:1}",
  map: null
};
const Headline = (0, import_index_0029e4b6.c)(($$result, $$props, $$bindings, slots) => {
  let { mode = (0, import_index_0029e4b6.d)("mode") } = $$props;
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0)
    $$bindings.mode(mode);
  $$result.css.add(css$2);
  return `<h1 class="${(0, import_index_0029e4b6.f)((0, import_index_0029e4b6.k)(mode == "neutral" ? "page-neutral-intro__title" : "page-intro__title")) + " svelte-m86ur0"}">${slots.default ? slots.default({}) : ``}
</h1>`;
});
const Subhead = (0, import_index_0029e4b6.c)(($$result, $$props, $$bindings, slots) => {
  let { mode = (0, import_index_0029e4b6.d)("mode") } = $$props;
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0)
    $$bindings.mode(mode);
  return `<p${(0, import_index_0029e4b6.i)("class", mode == "neutral" ? "page-neutral-intro__content" : "page-intro__content", 0)}>${slots.default ? slots.default({}) : ``}</p>`;
});
const Content = (0, import_index_0029e4b6.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"page-content margin-bottom--2"}"><div class="${"wrapper"}">${slots.default ? slots.default({}) : ``}</div></div>`;
});
var Icon_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\nsvg.svelte-1ior0zp{\n  width:1rem;\n  height:1rem;\n  fill:currentColor;\n  transition:all 0.3s ease-out;\n  overflow:visible\n}\n\n/* purgecss end ignore */")();
const css$1 = {
  code: "svg.svelte-1ior0zp{width:1rem;height:1rem;fill:currentColor;transition:all 0.3s ease-out;overflow:visible}",
  map: null
};
const Icon = (0, import_index_0029e4b6.c)(($$result, $$props, $$bindings, slots) => {
  let { name = "close" } = $$props;
  const paths = {
    close: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  };
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  $$result.css.add(css$1);
  return `<svg viewBox="${"0 0 24 24"}" fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" class="${"svelte-1ior0zp"}"><path${(0, import_index_0029e4b6.i)("d", paths[name], 0)}></path></svg>`;
});
const NM_144_1 = {
  index: [
    0,
    1,
    2,
    3
  ],
  "Table name": [
    "Population",
    "Density",
    "Sex",
    "Sex"
  ],
  "Source table": "KS101EW",
  "Nomis table": "NM_144_1",
  "Cell no": [
    0,
    7,
    1,
    2
  ],
  "Cell name": [
    "Total population",
    "Population density",
    "Male",
    "Female"
  ],
  Unit: [
    "people",
    "people per hectare",
    "people",
    "people"
  ]
};
const NM_145_1 = {
  index: 4,
  "Table name": "Median age",
  "Source table": "KS102EW",
  "Nomis table": "NM_145_1",
  "Cell no": [
    18
  ],
  "Cell name": [
    "Median age"
  ],
  Unit: "years"
};
const NM_522_1 = {
  index: [
    5,
    6,
    7,
    8,
    9
  ],
  "Table name": "Ethnic group",
  "Source table": "QS201EW",
  "Nomis table": "NM_522_1",
  "Cell no": [
    100,
    200,
    300,
    400,
    500
  ],
  "Cell name": [
    "White",
    "Mixed/multiple ethnic groups",
    "Asian/Asian British",
    "Black/African/Caribbean/Black British",
    "Other ethnic group"
  ],
  Unit: "people"
};
const NM_529_1 = {
  index: [
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18
  ],
  "Table name": "Religion",
  "Source table": "QS208EW",
  "Nomis table": "NM_529_1",
  "Cell no": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "Cell name": [
    "Christian",
    "Buddhist",
    "Hindu",
    "Jewish",
    "Muslim",
    "Sikh",
    "Other religion",
    "No religion",
    "Religion not stated"
  ],
  Unit: "people"
};
const NM_531_1 = {
  index: [
    19,
    20,
    21,
    22,
    23
  ],
  "Table name": "General health",
  "Source table": "QS302EW",
  "Nomis table": "NM_531_1",
  "Cell no": [
    1,
    2,
    3,
    4,
    5
  ],
  "Cell name": [
    "Very good health",
    "Good health",
    "Fair health",
    "Bad health",
    "Very bad health"
  ],
  Unit: "people"
};
const NM_534_1 = {
  index: [
    24,
    25,
    26,
    27
  ],
  "Table name": "Housing type",
  "Source table": "QS402EW",
  "Nomis table": "NM_534_1",
  "Cell no": [
    2,
    6,
    10,
    11
  ],
  "Cell name": [
    "Whole house or bungalow",
    "Flat, maisonette or apartment",
    "Caravan/mobile home/temporary structure",
    "Shared dwelling"
  ],
  Unit: "households"
};
const NM_537_1 = {
  index: [
    28,
    29,
    30,
    31,
    32
  ],
  "Table name": "Housing tenure",
  "Source table": "QS405EW",
  "Nomis table": "NM_537_1",
  "Cell no": [
    1,
    4,
    5,
    8,
    13
  ],
  "Cell name": [
    "Owned",
    "Shared ownership",
    "Social rented",
    "Private rented",
    "Living rent free"
  ],
  Unit: "households"
};
const NM_543_1 = {
  index: [
    33,
    34,
    35,
    36,
    37,
    38
  ],
  "Table name": "Number of bedrooms",
  "Source table": "QS411EW",
  "Nomis table": "NM_543_1",
  "Cell no": [
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "Cell name": [
    "No bedrooms",
    "1 bedroom",
    "2 bedrooms",
    "3 bedrooms",
    "4 bedrooms",
    "5+ bedrooms"
  ],
  Unit: "households"
};
const NM_545_1 = {
  index: [
    39,
    40,
    41,
    42
  ],
  "Table name": "Persons per bedroom",
  "Source table": "QS413EW",
  "Nomis table": "NM_545_1",
  "Cell no": [
    1,
    2,
    3,
    4
  ],
  "Cell name": [
    "Up to 0.5 persons",
    "Over 0.5 and up to 1.0 persons",
    "Over 1.0 and up to 1.5 persons",
    "Over 1.5 persons per bedroom"
  ],
  Unit: "households"
};
const NM_548_1 = {
  index: [
    43,
    44,
    45,
    46,
    47
  ],
  "Table name": "Car or van availability",
  "Source table": "QS416EW",
  "Nomis table": "NM_548_1",
  "Cell no": [
    1,
    2,
    3,
    4,
    5
  ],
  "Cell name": [
    "No cars or vans",
    "1 car or van",
    "2 cars or vans",
    "3 cars or vans",
    "4+ cars or vans"
  ],
  Unit: "households"
};
const NM_554_1 = {
  index: [
    48,
    49,
    50,
    51,
    52,
    53,
    54
  ],
  "Table name": "Highest qualification",
  "Source table": "QS501EW",
  "Nomis table": "NM_554_1",
  "Cell no": [
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "Cell name": [
    "No qualifications",
    "Level 1 qualifications",
    "Level 2 qualifications",
    "Apprenticeship",
    "Level 3 qualifications",
    "Level 4 qualifications and above",
    "Other qualifications"
  ],
  Unit: "households"
};
const NM_556_1 = {
  index: [
    55,
    56
  ],
  "Table name": "Economic activity",
  "Source table": "QS601EW",
  "Nomis table": "NM_556_1",
  "Cell no": [
    1,
    10
  ],
  "Cell name": [
    "Economically active",
    "Economically inactive"
  ],
  Unit: "people"
};
const NM_559_1 = {
  index: [
    57,
    58,
    59,
    60
  ],
  "Table name": "Hours worked",
  "Source table": "QS604EW",
  "Nomis table": "NM_559_1",
  "Cell no": [
    1,
    2,
    3,
    4
  ],
  "Cell name": [
    "15 hours or less",
    "16 to 30 hours",
    "31 to 48 hours",
    "49 or more hours"
  ],
  Unit: "people"
};
const NM_566_1 = {
  index: [
    61,
    62,
    63,
    64
  ],
  "Table name": "Social grade",
  "Source table": "QS611EW",
  "Nomis table": "NM_566_1",
  "Cell no": [
    1,
    2,
    3,
    4
  ],
  "Cell name": [
    "Grade AB",
    "Grade C1",
    "Grade C2",
    "Grade DE"
  ],
  Unit: "people"
};
const NM_571_1 = {
  index: [
    65,
    66,
    67,
    68,
    69
  ],
  "Table name": "Length of residence",
  "Source table": "QS803EW",
  "Nomis table": "NM_571_1",
  "Cell no": [
    1,
    2,
    3,
    4,
    5
  ],
  "Cell name": [
    "Born in the UK",
    "Less than 2 years",
    "2 years or more, less than 5 years",
    "5 years or more, less than 10 years",
    "10 years or more"
  ],
  Unit: "people"
};
var datasets = {
  NM_144_1,
  NM_145_1,
  NM_522_1,
  NM_529_1,
  NM_531_1,
  NM_534_1,
  NM_537_1,
  NM_543_1,
  NM_545_1,
  NM_548_1,
  NM_554_1,
  NM_556_1,
  NM_559_1,
  NM_566_1,
  NM_571_1
};
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\niframe.svelte-1eb19zo{\n  width:100%;\n  height:100vh\n}\n\n#profile.svelte-1eb19zo{\n  width:100%;\n  border:1px solid #aaa\n}\n\n.btn.svelte-1eb19zo{\n  margin:4px 4px 0 0;\n  border:2px solid black;\n  border-radius:3px;\n  font-size:0.9rem;\n  padding:3px 6px;\n  vertical-align:baseline\n}\n\n.btn-selected.svelte-1eb19zo{\n  background-color:black;\n  color:white\n}\n\n/* purgecss end ignore */")();
const css = {
  code: "iframe.svelte-1eb19zo{width:100%;height:100vh}#profile.svelte-1eb19zo{width:100%;border:1px solid #aaa}.btn.svelte-1eb19zo{margin:4px 4px 0 0;border:2px solid black;border-radius:3px;font-size:0.9rem;padding:3px 6px;vertical-align:baseline}.btn-selected.svelte-1eb19zo{background-color:black;color:white}",
  map: null
};
const ptitle = "Custom Drawn Areas";
const Build = (0, import_index_0029e4b6.c)(($$result, $$props, $$bindings, slots) => {
  let iframe;
  let dataset_keys = Object.keys(datasets);
  dataset_keys = dataset_keys.filter((key) => !/UK\]| - | by |\[[^K]|WA\]/.test(datasets[key].name));
  let selected_keys = ["NM_531_1"];
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Embeddable profile demo</title>`, ""}<meta property="${"og:title"}" content="${"Embeddable profile demo"}" data-svelte="svelte-9t1mvn"><meta property="${"og:description"}" content="${"This is a description of the page."}" data-svelte="svelte-9t1mvn"><meta name="${"description"}" content="${"This is a description of the page."}" data-svelte="svelte-9t1mvn">`, ""}

${(0, import_index_0029e4b6.v)(Titleblock, "Titleblock").$$render($$result, {
    mode: "page",
    breadcrumb: [{ label: "Home", url: `${import_paths_396f020f.a}/` }, { label: ptitle }]
  }, {}, {
    default: () => {
      return `${(0, import_index_0029e4b6.v)(Headline, "Headline").$$render($$result, {}, {}, {
        default: () => {
          return `${(0, import_index_0029e4b6.f)(ptitle)}`;
        }
      })}
  ${(0, import_index_0029e4b6.v)(Subhead, "Subhead").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="${"margin-top--2"}">${(0, import_index_0029e4b6.j)(dataset_keys, (key) => {
            return `<button class="${[
              "btn svelte-1eb19zo",
              selected_keys.includes(key) ? "btn-selected" : ""
            ].join(" ").trim()}">${(0, import_index_0029e4b6.f)(datasets[key]["Table name"])}
          ${selected_keys.includes(key) ? `${(0, import_index_0029e4b6.v)(Icon, "Icon").$$render($$result, { name: "close" }, {}, {})}` : ``}
        </button>`;
          })}</div>`;
        }
      })}`;
    }
  })}

${(0, import_index_0029e4b6.v)(Content, "Content").$$render($$result, {}, {}, {
    default: () => {
      return `<iframe id="${"ifr"}" frameborder="${".8"}" class="${"svelte-1eb19zo"}"${(0, import_index_0029e4b6.i)("this", iframe, 0)}></iframe>
  <div id="${"profile"}" class="${"margin-top--3 svelte-1eb19zo"}"></div>

  `;
    }
  })}`;
});
