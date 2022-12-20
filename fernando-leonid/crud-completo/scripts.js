'use strict'

// CRUD!!! ------------------------------------------------------------- 
// temporary client used as exemple 
// const tempClient = {
//     name: "ca",
//     email: "ca@gmail.com",
//     phone: "902394023",
//     city: "São Roque"
// }    

// CREATE
const setItem = (object) => localStorage.setItem( 'dbClient' , JSON.stringify(object)) 
// the set is like i'm updating the information  
// the database has to be enclosed in quotes
const getItem = () => JSON.parse(localStorage.getItem('dbClient'))
// the get is like i'm getting the information  
// i made the stringigy and the parse changes because in the local storage, the object just is assimilated as a string, and to make changes to the object a have to convert it to a json ... 

const createClient = (client) =>{
    const dbClient = getItem() ?? []
    // what the above code does in a nutshell
    // var dbClient
    // if(getItem() !== null){
        //     dbClient = getItem()
        // }else{
            //     dbClient = []
            // }
    dbClient.push(client)   
    setItem(dbClient)
}    

// READ 
// basically it is the same thing as the getItem function, but i'll repeat it here for reasons of concepts organization
const readClient = () => JSON.parse(localStorage.getItem('dbClient'))

// UPDATE 
const updateClient = (index, client) => {
    const dbClient = readClient()
    dbClient[index] = client 
    setItem(dbClient)
}

// DELETE 
const deleteClient = (index) =>{
    const dbClient = readClient()
    dbClient.splice(index, 1)
    setItem(dbClient)
}

// modal --- add and edit new clients ----------------------------------
const clearFieldsModal = () =>{
    document.querySelector('.name-modal').value = ''
    document.querySelector('.email-modal').value = ''
    document.querySelector('.phone-modal').value = ''
    document.querySelector('.city-modal').value = ''
    //  one alternative solution ... 
    // const form_inputs = document.querySelectorAll('.inputs-modal input')
    // form_inputs.forEach( (item) => item.value = '')
}

const openModal = () => {
    document.querySelector('.modal').classList.add('active')
    document.querySelector('.fundo-modal').style.display = 'block'
}

const closeModal = () => {
    document.querySelector('.modal').classList.remove('active')
    document.querySelector('.fundo-modal').style.display = 'none'
    clearFieldsModal()
}

const openEditModal = (index) => {
    document.querySelector('.modal-edit').classList.add('active')
    document.querySelector('.fundo-modal').style.display = 'block'

    const dbClient = readClient()[index]
    document.querySelector('.name-modal-edit').value = dbClient["name"]
    document.querySelector('.email-modal-edit').value = dbClient["email"]
    document.querySelector('.phone-modal-edit').value = dbClient["phone"]
    document.querySelector('.city-modal-edit').value = dbClient["city"]
}

 const closeEditModal = () => {
    document.querySelector('.modal-edit').classList.remove('active')
    document.querySelector('.fundo-modal').style.display = 'none'
}

document.querySelector('.register-btn').addEventListener('click' , openModal)
document.querySelector('.cancel-modal').addEventListener('click' , closeModal)

document.querySelector('.cancel-modal-edit').addEventListener('click' , closeEditModal)

// LAYOUT INTERACTION  --------------------------------------------------

// save client 
const isValidFields = () => {
    return document.querySelector('.inputs-modal').reportValidity()
    // the tag has to be a form so that this reportValidity function works ---- it force you to fill all the form because of the required attribute in all the inputs
}

const createRow = (client , index) =>{
    var neww = `
    <tr class="item" id="${index}">
        <td> ${client["name"]} </td>
        <td> ${client["email"]} </td>
        <td> ${client["phone"]} </td>
        <td class="city-hidden"> ${client["city"]} </td>
        <td> 
            <div class="div-action-buttons">
                <button class="edit-item"> EDIT </button>
                <button class="delete-item"> DELETE </button>
            </div>
        </td>
    </tr>

    `
    document.getElementsByTagName('table')[0].innerHTML += neww
}

const clearTable = () => {
    const rows  = document.querySelectorAll('.item')
    rows.forEach( (row) => row.parentNode.remove())
}

const updateTable = () =>{
    const dbClient = readClient() 
    clearTable()
    // i have to do this so that the items don't repeat every time i update the table 
    if(dbClient){
        dbClient.forEach( (client) => createRow(client , dbClient.indexOf(client)) )        
    }

} 
updateTable()

const saveClient = () => {
    if (isValidFields()){
        const client = {
            name: document.querySelector('.name-modal').value,
            email: document.querySelector('.email-modal').value,
            phone: document.querySelector('.phone-modal').value,
            city: document.querySelector('.city-modal').value
        }
        createClient(client)
        updateTable()
        closeModal()
    }
}
document.querySelector('.save-modal').addEventListener('click' , saveClient)

// edit client 
const editDelete  = (index, action) =>{
    if (action === ' EDIT '){
        openEditModal(index)
        document.querySelector('.save-modal-edit').onclick = () =>{
            const dbClient = readClient()[index]
            dbClient["name"] = document.querySelector('.name-modal-edit').value 
            dbClient["email"] = document.querySelector('.email-modal-edit').value 
            dbClient["phone"] = document.querySelector('.phone-modal-edit').value 
            dbClient["city"] = document.querySelector('.city-modal-edit').value 
            console.log(dbClient)

            updateClient(index, dbClient)
            updateTable()
            closeEditModal()
        }
    }else{
        deleteClient(index)
        updateTable()
    }
}

const editDelete_buttons = document.querySelectorAll('tbody tr')
editDelete_buttons.forEach( (item) => item.addEventListener('click' , (e) =>{   
    var index = e.path[3].id
    var action = e.path[0].innerHTML
    if (action == ' EDIT ' || action === ' DELETE '){
        editDelete(index, action)
    }
}))


/// well, the project is finished but it has one bug that when you delete an client, for make another edit or delete action, you have to update the page with crtl + r or F5   