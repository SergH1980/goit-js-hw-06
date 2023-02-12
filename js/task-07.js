const sizeControl = document.querySelector(`#font-size-control`);
const textSpan = document.querySelector(`#text`);

sizeControl.addEventListener(
  `input`,
  (event) => (textSpan.style.fontSize = `${sizeControl.value}px`)
);
