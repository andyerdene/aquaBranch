

let input = document.getElementById('input');
let screenText = document.getElementById('screen');
let genBtn = document.getElementById('generate');
let nextBtn = document.getElementById('next');
let answerBtn = document.getElementById('answer');
let plusBtn = document.getElementById('plusScore');
let minusBtn = document.getElementById('minusScore');
let sumScore = document.querySelector('#score');
let history = document.querySelector('.history');
let num;
let array;
let slides;

input.addEventListener('change', func);
function func() {
    array = shuffle(input.value); 
    console.log(array);
    input.disabled = true;
}


let score = 0;
let indexSlide = 0;

genBtn.addEventListener('click', genArray);
function genArray() {

    screenText.innerText = `let array = [${array}];`;
    genBtn.style.display = 'none';
    nextBtn.style.display = 'block';
    plusBtn.style.display = 'block';
    minusBtn.style.display = 'block';
    sumScore.style.display = 'block';

    // tasks and answers setup
    
    let task1 = 'array.shift()';
    let state1 = `Last state ${[...array]}`;
    array.shift();
    let answer1 = `Answer:\n[${array}];`;

    let task2 = 'array.push("bagsh1")';
    let state2 = `Last state ${[...array]}`;
    array.push('bagsh1');
    let answer2 = `Answer:\n[${array}];`;
    
    let task3 = 'array.filter((el) => el > 3).riseTwoHand()';
    let state3 = `Last state ${[...array]}`;
    let riseHand = array.filter((el) => el > 3);
    let answer3 = `Answer:\nГараа өргөсөн [${riseHand}];`;
    
    let task4 = 'array.pop()';
    let state4 = `Last state ${[...array]}`;
    array.pop();
    let answer4 = `Answer:\n[${array}];`;
  
    let task5 = "array.splice(3, 6)";
    let state5 = `Last state ${[...array]}`;
    array.splice(3, 6);
    let answer5 = `Answer:\n[${array}];`;
  
    let task6 =
      'let person=0;\n for (i = 0; i < array.length; i++) {\nif (person < array[i])\n { person = array[i] }\n}\nperson.shouts("Happy New Year!)';
      let state6 = `Last state ${[...array]}`;
      let person = 0;
    for (i = 0; i < array.length; i++) {
      if (person < array[i]) {
        person = array[i];
      }
    }
    person += ": Happy New Year!";
    let answer6 = `Answer:\n[${person}] гэж орилжээ;`;

    slides = [
        { task: task1, answer: answer1, state: state1 },
        { task: task2, answer: answer2, state: state2 },
        { task: task3, answer: answer3, state: state3 },
        { task: task4, answer: answer4, state: state4 },
        { task: task5, answer: answer5, state: state5 },
        { task: task6, answer: answer6, state: state6 },
    ];
};

plusBtn.addEventListener('click', addScore)
function addScore() {
    score ++;
    sumScore.value = score;
}

minusBtn.addEventListener('click', minusScore)
function minusScore() {
    score --;
    sumScore.value = score;
}


nextBtn.addEventListener('click', goNext);
function goNext() {

    
    nextBtn.style.display = 'none';

    if (indexSlide == slides.length) {
        screenText.innerText = 'Thank you!';
        stopTimer();
        history.innerText = '';
    } else {
        screenText.innerText = slides[indexSlide].task;
        answerBtn.style.display = 'block';
        plusBtn.disabled = true;
        minusBtn.disabled = true;
        history.innerText = slides[indexSlide].state;
    }
}

answerBtn.addEventListener('click', answerMe);
function answerMe() {
    screenText.innerText = slides[indexSlide].answer;
    nextBtn.style.display = 'block';
    answerBtn.style.display = 'none';
    plusBtn.disabled = false;
    minusBtn.disabled = false; 
    indexSlide++;
}




// Function for generate and shuffle an array 
function shuffle(num) {

    // Create a new array with input number elements
    let arr = [];
    for (i = 0; i < num; i++) {
        arr.push(i);
    }

    let currentIndex = arr.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Swap it with the current element.
        [arr[currentIndex], arr[randomIndex]] = [
            arr[randomIndex], arr[currentIndex]];
    }
    return arr;
}