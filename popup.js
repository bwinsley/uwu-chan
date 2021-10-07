
let toggle = document.getElementById("toggle");

chrome.storage.sync.get("state", (items) => {
    
    if (items["state"]) {
        document.getElementById("toggle").innerHTML = "uwu-chan is turned on!";
        document.getElementById("toggle").style.backgroundColor = "#5BD876";
    } else {
        document.getElementById("toggle").innerHTML = "uwu-chan is turned off :(";
        document.getElementById("toggle").style.backgroundColor = "#D85B5B";
    }
})

toggle.onclick = function() {
    console.log("user clicked the button");
    chrome.storage.sync.get("state", (items) => {
        if (items["state"]) {
            chrome.storage.sync.set({"state": false}, () => {
                console.log("user toggled state to false");
                document.getElementById("toggle").innerHTML = "uwu-chan is off :(";
                document.getElementById("toggle").style.backgroundColor = "#D85B5B";
                return;
            });
        } else {
            chrome.storage.sync.set({"state": true}, () => {
                console.log("user toggled state to true");
                document.getElementById("toggle").innerHTML = "uwu-chan is turned on!";
                document.getElementById("toggle").style.backgroundColor = "#5BD876";
                return;
            });
        }
        return;
    });
}

