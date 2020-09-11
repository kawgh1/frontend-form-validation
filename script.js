const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');


let isValid = false;
let passwordsMatch = false;

function validateForm() {
    // Using Constraint API
    isValid = form.checkValidity();

    // Style main message for an error
    if (!isValid) {
        message.textContent = 'Please fill out all fields.'
        message.style.color = 'firebrick';
        messageContainer.style.borderColor = 'firebrick';
        return; // don't run rest of function if not valid
    }

    // Check to see if passwords match
    if (password1El.value === password2El.value) {
        passwordsMatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
    } else {
        passwordsMatch = false;
        message.textContent = 'Make sure passwords match.'
        message.style.color = 'firebrick';
        messageContainer.style.borderColor = 'firebrick';
        password1El.style.borderColor = 'firebrick';
        password2El.style.borderColor = 'firebrick';
        return; // don't run rest of function if not valid

    }

    // If form is valid and passwords match
    if (isValid && passwordsMatch) {
        message.textContent = 'Success!'
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
    }
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    }

    // Do something with user data -> server, database etc, - Bcrypt password etc.
    console.log(user);
}



function processFormData(e) {
    e.preventDefault();

    // Validate Form
    validateForm();

    // Submit Data if Valid
    if (isValid && passwordsMatch) {

        storeFormData();
    }

}




// Event Listener
form.addEventListener('submit', processFormData);