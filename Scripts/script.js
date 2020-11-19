var $homeBtn = $("#homeBtn");
var $aboutBtn = $("#aboutBtn");
var $contactBtn = $("#contactBtn");

$homeBtn.click(function() {
    $('html, body').animate({
        scrollTop: ($('#headers').offset().top)
    },500);;
});
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
