// extrae los datos
const form = document.getElementById('contact-form');
const messageSent = document.getElementById('message-sent');

// Habilita el mensaje despues de enviar el mensaje
form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(form);
    form.style.display = 'none';
    messageSent.style.display = 'block';
  });
