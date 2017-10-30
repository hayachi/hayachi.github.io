/**
 * @constructor
 */

let $window = $(window);

const DOM = {}; //オブジェクト化
DOM.loading = document.querySelector('.l-loading');
DOM.shape = document.querySelector('svg.shape');
DOM.path = DOM.shape.querySelector('path');

$window.on('load',()=> {

    //大枠の画面が上がる
    anime({
        targets: DOM.loading, //動かしたいセレクタ
        top: '-200vh', //動かしたいcssのプロパティ
        duration: 1600,
        easing: 'easeInOutCubic'
    });

    //svgの横幅を縮める
    anime({
        targets: DOM.shape,
        delay:800,
        duration: 200,
        easing: 'easeInOutCubic',
        scaleY: '0'
    });

    //svgのパスをアニメーションさせる
    anime({
        targets: DOM.path,
        duration: 1000,
        easing: 'easeInOutQuad',
        d: DOM.path.getAttribute('pathdata:id') //ここでアニメーションさせてます
    });
});