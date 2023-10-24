let num = prompt('Inserisci un numero da 1 a 10');
let moltiplicatore = 1;
let numN = Number(num);
while(moltiplicatore <= 10) {
    let result = numN * moltiplicatore;
    console.log(numN + ' x ' + moltiplicatore + ' = ' + result);
    moltiplicatore ++;
}