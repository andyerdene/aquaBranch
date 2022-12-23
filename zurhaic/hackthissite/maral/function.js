let roar = 7 + 8 * 9;
let meow = roar % 8;
let tweet = meow * 4;
let oink = tweet / 2 - 2;
let moo = oink % 3;
let woof = moo * 7;

const input = document.querySelector(".password");
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    let inputValue = input.value;
    let length = inputValue.length;
    if (oink == length) {
        alert("🎊 Та амжилтай давлаа!!! 🎉");
    } else {
        alert("Буруу password!!! 🥲");
    }
});
