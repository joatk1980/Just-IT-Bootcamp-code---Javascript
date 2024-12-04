//!Activity brief
//combine 2 words
//Write a function called combineWords that accepts two strings and returns them as a single string, separated by a space.

function combineWords(word1, word2) {
  return `${word1} ${word2}`;
}

const result = combineWords("i love", "pizza");

console.log(result);

//or

function combineWords1(word3, word4) {
  return word3 + "" + word4;
}
console.log(combineWords("Hello", "Sweetie"));

//Perform simple arithmetic operations
//Create four functions: add, subtract, multiply, and divide. Each should take two numbers and return the appropriate calculation

let num1 = 10;
let num2 = 200;

function add(num1, num2) {
  return num1 + num2;
}
console.log(num1 + num2);

function subtract(num1, num2) {
  return num2 - num1;
}
console.log(num2 - num1);

function multiply(num1, num2) {
  //return num1 * num2;
}
console.log(num1 * num2);

function divide(num1, num2) {}
console.log(num2 / num1);

//convert temperature units
//Implement a function named celsiusToFahrenheit that converts a temperature from Celsius to Fahrenheit.

function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}
//convert celsius to fahrenheit using formula

const tempInCelsius = 25;
const tempInFahrenheit = celsiusToFahrenheit(tempInCelsius);
console.log(`${tempInCelsius}°C is equal to ${tempInFahrenheit}°F`);
//output 25c is equal to 77F

//Create a countdown
//Make a function startCountdown that takes a starting number and logs every number down to 1, followed by "Blast off!"

function startCountdown(startNum) {
  for (
    let i = startNum;
    i >= 1;
    i-- //loop fromstarting num to 1
  ) {
    console.log(i);
  }
  console.log("Blast off!");
  //log blast off after countdown
}
startCountdown(10);

//Calculate age from birth year
//Write a function calculateAge that takes a birth year and returns the current age.
// currentYear = 2024;
// birthYear = 1980;

// function calculateAge(currentYear, birthYear) {}
// console.log(currentYear - birthYear);

//or

currentYear1 = 2024;
birthYear1 = 1980;
function calculateAge1(birthYear1) {
  const currentYear1 = new Date().getFullyear();

  return currentYear1 - birthYear1;
}
console.log(currentYear1 - birthYear1);

//find min and max values in an array

//End of day quiz answers
//c
//b
//b
//a
//a store in variable dont need to use function
//b
//b
