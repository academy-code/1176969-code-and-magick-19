'use-strict';
// ----------- MODULE5 ----------
(function () {
  var elementDragMouse = window.wizardsModal.querySelector('.upload');

  elementDragMouse.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    // получаем координаты курсора относительно окна
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    // двигаем окно
    var onMouseMove = function (evtMove) {
      evtMove.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - evtMove.clientX,
        y: startCoords.y - evtMove.clientY
      };
      startCoords = {
        x: evtMove.clientX,
        y: evtMove.clientY
      };
      window.wizardsModal.style.top = (window.wizardsModal.offsetTop - shift.y) + 'px';
      window.wizardsModal.style.left = (window.wizardsModal.offsetLeft - shift.x) + 'px';
    };
    var onMouseUp = function (evtUp) {
      evtUp.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (evtClick) {
          evtClick.preventDefault();
          elementDragMouse.removeEventListener('click', onClickPreventDefault);
        };
        elementDragMouse.addEventListener('click', onClickPreventDefault);
      }

    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  // Задаём начальное положение функция setHiddenModal MODULE4

})();
