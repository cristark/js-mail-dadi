/* Generare un numero random da 1  a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

// Dichiaro le variabili principali
var playerNumber, cpuNumber, risultato;

//Inserire numero giocatore
playerNumber = Math.floor(Math.random() * 6) + 1;
console.log(playerNumber);

// NUmero casuale generato dal computer
cpuNumber = Math.floor(Math.random() * 6) + 1;
console.log(cpuNumber);


if (playerNumber > cpuNumber) {
    risultato = console.log('Hai vinto!');
} else if (playerNumber < cpuNumber) {
    risultato = console.log('Hai perso!');
} else {
    risultato = console.log('Parità!');
}
