const form = document.querySelector("form"),
  userReply = document.getElementById("reply"),
  sendButton = document.getElementById("send"),
  riddle = document.getElementById("message");

let popMessage = document.createElement("div"),
  nextLevel = document.createElement("button");

riddle.innerText = "bfvfy;ttjbfyufygzugmtj?e>t0";

function getReply() {
  return userReply.value;
}
userReply.addEventListener("input", getReply);

sendButton.innerText = "Илгээх";
sendButton.addEventListener("click", () => {
  let userInput = getReply();
  if (userInput !== "vgj") {
    popMessage.innerText = "Таны хариулт ойлгомжгүй байна. Харь гаригийнхантай ойлголцож чадсангүй. ";
    form.appendChild(popMessage);
  } else {
    popMessage.innerText = "Ta зөв хариултыг илгээлээ! Ta харь гаригийнхантай амжилттай ойлголцож чадлаа!";
    form.appendChild(popMessage);
    sendButton.style.display = "none";
    nextLevel.innerHTML = "<a href ='#'>Go to next level</a> ";
    form.appendChild(nextLevel);
  }
});
