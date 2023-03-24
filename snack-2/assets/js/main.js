//Scrivi una funzione che accetti tre argomenti:
//un array e due numeri ("a" più piccolo di "b" e "b" grande al massimo quanto il numero di elementi dell'array).
//La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra "a" e "b"

let a, b, rest;
[a, b] = [10, 50];

console.log(a);
// Expected output: 10

console.log(b);
// Expected output: 20

[a, ...b ] = [ 10, 20, 30, 40];

console.log(...b);
// Expected output: A