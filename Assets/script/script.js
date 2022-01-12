// Assignment Code
let generateBtn = document.querySelector("#generate");

//Arrary//
let sc = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
let uc = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let lc = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//Check for Password Length//
function generatePassword() {
  let bigBoipassword = "";
  let passwordLength = window.prompt(
    "Please enter your desired password length. Note: The length must be at least 8 characters and no more than 128 characters."
  );
  if (passwordLength < 8 || passwordLength > 128) {
    alert("The password length you've enetered is invalid. Try again.");
  } else {
    let includeSpecial = confirm(
      "Do you want special characters in your password?"
    );
    let includeUpper = confirm(
      "Do you want uppercase letters in your password?"
    );
    let includeLower = confirm(
      "Do you want lowercase letters in your password?"
    );
    let includeNumbers = confirm("Do you want numbers in your password?");

    //Loop through array which adds user choice to overall password//
    if (includeSpecial === true) {
      bigBoipassword = bigBoipassword.concat(sc);
    }

    if (includeUpper === true) {
      bigBoipassword = bigBoipassword.concat(uc);
    }

    if (includeLower === true) {
      bigBoipassword = bigBoipassword.concat(lc);
    }

    if (includeNumbers === true) {
      bigBoipassword = bigBoipassword.concat(numbers);
    }
    console.log(password);
  }

  let finalPassword = [];
  for (let i = 0; i < passwordLength; i++) {
    finalPassword.push(
      bigBoipassword[Math.floor(Math.random() * bigBoipassword.length)]
    );
  }
  return finalPassword.join("");
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
