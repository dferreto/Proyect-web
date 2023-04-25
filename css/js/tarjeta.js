// Extrae los datos
const inputName = document.querySelector("#input-name");
const inputNumber = document.querySelector("#input-number");
const inputMonth = document.querySelector("#input-month");
const inputYear = document.querySelector("#input-year");
const inputCVC = document.querySelector("#input-cvc");
const cardNumber = document.querySelector("#card-number");
const cardName = document.querySelector("#card-name");
const cardMonth = document.querySelector("#card-month");
const cardYear = document.querySelector("#card-year");
const cardCVC = document.querySelector("#card-cvc");
const form = document.querySelector("#form");
const thankYou = document.querySelector("#thank-you");
const buttonContinue = document.querySelector("#continue");

inputName.addEventListener("input", () => {
    cardName.innerText = inputName.value;

    // Le pone un valor por defecto al campò de card name
    if (inputName.value.length === 0) {
        cardName.innerText = "Jane Appleseed";
    }
})

var cleave = new Cleave('#input-number', {
    creditCard: true,
});

inputNumber.addEventListener("input", () => {
    cardNumber.innerText = inputNumber.value;
    // le pone un a valor por defecto al campo de numero de tarjeta
    if (inputNumber.value.length === 0) {
        cardNumber.innerText = "0000 0000 0000 0000";
    }
})

inputMonth.addEventListener("input", () => {
    cardMonth.innerText = inputMonth.value;
     // le pone un a valor por defecto al campo de fecha de vencimiento
    if (inputMonth.value.length === 0) {
        cardMonth.innerText = "00";
    }
})

inputYear.addEventListener("input", () => {
    cardYear.innerText = inputYear.value;
         // le pone un a valor por defecto al campo de fecha de vencimiento

    if (inputYear.value.length === 0) {
        cardYear.innerText = "00";
    }
})

inputCVC.addEventListener("input", () => {
    cardCVC.innerText = inputCVC.value;
         // le pone un a valor por defecto al campo de codigo de seguridad
    if (inputCVC.value.length === 0) {
        cardCVC.innerText = "000";
    }
})

// habilita el mensaje de gracias y lo desabilita
form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.classList.add("disabled");
    thankYou.classList.remove("disabled");
})

// Resea todo cuando le da al botoon de continuar y 
//Y se va al index
buttonContinue.addEventListener("click", () => {
    form.classList.remove("disabled");
    thankYou.classList.add("disabled");
    form.reset();
    cardName.innerText = "Jane Appleseed";
    cardNumber.innerText = "0000 0000 0000 0000";
    cardMonth.innerText = "00";
    cardYear.innerText = "00";
    cardCVC.innerText = "000";
    window.location.href = "index.html" , 100000;
})