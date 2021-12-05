// Задание 1

// В HTML есть список категорий ul#categories.
// Напиши скрипт который:
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3
// Category: Animals
// Elements: 4
// Category: Products
// Elements: 3
// Category: Technologies
// Elements: 5

const ulElCategories = document.getElementById("categories");
const liEl = ulElCategories.querySelectorAll(".item");
const arr = [...liEl].map((el) => el.children);

/* Решение */
console.log("Number of categories: ", ulElCategories.childElementCount);
arr.forEach((el) => {
  const x = [...el];
  console.log("Category: ", x[0].textContent);
  console.log("Elements: ", x[1].childElementCount);
});
