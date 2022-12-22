let myForm = document.querySelector("form"),
    reply = document.getElementById("reply"), 
    btn = document.getElementById("sent");

let myMsg = document.createElement("div"),
    nextButton = document.createElement("button");

function value() {
    return reply.value;
}

reply.addEventListener("input", value);

btn.innerText = "Илгээх";

btn.addEventListener("click", () => {
    let userInput = value();
    if (userInput !== 'vgj') {
        myMsg.innerText = "Таны хариулт ойлгомжгүй байна. Харь гаригийнхантай ойлголцож чадсангүй. ";
        myForm.appendChild(myMsg);
    } else {
        myMsg.innerText = "Ta зөв хариултыг илгээлээ! Ta харь гаригийнхантай амжилттай ойлголцож чадлаа!";
        myForm.appendChild(myMsg);
        nextButton.innerHTML = "<a href ='#'>Go to next level</a> ";
        myForm.appendChild(nextButton);
    }
});


