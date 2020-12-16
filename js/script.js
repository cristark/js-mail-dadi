/* Generare un numero random da 1  a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */


// | GIOCO DEI DADI
//- Variante con un dado
// Dichiaro le variabili principali
var playerNumber, cpuNumber, risultato;

console.log('GIOCO DEI DADI');
console.log('--------------');

// | FUNZIONE CHE GENERA I DATI CASUALI AL CLICK DEL PULSANTE
var playButton = document.getElementById("play_btn");
playButton.addEventListener("click", function() {

    //Inserire numero giocatore
    playerNumber = Math.floor(Math.random() * 6) + 1;

    // Numero casuale generato dal computer
    cpuNumber = Math.floor(Math.random() * 6) + 1;

    var result = 'Parità! Tenta nuovamente la fortuna!';

    // Condizione per stabilire l'esito della partita
    if (playerNumber > cpuNumber) {
        result = 'Congratulazioni! Hai vinto!';
    } else if (playerNumber < cpuNumber) {
        result = 'Hai perso, prova di nuovo!';
    }

    // STAMPA DATI NEL GIOCO
    document.getElementById('user_dice').innerHTML = playerNumber;
    document.getElementById('cpu_dice').innerHTML = cpuNumber;
    document.getElementById('message').innerHTML = result;
});

// -Variante con due dadi
// Calcolo valori casuali relativi ai due dadi dell'UTENTE e li sommo in una var
var userFirstDice = Math.floor(Math.random() * 6) + 1;
var userSecondDice = Math.floor(Math.random() * 6) + 1;
var userDiceResult = userFirstDice + userSecondDice;
console.log('La somma dei dadi dell\'UTENTE è: ' + userDiceResult);

// Calcolo valori casuali relativi ai due dadi del CPU e li sommo in una var
var cpuFirstDice = Math.floor(Math.random() * 6) + 1;
var cpuSecondDice = Math.floor(Math.random() * 6) + 1;
var cpuDiceResult = cpuFirstDice + cpuSecondDice;
console.log('La somma dei dadi del CPU è: ' + cpuDiceResult);

// Dichiaro variabile risultato finale
var finalDiceResult = 'Parità! Tenta nuovamente la fortuna!';

// Condizione per stabilire l'esito della partita
if (userDiceResult > cpuDiceResult) {
    finalDiceResult = 'Congratulazioni! Hai vinto!';
} else if (userDiceResult < cpuDiceResult) {
    finalDiceResult = 'Hai perso, prova di nuovo!';
}

console.log(finalDiceResult);

console.log('--------------');
console.log('GIOCO PARI O DISPARI');
console.log('--------------');

// | GIOCO PARI O DISPARI
var firstChoice = document.getElementById('option_choice').value;
console.log('UTENTE SCEGLIE: ' + firstChoice);
var secondChoice = document.getElementById('number_choice').value;
console.log('UTENTE SCEGLIE: ' + secondChoice);

//Stampo le scelte dell'utente all'interno del gioco
var playButton = document.getElementById("stamp_choice");
playButton.addEventListener("click", function() {

    document.getElementById('opt_choice').innerHTML = firstChoice;
    document.getElementById('numb_choice').innerHTML = secondChoice;

});

// Calcolo scelte del computer sulla base di quelle dell'utente
var cpufirstChoice, cpusecondChoice;

if (firstChoice == 'pari'){
    cpufirstChoice = 'dispari';
} else {
    cpufirstChoice = 'pari';
}

cpusecondChoice = Math.floor(Math.random() * 6);

console.log('CPU sceglie: ' + cpufirstChoice);
console.log('CPU sceglie: ' + cpusecondChoice);

//Calcolo l'esito della partita e stabilisco se il num. è pari o dispari
var choiceResult = Number(secondChoice) + Number(cpusecondChoice);
console.log('La somma è: ' + choiceResult);

var catResult = choiceResult % 2;
console.log(catResult);

// Converto il risultato in un valore pari o dispari
if (catResult == 0) {
    choiceResult = 'pari';
}   else {
    choiceResult = 'dispari';
}

console.log('La somma è: ' + choiceResult);

if (choiceResult == firstChoice) {
    console.log('Hai vinto!');
}   else {
    console.log('Hai perso');
}

// | GIOCO CARTA FORBICE SASSO
console.log('--------------');
console.log('GIOCO CARTA, FORBICE, SASSO');
console.log('--------------');

// Assegno array base gioco
var rspArr = ['carta', 'forbice', 'sasso'];

// Creazione prompt per decisione segno UTENTE
//! DECOMMENTARE SOTTO PER FAR PARTIRE GIOCO
/* var rspUserChoice = prompt('Scegli tra carta, forbice o sasso');
console.log(rspUserChoice);

// Assegnazione random segno CPU
var rspCpuNumChoice = Math.floor(Math.random() * 3);
console.log(rspCpuNumChoice);
var rspCpuChoice = rspArr[rspCpuNumChoice];
console.log(rspCpuChoice);

//Variabile esito partita
var rspResult;

if (rspUserChoice == 'carta' && rspCpuChoice == 'forbice') {
    rspResult = rspArr[1];
}   else if (rspUserChoice == 'carta' && rspCpuChoice == 'sasso') {
    rspResult = rspArr[0];
}   else if (rspUserChoice == 'forbice' && rspCpuChoice == 'sasso') {
    rspResult = rspArr[2];
}   else if (rspUserChoice == 'forbice' && rspCpuChoice == 'carta') {
    rspResult = rspArr[1];
}   else if (rspUserChoice == 'sasso' && rspCpuChoice == 'carta') {
    rspResult = rspArr[0];
}   else if (rspUserChoice == 'sasso' && rspCpuChoice == 'forbice') {
    rspResult = rspArr[2];
}   else  {
    rspResult = 'Parità!';
}

console.log(rspResult);

// Variabile per capire chi è il vincitore della partita
var rspMessagge;

if (rspResult == rspUserChoice) {
    rspMessagge = 'HAI VINTO!';
}   else if (rspResult == rspCpuChoice) {
    rspMessagge = 'HAI PERSO!';
}   else {
    rspMessagge = 'Parità';
}

console.log(rspMessagge); */

// | GIOCO TINGO
console.log('--------------');
console.log('GIOCO TINGO');
console.log('--------------');

var tingoNumbers = Math.floor(Math.random() * 10) + 1;
console.log(tingoNumbers);

var tingoSymbolsArr = ['denari', 'bastoni', 'spade', 'coppe'];
var tingoSymbolsRandom = Math.floor(Math.random() * 4);
var tingoSymbols = tingoSymbolsArr[tingoSymbolsRandom];
console.log(tingoSymbols);

console.log('La carta è il: ' + tingoNumbers + ' a ' + tingoSymbols);

var tingoResultsArr = ['Hai Vinto!', 'Hai perso!'];
var tingoResultsRandom = Math.floor(Math.random() * 2);
var tingoResults;

if (tingoNumbers == 2 && tingoSymbols == tingoSymbolsArr[1]) {
    tingoResults = 'TINGO!!!!'
} else {
    tingoResults = tingoResultsArr[tingoResultsRandom];
}

console.log(tingoResults);