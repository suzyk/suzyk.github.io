const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");
const greetingDiv = document.querySelector("#greeting-div");
const weather = document.querySelector("#weather");
const mainScreen = document.querySelector("#mainScreen");
const editBtn = document.querySelector("#editBtn");
const FADEOUT_CLASSNAME = "fadeout";
const VISIBLE_CLASSNAME = "visible";
const HIDDEN_CLASSNAME = "hidden";
const LOAD_CLASSNAME = "load";
const USERNAME_KEY = "username";

function displayMainScreen(name){
    greeting.innerHTML = `${timelyGreeting}, , <span id="editableText" contenteditable="false" onkeypress="return event.keyCode != 13;">${name}</span>`; // ~ button. (Backtick) Same thing as "Hello " + userName;
    //username_tag.innerText = `${name}`;
    mainScreen.classList.remove(FADEOUT_CLASSNAME);
    mainScreen.classList.add(VISIBLE_CLASSNAME);
    getWeatherInfo();
}

function updateGreeting(greeting){
    if (savedUsername != null){
        //greeting.innerText = `${timelyGreeting}, `; // ~ button. (Backtick) Same thing as "Hello " + userName;
        //username_tag.innerText = `${savedUsername}`;
        greeting.innerHTML = `${greeting}, <span id="editableText" contenteditable="false" onkeypress="return event.keyCode != 13;">${savedUsername}</span>`;
    }
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername != null){ // call from localStorage
    displayMainScreen(savedUsername);
    greetingDiv.addEventListener("mouseenter", handleMouseOnName);
    greetingDiv.addEventListener("mouseleave", handleMouseLeaveName);
    editBtn.addEventListener("click", handleEdit);
}else {
    loginForm.classList.remove(FADEOUT_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}

function handleMouseOnName(){
    editBtn.classList.remove(HIDDEN_CLASSNAME);
}
function handleMouseLeaveName(){
    editBtn.classList.add(HIDDEN_CLASSNAME);
}
function onNameChange(){
    const username = document.querySelector("#editableText");
    username.setAttribute("contenteditable", false);
    console.log(username.innerText);
    localStorage.setItem(USERNAME_KEY, username.innerText);
}
function handleEdit(){
    const username = document.querySelector("#editableText");
    username.setAttribute("contenteditable", true);
    username.addEventListener("blur", onNameChange);
    username.focus();
}
function onLoginSubmit(event){
    event.preventDefault(); //prevents the default behavior of refreshing the browser.
    loginForm.classList.add(FADEOUT_CLASSNAME);
    
    let username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    displayMainScreen(username);
    /*
    const userName = loginInput.value;
    if (userName == "") {
        alert("Please enter your name");
    }else if (userName.length > 15) {
        alert("Name too long");
    }else{
        console.log("Welcome ", userName);
    }*/
    // you can specify all this within html form. And don't need eventListener either.
    // BUT form will refresh the whole website.
}
//loginButton.addEventListener("click", onLoginBtnClick);

