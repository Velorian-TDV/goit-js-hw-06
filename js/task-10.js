const boxes = document.getElementById('boxes');
const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
const controls = document.getElementById('controls');
const controlsInput = controls.querySelector('input');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {

  amount = controlsInput.value;

  if (amount < parseInt(controlsInput.min) || amount > parseInt(controlsInput.max)) {

    alert('NOPE ! The number should be in range from 1 to 100 !')

  } else {

    for (let i = 0; i < amount; i++) {

      let boxSize = `${30 + i * 10}px`

      let box = document.createElement('div');
      box.setAttribute('class', 'box');
      box.style.width = boxSize;
      box.style.height = boxSize;
      box.style.backgroundColor = getRandomHexColor();

      boxes.append(box);

    }

  }

}

function destroyBoxes() {

  const boxes = document.querySelectorAll('.box');

  boxes.forEach(box => box.remove());

}

create.addEventListener('click', createBoxes)
destroy.addEventListener('click', destroyBoxes)