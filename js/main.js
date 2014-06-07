$(document).ready(calculateHeight);
$(window).resize(calculateHeight);
function calculateHeight() {
    w = $(window).width();
    h = $(window).height();
    offset = $('#navigation').height();
    $('#main > div').height(h - offset);
    $('#main img').height((h - offset)/2);
}
$('#navigation').affix({
    offset: {
        top: function() {return $('#main').height();}
    }
});
$('#navigation').on('affix.bs.affix', function() {
    $('.tab-content').css('padding-top', $(this).height());
});
$('#navigation').on('affix-top.bs.affix ', function() {
    $('.tab-content').css('padding-top', 0);
});

/*
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
*/
