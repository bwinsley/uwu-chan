
chrome.runtime.onInstalled.addListener(() => {
    
    chrome.storage.local.set({"state" : false}, () => {
        console.log("setting state to false");
    });
    
    chrome.storage.local.set({"uwu-level" : 100}, () => {
        console.log("setting uwu-level to 100");
    });

    console.log("uwu-chan was installed");
    console.log("State set to OFF");
    return
});