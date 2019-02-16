


$(document).ready(function () {
    'use strict';
    $('#pricingoption li').on('mousemove', function (event) {
        $(this).find('.tooltip').css({
            left: event.pageX,
            top: event.pageY,

        })
    });

});
let isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
if (!isChrome) {
    $('#iframeAudio').remove()
}
else {
    $('#playAudio').remove() //just to make sure that it will not have 2x audio in the background 
}
