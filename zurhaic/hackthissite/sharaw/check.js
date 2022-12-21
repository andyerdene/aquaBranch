let text = document.querySelector(".text").innerText;
let bigwords = "QWERTYUIOPLKJHGFDSAZXCVBNM";
let output=""
 for(i=0;i<text.length;i++){
    for(j=0;j<bigwords.length;j++){
        if(text[i]==bigwords[j]){
            output= output+text[i]+"";
        }
    }
 }

 console.log(output)