// Задание 9
// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

/* Решение */
const btnRandomColor = document.querySelector(".change-color");
const textColor = document.querySelector(".color");

const fn = () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  textColor.textContent = color;
};

btnRandomColor.addEventListener("click", fn);
