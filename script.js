document.querySelector("#generate").addEventListener("click", writePassword);











// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Write password to the #password input

function writePassword() {
    //var password = generatePassword();
    var passwordText = document.querySelector("#password");
    // Array of possible password characters 
    var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
    var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    var lengthPassword = ""
    while (isNaN(lengthPassword) || lengthPassword < 8 || lengthPassword > 128) lengthPassword = Number(prompt("How long do you want your password to be?"));


    var upperCase = confirm("Do you want upper case letters?");


    var lowerCase = confirm("Do you want lower case letters?");


    var num1 = confirm("Do you want numbers?");


    var specialCharacter = confirm("Do you want special characters?");

    while (!upperCase && !lowerCase && !num1 && !specialCharacter) {
        alert("You have to pick one character type!")
        upperCase = confirm("Do you want upper case letters?");
        lowerCase = confirm("Do you want lower case letters?");
        num1 = confirm("Do you want numbers?");
        specialCharacter = confirm("Do you want special characters?");

    }
    var passwordCharacters = []

    if (specialCharacter) {
        passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (num1) {
        passwordCharacters = passwordCharacters.concat(number)
    }

    if (lowerCase) {
        passwordCharacters = passwordCharacters.concat(alphaLower)
    }

    if (upperCase) {
        passwordCharacters = passwordCharacters.concat(alphaUpper)
    }

    console.log(passwordCharacters)

    var randomPassword = " ";
    console.log(randomPassword)

    for (var i = randomPassword.length; i < lengthPassword; i++) {
        randomPassword += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];


    }
    console.log(randomPassword)

    passwordText.value = randomPassword;
}

//pool = Arraynall characters allowed
//each pool
//for each one
//combine Pool random pick convert to a string then display in HTM