

let input = document.getElementById('input');
let screenText = document.getElementById('screen');
let genBtn = document.getElementById('generate');
let nextBtn = document.getElementById('next');
let answerBtn = document.getElementById('answer');
let plusBtn = document.getElementById('plusScore');
let minusBtn = document.getElementById('minusScore');
let sumScore = document.querySelector('#score');
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
    array.shift();
    let answer1 = `Answer:\n[${array}];`;

    let task2 = 'array.pop()';
    array.pop();
    let answer2 = `Answer:\n[${array}];`;

    let task3 = 'array.push("bagsh1")';
    array.push('bagsh1');
    let answer3 = `Answer:\n[${array}];`;

    slides = [
        { task: task1, answer: answer1 },
        { task: task2, answer: answer2 },
        { task: task3, answer: answer3 },
        { task: 'slide4task', answer: 'slide4answer' },
        { task: 'slide5task', answer: 'slide5answer' },
    ];
};

plusBtn.addEventListener('click', addScore)
function addScore() {
    score++;
    sumScore.value = score;
}

minusBtn.addEventListener('click', minusScore)
function minusScore() {
    score--;
    sumScore.value = score;
}


nextBtn.addEventListener('click', goNext);
function goNext() {

    if (indexSlide == slides.length) {
        screenText.innerText = 'Thank you!';
        stopTimer();
    } else {
        screenText.innerText = slides[indexSlide].task;
        nextBtn.style.display = 'none';
        answerBtn.style.display = 'block';
        plusBtn.disabled = true;
        minusBtn.disabled = true;
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