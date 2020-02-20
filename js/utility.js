'use strict';

// Navigation
// stat.js - MODULE2
// setup.js - MODULE3
// setup-change.js - MODULE4
// setuo-drag.js - MODULE5

// ---------- utility.js ----------
(function () {
  var ENTER_KEY = 13;
  var ESC_KEY = 27;

  var wizardsModal = document.querySelector('.setup');

  var getMaxElement = function (arr) { // функция для получения наибольшего числа в массиве
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  };
  var getRandomElement = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };
  var getRandomNumber = function (max) {
    return Math.ceil(Math.random() * max);
  };
  window.utility = {
    ENTER_KEY: ENTER_KEY,
    ESC_KEY: ESC_KEY,
    wizardsModal: wizardsModal,
    getMaxElement: getMaxElement,
    getRandomElement: getRandomElement,
    getRandomNumber: getRandomNumber
  };
})();
