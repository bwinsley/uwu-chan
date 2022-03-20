function replace(text: string, level: number) {
    let words = text.split(" ");

    for (let i in words) {

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

function travelElements(element: HTMLElement, level: number) {

    if (element.tagName == "SCRIPT" || element.tagName == "STYLE") {
        return element;
    } 

    var nodes = element.childNodes;
    
    for(var i = 0; i < nodes.length; i++) {
        if (nodes[i].nodeType === 3 && nodes[i].textContent != null) {
            nodes[i].textContent = replace(nodes[i].textContent!, level);
        }
        travelElements(<HTMLElement>nodes[i], level);
    }
    return element;
}

chrome.storage.local.get("state", (items) => {
    console.log("uwu-chan's state is set to " + items["state"]);
    
    if (items["state"]) {
        let elements = document.querySelectorAll("body");

        chrome.storage.local.get("uwu-level", (level) => {
            for (let i = 0; i < elements.length; i++) {
                elements[i] = <HTMLBodyElement>travelElements(<HTMLElement>elements[i], level["uwu-level"])!;
                console.log(level["uwu-level"]);
            }
        })
    }
})



