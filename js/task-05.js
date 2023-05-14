const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', () => {

    if (nameInput.value !== '') {

        nameOutput.innerHTML = nameInput.value;
    
    } else {
    
        nameOutput.innerHTML = 'Anonymous';
    
    }

})
