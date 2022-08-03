'use strict'

const resultado = document.getElementById('resultado');

var result

function somar (){
let numero1 = parseFloat(document.getElementById('numero1').value);
let numero2 = parseFloat(document.getElementById('numero2').value);
let soma = numero1 + numero2;

result = 'O resultado é ' + soma;

resultado.textContent = result;
}

function subtrair(){

    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);

    let sub = numero1 - numero2;

    result = 'O resultado é ' + sub;

    resultado.textContent = result;
}

function multiplicar(){

    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);

    let mult = numero1 * numero2;

    result = 'O resultado é ' + mult;

    resultado.textContent = result;
}

function dividir(){

    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);

    if (numero2 == 0){
        result = 'Não é possível dividir por zero!';
    }

    else{
    let divi = numero1 / numero2;

    result = 'O resultado é ' + divi;
    };

    resultado.textContent = result;
}



document.getElementById('somar').addEventListener('click', somar)
document.getElementById('subtrair').addEventListener('click', subtrair)
document.getElementById('multiplicar').addEventListener('click', multiplicar)
document.getElementById('dividir').addEventListener('click', dividir)

