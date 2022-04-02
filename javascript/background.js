"use strict";
chrome.runtime.onInstalled.addListener(function (details) {
    console.log("onInstalled was called");
    if (details.reason == "install") {
        console.log("user is installing for the first time");
        chrome.storage.local.set({ "installed": true, "state": false, "uwu-level": 100 }, function () {
            console.log("setting state to false");
            console.log("setting uwu-level to 100");
            console.log("uwu-chan was installed");
        });
    }
    if (details.reason == "install" || details.reason == "update") {
        // opening update_log
        chrome.tabs.create({
            url: './../update_log.html'
        });
    }
    return;
});
