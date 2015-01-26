$(function() {
    $('head').append('<style>.timelineFocused { left : 0% !important; width : 70% !important; } .incidentsMinimal { left : 70% !important; width : 30% !important; }</style>');
    toggle_people();
});

toggle_people = function() {
    if($("#timeline").hasClass('timelineFocused')) {
        $("#people").show();
        $('#timeline').removeClass('timelineFocused');
        $('#incidents').removeClass('incidentsMinimal');
    } else {
        $("#people").hide();
        $('#timeline').addClass('timelineFocused ');
        $('#incidents').addClass('incidentsMinimal');
    }
}

shrink_incidents = function() {
    $("#incidents").css({"left" : "70%", "width" : "30%" });
    $("#timeline").css({"left" : "0%", "width" : "70%" });
}


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        // console.log(sender.tab ?
        //             "from a content script:" + sender.tab.url :
        //             "from the extension");
        if (request.cmd == "toggle_people")
            toggle_people();
    });
