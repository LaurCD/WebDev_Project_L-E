const FirstName = document.getElementById('FirstName');
const LastName = document.getElementById('LastName');
const email = document.getElementById('email');
const reason = document.getElementById('reason');
const message = document.getElementById('message');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = [];

    if (FirstName.value.trim() === '') {
        messages.push('*First name is required');
    }

    if (LastName.value.trim() === '') {
        messages.push('*Last name is required');
    }

    if (reason.value === '') {
        messages.push('*Please select a reason for inquiry');
    }

    if (message.value.trim() === '') {
        messages.push('*Message field cannot be empty')
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join('\n');
    }
});
