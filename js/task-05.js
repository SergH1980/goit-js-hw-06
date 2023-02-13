const inputEl = document.querySelector(`#name-input`);
const spanEl = document.querySelector(`#name-output`);

inputEl.addEventListener(`input`, onInputChange);
console.log(inputEl.value);

if (inputEl.value !== ``) {
  spanEl.textContent = inputEl.value;
}

console.log(inputEl.value);
console.log(spanEl.textContent);

spanEl.textContent = `Anonymous`;
function onInputChange(event) {
  if (event.currentTarget.value) {
    spanEl.textContent = event.currentTarget.value.trim();
  } else {
    spanEl.textContent = "Anonymous";
  }
}
