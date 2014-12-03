jQuery( function() {
	jQuery.fn.yurayura = function( config ){
		var obj = this;
		var i = 0;
		var defaults = {
			'move' : 5,			// 動く量
			'duration' : 1000,	// 移動にかける時間
			'delay' : 0			// 両端で停止する時間
		};
		var setting = jQuery.extend( defaults, config );
		( function move() {
			i = i > 0 ? -1 : 1;
			var p = obj.position().top;
			jQuery( obj )
				.delay( setting.delay )
				.animate( { top : p + i * setting.move }, { 
					duration : setting.duration,
					complete : move
				});
		})();
	};
});