'use strict';

(function () {
  var WIZARDS_AMOUNT = 4;
  var WIZARDS_NAMES = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];
  var WIZARDS_SURNAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];
  var COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  var EYES_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];
  var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var wizardsModal = document.querySelector('.setup');
  // wizardsModal.classList.remove('hidden');

  var wizardsBlock = document.querySelector('.setup-similar');
  wizardsBlock.classList.remove('hidden');

  var wizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var similarListWizards = document.querySelector('.setup-similar-list');

  var getRandomElement = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  var getRandomNumber = function (number) {
    return Math.ceil(Math.random() * number);
  };

  var createWizard = function () {
    var name = getRandomElement(WIZARDS_NAMES);
    var surname = getRandomElement(WIZARDS_SURNAMES);
    var randomName = getRandomNumber(2) === 1 ? name + ' ' + surname : surname + ' ' + name;
    var coatColor = getRandomElement(COAT_COLORS);
    var eyesColor = getRandomElement(EYES_COLORS);

    return {
      name: randomName,
      coatColor: coatColor,
      eyesColor: eyesColor
    };
  };

  var createWizards = function (amount) {
    var array = [];

    for (var i = 1; i <= amount; i++) {
      array.push(createWizard());
    }
    return array;
  };

  var createWizardTemplate = function (wizards) {
    var wizardElement = wizardTemplate.cloneNode(true);
    var wizardName = wizardElement.querySelector('.setup-similar-label');
    var wizardCoatColor = wizardElement.querySelector('.wizard-coat');
    var wizardEyesColor = wizardElement.querySelector('.wizard-eyes');
    wizardName.textContent = wizards.name;
    wizardCoatColor.style.fill = wizards.coatColor;
    wizardEyesColor.style.fill = wizards.eyesColor;

    return wizardElement;
  };

  var renderWizards = function (array) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < array.length; i++) {
      fragment.appendChild(createWizardTemplate(array[i]));
    }
    similarListWizards.appendChild(fragment);
  };

  renderWizards(createWizards(WIZARDS_AMOUNT));

  var ENTER_KEY = 13;
  var ESC_KEY = 27;

  var buttonOpenModal = document.querySelector('.setup-open');
  var iconButtonOpenModal = document.querySelector('.setup-open-icon');
  var buttonCloseModal = wizardsModal.querySelector('.setup-close');
  var wizardForm = wizardsModal.querySelector('.setup-wizard-form');
  var buttonSubmit = wizardForm.querySelector('.setup-submit');
  var wizardCoat = wizardForm.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = wizardForm.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireball = wizardForm.querySelector('.setup-fireball-wrap');
  var inputUserName = wizardForm.querySelector('.setup-user-name');
  var inputCoatColor = wizardForm.querySelector('.setup-player input[name="coat-color"]');
  var inputEyesColor = wizardForm.querySelector('.setup-player input[name="eyes-color"]');
  var inputFireballColor = wizardForm.querySelector('.setup-player input[name="fireball-color"]');

  buttonOpenModal.addEventListener('click', function () {
    wizardsModal.classList.remove('hidden');
  });

  buttonCloseModal.addEventListener('click', function () {
    wizardsModal.classList.add('hidden');
  });

  iconButtonOpenModal.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEY) {
      wizardsModal.classList.remove('hidden');
    }
  });

  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ESC_KEY && evt.target !== inputUserName) {
      wizardsModal.classList.add('hidden');
    }
  });

  buttonCloseModal.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEY) {
      wizardsModal.classList.add('hidden');
    }
  });

  buttonSubmit.addEventListener('click', function () {
    wizardForm.submit();
  });

  buttonSubmit.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEY) {
      wizardForm.submit();
    }
  });

  var randomColorElement = function (colors, element, property, input) {
    var randomColors = getRandomElement(colors);
    element.style = property + ':' + randomColors;
    input.value = randomColors;
  };

  wizardCoat.addEventListener('click', function (evt) {
    randomColorElement(COAT_COLORS, evt.target, 'fill', inputCoatColor);
  });

  wizardEyes.addEventListener('click', function (evt) {
    randomColorElement(EYES_COLORS, evt.target, 'fill', inputEyesColor);
  });

  wizardFireball.addEventListener('click', function (evt) {
    randomColorElement(FIREBALL_COLORS, evt.target, 'background-color', inputFireballColor);
  });

  wizardForm.setAttribute('action', 'https://js.dump.academy/code-and-magick');
})();
