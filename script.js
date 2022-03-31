// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercaseCharacter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var uppercaseCharacter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numericalCharacter = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacter = ["!","@","#","$","%","^","&","*","+","_","=","-",";"];
var allCharacters = lowercaseCharacter.concat(uppercaseCharacter, numericalCharacter, specialCharacter)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  var characterCount;
   prompt("how many characters would you like your password to contain?");
   if(characterCount<8 || characterCount>128 || !characterCount) {
    alert("Password must be between 8-128 characters. Please try again");
    };
  var lowercaseOption;
    confirm("would you like your password to include lowercase letters?");
  var uppercaseOption;
    confirm("would you like your password to include uppercase letters?");
  var numericalOption;
    confirm("would you like your password to include numbers?");
  var specialOption;
    confirm("would you like your password to include special characters (!, @, #, $, ect) ?");
  if(lowercaseOption===false && uppercaseOption===false && numericalOption===false && specialCharacter===false) {
    alert("No criteria specified. Please try again.");
    };
  };





