chrome.commands.onCommand.addListener(function(command) {
    if(command == "toggle_people")
        toggle_people();
});

toggle_people = function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {cmd: "toggle_people"}, function(response) {});
    });
}
