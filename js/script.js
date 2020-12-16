/* Generare un numero random da 1  a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

// Dichiaro le variabili principali
var playerNumber, cpuNumber, risultato;

//Inserire numero giocatore
playerNumber = Math.floor(Math.random() * 6) + 1;
console.log(playerNumber);

// Numero casuale generato dal computer
cpuNumber = Math.floor(Math.random() * 6) + 1;
console.log(cpuNumber);

// Condizione per stabilire l'esito della partita
if (playerNumber > cpuNumber) {
    console.log('Hai vinto!');
} else if (playerNumber < cpuNumber) {
    console.log('Hai perso!');
} else {
    console.log('Parità!');
}
