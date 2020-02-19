'use strict';
// ---------- MODULE2 ----------
(function () {

  var MODAL_CORD_X = 100;
  var MODAL_CORD_Y = 10;
  var MODAL_WIDTH = 420;
  var MODAL_HEIGHT = 270;
  var MODAL_SHADOW_INDENT = 10;
  var MODAL_TEXT_RESULT_LIST_X = MODAL_CORD_X + 20;
  var MODAL_TEXT_RESULT_LIST_Y = MODAL_CORD_Y + 50;
  var MODAL_TEXT_WIN_X = MODAL_CORD_X + 20;
  var MODAL_TEXT_WIN_Y = MODAL_CORD_Y + 30;
  var CHART_WIDTH = 40;
  var CHART_HEIGHT = 150;
  var CHART_MAIN_COLOR = 'rgba(255, 0, 0, 1)';
  var CHART_PADDING = 50;
  var modalColor = '#fff';
  var modalShadowColor = 'rgba(0, 0, 0, 0.7)';
  var textColor = '#000';
  var textFont = '16px PT Mono';

  var renderModal = function (ctx, x, y, width, height, color, shadowColor) {
    ctx.fillStyle = shadowColor;
    ctx.fillRect(x + MODAL_SHADOW_INDENT, y + MODAL_SHADOW_INDENT, width, height);
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  };

  var renderText = function (ctx, text, x, y, color, font) {
    ctx.fillStyle = color;
    ctx.font = font;
    ctx.fillText(text, x, y);
    ctx.fillText(text, x, y);
  };

  var renderСhart = function (ctx, x, y, width, height, color) { // функция отрисовки гистограммы
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  };

  var getRandomColor = function () {
    return 'hsl(240,' + Math.round(Math.random() * 100) + '%,50%)';
  };

  window.renderStatistics = function (ctx, name, time) { // главная функция

    var integerTime = [];
    var indent = 0;
    var heightСhart = 0;
    var widthChart = 0;

    renderModal(ctx, MODAL_CORD_X, MODAL_CORD_Y, MODAL_WIDTH, MODAL_HEIGHT, modalColor, modalShadowColor);
    renderText(ctx, 'Ура вы победили!', MODAL_TEXT_WIN_X, MODAL_TEXT_WIN_Y, textColor, textFont);
    renderText(ctx, 'Список результатов: ', MODAL_TEXT_RESULT_LIST_X, MODAL_TEXT_RESULT_LIST_Y, textColor, textFont);

    time.forEach(function (item) { // округление времени до ближайшего целого числа
      integerTime.push(Math.round(item));
    });

    for (var b = 0; b < name.length; b++) {

      heightСhart = CHART_HEIGHT * integerTime[b] / window.utility.getMaxElement(integerTime);
      widthChart = MODAL_CORD_X + 55 + indent;

      if (name[b] === 'Вы') { // условие для цвета гистограммы главного игрока
        renderСhart(ctx, widthChart, MODAL_CORD_Y + 85 + (CHART_HEIGHT - heightСhart), CHART_WIDTH, heightСhart, CHART_MAIN_COLOR);
      } else {
        renderСhart(ctx, widthChart, MODAL_CORD_Y + 85 + (CHART_HEIGHT - heightСhart), CHART_WIDTH, heightСhart, getRandomColor());
      }

      renderText(ctx, integerTime[b], widthChart, MODAL_CORD_Y + 75 + (CHART_HEIGHT - heightСhart), textColor, textFont);
      renderText(ctx, name[b], widthChart, MODAL_CORD_Y + 255, textColor, textFont);

      // добавляем отступ для следующей отрисовки
      indent += CHART_PADDING + CHART_WIDTH;
    }
  };
})();
