'use strict';

// store all users
var allUsers = [];

// create constructor for new user
function User(name, drink) {
  this.name = name;
  this.drink = 'images/' + drink;
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
  var radios = event.target.avatar;
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked === true) {
      var drinkSelected = (radios[i].value);
    }
  }
  var userDrink = drinkSelected;

  var newUser = new User(userName, userDrink);
  allUsers.push(newUser);
  event.target.username.value = '';

  // Store All User Data to localStorage
  function storeData() {
    var userDataJSON = JSON.stringify(allUsers);
    localStorage.setItem('userData', userDataJSON);
  }

  // Start Game and Retrieve Data
  var startButton = document.getElementById('play');
  startButton.addEventListener('click', loadGame);

  function loadGame(event) {
    event.preventDefault();
    storeData();
    window.location.replace('category.html');
  }
}
