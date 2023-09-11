// Assigned code.
// Defining character sets for each criteria type.
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_-+=<>?';
const generateBtn = document.querySelector("#generateBtn");

var lengthInput;
var includeNumbers = document.querySelector("#includeNumbers");
var includeSymbols = document.querySelector("#includeSymbols");
var includeUppercase = document.querySelector("#includeUppercase");
var includeLowercase = document.querySelector("#includeLowercase");

// Write password to password output.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Event listener.
generateBtn.addEventListener('click', writePassword);

// Prompt function for password criteria.
function generatePassword() {

  // Prompt for password's length.
  do {
    input = prompt('Please enter your preferred password length (8 - 128 Characters):');
    lengthInput = parseInt(input);
      if (isNaN(lengthInput)) {
      alert('Invalid input! Please enter a valid number.');
      return
    } else if (lengthInput < 8 || lengthInput > 128) {
        alert('Invalid password length! Please enter a number between 8 and 128.');
        return
    }
  } while (isNaN(lengthInput) || lengthInput < 8 || lengthInput > 128);

  // Prompt for uppercase letters.
  do {
    input = prompt('Would you like to include uppercase letters? (Enter Y for "Yes", or N for "No")').toUpperCase();
    includeUppercase = input === 'Y';
      if (!includeUppercase && input !== 'N') {
      alert('Invalid input. Please enter Y for "Yes" or N for "No".'); 
      return
    }
  } while (input !== 'Y' && input !== 'N');

  // Prompt for lowercase letters.
  do {
    input = prompt('Would you like to include lowercase letters? (Enter Y for "Yes", or N for "No")').toLowerCase();
    includeLowercase = input === 'y';
      if (!includeLowercase && input !== 'n') {
      alert('Invalid input. Please enter Y for "Yes", or N for "No".');
      return
    }
  } while (input !== 'y' && input !== 'n');

  // Prompt for including numbers.
  do {
    input = prompt('Would you like to include numbers? (Enter Y for "Yes", or N for "No")').toLowerCase();
    includeNumbers = input === 'y';
      if (!includeNumbers && input !== 'n') {
      alert('Invalid input. Please enter Y for "Yes", or N for "No".');
      return
    }
  } while (input !== 'y' && input !== 'n');

  // Prompt for including symbols.
  do {
    input = prompt('Would you like to include symbols? (Enter Y for "Yes", or N for "No")').toLowerCase();
    includeSymbols = input === 'y';
      if (!includeSymbols && input !== 'n') {
      alert('Invalid input. Please enter Y for "Yes", or N for "No".');
      return
    }
  } while (input !== 'y' && input !== 'n');

  // An empty string used to store characters used for password.
    let validChars = '';
    let password = '';

  // Adding charsets to the validChars string, based on the selected password criteria.
    if (includeUppercase) {
      validChars += uppercaseChars;
    }
    if (includeLowercase) {
      validChars += lowercaseChars;
    }
    if (includeNumbers) {
      validChars += numberChars;
    }
    if (includeSymbols) {
      validChars += symbolChars;
    }

  // Ensuring at least one character type is selected.
    if (validChars === '') {
      alert('Please choose at least one character type.');
      return
    }

  // Password generates via selecting random characters from validChars.
    for (let i = 0; i < lengthInput; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      password += validChars.charAt(randomIndex);
    }
    return password;
    
}
