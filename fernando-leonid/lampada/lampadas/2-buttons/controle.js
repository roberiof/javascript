const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')
  
turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click' , lampOff)
lamp.addEventListener('dblclick' , lampBreak)

lamp.addEventListener('mouseover' , lampOn)
lamp.addEventListener('mouseleave' , lampOff)

function lampOn() {
    lamp.src  = 'externos/ligada.jpg' 
}

function lampOff() {
    lamp.src = 'externos/desligada.jpg'
}

function lampBreak(){
    lamp.src = 'externos/quebrada.jpg'
}