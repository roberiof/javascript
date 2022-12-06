var button = document.getElementById("button")
var lamp = document.getElementById("lamp")

button.addEventListener('click' , function
(){
    if (button.innerText === 'LIGAR'){
        lamp.src = 'externos/ligada.jpg'
        button.innerText = 'DESLIGAR'
    } else{
        lamp.src = 'externos/desligada.jpg'
        button.innerText = 'LIGAR'
    }
})

lamp.addEventListener('dblclick' , function() {
    lamp.src = 'externos/quebrada.jpg'
})
