"use strict";

// /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /** /* ANIMATION JS/* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* // // /*
var startPauseBtn = document.querySelector(".start-pause-btn"); //кнопка для старта анимации

var loadingLineContainer = document.querySelector(".time-line"); // контейнер с линией загрузки

var loadingLine = document.querySelector(".loading-line"); // линия загрузки

var speedLineBtn = document.querySelector("#speed-line-btn"); //Кнопка скорости
//Получаю DOM- объекты

var loadingBool = 0; // булевое значение, которое определяет, идет загрузка или нет

var loadingValue = 0; //значение загрузки

var lineSpeed = 1; //скорость линии

var loadingFunc = function loadingFunc(time) {
  var loadingInterval = setInterval(function () {
    if (loadingBool == 0 || loadingValue >= 100) {
      if (loadingValue >= 100) {
        clearInterval(loadingInterval);
        loadingLine.style.width = "100%";
        startPauseBtn.setAttribute("src", "img/reload.png");
        loadingBool = 0;
      } else {
        clearInterval(loadingInterval);
        startPauseBtn.setAttribute("src", "img/start.png");
      }
    } else {
      startPauseBtn.setAttribute("src", "img/pause.png");
      loadingValue += lineSpeed;
      loadingLine.style.width = "".concat(loadingValue, "%");
    }
  }, time);
}; //setinterval. Отвечает за загрузк


startPauseBtn.addEventListener("click", function () {
  //добавляем обработчик событий на кнопку загрузки.
  if (loadingBool == 0) {
    loadingBool = 1;
    loadingFunc(100); // вызывается функция setinterval

    if (loadingLine.style.width == "100%") {
      loadingLine.style.width = "0";
      loadingValue = 0;
    }
  } else {
    loadingBool = 0;
  }
});
speedLineBtn.addEventListener("click", function () {
  var currentSpeed = +speedLineBtn.getAttribute("data-speed");

  if (currentSpeed == 3) {
    speedLineBtn.setAttribute("data-speed", "1");
    lineSpeed = 1;
  } else {
    var newSpeed = +currentSpeed + 0.5;
    speedLineBtn.setAttribute("data-speed", newSpeed);
    lineSpeed = newSpeed;
  }

  speedLineBtn.textContent = "x" + lineSpeed;
});