/*
    /^[a-zA-Z][a-zA-Z0-9]{3,32}/gi
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
*/
let usernameRef = document.getElementById("username");
let passwordRef = document.getElementById("password");
let submitBtn = document.getElementById("submit");
let messageRef = document.getElementById("message-ref");

let isPasswordValid = () => {
  /* Password should be atleast 8 characters long. Should contain atleast 1 number, 1 special symbol , 1 lower case and 1 upper case */
  const passwordRegex = /87/gm;
  return passwordRegex.test(passwordRef.value);
};

passwordRef.addEventListener("input", () => {
  if (!isPasswordValid()) {
    messageRef.style.visibility = "hidden";
  }
});

submitBtn.addEventListener("mouseover", () => {
  if (!isPasswordValid()) {
    let containerRect = document
      .querySelector(".container")
      .getBoundingClientRect();
    let submitRect = submitBtn.getBoundingClientRect();
    let offset = submitRect.left - containerRect.left;
    console.log(offset);
    if (offset <= 100) {
      submitBtn.style.transform = "translateX(16.25em)";
    } else {
      submitBtn.style.transform = "translateX(0)";
    }
  }
});
submitBtn.addEventListener("click", () => {
  messageRef.style.visibility = "visible";
  document.querySelector("#next").style.display = "block";
});
