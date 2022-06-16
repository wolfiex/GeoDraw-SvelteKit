import { c as create_ssr_component, v as validate_component } from "../../chunks/index-12fa369c.js";
const Heading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 class="${"py-4 text-black text-3xl text-center font-bold"}">${slots.default ? slots.default({}) : ``}</h1>`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Heading, "Heading").$$render($$result, {}, {}, {
    default: () => {
      return `Hello, World!`;
    }
  })}`;
});
export { Routes as default };
