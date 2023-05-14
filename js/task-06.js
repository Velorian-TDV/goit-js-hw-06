const validationInput = document.getElementById('validation-input');
const validationInputLength = validationInput.getAttribute('data-length');

validationInput.addEventListener('blur', event => {

    if (validationInput.value.length === parseInt(validationInputLength)) {
       
        validationInput.classList.remove('invalid');
        validationInput.classList.add('valid');
    
    } else {

        validationInput.classList.remove('valid');
        validationInput.classList.add('invalid');

    }

})