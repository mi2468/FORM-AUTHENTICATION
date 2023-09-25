const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('cpassword');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if (usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
    } else {
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }

    if (phoneValue === '') {
        setErrorFor(phone, 'Phone cannot be blank');
    } else if(phoneValue.length < 10) {
        setErrorFor(phone, 'Phone Number must be 10 digit');
    } else if(phoneValue.length > 10) {
        setErrorFor(phone, 'Phone Number must be 10 digit');
    } else if ((phoneValue.charAt(0) != 9) && (phoneValue.charAt(0) != 8) && (phoneValue.charAt(0) != 7)){
        setErrorFor(phone, 'Phone Number must be start with 9, 8 and 7');
    } else {
        setSuccessFor(phone);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else if (passwordValue.length < 8) {
        setErrorFor(password, 'Password of atleast 8 characters ')
    } else if (passwordValue.search(/[0-9]/) == -1)  {
        setErrorFor(password, 'Password of atleast 1 numeric character')
    } else if (passwordValue.search(/[A-Z]/) == -1)  {
        setErrorFor(password, 'Password of atleast 1 uppercase character')
    } else if (passwordValue.search(/[a-z]/) == -1)  {
        setErrorFor(password, 'Password of atleast 1 lowercase character')
    } else if (passwordValue.search(/[!\@\#\$\%\^\&\*\-\?\_]/) == -1)  {
        setErrorFor(password, 'Password of atleast special character')
    } else {
        setSuccessFor(password);
    }

    if (confirmPasswordValue === '') {
        setErrorFor(confirmPassword, 'Confirm Password cannot be blank');
    } else if (passwordValue !== confirmPasswordValue) {
        setErrorFor(confirmPassword, 'Confirm password does not match');
    } else {
        setSuccessFor(confirmPassword);
    }

    if(usernameValue === "" || emailValue === "" || phoneValue === "" || passwordValue === "" || confirmPasswordValue != passwordValue || phoneValue.length != 10) {
        setErrorFor()
    } else {
        setTimeout(() => {
            alert("Your form was submitted successfully");
        },1000);
    }
    
}

    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');

        small.innerText = message;
        formControl.className = 'form-control error';
    }

    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }

    function isEmail(email) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    }
      