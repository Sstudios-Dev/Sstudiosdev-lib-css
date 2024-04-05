// formValidation.js
function validateForm(event) {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');

    if (!nameInput.value || !emailInput.value || !messageInput.value) {
        event.preventDefault();
        alert('Please complete all fields.');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', validateForm);
});
