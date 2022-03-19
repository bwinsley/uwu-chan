
let toggle = document.getElementById("toggle");

chrome.storage.sync.get("state", (items) => {
    const element = document.getElementById("toggle");

    if (element != null) {
        if (items["state"]) {
            element!.innerHTML = "uwu-chan is turned on!";
            element!.style.backgroundColor = "#5BD876";
        } else {
            element!.innerHTML = "uwu-chan is turned off :(";
            element!.style.backgroundColor = "#D85B5B";
        }
    }
})

if (toggle != null) {
    toggle.onclick = function() {
        console.log("user clicked the button");
        chrome.storage.sync.get("state", (items) => {
            const element = document.getElementById("toggle");
            if (items["state"]) {
                chrome.storage.sync.set({"state": false}, () => {
                    console.log("user toggled state to false");
                    element!.innerHTML = "uwu-chan is off :(";
                    element!.style.backgroundColor = "#D85B5B";
                    return;
                });
            } else {
                chrome.storage.sync.set({"state": true}, () => {
                    console.log("user toggled state to true");
                    element!.innerHTML = "uwu-chan is turned on!";
                    element!.style.backgroundColor = "#5BD876";
                    return;
                });
            }
            return;
        });
    }
}


