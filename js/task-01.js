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

/* Решение_1 */
// const ulElCategories = document.getElementById("categories");
// const arrLiEl = [...ulElCategories.children].map((el) => el.children);

// console.log("Number of categories: ", ulElCategories.childElementCount);
// arrLiEl.forEach((el) => {
//   const arr = [...el];
//   console.log("Category: ", arr[0].textContent);
//   console.log("Elements: ", arr[1].childElementCount);
// });

/* Решение_2 */
