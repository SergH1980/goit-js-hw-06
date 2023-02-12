const inputEl = document.querySelector(`#name-input`);
const spanEl = document.querySelector(`#name-output`);

inputEl.addEventListener(`input`, onInputChange);
spanEl.textContent = `Anonymous`;
function onInputChange(event) {
  if (event.currentTarget.value) {
    spanEl.textContent = event.currentTarget.value;
  } else {
    spanEl.textContent = "Anonymous";
  }
}
