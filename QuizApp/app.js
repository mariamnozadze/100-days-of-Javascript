// CREATE A QUIZ CLASS
class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
  }

  getQuestionIndex() {
    return this.questions[this.questionIndex];
  }

  guess(answer) {
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
      this.score++;
    }
    this.questionIndex++;
  }

  isEnded() {
    return this.questionIndex === this.questions.length;
  }
}

// Create a question Class
class Question {
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }

  isCorrectAnswer(choice) {
    return this.answer === choice;
  }
}

// NOW DISPLAY THE QUESTIONS
function displayQuestion() {
  if (quiz.isEnded()) {
    showScores();
  } else {
    // show question
    let questionElement = document.getElementById("question");
    questionElement.innerHTML = quiz.getQuestionIndex().text;

    // show options
    let choices = quiz.getQuestionIndex().choices;
    for (let i = 0; i < choices.length; i++) {
      let choiceElement = document.getElementById("choice" + i);
      choiceElement.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }

    showProgress();
  }
}

// GUESS ANSWER
function guess(id, guess) {
  let button = document.getElementById(id);
  button.onclick = function () {
    quiz.guess(guess);
    displayQuestion();
  };
}

// SHOW QUIZ PROGRESS
function showProgress() {
  let currentQuestionNumber = quiz.questionIndex + 1;
  let ProgressElement = document.getElementById("progress");
  ProgressElement.innerHTML = `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
}

// SHOW SCORES
function showScores() {
  let quizEndHTML = `
    <h1>Quiz Completed</h1>
    <h2 id='score'> Your scored: ${quiz.score} of ${quiz.questions.length}</h2>
    <div class="quiz-repeat">
        <a href="index.html">Take Quiz Again</a>
    </div>
    `;
  let quizElement = document.getElementById("quiz");
  quizElement.innerHTML = quizEndHTML;
}

// create questions here
let questions = [
  new Question(
    "Which of the following is not a primitive data type in JavaScript?",
    ["Number", "String", "Boolean", "Object"],
    "Object"
  ),
  new Question(
    "What does the “typeof” operator do in JavaScript?",
    [
      "Returns the data type of a variable",
      "Checks if a variable is defined",
      "Assigns a value to a variable",
      "Concatenates two strings",
    ],
    "Returns the data type of a variable"
  ),
  new Question(
    "Which is a JavaScript Framework?",
    ["React", "Laravel", "Django", "Sass"],
    "React"
  ),
  new Question(
    "Which of the following is not a comparison operator in JavaScript?",
    ["==", "===", "!=", "=<"],
    "=<"
  ),
  new Question(
    "What does the “NaN” value represent in JavaScript?",
    ["Not a number", "Null value", "Undefined value", "Boolean value"],
    "Not a number"
  ),
  new Question(
    "What does the “this” keyword refer to in JavaScript?",
    [
      " The current function",
      " The global object",
      "The object that the function belongs to",
      "The parent object of the current objec",
    ],
    "The object that the function belongs to"
  ),
  new Question(
    "What does the “forEach” method do in JavaScript?",
    [
      "Adds a new element to the end of an array",
      "Removes an element from the beginning of an array",
      "Executes a function once for each element in an array",
      "Reverses the order of the elements in an array",
    ],
    "Executes a function once for each element in an array"
  ),
];

// INITIALIZE quiz
let quiz = new Quiz(questions);

// display questions
displayQuestion();

// Add A CountDown for the Quiz
let time = 10;
let quizTimeInMinutes = time * 60 * 60;
let quizTime = quizTimeInMinutes / 60;

let counting = document.getElementById("count-down");

function startCountdown() {
  let quizTimer = setInterval(function () {
    if (quizTime <= 0) {
      clearInterval(quizTimer);
      showScores();
    } else {
      quizTime--;
      let sec = Math.floor(quizTime % 60);
      let min = Math.floor(quizTime / 60) % 60;
      counting.innerHTML = `TIME: ${min} : ${sec}`;
    }
  }, 1000);
}

startCountdown();
