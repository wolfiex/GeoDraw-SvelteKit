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
  default: () => Titleblock
});
module.exports = __toCommonJS(stdin_exports);
var import_index_f909a211 = require("../../../../chunks/index-f909a211.js");
var import_Breadcrumb_svelte = __toESM(require("./partial/Breadcrumb.svelte.js"));
var import_Highlighted_svelte = __toESM(require("./partial/Highlighted.svelte.js"));
var import_Navbox_svelte = __toESM(require("./partial/Navbox.svelte.js"));
var import_Meta_svelte = __toESM(require("./partial/Meta.svelte.js"));
const Titleblock = (0, import_index_f909a211.c)(($$result, $$props, $$bindings, slots) => {
  let { mode = "neutral" } = $$props;
  let { background = "grey" } = $$props;
  let { breadcrumb = null } = $$props;
  let { contents = null } = $$props;
  let { highlighted = null } = $$props;
  let { date = null } = $$props;
  let { updated = null } = $$props;
  let { hr = true } = $$props;
  (0, import_index_f909a211.s)("mode", mode);
  (0, import_index_f909a211.s)("background", background);
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
  return `<div class="${"page-neutral-intro " + (0, import_index_f909a211.e)(background == "grey" ? "background--gallery" : "")}"><div class="${"wrapper"}"><div class="${"col-wrap"}"><div class="${"col"}">${breadcrumb ? `${(0, import_index_f909a211.v)(import_Breadcrumb_svelte.default, "Breadcrumb").$$render($$result, {
    links: breadcrumb,
    mode: background == "none" ? "neutral" : mode
  }, {}, {})}` : ``}
				<div class="${[
    "col col--md-47",
    (highlighted ? "col--lg-38" : "") + " " + (!highlighted ? "col--lg-48" : "")
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}
					${date ? `<p class="${"page-neutral-intro__meta margin-top--0 margin-bottom--3"}">${(0, import_index_f909a211.e)(date)}</p>` : ``}
					${contents ? `${(0, import_index_f909a211.v)(import_Navbox_svelte.default, "Navbox").$$render($$result, { links: contents, title: "Contents" }, {}, {})}` : ``}</div>
				${highlighted ? `${(0, import_index_f909a211.v)(import_Highlighted_svelte.default, "Highlighted").$$render($$result, { links: highlighted }, {}, {})}` : ``}</div></div></div>
	${slots.meta ? slots.meta({}) : ``}
	${updated ? `${(0, import_index_f909a211.v)(import_Meta_svelte.default, "Meta").$$render($$result, {
    label: "Last updated",
    value: updated,
    background
  }, {}, {})}` : ``}
	${background == "none" && hr ? `<div class="${"wrapper"}"><div class="${"col-wrap"}"><div class="${"col"}"><hr style="${"border: 0; height: 0; border-top: 1px solid #808080;"}"></div></div></div>` : ``}</div>`;
});
