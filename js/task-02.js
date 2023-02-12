const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const liEl = document.createElement(`li`);
const ingredientsList = document.querySelector(`#ingredients`);
const Ingredient = ingredients.map((element) => {
  liEl.textContent = element;
  liEl.classList.add(`item`);
  console.log(liEl);
  return liEl;
});

ingredientsList.appendChild(liEl);

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement(). +
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

//  `<li>${element}</li>`).join(``)
