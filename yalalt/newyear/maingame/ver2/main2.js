

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
    let task1 = 'array.pop();';
    array.pop();
    let answer1 = `Answer:\n[${array}];`;
    
    let task2 = 'array.filter(el => el % 2 !== 0).toLeftSide();';
    let evenAnswer = array.filter(el => el % 2 !== 0);
    let answer2 = `Answer:\n[${evenAnswer}];`;
    
    let task3 = 'array.map(el => el % 2 === 0).toSitdown();';
    let newFiltered = array.map(element => element % 2 === 0 ? 'sit' : element);
    let answer3 = `Answer:\n[${newFiltered}];`;
    
    let task4 = 'array.slice(' + parseInt(array.length / 2) + ')';
    let taskRest = array.slice(parseInt(array.length / 2));
    let answer4 = `Answer:\n[${taskRest}];`;
    
    let task5 = 'array.reverse("students")';
    array.reverse();
    let answer5 = `Answer:\n[${array}];`;
        
    slides = [
        { task: task1, answer: answer1 },
        { task: task2, answer: answer2 },
        { task: task3, answer: answer3 },
        { task: task4, answer: answer4 },
        { task: task5, answer: answer5 },
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
    for (let i = 0; i < num; i++) {
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