const inputBtn = document.querySelector('#inputBtn')  
let todoList = document.querySelector('.todoList')


// Without using array
// inputBtn.addEventListener('click',() =>{
//     let item = document.querySelector('#inputText').value
//     console.log(item)   
//     todoList.innerHTML += "<li class = 'todoLinks'>"+item+"</li>"
//     document.querySelector('#inputText').value = ''
// })

// Using Array
let todoItems = ["hello","hai"];
todoItems.forEach(displayArray)

inputBtn.addEventListener('click',() =>{
    let item = document.querySelector('#inputText').value
    todoItems.push(item)
    displayArray(item)
    document.querySelector('#inputText').value = ''
})

function displayArray(item){
    todoList.innerHTML += "<li class = 'todoLinks'>"+item+"</li>"
}

//Remove the Element
todoList.childNodes.forEach((item)=>{
    item.addEventListener('click',() =>{
        todoList.removeChild(item)
    })
})