$(function() {
    
    $(".tab_content").hide();
    $(".tab_content:first").show();

    $(".gnb > li > a").click(function(event) {
        event.preventDefault();
    });

    $("ul.gnb li").click(function () {
        $("ul.gnb li").removeClass("active").css("color","#333");
        $(this).addClass("active").css("color","darked");
        $(".tab_content").hide()
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn()


        $('.slide_gallery2').bxSlider({
			auto: true,  // 슬라이드 자동 전환
			autoControls: false,  // 재생/멈춤 버튼 노출
			stopAutoOnClick: true,  // stop버튼 누르면 정지
			pager: false,  // 블릿 버튼 노출
			speed: 500
		});
        $('.slide_gallery3').bxSlider({
			auto: true,  // 슬라이드 자동 전환
			autoControls: false,  // 재생/멈춤 버튼 노출
			stopAutoOnClick: true,  // stop버튼 누르면 정지
			pager: false,  // 블릿 버튼 노출
			speed: 500
		});
    });
});