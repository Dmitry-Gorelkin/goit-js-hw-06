// Задание 8
// Напиши скрипт управления формой логина.
// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства.
// Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

/* Решение */

const form = document.querySelector(".login-form");

const fn = (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "")
    return alert("Педрила заполни форму!");

  console.log({
    email: email.value,
    password: password.value,
  });

  form.reset();
};

form.addEventListener("submit", fn);

/* Вариант с функцией и переменной */

// fnOb(email.value, password.value);

// const fnOb = (email, password) => {
//   const obj = {
//     email,
//     password,
//   };
//   return console.log(obj);
// };
