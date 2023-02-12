const allElements = document.querySelectorAll(`li.item`);
console.log(`Number of categories: ${allElements.length}`);

allElements.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
