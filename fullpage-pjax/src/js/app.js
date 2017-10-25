/**
 * @constructor
 */
const $window = $(window);
const $cover = $('.page-cover');

/*-------
 fullpage.js
 */

function fullPage(){
    const $target = $('#js-fullpage');
    const $btn = $('.btn');

    console.log('fullpage');
    //fullpage.jsの設定
    $target.fullpage({
        easing: 'easeOut',
        scrollingSpeed: 1000,
        lockAnchors: true,
        animateAnchor: false
    });

    //ページ送りボタン
    $btn.on('click.fullpage',(e)=>{
        e.preventDefault();
        let movePage = $(e.currentTarget).data('page');
        $.fn.fullpage.moveTo(movePage);
    });
}

/*-------
 初期設定
 */
$window.on('load',()=>{
    //幕を開ける
    $('.page-cover').addClass('is-up');

    //fullpage.js
    fullPage();
});



/*-------
 Pjaxの操作
 */
$.pjax({
  areas:['#js-pjax'],//再描画されるエリア
  link:'a.pjax',//pjaxを展開させるlinkになるクラス
  update: {head: 'base, meta', css: false, script: false},//ページ更新したい箇所の設定
  wait:3000,//押してからURLが変わるまでの時間
  reset: { //イベントのリセット
    type: 'click progress itemload allload enter leave scroll mousemove touchstart touchmove resize'
  }
});

/*-------
 Pjax実行前
 */
$(document).on('pjax:fetch',function() {

    //幕を閉じる
    $('.page-cover').removeClass('is-up');

    //indexから離れる時
    if($('#js-fullpage').length){

        setTimeout(function(){
            console.log('解除');
            $.fn.fullpage.destroy('all');
        },1000);
    }

});

/*-------
 Pjax実行後
 */
$(document).on('pjax:ready',function() {

    setTimeout(()=>{
        //幕を開ける
        $('.page-cover').addClass('is-up');
    },2000);

    //indexに到達した時
    if($('#js-fullpage').length){
        fullPage();
    }
});