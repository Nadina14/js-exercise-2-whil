/* *Il Gioco dell'Indovinello*: Genera un numero casuale tra 1 e 10. Chiedi all'utente di indovinare il numero. 
Se indovinano troppo alto, dì loro di indovinare più basso. Se indovinano troppo basso, dì loro di indovinare più alto. 
Se indovinano il numero, congratulati con loro. 
BONUS: all'inizio del gioco, l'utente sceglie la difficoltà, inserendo il numero più alto per il gioco. 
Genera un numero casuale tra 1 e il numero scelto. */


    let valMin = 1
    let valMax = 10
    let totNum = (valMax - valMin) + 1
    let random = Math.random() * totNum
    let risultato = Math.floor(random) + valMin
    let risultatoN = Number(risultato)
    let numUtente = prompt('Indovina il numero da 1 a 10')
    let numUtenteN = Number(numUtente)
    if (numUtenteN == risultatoN){
        alert('Congratulazioni! Hai indovinato!')
    }else if(risultatoN > numUtenteN){
        alert('Indovina più alto!')
    }else {
        alert('Indovina più basso!')
    }
