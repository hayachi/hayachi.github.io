console.warn("This script is development version.");
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

"use strict";
'use strict';

/**
 * @constructor
 */
var $window = $(window);
var $cover = $('.page-cover');

/*-------
 fullpage.js
 */

function fullPage() {
    var $target = $('#js-fullpage');
    var $btn = $('.btn');

    console.log('fullpage');
    //fullpage.jsの設定
    $target.fullpage({
        easing: 'easeOut',
        scrollingSpeed: 1000,
        lockAnchors: true,
        animateAnchor: false
    });

    //ページ送りボタン
    $btn.on('click.fullpage', function (e) {
        e.preventDefault();
        var movePage = $(e.currentTarget).data('page');
        $.fn.fullpage.moveTo(movePage);
    });
}

/*-------
 初期設定
 */
$window.on('load', function () {
    //幕を開ける
    $('.page-cover').addClass('is-up');

    //fullpage.js
    fullPage();
});

/*-------
 Pjaxの操作
 */
$.pjax({
    areas: ['#js-pjax'], //再描画されるエリア
    link: 'a.pjax', //pjaxを展開させるlinkになるクラス
    update: { head: 'base, meta', css: false, script: false }, //ページ更新したい箇所の設定
    wait: 3000, //押してからURLが変わるまでの時間
    reset: { //イベントのリセット
        type: 'click progress itemload allload enter leave scroll mousemove touchstart touchmove resize'
    }
});

/*-------
 Pjax実行前
 */
$(document).on('pjax:fetch', function () {
    console.log('実行前');
    //幕を閉じる
    $('.page-cover').removeClass('is-up');

    //indexから離れる時
    if ($('#js-fullpage').length) {

        setTimeout(function () {
            console.log('解除');
            $.fn.fullpage.destroy('all');
        }, 1000);
    }
});

/*-------
 Pjax実行後
 */
$(document).on('pjax:ready', function () {
    console.log('実行後');

    setTimeout(function () {
        //幕を開ける
        $('.page-cover').addClass('is-up');
    }, 2000);

    //indexに到達した時
    if ($('#js-fullpage').length) {
        fullPage();
    }
});

/***/ }
/******/ ]);
//# sourceMappingURL=maps/app.map