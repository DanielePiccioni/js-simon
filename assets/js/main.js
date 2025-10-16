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
for( let i = 0; i < 5; i++){
    //selezione di un numero randomomico da 1 a 50 per gli intervalli
    const numero = Math.floor(Math.random()*50) + 1;
    numeriCasuali.push(numero)

    console.log(numero);
    
}