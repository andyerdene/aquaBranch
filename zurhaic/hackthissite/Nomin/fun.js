let foo = 5 + 6 * 7;
let bar = foo % 8;
let moo = bar * 2;
let rar = moo / 3;
function check(x) {
  if (x.length == moo) {
  }
  return moo;
}
console.log(moo);


let form = document.getElementById("form");

let output = false;
let btn = document.getElementById("btn");

let input1 = document.getElementById("password");
btn.addEventListener("click", () => {
  let input = document.getElementById("password").value;
  console.log('input',input)
  if (input.length == moo) {
    console.log('true')
    output = true;
  } else {
    console.log('fsldr')
    output = false;
  }
  if (output) {
    btn.style.display = "none";
    let nextBtn = document.createElement("a");
    nextBtn.setAttribute("href", "../svldee lv3/level-three.html");
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
    input1.style.backgroundColor = "red";
    input1.value = "";
    input1.placeholder = "wrong!!!!";
    document.querySelector("#tip").innerText = "💩 ";
    setInterval(() => {
      document.querySelector("#tip").innerHTML = `Password hint : </br> 
      let foo = 5 + 6 * 7  </br>
      let bar = foo % 8 </br>
      let moo = bar * 2 </br>
      let rar = moo / 3 </br>
      function check(x) </br>
      { </br>
              if (x.length == moo) </br>
              { </br>
                              alert("win!"); </br>
                              window.location += "password="+x; </br>
              } else { </br>
                              alert("fail D:"); </br>
         } </br>
      } </br>`;
      input1.style.backgroundColor = "";
      input1.placeholder = "Enter your password ";
    }, 1700);
  }
});
