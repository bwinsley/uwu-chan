function replace(text) {
    text = text.toLowerCase();
    text = text.replace(/[rl]/g, 'w');
    text = text.replace(/o{2}/g, 'uwu');
    text = text.replace(/ou/g, 'ow');
    text = text.replace(/o(?!w)/g, 'owo');

    return text;
}

function travel(element) {

    if (element.tagName == "SCRIPT" || element.tagName == "STYLE") {
        return element;
    } 

    var nodes = element.childNodes;
    
    for(var i = 0; i < nodes.length; i++) {
        if (nodes[i].nodeType === 3) {
            nodes[i].textContent = replace(nodes[i].textContent)
            
        }
        travel(nodes[i])
    }
    return element;
}

chrome.storage.sync.get("state", (items) => {
    console.log("uwu-chan's state is set to " + items["state"]);
    
    if (items["state"]) {
        let elements = document.querySelectorAll("body");

        for (let i = 0; i < elements.length; i++) {
            //console.log(elements[i].textContent)
            elements[i] = travel(elements[i]);
        }
    }
})



