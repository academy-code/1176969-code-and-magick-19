'use strict';

// константы
var MODAL_CORD_X = 100;
var MODAL_CORD_Y = 10;
var MODAL_WIDTH = 420;
var MODAL_HEIGHT = 270;
var CHART_WIDTH = 40;
var CHART_HEIGHT = 150;
var CHART_MAIN_COLOR = 'rgba(255, 0, 0, 1)' || 'red';
var CHART_PADDING = 50;
// стилевые параметры
var modalColor =  '#fff' || 'white';
var modalShadowColor =  'rgba(0, 0, 0, 0.3)' || 'transparent';
var textColor = 'black' || '#000';
var textFont = '16px PT Mono';
// переменные для сортировки
var integerTime = [];
var nameSort = [];
var timeSort = [];
var timeIntermSort = [];
var timeSortMax = [];

var renderModal = function (ctx, x, y, width, height, color) { // функция отрисовки окна
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

var renderText = function (ctx, text, x, y, color, font) { // функция отрисовки текста
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.fillText(text, x, y);
  ctx.fillText(text, x, y);
};

var renderСhart = function(ctx, x, y, width, height, color) { // функция отрисовки диаграммы
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

var getMaxElement = function(arr) { // функция для получения наибольшего числа в массиве
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var getRandomColor = function () { // функция произвольного цвета
  return 'hsl(240,' + Math.round(Math.random() * 100) + '%,50%)';
};

window.renderStatistics = function(ctx, name, time) { // главная функция

  time.forEach(function (item) { // округление времени до ближайшего целого числа
    integerTime.push(Math.round(item));
    return integerTime;
  });

  console.log(name); // изначальный массив имён
  console.log(integerTime); // изначальный массив времени

  for (var i = 0; i < name.length; i++) {
    if (name[i] === 'Вы') { // определяем имя главного игрока
      nameSort[0] = name[i];  // ставим главного игрока на первое место в массиве
      name.splice(i, 1); // удаляем главного игрока со входящего массива
      timeSort[0] = integerTime[i]; // получаем время главного игрока и ставим на первое место в массиве
      integerTime.splice(i, 1); // удаляем время главного игрока со входящего массива
    };
  };

  timeIntermSort = integerTime.slice(); // копируем входящий массив времени для сортировки
  timeSortMax = timeIntermSort.sort().reverse(); // сортируем массив времени по возрастанию

  for (var j = 0; j < integerTime.length; j++) {
    console.log('j ' + j);
    for (var n = 0; n < timeSortMax.length; n++) {
      if (integerTime[n] === timeSortMax[j]) { // сравниваем входящий массив с отсортированным
        //console.log(timeSort.indexOf(integerTime[n]) !== 1);
        //console.log(' n ' + n);
        if (timeSort.length > 3) { // боремся с дублем, если одинаковые результаты у нескольких игроков! Ура! =)
          break;
        }
        nameSort.push(name[n]); // записываем отсортированное имя в переменную
        timeSort.push(timeSortMax[j]); // записываем отсортированное время в переменную
      };
    };
  };

  console.log(nameSort); // массив имён после сортировки
  console.log(timeSort); // массив времени после сортировки

  // рисуем модалку с тенью
  renderModal(ctx, MODAL_CORD_X + 10, MODAL_CORD_Y + 10, MODAL_WIDTH, MODAL_HEIGHT, modalShadowColor);
  renderModal(ctx, MODAL_CORD_X, MODAL_CORD_Y, MODAL_WIDTH, MODAL_HEIGHT, modalColor);

  // рисуем текст
  renderText(ctx, 'Список результатов: ',MODAL_CORD_X + 20, MODAL_CORD_Y + 50, textColor, textFont);

  var indent = 0;
  var heightСhart = 0;
  var widthChart = 0;

  for (var b = 0; b < nameSort.length; b++) { // отрисовываем гистограмму

    heightСhart =  CHART_HEIGHT * timeSort[b] / getMaxElement(timeSort); // высота гистограммы основанная на результате
    widthChart = MODAL_CORD_X + 55 + indent; // ширина гистограммы с отступом

    if (nameSort[b] === 'Вы') {
      renderСhart(ctx, widthChart, MODAL_CORD_Y + 85 + (CHART_HEIGHT - heightСhart), CHART_WIDTH, heightСhart, CHART_MAIN_COLOR);
    } else {
      renderСhart(ctx, widthChart, MODAL_CORD_Y + 85 + (CHART_HEIGHT - heightСhart), CHART_WIDTH, heightСhart, getRandomColor());
    }

    // отрисовываем текст с результатом
    renderText(ctx, timeSort[b], widthChart, MODAL_CORD_Y + 75  + (CHART_HEIGHT - heightСhart), textColor, textFont);
    renderText(ctx, nameSort[b], widthChart, MODAL_CORD_Y + 255, textColor, textFont);

    // добавляем отступ для следующей отрисовки
    indent += CHART_PADDING + CHART_WIDTH;
  }

  // отрисовываем результаты матча
  if (timeSort[0] === getMaxElement(timeSort)) {
    console.log(1);
    renderText(ctx, 'Ура вы победили!',MODAL_CORD_X + 20, MODAL_CORD_Y + 30, textColor, textFont);
  } else {
    console.log(2);
    renderText(ctx, 'Вы проиграли! Победитель ' + nameSort[1] + '!',MODAL_CORD_X + 20, MODAL_CORD_Y + 30, textColor, textFont);
  }

  // чистим переменные сортировки
  nameSort.splice(0);
  timeSort.splice(0);
  integerTime.splice(0);
};
