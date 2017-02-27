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

//Entertainment Questions Below This Line
var entertainOne = new Question('When asked what he had done with his life to merit an invitation to the Whitehouse, to which First Lady did Miles Davis respond: “Well, I’ve changed the course of music five or six times. What have you done except f**k the president?”', 'Nancy Reagan', 'Barbara Bush', 'Jackie Kennedy', 'Betty Ford', 'entertainment');

var entertainTwo = new Question('In the film Pineapple Express, which Star Wars creature is referenced by James Franco during his captivity?', 'Rancor', 'Tauntaun', 'Jawa', 'Wookie', 'entertainment');

var entertainThree = new Question('Who wrote the poetry spoken in Beyonce\'s Lemonade film', 'Warsan Shire', 'Roxane Gay', 'Chiminanda Ngozi Adichi', 'bell hooks', 'entertainment');

var entertainFour = new Question('In what year was Wu-Tang member Raekwon’s gold-selling “Only Built for Cuban Linx” released?', '1995', '1994', '1996', '1997', 'entertainment');

var entertainFive = new Question('Which Hip-Hop artist has acted in films alongside Edward Norton, Jack Black, and Bruce Willis?', 'Mos Def', 'Ludacris', 'Queen Latifah', 'Ice Cube', 'entertainment');

// LOGIC

function generateSports0() {
  //pull from array of objects
  var currentQ = sportsQuestions[0];

  //Add sports questions to the DOM - for this test, we're only using sports question #1
  var questionsAppend = document.getElementById('questions');
  questionsAppend.textContent = currentQ.question;

  //Event listeners for 'Sports' questions; can be used for all category questions
  var answerDiv = document.getElementById('answers');
  answerDiv.addEventListener('click', clickHandler);

  var a1 = document.getElementById('answer1');
  a1.textContent = currentQ.right;

  var a2 = document.getElementById('answer2');
  a2.textContent = currentQ.wrongOne;

  var a3 = document.getElementById('answer3');
  a3.textContent = currentQ.wrongTwo;

  var a4 = document.getElementById('answer4');
  a4.textContent = currentQ.wrongThree;
  //pause

  //Event handler for above listeners
  function clickHandler(event) {
    var clickedAnswer = event.target.textContent;
    console.log('clickedAnswer = ', clickedAnswer);

    if (clickedAnswer === a1.textContent) {
      alert('Congrats! You got it right!');
      console.log('Item clicked: ', clickedAnswer);
      generateSports1(1);
    } else if (clickedAnswer === a2.textContent || clickedAnswer === a3.textContent || clickedAnswer === a4.textContent) {
      alert('Sorry, that\'s not the right answer');
      console.log('Item clicked: ', clickedAnswer);
      generateSports1(1);
    } else {
      alert('Please choose an answer.');
    }
  }
}

function generateSports1(questionIndex) {
  //pull from array of objects
  var currentQ = sportsQuestions[questionIndex];

  //Add sports questions to the DOM - for this test, we're only using sports question #1
  var questionsAppend = document.getElementById('questions');
  questionsAppend.textContent = currentQ.question;

  //Event listeners for 'Sports' questions; can be used for all category questions
  var oldAnswerDiv = document.getElementById('answers');
  var answerParent = oldAnswerDiv.parentNode;
  answerParent.removeChild(oldAnswerDiv);
  var answerDiv = document.createElement('answers');
  answerParent.appendChild(answerDiv);

  var a1 = document.createElement('div');
  a1.id = 'answer1';
  a1.textContent = currentQ.right;
  answerDiv.appendChild(a1);

  var a2 = document.createElement('div');
  a2.id = 'answer2';
  a2.textContent = currentQ.wrongOne;
  answerDiv.appendChild(a2);

  var a3 = document.createElement('div');
  a3.id = 'answer3';
  a3.textContent = currentQ.wrongTwo;
  answerDiv.appendChild(a3);

  var a4 = document.createElement('div');
  a4.id = 'answer4';
  a4.textContent = currentQ.wrongThree;
  answerDiv.appendChild(a4);

  //Event handler for above listeners
  var clickHandler = generateClickHandler(questionIndex);
  answerDiv.addEventListener('click', clickHandler);
}

function generateClickHandler(questionIndex) {
  var a1 = document.getElementById('answer1');
  var a2 = document.getElementById('answer2');
  var a3 = document.getElementById('answer3');
  var a4 = document.getElementById('answer4');

  return function clickHandler(event) {
    var clickedAnswer = event.target.textContent;
    console.log('clickedAnswer = ', clickedAnswer);

    if (clickedAnswer === a1.textContent) {
      alert('Congrats! You got it right!');
      console.log('Item clicked: ', clickedAnswer);
      // generateSports1(questionIndex);
    } else if (clickedAnswer === a2.textContent || clickedAnswer === a3.textContent || clickedAnswer === a4.textContent) {
      alert('Sorry, that\'s not the right answer');
      console.log('Item clicked: ', clickedAnswer);
    } else {
      alert('Please choose an answer.');
    }
  };
}
generateSports0();

