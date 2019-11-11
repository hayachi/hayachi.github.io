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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/***/ function(module, exports, __webpack_require__) {

"use strict";


var callback = function callback(entries, observer) {
    entries.forEach(function (entry) {
        //console.log(entry.time)
        //console.log(entry.isIntersecting)
        //console.log(entry.intersectionRatio)
        //console.log(entry.boundingClientRect)
        //console.log(entry.intersectionRect,entry.target)
        //console.log(entry.rootBounds)

        if (entry.isIntersecting === true) {
            console.log('test', entry.target);
            entry.target.classList.add('is-show');
        }
    });
};

var options1 = { root: null, rootMargin: '0px', threshold: 0 };
var observer1 = new IntersectionObserver(callback, options1);
var target1 = document.querySelector('.section--1');
observer1.observe(target1);

var options2 = { root: null, rootMargin: '0px', threshold: 1.0 };
var observer2 = new IntersectionObserver(callback, options2);
var target2 = document.querySelector('.section--2');
observer2.observe(target2);

var options3 = { root: null, rootMargin: '0px', threshold: 1.0 };
var observer3 = new IntersectionObserver(callback, options3);
var target3 = document.querySelector('.section--3');
observer3.observe(target3);

var layzyImage = document.querySelectorAll('img.lazyload');

/***/ }
/******/ ]);
//# sourceMappingURL=maps/app.map