// main.js
(function($){

	var win =$(window);
	var winH = win.height();

	var addBannerBox = $('#adBannerBox');
	var storyBox = $('#storyBox');
	var videoBox = $("#videoBox");
	addBannerBox.height(winH);
	storyBox.height(winH);
	videoBox.height(winH);

	win.resize(function(){
		addBannerBox.height(winH);
		storyBox.height(winH);
		videoBox.height(winH);
	});

	// scrollIcon-----------------------------
	var scrollIcon = $('.scroll_icon');
	function loopBoat(){scrollIcon.animate({bottom:'2%'},500).animate({bottom:0},500,loopBoat);}
	loopBoat();
	// ===============================================

})(jQuery);