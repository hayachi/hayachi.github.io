/**
 * @constructor
 */
const $target = $('#js-fullpage');
const $btn = $('.btn');


/*-------
 Fullpage.js
 */

$target.fullpage({
  easing: 'easeOut',
  scrollingSpeed: 1000
});

//ページ送りボタン
$btn.on('click',(e)=>{
  e.preventDefault();
let movePage = $(e.currentTarget).data('page');
$.fn.fullpage.moveTo(movePage);
});

/*-------
 Pjaxの操作
 */
$.pjax({
  areas:['#js-pjax'],//DOM
  link:'a.pjax',
  update: {head: 'base, meta', css: false, script: false},
  wait:3000,
  reset: {
    type: 'click progress itemload allload enter leave scroll mousemove touchstart touchmove resize'
  }
});

