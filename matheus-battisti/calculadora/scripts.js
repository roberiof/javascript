// MEU MODO DE FAZER. 
//  FIZ SEM VER O VÍDEO E USEI OS CONHECIMENTOS QUE TINHA PARA FAZER. 
// ACREDITO QUE NÃO É O MELHOR CÓDIGO POSSÍVEL, SOBRETUDO PELA GRANDE QUANTIDADE DE 'IFs' na função addDigit. PARANDO PARA PENSAR AQUI TEM O BUG DO PONTO: ELE NÃO CONSEGUE COLOCAR UM PONTO NO NÚMERO DO DISPLAY ATUAL SE O NÚMERO DO DISPLAY DE CIMA JÁ TEM UM PONTO. 

// const operadores =   ['-' , '+' , '*' , '/']
// var last_number = ''

// const addDigit = (digit) => {
//     if (digit === '.'){
//         if (last_number === ''){
//             document.querySelector('.display').innerHTML += '0.'
//             last_number += '0.'
//         }else{
//             if(!last_number.includes('.')){
//                 document.querySelector('.display').innerHTML += '.'
//                 last_number += '.'
//             }
//         }
//     } else{
//         if( operadores.includes(digit)){
//             if(!operadores.includes(last_number[last_number.length-1])){
//                 last_number += digit
//                 document.querySelector('.display-antes').innerHTML = last_number
//                 document.querySelector('.display').innerHTML = ''
//             } else{
//                 last_number = last_number.slice(0, -1)
//                 last_number += digit 
//                 document.querySelector('.display-antes').innerHTML = last_number

//             }
//         }else{
//             document.querySelector('.display').innerHTML += digit
//             last_number += digit
//         }
//     }
// }

// const calc = (expression) => {
//     clearCurrrentDisplay()
//     var resultado = eval(expression)
//     last_number  = resultado
//     document.querySelector('.display-antes').innerHTML = resultado
// }

// const clearDigit = () => {
//     var number = document.querySelector('.display').innerHTML 
//     number = number.slice(0,-1)
//     document.querySelector('.display').innerHTML = number
// }

// const clearAll = () =>{
//     document.querySelector('.display').innerHTML = ''
//     document.querySelector('.display-antes').innerHTML = ''
//     last_number = ''
// }

// const clearCurrrentDisplay = () => document.querySelector('.display').innerHTML = ''


// const buttons = document.querySelectorAll('.botoes button')
// buttons.forEach(item =>{
//     item.addEventListener('click' , (e) => {
//         var digit = e.target.innerText;
//         if(digit === 'DEL'){
//             clearDigit()
//         } else if (digit == 'CE'){
//             clearAll()
//         } else if (digit == 'C'){
//             clearCurrrentDisplay()
//         } else if( digit == '='){
//             calc(last_number)
//         } else{
//             addDigit(digit)
//         }
//     })
// })

// ANTES DE PRIMEIRAMENTE USAR OS BOTÕES, FAZER O FOR EACH E ADICIONAR UM EVENT LISTENER EM CADA UM DELES (MODO MAIS DINÂMICO E MENOS AGRESSIVO AO PROGRMA), TINHA FETIO UM EVENT LISTENER NA PÁGINA TODA. 
// document.addEventListener('click', (evento) =>{
//    var caractere = evento.target.innerText
//    if (numeros_validos.includes(caractere)){
//         if(last_number.includes(operadores)){
//             document.querySelector('.display').innerHTML += caractere
//             document.querySelector('.display-antes').innerHTML = eval(last_number + )
//         }
//         document.querySelector('.display').innerHTML += caractere
//         last_number += caractere
//    } 
//    console.log(last_number)
//    if (operadores.includes(caractere)){
//        if(!operadores.includes(last_number)){
//            document.querySelector('.display-antes').innerHTML += last_number + caractere
//            document.querySelector('.display').innerHTML = ''
//            last_number = caractere
//     }
//     console.log(last_number)
//    }
// })








// CÓDIGO DO MATHEUS 
// USA O ATRIBUTO DEFER PARA EVITAR COLOCAR O SCRIPT NO FUNDO DA PÁGINA HTML 
// USA UMA CLASSE CONSTRUCTOR. NUNCA TINHA USADO UMA DESSAS ANTES 
// SELECIONA O DISPLAY-ANTES E DISPLAY DE MODO DIFERENTE 
// USOU UMA FUNÇÃO A PARTE PARA ATUALIZAR A TELA UMA VEZ QUE ESSA ATIVIDADE SERÁ FEITA EM VÁRIOS MOMENTOS 
// APRESENTOU O USO DO MAIS NA FRENTE DE UMA STRING PARA CONVERTER ELA PARA NÚMERO
// USOU O SWITCH EM VEZ DE USAR VÁRIOS IF'S PARA AS OPERAÇÕES 
// FAZ DE OUTRA FORMA SEM PRECISAR USAR O EVAL, UMA FUNÇÃO CONTROVÉRSIA QUE PODE CAUSAR PROBLEMAS DE PERFORMACE E ESTRUTURA 
// A PARTE DE PROCESSAR OS OPERADORES FOI BEM CONFUSA 

const previousOperationText = document.querySelector('.display-antes')
const currentOperationText = document.querySelector('.display')
const buttons = document.querySelectorAll('.botoes button')

class Calculator {
    constructor(previousOperationText , currentOperationText){
        this.previousOperationText = previousOperationText
        this.currentOperationText = currentOperationText
        this.currentOperation = ''
    }

    //add digit to calculator screen 
    addDigit(digit){
        this.currentOperation = digit

        // regularizes the uses of the dot
        if(this.currentOperation === '.'){
            if(this.currentOperationText.innerText === ''){
                this.currentOperation = '0.'
            } else if(this.currentOperationText.innerText.includes('.')){
                this.currentOperation = ''
            }
        } 
        // regularizes the use of the 0 in the first 
        if(this.currentOperation === '0' && this.currentOperationText.innerText ===''){
            this.currentOperation = '0.'
        }

        this.updateScreen()
    }

    clearAll(){
        this.previousOperationText.innerText = ''
        this.currentOperationText.innerText = ''
    }

    clearCurrentDisplay(){
        this.currentOperationText.innerText = ''
    }

    clearNumber(){
        this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0, -1)
    }

    processEqualOperator(){
           let operation = this.previousOperationText.innerText.split(' ')[1]
           this.processOperation(operation)
    }

    processOperation(operation){
        // regularizes the change of the arithmetic operation 
        const operators = ['+' , '/' , '*' , '-']
        if (this.currentOperationText.innerText === '' && operators.includes(operation)){
            if (this.previousOperationText.innerText !== ''){
                this.previousOperationText.innerText = this.previousOperationText.innerText.slice(0,-1)  + operation
            }
            return 
        }

        var operationValue
        const previous = +this.previousOperationText.innerText.split(' ')[0]
        const current =  +this.currentOperationText.innerText
        //the plus in the front is to convert the string into number

        switch(operation){
            case "+":
                operationValue = previous + current
                this.updateScreen(operationValue, operation, current, previous)
                break
            case "-":
                operationValue = previous - current
                this.updateScreen(operationValue, operation, current, previous)
                break
            case "*":
                operationValue = current * previous
                this.updateScreen(operationValue, operation, current, previous)
                break
            case "/":
                operationValue = previous / current
                this.updateScreen(operationValue, operation, current, previous)
                break
            case "CE":
                this.clearAll()
                break
            case "C":
                this.clearCurrentDisplay()
                break
            case "DEL":
                this.clearNumber()
                break
            case "=":
                this.processEqualOperator()
                break
            default:
                return        
        }
    }

    updateScreen(operationValue = null, operation = null, current = null , previous = null){
        // this.currentOperationText.innerText += this.currentOperation
        // console.log(operation, operationValue, current, previous)
        if(operationValue === null){
            this.currentOperationText.innerText += this.currentOperation
        } else{
            // if (previous === 0){
            //     operationValue = current
            // }
            this.previousOperationText.innerText = `${operationValue} ${operation}`
            this.clearCurrentDisplay()
        }
    }
}

const calc  = new Calculator(previousOperationText , currentOperationText)

buttons.forEach(btn => {
    btn.addEventListener('click' , (e)=>{
        const value = e.target.innerText
        if(+value >= 0 || value === '.'){
            calc.addDigit(value)
        } else{
            calc.processOperation(value)
        }
    })
});

// outra forma que descobri recentemente!
// buttons.forEach( (btn) => {
//     btn.onclick = (e) =>{
//         const value = e.target.innerText
//         if(+value >=-0 || value === '.'){
//             calc.addDigit(value)
//         }else{
//             calc.processOperation(value)
//         }
//     }
// })