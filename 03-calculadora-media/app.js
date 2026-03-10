'use strict';

function removerClasses() {
    const resultado = document.getElementById('resultado');
    resultado.classList.remove('aprovado', 'recuperacao', 'reprovado');
};

function calcularMedia() {
    const input1 = document.getElementById('nota1');
    const input2 = document.getElementById('nota2');
    const input3 = document.getElementById('nota3');
    const resultado = document.getElementById('resultado');

    let nota1 = Number(input1.value);
    let nota2 = Number(input2.value);
    let nota3 = Number(input3.value);

    removerClasses();
    let media = (nota1 + nota2 + nota3) / 3;
    if(media >= 7) {
        resultado.textContent = 'Aprovado';
        resultado.classList.add('aprovado');
    } else if (media >= 5 && media <= 6.9) {
        resultado.textContent = 'Recuperação';
        resultado.classList.add('recuperacao');
    } else {
        resultado.textContent = 'Reprovado';
        resultado.classList.add('reprovado');
    }

}