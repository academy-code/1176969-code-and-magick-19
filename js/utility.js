'use strict';

// start.js - MODULE1
// stat.js - MODULE2
// setup.js - MODULE3
// setup-change.js - MODULE4
// setuo-drag.js - MODULE5

// ---------- MAIN FILE SCRIPT ----------
(function () {
  window.ENTER_KEY = 13;
  window.ESC_KEY = 27;
  // ---------- FOR STATJS ----------
  window.getMaxElement = function (arr) { // функция для получения наибольшего числа в массиве
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  };
  // ---------- FOR SETUP... ----------
  window.getRandomElement = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };
  window.getRandomNumber = function (number) {
    return Math.ceil(Math.random() * number);
  };
})();
