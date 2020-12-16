/* Generare un numero random da 1  a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

// Dichiaro le variabili principali
var playerNumber, cpuNumber, risultato;

// | FUNZIONE CHE GENERA I DATI CASUALI AL CLICK DEL PULSANTE
var playButton = document.getElementById("play_btn");
playButton.addEventListener("click", function() {

    //Inserire numero giocatore
    playerNumber = Math.floor(Math.random() * 6) + 1;
    console.log(playerNumber);

    // Numero casuale generato dal computer
    cpuNumber = Math.floor(Math.random() * 6) + 1;
    console.log(cpuNumber);

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