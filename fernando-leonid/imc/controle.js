var button = document.getElementById('button');

function imc(){
    var nome = document.getElementById('nome').value
    var altura = document.getElementById('altura').value 
    var peso = document.getElementById('peso').value
    
    if((peso !== (null ||  undefined || "")) && (nome !== (null ||  undefined || "")) && (altura !== (null ||  undefined || ""))){
        var imc =  peso /(altura**2)
        imc = imc.toFixed(2)

        if (imc < 18.5){
            resp = 'Baixo peso'
        } else if ( 18.4 <= imc <= 24.99){
            resp = 'Normal'
        } else if (25 <= imc <= 29.99){
            resp = 'Sobrepeso'
        } else{
            resp = 'Obesidade'
        }

        document.getElementById('resposta').innerHTML = `<p class="destaque">${nome} </p>, o resultado do seu IMC foi, aproximadamente, <p class='destaque'>${imc}</p> . Logo, sua situação encaixa-se como:  <p class="destaque">${resp}</p>`    
    } else{
        document.getElementById('resposta').innerHTML = `Por favor, preencha todos os dados corretamente.`
        document.getElementById('resposta').style.color = 'red'
    }
}

button.addEventListener('click', imc)
