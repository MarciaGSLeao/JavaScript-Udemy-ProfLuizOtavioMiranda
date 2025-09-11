let numeroInformado = Number(prompt("Digite um número: "));
let areah3 = document.getElementById("numero-escolhido");
let textoPrincipal = document.getElementById("texto-principal");

areah3.innerHTML = numeroInformado;

textoPrincipal.innerHTML += (`<p>A raiz quadrada de ${numeroInformado} é ${Math.sqrt(numeroInformado)}.</p>`)
textoPrincipal.innerHTML += (`<p>${numeroInformado} é número inteiro? ${Number.isInteger(numeroInformado)}.</p>`)
textoPrincipal.innerHTML += (`<p>${numeroInformado} é NaN ${Number.isNaN(numeroInformado)}.</p>`)
textoPrincipal.innerHTML += (`<p>Arredondando para baixo: ${Math.floor(numeroInformado)}.</p>`)
textoPrincipal.innerHTML += (`<p>Arredondando para cima: ${Math.ceil(numeroInformado)}.</p>`)
textoPrincipal.innerHTML += (`<p>Com duas casas decimais:${numeroInformado.toFixed(2)}.</p>`)
