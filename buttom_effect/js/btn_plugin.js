/*-----------------PLUGIN--------------------*/
(function() {
	$.fn.enter = function(enter,leave) {
		this.on('mouseenter mouseover', enter);
		this.on('mouseleave', leave);
	};
})();
