// ==UserScript==
// @name         Style Improvements
// @namespace    http://tampermonkey.net/
// @version      2.0.0
// @license      GPL-3.0
// @description  Simple style improvements for better player experience.
// @author       kamarov
// @match        https://tanktrouble.com/*
// @run-at       document-end
// @grant        GM_addStyle
// @require      https://update.greasyfork.org/scripts/482092/1297984/TankTrouble%20Development%20Library.js
// ==/UserScript==

GM_addStyle(`
@keyframes moveLeft {
  0% {
    transform: translateX(0) scale(1);
  }
  100% {
    transform: translateX(-60%) scale(0);
  }
}
@keyframes moveRight {
  0% {
    transform: translateX(-60%) scale(0);
  }
  100% {
    transform: translateX(0) scale(1);
  }
}
#game {
    top: 0;
    filter: drop-shadow(0 3px 3px rgba(0, 0, 0, .5));
}
#secondaryContent, #tertiaryContent {
    margin-top: 7px;
}
a {
    margin-top: 7px;
}
#chat form {
    border-radius: 3px;
    border: 1px solid var(--jq-borderColorDefault);
    background: rgb(255 255 255 / 80%);
    animation-duration: 0s;
    margin-left: 20px;
    padding: 1px;
    width: 249px !important;
}
#chat form .autocomplete-dropdown{
    margin-left: 255px !important;
    margin-top: -1px !important;
}
:root.dark #chat form {
    background: rgb(55 55 55 / 80%);
}
#chat.global form {
    background: #68c5ff;
    border: 1px solid #759fff;
}
#chat.user form {
    background: #08ef0a;
    border: 1px solid #01c701;
}
#chat:not(.open) form{
    z-index: -1;
    position: relative;
	  animation: moveLeft 0.1s cubic-bezier(0.79, -0.02, 0.32, 0.98) forwards;
}
#chat:is(.opening, .open) form {
    z-index: -1;
    position: relative;
    padding-right: 0;
    animation: moveRight 0.3s cubic-bezier(0.79, -0.02, 0.32, 0.98) forwards;
}
#chat:is(.opening, .open) .content, #chat:is(.opening, .open) textarea {
    width: 230px !important;
}
#chat {
    -webkit-filter: drop-shadow(0 7px 4px rgba(0, 0, 0, .5));
    filter: drop-shadow(0 7px 4px rgba(0, 0, 0, .5));
}
#chat .body {
    width: 240px;
    height: 160px;
    margin-left: 20px;
    margin-top: 5px;
    background: rgb(255 255 255 / 50%);
    border-radius: 7px;
    border: 1px solid var(--jq-borderColorDefault);
    padding: 5px;
}
:root.dark #chat .body {
    background: rgb(45 45 45 / 50%);
}
#chat .body.dragging {
    background: rgb(225 225 225 / 50%);
    border: none;
    border-radius: 7px;
    border: 1px solid var(--jq-borderColorDefault);
    margin-left: 20px;
    margin-top: 5px;
    padding: 5px;
}
:root.dark #chat .body.dragging {
    background: rgb(35 35 35 / 50%);
}
#chat.opening textarea, #chat.open textarea {
    width: 220px !important;
    margin-left: -20px !important;
}
#chat:not(.opening) textarea, #chat:not(.open) textarea {
    margin-left: -20px !important;
}
.newsPost {
    filter: drop-shadow(0 3px 3px rgba(0, 0, 0, .5));
}
.forum .bubble {
    border: #cccccc90 2px solid;
    border-radius: 7px;
    transition: background .7s, border .3s;
    filter: drop-shadow(0 3px 3px rgba(0, 0, 0, .5));
}
.forum .editing .bubble {
    background-color: #fdfdfd;
}
.forum .bubble .pointer {
    background: inherit;
    position: absolute;
    top: 8px;
    width: 22px;
    height: 15px;
}
#overlay {
    background-color: rgb(0 0 0 / 90%);
}
#overlay .newGame .premium {
    color: #000;
    display: inline-block;
    background: linear-gradient(to bottom, rgb(238, 238, 238), rgb(204, 204, 204));
    border-radius: 7px;
    border: none;
    position: relative;
    padding: 40px 40px 30px;
    margin: 80px 20px 20px;
}
:root.dark #overlay .newGame .premium {
    color: #fff;
    background: linear-gradient(to bottom, rgb(41, 41, 41), rgb(32, 32, 32)) !important;
}
#overlay input[type="checkbox"]+label::before {
    border: 2px solid red;
    transition: border .7s;
    border-radius: 7px;
    color: #fff;
}
#overlay .shopItem {
    background: repeating-radial-gradient(#555, #cccccc99 100px);
}
:root.dark #overlay .shopItem {
    background: repeating-radial-gradient(#292929, #24242499 100px) !important;
}
#shopItem-122 {
    background: repeating-radial-gradient(#1c8a3c, #2cdc60, #1c8a3c99 100px);
}
:root.dark #shopItem-122 {
    background: repeating-radial-gradient(#1c8a3c, #2cdc60, #1c8a3c99 100px) !important;
}
#shopItem-120 {
    background: linear-gradient(to bottom, #fcdc88, #f8c23a);
}
:root.dark #shopItem-120 {
    background: linear-gradient(to bottom, #fcdc88, #f8c23a) !important;
}
#virtualShopItem-500 {
    background: repeating-linear-gradient(55deg, #101010, #333 100px);
}
:root.dark #overlay #virtualShopItem-500 {
    background: repeating-linear-gradient(55deg, #101010, #333 100px) !important;
}
#virtualShopItem-520 {
    background: repeating-linear-gradient(45deg, #ff00d4, #256cff, #00ffff, #02ff00, #e7ff00, #ffb300, red, #ff00d4 270px);
}
:root.dark #overlay #virtualShopItem-520 {
    background: repeating-linear-gradient(45deg, #ff00d4, #256cff, #00ffff, #02ff00, #e7ff00, #ffb300, red, #ff00d4 270px) !important;
}
#virtualShopItem-512 {
    background: linear-gradient(to bottom, #e2bf49, #664600);
}
:root.dark #overlay #virtualShopItem-512 {
    background: linear-gradient(to bottom, #e2bf49, #664600) !important;
}
#virtualShopItem-509 {
    background: linear-gradient(to bottom, #e2bf49, #664600);
}
:root.dark #overlay #virtualShopItem-509 {
    background: linear-gradient(to bottom, #e2bf49, #664600) !important;
}
.shopItem .soldOut text {
    font-size: 30pt;
    stroke-width: 0px;
    transform: translate(70px, 150px) rotate(0deg);
}
`);
