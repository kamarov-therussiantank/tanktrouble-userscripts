// ==UserScript==
// @name        Large Text in ChatBox
// @author      kamarov
// @description For you Yusei. U blind mouse ;)
// @version     1.1.0
// @namespace   https://github.com/kamarov-therussiantank
// @license     GPL-3.0
// @match       https://*.tanktrouble.com/*
// @desc        Re-sizes your text in ChatBox.
// @run-at      document-end
// @grant       GM_addStyle
// @require     https://update.greasyfork.org/scripts/482092/1297984/TankTrouble%20Development%20Library.js
// @noframes
// ==/UserScript==

GM_addStyle(`
text {
  font-size: 13px
}
`);
