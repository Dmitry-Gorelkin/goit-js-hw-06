// Задание 10
// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает один параметр - число.
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.
// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
// Используй готовую функцию getRandomHexColor для получения цвета.
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector("#controls input"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

let size = 30;

const createBoxes = (amount) => {
  let string = "";

  if (amount === "" || amount < 0 || amount > 100) {
    console.log("ты редиска", amount);
    return;
  }

  for (let i = 0; i < amount; i += 1) {
    string += `<div style="background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px"></div>`;
    size += 10;
  }

  refs.boxes.insertAdjacentHTML("beforeend", string);
};

const destroyBoxes = () => {
  refs.boxes.innerHTML = "";
  size = 30;
};

refs.btnCreate.addEventListener("click", () => createBoxes(parseInt(refs.input.value));
refs.btnDestroy.addEventListener("click", destroyBoxes);


// const inputNumber = document.querySelector("[type=number]");
// const btnCreate = document.querySelector("[data-create]");
// const btnDestroy = document.querySelector("[data-destroy]");
// const boxes = document.getElementById("boxes");
// let size = 30;
// /*************Вариант 1**************/
// const createBoxes = (amount) => {
//   const boxs = [];
//   let size = 30;
//   if (amount === "" || amount < 0 || amount > 100) {
//     console.log("ты редиска");
//     return;
//   }
//   for (var i = 0; i < amount; i++) {
//     const box = document.createElement("div");
//     box.style.backgroundColor = getRandomHexColor();
//     box.style.width = `${size}px`;
//     box.style.height = `${size}px`;
//     boxs.push(box);
//     size += 10;
//   }
//   boxes.append(...boxs);
// };
// /*************Вариант 2**************/
// const createBoxes = (amount) => {
//   const boxs = [];
//   if (amount === "" || amount < 0 || amount > 100) {
//     console.log("ты редиска");
//     return;
//   }
//   for (var i = 0; i < amount; i++) {
//     const box = `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`;
//     boxs.push(box);
//     size += 10;
//   }
//   boxes.insertAdjacentHTML("beforeend", boxs.join(""));
// };
// const fnCreate = () => {
//   const amount = parseInt(inputNumber.value);
//   createBoxes(amount);
// };
// const destroyBoxes = () => {
//   size = 30;
//   boxes.innerHTML = "";
// };
// btnCreate.addEventListener("click", fnCreate);
// btnDestroy.addEventListener("click", destroyBoxes);