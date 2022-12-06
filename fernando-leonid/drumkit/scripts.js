'use strict';

const sons = {
    'A' : 'boom.wav',
    'S': 'clap.wav',
    'D' : 'hihat.wav',
    'F' :'kick.wav',
    'I': 'openhat.wav',
    'J': 'ride.wav',
    'K': 'snare.wav',
    'L': 'tink.wav',
    'Ç': 'tom.wav',
}

// const criarDiv = (texto) => {
//     const div = document.createElement('div');
//     div.classList.add('key');
//     div.textContent = texto;
//     div.id = texto;
//     document.getElementById('container').appendChild(div);
// };

// const exibirSons = (sons) => {
//     Object.keys(sons).forEach( criarDiv ) 
// };
// com a função abaixo, consegui unir as duas funções de cima!! 

const criarDiv  = (sons) =>{
    Object.keys(sons).forEach( (item) => {
      const div = document.createElement('div');
      div.classList.add('key');
      div.textContent = item ;
      div.id = item;
      document.getElementById('container').appendChild(div);
    }
    )
}

const tocarSom = (letra) => {
    const audio = new Audio(`externos/${sons[letra]}`);
    audio.play();
}

const adicionarEfeito = (letra) => document.getElementById(letra).classList.add('active')

const removerEfeito = (letra) => {
    const div = document.getElementById(letra);
    div.addEventListener('transitionend' , () => div.classList.remove('active'));
    // esse transitioned significa que a função somente vai ser realizada após a transição!!
}

const ativarDiv = (evento) => { 
    const letra = evento.type === 'click' ? evento.target.id : evento.key.toUpperCase();
    if (Object.keys(sons).includes(letra)){
        adicionarEfeito(letra);
        tocarSom(letra);
        removerEfeito(letra);
    }    
}





// exibirSons(sons); 
// como eu uni as duas funções, isso não é mais necessário ... 
criarDiv(sons)
document.getElementById('container').addEventListener('click' , ativarDiv)
window.addEventListener('keydown' , ativarDiv)

