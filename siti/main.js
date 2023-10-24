/* *Il Validatore di Siti Web*: Chiedi all'utente un URL di un sito web. Controlla se l'URL inizia con "http://" o "https://", e se termina con ".com". 
Se non lo fa, informa l'utente che potrebbe non essere un URL valido. */
let sito = prompt('Inserisci un sito web')
if (!(sito.startsWith('http' || 'https') && sito.endsWith('.com')))  {
   console.error('URL non valido')
}