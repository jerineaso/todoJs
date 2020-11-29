const inputBtn = document.querySelector("#inputBtn");
let todoList = document.querySelector(".todoList");
let todoItems = [];
let item = document.querySelector('#inputText');

inputBtn.addEventListener('click',e=>{
    e.preventDefault();
    console.log('clicked');
    console.log(item.value)
    displayArray(item.value);
    item.value = "";
})

function displayArray(items){
    todoItems.push(items);
    console.log(todoItems)
    todoItems.forEach((item,index) => {
        todo = `<li class = 'todoLinks' id='${index}'>${item} <span onclick='deleteItem(${index})'>&times;</span> </li>`;
    });
    console.log(todo);
    todoList.insertAdjacentHTML("beforeend",todo);
}

const deleteItem = (index) => {
    var id = index.toString();
    console.log(id);

    var item = document.getElementById(id);
    todoItems.splice(index,1);
    item.remove();
}; 