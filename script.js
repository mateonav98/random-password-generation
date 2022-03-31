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

function generatePassword(){
  // THEN I am presented with a series of prompts for password criteria
    //issue prompts to user
      //prompted for the length
        //at least 8 characters and no more than 128 characters
      //asked for character type
        // confirm whether or not to include lowercase, 
        // uppercase, 
        // numeric, 
        // and/or special characters
      //Input should be validated 
        //at least one character type should be selected
      //a password is generated that matches the selected criteria
        //How?
};


function issuePrompts() {
  prompt("This is an alert."); 
}

function issuePrompts(){
   var characterCount = prompt("how many characters would you like your password to contain?")
   //asked for character type???
}

// function characterLengthPrompt(){
//   //at least 8 characters and no more than 128 characters???
// }
// function confirmLowercase(){
//   // confirm whether or not to include lowercase, ???
// }


// function valideateUserChoice(){
//   //make sure that at least one character type should be selected
// }