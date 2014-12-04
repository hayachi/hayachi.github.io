$(function(){
	var $mapButton = $('.link'),
	$this = $(this);
	/*---　モーダルの表示　---*/
	$mapButton.colorbox({
		inline:true,
		width:"962",
		transition: "none"
	});
	/*---　地図の表示　---*/
	for (var i in POINT){
		(function(i){
			$('.' + 'button_' +  i ).colorbox({
				//モーダルが表示されきった時に地図を生成
				onComplete:function(){
					//プラグインの引数
					var point = POINT[i];
					//マップの引数を取得
					$this.modalMap(point.id,point.pin,point.lat,point.lng);
				}
			});
		})(i);
	}
});