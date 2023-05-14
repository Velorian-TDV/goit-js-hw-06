const fontSizeControl = document.getElementById('font-size-control');
const text = document.getElementById('text');

fontSizeControl.value = 16

fontSizeControl.addEventListener('input', event => {
    text.style.fontSize = `${fontSizeControl.value}px`;
})