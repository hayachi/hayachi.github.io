/*-----------------PLUGIN--------------------*/
(function() {
	$.fn.enter = function(enter,leave) {
		this.on('mouseenter mouseover', enter);
		this.on('mouseleave', leave);
	};
})();

/*-----------------Blue Section--------------------*/
$(function() {
	var SPEED = 300;/* スピード設定 */
	$(".btn-1a").enter(function() {
		$(this).stop().animate(/* マウスを乗せたとき */
			{ "backgroundColor" : "#ffffff" }, SPEED);
	},function() {
		$(this).stop().animate(/* マウスが外れたとき */
			{ "backgroundColor" : "#0e83cd" }, SPEED);
	});

	$(".btn-1b").enter(function() {
		$(this).find(".back").stop().animate(/* マウスを乗せたとき */
			{ "height" : "100%" }, SPEED);
	},function() {
		$(this).find(".back").stop().animate(/* マウスが外れたとき */
			{ "height" : "0%" }, SPEED);
	});

	$(".btn-1c").enter(function() {
		$(this).find(".back").stop().animate(/* マウスを乗せたとき */
			{ "width" : "100%" }, SPEED);
	},function() {
		$(this).find(".back").stop().animate(/* マウスが外れたとき */
			{ "width" : "0%" }, SPEED);
	});

	$(".btn-1d").enter(function() {
		$(this).find(".back span").stop().animate(/* マウスを乗せたとき */
			{ "width" : "0%" }, SPEED);
	},function() {
		$(this).find(".back span").stop().animate(/* マウスが外れたとき */
			{ "width" : "50%" }, SPEED);
	});

	$(".btn-1e").enter(function() {
		$(this).find(".back span").stop().animate(/* マウスを乗せたとき */
			{ "height" : "0%" }, SPEED);
	},function() {
		$(this).find(".back span").stop().animate(/* マウスが外れたとき */
			{ "height" : "100%" }, SPEED);
	});

	/*-----------------Green Section--------------------*/
	/*背景色のアニメーション*/
	$(".btn-2").enter(function() {
		$(this).stop().animate(/* マウスを乗せたとき */
			{ "backgroundColor" : "#24b662" }, SPEED);
	},function() {
		$(this).stop().animate(/* マウスが外れたとき */
			{ "backgroundColor" : "#2ECC71" }, SPEED);
	});
	/*アイコンのアニメーション*/
	$(".btn-2a").enter(function() {
		$(this).find("span").stop().animate(/* マウスを乗せたとき */
		{
			"left" : "80%",
			"opacity" : "1" }, SPEED);
	},function() {
		$(this).find("span").stop().animate(/* マウスが外れたとき */
		{
			"left" : "130%",
			"opacity" : "0" }, SPEED);
	});

	$(".btn-2b").enter(function() {
		$(this).find("span").stop().animate(/* マウスを乗せたとき */
		{
			"left" : "10%",
			"opacity" : "1" }, SPEED);
	},function() {
		$(this).find("span").stop().animate(/* マウスが外れたとき */
		{
			"left" : "-50%",
			"opacity" : "0" }, SPEED);
	});

	$(".btn-2c").enter(function() {
		$(this).find("span").stop().animate(/* マウスを乗せたとき */
		{
			"left" : "80%",
			"opacity" : "1" }, SPEED);
	},function() {
		$(this).find("span").stop().animate(/* マウスが外れたとき */
		{
			"left" : "70%",
			"opacity" : "0" }, SPEED);
	});

	$(".btn-2d").enter(function() {
		$(this).find("span").stop().animate(/* マウスを乗せたとき */
		{
			"left" : "10%",
			"opacity" : "1" }, SPEED);
	},function() {
		$(this).find("span").stop().animate(/* マウスが外れたとき */
		{
			"left" : "30%",
			"opacity" : "0" }, SPEED);
	});

	/*-----------------Purple　Section--------------------*/
	/*背景色のアニメーション*/
	$(".btn-3").enter(function() {
		$(this).stop().animate(/* マウスを乗せたとき */
		{ "backgroundColor" : "#9053a9" }, SPEED);
	},function() {
		$(this).stop().animate(/* マウスが外れたとき */
		{ "backgroundColor" : "#823AA0" }, SPEED);
	});
	/*要素のアニメーション*/
	$(".btn-3a").enter(function() {
		$(this).find(".text").stop().animate(/* マウスを乗せたとき */
			{ "top" : "80px" }, SPEED);
		$(this).find(".face").stop().animate(
			{ "top" : "0px" }, SPEED);
	},function() {
		$(this).find(".text").stop().animate(/* マウスが外れたとき */
			{ "top" : "25px" }, SPEED);
		$(this).find(".face").stop().animate(
			{ "top" : "-100%" }, SPEED);
	});

	$(".btn-3b").enter(function() {
		$(this).find(".text").stop().animate(/* マウスを乗せたとき */
			{ "left" : "-100%" }, SPEED);
		$(this).find(".face").stop().animate(
			{ "left" : "0px" }, SPEED);
	},function() {
		$(this).find(".text").stop().animate(/* マウスが外れたとき */
			{ "left" : "0%"  }, SPEED);
		$(this).find(".face").stop().animate(
			{ "left" : "200%" }, SPEED);
	});
});