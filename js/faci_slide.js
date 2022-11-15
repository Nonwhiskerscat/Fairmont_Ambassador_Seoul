$(document).ready(function() {
    function faciSlide() {

        let count=1;
        
        function auto() {
            
            $('.faci_back_slide ul').animate({left:'-100vw'}, 1000, function() {
                $('.faci_back_slide ul').append($(".faci_back_slide ul li:first-child")).css({'left':0});
                
            });
            // $('.faci_back').slideUp(500).slideDown(500);

            var $width=$('.faci_back').outerWidth()*(-1);
                console.log($width);
                
                $('.faci_back').animate({ 
                    'width': 0,
                }, 500).animate({
                    'width': '28.64583333333333%'
                }, 500);

            if(count==3) {
                $('.faci_back').css('background-color', 'rgba(180,34,45,0.75)');
            }

            if(count==1) {
                $('.faci_back').css('background-color', 'rgba(0, 0, 148, 0.5)');
            }

            if(count==2) {
                $('.faci_back').css('background-color', 'rgba(62, 25, 0, 0.8)');
            }
            

    
            if(count==3) {
                $(`.faci_contents_slide li:nth-child(1)`).delay(1000).fadeIn();
                $(`.faci_contents_slide li:nth-child(3)`).hide();
                $(`.faci_navi li:nth-child(1)`).addClass('locate')
                $(`.faci_navi li:nth-child(3)`).removeClass('locate');
            }
    
            else {
                $(`.faci_contents_slide li:nth-child(${count+1})`).delay(1000).fadeIn();
                $(`.faci_contents_slide li:nth-child(${count})`).hide();
                $(`.faci_navi li:nth-child(${count+1})`).addClass('locate')
                $(`.faci_navi li:nth-child(${count})`).removeClass('locate');
            }
            
            console.log(count);
            count++;
            if(count==4) count=1;
        }
        
        let timer=setInterval(auto,6000);
        
        $('.faci_content_slide').on('mouseover', ()=> {
            clearInterval(timer);
        });
    
        $('.faci_content_slide').on('mouseleave', ()=> {
            timer=setInterval(auto,6000);
        });
    
        return false;
    }

    faciSlide();
});


