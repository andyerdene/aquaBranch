let pisswordl = "Aquanauts";
let response;
let entryCount = 0;
let entryLimit = 3;
let output = false;
document.getElementsByClassName("next")[0].style.display = "none";
let madbtn = document.querySelector("#btn");

madbtn.addEventListener("click", () => {
  let mad = document.getElementById("psword");
  let inputValue = mad.value;
  if (pisswordl == inputValue) {
    output = true;
  } else {
    output = false;
    document.getElementById("snow").innerHTML = "Таахаа болиочээ❓❗❓❗";
  }
  if (output) {
    document.getElementById("snow").innerHTML = "🎉Congrats!!! You did it🎉";
    document.getElementsByClassName("next")[0].style.display = "block";
  }
});

// document.getElementById("psword").innerHTML = hoho();
