"use strict";
// Run after every chrome page loads
// This can be changed in manifest.json
function replace(text, level) {
    var words = text.split(" ");
    for (var i in words) {
        if (Math.floor(Math.random() * 100) < level)
            words[i] = words[i].toLowerCase().replace(/[rl]/g, 'w');
        if (Math.floor(Math.random() * 100) < level)
            words[i] = words[i].toLowerCase().replace(/o{2}/g, 'uwu');
        if (Math.floor(Math.random() * 100) < level)
            words[i] = words[i].toLowerCase().replace(/ou/g, 'ow');
        if (Math.floor(Math.random() * 100) < level)
            words[i] = words[i].toLowerCase().replace(/o(?!w)/g, 'owo');
    }
    text = words.join(" ");
    return text;
}
function travelElements(element, level) {
    if (element.tagName == "SCRIPT" || element.tagName == "STYLE") {
        return element;
    }
    var nodes = element.childNodes;
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].nodeType === 3 && nodes[i].textContent != null) {
            nodes[i].textContent = replace(nodes[i].textContent, level);
        }
        travelElements(nodes[i], level);
    }
    return element;
}
chrome.storage.local.get("state", function (items) {
    console.log("uwu-chan's state is set to " + items["state"]);
    if (items["state"]) {
        var elements_1 = document.querySelectorAll("body");
        chrome.storage.local.get("uwu-level", function (level) {
            for (var i = 0; i < elements_1.length; i++) {
                elements_1[i] = travelElements(elements_1[i], level["uwu-level"]);
                console.log(level["uwu-level"]);
            }
        });
    }
});
