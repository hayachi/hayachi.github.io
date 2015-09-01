$(function(){

    //1.アコーディオン用の変数
    var $window = $(window),
        $wrapper = $('#wrapper'),
        $accordion = $('#js-accordion'),
        $menuButton = $(".menu-button"),
        $jsCover = $('#js-cover'),
        $nav = $('.nav-content'),

        //ナビゲーションの高さ
        navHeight = $nav.height(),

        //アニメーションの速度
        SPEED = 300,

        //wrapperの高さを取得
        bodyHeight = $wrapper.height(),

        //ヘッダータイトルの高さ
        HEADER_HEIGHT = 65;


    //2.リサイズ時でも変動可能なグローバル変数
    $window.on('load orientationchange', function() {
        //ウィンドウの高さを取得
        windowHeight = $window.height();
    });

    //3.開く時の動き
    function openAction(){
        //クラスをつける
        $accordion.addClass('is-open');
        //windodwの高さがナビゲーションより高さが狭い時
        if(navHeight > windowHeight){

            //wrapperの高さnavの高さにする
            $wrapper.css({overflow:'hidden'}).height(navHeight + HEADER_HEIGHT);

            //高さをつけてオーバーレイを表示
            $jsCover.height(navHeight + HEADER_HEIGHT).stop().animate({opacity:1},SPEED);

        } else {

            //wrapperの高さwindowの高さと同じにする
            $wrapper.css({overflow:'hidden'}).height(windowHeight);

            //高さをつけてオーバーレイを表示
            $jsCover.height(windowHeight).stop().animate({opacity:1},SPEED);
        }
    }

    //4.閉じる時の動き
    function closeAction(){
        //クラスを外す
        $accordion.removeClass('is-open');

        //wrapperの高さを元にもどしてスクロールできるようにする。
        $wrapper.css({overflow:'visivle'}).height(bodyHeight);

        //オーバーレイが消える
        $jsCover.stop().animate({opacity:0},SPEED);
    }

    //5.クリックイベント
    $menuButton.on('click',function(){
        //open用のクラスがあるかどうか判定
        if($accordion.hasClass('is-open')){
            //閉じる時の動き
            closeAction();
        } else {
            //開く時の動き
            openAction();
        }
    });

    //6.開いたままスマホを傾けた時
    $window.on('orientationchange', function () {
        if($accordion.hasClass('is-open')){
            if(navHeight > windowHeight) {
                //wrapperの高さnavの高さにする
                $wrapper.height(navHeight + HEADER_HEIGHT);
                $jsCover.height(navHeight + HEADER_HEIGHT);
            } else {
                //wrapperの高さwindowの高さと同じにする
                $wrapper.height(windowHeight);
                $jsCover.height(windowHeight);
            }
        }
    });

});
