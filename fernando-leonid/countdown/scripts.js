'use strict';

const padronizaNumero = (numero) =>{
    var numero_string = '' + numero
    if (numero_string.length == 1){
        numero_string = '0' + numero_string
    }
    return numero_string
}
const atualizarTempo = (tempo) =>{
    const segundos = document.querySelectorAll('.segundos')[1]
    const minutos = document.querySelectorAll('.minutos')[1]
    const horas = document.querySelectorAll('.horas')[1]
    const dias = document.querySelectorAll('.dias')[1]

    const quant_dias = tempo / 86400
    const quant_horas = (quant_dias- Math.floor(quant_dias))*24
    const quant_minutos = (quant_horas - Math.floor(quant_horas))*60
    const quant_segundos = (quant_minutos - Math.floor(quant_minutos)) * 60

    
    segundos.textContent = padronizaNumero(Math.round(quant_segundos))
    minutos.textContent = padronizaNumero(Math.round(quant_minutos))
    horas.textContent = padronizaNumero(Math.round(quant_horas))
    dias.textContent = padronizaNumero(Math.round(quant_dias))
    console.log(segundos.textContent)
}

const contagemRegressiva = (tempo) =>{
    const contar = () => {
        if (tempo > 0){
            atualizarTempo(tempo)
            tempo--
        }
    }

    const id = setInterval(contar , 1000)
}
 
const tempoRestante = () =>{
    const dataEvento = new Date('2022-12-18 12:00:00')
    const  hoje = Date.now()
    return ((dataEvento - hoje) / 1000)
}
contagemRegressiva(tempoRestante())

