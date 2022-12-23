let roar = 7 + 8 * 9;
let meow = roar % 8;
let tweet = meow * 4;
let woof = tweet / 2 - 2;

let form = document.querySelector(".form");
let input = document.querySelector(".password");
let output = false;
let btn = document.querySelector(".btn");
input;
btn.addEventListener("click", () => {
  let inputValue = input.value;
  if (woof == inputValue) {
    output = true;
  } else {
    output = false;
  }
  if (output) {
    btn.style.display = "none";
    let nextBtn = (document.querySelector(".nextBtn").style.display =
      "inline-block");
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
    document.querySelector("#tip").innerText = "💩 ";
    let stop = setInterval(() => {
      document.querySelector("#tip").innerHTML =
        "  <p id=tip>let roar = 7 + 8 * 9; <br />let meow = roar % 8;<br />let tweet = meow * 4;<br /> let woof = tweet / 2 - 2;</p>";
      input.style.backgroundColor = "rgb(49, 214, 34)";
      input.placeholder = "Enter your password ";
      clearInterval(stop);
    }, 1000);
  }
});
