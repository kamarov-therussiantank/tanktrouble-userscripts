// ==UserScript==
// @name TankTrouble Booster
// @namespace http://tampermonkey.net/
// @version      2025.1.4
// @license      GPL-3.0
// @description Boost performance for TankTrouble game by lowering in game quality and its values.
// @author kamarov
// @match https://tanktrouble.com/*
// @grant none
// @downloadURL https://update.greasyfork.org/scripts/492792/TankTrouble%20Booster.user.js
// @updateURL https://update.greasyfork.org/scripts/492792/TankTrouble%20Booster.meta.js
// ==/UserScript==

//Disable camera shake, lower the amount of feathers spawning
UIConstants.MAX_CAMERA_SHAKE = 0;
UIConstants.TANK_FEATHER_COUNT = 5
UIConstants.TANK_FEATHER_POOL_SIZE = 10

//Lower the amount of particles spawning
QualityManager.QUALITY_VALUES.auto = {
    "tank explosion smoke count": 2,
    "tank explosion fragment count": 2,
    "missile launch smoke count": 0,
    "missile smoke frequency": 360,
    "mine explosion smoke count": 2,
    "crate land dust count": 4,
    "aimer min segment length":2,
    "aimer off max segment length": 5.0,
    "aimer on max segment length": 3.0,
    "bullet puff count": 2,
    "shield inverse bolt probability": 1,
    "shield spark particles per emit": 1,
    "spawn zone inverse unstable particle probability": 1,
    "spawn zone num collapse particles": 3
};

QualityManager.QUALITY_VALUES.high = {
    "tank explosion smoke count": 2,
    "tank explosion fragment count": 2,
    "missile launch smoke count": 0,
    "missile smoke frequency": 360,
    "mine explosion smoke count": 2,
    "crate land dust count": 0,
    "aimer min segment length": 2,
    "aimer off max segment length": 5.0,
    "aimer on max segment length": 3.0,
    "bullet puff count": 2,
    "shield inverse bolt probability": 1,
    "shield spark particles per emit": 1,
    "spawn zone inverse unstable particle probability": 1,
    "spawn zone num collapse particles": 2
};

QualityManager.QUALITY_VALUES.low = {
    "tank explosion smoke count": 1,
    "tank explosion fragment count": 1,
    "missile launch smoke count": 0,
    "missile smoke frequency": 360,
    "mine explosion smoke count": 1,
    "crate land dust count": 0,
    "aimer min segment length": 0,
    "aimer off max segment length": 4.0,
    "aimer on max segment length": 2.0,
    "bullet puff count": 1,
    "shield inverse bolt probability": 1,
    "shield spark particles per emit": 0,
    "spawn zone inverse unstable particle probability": 1,
    "spawn zone num collapse particles": 1
};
