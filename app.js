'use strict';
sportsQuestions = [];

// create object 'Question' for all trivia questions
function Question(question, right, wrongOne, wrongTwo, wrongThree, category) {
  this.question = question;
  this.right = right,
  this.wrongOne = wrongOne;
  this.wrongTwo = wrongTwo;
  this.wrongThree = wrongThree;
  this.category = category;
}

// 'Sports' questions, push to array
var sportOne = new Question('When did Kansas University last win the NCAA National Championship?', '2008', '2012', '1994', '1956', 'sports');
sportsQuestions.push(sportOne);

var sportTwo = new Question('As of June 20, 2016, how many days has it been since the Flyers won the Stanley Cup?', '15,000 days', '25,000 days', '24 days', '3,000 days', 'sports');
sportsQuestions.push(sportTwo);

var sportThree = new Question('What record number of beers did MLB Hall of Famer Wade Boggs drink in a single day?', '107', '64', '78', '33', 'sports');
sportsQuestions.push(sportThree);

var sportFour = new Question('When was the first celebratory champagne bottle pop after a motor race?', 'The 1967 24 Hours of Le Mans', 'The 1958 Monaco Grand Prix', 'The 1987 Sonoma Motor Classic Festival', 'The 1974 Monterey Motor Classic', 'sports');
sportsQuestions.push(sportFour);

var sportFive = new Question('Who is the last non-quarterback to win NFL MVP?', 'Adrian Peterson', 'Ray Lewis', 'LaDainian Tomlinson', 'Shaun Alexander', 'sports');
sportsQuestions.push(sportFive);


//Add sports questions to the DOM - for this test, we're only using sports question #1
var questionsAppend = document.getElementById('questions');
questionsAppend.textContent = sportOne.question;

var a1 = document.getElementById('answer1');
a1.textContent = sportOne.right;

var a2 = document.getElementById('answer2');
a2.textContent = sportOne.wrongOne;

var a3 = document.getElementById('answer3');
a3.textContent = sportOne.wrongTwo;

var a4 = document.getElementById('answer4');
a4.textContent = sportOne.wrongThree;

//Event listeners for 'Sports' questions; can be used for all category questions
var answerDiv = document.getElementById('');
answerDiv.addEventListener('click', clickHandler);

var clickOne = document.getElementById('answer1');
var clickTwo = document.getElementById('answer2');
var clickThree = document.getElementById('answer3');
var clickFour = document.getElementById('answer4');

//Event handler for above listeners
function clickHandler(event) {
  var clickedAnswer = event.target.getAttribute('src');
  console.log('clickedAnswer = ', clickedAnswer);

  if (clickedAnswer === clickOne) {
    alert('Congrats! You got it right!');
    console.log('Item clicked: ', clickedAnswer);
  } else if (clickedAnswer === clickTwo || clickedAnswer === clickThree || clickedAnswer === clickFour) {
    alert('Sorry, that\'s not the right answer');
    console.log('Item clicked: ', clickedAnswer);
  } else {
    alert('Please choose an answer.');
  }
}

