'use strict';

(function () {

  var countOfNewUsers = 4;
  var firstName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var lastName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
  var userModal = document.querySelector('.setup');

  // Покажите блок .setup, убрав в JS-коде у него класс hidden.
  userModal.classList.remove('hidden');

  // Создайте массив, состоящий из 4-х сгенерированных JS объектов,
  // которые будут описывать похожих персонажей.
  var getRandomIndex = function (arr) {
    return Math.floor(Math.random() * arr.length);
  };

  var createUser = function (f, l, c, e) {
    var obj = {};
    var f_random = getRandomIndex(f);
    var l_random = getRandomIndex(l);
    var c_random = getRandomIndex(c);
    var e_random = getRandomIndex(e);
    // При желании имя и фамилию можно в случайном порядке менять местами.
    obj.name = (Math.round(Math.random() * (2 - 1)) + 1 == 1) ? f[f_random] + ' ' + l[l_random] : l[l_random] + ' ' + f[f_random];
    // Без случайного порядка.
    // obj.name = f[f_random] + ' ' + l[l_random];
    obj.coatColor = c[c_random];
    obj.eyesColor = e[e_random];
    f.splice(f_random, 1);
    l.splice(l_random, 1);
    c.splice(c_random, 1);
    e.splice(e_random, 1);
    return obj;
  };

  var createUsers = function (count) {
    var arr = [];

    for (var i = 1; i <= count; i++) {
      var obj = createUser(firstName, lastName, coatColor, eyesColor);
      arr.push(obj);
    }
    return arr;
  };

  // На основе данных, созданных в предыдущем пункте и шаблона #similar-wizard-template создайте DOM-элементы,
  // соответствующие случайно сгенерированным волшебникам, и заполните их данными из массива.
  var userTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var similarListPictures = document.querySelector('.setup-similar-list');

  var renderUser = function (obj) {
    var userElement = userTemplate.cloneNode(true);
    var userName = userElement.querySelector('.setup-similar-label');
    var userCoatColor = userElement.querySelector('.wizard-coat');
    var userEyesColor = userElement.querySelector('.wizard-eyes');
    userName.textContent = obj.name;
    userCoatColor.style.fill = obj.coatColor;
    userEyesColor.style.fill = obj.eyesColor;
    return userElement;
  };

  // Отрисуйте сгенерированные DOM-элементы в блок .setup-similar-list.
  var renderUsers = function (arr) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < arr.length; i++) {
      fragment.appendChild(renderUser(arr[i]));
    }
    similarListPictures.appendChild(fragment);
  };

  var Users = createUsers(countOfNewUsers);
  renderUsers(Users);

  // Покажите блок .setup-similar, удалив у него CSS-класс hidden.
  var usersBlock = document.querySelector('.setup-similar');
  usersBlock.classList.remove('hidden');

})();
