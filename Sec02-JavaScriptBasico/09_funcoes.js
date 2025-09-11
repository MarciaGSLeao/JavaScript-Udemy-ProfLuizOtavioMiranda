function saudacaoBD(nome){
    console.log(`Bom dia ${nome}!!!` );
}
saudacaoBD("Márcia");

// Podemos também atribuir o valor de uma função a uma variável.
let cumprimentoMarcia = saudacaoBD('Márcia');
console.log(cumprimentoMarcia);


function somaDoisNum(x, y){
    const res = x + y;
    return res;
}
console.log(somaDoisNum(2, 8));


// função anônima
const raiz = function (n) {
    return Math.sqrt(n);
}
console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));


// arrow function
const raiz1 = n => Math.sqrt(n);
console.log(raiz1(9));
console.log(raiz1(16));
console.log(raiz1(25));
