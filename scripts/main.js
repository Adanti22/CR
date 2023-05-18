// /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /** /* ANIMATION JS/* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* /* // // /*

const startPauseBtn = document.querySelector(".start-pause-btn"); //кнопка для старта анимации
const loadingLineContainer = document.querySelector(".time-line"); // контейнер с линией загрузки
const loadingLine = document.querySelector(".loading-line"); // линия загрузки
const speedLineBtn = document.querySelector("#speed-line-btn"); //Кнопка скорости

//Получаю DOM- объекты

let loadingBool = 0; // булевое значение, которое определяет, идет загрузка или нет
let loadingValue = 0; //значение загрузки

let lineSpeed = 1; //скорость линии

// let animObj = {
//   loadingBool1: 0,
//   loadingValue1: 0,
//   lineSpeed1: 1,
// };

let loadingFunc = (time) => {
  let loadingInterval = setInterval(() => {
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
      loadingLine.style.width = `${loadingValue}%`;
    }
  }, time);
}; //setinterval. Отвечает за загрузк

startPauseBtn.addEventListener("click", () => {
  //добавляем обработчик событий на кнопку загрузки.
  if (loadingBool == 0) {
    loadingBool = 1;
    loadingFunc(100); // вызывается функция setinterval
    if (loadingLine.style.width == "100%") {
      loadingLine.style.width = "0";
      loadingValue = 0;
    }
    const animItems = document.querySelectorAll(".animation-item");
    animItems.forEach((animItem) => {
      let elemID = animItem.id;
      const animationItem = document.getElementById(elemID);
      const dataTransform = animationItem.getAttribute("data-transform");
      const transformX = animationItem.getAttribute("data-x");
      if (dataTransform == "translate" || dataTransform == "skew") {
        const transformY = animationItem.getAttribute("data-y");
        animationItem.style.transform = `${dataTransform}(${transformX},${transformY})`;
      } else {
        animationItem.style.transform = `${dataTransform}(${transformX})`;
      }
    });
  }
});

speedLineBtn.addEventListener("click", () => {
  if (loadingBool == 0) {
    let currentSpeed = +speedLineBtn.getAttribute("data-speed");
    if (currentSpeed == 3) {
      speedLineBtn.setAttribute("data-speed", "1");
      lineSpeed = 1;
    } else {
      let newSpeed = +currentSpeed + 0.5;
      speedLineBtn.setAttribute("data-speed", newSpeed);
      lineSpeed = newSpeed;
    }
    speedLineBtn.textContent = "x" + lineSpeed;
  }
});

////////////////////////////////////////////////Settings////////////////////

const INPUTS = document.querySelectorAll(".input");
const SELECTORS = document.querySelectorAll(".selector");
const inputPosition = document.querySelector("#input-position"),
  inputTransformValue = document.querySelector("#input-transform-value"),
  inputTransform = document.querySelector("#input-transform"),
  inputTransformX = document.querySelector("#input-transform-x"),
  inputTransformY = document.querySelector("#input-transform-y"),
  inputZindex = document.querySelector("#input-zindex"),
  inputFigure = document.querySelector("#input-figure"),
  inputLeft = document.querySelector("#input-left"),
  inputTop = document.querySelector("#input-top"),
  inputSizes = document.querySelector("#input-width-height"),
  sendBtn = document.querySelector(".send-btn"),
  inputColor = document.querySelector("#input-color"),
  clearBtn = document.querySelector(".clear-btn"),
  clearContainer = document.querySelector(".clear-container"),
  showWrapper = document.querySelector(".show-wrapper");
let validObj = {
  sizes: 0,
  figure: 0,
  position: 0,
  transform: 0,
  transformX: 0,
};
sendBtnValid = 0;
let idNum = 0;

const validator = () => {
  if (inputTransform.value == "scale" || inputTransform.value == "rotate") {
    if (inputPosition.value == "static") {
      if (
        validObj.sizes == 1 &&
        validObj.figure == 1 &&
        validObj.position == 1 &&
        validObj.transform == 1 &&
        validObj.transformX == 1
      ) {
        sendBtn.style.backgroundColor = "rgb(124, 255, 124)";
        sendBtnValid = 1;
      } else {
        sendBtnValid = 0;
        sendBtn.style.backgroundColor = "rgb(208, 208, 208)";
      }
    } else {
      if (
        validObj.sizes == 1 &&
        validObj.figure == 1 &&
        validObj.position == 1 &&
        validObj.top == 1 &&
        validObj.left == 1 &&
        validObj.zindex == 1 &&
        validObj.transform == 1 &&
        validObj.transformX == 1
      ) {
        sendBtnValid = 1;
        sendBtn.style.backgroundColor = "rgb(124, 255, 124)";
      } else {
        sendBtnValid = 0;
        sendBtn.style.backgroundColor = "rgb(208, 208, 208)";
      }
    }
  } else {
    if (inputPosition.value == "static") {
      if (
        validObj.sizes == 1 &&
        validObj.figure == 1 &&
        validObj.position == 1 &&
        validObj.transform == 1 &&
        validObj.transformX == 1 &&
        validObj.transformY == 1
      ) {
        sendBtnValid = 1;

        sendBtn.style.backgroundColor = "rgb(124, 255, 124)";
      } else {
        sendBtnValid = 0;
        sendBtn.style.backgroundColor = "rgb(208, 208, 208)";
      }
    } else {
      if (
        validObj.sizes == 1 &&
        validObj.figure == 1 &&
        validObj.position == 1 &&
        validObj.top == 1 &&
        validObj.left == 1 &&
        validObj.zindex == 1 &&
        validObj.transform == 1 &&
        validObj.transformX == 1 &&
        validObj.transformY == 1
      ) {
        sendBtnValid = 1;
        sendBtn.style.backgroundColor = "rgb(124, 255, 124)";
      } else {
        sendBtnValid = 0;
        sendBtn.style.backgroundColor = "rgb(208, 208, 208)";
      }
    }
  }
  console.log(validObj);
};

const inputValidStyle = (input) => {
  if (input.value.length == 0) {
    input.classList.add("incorrect-input");
  } else {
    input.classList.add("correct-input");
  }
};
INPUTS.forEach((input) => {
  input.addEventListener("blur", () => {
    inputValidStyle(input);
  });
});

SELECTORS.forEach((selector) => {
  selector.addEventListener("blur", () => {
    if (selector.value == "null") {
      selector.classList.add("incorrect-input");
    } else {
      selector.classList.add("correct-input");
    }
  });
});
inputTransform.addEventListener("blur", () => {
  if (inputTransform.value.length == 0) {
    validObj.transform = 0;
  } else {
    validObj.transform = 1;
  }
  validator();
});

inputTransform.addEventListener("change", () => {
  if (inputTransform.value == "skew" || inputTransform.value == "translate") {
    inputTransformX.style.display = "block";
    inputTransformY.style.display = "block";

    if (inputTransform.value == "skew") {
      inputTransformX.setAttribute("placeholder", "skew:x(deg)");
      inputTransformY.setAttribute("placeholder", "skew:y(deg)");
    } else {
      inputTransformX.setAttribute("placeholder", "translate:x(px)");
      inputTransformY.setAttribute("placeholder", "translate:y(px)");
    }
  } else {
    inputTransformX.style.display = "block";
    inputTransformY.style.display = "none";
    if (!validObj.transformY) {
      validObj.transformY = 0;
    }
    if (inputTransform.value == "scale") {
      inputTransformX.setAttribute("placeholder", "scale:N");
    } else {
      inputTransformX.setAttribute("placeholder", "rotate:N(deg)");
    }
  }
});

inputTransformX.addEventListener("blur", () => {
  if (inputTransformX.value.length == 0) {
    validObj.transformX = 0;
  } else {
    validObj.transformX = 1;
  }
  validator();
});
inputTransformY.addEventListener("blur", () => {
  if (inputTransformY.length == 0) {
    validObj.transformY = 0;
  } else {
    validObj.transformY = 1;
  }
  validator();
});

inputPosition.addEventListener("blur", () => {
  if (inputPosition.value == "null") {
    validObj.position = 0;
  } else {
    validObj.position = 1;
  }
  validator();
});

inputTop.addEventListener("blur", () => {
  if (inputTop.value.length == 0) {
    validObj.top = 0;
  } else {
    validObj.top = 1;
  }
  validator();
});

inputLeft.addEventListener("blur", () => {
  if (inputLeft.value.length == 0) {
    validObj.left = 0;
  } else {
    validObj.left = 1;
  }
  validator();
});

inputPosition.addEventListener("change", () => {
  if (inputPosition.value == "static") {
    inputTop.style.display = "none";
    inputLeft.style.display = "none";
    inputZindex.style.display = "none";

    if (validObj.top && validObj.left && validObj.zindex) {
      delete validObj.zindex;
      delete validObj.top;
      delete validObj.left;
    }
  } else {
    inputTop.style.display = "block";
    inputLeft.style.display = "block";
    inputZindex.style.display = "block";
    if (validObj.top && validObj.left && validObj.zindex) {
      return;
    }
    validObj.top = 0;
    validObj.left = 0;
    validObj.zindex = 0;
  }
});
inputFigure.addEventListener("blur", () => {
  if (inputFigure.value !== "null") {
    validObj.figure = 1;
  } else {
    validObj.figure = 0;
  }
  validator();
});
inputZindex.addEventListener("blur", () => {
  if (!inputZindex.value.length == 0) {
    validObj.zindex = 1;
  } else {
    validObj.zindex = 0;
  }
  validator();
});

inputSizes.addEventListener("blur", () => {
  if (inputSizes.value.length == 0) {
    validObj.sizes = 0;
  } else {
    validObj.sizes = 1;
    if (inputSizes.value > 1000) {
      inputSizes.value = 1000;
    }
  }
  validator();
});

inputSizes.addEventListener("input", () => {
  if (inputSizes.value > 1000) {
    inputSizes.value = 1000;
  }
});

sendBtn.addEventListener("click", () => {
  if (sendBtnValid == 1) {
    document.querySelector(".show-title").style.display = "none";
    ///
    idNum += 1;
    const animationItem = `
    <div class="animation-item" id="${
      inputFigure.value + idNum
    }" data-transform="${inputTransform.value}" >   </div> `;
    showWrapper.insertAdjacentHTML("beforeend", animationItem);
    const animItem = document.querySelector(`#${inputFigure.value + idNum}`);
    animItem.setAttribute("data-x", `${inputTransformX.value}`);
    if (inputTransform.value == "translate" || inputTransform.value == "skew") {
      animItem.setAttribute("data-y", `${inputTransformY.value}`);
    }
    if (inputPosition.value !== "static") {
      console.log(inputPosition.value, inputTop.value, inputLeft.value);
      animItem.style.position = `${inputPosition.value}`;
      animItem.style.top = `${inputTop.value}px`;
      animItem.style.left = `${inputLeft.value}px`;
      animItem.style.zIndex = `${inputZindex.value}`;
    }
    if (inputFigure.value == "triangle") {
      animItem.style.borderBottom = `${inputSizes.value + "px"} solid ${
        inputColor.value
      } `;
      animItem.style.borderRight = ` ${
        inputSizes.value / 2 + "px"
      } solid transparent`;
      animItem.style.borderLeft = ` ${
        inputSizes.value / 2 + "px"
      } solid transparent`;
    } else {
      animItem.style.width = `${inputSizes.value}px`;
      animItem.style.height = `${inputSizes.value}px`;
      animItem.style.backgroundColor = `${inputColor.value}`;
      if (inputFigure.value == "circle") {
        animItem.style.borderRadius = "50%";
      }
    }
  } else {
    INPUTS.forEach((input) => {
      inputValidStyle(input);
    });
    SELECTORS.forEach((selector) => {
      if (selector.value == "null") {
        selector.classList.add("incorrect-input");
      } else {
        selector.classList.add("correct-input");
      }
    });
    alert("Невалидные значения");
  }
});

clearBtn.addEventListener("click", () => {
  INPUTS.forEach((input) => {
    input.value = "";
  });
  SELECTORS.forEach((selector) => {
    selector.value = "null";
  });
});
clearContainer.addEventListener("click", () => {
  showWrapper.innerHTML = "";
  document.querySelector(".show-title").style.display = "block";
});
