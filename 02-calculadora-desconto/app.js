'use strict';

const calcularValorEconomizado = (preco, desconto) => preco * desconto / 100;
const calcularPrecoFinal = (preco, valorEconomizado) => preco - valorEconomizado;

function selecionarCor(desconto) {
    if (desconto <= 5) {
        return 'desconto1';
    } else if (desconto <= 10) {
        return 'desconto2';
    } else {
        return 'desconto3';
    };
};

function limparClasses() {
    document.getElementById('resultado').classList.remove('desconto1', 'desconto2', 'desconto3');
}

function handleClick() {
    const preco = Number(document.getElementById('preco').value);
    const desconto = Number(document.getElementById('desconto').value);
    const resultado = document.getElementById('resultado');

    const valorEconomizado = calcularValorEconomizado(preco, desconto);
    const precoFinal = calcularPrecoFinal(preco, valorEconomizado);
    const cor = selecionarCor(desconto);

    resultado.textContent = `${valorEconomizado} - ${precoFinal}`;
    limparClasses();
    resultado.classList.add(cor);
};