// MY SOLUTION 
// ADD ITEM 
const input = document.querySelector('.input');
const addTask = (task) =>{
    var neww = `
    <div class="item">
        <div> <i class="check fa-regular fa-square-check"></i> </div>
        <div> ${task} </div>
        <div> <i class="remove fa-solid fa-xmark"></i></div>
    </div>  
    `
    var containerTasks = document.querySelector('.tasks')
    containerTasks.innerHTML += neww

    input.value = ''
}

input.addEventListener('keydown' , (e) => {
    if(e.key === 'Enter'){
        if(input.value !== ''){
            addTask(input.value)
        }
    }
})

// REMOVE AND CHECK ITEM 
// i feel that this solution isn't the one because i think it overloads the site once that all the document is 'listened'. but i don't know 
document.addEventListener('click' , (e) =>{
    var icon = e.path[0]
    var task = e.path[2]

    if(icon.classList.contains('remove')){
        task.remove()
    } else if (icon.classList.contains('check')){
        task.classList.toggle('clicked')
        icon.classList.toggle('checked')
    } 
})



// TEACHER'S SOLUTION 

// In the HTML, for the items, instead of using a 'div', he used a label, and instead of the 'i's he used a real 'input' with types 'checkbox' and 'button', being the last one with value  'X' ---- maybe this would be better for the SEO, idk 

// Instead of creating a 'neww' variable like mine, he created, here in the js, all the task html structure

//He creates an object's array with the value of the task and its status (checked or not):
// const database =[
//     {'task':'JS Study' , 'status':''}
//     {'task':'Test1' , 'status':'checked'}
// ]