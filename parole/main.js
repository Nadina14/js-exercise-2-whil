/* Il Sostitutore di Parole*: Chiedi all'utente una frase e due parole: una da trovare e una con cui sostituirla. Sostituisci tutte le occorrenze della parola specificata nella frase. */
let frase = prompt('Scrivi una frase');
let parola1 = prompt('Scrivi la parola da trovare');
let parola2 = prompt('Scrivi la parola con cui sostituire la precedente');
let frase2 = frase.replaceAll(parola1, parola2);
console.log(frase2)