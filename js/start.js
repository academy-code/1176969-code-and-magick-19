'use strict';
// ---------- MODULE1 ----------
(function () {
  window.fireballSize = 22;
  window.getFireballSpeed = function (left) {
    if (left === true) {
      return 5;
    } else {
      return 2;
    }
  };
  window.wizardSpeed = 3;
  window.wizardWidth = 70;
  window.getWizardHeight = function () {
    return 1.337 * wizardWidth;
  };
  window.getWizardX = function (width) {
    return (width - wizardWidth) / 2;
  };
  window.getWizardY = function (height) {
    return height - (height * 2 / 3);
  };
})();
