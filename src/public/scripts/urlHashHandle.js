'use strict';

$(document).ready(function () {
    var hashLocation = window.location.hash;
    if (window.location.hash) {
        var inputLocation = $(hashLocation);
        if (inputLocation.length > 0) {
            inputLocation.prop('checked', true);
            $(window).scrollTop(inputLocation.parent().offset().top);
        }
    }
});