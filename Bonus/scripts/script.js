let distance = prompt('Inserisci il numero di chilometri che vuole percorrere');

let clientAge = prompt('Quanti hanni ha?');

let totalPrice

const basePrice = 0.21;

let element = document.getElementById('full-cost');

if (clientAge < 12) {
    totalPrice = distance * basePrice * 0.8;
} else if (clientAge > 65)  {
    totalPrice = distance * basePrice * 0.6;
} else {
    totalPrice = distance * basePrice;
}

element.innerHTML = `${totalPrice.toFixed(2)} euro ` ;
