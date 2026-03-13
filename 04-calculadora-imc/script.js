'use strict';

const resultado = document.getElementById('resultado');

function classificaIMC(imc) {
    let imcUsuario = imc;
    let resposta;

    if (imcUsuario < 18.5) {
        resposta = 'Abaixo do peso';
    } else if (imcUsuario >= 18.5 && imcUsuario <= 24.9) {
        resposta = 'com o Peso normal';
    } else if (imcUsuario >= 25 && imcUsuario <= 29.9) {
        resposta = 'com Sobrepeso';
    } else if (imcUsuario >= 30 && imcUsuario <= 34.9) {
        resposta = 'com Obesidade grau I';
    } else if (imcUsuario >= 35 && imcUsuario <= 39.9) {
        resposta = 'com Obesidade grau II';
    } else if (imcUsuario >= 40) {
        resposta = 'com Obesidade grau III';
    };

    return resposta;
}

function removerClasses() {
    resultado.classList.remove('pesoAbaixo', 'pesoNormal', 'sobrePeso', 'obesidadeI', 'obesidadeII', 'obesidadeIII');
};

function mudarCor(imc) {
    let imcUsuario = imc;

    removerClasses();
    if (imcUsuario < 18.5) {
        resultado.classList.add('pesoAbaixo');
    } else if (imcUsuario >= 18.5 && imcUsuario <= 24.9) {
        resultado.classList.add('pesoNormal');
    } else if (imcUsuario >= 25 && imcUsuario <= 29.9) {
        resultado.classList.add('sobrePeso');
    } else if (imcUsuario >= 30 && imcUsuario <= 34.9) {
        resultado.classList.add('obesidadeI');
    } else if (imcUsuario >= 35 && imcUsuario <= 39.9) {
        resultado.classList.add('obesidadeII');
    } else if (imcUsuario >= 40) {
        resultado.classList.add('obesidadeIII');
    };

    return resposta;
}

function calcularIMC() {
    let inputNome = document.getElementById('campoNome');
    let inputAltura = document.getElementById('campoAltura');
    let inputPeso = document.getElementById('campoPeso');
    let resultado = document.getElementById('resultado');

    let nome = inputNome.value.trim();
    let altura = Number(inputAltura.value);
    let peso = Number(inputPeso.value);

    if (nome === '' || isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        resultado.textContent = 'Preencha todos os campos corretamente.';
        return;
    }

    let imc = peso / (altura * altura);
    let imcMensagem = classificaIMC(imc);

    resultado.textContent = `Senhor(a): ${nome}, seu IMC atual é: ${imc.toFixed(2)}, portanto está com ${imcMensagem}`;
    mudarCor(imc);
};