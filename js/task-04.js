const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const counter = document.getElementById('value');
let value = 0;

increment.addEventListener('click', event => {
    value++;
    counter.textContent = value;
})

decrement.addEventListener('click', event => {
    value--;
    counter.textContent = value;
})