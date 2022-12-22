

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


    let task1 = 'array.filter(el => el > 3).standOnOneLeg()';
    let state1 = `Last state ${[...array]}`;
    let riseLeg = array.filter(el => el > 3);
    let answer1 = `Answer:\n[${riseLeg}] нэг хөл дээрээ зогсов;`;

    let task2 = 'array.sort((a, b) => b - a)';
    let state2 = `Last state ${[...array]}`;
    array.sort((a, b) => b - a);
    let answer2 = `Answer:\n[${array}];`;

    let task3 = 'array.map(el => el % 2 !== 0).toSitdown();';
    let state3 = `Last state ${[...array]}`;
    let newFiltered = array.map(element => element % 2 !== 0 ? 'sit' : element);
    let answer3 = `Answer:\n[${newFiltered}];`;
    
    let task4 = 'array.slice(' + parseInt(array.length / 2) + ')';
    let state4 = `Last state ${[...array]}`;
    array = array.slice(parseInt(array.length / 2));
    let answer4 = `Answer:\n[${array}];`;
    
    let randindex = Math.floor(Math.random() * array.length);
    let task5 = 'array.find(' + array[randindex] + ').drinksCola()';
    let state5 = `Last state ${[...array]}`;
    let popToStudents = array.find(el => el == array[randindex]);
    let answer5 = `Answer:\n[${popToStudents}] drinks cola;`;

    let task6 = 'array.join("hands")';
    let state6 = `Last state ${[...array]}`;
    array = array.join('-hands-');
    let answer6 = `Answer:\n[${array}];`;
        
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