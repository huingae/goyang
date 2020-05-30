// goyang_flower.js
(function($){
	var win =$(window);
	var winH = win.height();

	var viewBox = $('#viewBox');
	var infoBox = $('#infoBox');
	var ticketBox = $("#ticketBox");
	viewBox.height(winH);
	infoBox.height(winH);
	ticketBox.height(winH);

	win.resize(function(){
		viewBox.height(winH);
		infoBox.height(winH);
		ticketBox.height(winH);
	});




})(jQuery);