// Defining the button that will start the script

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

// Function to generate the password

function generatePassword(length, lower, upper, number, symbol) {

// Possible characters for the password using the ASCII Character Set
var lowerCode = passwordValues(97, 122);
var upperCode = passwordValues(65, 90);
var numberCode = passwordValues(48,57);
var symbolCode = passwordValues(33,47).concat(passwordValues(58,64))
                .concat(passwordValues(91,96)).concat(passwordValues(123,126));

console.log (lowerCode);
console.log (upperCode);
console.log (numberCode);
console.log (symbolCode);

// Set password length
var length = prompt ("How many character's, between 8 to 128, does your password need?");
if (length >= 8 && length <= 128) {
    length = length;
    console.log ("Password length " + length);
   
// Set lowercase, uppercase, numbers and symbol options  
var lower = confirm("Does your password require lowercase characters?");
var upper = confirm ("Does your password require uppercase characters?");
var number = confirm ("Does your password require numbers?"); 
var symbol = confirm ("Do you want to include symbols?");
  }

else {
  alert( "Please pick a number between 8 and 128!" );
  length = "";
}  

// Check the values chosen

console.log ("Password length " + length);
console.log ("Include Lowercase " + lower);
console.log ("Include Upper Case " + upper);
console.log ("Include Numbers " + number);
console.log ("include symbols " + symbol);

// Define the user's password parameters

var charCode = [];

if (lower) {
    var charCode = charCode.concat(lowerCode);
    console.log (charCode);
  }
if (upper) {
  var charCode = charCode.concat(upperCode);
  console.log (charCode);
}

if (number) {
  var charCode = charCode.concat(numberCode);
  console.log (charCode);
  }

if (symbol) {
  var charCode = charCode.concat(symbolCode);
    console.log (charCode);
  }

// Pick the random values

var characters = [];

for (var i = 0; i <= length-1; i++) {
  var code = charCode[Math.floor(Math.random() * charCode.length)];
  characters.push(String.fromCharCode(code));
  console.log (characters);
}
return characters.join('') 
}

// Function to use the ASCII Character Set to define the possible characters for the password

function passwordValues(low, high) {
  var array = []
  for (var i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}


