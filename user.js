'use strict';

// store all users
allUsers = [];

// create constructor for new user
function User(name, drink, score) {
  this.name = name;
  this.drink = drink;
  this.score = score;
}

// add event listener to the user submission form
userForm = document.getElementById('user-form');
userForm.addEventListener('submit', generateUser);

// generate a new user from the event handler
function generateUser(event) {
  var userName = event.target.username.value;
  var userEmail = event.target.email.value;
  var userDrink = event.target.drink.value;

  var newUser = new User(userName, userEmail, userDrink);
  allUsers.push(newUser);
}

