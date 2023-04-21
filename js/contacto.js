<<<<<<< HEAD
// script.js
const form = document.getElementById('contact-form');
const messageSent = document.getElementById('message-sent');

form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(form);
    form.style.display = 'none';
    messageSent.style.display = 'block';
  });
=======
// script.js
const form = document.getElementById('contact-form');
const messageSent = document.getElementById('message-sent');

form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(form);
    form.style.display = 'none';
    messageSent.style.display = 'block';
  });
>>>>>>> 64503ec1aac1511e7e3ef641b32abded79be38b6
