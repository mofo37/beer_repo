'use strict';

// store all users
var allUsers = [];

// create constructor for new user
function User(name) {
  this.name = name;
  this.drink = 0;
  this.score = 0;
}

// Gather User Data //
// add event listener to the user submission form
var userForm = document.getElementById('user-form');
userForm.addEventListener('submit', generateUser);

// generate a new user from the event handler
function generateUser(event) {
  event.preventDefault();
  var userName = event.target.username.value;
  console.log(userName);
  // var userDrink = event.target.drink.value;

  var newUser = new User(userName);
  allUsers.push(newUser);

  event.target.username.value = '';
}

// Store and Retrieve All User Data
function storeData() {
  var userDataJSON = JSON.stringify(allUsers);
  localStorage.setItem('userData', userDataJSON);
}

function retrieveData(retrieved) {
  allUsers = JSON.parse(retrieved);
}

// Start Game and Retrieve Data
var startButton = document.getElementById('play');
startButton.addEventListener('click', loadGame);

function loadGame(event) {
  event.preventDefault();
  storeData();
  window.location.replace('play.html');
}

