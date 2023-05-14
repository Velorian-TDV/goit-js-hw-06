const body = document.body;
const changeColor = document.querySelector('.change-color');
const color = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColor.onclick = event => {

  let random = getRandomHexColor();

  color.innerHTML = random;
  body.style.backgroundColor = random;
  
}