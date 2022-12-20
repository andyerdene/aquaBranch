let reply = document.getElementById("reply");
let btn = document.getElementById("submit");

reply.addEventListener("input", value);

btn.addEventListener("click", () => {
    console.log(value())
});

function value(){
    return reply.value;
}


// btn.addEventListener("click",()=> {
//     let msg = document.createElement("div");

//     if (answer == "ak") {
//         console.log(value());
//         msg.innerText = "Yeah!";
//     } else {
//         msg.innerText = "Wrong";
//     }
//     document.querySelector("form").appendChild(msg);
// }
// )
