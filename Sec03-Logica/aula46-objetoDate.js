const tresHoras = 3 * 60 * 60 * 1000;
const umDia = 24 * 60 * 60 * 1000;
const data = new Date();
const data0 = new Date(0 + tresHoras); // 01/01/1970 - Timestamp unix
const dataUmDia = new Date(0 + tresHoras + umDia); // 01/01/1970 - Timestamp unix

console.log(data.toString());
console.log(data0.toString());
console.log(dataUmDia.toString());

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formataDataBrasil(dataX){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());

    return `${dia}/${mes}/${ano}`;
}

console.log(formataDataBrasil(new Date()));
