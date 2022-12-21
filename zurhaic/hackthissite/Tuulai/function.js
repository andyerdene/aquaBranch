let password = "#31d62";
let form = document.querySelector(".form");
let input = document.querySelector(".password");
let output = false;
let btn = document.querySelector(".btn");
input;
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
    nextBtn.setAttribute("href", "");
    nextBtn.setAttribute("class", "nextBtn");
    nextBtn.innerText = "Next";
    form.appendChild(nextBtn);
    document.getElementById("tip").innerHTML =
      "🎊 Баяр хүргье та амжилтай давлаа 🎉 🙌🏻!!! " +
      "<br>" +
      '<span style= " font-size: 14px;">Next дарж үргэлжлүүлнэ үү<span>';
    document.querySelector("main").style.backgroundColor =
      "rgba(0, 0, 0, 0.468);";
    document.querySelector(".tip").style.backgroundColor = "rgb(49, 214, 34)";
  } else {
    input.style.backgroundColor = "red";
    input.value = "";
    input.placeholder = "wrong!!!!";
    document.querySelector("#tip").innerText = "💩 ";
    setInterval(() => {
      document.querySelector("#tip").innerHTML =
        '<span style="color: #31d622">Ногоон.pop() </span>' + "олоорой!";
      input.style.backgroundColor = "black";
      input.placeholder = "Enter your password ";
    }, 1700);
  }
});
