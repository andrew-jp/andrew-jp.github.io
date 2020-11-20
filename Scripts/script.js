
var $aboutBtn = $("#aboutBtn");
var $contactBtn = $("#contactBtn");

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
