/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

console.log('Test craft and article'); //
//

function initGoBack() {
  var backButton = document.querySelector('.A_BackButton');
  backButton.addEventListener('click', function () {
    window.history.back();
  });
} //
//
//
// Слайдер с модальным окном
//
//
//
// Слайдер со сменой текстового блока


var currentSlide = 0;
var offsetImageRails = 0;
var offsetTextRails = 0;

function initSlider() {
  var imageRails = document.querySelector('.W_SliderRails');
  var textRails = document.querySelector('.W_SliderDescriptionRails');
  var sliderButtonLeft = document.querySelector('.Q_Icon.-ArrowLeft');
  var sliderButtonRight = document.querySelector('.Q_Icon.-ArrowRight');
  var itemCounter = document.getElementsByClassName('Q_SliderPic');
  sliderButtonRight.addEventListener('click', function () {
    offsetImageRails += 900;
    offsetTextRails += 111;

    if (offsetImageRails > 880 * (itemCounter.length - 1) + 20 * (itemCounter.length - 1)) {
      offsetImageRails = 0;
      offsetTextRails = 0;
    }

    imageRails.style.left = -offsetImageRails + 'px';
    textRails.style.top = -offsetTextRails + 'px';
  });
  sliderButtonLeft.addEventListener('click', function () {
    offsetImageRails -= 900;
    offsetTextRails -= 111;

    if (offsetImageRails < 0) {
      offsetImageRails = 880 * (itemCounter.length - 1) + 20 * (itemCounter.length - 1);
      offsetTextRails = 81 * (itemCounter.length - 1) + 30 * (itemCounter.length - 1);
    }

    imageRails.style.left = -offsetImageRails + 'px';
    textRails.style.top = -offsetTextRails + 'px';
  });
} //
//
//
//


document.addEventListener('DOMContentLoaded', function () {
  initGoBack();
  initSlider();
});
/******/ })()
;