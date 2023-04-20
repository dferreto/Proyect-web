// script.js
const form = document.getElementById('contact-form');
const messageSent = document.getElementById('message-sent');

form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(form);
    form.style.display = 'none';
    messageSent.style.display = 'block';
  });
