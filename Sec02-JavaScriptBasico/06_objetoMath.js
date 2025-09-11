let num = 9.5633;

let num1 = Math.floor(num); // o método floor arredonda um float para o inteiro da parte numérica.
let num2 = Math.ceil(num); 
let num3 = Math.round(num); 

console.log(num1);
console.log(num2);
console.log(num3);

// Usando o método random do objeto Math, podemos gerar de forma aleatória.
let numAleatorio = (Math.random() * 10).toFixed();
console.log(numAleatorio);
