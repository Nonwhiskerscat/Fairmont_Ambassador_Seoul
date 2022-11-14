$(document).ready(function() {
    $('.menu_modal').hide();
    $('.menu').click(function() {
        $('.menu_modal').show(); 
        $('header').hide();
        $('html').css('overflow', 'scroll');
    });

    $('.menu_close').click(function() {
        $('.menu_modal').hide(); 
        $('header').delay(4000).show();
    });

});


