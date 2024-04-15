const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

const defaultValue = span.textContent;

input.addEventListener('input', event => {
  const trimmedValue = event.currentTarget.value.trim();
  span.textContent = trimmedValue;
  if (!trimmedValue) {
    span.textContent = defaultValue;
  }
});
