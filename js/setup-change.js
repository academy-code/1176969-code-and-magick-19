'use strict';
// ---------- MODULE4 ----------
(function () {

  var buttonOpenModal = document.querySelector('.setup-open');
  var iconButtonOpenModal = document.querySelector('.setup-open-icon');
  var buttonCloseModal = window.utility.wizardsModal.querySelector('.setup-close');
  var wizardForm = window.utility.wizardsModal.querySelector('.setup-wizard-form');
  var buttonSubmit = wizardForm.querySelector('.setup-submit');
  var wizardCoat = wizardForm.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = wizardForm.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireball = wizardForm.querySelector('.setup-fireball-wrap');
  var inputUserName = wizardForm.querySelector('.setup-user-name');
  var inputCoatColor = wizardForm.querySelector('.setup-player input[name="coat-color"]');
  var inputEyesColor = wizardForm.querySelector('.setup-player input[name="eyes-color"]');
  var inputFireballColor = wizardForm.querySelector('.setup-player input[name="fireball-color"]');

  buttonOpenModal.addEventListener('click', function () {
    window.utility.wizardsModal.classList.remove('hidden');
  });

  iconButtonOpenModal.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.utility.ENTER_KEY) {
      window.utility.wizardsModal.classList.remove('hidden');
    }
  });

  var setHiddenModal = function () {
    window.utility.wizardsModal.classList.add('hidden');
    window.utility.wizardsModal.style.top = '80px';
    window.utility.wizardsModal.style.left = '50%';
  };

  buttonCloseModal.addEventListener('click', setHiddenModal);

  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.utility.ESC_KEY && evt.target !== inputUserName) {
      setHiddenModal();
    }
  });

  buttonCloseModal.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.utility.ENTER_KEY) {
      setHiddenModal();
    }
  });

  buttonSubmit.addEventListener('click', function () {
    wizardForm.submit();
  });

  buttonSubmit.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.utility.ENTER_KEY) {
      wizardForm.submit();
    }
  });

  var setRandomColor = function (colors, element, property, input) {
    var randomColors = window.utility.getRandomElement(colors);
    element.style = property + ':' + randomColors;
    input.value = randomColors;
  };

  wizardCoat.addEventListener('click', function (evt) {
    setRandomColor(window.COAT_COLORS, evt.target, 'fill', inputCoatColor);
  });

  wizardEyes.addEventListener('click', function (evt) {
    setRandomColor(window.EYES_COLORS, evt.target, 'fill', inputEyesColor);
  });

  wizardFireball.addEventListener('click', function (evt) {
    setRandomColor(window.FIREBALL_COLORS, evt.target, 'background-color', inputFireballColor);
  });
})();
