/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */



const randomNum = (Math.floor(Math.random(1, 5) * 5) + 1);
console.log(randomNum);

const userNum = 5;

function sumEvenOdd(value1, value2) {

    if ((value1 + value2) % 2 === 0) {
        return true
    }

    return false

}

if (sumEvenOdd(randomNum, userNum)) {
    console.log("pari");
} else {
    console.log("dispari");
}



/* Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma */

//iniziare a leggere la stringa dal suo valore massimo di lunghezza  e sottrarre man mano all'indice fino ad arrivare a 0 e aggiungere a una nuova variabile i vari valori dell'indice per ottenere la stringa al contrario.