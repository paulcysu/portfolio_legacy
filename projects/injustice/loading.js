$(document).ready(initializeApplication);

function initializeApplication() {
    $(window).bind("load", function() {
        closeLoader();
     });
}

function closeLoader() {
    let loader = $('.loader');

    function addFade() {
        loader.addClass('fade');
    }

    function addDisplayNone() {
        loader.addClass('none')
        $('#about_modal').removeClass('shadow');
    }

    setTimeout(addFade, 60);
    setTimeout(addDisplayNone, 1000)
}