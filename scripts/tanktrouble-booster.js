// ==UserScript==
// @name Tank Trouble Booster
// @namespace http://tampermonkey.net/
// @version 0.0.1
// @license      GPL-3.0
// @description Boost Chrome performance for Tank Trouble game by disabling certain features
// @author kamarov
// @match https://tanktrouble.com/*
// @grant none
// @downloadURL https://update.greasyfork.org/scripts/492792/Tank%20Trouble%20Booster.user.js
// @updateURL https://update.greasyfork.org/scripts/492792/Tank%20Trouble%20Booster.meta.js
// ==/UserScript==

// Disable unnecessary features
function disableFeatures() {
// Disable Chrome PDF Viewer
chrome.plugins.mv = null;

// Disable automatic tab discarding
chrome.experimental.tabDiscarding = false;

// Suspend unused tabs to free up resources
chrome.tabs.query({}, function(tabs) {
tabs.forEach(function(tab) {
if (tab.url.indexOf("tanktrouble.com") === -1) {
chrome.tabs.discard(tab.id);
}
});
});

// Reduce JavaScript timer frequency for background tabs
chrome.extension.getBackgroundPage().setTimeout(function() {
setInterval(function() {
if (document.hidden) {
// Adjust the delay interval to your preference (in milliseconds)
// Higher values reduce CPU usage but may impact real-time updates
setTimeout(function() {}, 300);
}
}, 1000);
}, 5000);

// Additional optimizations
// Disable image animations
const disableImageAnimations = () => {
const images = document.querySelectorAll("img");
images.forEach((img) => {
img.style.animation = "none";
});
};
    // Disable CSS animations
const disableCSSAnimations = () => {
const stylesheets = document.styleSheets;
stylesheets.forEach((sheet) => {
try {
const rules = sheet.cssRules;
rules.forEach((rule) => {
if (rule.type === CSSRule.KEYFRAMES_RULE) {
sheet.deleteRule(rule.name);
}
});
} catch (error) {
console.log("Error accessing stylesheet: " + error);
}
});
};

disableImageAnimations();
disableCSSAnimations();
}

// Call the function to disable features
disableFeatures();
