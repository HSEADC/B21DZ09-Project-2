/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
 // console.log('Test map')

function initModal() {
  var buttonMapPoint = document.querySelector('.-MapPagePoint');
  var closeButton = document.querySelector('.-Cross');
  var backgroundBlur = document.querySelector('.Q_BackgroundBlur');
  var mapModalWindow = document.querySelector('.S_Modal');
  buttonMapPoint.addEventListener('click', function () {
    mapModalWindow.classList.add('visible');
  });
  closeButton.addEventListener('click', function () {
    mapModalWindow.classList.remove('visible');
  });
  backgroundBlur.addEventListener('click', function () {
    mapModalWindow.classList.remove('visible');
  });
}

document.addEventListener('DOMContentLoaded', function () {
  initModal();
});
/******/ })()
;