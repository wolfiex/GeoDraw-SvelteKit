import { c as create_ssr_component, s as setContext, e as escape, v as validate_component } from "../../../../chunks/index-e390a0ae.js";
import Breadcrumb from "./partial/Breadcrumb.svelte.js";
import Highlighted from "./partial/Highlighted.svelte.js";
import Navbox from "./partial/Navbox.svelte.js";
import Meta from "./partial/Meta.svelte.js";
const Titleblock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { mode = "neutral" } = $$props;
  let { background = "grey" } = $$props;
  let { breadcrumb = null } = $$props;
  let { contents = null } = $$props;
  let { highlighted = null } = $$props;
  let { date = null } = $$props;
  let { updated = null } = $$props;
  let { hr = true } = $$props;
  setContext("mode", mode);
  setContext("background", background);
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
  return `<div class="${"page-neutral-intro " + escape(background == "grey" ? "background--gallery" : "")}"><div class="${"wrapper"}"><div class="${"col-wrap"}"><div class="${"col"}">${breadcrumb ? `${validate_component(Breadcrumb, "Breadcrumb").$$render($$result, {
    links: breadcrumb,
    mode: background == "none" ? "neutral" : mode
  }, {}, {})}` : ``}
				<div class="${[
    "col col--md-47",
    (highlighted ? "col--lg-38" : "") + " " + (!highlighted ? "col--lg-48" : "")
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}
					${date ? `<p class="${"page-neutral-intro__meta margin-top--0 margin-bottom--3"}">${escape(date)}</p>` : ``}
					${contents ? `${validate_component(Navbox, "Navbox").$$render($$result, { links: contents, title: "Contents" }, {}, {})}` : ``}</div>
				${highlighted ? `${validate_component(Highlighted, "Highlighted").$$render($$result, { links: highlighted }, {}, {})}` : ``}</div></div></div>
	${slots.meta ? slots.meta({}) : ``}
	${updated ? `${validate_component(Meta, "Meta").$$render($$result, {
    label: "Last updated",
    value: updated,
    background
  }, {}, {})}` : ``}
	${background == "none" && hr ? `<div class="${"wrapper"}"><div class="${"col-wrap"}"><div class="${"col"}"><hr style="${"border: 0; height: 0; border-top: 1px solid #808080;"}"></div></div></div>` : ``}</div>`;
});
export { Titleblock as default };
