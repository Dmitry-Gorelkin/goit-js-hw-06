// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output.
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

/* Решение */

const textInput = document.getElementById("name-input");
const output = document.getElementById("name-output");

const fnInput = (event) => {
  if (event.currentTarget.value !== "") {
    return (output.textContent = event.currentTarget.value);
  }
  output.textContent = "Anonymous";
};

textInput.addEventListener("input", fnInput);
