// ==UserScript==
// @name         YTRefresher
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description just keep refreshin
// @author       yeloh
// @match        *://www.youtube.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    function detectAd() {
        if (document.querySelector("div.ad-showing")) {
            //Ad is active as a video
            location.reload(true);
            console.log("ad detected, refreshing");
        }
    }
    setInterval(detectAd, 1000);
})();