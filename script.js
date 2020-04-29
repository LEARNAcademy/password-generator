// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
const writePassword = () => {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
