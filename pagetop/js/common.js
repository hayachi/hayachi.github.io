$(function () {
    //変数▼
    var $pageLink = $('#page_link'),
        $pageButton = $('#button'),
        $backButton = $('#button_change');

    /*---ページトップのcrickイベント---*/
    $pageLink.on('click', function (event) {

        //scrollの変数▼
        var self = $(this), //crickした要素
            id = $(this).attr("href"), //リンクの値を取得
            OFFSET = 80, //つけ足す値
            pageTop = self.offset().top, //ボタンのトップ位置
            target = $(id).offset().top - OFFSET; //到着点のトップの位置-付け足す位置

        self.css({top: pageTop}); //TOPのdefaultの値を設置

        //アニメーションの順番をまとめる
        function playAnimation() {
            fadeAnime()//動き１
                .then(upDown)//動き２
                .then(moveTop)//動き３
                .then(removeAction);//動き４
        }

        //アイコンが消えて顔が出てくるアニメーション動き１
        function fadeAnime() {
            var SPEED = 500;
            var d = new $.Deferred;
            $pageButton.animate({opacity: 0}, SPEED, function () {
                $backButton.animate({opacity: 1}, SPEED, function () {
                    d.resolve();
                });
            });
            return d.promise();
        }

        //上下にバウンドするアニメーション動き２
        function upDown(){
            var TIMER = 1000,
                TIMER2 = 700;
            var d = new $.Deferred;
            self.animate({
                top: pageTop - 140
            }, TIMER, function () {
                self.animate({
                    top: pageTop - 40
                }, TIMER2, function () {
                    d.resolve();
                });
            });
            return d.promise();
        }

        //ページトップに移動するアニメーション動き３
        function moveTop(){
            var TIMER = 1500;
            var d = new $.Deferred;
            $('html, body').animate({scrollTop: target}, TIMER, "easeInCubic");
            self.animate({top: target}, TIMER, "easeInCubic", function () {
                d.resolve();
            });
            return d.promise();
        }

        //アイコンを元の表示と位置に戻す動き４
        function removeAction() {
            var SPEED = 500;
            var d = new $.Deferred;
            self.hide(function () {
                self.fadeIn();
                self.css({top: pageTop});
                $pageButton.animate({opacity: 1}, SPEED);
                $backButton.animate({opacity: 0}, SPEED);
                d.resolve();
            });
            return d.promise();
        }

        //アニメーションの関数を実行
        playAnimation();

        event.preventDefault();
       return false;
    });

    //ゆらゆらアニメーション
    $pageButton.find('i').yurayura({
        'move': 5,
        'duration' : 500
    });
});