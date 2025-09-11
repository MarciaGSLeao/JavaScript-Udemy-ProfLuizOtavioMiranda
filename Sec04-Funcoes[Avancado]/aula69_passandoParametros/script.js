// Quando se declara uma função com a palavra reservada 'function', existe a possibilidade de usar um objeto chamado 'arguments' nos parâmetros.

function sumNumbers(){
    let total = 0;
    for(let argument of arguments){
            total += argument;
    }

    console.log(total);
}

sumNumbers(2,5,645,254,874);