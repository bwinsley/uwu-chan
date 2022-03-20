"use strict";
chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.local.set({ "state": false }, function () {
        console.log("setting state to false");
    });
    chrome.storage.local.set({ "uwu-level": 100 }, function () {
        console.log("setting uwu-level to 100");
    });
    console.log("uwu-chan was installed");
    console.log("State set to OFF");
    return;
});
