let input = document.getElementById("input");
let screenText = document.getElementById("screen");
let genBtn = document.getElementById("generate");
let nextBtn = document.getElementById("next");
let answerBtn = document.getElementById("answer");
let plusBtn = document.getElementById("plusScore");
let minusBtn = document.getElementById("minusScore");
let sumScore = document.querySelector("#score");
let num;
let array;
let slides;

input.addEventListener("change", func);
function func() {
  array = shuffle(input.value);
  console.log(array);
  input.disabled = true;
}

let score = 0;
let indexSlide = 0;

genBtn.addEventListener("click", genArray);
function genArray() {
  screenText.innerText = `let array = [${array}];`;
  genBtn.style.display = "none";
  nextBtn.style.display = "block";
  plusBtn.style.display = "block";
  minusBtn.style.display = "block";
  sumScore.style.display = "block";

  // tasks and answers setup
  let task1 = 'array.sort("students")';
  array.sort((a, b) => a - b);
  let answer1 = `Answer:\n[${array}];`;

  let task2 = "array.map(" + (array.length + 1) + " legs)";
  let answer2 = `Answer:\n[${array.length + 1} legs];`;

  let task3 = 'array.filter("No > 3")';
  let newFiltered = array.filter((el) => el > 3);
  let answer3 = `Answer:\n[${newFiltered}];`;

  let randindex = Math.floor(Math.random() * array.length);
  let task4 = "array.find(" + array[randindex] + ")";
  let taskRest = array.find((el) => el == array[randindex]);
  let answer4 = `Answer:\n[${taskRest}];`;

  let task5 = "array.reduce((st1, st2) => st1 + st2, 0).toSumTell();";
  let sumSount = array.reduce((partialSum, a) => partialSum + a, 0);
  let answer5 = `Answer:\n[${sumSount}];`;

  let task6 = 'array.push("random нүдний шилтэй хүн")';
  array.push("random нүдний шилтэй хүн ");
  let answer6 = `Answer:\n[${array}];`;

  slides = [
    { task: task1, answer: answer1 },
    { task: task2, answer: answer2 },
    { task: task3, answer: answer3 },
    { task: task4, answer: answer4 },
    { task: task5, answer: answer5 },
    { task: task6, answer: answer6 },
  ];
}

plusBtn.addEventListener("click", addScore);
function addScore() {
  score++;
  sumScore.value = score;
}

minusBtn.addEventListener("click", minusScore);
function minusScore() {
  score--;
  sumScore.value = score;
}

nextBtn.addEventListener("click", goNext);
function goNext() {
  if (indexSlide == slides.length) {
    screenText.innerText = "Thank you!";
    stopTimer();
  } else {
    screenText.innerText = slides[indexSlide].task;
    nextBtn.style.display = "none";
    answerBtn.style.display = "block";
    plusBtn.disabled = true;
    minusBtn.disabled = true;
  }
}

answerBtn.addEventListener("click", answerMe);
function answerMe() {
  screenText.innerText = slides[indexSlide].answer;
  nextBtn.style.display = "block";
  answerBtn.style.display = "none";
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

  let currentIndex = arr.length,
    randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // Swap it with the current element.
    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }
  return arr;
}
