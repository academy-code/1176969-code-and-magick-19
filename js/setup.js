'use strict';
// ---------- MODULE3 ----------
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
  window.COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  window.EYES_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];
  window.FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var wizardsBlock = document.querySelector('.setup-similar');

  var wizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var similarListWizards = document.querySelector('.setup-similar-list');

  var createWizard = function () {
    var name = window.getRandomElement(WIZARDS_NAMES);
    var surname = window.getRandomElement(WIZARDS_SURNAMES);
    var randomName = window.getRandomNumber(2) === 1 ? name + ' ' + surname : surname + ' ' + name;
    var coatColor = window.getRandomElement(COAT_COLORS);
    var eyesColor = window.getRandomElement(EYES_COLORS);

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

  wizardsBlock.classList.remove('hidden');
  renderWizards(createWizards(WIZARDS_AMOUNT));
})();
