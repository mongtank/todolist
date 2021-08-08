const inputName = document.querySelector("#login input:first-child");
const logInForm = document.querySelector("#login");
const welcome = document.querySelector("#welcome");

const CLASS_HIDDEN = "display__none";
const USER_NAME= "username";


function logInFunction(event) {
    event.preventDefault();
    const userName = inputName.value;
    localStorage.setItem(USER_NAME,userName);
    welcome.innerText = `Welcome ${userName}`;
    welcome.classList.remove(CLASS_HIDDEN);
    logInForm.classList.add(CLASS_HIDDEN);
}


const savedUserName = localStorage.getItem(USER_NAME);

if(savedUserName === null){
    logInForm.classList.remove(CLASS_HIDDEN);
    logInForm.addEventListener("submit", logInFunction);
} else {
    welcome.innerText = `Welcome ${savedUserName}`;
    welcome.classList.remove(CLASS_HIDDEN);
}