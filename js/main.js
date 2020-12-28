// Получаем ссылку на кнопку
const buttonAdd = document.querySelector('button');
const valueInput = document.querySelector('input');
const outputEl = document.querySelector('[data-output]');

let total = 0;

// Отловить клик по кнопке. Передаём 2 аргумента(клик и ф-я)
buttonAdd.addEventListener('click', function () {
  const value = Number(valueInput.value);

  total += value;

  outputEl.textContent = total;

  valueInput.value = '';
});
