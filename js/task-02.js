const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector(`#ingredients`);

const ingredientEl = ingredients.map((item) => {
  const liEl = document.createElement("li");
  liEl.textContent = item;
  liEl.classList.add("item");
  return liEl;
});

ingredientsList.append(...ingredientEl);
