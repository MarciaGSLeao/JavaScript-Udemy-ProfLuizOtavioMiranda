function myScope() {
    
    const form = document.querySelector('.formularioDadosPessoais');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];
    
    form.addEventListener('submit', recebeEventoFormulario);

    // form.onsubmit = function (event) {
        //     event.preventDefault();
        //     console.log('Formulário clicado');
        // };
        
    function recebeEventoFormulario(evento){
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        
        console.log(`Nome: ${nome.value} ${sobrenome.value} \nPeso: ${peso.value} \nAltura: ${altura.value}`);

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        
        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} - Peso: ${peso.value} - Altura: ${altura.value}</p>`;
    }

}

myScope();