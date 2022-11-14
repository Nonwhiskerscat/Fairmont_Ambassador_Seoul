$(document).ready(function() {
    $('.menu_modal').hide();
    $('.menu').click(function() {
        $('.menu_modal').stop().slideDown();
        $('header').stop().fadeOut();
        
        $('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });

            
        });


        function close_menu() {
            $('.menu_modal').stop().slideUp();
            $('header').stop().fadeIn();
            $('body').off('scroll touchmove mousewheel');
        }

        $('.menu_close').click(close_menu);
    });

    



