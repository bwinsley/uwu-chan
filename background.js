
chrome.runtime.onInstalled.addListener(() => {
    
    chrome.storage.sync.set({"state" : true}, () => {
        console.log("setting state to true")
        return true;
    });
    
    console.log("uwu-chan was installed");
    console.log("State set to ON");
    return
});

chrome.storage.onChanged.addListener((changes, areaName) => {
    chrome.tabs.reload();
})