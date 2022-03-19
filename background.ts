
chrome.runtime.onInstalled.addListener(() => {
    
    chrome.storage.local.set({"state" : true}, () => {
        console.log("setting state to true")
    });
    
    chrome.storage.local.set({"intensity" : 10});

    console.log("uwu-chan was installed");
    console.log("State set to ON");
    return
});

chrome.storage.onChanged.addListener((changes, areaName) => {
    chrome.tabs.reload();
})