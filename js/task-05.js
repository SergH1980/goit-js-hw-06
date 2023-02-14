// document.querySelector(`#name-input`).value = `some value`;
const inputEl = document.querySelector(`#name-input`);
const spanEl = document.querySelector(`#name-output`);

inputEl.addEventListener(`input`, onInputChange);

if (inputEl.value !== ``) {
  spanEl.textContent = inputEl.value;
}

function onInputChange(event) {
  if (event.currentTarget.value) {
    spanEl.textContent = event.currentTarget.value.trim();
  } else {
    spanEl.textContent = "Anonymous";
  }
}
