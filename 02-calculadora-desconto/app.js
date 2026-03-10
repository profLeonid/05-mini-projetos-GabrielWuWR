'use strict';

function removerClasses() {
    const resultado = document.getElementById('resultado');
    resultado.classList.remove('alto', 'medio', 'baixo');
};

function calcularDesconto() {
    const numero = document.getElementById('numero');
    const porcentagem = document.getElementById('porcentagem');
    const resultado = document.getElementById('resultado');

    let resposta = (numero.value * porcentagem.value) / 100;

    removerClasses();

    if (porcentagem.value <= 5) {
        resultado.classList.add('baixo');
    } else if (porcentagem.value > 5 && porcentagem.value <= 10) {
        resultado.classList.add('medio');
    } else {
        resultado.classList.add('alto');
    }

    resultado.textContent = resposta;
}