const inputString = "jrwjr{m{|";
const num = 5;
let form = document.querySelector('.form');
let btnSubmit = document.getElementById("submit");
let btnNext = document.getElementById("next_button");
let tipMsg = document.getElementById("tip");

function addNumberToCharCode(str, num) {
  let modifiedStr = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i) + num;
    modifiedStr += String.fromCharCode(charCode);
  }
  return modifiedStr;
}

btnSubmit.addEventListener("click", function (e) {
  let input = document.getElementById("input_password");
  let inputEncrypted = addNumberToCharCode(input.value, num);
  if (inputString === inputEncrypted) {
    console.log("Success");
    tipMsg.textContent = "Та амжилттай нэвтэрч чадлаа Баяр хүргэе!!!";
    btnSubmit.classList.add("hide");
    btnNext.classList.remove("hide");
    input.value = "";
  } else {
    console.log("Amjiltgui");
    alert("Амжилтгүй....\nДахин оролдоно уу!!!");
    input.value = "";
  }
});
