// gallery.js
(function($){
	var win =$(window);
	var winH = win.height();

	var viewBox = $('#viewBox');
	// var guideBox = $('#guideBox');
	var contentBox = $('#contentBox');
	viewBox.height(winH/1.5);
	// guideBox.height(winH/2);
	contentBox.height(winH*1.5);

	win.resize(function(){
		viewBox.height(winH/2);
		contentBox.height(winH*1.5);
	});



})(jQuery);