let input = document.getElementById("input")
let btnAdd = document.getElementById("botao-adicionar")
let areaLista = document.getElementById("lista_de_tarefas")
let contador = 0

function addTarefa(){
    let valorinput =  input.value ;
    if ((valorinput !== null) && (valorinput !== undefined) && (valorinput !== "")){
        ++ contador 
        let novoItem = `<div id="${contador}" class="item">
                            <div class="item-icone">
                                <i onclick="marcarTarefa(${contador})" id="icone-${contador}" class="mdi mdi-circle-outline"></i>
                            </div>

                            <div  onclick="marcarTarefa(${contador})" class="item-nome">
                                <p>${valorinput}</p>
                            </div>

                            <div class="item-botao">
                                <button onclick="deletar(${contador})" class="deletar"><i class="mdi mdi-delete"></i> Deletar </button>
                            </div>
                        </div>`;
        areaLista.innerHTML += novoItem;

        input.value = "";
        input.focus();
    }
}

input.addEventListener("keyup" , function( event ){
    if(event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    }
}) 

function deletar(id){
    var item = document.getElementById(id)
    item.remove()
}


function marcarTarefa(id){
    var item = document.getElementById(id)
    var classe = item.getAttribute('class')        
    var icone = document.getElementById('icone-'+id)

    if (classe == 'item'){
        item.classList.add('clicado')
        icone.classList.remove('mdi-circle-outline')
        icone.classList.add('mdi-check-circle')
    } else{
        item.classList.remove('clicado')
        icone.classList.remove('mdi-check-circle')
        icone.classList.add('mdi-circle-outline')

    }
}