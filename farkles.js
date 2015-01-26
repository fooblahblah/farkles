$(function() {
    $('head').append('<style>.timelineFocused { left : 0% !important; width : 70% !important; } .incidentsMinimal { left : 70% !important; width : 30% !important; }</style>');
    username = $('body > header.primary-header > div.user-nav.dropdown-wrapper.dropdown > a').text().trim();
    chatInput = $('#timeline > header > textarea');
    chatInput.keypress(function (e) {
        if (e.which == 13) {
            curItem = null;
        }
    });
    togglePeople();
});

togglePeople = function() {
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

prevCommand = function() {
    if($('#timeline > header > textarea').is(":focus")) {
        var myself = '#timeline > div.timeline-container.scrollable.js-timeline-container > ul > li.myself';
        if(typeof curItem == 'undefined' || curItem == null) {
            curItem = $(myself).first();
        } else {
            curItem = curItem.nextAll(myself).first();
        }

        console.log(curItem.text());
        chatInput.val(curItem.find('.what').text());
    }
}

nextCommand = function() {
    if($('#timeline > header > textarea').is(":focus")) {
        var myself = '#timeline > div.timeline-container.scrollable.js-timeline-container > ul > li.myself';
        if(typeof curItem != 'undefined' || curItem != null) {
            curItem = curItem.prevAll(myself).first();
            console.log(curItem);
            $(chatInput).val(curItem.find('.what').text());
        }

    }
}


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.cmd == "toggle_people")
            togglePeople();
        else if (request.cmd == "prev_command")
            prevCommand();
        else if (request.cmd == "next_command")
            nextCommand();
    });
