//スティッキーヘッダー
var $window = $(window), //ウィンドウを指定
$content = $("#content"), //#content部分
$chenge = $("#change"), //#change部分
topContent = $content.offset().top; //#contentの位置を取得

var sticky = false;

 $window.on("scroll", function () {
      if ($window.scrollTop() > topContent) {　//scroll位置が#contentの上にある場合
           if ( sticky === false ){
                $chenge.slideDown();　//#change部分が上がる。
                sticky = true;
           }
      } else {
           if ( sticky === true ){　//scroll位置が下にある場合
                $chenge.slideUp();//#change部分が降りてくる。
                sticky = false;
           }
      }
 });
 $window.trigger("scroll");