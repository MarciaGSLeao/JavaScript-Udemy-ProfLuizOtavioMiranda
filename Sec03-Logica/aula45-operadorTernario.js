// A operação ternária deve ser atribuída a uma variável.
// <condição> ? <valor_se_verdadeiro> : <valor_se_falso>

const pontuacaoMinima = 1500;
const pontuacaoUsuario = 1400;
const nivelUsuario = pontuacaoUsuario >= pontuacaoMinima ? "VIP" : "Normal"; // A operação ternária encontra-se nessa linha de código.

console.log(nivelUsuario);
console.log(pontuacaoUsuario >= pontuacaoMinima ? "VIP" : "Normal");
