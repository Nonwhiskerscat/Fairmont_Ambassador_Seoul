$(function() {

    $('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
        navigation: true,
        navigationPosition: 'right',
		afterLoad: function(anchorLink, index) {
			console.log("현재 섹션 번호는" + index);
			if(index==3) {
				$('#fp-nav ul li a span').css('background', '#333');
			}

			else {
				$('#fp-nav ul li a span').css('background', '#fff');
			}
		}
	});

	

});