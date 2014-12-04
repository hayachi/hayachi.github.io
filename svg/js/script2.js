$(function(){
  //SVG設定
  var $svg_elems = $('#svg, #onclick, #arrow');　//タイトルSVG、クリックSVG、矢印SVG
  $svg_elems.lazylinepainter( 
  {
    "svgData": pathObj,
    "strokeWidth": 2,
    "strokeColor": "#fff"
  }).lazylinepainter('paint');

  //顔文字SVGの関数
  function faceAnimation() {
    $('#face').lazylinepainter( 
    {
      "svgData": pathObj,
      "strokeWidth": 3,
      "strokeColor": "#3EC7C2"
    }).lazylinepainter('paint');
  }

  //顔文字SVGの発火するタイミングを設定
  var $window = $(window),
      $section = $('#section'),
      topSection = $section.offset().top; //sectionのtopの位置を取得
  var Flag = false;　//フラグの設定

      $window.scroll(function() {
    if ($window.scrollTop() < topSection ) {　//スクロール
      if ( Flag === false ) {
        faceAnimation();　//顔文字SVG出力
        Flag = true;
      }
    }
  });

  //クリックSVGのイベント
  $('#onclick').on('click', function() {
    $('html, body').animate({scrollTop:topSection}, 800);
    event.preventDefault();
    return false;
  });
});