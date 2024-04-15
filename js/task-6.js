const box = document.querySelector('#boxes');
const inputElements = document.querySelector('#number-boxes');
const createElements = document.querySelector('[data-create]');
const destroyElements = document.querySelector('[data-destroy]');

createElements.addEventListener('click', () => {
  const numberOfBoxes = parseInt(inputElements.value);
  createBoxes(numberOfBoxes);
});

destroyElements.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  box.innerHTML = '';
  const boxElements = [];
  let size = 30;

  if (amount < 1 || amount > 100) {
    alert('Введіть число від 1 до 100');
    return destroyBoxes();
  }

  for (let i = 0; i < amount; i++) {
    const randomColor = getRandomHexColor();
    boxElements.push(
      `<div style="width: ${size}px; height: ${size}px; background-color: ${randomColor};"></div>`
    );
    size += 10;
  }

  const result = boxElements.join('');

  box.insertAdjacentHTML('beforeend', result);
  inputElements.value = '';
}

function destroyBoxes() {
  box.innerHTML = '';
  inputElements.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
