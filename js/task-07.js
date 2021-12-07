// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size.
// В результате при перетаскивании ползунка будет меняться размер текста.

/* Решение */

const sizeInput = document.getElementById("font-size-control");
const sizeText = document.getElementById("text");

const fn = () => (sizeText.style.fontSize = `${sizeInput.value}px`);

sizeInput.addEventListener("input", fn);
