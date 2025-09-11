let data = new Date(0);
console.log(data);

data = new Date();
console.log(data.toString());
console.log(data.getDay());
console.log(data.getUTCDay());

const date = new Date();
const dateBrasil = formataDataBrasil(date);
console.log(dateBrasil);

// FORMATANDO UMA FUNÇÃO PADRÃO BRASIL.
function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formataDataBrasil(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    const segundo = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
}
