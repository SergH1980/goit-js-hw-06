const decrBtn = document.querySelector(`button[data-action="decrement"]`);
const incrBtn = document.querySelector(`button[data-action="increment"]`);
let counterValue = document.querySelector(`#value`);
counterValue.textContent = 0;

const handleDecreaseBtn = () => (counterValue.textContent -= 1);
const handleIncreaseBtn = () => (counterValue.textContent += 1);

decrBtn.addEventListener(`click`, handleDecreaseBtn);
incrBtn.addEventListener(`click`, handleIncreaseBtn);

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника
// та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
