"use strict";
var _a, _b;
(_a = document.getElementById("uwu-level")) === null || _a === void 0 ? void 0 : _a.addEventListener('input', function () {
    var input = document.getElementById("uwu-level");
    var output = document.getElementById("uwu-level-output");
    output.innerHTML = input.value;
});
(_b = document.getElementById("uwu-level-save")) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var input = document.getElementById("uwu-level");
    chrome.storage.local.set({ "uwu-level": input.value }, function () {
        console.log("setting uwu-level to " + input.value);
    });
    chrome.tabs.reload();
});
chrome.storage.local.get("uwu-level", function (items) {
    var input = document.getElementById("uwu-level");
    var output = document.getElementById("uwu-level-output");
    input.value = items["uwu-level"];
    output.innerHTML = items["uwu-level"];
    console.log(items["uwu-level"]);
});
