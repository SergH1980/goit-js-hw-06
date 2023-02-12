const decrBtn = document.querySelector(`button[data-action="decrement"]`);
const incrBtn = document.querySelector(`button[data-action="increment"]`);
let counterValue = document.querySelector(`#value`);
counterValue.textContent = 0;

const handleDecreaseBtn = () =>
  (counterValue.textContent = Number(counterValue.textContent) - 1);
const handleIncreaseBtn = () =>
  (counterValue.textContent = Number(counterValue.textContent) + 1);

decrBtn.addEventListener(`click`, handleDecreaseBtn);
incrBtn.addEventListener(`click`, handleIncreaseBtn);
