// ==UserScript==
// @name        Dark Mode
// @author      kamarov
// @description Dark Mode for TankTrouble.
// @version     2.0.0
// @namespace   https://github.com/kamarov-therussiantank
// @license     GPL-3.0
// @match       https://*.tanktrouble.com/*
// @desc        Changes the light theme of the website to dark theme. It also doesn't damage your eyes.
// @run-at      document-end
// @grant       GM_addStyle
// @require     https://update.greasyfork.org/scripts/482092/1297984/TankTrouble%20Development%20Library.js
// @noframes
// ==/UserScript==

GM_addStyle(`
body {
  background: #1a1a1a;
}
#game {
    position: relative;
    left: -10px;
    top: 0px;
}
#header {
    position: relative;
    background-image: url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/header/backgroundDark.png);
    background-size: 120px 120px;
}
.horizontalAdSlot,
.verticalAdSlot,
#leftBanner,
#rightBanner,
#topBanner {
    display: none !important;
}
#secondaryContent {
    float: left;
    margin-left: 10px;
    margin-top: 5px;
    width: 130px;
}
#tertiaryContent {
    float: right;
    margin-right: 10px;
    margin-top: 5px;
    width: 130px;
}
#red_infiltration {
    position: absolute;
    top: 109px;
    right: -135px;
}
.snippet {
    background: linear-gradient(to bottom, #242424, #242424);
    color: #fff;
    border-radius: 5px;
    box-shadow: none;
}
.forum .bubble {
    border: #242424 2px solid;
    border-radius: 6px;
    padding: 10px;
    position: relative;
    text-align: left;
    transition: background .3s, border .3s;
    word-wrap: break-word;
    background-color: #242424;
    box-sizing: border-box;
}
.forum .bubble .header {
    font-size: 1.2em;
    font-weight: bold;
    color: #fff;
}
.forum .bubble .content {
    color: #fff;
}
.forum .compose .bubble {
    background-color: #0a0a0a;
}
.forum .compose .bubble .header {
    color: #fff;
}
.forum .compose .bubble .content {
    color: #fff;
}
.forum .compose textarea, .forum .editing textarea {
    background: transparent;
    border: none;
    font: inherit;
    margin: 0;
    padding: 0;
    resize: none;
    outline: none;
    width: 100%;
    color: #fff;
}
.forum .thread.selectable:not(.editing) .bubble:hover {
    background: #020202
}
.forum .editing .bubble {
    background-color: #0a0a0a
}
.forum .synchronization {
    font-size: .8em;
    margin-top: 10px;
    text-align: center;
    color: #fff
}
.box .content {
    border-radius: 5px;
    background: linear-gradient(to bottom, #242424 10%, #1a1a1a 90%);
    padding: 5px;
    color: #fff
}
.box .tab.bottom {
    background: #1a1a1a
}
.box .tab.left {
    background: #242424
}
.box .tab.right {
    background: #242424
}
.box .tab.topRight {
    background: #242424
}
#garageTab .deselected,#garageTab .selected {
    width:0;
    height:0;
    padding:60px 0 0 120px;
    background-image:-webkit-image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/1x/tab5Selected.png) 1x,url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/2x/tab5Selected%402x.png) 2x);
    background-image:image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/1x/tab5Selected.png) 1x,url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/2x/tab5Selected%402x.png) 2x)
}

#garageTab .deselected {
    background-image:-webkit-image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/1x/tab5.png) 1x,url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/2x/tab5%402x.png) 2x);
    background-image:image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/1x/tab5.png) 1x,url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/2x/tab5%402x.png) 2x)
}
#forumTab .deselected,#forumTab .selected {
    width:0;
    height:0;
    padding:60px 0 0 120px;
    background-image:-webkit-image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/1x/tab4Selected.png) 1x,url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/2x/tab4Selected%402x.png) 2x);
    background-image:image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/1x/tab4Selected.png) 1x,url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/2x/tab4Selected%402x.png) 2x)
}

#forumTab .deselected {
    background-image:-webkit-image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/1x/tab34.png) 1x,url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/2x/tab4%402x.png) 2x);
    background-image:image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/1x/tab4.png) 1x,url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/2x/tab4%402x.png) 2x)
}
#newsTab .deselected,#newsTab .selected {
    width:0;
    height:0;
    padding:60px 0 0 120px;
    background-image:-webkit-image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/1x/tab3Selected.png) 1x,url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/2x/tab3Selected%402x.png) 2x);
    background-image:image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/1x/tab3Selected.png) 1x,url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/2x/tab3Selected%402x.png) 2x)
}

#newsTab .deselected {
    background-image:-webkit-image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/1x/tab3.png) 1x,url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/2x/tab3%402x.png) 2x);
    background-image:image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/1x/tab3.png) 1x,url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/2x/tab3%402x.png) 2x)
}
#shopTab .deselected,#shopTab .selected {
    width:0;
    height:0;
    padding:60px 0 0 120px;
    background-image:-webkit-image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/1x/tab2Selected.png) 1x,url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/2x/tab2Selected%402x.png) 2x);
    background-image:image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/1x/tab2Selected.png) 1x,url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/2x/tab2Selected%402x.png) 2x)
}

#shopTab .deselected {
    background-image:-webkit-image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/1x/tab2.png) 1x,url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/2x/tab2%402x.png) 2x);
    background-image:image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/1x/tab2.png) 1x,url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/2x/tab2%402x.png) 2x)
}
#gameTab .deselected,#gameTab .selected {
    width:0;
    height:0;
    padding:60px 0 0 320px;
    background-image:-webkit-image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/1x/tab1Selected.png) 1x,url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/2x/tab1Selected%402x.png) 2x);
    background-image:image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/1x/tab1Selected.png) 1x,url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/2x/tab1Selected%402x.png) 2x)
}

#gameTab .deselected {
    background-image:-webkit-image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/1x/tab1.png) 1x,url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/2x/tab1%402x.png) 2x);
    background-image:image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/1x/tab1.png) 1x,url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/2x/tab1%402x.png) 2x)
}
.newest .button.page.newest .standard {
    width: 0 !important;
    height: 0 !important;
    padding: 45px 0 0 51px;
    background-image: -webkit-image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/pageNewest.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/pageNewest%402x.png) 2x);
    background-image: image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/pageNewest.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/pageNewest%402x.png) 2x)
}

.newest .button.page.newest .active,
.newest .button.page.newest .selected {
    width: 0 !important;
    height: 0 !important;
    padding: 45px 0 0 51px;
    background-image: -webkit-image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/pageNewestActive.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/pageNewestActive%402x.png) 2x);
    background-image: image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/pageNewestActive.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/pageNewestActive%402x.png) 2x)
}

.newest .button.page.newest .selected {
    background-image: -webkit-image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/pageNewestSelected.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/pageNewestSelected%402x.png) 2x);
    background-image: image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/pageNewestSelected.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/pageNewestSelected%402x.png) 2x)
}

.newest .button.page.newest .selected.active,
.oldest .button.page.oldest .standard {
    width: 0 !important;
    height: 0 !important;
    padding: 45px 0 0 51px;
    background-image: -webkit-image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/pageNewestSelectedActive.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/pageNewestSelectedActive%402x.png) 2x);
    background-image: image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/pageNewestSelectedActive.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/pageNewestSelectedActive%402x.png) 2x)
}

.oldest .button.page.oldest .standard {
    background-image: -webkit-image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/pageOldest.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/pageOldest%402x.png) 2x);
    background-image: image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/pageOldest.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/pageOldest%402x.png) 2x)
}

.oldest .button.page.oldest .active,
.oldest .button.page.oldest .selected {
    width: 0 !important;
    height: 0 !important;
    padding: 45px 0 0 51px;
    background-image: -webkit-image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/pageOldestActive.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/pageOldestActive%402x.png) 2x);
    background-image: image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/pageOldestActive.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/pageOldestActive%402x.png) 2x)
}

.oldest .button.page.oldest .selected {
    background-image: -webkit-image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/pageOldestSelected.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/pageOldestSelected%402x.png) 2x);
    background-image: image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/pageOldestSelected.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/pageOldestSelected%402x.png) 2x)
}

.ellipsis img,
.oldest .button.page.oldest .selected.active {
    width: 0 !important;
    height: 0 !important;
    padding: 45px 0 0 51px;
    background-image: -webkit-image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/pageOldestSelectedActive.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/pageOldestSelectedActive%402x.png) 2x);
    background-image: image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/pageOldestSelectedActive.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/pageOldestSelectedActive%402x.png) 2x)
}

.ellipsis img {
    padding: 45px 0 0 41px;
    background-image: -webkit-image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/ellipsis.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/ellipsis%402x.png) 2x);
    background-image: image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/ellipsis.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/ellipsis%402x.png) 2x)
}

.button.back .active,
.button.back .standard {
    width: 0 !important;
    height: 0 !important;
    padding: 45px 0 0 77px;
    background-image: -webkit-image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/back.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/back%402x.png) 2x);
    background-image: image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/back.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/back%402x.png) 2x)
}

.button.back .active {
    background-image: -webkit-image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/backActive.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/backActive%402x.png) 2x);
    background-image: image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/backActive.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/backActive%402x.png) 2x)
}

.other .button.page img.active[src*=page0],
.other .button.page img.standard[src*=page0] {
    width: 0 !important;
    height: 0 !important;
    padding: 45px 0 0 37px;
    background-image: -webkit-image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page0.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page0@2x.png) 2x);
    background-image: image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page0.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page0@2x.png) 2x)
}

.other .button.page img.active[src*=page0] {
    background-image: -webkit-image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page0Active.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page0Active@2x.png) 2x);
    background-image: image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page0Active.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page0Active@2x.png) 2x)
}

.other .button.page img.selected.active[src*=page0],
.other .button.page img.selected[src*=page0] {
    width: 0 !important;
    height: 0 !important;
    padding: 45px 0 0 37px;
    background-image: -webkit-image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page0Selected.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page0Selected@2x.png) 2x);
    background-image: image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page0Selected.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page0Selected@2x.png) 2x)
}

.other .button.page img.selected.active[src*=page0] {
    background-image: -webkit-image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page0SelectedActive.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page0SelectedActive@2x.png) 2x);
    background-image: image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page0SelectedActive.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page0SelectedActive@2x.png) 2x)
}

.other .button.page img.active[src*=page1],
.other .button.page img.standard[src*=page1] {
    width: 0 !important;
    height: 0 !important;
    padding: 45px 0 0 41px;
    background-image: -webkit-image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page1.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page1@2x.png) 2x);
    background-image: image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page1.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page1@2x.png) 2x)
}

.other .button.page img.active[src*=page1] {
    background-image: -webkit-image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/mainhttps://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page1Active.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/mainhttps://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page1Active@2x.png) 2x);
    background-image: image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/mainhttps://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page1Active.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/mainhttps://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page1Active@2x.png) 2x)
}

.other .button.page img.selected.active[src*=page1],
.other .button.page img.selected[src*=page1] {
    width: 0 !important;
    height: 0 !important;
    padding: 45px 0 0 41px;
    background-image: -webkit-image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page1Selected.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page1Selected@2x.png) 2x);
    background-image: image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page1Selected.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page1Selected@2x.png) 2x)
}

.other .button.page img.selected.active[src*=page1] {
    background-image: -webkit-image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page1SelectedActive.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page1SelectedActive@2x.png) 2x);
    background-image: image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page1SelectedActive.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page1SelectedActive@2x.png) 2x)
}

.other .button.page img.active[src*=page2],
.other .button.page img.standard[src*=page2] {
    width: 0 !important;
    height: 0 !important;
    padding: 45px 0 0 37px;
    background-image: -webkit-image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page2.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page2@2x.png) 2x);
    background-image: image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page2.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page2@2x.png) 2x)
}

.other .button.page img.active[src*=page2] {
    background-image: -webkit-image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page2Active.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page2Active@2x.png) 2x);
    background-image: image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page2Active.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page2Active@2x.png) 2x)
}

.other .button.page img.selected.active[src*=page2],
.other .button.page img.selected[src*=page2] {
    width: 0 !important;
    height: 0 !important;
    padding: 45px 0 0 37px;
    background-image: -webkit-image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page2Selected.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page2Selected@2x.png) 2x);
    background-image: image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page2Selected.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page2Selected@2x.png) 2x)
}

.other .button.page img.selected.active[src*=page2] {
    background-image: -webkit-image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page2SelectedActive.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page2SelectedActive@2x.png) 2x);
    background-image: image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page2SelectedActive.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page2SelectedActive@2x.png) 2x)
}

.other .button.page img.active[src*=page3],
.other .button.page img.standard[src*=page3] {
    width: 0 !important;
    height: 0 !important;
    padding: 45px 0 0 39px;
    background-image: -webkit-image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page3.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page3@2x.png) 2x);
    background-image: image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page3.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page3@2x.png) 2x)
}

.other .button.page img.active[src*=page3] {
    background-image: -webkit-image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page3Active.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page3Active@2x.png) 2x);
    background-image: image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page3Active.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page3Active@2x.png) 2x)
}

.other .button.page img.selected.active[src*=page3],
.other .button.page img.selected[src*=page3] {
    width: 0 !important;
    height: 0 !important;
    padding: 45px 0 0 39px;
    background-image: -webkit-image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page3Selected.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page3Selected@2x.png) 2x);
    background-image: image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page3Selected.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page3Selected@2x.png) 2x)
}

.other .button.page img.selected.active[src*=page3] {
    background-image: -webkit-image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page3SelectedActive.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page3SelectedActive@2x.png) 2x);
    background-image: image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page3SelectedActive.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page3SelectedActive@2x.png) 2x)
}

.other .button.page img.active[src*=page4],
.other .button.page img.standard[src*=page4] {
    width: 0 !important;
    height: 0 !important;
    padding: 45px 0 0 32px;
    background-image: -webkit-image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page4.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page4@2x.png) 2x);
    background-image: image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page4.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page4@2x.png) 2x)
}

.other .button.page img.active[src*=page4] {
    background-image: -webkit-image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page4Active.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page4Active@2x.png) 2x);
    background-image: image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page4Active.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page4Active@2x.png) 2x)
}

.other .button.page img.selected.active[src*=page4],
.other .button.page img.selected[src*=page4] {
    width: 0 !important;
    height: 0 !important;
    padding: 45px 0 0 32px;
    background-image: -webkit-image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page4Selected.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page4Selected@2x.png) 2x);
    background-image: image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page4Selected.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page4Selected@2x.png) 2x)
}

.other .button.page img.selected.active[src*=page4] {
    background-image: -webkit-image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page4SelectedActive.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page4SelectedActive@2x.png) 2x);
    background-image: image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page4SelectedActive.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page4SelectedActive@2x.png) 2x)
}

.other .button.page img.active[src*=page5],
.other .button.page img.standard[src*=page5] {
    width: 0 !important;
    height: 0 !important;
    padding: 45px 0 0 40px;
    background-image: -webkit-image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page5.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page5@2x.png) 2x);
    background-image: image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page5.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page5@2x.png) 2x)
}

.other .button.page img.active[src*=page5] {
    background-image: -webkit-image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page5Active.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page5Active@2x.png) 2x);
    background-image: image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page5Active.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page5Active@2x.png) 2x)
}

.other .button.page img.selected.active[src*=page5],
.other .button.page img.selected[src*=page5] {
    width: 0 !important;
    height: 0 !important;
    padding: 45px 0 0 40px;
    background-image: -webkit-image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page5Selected.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page5Selected@2x.png) 2x);
    background-image: image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page5Selected.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page5Selected@2x.png) 2x)
}

.other .button.page img.selected.active[src*=page5] {
    background-image: -webkit-image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page5SelectedActive.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page5SelectedActive@2x.png) 2x);
    background-image: image-set(url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page5SelectedActive.png) 1x, url(https://raw.githubusercontent.com/turtlesteak/TankTroubleAddonsFinale/main/images/forum/page5SelectedActive@2x.png) 2x)
}
#chat.open input {
    white-space: nowrap
}

#clipboard {
    opacity: 0
}
::-webkit-scrollbar {
    width: 10px
}

::-webkit-scrollbar-button {
    background-color: #353535;
    height: 0;
    width: 0;
    border-radius: 5px;
    -webkit-transition-duration: .2s;
    transition-duration: .2s
}

::-webkit-scrollbar-track {
    background-color: #646464
}

::-webkit-scrollbar-track-piece {
    background-color: #353535
}

::-webkit-scrollbar-thumb {
    height: 50px;
    background-color: #5a5a5a;
    border-radius: 2px;
    -webkit-transition: 1s;
    transition: 1s
}

::-webkit-scrollbar-thumb:hover {
    background-color: #707070
}

::-webkit-scrollbar-button:vertical:decrement {
    border-radius: 0;
    -webkit-transition-duration: .2s;
    transition-duration: .2s
}

::-webkit-scrollbar-button:vertical:decrement:hover {
    background-color: #626262
}

::-webkit-scrollbar-button:vertical:increment {
    border-radius: 0;
    -webkit-transition-duration: .2s;
    transition-duration: .2s
}

::-webkit-scrollbar-button:vertical:increment:hover {
    background-color: #626262
}

::-webkit-scrollbar-corner {
    background-color: #646464
}

::-webkit-resizer {
    background-color: #666
}
.tooltipster-default {
    box-shadow: 0 12px 14px 0 rgba(0,0,0,.25);
    border-radius: 5px;
    background: linear-gradient(to bottom,#242424,#1a1a1a);
    color: #ececec
}
.tooltipster-arrow span,
.tooltipster-arrow-bottom span,
.tooltipster-base .tooltipster-arrow span,
.tooltipster-default .tooltipster-arrow span {
    background: -o-linear-gradient(45deg, #191919 -225%, #1a1a1a 50%);
    background: linear-gradient(45deg, #191919 -225%, #1a1a1a 50%)
}
#masthead,
#primary {
    -webkit-filter: invert(100%);
    filter: invert(100%);
    background-color: #fff;
    padding: 20px !important
}

#masthead {
    background: 0
}

#masthead img,
#primary img {
    -webkit-filter: invert(100%);
    filter: invert(100%)
}
button:disabled {
    background: linear-gradient(to bottom, #1a1a1a, #0a0a0a);
    color: #f0f0f0;
    cursor: default;
}
.shopItem {
    background: linear-gradient(to bottom, #242424, #1a1a1a);
    border-radius: 5px;
    display: inline-block;
    margin: 0 10px 20px;
    padding: 5px 0;
    width: 140px;
    height: 245px;
    box-sizing: border-box;
    position: relative;
    vertical-align: top;
    color: #fff;
    text-align: center;
}
#overlay .messages .message {
    background: linear-gradient(to bottom, #242424, #1a1a1a);
    border-radius: 5px;
    color: #000;
    margin: 20px auto 20px auto;
    padding: 3px;
    text-align: left;
    width: 594px;
    overflow-wrap: break-word;
    color: #fff;
}
`);
