import { w as writable } from "./index-34c40784.js";
Object.freeze({
  sm: 320,
  md: 672,
  lg: 1056,
  xlg: 1312,
  max: 1584
});
var HeaderAction_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\n.action-text.svelte-187bdaq.svelte-187bdaq{\n  display:inline-flex;\n  align-items:center;\n  width:auto;\n  padding:0 1rem 2px 1rem;\n  font-size:0.875rem;\n  line-height:1.28572;\n  letter-spacing:0.16px;\n  color:#f4f4f4\n}\n\n.action-text.svelte-187bdaq>span.svelte-187bdaq{\n  margin-left:0.75rem\n}\n\n/* purgecss end ignore */")();
var HeaderActionLink_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\n.bx--header__action.svelte-smaelc{\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  padding-bottom:2px\n}\n\n/* purgecss end ignore */")();
const data = [
  {
    href: "#",
    title: "Test title search 1",
    menu: "Test menu 1",
    description: "This is a description for seach #1"
  },
  {
    href: "#",
    title: "Changing text to simulate search",
    menu: "Test menu 2",
    description: "This is a description for seach #2"
  },
  {
    href: "#",
    title: "More testing texts",
    menu: "Test menu 3",
    description: "This is a description for seach #3"
  },
  {
    href: "#",
    title: "We can find here another test text",
    menu: "Test menu 4",
    description: "This is a description for seach #4"
  }
];
const globalStore = writable(void 0);
({
  subscribe: globalStore.subscribe,
  search: (searchString) => {
    if (searchString.length > 1) {
      let resultSearch = [];
      data.forEach((item) => {
        if (item.title.toLowerCase().includes(searchString.toLowerCase())) {
          resultSearch.push(item);
        }
      });
      if (resultSearch.length > 0) {
        globalStore.set(resultSearch);
      } else {
        globalStore.set(void 0);
      }
    } else {
      globalStore.set(void 0);
    }
  },
  clear: () => {
    globalStore.set(void 0);
  }
});
var HeaderActionSearch_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\n.search-wrapper.svelte-16k0yud{\n  position:relative;\n  display:flex;\n  max-width:28rem;\n  width:100%;\n  margin-left:0.5rem;\n  height:3rem;\n  background-color:#393939;\n  color:#fff;\n  transition:max-width 0.11s cubic-bezier(0.2, 0, 0.38, 0.9),\n      background 0.11s cubic-bezier(0.2, 0, 0.38, 0.9)\n}\n\n.search-wrapper-hidden.svelte-16k0yud{\n  max-width:3rem;\n  background-color:#161616\n}\n\n.search-focus.svelte-16k0yud{\n  outline:2px solid #fff;\n  outline-offset:-2px\n}\n\n.search-wrapper-2.svelte-16k0yud{\n  display:flex;\n  flex-grow:1;\n  border-bottom:1px solid #393939\n}\n\n.btn-search.svelte-16k0yud{\n  width:3rem;\n  height:100%;\n  padding:0;\n  flex-shrink:0;\n  opacity:1;\n  transition:background-color 0.11s cubic-bezier(0.2, 0, 0.38, 0.9),\n      opacity 0.11s cubic-bezier(0.2, 0, 0.38, 0.9)\n}\n\n.btn-search-disabled.svelte-16k0yud{\n  border:none;\n  pointer-events:none\n}\n\n.input-search.svelte-16k0yud{\n  font-size:1rem;\n  font-weight:400;\n  line-height:1.375rem;\n  letter-spacing:0;\n  color:#fff;\n  caret-color:#fff;\n  background-color:initial;\n  border:none;\n  outline:none;\n  width:100%;\n  height:3rem;\n  padding:0;\n  transition:opacity 0.11s cubic-bezier(0.2, 0, 0.38, 0.9)\n}\n\n.input-hidden.svelte-16k0yud{\n  opacity:0;\n  pointer-events:none\n}\n\n.btn-clear.svelte-16k0yud{\n  width:3rem;\n  height:100%;\n  padding:0;\n  flex-shrink:0;\n  opacity:1;\n  display:block;\n  transition:background-color 0.11s cubic-bezier(0.2, 0, 0.38, 0.9),\n      opacity 0.11s cubic-bezier(0.2, 0, 0.38, 0.9)\n}\n\n.btn-clear.svelte-16k0yud:hover{\n  background-color:#4c4c4c\n}\n\n.btn-clear-hidden.svelte-16k0yud{\n  opacity:0;\n  display:none\n}\n\n/* purgecss end ignore */")();
var HeaderPanelDivider_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\nli.svelte-1tbdbmc{\n  margin:2rem 1rem 0;\n  color:#525252\n}\n\nspan.svelte-1tbdbmc{\n  font-size:0.75rem;\n  line-height:1.3;\n  letter-spacing:0.02rem;\n  color:#c6c6c6\n}\n\n/* purgecss end ignore */")();
var HeaderSearch_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => '/* purgecss start ignore */\n\nlabel.svelte-qozwl4.svelte-qozwl4{\n  position:absolute;\n  width:1px;\n  height:1px;\n  margin:-1px;\n  padding:0;\n  overflow:hidden;\n  white-space:nowrap;\n  border:0;\n  visibility:inherit;\n  clip:rect(0, 0, 0, 0)\n}\n\n[role="search"].svelte-qozwl4.svelte-qozwl4{\n  position:relative;\n  display:flex;\n  max-width:28rem;\n  width:100%;\n  margin-left:0.5rem;\n  height:3rem;\n  background-color:#393939;\n  color:#fff;\n  transition:max-width 0.11s cubic-bezier(0.2, 0, 0.38, 0.9),\n      background 0.11s cubic-bezier(0.2, 0, 0.38, 0.9)\n}\n\n[role="search"].svelte-qozwl4.svelte-qozwl4:not(.active){\n  max-width:3rem;\n  background-color:#161616\n}\n\n[role="search"].active.svelte-qozwl4.svelte-qozwl4{\n  outline:2px solid #fff;\n  outline-offset:-2px\n}\n\n[role="combobox"].svelte-qozwl4.svelte-qozwl4{\n  display:flex;\n  flex-grow:1;\n  border-bottom:1px solid #393939\n}\n\ninput.svelte-qozwl4.svelte-qozwl4{\n  width:100%;\n  height:3rem;\n  padding:0;\n  font-size:1rem;\n  font-weight:400;\n  line-height:1.375rem;\n  letter-spacing:0;\n  color:#fff;\n  caret-color:#fff;\n  background-color:initial;\n  border:none;\n  outline:none;\n  transition:opacity 0.11s cubic-bezier(0.2, 0, 0.38, 0.9)\n}\n\ninput.svelte-qozwl4.svelte-qozwl4:not(.active){\n  opacity:0;\n  pointer-events:none\n}\n\nbutton.svelte-qozwl4.svelte-qozwl4{\n  width:3rem;\n  height:100%;\n  padding:0;\n  flex-shrink:0;\n  opacity:1;\n  transition:background-color 0.11s cubic-bezier(0.2, 0, 0.38, 0.9),\n      opacity 0.11s cubic-bezier(0.2, 0, 0.38, 0.9)\n}\n\n.disabled.svelte-qozwl4.svelte-qozwl4{\n  border:none;\n  pointer-events:none\n}\n\n[aria-label="Clear search"].svelte-qozwl4.svelte-qozwl4:hover{\n  background-color:#4c4c4c\n}\n\n.hidden.svelte-qozwl4.svelte-qozwl4{\n  opacity:0;\n  display:none\n}\n\nul.svelte-qozwl4.svelte-qozwl4{\n  position:absolute;\n  z-index:10000;\n  padding:1rem 0;\n  left:0;\n  right:0;\n  top:3rem;\n  background-color:#161616;\n  border:1px solid #393939;\n  border-top:none;\n  box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.5)\n}\n\n[role="menuitem"].svelte-qozwl4.svelte-qozwl4{\n  padding:6px 1rem;\n  cursor:pointer;\n  font-size:0.875rem;\n  font-weight:600;\n  line-height:1.29;\n  letter-spacing:0.16px;\n  transition:all 70ms cubic-bezier(0.2, 0, 0.38, 0.9);\n  display:block;\n  text-decoration:none;\n  white-space:nowrap;\n  overflow:hidden;\n  text-overflow:ellipsis;\n  color:#c6c6c6\n}\n\n.selected.svelte-qozwl4.svelte-qozwl4,[role="menuitem"].svelte-qozwl4.svelte-qozwl4:hover{\n  background-color:#353535;\n  color:#f4f4f4\n}\n\n[role="menuitem"].svelte-qozwl4 span.svelte-qozwl4{\n  font-size:0.75rem;\n  font-weight:400;\n  line-height:1.34;\n  letter-spacing:0.32px;\n  text-transform:lowercase;\n  color:#c6c6c6\n}\n\n/* purgecss end ignore */')();
