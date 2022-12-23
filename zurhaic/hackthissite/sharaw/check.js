let form = document.querySelector(".form");
let input = document.querySelector(".password");
let output = false;
let btn = document.querySelector(".btn");
input;
let text = document.querySelector(".text").innerText;
let bigwords = "QWERTYUIOPLKJHGFDSAZXCVBNM";
let result = "";
for (i = 0; i < text.length; i++) {
  for (j = 0; j < bigwords.length; j++) {
    if (text[i] == bigwords[j]) {
      result = result + text[i] + "";
    }
  }
}
let password = result;
btn.addEventListener("click", () => {
  let inputValue = input.value;
  if (password == inputValue) {
    output = true;
  } else {
    output = false;
  }
  if (output) {
    btn.style.display = "none";
    let nextBtn = document.createElement("a");
    nextBtn.setAttribute("href", "../level-jamie/index.html");
    nextBtn.setAttribute("class", "nextBtn");
    nextBtn.innerText = "Next";
    form.appendChild(nextBtn);
    document.getElementById("tip").innerHTML =
      "Баяр хүргье та амжилтай давлаа🥰 " +
      "<br>" +
      '<span style= " font-size: 14px;">Next дарж үргэлжлүүлнэ үү<span>';
    document.querySelector("main").style.backgroundColor =
      "rgba(0, 0, 0, 0.468);";
    document.querySelector(".tip").style.backgroundColor = "rgb(49, 214, 34)";
  } else {
    input.style.backgroundColor = "red";
    input.value = "";
    input.placeholder = "wrong!!!!";
    document.querySelector(".tip").style.backgroundColor = "red";
    document.querySelector("#tip").innerText = "you are noooob🫠";
    let stop = setInterval(() => {
      document.querySelector(".tip").style.backgroundColor =
        "rgba(209, 209, 209, 0.812)";
      document.querySelector("#tip").innerHTML =
        "  <p id=tip>Том мөөг түүцгээе.</p>";
      input.style.backgroundColor = "rgb(49, 214, 34)";
      input.placeholder = "Enter your password ";
      clearInterval(stop);
    }, 1000);
  }
});

console.log(result);
