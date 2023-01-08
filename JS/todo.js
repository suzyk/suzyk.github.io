const todoForm = document.getElementById("todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = todoForm.querySelector("input");  // OR (#todo-form input)
let toDos = [];
const TODOS_KEYS = "todos";
const LINE_THROUGH_CLASSNAME = "line-through";

function saveTodos(){
    localStorage.setItem(TODOS_KEYS, JSON.stringify(toDos));
}
function handleSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    
    todoInput.value = "";
    const todoObj = {item : newTodo, id: Date.now(), completed: false};
    toDos.push(todoObj);
    
    paintTodo(todoObj);
    saveTodos();
}

function handleDeleteItem(event){
    const li = event.currentTarget.parentNode; //event.target.parentNode;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // these ids are string. update toDo array/
    saveTodos();    // we need to update local storage every time we update the array.
}

function handelCheckboxClick(event){
    const todoLabel = event.target.nextSibling;
    if (this.checked) {
        todoLabel.classList.add(LINE_THROUGH_CLASSNAME);
    }else{
        todoLabel.classList.remove(LINE_THROUGH_CLASSNAME);
    }
    const li = event.currentTarget.parentNode; 
    const todoIndex = toDos.findIndex((todo) => todo.id == li.id);
    toDos[todoIndex].completed = !toDos[todoIndex].completed;

    saveTodos();
}

function paintTodo(todoObj){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");
    const btnIcon = document.createElement("i");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.id = "checkBox";
    btnIcon.classList.add("fa-regular", "fa-trash-can");
    deleteBtn.appendChild(btnIcon);
    deleteBtn.addEventListener("click", handleDeleteItem);
    if (todoObj.completed) {
        span.classList.add(LINE_THROUGH_CLASSNAME);
        checkBox.checked = true;
    }
    li.id = todoObj.id;
    li.classList.add("todoItem");
    li.appendChild(checkBox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    checkBox.addEventListener("change", handelCheckboxClick);

    span.innerText = todoObj.item;
}
todoForm.addEventListener("submit", handleSubmit);

const savedTodos = localStorage.getItem(TODOS_KEYS); 
if (savedTodos) { // could be null.
    const parsedTodos = JSON.parse(savedTodos);// parse turns string to javascript.
    toDos = parsedTodos;
    parsedTodos.forEach(item => {
        paintTodo(item);
    });
}
