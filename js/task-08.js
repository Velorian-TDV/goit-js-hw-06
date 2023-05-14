const loginForm = document.querySelector('.login-form');
const email = loginForm.elements.email;
const password = loginForm.elements.password;

loginForm.addEventListener('submit', event => {

    event.preventDefault();

    if (email.value === '' || password.value === '') {
        
        alert('Please fill in all fields');
        return;
    
    }

    const formData = {
        email: email.value,
        password: password.value
    };

    console.log(formData);

    loginForm.reset();

})