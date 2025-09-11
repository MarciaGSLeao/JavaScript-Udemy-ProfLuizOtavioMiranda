// O conceito de objeto em js é semelhante ao conceito de dicionário em python.

const pessoa = {
    nome: 'Márcia',
    sobrenome: 'Gameleira',
    endereco: {
        logradouro: 'Av. Dr. Guarany',
        numero: 115,
        bairro: 'Derby',
        cidade: 'Sobral',
        estado: 'CE'
    },
    telefone: '11943068475',
    idade: 31
}

console.log(pessoa);
console.log(pessoa.nome, pessoa.idade);
