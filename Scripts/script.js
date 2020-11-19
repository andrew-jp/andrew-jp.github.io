var $homeBtn = $("#homeBtn");
var $aboutBtn = $("#aboutBtn");
var $contactBtn = $("#contactBtn");

$homeBtn.click(function() {
    $.scrollTo("#headers");
});
$aboutBtn.click(function() {
    $.scrollTo("#content");
});
$contactBtn.click(function() {
    $.scrollTo("#contact")
});
