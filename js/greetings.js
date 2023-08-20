// const loginForm= document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input"); // form값에는 input 요소가 기본으로 있음
const greeting = document.querySelector("#greeting");
//const loginButton = document.querySelector("#login-form button"); // 두 방법은 같음

const HIDDEN_CLASSNAME = "hidden"; // 일반적으로 string만 포함된 변수는 대문자만 저장함
const USERNAME_KEY = "username";
function LoginSubmit(event){
    event.preventDefault(); // submit해도 브라우저가 새로고침하는걸 막음
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); // key와 value를 지정해줌
    // greeting.innerText = "Hello " + username;
    paintGreetings(username);
    //const username = loginInput.value;
    //console.log(username);
    // if (username === ""){
    //     alert("Please Write your name");
    // } else if(username.length > 15) {
    //     alert("Your name is too long");
    // }
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

//loginButton.addEventListener("click",LoginClick);
// 브라우저는 함수를 실행할 때 기본적인 정보를 제공하면서 실행함. eventlistener의 첫번째 argument는 항상 막 벌어진 일들에 대한 정보로 이루어짐. 
// 위의 event 처럼 argument 공간을 지정하면 js는 알아서 방금 일어난 정보들을 event에 채워 넣음

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null){ // 유저명이 저장되지 않은 상태일 떄
    loginForm.classList.remove(HIDDEN_CLASSNAME); // 히든을 지워서 입력창을 보이게 함
    loginForm.addEventListener("submit", LoginSubmit);
} else {
    paintGreetings(savedUsername);
}