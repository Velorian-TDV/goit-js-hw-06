const boxes = document.getElementById('boxes');
const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
const controls = document.getElementById('controls');
const controlsInput = controls.querySelector('input');
const arrayForBoxes = [];

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function pushBoxes() {
  boxes.append(...arrayForBoxes)
}

function createBoxes(amount) {

  amount = controlsInput.value;

  if (amount < parseInt(controlsInput.min) || amount > parseInt(controlsInput.max)) {

    alert('NOPE ! The number should be in range from 1 to 100 !')

  } else {

    for (let i = 0; i < amount; i++) {

      let boxSize = `${30 + i * 10}px`

      let box = document.createElement('div');
      box.classList.add('box')
      box.style.width = boxSize;
      box.style.height = boxSize;
      box.style.backgroundColor = getRandomHexColor();

      arrayForBoxes.push(box);

    }

    pushBoxes()

  }

}

function destroyBoxes() {

  const boxes = document.querySelectorAll('.box');

  boxes.forEach(box => {

    box.remove()

  });

  arrayForBoxes.splice(0, arrayForBoxes.length)

}

create.addEventListener('click', createBoxes)
destroy.addEventListener('click', destroyBoxes)