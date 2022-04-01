// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numericalCharacters = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!","@","#","$","%","^","&","*","+","_","=","-",";"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var characterCount = prompt("how many characters would you like your password to contain?");
  if(characterCount<8 || characterCount>128 || !characterCount) {
    alert("Password must be between 8-128 characters. Please try again");
    return
    }
  var lowercaseOption = confirm("would you like your password to include lowercase letters?");
  var uppercaseOption = confirm("would you like your password to include uppercase letters?");
  var numericalOption = confirm("would you like your password to include numbers?");
  var specialOption = confirm("would you like your password to include special characters (!, @, #, $, ect) ?");
  if(lowercaseOption===false && uppercaseOption===false && numericalOption===false && specialOption===false) {
    alert("No criteria specified. Please try again.");
    };
var store = {
  lowercaseOption: lowercaseOption,
  

}

return store;

  

  

};

function random () {
  var index = Math.floor(Math.random()*characterCount.length);
  var randomize = allCharacters[index];
  return randomize;
}

function buildaPassword() {
var choices = generatePassword();
var final = [];
var possibleSet = [];
var confirmedSet = [];

if(choices.lowercaseOption) {
  possibleSet = possibleSet.concat(lowercaseCharacters);
  confirmedSet.push(random(lowercaseCharacters));
}

if(choices.uppercaseOption) {
  possibleSet = possibleSet.concat(uppercaseCharacters);
  confirmedSet.push(random(uppercaseCharacters));
}

if(choices.uppercaseOption) {
  possibleSet = possibleSet.concat(uppercaseCharacters);
  confirmedSet.push(random(uppercaseCharacters));
}

if(choices.uppercaseOption) {
  possibleSet = possibleSet.concat(uppercaseCharacters);
  confirmedSet.push(random(uppercaseCharacters));
}

for(var i=0; i<choices.characterCount; i++) {
 var possibleSet = random(possibleSet);
 final.push(possibleSet)
}

for ( var i = 0; i < confirmedSet.characterCount; i++) {
  final[i] = confirmedSet[i]
}
return final.join('');


}