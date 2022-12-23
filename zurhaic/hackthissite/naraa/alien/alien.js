const riddle = document.getElementById("message");

// let popMessage = document.createElement("div"),
//   nextLevel = document.createElement("button");

riddle.innerText = "bfvfy;ttjbfyufygzugmtj?e>t0";

// function getReply() {
//   return userReply.value;
// }
// userReply.addEventListener("input", getReply);

// btn.innerText = "Илгээх";
// sendButton.addEventListener("click", () => {
//   let userInput = getReply();
//   if (userInput !== "vgj") {
//     popMessage.innerText = "Таны хариулт ойлгомжгүй байна. Харь гаригийнхантай ойлголцож чадсангүй. ";
//     myForm.appendChild(popMessage);
//   } else {
//     popMessage.innerText = "Ta зөв хариултыг илгээлээ! Ta харь гаригийнхантай амжилттай ойлголцож чадлаа!";
//     myForm.appendChild(popMessage);
//     sendButton.style.display = "none";
//     nextLevel.innerHTML = "<a href ='#'>Go to next level</a> ";
//     myForm.appendChild(nextLevel);
//   }
// });

let form = document.querySelector(".form");
let input = document.querySelector(".password");
let output = false;
let btn = document.querySelector(".btn");
btn.innerText = "Илгээх";
input;
btn.addEventListener("click", () => {
  let inputValue = input.value;
  if ("vgj" == inputValue) {
    output = true;
  } else {
    output = false;
  }
  if (output) {
    btn.style.display = "none";
    document.querySelector(".nextBtn").style.display = "inline-block";
    document.getElementById("tip").innerHTML =
      "Баяр хүргье та амжилтай давлаа🥰 " +
      "<br>" +
      '<span style= " font-size: 14px;">Next дарж үргэлжлүүлнэ үү<span>';
    document.querySelector("body").style.backgroundColor =
      "rgba(0, 0, 0, 0.468);";
    document.querySelector(".tip").style.backgroundColor = "rgb(49, 214, 34)";
  } else {
    input.style.backgroundColor = "red";
    input.value = "";
    input.placeholder = "wrong!!!!";
    document.querySelector("#tip").innerText = "💩 ";
    let stop = setInterval(() => {
      document.querySelector("#tip").innerHTML =
        "  <p id=tip>Таньд харь гаригийнхнаас зурвас ирсэн байна.</p>";
      input.style.backgroundColor = "rgb(49, 214, 34)";
      input.placeholder = "Enter your password ";
      clearInterval(stop);
    }, 1000);
  }
});

// let scriptElement = document.createElement("script");
// scriptElement.type = "text/javascript";
// scriptElement.src = "alien.js";
// document.body.appendChild(scriptElement);
