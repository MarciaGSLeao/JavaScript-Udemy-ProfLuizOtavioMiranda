const pessoa = {
    nome: 'Felipe',
    sobrenome: 'Gameleira',
    idade: 6,

    // Quando temos uma função dentro de um objeto, chamamos de método. Ex:

    fala () {
        console.log(`${this.nome} ${this.sobrenome} tem ${this.idade} anos.`)
    }
}

console.log(pessoa.fala())

