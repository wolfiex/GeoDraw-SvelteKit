const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/components/AccordionItem.IGNOREsvelte.svelte"),
	() => import("../../../src/routes/components/DesignSystemPanel.svelte"),
	() => import("../../../src/routes/components/DSPanel.svelte"),
	() => import("../../../src/routes/components/Loader.svelte"),
	() => import("../../../src/routes/components/Panel.svelte"),
	() => import("../../../src/routes/maplite/index.svelte"),
	() => import("../../../src/routes/maplite/AreaMap.svelte"),
	() => import("../../../src/routes/maplite/App.svelte"),
	() => import("../../../src/routes/sqltest/index.svelte"),
	() => import("../../../src/routes/util_db.svelte"),
	() => import("../../../src/routes/datano.svelte"),
	() => import("../../../src/routes/intro/index.svelte"),
	() => import("../../../src/routes/intro/AreaMap.svelte"),
	() => import("../../../src/routes/data/index.svelte"),
	() => import("../../../src/routes/test/index.svelte"),
	() => import("../../../src/routes/ui/ExploreByAreaComponent.svelte"),
	() => import("../../../src/routes/ui/CensusTableByLocation.svelte"),
	() => import("../../../src/routes/ui/DesignSystemPanel.svelte"),
	() => import("../../../src/routes/ui/CategorySelector.svelte"),
	() => import("../../../src/routes/ui/DesignSystemCode.svelte"),
	() => import("../../../src/routes/ui/ExploreByTopic.svelte"),
	() => import("../../../src/routes/ui/TopicExplorer.svelte"),
	() => import("../../../src/routes/ui/UseCensusData.svelte"),
	() => import("../../../src/routes/ui/design-system.svelte"),
	() => import("../../../src/routes/ui/DataHeader.svelte"),
	() => import("../../../src/routes/ui/BasePage.svelte"),
	() => import("../../../src/routes/ui/Feedback.svelte"),
	() => import("../../../src/routes/ui/Header.svelte"),
	() => import("../../../src/routes/ui/Loader.svelte"),
	() => import("../../../src/routes/ui/Select.svelte"),
	() => import("../../../src/routes/ui/Topic.svelte"),
	() => import("../../../src/routes/ui/map/InteractiveLayer.svelte"),
	() => import("../../../src/routes/ui/map/BoundaryLayer.svelte"),
	() => import("../../../src/routes/ui/map/DataLayer.svelte"),
	() => import("../../../src/routes/ui/map/TileSet.svelte"),
	() => import("../../../src/routes/ui/map/Map.svelte"),
	() => import("../../../src/routes/ui/ons/ONSExternalHeaderWithDescription.svelte"),
	() => import("../../../src/routes/ui/ons/ONSAutosuggest.svelte"),
	() => import("../../../src/routes/ui/ons/ONSBreadcrumbs.svelte"),
	() => import("../../../src/routes/ui/ons/ONSCollapsible.svelte"),
	() => import("../../../src/routes/ui/ons/ONSPhaseBanner.svelte"),
	() => import("../../../src/routes/ui/ons/ONSCheckboxes.svelte"),
	() => import("../../../src/routes/ui/ons/ONSAccordion.svelte"),
	() => import("../../../src/routes/ui/ons/ONSCensusApp.svelte"),
	() => import("../../../src/routes/ui/ons/ONSTextField.svelte"),
	() => import("../../../src/routes/ui/ons/ONSBacklink.svelte"),
	() => import("../../../src/routes/ui/ons/ONSFieldset.svelte"),
	() => import("../../../src/routes/ui/ons/ONSSkipLink.svelte"),
	() => import("../../../src/routes/ui/ons/ONSTextArea.svelte"),
	() => import("../../../src/routes/ui/ons/ONSButton.svelte"),
	() => import("../../../src/routes/ui/ons/ONSHeader.svelte"),
	() => import("../../../src/routes/ui/ons/ONSRadios.svelte"),
	() => import("../../../src/routes/ui/ons/ONSSelect.svelte"),
	() => import("../../../src/routes/ui/ons/ONSShare.svelte"),
	() => import("../../../src/routes/ui/ons/partials/ONSAccordionPanel.svelte"),
	() => import("../../../src/routes/ui/ons/partials/ONSBreadcrumb.svelte"),
	() => import("../../../src/routes/ui/ons/partials/ONSShareItem.svelte"),
	() => import("../../../src/routes/ui/ons/partials/ONSCheckbox.svelte"),
	() => import("../../../src/routes/ui/ons/partials/ONSError.svelte"),
	() => import("../../../src/routes/ui/ons/partials/ONSRadio.svelte"),
	() => import("../../../src/routes/ui/ons/ONSCard.svelte"),
	() => import("../../../src/routes/ui/ons/svg/ONSHeaderLogoLarge.svelte"),
	() => import("../../../src/routes/ui/ons/svg/ONSHeaderLogoSmall.svelte"),
	() => import("../../../src/routes/ui/ons/svg/ONSFacebookIcon.svelte"),
	() => import("../../../src/routes/ui/ons/svg/ONSLinkedinIcon.svelte"),
	() => import("../../../src/routes/ui/ons/svg/ONSTwitterIcon.svelte"),
	() => import("../../../src/routes/ui/ons/svg/ONSCensusLogo.svelte"),
	() => import("../../../src/routes/ui/ons/svg/ONSEmailIcon.svelte"),
	() => import("../../../src/routes/ui/ons/svg/ONSPoweredBy.svelte"),
	() => import("../../../src/routes/ui/ons/svg/SearchIcon.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/components/AccordionItem.IGNOREsvelte.svelte
	[/^\/components\/AccordionItem\.IGNOREsvelte\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/components/DesignSystemPanel.svelte
	[/^\/components\/DesignSystemPanel\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/components/DSPanel.svelte
	[/^\/components\/DSPanel\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/components/Loader.svelte
	[/^\/components\/Loader\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/components/Panel.svelte
	[/^\/components\/Panel\/?$/, [c[0], c[7]], [c[1]]],

	,

	,

	,

	,

	,

	,

	,

	,

	,

	,

	,

	,

	,

	// src/routes/maplite/index.svelte
	[/^\/maplite\/?$/, [c[0], c[8]], [c[1]]],

	,

	// src/routes/maplite/AreaMap.svelte
	[/^\/maplite\/AreaMap\/?$/, [c[0], c[9]], [c[1]]],

	,

	,

	// src/routes/maplite/App.svelte
	[/^\/maplite\/App\/?$/, [c[0], c[10]], [c[1]]],

	,

	// src/routes/sqltest/index.svelte
	[/^\/sqltest\/?$/, [c[0], c[11]], [c[1]]],

	,

	,

	// src/routes/util_db.svelte
	[/^\/util_db\/?$/, [c[0], c[12]], [c[1]]],

	// src/routes/datano.svelte
	[/^\/datano\/?$/, [c[0], c[13]], [c[1]]],

	// src/routes/intro/index.svelte
	[/^\/intro\/?$/, [c[0], c[14]], [c[1]]],

	,

	// src/routes/intro/AreaMap.svelte
	[/^\/intro\/AreaMap\/?$/, [c[0], c[15]], [c[1]]],

	,

	,

	,

	// src/routes/data/index.svelte
	[/^\/data\/?$/, [c[0], c[16]], [c[1]]],

	,

	,

	// src/routes/test/index.svelte
	[/^\/test\/?$/, [c[0], c[17]], [c[1]]],

	,

	,

	,

	// src/routes/ui/ExploreByAreaComponent.svelte
	[/^\/ui\/ExploreByAreaComponent\/?$/, [c[0], c[18]], [c[1]]],

	// src/routes/ui/CensusTableByLocation.svelte
	[/^\/ui\/CensusTableByLocation\/?$/, [c[0], c[19]], [c[1]]],

	// src/routes/ui/DesignSystemPanel.svelte
	[/^\/ui\/DesignSystemPanel\/?$/, [c[0], c[20]], [c[1]]],

	// src/routes/ui/CategorySelector.svelte
	[/^\/ui\/CategorySelector\/?$/, [c[0], c[21]], [c[1]]],

	// src/routes/ui/DesignSystemCode.svelte
	[/^\/ui\/DesignSystemCode\/?$/, [c[0], c[22]], [c[1]]],

	// src/routes/ui/ExploreByTopic.svelte
	[/^\/ui\/ExploreByTopic\/?$/, [c[0], c[23]], [c[1]]],

	// src/routes/ui/TopicExplorer.svelte
	[/^\/ui\/TopicExplorer\/?$/, [c[0], c[24]], [c[1]]],

	// src/routes/ui/UseCensusData.svelte
	[/^\/ui\/UseCensusData\/?$/, [c[0], c[25]], [c[1]]],

	// src/routes/ui/design-system.svelte
	[/^\/ui\/design-system\/?$/, [c[0], c[26]], [c[1]]],

	// src/routes/ui/DataHeader.svelte
	[/^\/ui\/DataHeader\/?$/, [c[0], c[27]], [c[1]]],

	// src/routes/ui/BasePage.svelte
	[/^\/ui\/BasePage\/?$/, [c[0], c[28]], [c[1]]],

	// src/routes/ui/Feedback.svelte
	[/^\/ui\/Feedback\/?$/, [c[0], c[29]], [c[1]]],

	// src/routes/ui/Header.svelte
	[/^\/ui\/Header\/?$/, [c[0], c[30]], [c[1]]],

	// src/routes/ui/Loader.svelte
	[/^\/ui\/Loader\/?$/, [c[0], c[31]], [c[1]]],

	// src/routes/ui/Select.svelte
	[/^\/ui\/Select\/?$/, [c[0], c[32]], [c[1]]],

	// src/routes/ui/Topic.svelte
	[/^\/ui\/Topic\/?$/, [c[0], c[33]], [c[1]]],

	// src/routes/ui/map/InteractiveLayer.svelte
	[/^\/ui\/map\/InteractiveLayer\/?$/, [c[0], c[34]], [c[1]]],

	// src/routes/ui/map/BoundaryLayer.svelte
	[/^\/ui\/map\/BoundaryLayer\/?$/, [c[0], c[35]], [c[1]]],

	// src/routes/ui/map/DataLayer.svelte
	[/^\/ui\/map\/DataLayer\/?$/, [c[0], c[36]], [c[1]]],

	// src/routes/ui/map/TileSet.svelte
	[/^\/ui\/map\/TileSet\/?$/, [c[0], c[37]], [c[1]]],

	// src/routes/ui/map/Map.svelte
	[/^\/ui\/map\/Map\/?$/, [c[0], c[38]], [c[1]]],

	,

	// src/routes/ui/ons/ONSExternalHeaderWithDescription.svelte
	[/^\/ui\/ons\/ONSExternalHeaderWithDescription\/?$/, [c[0], c[39]], [c[1]]],

	// src/routes/ui/ons/ONSAutosuggest.svelte
	[/^\/ui\/ons\/ONSAutosuggest\/?$/, [c[0], c[40]], [c[1]]],

	// src/routes/ui/ons/ONSBreadcrumbs.svelte
	[/^\/ui\/ons\/ONSBreadcrumbs\/?$/, [c[0], c[41]], [c[1]]],

	// src/routes/ui/ons/ONSCollapsible.svelte
	[/^\/ui\/ons\/ONSCollapsible\/?$/, [c[0], c[42]], [c[1]]],

	// src/routes/ui/ons/ONSPhaseBanner.svelte
	[/^\/ui\/ons\/ONSPhaseBanner\/?$/, [c[0], c[43]], [c[1]]],

	// src/routes/ui/ons/ONSCheckboxes.svelte
	[/^\/ui\/ons\/ONSCheckboxes\/?$/, [c[0], c[44]], [c[1]]],

	// src/routes/ui/ons/ONSAccordion.svelte
	[/^\/ui\/ons\/ONSAccordion\/?$/, [c[0], c[45]], [c[1]]],

	// src/routes/ui/ons/ONSCensusApp.svelte
	[/^\/ui\/ons\/ONSCensusApp\/?$/, [c[0], c[46]], [c[1]]],

	// src/routes/ui/ons/ONSTextField.svelte
	[/^\/ui\/ons\/ONSTextField\/?$/, [c[0], c[47]], [c[1]]],

	// src/routes/ui/ons/ONSBacklink.svelte
	[/^\/ui\/ons\/ONSBacklink\/?$/, [c[0], c[48]], [c[1]]],

	// src/routes/ui/ons/ONSFieldset.svelte
	[/^\/ui\/ons\/ONSFieldset\/?$/, [c[0], c[49]], [c[1]]],

	// src/routes/ui/ons/ONSSkipLink.svelte
	[/^\/ui\/ons\/ONSSkipLink\/?$/, [c[0], c[50]], [c[1]]],

	// src/routes/ui/ons/ONSTextArea.svelte
	[/^\/ui\/ons\/ONSTextArea\/?$/, [c[0], c[51]], [c[1]]],

	// src/routes/ui/ons/ONSButton.svelte
	[/^\/ui\/ons\/ONSButton\/?$/, [c[0], c[52]], [c[1]]],

	// src/routes/ui/ons/ONSHeader.svelte
	[/^\/ui\/ons\/ONSHeader\/?$/, [c[0], c[53]], [c[1]]],

	// src/routes/ui/ons/ONSRadios.svelte
	[/^\/ui\/ons\/ONSRadios\/?$/, [c[0], c[54]], [c[1]]],

	// src/routes/ui/ons/ONSSelect.svelte
	[/^\/ui\/ons\/ONSSelect\/?$/, [c[0], c[55]], [c[1]]],

	// src/routes/ui/ons/ONSShare.svelte
	[/^\/ui\/ons\/ONSShare\/?$/, [c[0], c[56]], [c[1]]],

	// src/routes/ui/ons/partials/ONSAccordionPanel.svelte
	[/^\/ui\/ons\/partials\/ONSAccordionPanel\/?$/, [c[0], c[57]], [c[1]]],

	// src/routes/ui/ons/partials/ONSBreadcrumb.svelte
	[/^\/ui\/ons\/partials\/ONSBreadcrumb\/?$/, [c[0], c[58]], [c[1]]],

	// src/routes/ui/ons/partials/ONSShareItem.svelte
	[/^\/ui\/ons\/partials\/ONSShareItem\/?$/, [c[0], c[59]], [c[1]]],

	// src/routes/ui/ons/partials/ONSCheckbox.svelte
	[/^\/ui\/ons\/partials\/ONSCheckbox\/?$/, [c[0], c[60]], [c[1]]],

	// src/routes/ui/ons/partials/ONSError.svelte
	[/^\/ui\/ons\/partials\/ONSError\/?$/, [c[0], c[61]], [c[1]]],

	// src/routes/ui/ons/partials/ONSRadio.svelte
	[/^\/ui\/ons\/partials\/ONSRadio\/?$/, [c[0], c[62]], [c[1]]],

	// src/routes/ui/ons/ONSCard.svelte
	[/^\/ui\/ons\/ONSCard\/?$/, [c[0], c[63]], [c[1]]],

	// src/routes/ui/ons/svg/ONSHeaderLogoLarge.svelte
	[/^\/ui\/ons\/svg\/ONSHeaderLogoLarge\/?$/, [c[0], c[64]], [c[1]]],

	// src/routes/ui/ons/svg/ONSHeaderLogoSmall.svelte
	[/^\/ui\/ons\/svg\/ONSHeaderLogoSmall\/?$/, [c[0], c[65]], [c[1]]],

	// src/routes/ui/ons/svg/ONSFacebookIcon.svelte
	[/^\/ui\/ons\/svg\/ONSFacebookIcon\/?$/, [c[0], c[66]], [c[1]]],

	// src/routes/ui/ons/svg/ONSLinkedinIcon.svelte
	[/^\/ui\/ons\/svg\/ONSLinkedinIcon\/?$/, [c[0], c[67]], [c[1]]],

	// src/routes/ui/ons/svg/ONSTwitterIcon.svelte
	[/^\/ui\/ons\/svg\/ONSTwitterIcon\/?$/, [c[0], c[68]], [c[1]]],

	// src/routes/ui/ons/svg/ONSCensusLogo.svelte
	[/^\/ui\/ons\/svg\/ONSCensusLogo\/?$/, [c[0], c[69]], [c[1]]],

	// src/routes/ui/ons/svg/ONSEmailIcon.svelte
	[/^\/ui\/ons\/svg\/ONSEmailIcon\/?$/, [c[0], c[70]], [c[1]]],

	// src/routes/ui/ons/svg/ONSPoweredBy.svelte
	[/^\/ui\/ons\/svg\/ONSPoweredBy\/?$/, [c[0], c[71]], [c[1]]],

	// src/routes/ui/ons/svg/SearchIcon.svelte
	[/^\/ui\/ons\/svg\/SearchIcon\/?$/, [c[0], c[72]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];