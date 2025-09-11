// O JS permite a inserção de tipos de dados distintos em um array, porém, isso não é uma boa prática.
// Ex:

let lista = ['Léo', 2, true, 3.9];
console.log('Lista incial: ');
console.log(lista);
console.log('');

console.log('Lista com dados alterados: ');
lista[0] = 'Felipe';
lista[1] = 'Lelê';
lista[2] = 'Márcia';
lista[3] = 'João';
console.log(lista);
console.log(lista.length);
console.log('');

console.log('Lista com dados alterados após inserção com médtodos: ');
lista.push("Doguinho"); // Adiciona ao final da lista.
lista.unshift('Papagaio'); // Adiciona no início da lista.
lista.shift('Papagaio'); // Remove um elemento no começo da lista.
console.log(lista);
console.log(lista.length);
console.log('');
