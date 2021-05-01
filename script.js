// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseArr = ['a', 'b', 'c']
var uppercaseArr = ['A', 'B', 'C']
var specialCarArr = ['@', '%', '#']
var number =['1', '2', '3',]

// Write password to the #password input
function writePassword() {
  // console.log("sanity check")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword () {
  var characterLength = prompt("How long would you like your password to be? (8 to 128 Pls)")
  while(characterLength < 8 || characterLength > 128){
    //do something
    characterLength = prompt("8 to 128 charactors.")
  }

  //lower, lowercase, LoWeRcAasE
  while(!lowercaseConfirm && !uppercaseConfirm && !specialConfirm && !numberConfirm){
    alert("Please pick at least One of the following options:")
    var lowercaseConfirm = confirm("Would you like to include lowercase characters?")
    var uppercaseConfirm = confirm("Would you like to include uppercase characters?")
    var specialConfirm = confirm("Would you like to use special charactors?")
    var numberConfirm = confirm("Would you like to include a number?")
  }

  var characterSet = []

  if(lowercaseConfirm === true){
    characterSet = characterSet.concat(lowercaseArr)
  }

  if(uppercaseConfirm === true){
    characterSet = characterSet.concat(uppercaseArr)
  }

  if(specialConfirm === true){
    characterSet = characterSet.concat(specialCarArr)
  }
  if(numberConfirm === true){ 
    characterSet = characterSet.concat(number) 

  }
  console.log(characterSet);

  var finalPass = ""

  for(i=0; i<characterLength; i++){
    var randomNum = Math.floor(Math.random() * characterSet.length)
    var randomChar = characterSet[randomNum]
    finalPass += randomChar
  }
  return finalPass
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
