const todoForm =document.querySelector("#todo");
const addTodo = document.querySelector("#todo input");
let toDos =[];

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function addFunction(todoText) {
    const todoList = document.createElement("li");
    todoList.id=todoText.id;
    const listText = document.createElement("span");
    const listDel = document.createElement("button");

    todoList.appendChild(listText);
    todoList.appendChild(listDel);
    document.querySelector("#todo-list").appendChild(todoList);
    
    listText.innerText=todoText.text;
    listDel.innerText="🙅";

    listDel.addEventListener("click", removeList);
}

function handleEvent(event) {
    event.preventDefault();
    const todoText = addTodo.value;
    addTodo.value="";
    const toDosObject={
        text: todoText,
        id: Date.now()
    }
    toDos.push(toDosObject);
    saveToDos();
    addFunction(toDosObject);
}

todoForm.addEventListener("submit", handleEvent);


function removeList(event){
    const list = event.target.parentElement;
    toDos = toDos.filter((toDos) => toDos.id !== parseInt(list.id));
    list.remove();
    saveToDos();
}


const savedToDos = localStorage.getItem("todos");

if(savedToDos !== null){
    const parseToDos = JSON.parse(savedToDos);
    toDos =parseToDos;
    parseToDos.forEach(addFunction);
}