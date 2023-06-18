// Assignment code here

//function to generate password
function generatePassword() {
//variables
var criteria = [];
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz" ;
var number = "0123456789";
var symbol= "!@#$%^&*()_+~`|}{[]:;?><,./-=";
var randPassword = ""; 

//variable for user select password length, and if not correct returns to original prompt
var passLength = prompt("Choose password length between 8 and 128 characters .")
  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert("Invalid entry - Please enter a number between 8 and 128");
    return generatePassword();
}
//variables for user to choose criteria
var addUpper = confirm("Would you like UpperCase letters?");
if (addUpper === true) {
  criteria.push(upper);
}

var addLower = confirm("Would you like to include LowerCase letters?");
if (addLower === true) {
  criteria.push(lower);
}

var addNumber = confirm("would you like to include Numbers?");
if (addNumber === true) {
  criteria.push(number);
}

var addSymbol = confirm("Would you like to include Symbols?");
if (addSymbol === true) {
  criteria.push(symbol);
}
//An alert if user did not choose any criteria and returns to beginning prompt
if( addUpper == false && addLower == false && addNumber == false && addSymbol == false) {
  alert("invalid entry - Please choose at least one criteria.")
  return generatePassword();
}
//Method to generate random characters for password
for (var i = 0; i < passLength; i++) {
    var randomCriteria = criteria[Math.floor(Math.random() * criteria.length)]; 
    var randomCharacter = randomCriteria[Math.floor(Math.random() * randomCriteria.length)];
    randPassword += randomCharacter;
  }

  return randPassword;
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