console.log("its work");


/* 
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

/* 
TOOLS:
-mostrare 5 numeri casuali
-parte un timer di 30 secondi
-spariscono i numeri e appaiono 5 input
-l'utente deve inserire i 5 numeri visti prima
-verificare se i numeri inseriti sono corretti
-stamparlo in pagina
*/


//generazione di 5 numeri casuali

const numeriCasuali = [];
//prende 5 intervalli di numeri
for (let i = 0; i < 5; i++) {
    //selezione di un numero randomomico da 1 a 50 per gli intervalli
    const numero = Math.floor(Math.random() * 50) + 1;
    numeriCasuali.push(numero)

    console.log(numero);

}
//stampiamo i numeri in html
const numeriEL = document.getElementById("numeri")
numeriEL.textContent = numeriCasuali.join(" - ")

//timer set 30 secondi
let tempo = 5;
const timerEL = document.getElementById("timer");
//stampare il messaggio in html
timerEL.textContent = "Tempo rimasto " + tempo + " secondi"

const countdown = setInterval(() => {
    tempo--;
    timerEL.textContent = "Tempo rimasto " + tempo + " secondi"
    if (tempo == 0) {
        clearInterval(countdown);
        //function sottostante per eliminare i numeri e le scritte e aggiugnere gli input
        mostraInput();
    }
}, 1000);

// spariscono i numeri e il tempo e appaiono degli input
function mostraInput() {
    //stampare "finito il tempo" appena il timer arriva a 0
    numeriEL.textContent = "";
    timerEL.textContent = "Finito il tempo";

    const campiInputDiv = document.getElementById("campiInput");
    campiInputDiv.innerHTML = "";

    //creazione dei 5 input al posto dei numeri 
    for (let i = 0; i < 5; i++) {
        //creazione di un html input
        const input = document.createElement("input")
        // impostare la sezione input per solo numeri
        input.type = "number";
        //placeholder frase all'interno
        input.placeholder = "inserisci i numeri di prima ";
        //aaggiunta di un nuovo input di un elemento già esistente
        campiInputDiv .appendChild(input)
    }

    // Mostro il bottone già presente in HTML
    const bottone = document.getElementById("bottoneInvia");
    bottone.style.display = "inline";
}

