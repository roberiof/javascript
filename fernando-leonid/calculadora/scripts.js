'use strict';

const display = document.getElementById('display');
const numeros = document.querySelectorAll('[id*=tecla]')
const operadores = document.querySelectorAll('[id*=operador]')

var novoNumero = true
var operador
var numeroAnterior

const calcular = () =>{
    if(operador !== undefined){
        const numeroAtual = parseFloat(display.textContent.replace(',','.'))
        novoNumero = true 
        var resultado = eval(`${numeroAnterior}${operador}${numeroAtual}`)
        if (resultado.toString().includes('.')){
            resultado = resultado.toFixed(2)
            resultado = resultado.replace('.' , ',')
        }
        atualizarDisplay(resultado) 

        // para substituir todos esse if vale a pena trocar pela função eval acima... 
        // if (operador == '+'){
        //     atualizarDisplay(numeroAnterior + numeroAtual)
        // } 
        // if (operador == '-'){
        //     atualizarDisplay(numeroAnterior - numeroAtual)
        // } 
        // if (operador == '*'){
        //     atualizarDisplay(numeroAnterior * numeroAtual)
        // } 
        // if (operador == '/'){
        //     atualizarDisplay(numeroAnterior / numeroAtual)
        // } 
    }
}
const atualizarDisplay = (numero) => {
    if (novoNumero){
        display.textContent = numero
        novoNumero = false
    }else{
        display.textContent += numero
    }
}

const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent)
numeros.forEach( (numero) => numero.addEventListener('click', inserirNumero) )

const selecionarOperador = (evento) => {
    if (!novoNumero){
        calcular()
        novoNumero = true
        operador = evento.target.textContent
        numeroAnterior = parseFloat(display.textContent.replace(',','.'))
    }
}
operadores.forEach( (operador) => operador.addEventListener('click' , selecionarOperador))

const ativarIgual = () => {
    calcular()
    operador = undefined
}
document.getElementById('igual').addEventListener('click' , ativarIgual) 



// CONFIGURAÇÕES DAS LIMPAGENS 
const limparDisplay = () => {
    display.textContent = ''
}
document.getElementById('limparDisplay').addEventListener('click' , limparDisplay)

const limparCalculo = () =>{
    limparDisplay()
    operador   = undefined
    novoNumero = true 
    numeroAnterior = undefined
}
document.getElementById('limparCalculo').addEventListener('click' , limparCalculo)

const removerUltimoNumero = () => {
    display.textContent = display.textContent.slice(0, -1,)
}

document.getElementById('backspace').addEventListener('click' , removerUltimoNumero)

// CONFIGURAÇÃO DA INVERSÃO 
const inverterSinal = () =>{
    novoNumero = true
    atualizarDisplay(display.textContent * -1)
}
document.getElementById('inverter').addEventListener('click' , inverterSinal)

// CONFIGURAÇÃO DO DECIMAL 
const existeDecimal = () => display.textContent.indexOf(',') !== -1;
const existeValor = () => display.textContent.length > 0;

const inserirVirgula = () => {
    if (!existeDecimal()){
        if (existeValor()){
            atualizarDisplay(',')
        }else{
            atualizarDisplay('0,')
        }
    } 
}
document.getElementById('decimal').addEventListener('click' , inserirVirgula)


// CONFIGURANDO O USO DO TECLADO EM VEZ DO MOUSE
const mapaTeclado = {
    0: 'tecla0',
    1: 'tecla1',
    2: 'tecla2',
    3: 'tecla3',
    4: 'tecla4',
    5: 'tecla5',
    6: 'tecla6',
    7: 'tecla7',
    8: 'tecla8',
    9: 'tecla9',
    '/': 'operadorDividir',
    '*': 'operadorMultiplicar',
    '-': 'operadorSubtrair',
    '+': 'operadorAdicionar',
    '=': 'igual',
    Enter: 'igual',
    Backspace: 'backspace',
    c: 'limparDisplay',
    Escape: 'limparCalculo',
    ',': 'decimal',
};
const mapearTeclado = (evento) => {
    const tecla = evento.key
    if (Object.keys(mapaTeclado).includes(tecla)){
        document.getElementById(mapaTeclado[tecla]).click()
    }
}
document.addEventListener('keydown' , mapearTeclado)
 