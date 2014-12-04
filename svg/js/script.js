$(function(){
  //SVG設定
  var $svg_elems = $('#svg, #arrow');　//タイトルSVG、矢印SVG
  $svg_elems.lazylinepainter( 
  {
    "svgData": pathObj,
    "strokeWidth": 2,　//線の太さ
    "strokeColor": "#fff"　//線の色
  }).lazylinepainter('paint');

  //顔文字SVG
  $('#face').lazylinepainter( 
  {
    "svgData": pathObj,
    "strokeWidth": 3,　//線の太さ
    "strokeColor": "#3EC7C2"　//線の色
  }).lazylinepainter('paint');
});