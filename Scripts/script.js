
var $aboutBtn = $("#aboutBtn");
var $contactBtn = $("#contactBtn");
var $classBtn = $("#classBtn");

$aboutBtn.click(function() {
    $('html, body').animate({
        scrollTop: ($('#content').offset().top)
    },500);
});

$contactBtn.click(function() {
    $('html, body').animate({
        scrollTop: ($('#contact').offset().top)
    },500);
});

$classBtn.click(function() {
    $('html, body').animate({
        scrollTop: ($('#classTable').offset().top)
    },500);
});

