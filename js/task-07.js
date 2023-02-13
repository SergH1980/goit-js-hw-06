const sizeControl = document.querySelector(`#font-size-control`);
const textSpan = document.querySelector(`#text`);
textSpan.style.fontSize = `${sizeControl.value}px`;

sizeControl.addEventListener(`input`, toChangeFontSize);

function toChangeFontSize(event) {
  textSpan.style.fontSize = `${sizeControl.value}px`;
}
