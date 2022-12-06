// MODO SOLO: FIZ SOZINHO, COM O CONHECIMENTO QUE APRENDI DURANTE ESSE SEMANA. 
// const verde = document.getElementById('verde')
// const amarelo = document.getElementById('amarelo')
// const vermelho= document.getElementById('vermelho')
// const automatico = document.getElementById('automatico')
// const img = document.getElementById('imagem')

// verde.addEventListener('click', function(){
//     img.src = 'externos/verde.png'
// })

// amarelo.addEventListener('click', function(){
//     img.src = 'externos/amarelo.png'
// })

// vermelho.addEventListener('click', function(){
//     img.src = 'externos/vermelho.png'
// })

// var ci = -1
// function mudaIndice(){
//     if (ci == 0) {
//         ci = 1
//     } else if (ci == 1){
//         ci = 2
//     } else{
//         ci = 0
//     }
// }
// automatico.addEventListener('click',  function(){
//     setInterval(() => {
//     cores = ['vermelho' , 'amarelo', 'verde']
//     mudaIndice()
//     img.src = `externos/${cores[ci]}.png`
//     }, (1000));
// }) 


//MODO PROFESSOR: FIZ COM AJUDA DO PROFESSOR, QUE APRESENTA NOVOS CONCEITOS E DEIXA O CÓDIGO MAIS DINÂMICO

const img = document.getElementById('imagem');
const buttons = document.getElementById('buttons');


const trafficLight = (event) => {
    turnOn[ event.target.id ]()
}

buttons.addEventListener('click' , trafficLight)

var indice = 0 
function changeColor(){
    const colors = ['vermelho' , 'amarelo' , 'verde']
    turnOn[colors[indice]]()
    indice ++ 
    if (indice == 3){
        indice = 0 
    }
}
const turnOn = {
    'vermelho': () => img.src ='externos/vermelho.png',
    'verde': () => img.src ='externos/verde.png',
    'amarelo': () => img.src ='externos/amarelo.png',
    'automatico': () => setInterval( changeColor,  1500)
}
