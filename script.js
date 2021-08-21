// Assignment code here
function generatePassword() {

  var specialChar = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

  var numeriSet = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  var lowerCaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var upperCaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  var selectedArray = [];

  var passwordLength = getPasswordLength();

  var charSelected = false;
  //loop to make sure at least one character type is selected
  while (charSelected == false) {
    var lowerCase = choice("lowercase");
    var upperCase = choice("uppercase");
    var numericCharacters = choice("numeric");
    var specialCharacters = choice("special");
    if ((lowerCase) || (upperCase) || (numericCharacters) || (specialCharacters)) {
      charSelected = true;
    } else {
      window.alert("You must select at least one character type.")
    }
  }

  //appends usersChoice to the blank array I created.
  if (lowerCase) {
    selectedArray = selectedArray.concat(lowerCaseChar);
  }
  if (upperCase) {
    selectedArray = selectedArray.concat(upperCaseChar);
  }
  if (numericCharacters) {
    selectedArray = selectedArray.concat(numeriSet);
  }
  if (specialCharacters) {
    selectedArray = selectedArray.concat(specialChar);
  }

  var passwordString = "";
  // loop to select random elements from array

  for (var i = 0; i < passwordLength; i++) {
    passwordString += selectedArray[Math.floor(Math.random() * (selectedArray.length))];
  }

  return passwordString;
}

function getPasswordLength() {
  var userChoice = 0;
  while ((userChoice < 8) || (userChoice > 128)) {
    userChoice = parseInt(window.prompt("Choose a length between 8 and 128: "));

    // Checking to see if the user entered a number and not a letter.
    if (isNaN(userChoice)) {

      userChoice = 0;
    }
  }

  return userChoice;
}


function choice(currentChoice) {
  var userChoice = "a",
    messagePrompt = "";
  var messagePrompt = ('Would you like '.concat(currentChoice));
  messagePrompt = messagePrompt.concat(' characters (y/n)?');


  while (userChoice = "a") {
    userChoice = (window.prompt(messagePrompt));
    if (userChoice == "y") {
      return true;
    } else if (userChoice == "n") {
      return false;
    }
  }
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);