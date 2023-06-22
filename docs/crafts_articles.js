/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

console.log('Test crafts and articles');
//
// const tagsButtonShower = document.querySelector('.A_TagOptionsTextShow')
// const tagsButtonHidder = document.querySelector('.A_TagOptionsTextHide')
// const tagsShown = document.querySelector('.M_TagAllButtonsFull')
// const tagsHidden = document.querySelector('.C_CraftsTagButtonsShort')

var filterChip = document.getElementsByClassName('A_TagButton');
var container = document.querySelector('.S_Content');
var allCards = document.querySelector('.M_CraftsCard');
function initFilter() {
  var _loop = function _loop() {
    var selectedChip = filterChip[i];
    var selectedTag = selectedChip.dataset.tags;
    selectedChip.addEventListener('click', function () {
      selectedChip.classList.toggle('active');
      if (selectedChip.classList.contains('active')) {
        filterCardsByTags(selectedTag);
      }
    });
    console.log(selectedTag);
  };
  // tagsButtonShower.addEventListener('click', () => {
  //   tagsShown.classList.remove('-hidden')
  //   tagsHidden.classList.add('-hidden')
  // })

  // tagsButtonHidder.addEventListener('click', () => {
  //   tagsShown.classList.add('-hidden')
  //   tagsHidden.classList.remove('-hidden')
  // })

  for (var i = 0; i < filterChip.length; i++) {
    _loop();
  }
  function filterCardsByTags(tags) {
    for (var _i = 0; _i < allCards.length; _i++) {
      var card = allCards[_i];
      var cardTags = card.dataset.tags.split(',');
      if (cardTags.includes(tags)) {
        container.appendChild(card);
      }
    }
  }
}
document.addEventListener('DOMContentLoaded', function () {
  initFilter();
});
/******/ })()
;