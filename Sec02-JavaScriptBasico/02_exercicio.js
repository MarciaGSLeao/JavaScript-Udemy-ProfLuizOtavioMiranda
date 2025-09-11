const nome = "Márcia";
const sobrenome = "Gameleira";
const idade = 31;
const peso = 86;
const alturaEmM = 1.58;
const imc = (peso/(alturaEmM**2));
const anoNascimento = 1990;

console.log(nome, sobrenome, "tem", idade, "anos, pesa", peso, "kg, tem", alturaEmM, "de altura e seu IMC é", imc.toFixed(2));
console.log(nome, sobrenome, "nasceu em", anoNascimento);
console.log("");

// Template String
console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso}kg, tem ${alturaEmM} de altura e seu IMC é ${imc.toFixed(2)}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`);
console.log("");
