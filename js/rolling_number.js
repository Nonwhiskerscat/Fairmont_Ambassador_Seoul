$(document).ready(function() {
    var isVisible = false;

    $(window).on('scroll',function() {
        if (rolling($('.main1'))&&!isVisible) {
            isVisible=true;
        }

        if(isVisible) rolling();

        function rolling() {
            var num= 222;
        
            $({ val : 0 }).animate({ val : num }, {
            duration: 4000,
            step: function() {
            var num = numberWithCommas(Math.floor(this.val));
                $(".rolling").text(num);
            },
            
            complete: function() {
                var num = numberWithCommas(Math.floor(this.val));
                $(".rollong").text(num);
            }
            });
        
            function numberWithCommas(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
        }
    });

    
    
});

