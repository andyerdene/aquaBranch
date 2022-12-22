window.addEventListener("Ready", event => {
    const audio = document.querySelector("audio");
    audio.volume = 0.5;
    audio.play();
  });

function logIn() {
    checkUsername();
    checkPassword();
   
    if (checkUsername() && checkPassword() == true) {
        nextButton();
    } if (checkUsername() == false) {
        errorMsg();
    } if (checkPassword() == false) {
        console.log("incorrect password");
    } if (checkUsername() == true) {
        successMsg();
    }
}


function checkPassword() {
    let password = "Boiledpotato";
    userInput = document.getElementById("pwd").value;
    if(password == userInput) {
        return true;
    } else {
        pwdInput = document.getElementById('pwd');
        pwdInput.style.borderColor = "red";
        return false;
    }
}

function nextButton() {
    let btn = document.createElement("button");
    btn.innerHTML = "Click Me";
    document.getElementById("nextBtn").appendChild(btn);
}

function checkUsername() {
    let username = "Jeff";
    userNameInput = document.getElementById("userName").value;
    if(username == userNameInput) {
        pwdInput = document.getElementById('userName');
        pwdInput.style.borderColor = "green";
        return true;
    } else {
        pwdInput = document.getElementById('userName');
        pwdInput.style.borderColor = "red";
        console.log("incorrect");
        return false;
    }
}


let count = 0;
function addHint() {
   
    if (count < 1) {
        let hint = document.createElement("P");
    hint.innerHTML = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    document.getElementById("hint").appendChild(hint);
    count = count + 1;
    } else if (count == 1) {
        let hint = document.createElement("P");
    hint.innerHTML = "https://www.youtube.com/watch?v=AfIOBLr1NDU)";
    document.getElementById("hint").appendChild(hint);
    count += 1;
    } else if (count == 2) {
        let hint = document.createElement("P");
        hint.innerHTML = "https://www.youtube.com/watch?v=oI1ZN2H-gzA, 00:07-00:48 second";
        document.getElementById("hint").appendChild(hint);
    }
    return
}


function errorMsg() {
    setTimeout(() => {
        let hint2 = document.createElement("P");
    hint2.innerHTML = "Хэн бэ чи?"
    document.getElementById("hint-main").appendChild(hint2);
    }, 100);
}

function successMsg() {
    setTimeout(() => {
        let hint2 = document.createElement("P");
    hint2.innerHTML = "Ойрхон байндаа :))"
    document.getElementById("hint-main").appendChild(hint2);
    }, 100);
}

function openNextPage(){
    window.open("https://www.youtube.com/watch?v=rqg4hLOjCww");
    window.open("https://www.youtube.com/watch?v=wsLlgcagkUc&list=RDMM&index=2")
}


