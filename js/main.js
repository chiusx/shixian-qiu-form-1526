// Declaring variables
const submitButton = document.getElementById('submit-button');
const fullNameInput = document.getElementById('fullname');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Start with the function
function validateForm() {
    // Start with initially 2 "empty buckets"
    const data = {};
    const errors = [];

    // FULL NAME
    if (fullNameInput.value.trim() !== '') {
        data.fullName = fullNameInput.value.trim();
    } else {
        errors.push('Full Name is missing.');
    }

    // EMAIL
    if (emailInput.value.trim() !== '') {
        if (emailRegex.test(emailInput.value.trim())) {
            data.email = emailInput.value.trim();
        } else {
            errors.push('Email is not valid.');
        }
    } else {
        errors.push('Email is missing.');
    }

    // MESSAGE
    if (messageInput.value.trim() !== '') {
        data.message = messageInput.value.trim();
    } else {
        errors.push('Message is missing.');
    }

    // FEEDBACK/ERRORS
    if (errors.length > 0) {
        console.log('Errors:', errors);
    } else {
        console.log('Data:', data);
        fullNameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    }
}

// Register form to "click" event
submitButton.addEventListener('click', validateForm);
