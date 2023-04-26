// Defining global variables that will be used
var quizBody = document.getElementById("Quiz");
var resultsEl = document.getElementById("result");
var finalScoreEl = document.getElementById("finalScore");
var gameoverDiv = document.getElementById("gameover");
var questionsEl = document.getElementById("questions");
var quizTimer = document.getElementById("timer");
var startQuizButton = document.getElementById("startbtn");
var startQuizDiv = document.getElementById("startpage");
var highscoreContainer = document.getElementById("highscoreContainer");
var highscoreDiv = document.getElementById("high-scorePage");
var highscoreInputName = document.getElementById("initials");
var highscoreDisplayName = document.getElementById("highscore-initials");
var endGameBtns = document.getElementById("endGameBtn");
var submitScoreBtn = document.getElementById("submitScore");
var highscoreDisplayScore = document.getElementById("highscore-two");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");

// Questions for quiz
var quizQuestions = [{
  question: "A very useful tool for used during development and debugging for printing content to the debugger is:",
  choiceA: "Javascript",
  choiceB: "HTML",
  choiceC: "console log",
  choiceD: "for loops",
  correctAnswer: "c"},
{
  question: "What does DOM stand for?",
  choiceA: "Document Object Model",
  choiceB: "Display Object Management",
  choiceC: "Digital Ordinance Model",
  choiceD: "Desktop Oriented Mode",
  correctAnswer: "a"},
 {
  question: "What is used primarily to add styling to a web page?",
  choiceA: "HTML",
  choiceB: "CSS",
  choiceC: "Python",
  choiceD: "React.js",
  correctAnswer: "b"},
  {
  question: "What HTML tags are JavaScript code wrapped in?",
  choiceA: "&lt;div&gt;",
  choiceB: "&lt;link&gt;",
  choiceC: "&lt;head&gt;",
  choiceD: "&lt;script&gt;",
  correctAnswer: "d"},
  {
  question: "When is localStorage data cleared?",
  choiceA: "No expiration time",
  choiceB: "On page reload",
  choiceC: "On browser close",
  choiceD: "On computer restart",
  correctAnswer: "a"},  
  {
  question: "What does WWW stand for?",
  choiceA: "Web World Workings",
  choiceB: "Weak Winter Wind",
  choiceC: "World Wide Web",
  choiceD: "Wendy Wants Waffles",
  correctAnswer: "c"},
  {
  question: "What HTML attribute references an external JavaScript file?",
  choiceA: "href",
  choiceB: "src",
  choiceC: "class",
  choiceD: "index",
  correctAnswer: "b"},
];

// Additional variables to start quiz 
var finalQuestionIndex = quizQuestions.length;
var currentQuestionIndex = 0;
var timeLeft = 90;
var timerInterval;
var score = 0;
var correct;

//HOW TO GENERATE QUESTION??
function generateQuizQuestion(){
  gameoverDiv.style.display ="none";
  if (currentQuestionIndex === finalQuestionIndex){
    return showScore();
} 
var currentQuestion = quizQuestions[currentQuestionIndex];
    questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
    buttonD.innerHTML = currentQuestion.choiceD;
};

//Start Quiz function 
function startQuiz() {
  gameoverDiv.style.display = "none"
  startQuizDiv.style.display ="none"
  generateQuizQuestion();

  timerInterval = setInterval(function(){
    timeLeft--;
    quizTimer.textContent = "Time left:" + timeLeft;

    if(timeLeft === 0) {
      clearInterval(timerInterval);
      showScore();
    }
  }, 1000);
  

 quizBody.style.display="Block"; 
}

// This button starts the quiz!
startQuizButton.addEventListener("click",startQuiz);

