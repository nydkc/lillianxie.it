$(document).ready(calculateHeight);
$(window).resize(calculateHeight);
function calculateHeight() {
    w = $(window).width();
    h = $(window).height();
    if (h <= 480) { 
        $('#main h1').css('font-size', 45);
        $('#main h2').css('font-size', 25);
        $('#main img').css('margin-top', 12).css('margin-bottom', 12);
    }
    else {
        $('#main h1').removeAttr('style');
        $('#main h2').removeAttr('style');
        $('#main img').removeAttr('style');
    }
    offset = $('#navigation').height();
    $('#main > div').height(h - offset);
    $('#main img').height((h - offset)/2.4);
    $('#main h1').css('margin-top', h/13);
    $('.tab-content').height(h);
}
$('#navigation .navigation-bar').on('show.bs.collapse', function() {
    $('#navigation .navbar-header .glyphicon').addClass('rotate');
});
$('#navigation .navigation-bar').on('hide.bs.collapse', function() {
    $('#navigation .navbar-header .glyphicon').removeClass('rotate');
});
$('#navigation .navigation-bar').on('hidden.bs.collapse', function() {
    $('.tab-content').css('padding-top', $('#navigation.affix').height());
});
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
$('a[data-toggle="tab"]').on('shown.bs.tab', function() {
    $('#navigation .navigation-bar').collapse('hide');
    $('html,body').animate({
        scrollTop: $('.tab-content').offset().top + 1 + $('#navigation.affix').height() - $('#navigation').height()
    }, 500);
});
$(window).scroll(function() {
    if ($(window).width() <= 767) {
        $('.tab-content').css('padding-top', $('#navigation.affix').height());
    }
    if ($(window).scrollTop() > $('#main').height()) {
        var x = $(window).scrollTop() - $('#main').height();
        if (x > 26) {
            x = 26;
        }
        $('#navigation.affix li a').each(function() {
            $(this).css('padding-top', (20 - (x * .46)));
            $(this).css('padding-bottom', (20 - (x * .54)));
        });
    }
    else {
        $('#navigation li a').each(function() {
            $(this).removeAttr("style");
        });
    }
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
