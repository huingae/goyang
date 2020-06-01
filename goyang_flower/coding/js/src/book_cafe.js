(function($){
	var win =$(window);
	var winH = win.height();

	var viewBox = $('#viewBox');
	// var guideBox = $('#guideBox');
	var contentBox = $('#contentBox');
	viewBox.height(winH/1.5);
	// guideBox.height(winH/2);
	contentBox.height(winH*1.2);

	win.resize(function(){
		viewBox.height(winH/2);
		contentBox.height(winH*1.2);
	});

	var conLink = $(".content_menu").find('a');
	var imgBox = $(".img_box").find('img');
	conLink.on('mouseenter focus click',function(){
		$(this).find(imgBox).addClass('action');
	});
	conLink.on('mouseleave blur',function(){
		$(this).find(imgBox).removeClass('action');
	})

})(jQuery);