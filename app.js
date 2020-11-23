const inputBtn = document.querySelector("#inputBtn");
let todoList = document.querySelector(".todoList");
let todoItems = [];
let item = document.querySelector('#inputText');

inputBtn.addEventListener('click',e=>{
    e.preventDefault();
    console.log('clicked');
    console.log(item.value)
    displayArray(item.value);
    item.value = ''
})

function displayArray(items){
    todoItems.push(items);
    console.log(todoItems)
    let links = document.createElement('li'); 
    links.classList.add('todoLinks');
    
    let value = document.createTextNode(items);
    links.appendChild(value)
    todoList.appendChild(links) 
    var myNodelist = document.getElementsByTagName("li");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
    }
}
