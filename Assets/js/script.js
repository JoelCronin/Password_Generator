
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',]
var specially = ["(", "~", "!", "@", "#","$", "%", "^", "&", "*", "_", "-", "+", "=", "|",  ")", "{", "}", "[", "]", ":", ";" ]
var passwordLength = 0
var answer1 = 0
var answer2 = 0
var answer3 = 0
var answer4 = 0

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Main function that contains steps to create random password
function generatePassword(){

  var passwordSource = []
  var commaPassword = []
  finalPassword = []

 passwordLength = prompt("How many characters would you like your password to be")

 //Checks password meets criteria and if not prompts and then starts again
 if ( isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
  window.alert("Password must be between 8 and 128 characters");
  return generatePassword();
 } 

 //User choice for numbers
 let text1 =("Would you like numbers in your password?")
 if(confirm(text1) === true ){
   answer1 = true
 } else {
   answer1 = false
 }

 //User choice for lower case letters
 let text2 =("Would you like lower case letters in your password?")
 if(confirm(text2) === true ){
   answer2 = true
 } else {
   answer2 = false
 }

 //User choice for upper case letters
 let text3 =("Would you like upper case letters in your password?")
 if(confirm(text3) === true ){
   answer3 = true
 } else {
   answer3 = false
 }

 //User choice for special characters
 let text4 =("Would you like special characters in your password?")
 if(confirm(text4) === true ){
   answer4 = true
 } else {
   answer4 = false
 }

// If else statements below cover all 16 user input possibilities 

 // 1
if(answer1 && !answer2 && !answer3 && !answer4){
  passwordSource = passwordSource.concat(number);
  // 1 and 2
  }else if (answer1 && answer2 && !answer3 && !answer4) {
   passwordSource = passwordSource.concat(number, lowerCase);
  // 1 and 3
  }else if (answer1 && !answer2 && answer3 && !answer4) {
  passwordSource = passwordSource.concat(number, upperCase);
  // 1 and 4
  }else if (answer1 && !answer2 && !answer3 && answer4) {
   passwordSource = passwordSource.concat(number, specially);
  // 1,2 and 3
  }else if (answer1 && answer2 && answer3 && !answer4) {
  passwordSource = passwordSource.concat(number,lowerCase, upperCase);
  // 1,2,3 and 4
  } else if (answer1 && answer2 && answer3 && answer4) {
  passwordSource = passwordSource.concat(number, lowerCase, upperCase, specially);
  // 1,3 and 4
   }else if (answer1 && !answer2 && answer3 && answer4) {
  passwordSource = passwordSource.concat(number, upperCase, specially);
  // 2
  }else if (!answer1 && answer2 && !answer3 && !answer4) {
  passwordSource = passwordSource.concat(lowerCase);
  // 2 and 3
  }else if (!answer1 && answer2 && answer3 && !answer4) {
   passwordSource = passwordSource.concat(lowerCase, upperCase);
  // 2 and 4
  } else if (!answer1 && answer2 && !answer3 && answer4) {
  passwordSource = passwordSource.concat(lowerCase, specially);
  // 2,3 and 4
  } else if (!answer1 && answer2 && answer3 && answer4) {
  passwordSource = passwordSource.concat( lowerCase, upperCase, specially);
  // 3
   }else if (!answer1 && !answer2 && answer3 && !answer4) {
  passwordSource = passwordSource.concat(upperCase);
  // 3 and 4
  }else if (!answer1 && !answer2 && answer3 && answer4) {
  passwordSource = passwordSource.concat(upperCase, specially);
  // 1,2 and 4
  } else if (answer1 && answer2 && !answer3 && answer4)  {
  passwordSource = passwordSource.concat(number, lowerCase, specially)
  // 4
  } else if (!answer1 && !answer2 && !answer3 && answer4){
  passwordSource= passwordSource.concat(specially) 
  // none
  } else {
    //Ensures that at least one type of character type is selected
   window.alert("Password must have some type of characters selected")
   return generatePassword();
  }; 

  for (let i = 0; i < passwordLength; i++){
    commaPassword.push(passwordSource[Math.floor(Math.random() * passwordSource.length)]);
  };

  // commaPassword comes with commas in between each character so use '.join' to remove these  
  finalPassword = commaPassword.join('');

 //ensures it displays to the box on the webpage
  return finalPassword;
}
