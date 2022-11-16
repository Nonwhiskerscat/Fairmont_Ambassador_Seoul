$(document).ready(function() {
    //h3 처음

    $('h3.first').css('opacity',0);

    $(window).scroll(function() {
        if($(window).scrollTop>900) {
            $(body).css('background-color', 'red');
        }
    })


    $('h3.first').animate( {
        'opacity': '1'
    },2000).animate({
        'top' : '+=40'
    },2000)

    // var screen = $(window).width();

    // if(screen < 1400) {

    // } 
    // else {

    // }
})