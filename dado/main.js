/* *La Sfida del Lancio del Dado*: Scrivi un programma che simula un gioco di lancio del dado tra l'utente e il computer. 
Sia l'utente che il computer lanciano un dado a sei facce, e quello con il tiro più alto vince. 
BONUS: Ripeti il gioco fino a quando l'utente decide di smettere. 
Tieni traccia di quanti giochi l'utente e il computer vincono ciascuno, e mostra i punteggi dopo ogni partita. */

let domanda = prompt('Vuoi iniziare il gioco?')
let punteggioUtente = 0;
let punteggioComputer = 0;
while (domanda == 'si' || domanda == 'SI') {
    let valMin = 1
    let valMax = 6
    let totNum = (valMax - valMin) + 1
    let random = Math.random() * totNum
    let risultato = Math.floor(random) + valMin
    let risultatoN = Number(risultato)
    console.log('Hai tirato ' + risultato)

    let valMin1 = 1
    let valMax1 = 6
    let totNum1 = (valMax1 - valMin1) + 1
    let random1 = Math.random() * totNum1
    let risultato1 = Math.floor(random1) + valMin1
    let risultato1N = Number(risultato1)
    console.log('Il computer ha tirato ' + risultato1)

    if (risultatoN > risultato1N){
        punteggioUtente ++;
    }else if (risultatoN == risultato1N){
        console.log('Siete pari. Nessuno ha preso punto');
    }else if(risultatoN < risultato1N){
        punteggioComputer ++;
    }
    console.log('Utente = ' + punteggioUtente + ' ' + 'Computer = ' + punteggioComputer)

    domanda = prompt('Vuoi continuare a giocare? (Si o No)');
} 
