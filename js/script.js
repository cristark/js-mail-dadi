/* Generare un numero random da 1  a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */


// | GIOCO DEI DADI
// Dichiaro le variabili principali
var playerNumber, cpuNumber, risultato;

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