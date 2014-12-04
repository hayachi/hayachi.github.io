$(function () {
    var TIMER = 160; //一つのフレームに対しての時間
    var animeTimer; //タイマー設定用

    //アニメーションの関数
    var spriteAnimation = function() {
        var $jsAnime = $('.jQuery').find('.sprite'); //動かしたいセレクタ

        //フレーム毎の関数
        var frame1 = function(){
            removeanimeClass();
            $jsAnime.addClass('frame1'); //フレーム1のクラスをつける
            animeTimer = setTimeout(frame2, TIMER);//次のフレームに移る
        }

        var frame2 = function(){
            removeanimeClass();
            $jsAnime.addClass('frame2');
            animeTimer = setTimeout(frame3, TIMER);
        }

        var frame3 = function(){
            removeanimeClass();
            $jsAnime.addClass('frame3');
            animeTimer = setTimeout(frame4, TIMER);
        }

        var frame4 = function(){
            removeanimeClass();
            $jsAnime.addClass('frame4');
            animeTimer = setTimeout(frame5, TIMER);
        }

        var frame5 = function(){
            removeanimeClass();
            $jsAnime.addClass('frame5');
            animeTimer = setTimeout(frame6, TIMER);
        }

        var frame6 = function(){
            removeanimeClass();
            $jsAnime.addClass('frame6');
            animeTimer = setTimeout(frame1, TIMER);
        }

        //フレームリセット用の関数
        var removeanimeClass = function(){
            $jsAnime.removeClass('frame1');
            $jsAnime.removeClass('frame2');
            $jsAnime.removeClass('frame3');
            $jsAnime.removeClass('frame4');
            $jsAnime.removeClass('frame5');
            $jsAnime.removeClass('frame6');
        }

        //フレーム１の関数を呼び出す
        frame1();
    }

    //アニメーション発火
    spriteAnimation();
});