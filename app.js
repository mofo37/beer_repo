'use strict';
var sportsQuestions = [];

//Question Constructor Below This Line
function Question(question, right, wrongOne, wrongTwo, wrongThree, category) {
  this.question = question;
  this.right = right,
  this.wrongOne = wrongOne;
  this.wrongTwo = wrongTwo;
  this.wrongThree = wrongThree;
  this.category = category;
}

//Sports Questions Below This Line
var sportOne = new Question('When did The University of Kansas last win the NCAA National Championship?', '2008', '2012', '1994', '1956', 'sports');
sportsQuestions.push(sportOne);

var sportTwo = new Question('As of June 20, 2016, how many days has it been since the Flyers won the Stanley Cup?', '15,000 days', '25,000 days', '24 days', '3,000 days', 'sports');
sportsQuestions.push(sportTwo);

var sportThree = new Question('What record number of beers did MLB Hall of Famer Wade Boggs drink in a single day?', '107', '64', '78', '33', 'sports');
sportsQuestions.push(sportThree);

var sportFour = new Question('When was the first celebratory champagne bottle pop after a motor race?', 'The 1967 24 Hours of Le Mans', 'The 1958 Monaco Grand Prix', 'The 1987 Sonoma Motor Classic Festival', 'The 1974 Monterey Motor Classic', 'sports');
sportsQuestions.push(sportFour);

var sportFive = new Question('Who is the last non-quarterback to win NFL MVP?', 'Adrian Peterson', 'Ray Lewis', 'LaDainian Tomlinson', 'Shaun Alexander', 'sports');
sportsQuestions.push(sportFive);

//Entertainment Questions Below This Line
var entertainOne = new Question('When asked what he had done with his life to merit an invitation to the Whitehouse, to which First Lady did Miles Davis respond: “Well, I’ve changed the course of music five or six times. What have you done except f**k the president?”', 'Nancy Reagan', 'Barbara Bush', 'Jackie Kennedy', 'Betty Ford', 'entertainment');

var entertainTwo = new Question('In the film Pineapple Express, which Star Wars creature is referenced by James Franco during his captivity?', 'Rancor', 'Tauntaun', 'Jawa', 'Wookie', 'entertainment');

var entertainThree = new Question('Who wrote the poetry spoken in Beyonce\'s Lemonade film', 'Warsan Shire', 'Roxane Gay', 'Chiminanda Ngozi Adichi', 'bell hooks', 'entertainment');

var entertainFour = new Question('In what year was Wu-Tang member Raekwon’s gold-selling “Only Built for Cuban Linx” released?', '1995', '1994', '1996', '1997', 'entertainment');

var entertainFive = new Question('Which Hip-Hop artist has acted in films alongside Edward Norton, Jack Black, and Bruce Willis?', 'Mos Def', 'Ludacris', 'Queen Latifah', 'Ice Cube', 'entertainment');

// LOGIC
//Add sports questions to the DOM - for this test, we're only using sports question #1
var questionsAppend = document.getElementById('questions');
questionsAppend.textContent = sportOne.question;

//Event listeners for 'Sports' questions; can be used for all category questions
var answerDiv = document.getElementById('answers');
answerDiv.addEventListener('click', clickHandler);

//Randomizing order of possible answers NOT COMPLETE
var displayPossible = [];

for(var key in sportOne) {
  if(sportOne[key] === sportOne.right){
    displayPossible.push(sportOne[key]);
  }
  if(sportOne[key] === sportOne.wrongOne) {
    displayPossible.push(sportOne[key]);
  }
  if(sportOne[key] === sportOne.wrongTwo) {
    displayPossible.push(sportOne[key]);
  }
  if(sportOne[key] === sportOne.wrongThree) {
    displayPossible.push(sportOne[key]);
    console.log(displayPossible);
  }
}
//End Randomizing order of possible answers

var a1 = document.getElementById('answer1');
a1.textContent = sportOne.right;

var a2 = document.getElementById('answer2');
a2.textContent = sportOne.wrongOne;

var a3 = document.getElementById('answer3');
a3.textContent = sportOne.wrongTwo;

var a4 = document.getElementById('answer4');
a4.textContent = sportOne.wrongThree;

//Event handler for above listeners
function clickHandler(event) {
  var clickedAnswer = event.target.textContent;
  console.log('clickedAnswer = ', clickedAnswer);

  if (clickedAnswer === a1.textContent) {
    alert('Congrats! You got it right!');
    console.log('Item clicked: ', clickedAnswer);
  } else if (clickedAnswer === a2.textContent || clickedAnswer === a3.textContent || clickedAnswer === a4.textContent) {
    alert('Sorry, that\'s not the right answer');
    console.log('Item clicked: ', clickedAnswer);
  } else {
    alert('Please choose an answer.');
  }
}

