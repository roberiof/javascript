const btn_adicao = document.getElementById('btn_adicao_tarefas')

// ADICIONAR UMA TAREFA
const adicionaTarefa = () => {
    var input  = document.getElementById('input_adicao_tarefas')
    if (input.value){
        var novo = 
        `
        <div class ="item afazer">
            <h2 class="h2-item" > ${input.value} </h2>
            <div class = "botoes"> 
                <button class="finish-todo">
                    <i class="fa-solid fa-check"></i>
                </button>
                <button class="remove-todo">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
        </div>
        `
        document.getElementById('container').innerHTML += novo

        input.value = ''
        input.focus()
    }
}
btn_adicao.addEventListener('click', adicionaTarefa)

// MARCAR OU REMOVAR UMA TAREFA 
document.addEventListener('click' , (e) =>{
    var div_mae = e.path[2]
    if (e.target.classList.contains('finish-todo')){
        div_mae.classList.toggle('feito')
        div_mae.classList.toggle('afazer')
    }
    if(e.target.classList.contains('remove-todo')){
        div_mae.remove()
    }
})


// ESSA DAQUI VAI SER A MINHA BASE PARA A CONSTRUÇÃO DE UM FILTRO  
//const feitos = Array.from(document.querySelectorAll('.feito'))
// const afazer = Array.from(document.querySelectorAll('.afazer'))

// feitos.forEach( (item) =>{
//     item.classList.toggle('hide')
// })

// afazer.forEach( (item) =>{
//     item.classList.toggle('hide')
// })