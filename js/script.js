// Step da fare
// 1 Chiedere numero km all'utente
// 2 chiedere l'età all'utente
// 3 Calcolare prezzo del viaggio moltiplicando il costo al km (0.21)
// 4 Effettuare lo sconto per minorenni o over 65
// 5 Output prezzo finale con massimo due decimali 

// Chiedo i km all'utente 
const userKm = parseInt(prompt("Quanti km farai?"));
console.log(userKm);

// Chiedo l'età all'utente
const userAge = parseInt(prompt("Quanti anni hai?"));
console.log(userAge);

// Calcolo costo viaggio
const travelPrice = (0.21 * userKm);
console.log(travelPrice);

// 4 Effettuo la scontistica 
let discount = travelPrice;
if (userAge < 18) {
    discount = travelPrice - travelPrice * 0.20;
    alert("20% di sconto")

} else if (userAge > 65) {
    discount = travelPrice - travelPrice * 0.40
    alert("40% di sconto")
}

console.log(discount)

// output utente

let discountFixed = discount.toFixed(2)

userMessage = (" Il prezzo del biglietto è : " + discountFixed + ("$"))
document.getElementById('final-price').innerHTML = userMessage



