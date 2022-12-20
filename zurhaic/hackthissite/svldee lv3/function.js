let password = "Leo bsin hha";
let text = document.querySelector(".text")
let body = document.querySelector("body")
let nextButton = document.getElementsByClassName("nextButton")[0]
let input = document.getElementById("input");
let button = document.getElementById("button");
let label = document.querySelector("label")
//previous button
let previousBtn = document.getElementsByClassName("previous")[0];

button.addEventListener("click", () => {
  if (input.value == password) {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `Congratulations`
    newDiv.setAttribute("class","newDiv");
    body.appendChild(newDiv);
    label.style.display = "none"
    input.style.display = "none"
    button.style.display = "none"
    text.style.display = "none"
    let trophy = document.createElement("div");
    trophy.innerHTML = "<img class='trophyImg' src='https://cdn-icons-png.flaticon.com/512/3557/3557510.png'>"
    body.appendChild(trophy);
  }
});
