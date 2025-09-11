function dados () {
    const formulario = document.querySelector('.form');

/*    formulario.onsubmit = function (evento) {
        evento.preventDefault();
        alert('Dados enviados!');
        console.log('Dados enviados.')
    }
*/
    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = formulario.querySelector('.nome');
        const sobrenome = formulario.querySelector('.sobrenome');
        const peso = formulario.querySelector('.peso');
        const altura = formulario.querySelector('.altura');

       console.log(nome.value,
                   sobrenome.value,
                   peso.value,
                   altura.value)
    }

    formulario.addEventListener('submit', recebeEventoForm)
}
dados();
