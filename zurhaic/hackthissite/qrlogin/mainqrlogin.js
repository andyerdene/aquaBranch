let usrpwd = document.getElementById("userpassword"),
  submitButton = document.getElementById("submitBtn"),
  boxLogind = document.getElementById("boxLogin"),
  rightSides = document.getElementById("rightSide"),
  msg = document.getElementById("messageTitle"),
  msgDesc = document.getElementById("msgDescription"),
  hint = document.getElementById("hints");
const e = { hwz: "w-v-h-v-m-e-r-m-e" };
function checkPassword(t) {
  t === e.hwz.split("-").reverse().join("")
    ? (boxLogind.classList.add("hide"),
      rightSides.classList.remove("col-lg-6"),
      rightSides.classList.add("col-lg-12"),
      (msg.textContent = "ТА АМЖИЛТТАЙ НЭВТЭРЛЭЭ. БАЯР ХҮРГЭЕ!"),
      hint.classList.add("hide"),
      msgDesc.classList.add("hide"),
      setTimeout(() => {
        window.location.replace(
          "http://127.0.0.1:5502/zurhaic/hackthissite/index.html"
        );
      }, 5e3))
    : (boxLogind.classList.add("leftSide"),
      (msg.textContent = "ТА НЭВТЭРЧ ЧАДСАНГҮЙ...."));
}
submitButton.addEventListener("click", function (t) {
  console.log("Password: " + usrpwd.value), checkPassword(usrpwd.value);
});
