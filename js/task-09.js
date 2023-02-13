const btnEl = document.querySelector(`.change-color`);
const bodyEl = document.querySelector(`body`);
const colorNameEl = document.querySelector(`.color`);

btnEl.addEventListener(`click`, toChangeBodyColor);

function toChangeBodyColor(event) {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  let randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  colorName.textContent = randomColor;
}
