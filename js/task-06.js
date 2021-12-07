// Задание 6
// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

/* Решение */

const symbolInput = document.getElementById("validation-input");

const fn = () => {
  const symbols = symbolInput.value.split("");
  const symbolEnter = parseInt(symbolInput.dataset.length);

  if (symbols.length === symbolEnter) {
    symbolInput.classList.remove("invalid");
    symbolInput.classList.add("valid");
    return;
  }

  symbolInput.classList.remove("valid");
  symbolInput.classList.add("invalid");
};

symbolInput.addEventListener("blur", fn);
