var readlineSync = require('readline-sync');
const chalk = require('chalk');
var userName = readlineSync.question("What's your Name? ")
console.log(chalk.keyword('orange')("Welcome to " + userName + " DO YOU KNOW VISHESH"))
  console.log("-------------")


var score = 0;
function quiz(question,answer) {
  var userAnswer = readlineSync.question(question);
if (userAnswer.toLocaleUpperCase() === answer.toLocaleUpperCase()) {
    console.log("right!");
    score = score + 1;
  }
  else {
    console.log("wrong!");
    score = score - 1;
  }
  console.log("Your current score: ", score);
  console.log("-------------")
}
var questions = [
  {
    question: "When is my birthday month? ",
    answer: "August"
  }, {
    question: "What is my pet? ",
    answer: "Dog"
  }, {
    question: "Where do i live? ",
    answer: "Noida"
  }];
for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];

 quiz(currentQuestion.question,currentQuestion.answer)
}
console.log("total score is: ", score);