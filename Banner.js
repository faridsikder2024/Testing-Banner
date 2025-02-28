var websitePrivacyPage = "https://mycodelesswebsite.com/privacy-policy-terms-conditions/";
var unknownCookieText = ["Unknown", "This cookie information is unknown"];

var categoryText = ["Necessary", "Preferences", "Statistics", "Marketing", "Unclassified"];

var learnMoreText = "Learn more about the provider";

var topSectionText = ["Consent", "Details", "About"];

var firstSectionText = "We use cookies to personalize content and ads, provide social media features, and analyze our traffic. We also share information about your use of our website with our social media, advertising, and analytics partners, who may combine it with other information you have provided or that they have collected through your use of their services.";
var thirdSectionText = "Cookies are small text files used by websites to improve user experience. By law, we can store cookies on your device if they are strictly necessary for the operation of this site. For all other types of cookies, we need your consent. This website uses different types of cookies, some of which are placed by third-party services that appear on our pages.";

var bannerButtonsTexts = ["Accept", "Reject", "Customize", "Save"];

var categoryDescriptionsText = {
    Necessary: {
        description: "Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.",
    },
    Preferences: {
        description: "Preference cookies allow a website to remember information that changes the way the website behaves or looks.",
    },
    Statistics: {
        description: "Statistics cookies help website owners understand how visitors interact with websites by collecting and reporting information anonymously.",
    },
    Marketing: {
        description: "Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user.",
    },
    Unclassified: {
        description: "Unclassified cookies are cookies that we are in the process of classifying together with the providers of individual cookies.",
    },
};

var cookieInfoText = ["Expiration", "Domain", "Controller"];

var bannerShowingDelayed = 0;

var websiteLogo = "https://fonkmagazine.nl/images/logo-fonk.svg";

var logoWidth = "50px";

var darkModeEnable = true;

var darkModeDefault = localStorage.getItem("viewMode") ? localStorage.getItem("viewMode") : "light";

var showIconOfModes = true;

var secondBannerEnable = false;
var defaultConsent = false;

var onClickAccept = "granted";
var onClickCustom = "normal";
var onClickDeclined = "denied";

var onClickAcceptSecond = "granted";
var onClickDeclinedSecond = "denied";

var secondBannerShowingTime = 10;

var storeQuery = true;
var addBackToUrl = true;
var queryParamsToStore = ['gcild', 'utm_source', 'utm_medium'];

const root = document.querySelector(':root');
var rootStyle = getComputedStyle(root);

window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}

var consentValue = ["granted", "denied"];

var consent = {
    ad_storage: defaultConsent ? "denied" : 'denied',
    ad_user_data: defaultConsent ? "denied" : 'denied',
    ad_personalization: defaultConsent ? "denied" : 'denied',
    analytics_storage: defaultConsent ? "denied" : 'denied',
    functionality_storage: defaultConsent ? "denied" : 'denied',
    personalization_storage: defaultConsent ? "denied" : 'denied',
    unclassified_storage: defaultConsent ? "denied" : 'denied',
    security_storage: defaultConsent ? "granted" : 'granted'
}

var acceptConsent = {
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
    analytics_storage: 'granted',
    functionality_storage: 'granted',
    personalization_storage: 'granted',
    unclassified_storage: 'granted',
    security_storage: 'granted'
}

var declinedConsent = {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'denied',
    personalization_storage: 'denied',
    unclassified_storage: 'denied',
    security_storage: 'granted'
}

gtag('consent', 'default', consent);

var getBannerChoice = JSON.parse(localStorage.getItem("bannerChoice"));

function pushDataLayer(consent, event) {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
        event: event,
        consent: consent,
    })
}

function updateConsent() {
    if (getBannerChoice) {
        consent.functionality_storage = getBannerChoice.Preferences;
        consent.personalization_storage = getBannerChoice.Preferences;
        consent.analytics_storage = getBannerChoice.Statistics;
        consent.ad_storage = getBannerChoice.Marketing;
        consent.ad_user_data = getBannerChoice.Marketing;
        consent.ad_personalization = getBannerChoice.Marketing;
        consent.unclassified_storage = getBannerChoice.Unclassified;

        gtag('consent', 'update', consent);
        pushDataLayer(consent, "page_view_consent");

    } else if (!getBannerChoice) {
        gtag('consent', 'update', consent);
        pushDataLayer(consent, "page_view_consent");
    }

    localStorage.setItem("showBanner", true);
}

updateConsent();

function storeQueryParams() {
    if (storeQuery) {
        var queryParams = {};
        var urlSearchParams = new URLSearchParams(window.location.search);

        queryParamsToStore.forEach(function(key) {
            if (urlSearchParams.has(key)) {
                queryParams[key] = urlSearchParams.get(key);
            }
        });

        if (Object.keys(queryParams).length > 0) {
            localStorage.setItem('storedQueryParams', JSON.stringify(queryParams));
        }
    }
}

storeQueryParams();

function addStoredParamsToURL() {
    var storedParams = localStorage.getItem('storedQueryParams');
    if (storedParams) {
        var queryParams = JSON.parse(storedParams);
        var url = new URL(window.location.href);

        Object.keys(queryParams).forEach(function(key) {
            url.searchParams.set(key, queryParams[key]);
        });

        window.history.replaceState(null, '', url.toString());
    }
}

window.addEventListener("load", function() {
    var manualCookie = [];
    var cookieCategories = {};
    var checkedCategories = {
        Necessary: "denied",
        Preferences: "denied",
        Statistics: "denied",
        Marketing: "denied",
        Unclassified: "denied",
    }

    async function fetchCookies() {
        const response = await fetch('https://cdn.jsdelivr.net/gh/consentbyalifmahmud-com/Consent-Banners@7f0cf88062efb8fdd993eff5167c80f73dc72444/metricsrealm.com/cookie.json');
        return response.json();
    }

    function processCookies() {
        console.log("Processing cookies...");
    }

    processCookies();
});
