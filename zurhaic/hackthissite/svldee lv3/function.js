let password = "1e7bace";
let input = document.getElementById("input");
let button = document.getElementById("button");
button.addEventListener("click", () => {
  if (input.value == password) {
    alert("cong");
  }
});
