/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */

// const userNum = 5;

//Global variables
const confirmSelbtn = document.getElementById("confirmEvenOdd");
const evenOddForm = document.getElementById("evenOddForm")
const evenOddChoice = document.getElementById("evenOddChoice");
const userNumberValue = document.getElementById("userNumberValue")

//Generate random number
function getRandomNumber(min, max) {

    return Math.floor(Math.random(min, max) * max) + min;

}

//Get a boolean value of true if the sum of the values is even
function sumEvenOdd(value1, value2) {

    if ((value1 + value2) % 2 === 0) {
        return true
    }

    return false

}

//start chek on button click
evenOddForm.addEventListener("submit", function (e) {

    e.preventDefault();

    //Reads the user choice (even/odd)
    const userChoice = evenOddChoice.value;
    console.log("scelta utente =", userChoice);

    //Generates a randomnumber from 1 to 5
    randomNum = getRandomNumber(1, 5);
    console.log("numero random =", randomNum);

    //Reads the number choosen by user
    const userNum = userNumberValue.value
    console.log("Numero Utente =", userNum);

    //If the sum of the values is even (true)
    if (sumEvenOdd(randomNum, userNum)) {

        //and user choice is "even", user wins"
        switch (userChoice) {
            case "even":
                console.log("user wins");
                break;

            //otherwhise user loses
            default:
                console.log("user loses");
                break;
        }

    }

    //If the sum of the values is odd (false)
    else {

        //and user choice is "odd", user wins"
        switch (userChoice) {
            case "odd":
                console.log("user wins");
                break;

            //otherwhise user loses
            default:
                console.log("user loses");
                break;
        };

    }

})

/* Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma */

//iniziare a leggere la stringa dal suo valore massimo di lunghezza  e sottrarre man mano all'indice fino ad arrivare a 0 e aggiungere a una nuova variabile i vari valori dell'indice per ottenere la stringa al contrario.