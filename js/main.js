$(document).ready(calculateHeight);
$(window).resize(calculateHeight);
function calculateHeight() {
    w = $(window).width();
    h = $(window).height();
    $('#main > div').height(h);
    $('#main img').height(h/2);
}
