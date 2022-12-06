'use strict';

const images = [
    { 'id':  '1' , 'url': 'externos/chrono.jpg'},
    { 'id':  '2' , 'url': 'externos/inuyasha.jpg'},
    { 'id':  '3' , 'url': 'externos/tenchi.jpg'},
    { 'id':  '4' , 'url': 'externos/tenjhotenge.jpg'},
    { 'id':  '5' , 'url': 'externos/yuyuhakusho.jpg'},
    { 'id':  '6' , 'url': 'externos/ippo.png'},
]

const container_items = document.querySelector('#container-items')
// tmb podia ser ---- const container = document.getElementById('container-items')

const loadImages = ( images , container_items ) => {
   
    // images.forEach( item => {
    //     container.innerHTML += `
    //         <div class= "item"> 
    //         <img src= '${item['url']}'
    //         </div>
    //     `})

    // images.forEach(function( item ){
    //     container.innerHTML += `
    //         <div class= "item"> 
    //         <img src= '${item['url']}'
    //         </div>
    //     `})

    images.forEach( ( item ) => {
        container_items.innerHTML += `
            <div class= "item"> 
            <img src='${item['url']}'
            </div>
        `})
}
loadImages ( images , container_items)

let botoes = document.querySelectorAll('.btn-acao')

function showButton(){
    botoes[0].style.display = 'flex'
    botoes[1].style.display = 'flex'
}

function hideButton(){
    botoes.forEach( (item) => {
        item.style.display = 'none'
    })
    // fiz a mesma coisa, só que de um modo mais dinâmico --- se fosse mais botões, por exemplo, colocar de um por um seria inviável 
}



let items = document.querySelectorAll('.item')
const previous = () => {
    container_items.appendChild(items[0]);
    items = document.querySelectorAll('.item')
}

const next = () => {
    const lastItem = items[items.length - 1]
    container_items.insertBefore(lastItem, items[0])
    items = document.querySelectorAll('.item')
}

document.querySelector('#previous').addEventListener('click' , previous)
document.querySelector('#next').addEventListener('click' , next)