// Задание 4
// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

/* Решение */
let counterValue = 0;

const btnDecrement = document.querySelector("[data-action=decrement]");
const result = document.getElementById("value");
const btnIncrement = document.querySelector("[data-action=increment]");

const fnDec = () => {
  counterValue -= 1;
  fnResuln();
};

const fnInc = () => {
  counterValue += 1;
  fnResuln();
};

const fnResuln = () => (result.textContent = counterValue);

btnDecrement.addEventListener("click", fnDec);
btnIncrement.addEventListener("click", fnInc);
