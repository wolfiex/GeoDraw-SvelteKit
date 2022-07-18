import { c as create_ssr_component, f as escape, i as add_attribute, j as each, b as subscribe, s as setContext, v as validate_component } from "../../../chunks/index-0029e4b6.js";
import { a as assets } from "../../../chunks/paths-396f020f.js";
import { W as Warning, p as page } from "../../../chunks/Warning-46ba7ac9.js";
const themes = {
  "light": {
    "name": "light",
    "text": "#222",
    "muted": "#777",
    "pale": "#f0f0f0",
    "background": "#fff"
  },
  "dark": {
    "name": "dark",
    "text": "#fff",
    "muted": "#bbb",
    "pale": "#333",
    "background": "#222"
  }
};
const ONSFooter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `<footer class="${"print--hide margin-top--4"}"><h2 class="${"visuallyhidden"}">${escape(i18n("Footer links", lang))}</h2>
	<div class="${"footer"}"><div class="${"wrapper"}"><nav aria-label="${"Footer links"}"><div class="${"footer-nav col-wrap"}"><div class="${"col col--lg-one-third col--md-one-third"}"><h3 class="${"footer-nav__heading"}">${escape(i18n("Help", lang))}</h3>
						<ul class="${"footer-nav__list"}"><li class="${"footer-nav__item"}"><a href="${escape(baseurl) + "/help/accessibility"}">${escape(i18n("Accessibility", lang))}</a></li>
							<li class="${"footer-nav__item"}"><a href="${escape(baseurl) + "/cookies"}">${escape(i18n("Cookies", lang))}</a></li>
							<li class="${"footer-nav__item"}"><a href="${escape(baseurl) + "/help/privacynotice"}">${escape(i18n("Privacy", lang))}</a></li>
							<li class="${"footer-nav__item"}"><a href="${escape(baseurl) + "/help/termsandconditions"}">${escape(i18n("Terms and conditions", lang))}</a></li></ul></div>
					<div class="${"col col--lg-one-third col--md-one-third"}"><h3 class="${"footer-nav__heading"}">${escape(i18n("About ONS", lang))}</h3>
						<ul class="${"footer-nav__list"}"><li class="${"footer-nav__item"}"><a href="${escape(baseurl) + "/aboutus/whatwedo"}">${escape(i18n("What we do", lang))}</a></li>
							<li class="${"footer-nav__item"}"><a href="${escape(baseurl) + "/aboutus/careers"}">${escape(i18n("Careers", lang))}</a></li>
							<li class="${"footer-nav__item"}"><a href="${escape(baseurl) + "/aboutus/contactus"}">${escape(i18n("Contact us", lang))}</a></li>
							<li class="${"footer-nav__item"}"><a href="${escape(baseurl) + "/aboutus/transparencyandgovernance/freedomofinformationfoi"}">${escape(i18n("Freedom of Information", lang))}</a></li></ul></div>
					<div class="${"col col--lg-one-third col--md-one-third"}"><h3 class="${"footer-nav__heading"}">${escape(i18n("Connect with us", lang))}</h3>
						<ul class="${"footer-nav__list"}"><li class="${"footer-nav__item"}"><a href="${"https://twitter.com/ONS"}">${escape(i18n("Twitter", lang))}</a></li>
							<li class="${"footer-nav__item"}"><a href="${"https://www.facebook.com/ONS"}">${escape(i18n("Facebook", lang))}</a></li>
							<li class="${"footer-nav__item"}"><a href="${"https://www.linkedin.com/company/office-for-national-statistics"}">${escape(i18n("LinkedIn", lang))}</a></li>
							<li class="${"footer-nav__item"}"><a href="${"https://consultations.ons.gov.uk/"}">${escape(i18n("Consultations", lang))}</a></li>
							<li class="${"footer-nav__item"}"><a href="${"https://www.statsusernet.org.uk/login"}">${escape(i18n("Discussion forums", lang))}</a></li>
							<li class="${"footer-nav__item"}"><a href="${"https://public.govdelivery.com/accounts/UKONS/subscribers/new"}">${escape(i18n("Email alerts", lang))}</a></li></ul></div></div></nav></div>
		<div class="${"wrapper"}"><div class="${"footer-license"}"><img class="${"footer-license__img"}" alt="${"OGL"}" width="${"60"}" src="${"https://cdn.ons.gov.uk/assets/images/logo-ogl-footer.svg"}">
				<p class="${"footer-license__text margin-left-sm--0"}"><!-- HTML_TAG_START -->${i18n("All content is available under the <a href='http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/'>Open Government Licence v3.0</a>, except where otherwise stated", lang)}<!-- HTML_TAG_END --></p></div></div></div></footer>`;
});
const ONSHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { path = "/" } = $$props;
  let { lang = "en" } = $$props;
  let { baseurl = "//www.ons.gov.uk" } = $$props;
  let menuExpanded = false;
  let searchExpanded = false;
  let menu = [
    {
      label_en: "Business, industry and trade",
      label_cy: "Busnes, diwydiant a masnach",
      url: "/businessindustryandtrade",
      expanded: false,
      children: [
        {
          label_en: "Business",
          label_cy: "Busnes",
          url: "/businessindustryandtrade/business"
        },
        {
          label_en: "Changes to business",
          label_cy: "Newidiadau i fusnesau",
          url: "/businessindustryandtrade/changestobusiness"
        },
        {
          label_en: "Construction industry",
          label_cy: "Diwydiant adeiladu",
          url: "/businessindustryandtrade/constructionindustry"
        },
        {
          label_en: "IT and internet industry",
          label_cy: "Y diwydiant TG a'r rhyngrwyd",
          url: "/businessindustryandtrade"
        },
        {
          label_en: "International trade",
          label_cy: "Masnach ryngwladol",
          url: "/businessindustryandtrade/itandinternetindustry"
        },
        {
          label_en: "Manufacturing and production industry",
          label_cy: "Y diwydiant gweithgynhyrchu a chynhyrchu",
          url: "/businessindustryandtrade/manufacturingandproductionindustry"
        },
        {
          label_en: "Retail industry",
          label_cy: "Y diwydiant manwerthu",
          url: "/businessindustryandtrade/retailindustry"
        },
        {
          label_en: "Tourism industry",
          label_cy: "Y diwydiant twristiaeth",
          url: "/businessindustryandtrade/tourismindustry"
        }
      ]
    },
    {
      label_en: "Economy",
      label_cy: "Yr economi",
      url: "/economy",
      expanded: false,
      children: [
        {
          label_en: "Economic output and productivity",
          label_cy: "Allgynnyrch economaidd a chynhyrchiant",
          url: "/economy/economicoutputandproductivity"
        },
        {
          label_en: "Environmental accounts",
          label_cy: "Cyfrifon amgylcheddol",
          url: "/economy/environmentalaccounts"
        },
        {
          label_en: "Government, public sector and taxes",
          label_cy: "Llywodraeth, y sector cyhoeddus a threthi",
          url: "/economy/governmentpublicsectorandtaxes"
        },
        {
          label_en: "Gross Domestic Product (GDP)",
          label_cy: "Cynnyrch Domestig Gros (CDG)",
          url: "/economy/grossdomesticproductgdp"
        },
        {
          label_en: "Gross Value Added (GVA)",
          label_cy: "Gwerth Ychwanegol Gros",
          url: "/economy/grossvalueaddedgva"
        },
        {
          label_en: "Inflation and price indices",
          label_cy: "Mynegeion chwyddiant a phrisiau",
          url: "/economy/inflationandpriceindices"
        },
        {
          label_en: "Investments, pensions and trusts",
          label_cy: "Buddsoddiadau, pensiynau ac ymddiriedolaethau",
          url: "/economy/investmentspensionsandtrusts"
        },
        {
          label_en: "National accounts",
          label_cy: "Cyfrifon gwladol",
          url: "/economy/nationalaccounts"
        },
        {
          label_en: "Regional accounts",
          label_cy: "Cyfrifon rhanbarthol",
          url: "/economy/regionalaccounts"
        }
      ]
    },
    {
      label_en: "Employment and labour market",
      label_cy: "Cyflogaeth a'r farchnad lafur",
      url: "/employmentandlabourmarket",
      expanded: false,
      children: [
        {
          label_en: "People in work",
          label_cy: "Pobl mewn gwaith",
          url: "/employmentandlabourmarket/peopleinwork"
        },
        {
          label_en: "People not in work",
          label_cy: "Pobl nad ydynt mewn gwaith",
          url: "/employmentandlabourmarket/peoplenotinwork"
        }
      ]
    },
    {
      label_en: "People, population and community",
      label_cy: "Pobl, y boblogaeth a chymunedau",
      url: "/peoplepopulationandcommunity",
      expanded: false,
      children: [
        {
          label_en: "Births, deaths and marriages",
          label_cy: "Genedigaethau, marwolaethau a phriodasau",
          url: "/peoplepopulationandcommunity/birthsdeathsandmarriages"
        },
        {
          label_en: "Crime and justice",
          label_cy: "Troseddu a chyfiawnder",
          url: "/peoplepopulationandcommunity/crimeandjustice"
        },
        {
          label_en: "Cultural identity",
          label_cy: "Hunaniaeth ddiwylliannol",
          url: "/peoplepopulationandcommunity/culturalidentity"
        },
        {
          label_en: "Education and childcare",
          label_cy: "Addysg a gofal plant",
          url: "/peoplepopulationandcommunity/educationandchildcare"
        },
        {
          label_en: "Elections",
          label_cy: "Etholiadau",
          url: "/peoplepopulationandcommunity/elections"
        },
        {
          label_en: "Health and social care",
          label_cy: "Iechyd a gofal cymdeithasol",
          url: "/peoplepopulationandcommunity/healthandsocialcare"
        },
        {
          label_en: "Household characteristics",
          label_cy: "Nodweddion aelwydydd",
          url: "/peoplepopulationandcommunity/householdcharacteristics"
        },
        {
          label_en: "Housing",
          label_cy: "Tai",
          url: "/peoplepopulationandcommunity/housing"
        },
        {
          label_en: "Leisure and tourism",
          label_cy: "Hamdden a thwristiaeth",
          url: "/peoplepopulationandcommunity/leisureandtourism"
        },
        {
          label_en: "Personal and household finances",
          label_cy: "Cyllid personol a chyllid aelwydydd",
          url: "/peoplepopulationandcommunity/personalandhouseholdfinances"
        },
        {
          label_en: "Population and migration",
          label_cy: "Poblogaeth ac ymfudo",
          url: "/peoplepopulationandcommunity/populationandmigration"
        },
        {
          label_en: "Well-being",
          label_cy: "Lles",
          url: "/peoplepopulationandcommunity/wellbeing"
        }
      ]
    },
    {
      label_en: "Taking part in a survey?",
      label_cy: "Cymryd rhan mewn arolwg?",
      url: "/surveys"
    },
    {
      label_en: "Release calendar",
      label_cy: "Calendar datganiadau",
      url: "/releasecalendar",
      secondary: true
    },
    {
      label_en: "Methodology",
      label_cy: "Methodoleg",
      url: "/methodology",
      secondary: true
    },
    {
      label_en: "Media",
      label_cy: "Media",
      url: "/news",
      secondary: true
    },
    {
      label_en: "About",
      label_cy: "Amdanom ni",
      url: "/aboutus",
      secondary: true
    },
    {
      label_en: "Blog",
      label_cy: "Blog",
      url: "https://blog.ons.gov.uk/",
      secondary: true
    }
  ];
  const texts = {
    "Home": "Hafan",
    "Search": "Chwilio",
    "Menu": "Dewislen",
    "Hide search": "Cuddio",
    "Office for National Statistics logo - Homepage": "Logo Swyddfa Ystadegau Gwladol - Hafan",
    "Search for a keyword(s) or time series ID": "Chwilio am allweddair neu ID cyfres amser"
  };
  function i18n(text, lang2) {
    return lang2 == "cy" && texts[text] ? texts[text] : text;
  }
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0)
    $$bindings.lang(lang);
  if ($$props.baseurl === void 0 && $$bindings.baseurl && baseurl !== void 0)
    $$bindings.baseurl(baseurl);
  return `<header><a class="${"skiplink"}" href="${"#main"}" tabindex="${"0"}">${escape(i18n("Skip to main content", lang))}</a>
	<div id="${"pagePath"}" class="${"hide"}">${escape(path)}</div>
	<div class="${"wrapper"}"><div class="${"header col-wrap"}"><div class="${"col col--lg-one-third col--md-one-third"}"><a href="${escape(baseurl) + "/"}"><img class="${"logo"}" src="${"https://cdn.ons.gov.uk/assets/images/ons-logo/v2/ons-logo.svg"}"${add_attribute("alt", i18n("Office for National Statistics logo - Homepage", lang), 0)}></a></div>
			<div class="${"col col--lg-two-thirds col--md-two-thirds hide--sm print--hide language--js__container"}"><div class="${"language"}">${lang == "en" ? `<span>English (EN) | </span>
					<a href="${"//cy.ons.gov.uk" + escape(path)}" class="${"language__link"}" lang="${"cy"}">Cymraeg (CY)</a>` : `<a href="${"//www.ons.gov.uk" + escape(path)}" class="${"language__link"}" lang="${"en"}">English (EN)</a>
					<span>| Cymraeg (EN)</span>`}</div></div>
			<div class="${"secondary-nav col col--lg-two-thirds col--md-two-thirds print--hide"}"><ul class="${"secondary-nav__list js-nav-clone__list"}">${each(menu.filter((d) => d.secondary), (item) => {
    return `<li class="${"secondary-nav__item"}"><a class="${"secondary-nav__link js-nav-clone__link"}" href="${escape(baseurl) + escape(item.url)}">${escape(item["label_" + lang])}</a>
					</li>`;
  })}</ul></div></div></div>
	<div class="${"primary-nav print--hide"}"><nav aria-label="${"Header links"}"><ul class="${"nav--controls"}"><li class="${["nav--controls__item", ""].join(" ").trim()}"><a href="${"#nav-primary"}" id="${"menu-toggle"}" aria-controls="${"nav-primary"}"${add_attribute("aria-expanded", menuExpanded, 0)} class="${"nav--controls__menu"}"><span class="${"nav--controls__text"}">${escape(i18n("Menu", lang))}</span></a></li>
				<li class="${["nav--controls__item", ""].join(" ").trim()}"><a href="${"#nav-search"}" id="${"search-toggle"}" aria-controls="${"nav-search"}"${add_attribute("aria-expanded", searchExpanded, 0)} class="${"nav--controls__search"}"><span class="${"nav--controls__text"}">${escape(i18n("Search", lang))}</span></a></li></ul>
			<ul class="${["wrapper primary-nav__list", "nav-main--hidden"].join(" ").trim()}" id="${"nav-primary"}"${add_attribute("aria-expanded", menuExpanded, 0)}><li class="${"primary-nav__item js-nav"}"><a class="${"primary-nav__link col col--md-7 col--lg-9"}" href="${escape(baseurl) + "/"}" style="${"color: #e5e6e7"}">${escape(i18n("Home", lang))}</a></li>
				${each([
    ...menu.filter((d) => d.children).sort((a, b) => a["label_" + lang].localeCompare(b["label_" + lang])),
    ...menu.filter((d) => !d.children)
  ], (item, i) => {
    return `${item.children ? `<li class="${[
      "primary-nav__item js-nav js-expandable",
      item.expanded ? "js-expandable-active" : ""
    ].join(" ").trim()}"><a class="${"primary-nav__link col col--md-8 col--lg-10"}" href="${escape(baseurl) + escape(item.url)}" aria-expanded="${"false"}" aria-label="${escape(item["label_" + lang]) + " sub menu"}"><span aria-hidden="${"true"}" class="${"expansion-indicator"}"></span>
					<span class="${"submenu-title"}">${escape(item["label_" + lang])}
					</span></a>
					<ul class="${[
      "primary-nav__child-list col col--md-16 col--lg-20 js-expandable__content jsEnhance",
      !item.expanded ? "js-nav-hidden" : ""
    ].join(" ").trim()}"${add_attribute("aria-expanded", item.expanded, 0)} aria-label="${"submenu"}"><li class="${"primary-nav__child-item js-expandable__child hide--md"}"><a class="${"primary-nav__child-link"}" tabindex="${"-1"}" href="${escape(baseurl) + escape(item.url)}">${escape(item["label_" + lang])}</a></li>
						${each([...item.children].sort((a, b) => a["label_" + lang].localeCompare(b["label_" + lang])), (child) => {
      return `<li class="${"primary-nav__child-item js-expandable__child"}"><a class="${"primary-nav__child-link"}" tabindex="${"-1"}" href="${escape(baseurl) + escape(child.url)}">${escape(child["label_" + lang])}</a>
						</li>`;
    })}</ul>
				</li>` : `<li class="${["primary-nav__item js-nav", item.secondary ? "hide--md" : ""].join(" ").trim()}"><a class="${"primary-nav__link col col--md-8 col--lg-10"}" href="${escape(baseurl) + escape(item.url)}">${escape(item["label_" + lang])}</a>
				</li>`}`;
  })}
				<li class="${"hide--md primary-nav__language"}">${lang == "en" ? `<span>English (EN) | </span>
					<a href="${"//cy.ons.gov.uk" + escape(path)}" class="${"language__link"}" lang="${"cy"}">Cymraeg (CY)</a>` : `<a href="${"//www.ons.gov.uk" + escape(path)}" class="${"language__link"}" lang="${"en"}">English (EN)</a>
					<span>| Cymraeg (EN)</span>`}</li></ul></nav></div>

	</header>`;
});
let theme = "light";
const Ignore__layout_reset = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let path = $page.url.pathname;
  let lang = $page.url.hostname.split(".")[0] == "cy" ? "cy" : "en";
  let baseurl = lang == "cy" ? "//cy.ons.gov.uk" : "//www.ons.gov.uk";
  setContext("theme", themes[theme]);
  $$unsubscribe_page();
  return `${$$result.head += `<link rel="${"icon"}" href="${escape(assets) + "/favicon.ico"}" data-svelte="svelte-1ttl8ld"><meta property="${"og:type"}" content="${"website"}" data-svelte="svelte-1ttl8ld"><meta property="${"og:url"}" content="${escape(assets) + "/"}" data-svelte="svelte-1ttl8ld"><meta property="${"og:image"}" content="${escape(assets) + "/img/og.png"}" data-svelte="svelte-1ttl8ld"><meta property="${"og:image:type"}" content="${"image/png"}" data-svelte="svelte-1ttl8ld">`, ""}

${validate_component(Warning, "Warning").$$render($$result, {}, {}, {
    default: () => {
      return `WARNING! This is a prototype. Data likely to contain inaccuracies.
`;
    }
  })}

${validate_component(ONSHeader, "ONSHeader").$$render($$result, { baseurl, path, lang }, {}, {})}

<main id="${"main"}" tabindex="${"-1"}">${slots.default ? slots.default({}) : ``}</main>

${validate_component(ONSFooter, "ONSFooter").$$render($$result, { baseurl, lang }, {}, {})}`;
});
export { Ignore__layout_reset as default };
