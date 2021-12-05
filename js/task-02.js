// Задание 2
// В HTML есть пустой список ul#ingredients.
// В JavaScript есть массив строк.
// Напиши скрипт, который для каждого элемента массива ingredients:
// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

/* Решение */
const ulElIngredients = document.getElementById("ingredients");

const arrLiEl = ingredients.map((el) => {
  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = el;
  return liEl;
});

ulElIngredients.append(...arrLiEl);
