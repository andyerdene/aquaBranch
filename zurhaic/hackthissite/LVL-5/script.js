let pisswordl = "Aquanauts"
let response;
let entryCount = 0;
let entryLimit = 3;
let output = false;


let madbtn = document.querySelector("#btn");

madbtn.addEventListener("click", () => {
    let mad = document.getElementById("psword");
    let inputValue = mad.value;
    if (pisswordl == inputValue) {
        output = true;
    }else {
        output =  false;
        document.getElementById("snow").innerHTML = "Таахаа болиочээ❓❗❓❗"
    }
    if(output){
        document.getElementById("snow").innerHTML = "🎉Congrats!!! You did it🎉"
        document.getElementById("snow").innerHTML = "🎉Congrats!!! You did it🎉"
    }
})

// document.getElementById("psword").innerHTML = hoho();

