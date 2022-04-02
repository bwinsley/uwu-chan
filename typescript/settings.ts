document.getElementById("uwu-level")?.addEventListener('input', () => {
    let input = <HTMLInputElement>document.getElementById("uwu-level");
    let output = <HTMLInputElement>document.getElementById("uwu-level-output");
    output.innerHTML = input.value;
    
});

document.getElementById("uwu-level-save")?.addEventListener('click', () => {
    let input = <HTMLInputElement>document.getElementById("uwu-level");
    chrome.storage.local.set({"uwu-level" : input.value}, () => {
        console.log("setting uwu-level to " + input.value);
    });
    chrome.tabs.reload();
});

chrome.storage.local.get("uwu-level", (items) => {
    let input = <HTMLInputElement>document.getElementById("uwu-level");
    let output = <HTMLInputElement>document.getElementById("uwu-level-output");
    input.value = items["uwu-level"];
    output.innerHTML = items["uwu-level"];
    console.log(items["uwu-level"]);
});

