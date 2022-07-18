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
  default: () => ONSFooter
});
module.exports = __toCommonJS(stdin_exports);
var import_index_0029e4b6 = require("../../../../chunks/index-0029e4b6.js");
const ONSFooter = (0, import_index_0029e4b6.c)(($$result, $$props, $$bindings, slots) => {
  let { lang = "en" } = $$props;
  let { baseurl = "//www.ons.gov.uk" } = $$props;
  const texts = {
    "Footer links": "",
    "Help": "Cymorth",
    "Accessibility": "Hygyrchedd",
    "Cookies": "Cookies",
    "Privacy": "Privacy",
    "Terms and conditions": "Telerau ac amodau",
    "About ONS": "Yngl\u0177n ag SYG",
    "What we do": "Beth rydym yn ei wneud",
    "Careers": "Gyrfaoedd",
    "Contact us": "Cysylltu \xE2 ni",
    "Freedom of Information": "Rhyddid Gwybodaeth",
    "Connect with us": "Cysylltu \xE2 ni",
    "Twitter": "Twitter",
    "Facebook": "Facebook",
    "LinkedIn": "LinkedIn",
    "Consulations": "Consulations",
    "Discussion forums": "Discussion forums",
    "Email alerts": "Rhybuddion ebost",
    "All content is available under the <a href='http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/'>Open Government Licence v3.0</a>, except where otherwise stated": "Mae'r holl gynnwys ar gael o dan delerau'r <a href='https://www.nationalarchives.gov.uk/doc/open-government-licence-cymraeg/version/3/'>Drwydded Llywodraeth Agored f3.0"
  };
  function i18n(text, lang2) {
    return lang2 == "cy" && texts[text] ? texts[text] : text;
  }
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0)
    $$bindings.lang(lang);
  if ($$props.baseurl === void 0 && $$bindings.baseurl && baseurl !== void 0)
    $$bindings.baseurl(baseurl);
  return `<footer class="${"print--hide margin-top--4"}"><h2 class="${"visuallyhidden"}">${(0, import_index_0029e4b6.f)(i18n("Footer links", lang))}</h2>
	<div class="${"footer"}"><div class="${"wrapper"}"><nav aria-label="${"Footer links"}"><div class="${"footer-nav col-wrap"}"><div class="${"col col--lg-one-third col--md-one-third"}"><h3 class="${"footer-nav__heading"}">${(0, import_index_0029e4b6.f)(i18n("Help", lang))}</h3>
						<ul class="${"footer-nav__list"}"><li class="${"footer-nav__item"}"><a href="${(0, import_index_0029e4b6.f)(baseurl) + "/help/accessibility"}">${(0, import_index_0029e4b6.f)(i18n("Accessibility", lang))}</a></li>
							<li class="${"footer-nav__item"}"><a href="${(0, import_index_0029e4b6.f)(baseurl) + "/cookies"}">${(0, import_index_0029e4b6.f)(i18n("Cookies", lang))}</a></li>
							<li class="${"footer-nav__item"}"><a href="${(0, import_index_0029e4b6.f)(baseurl) + "/help/privacynotice"}">${(0, import_index_0029e4b6.f)(i18n("Privacy", lang))}</a></li>
							<li class="${"footer-nav__item"}"><a href="${(0, import_index_0029e4b6.f)(baseurl) + "/help/termsandconditions"}">${(0, import_index_0029e4b6.f)(i18n("Terms and conditions", lang))}</a></li></ul></div>
					<div class="${"col col--lg-one-third col--md-one-third"}"><h3 class="${"footer-nav__heading"}">${(0, import_index_0029e4b6.f)(i18n("About ONS", lang))}</h3>
						<ul class="${"footer-nav__list"}"><li class="${"footer-nav__item"}"><a href="${(0, import_index_0029e4b6.f)(baseurl) + "/aboutus/whatwedo"}">${(0, import_index_0029e4b6.f)(i18n("What we do", lang))}</a></li>
							<li class="${"footer-nav__item"}"><a href="${(0, import_index_0029e4b6.f)(baseurl) + "/aboutus/careers"}">${(0, import_index_0029e4b6.f)(i18n("Careers", lang))}</a></li>
							<li class="${"footer-nav__item"}"><a href="${(0, import_index_0029e4b6.f)(baseurl) + "/aboutus/contactus"}">${(0, import_index_0029e4b6.f)(i18n("Contact us", lang))}</a></li>
							<li class="${"footer-nav__item"}"><a href="${(0, import_index_0029e4b6.f)(baseurl) + "/aboutus/transparencyandgovernance/freedomofinformationfoi"}">${(0, import_index_0029e4b6.f)(i18n("Freedom of Information", lang))}</a></li></ul></div>
					<div class="${"col col--lg-one-third col--md-one-third"}"><h3 class="${"footer-nav__heading"}">${(0, import_index_0029e4b6.f)(i18n("Connect with us", lang))}</h3>
						<ul class="${"footer-nav__list"}"><li class="${"footer-nav__item"}"><a href="${"https://twitter.com/ONS"}">${(0, import_index_0029e4b6.f)(i18n("Twitter", lang))}</a></li>
							<li class="${"footer-nav__item"}"><a href="${"https://www.facebook.com/ONS"}">${(0, import_index_0029e4b6.f)(i18n("Facebook", lang))}</a></li>
							<li class="${"footer-nav__item"}"><a href="${"https://www.linkedin.com/company/office-for-national-statistics"}">${(0, import_index_0029e4b6.f)(i18n("LinkedIn", lang))}</a></li>
							<li class="${"footer-nav__item"}"><a href="${"https://consultations.ons.gov.uk/"}">${(0, import_index_0029e4b6.f)(i18n("Consultations", lang))}</a></li>
							<li class="${"footer-nav__item"}"><a href="${"https://www.statsusernet.org.uk/login"}">${(0, import_index_0029e4b6.f)(i18n("Discussion forums", lang))}</a></li>
							<li class="${"footer-nav__item"}"><a href="${"https://public.govdelivery.com/accounts/UKONS/subscribers/new"}">${(0, import_index_0029e4b6.f)(i18n("Email alerts", lang))}</a></li></ul></div></div></nav></div>
		<div class="${"wrapper"}"><div class="${"footer-license"}"><img class="${"footer-license__img"}" alt="${"OGL"}" width="${"60"}" src="${"https://cdn.ons.gov.uk/assets/images/logo-ogl-footer.svg"}">
				<p class="${"footer-license__text margin-left-sm--0"}"><!-- HTML_TAG_START -->${i18n("All content is available under the <a href='http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/'>Open Government Licence v3.0</a>, except where otherwise stated", lang)}<!-- HTML_TAG_END --></p></div></div></div></footer>`;
});
