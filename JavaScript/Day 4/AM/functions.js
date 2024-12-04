//!Intro to Functions
//Declaring function
//function functionName { code to be executed
//}

function greet() {
  console.log("Hello world!");
}
greet();

//Adding a parameter
function greet(name) {
  console.log("Hello " + name + "!");
}

greet("Jo");

console.clear();
//adding a parameter in for the name adding a value into the name function

//TASKS//

//write a function named addNumbers that takes two parameters number1 and number2 and returns their sum

function addNumbers(number1, number2) {
  console.log(number1 + number2); //logs sum to console + adds the numbers//
}
addNumbers(5, 10);
//function called with arguments

//write a function named multiplyNumbers that takes two parameters number1 and number2 and returns their product

function multiplyNumbers(number1, number2) {
  return number1 * number2; // '*' is used to multiply numbers
}
let result = multiplyNumbers(5, 10); //result will be 50
console.log("The product is:", result); //output; The product is 50

//Keiras example
function multiplyNumbers(number1, number2) {
  console.log(number1 * number2);
}
multiplyNumbers(5, 10);

//write a function names concatStrings hat takes two parameters string1 and string2 and returns their concatenation

function concatStrings(string1, string2) {
  return string1 + string2;
  //return returns the result of the concatenating strings + is used for string concatenation - joins strings together
}
let result1 = concatStrings("Hello,  ", "World!");
//string1 = Hello, string2 = world
//result will be "Hello, World!"
//concatenates string using +

console.log("The concatenated string is:", result1);
//Output: The concatenated string is: "Hello, world!"
//concatenated means link (things) together in a chain or series
//concatenated string 'Hello, World!' is returned by function and stored in variable result1

//keiras example
function concatStrings(string1, string2) {
  console.log(string1 + string2);
}

concatStrings("Hello", "World");

//write a function named maxNumber that takes two parameters number1 and number2 and returns the maximum of the two

//declare the function maxNumber with two parameters
function maxNumber(number1, number2) {
  if (number1 > number2) {
    return number1;
  } else {
    return number2;
  }
}
//if-else determines the maximum number

let result2 = maxNumber(10, 20);
//calls the function wih the two numbers as arguments

console.log("The maximum number is:" + result2);
//prints the result
//function compares the two numbers and returns the larger 1

console.clear();

//Keiras example
function maxNumber(number1, number2) {
  if (number1 > number2) {
    console.log(number1);
  } else {
    console.log(number2);
  }
}

maxNumber(30, 15);

//FURTHER TASKS
//https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php#google_vignette

//Write a JavaScript function that reverses a number.
//Example x = 32243;
//Expected Output : 34223

function reverseNumber(num) {
  let numStr = num.toString(); //convert number to a string
  let reversedStr = numStr.split("").reverse().join(""); //reverse the string - splits string into an array of individual characters//.reverse() reverses the order of the characters in the array - .join joins the characters back together into a single string
  let reversedNum = parseInt(reversedStr, 10); //parseInt converts the reversed string back to a number, 10 specifies that the number is in base(radix) 10 - 10 = decimal base -- it tells parseInt how to interpret the digits in the string
  return reversedNum;
}

let x = 32243;
let reversed = reverseNumber(x);
console.log("Reverse number:", reversed);

console.clear();

//Write a JavaScript function that checks whether a passed string is a palindrome or not?

function isPalindrome(str) {
  // Normalize the string by removing non-alphanumeric characters and converting to lowercase - str.toLowerCase() converts string to lowercase
  //.replace(/[^a-z0-9]/g, "") removes all non alpanum characters(punctuation, spaces) so only numbers and letters considered
  let normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Reverse the normalized string -- splits string into array of characters
  let reversedStr = normalizedStr.split("").reverse().join("");

  // Compares the normalized string with its reversed version - if they are the same function returns true otherwise returns false
  return normalizedStr === reversedStr;
}

// Example usage
let testStr1 = "A man, a plan, a canal, Panama";
let testStr2 = "hello";

console.log(`"${testStr1}" is a palindrome: ${isPalindrome(testStr1)}`); // true
console.log(`"${testStr2}" is a palindrome: ${isPalindrome(testStr2)}`); //false

console.clear();

//Write a JavaScript function that generates all combinations of a string.
//Example string : 'dog'
//Expected Output : d,do,dog,o,og,g

//To generate all possible combinations of a string in JavaScript, you need to generate subsets of the string with varying lengths. This process can be done using recursion or iterative methods.

//initialized empty array 'results' to store all combinations
function getAllCombinations(str) {
  const results = [];

  // Helper function to generate combinations recursively
  function generateCombinations(prefix, start) {
    // Add the current combination to results if it's not empty
    //prefix the current combination being built
    if (prefix.length > 0) {
      results.push(prefix);
    }

    // Generate further combinations by adding each subsequent character
    //start = the starting index for the next characted to be added to 'prefix' if prefix is not empty add it to 'results'
    //loop through the string starting from start and recursively build combinations by appending each character to 'prefix
    for (let i = start; i < str.length; i++) {
      generateCombinations(prefix + str[i], i + 1);
    }
  }

  // Start generating combinations
  //The recursion starts with an empty prefix and start index of 0.
  // For each character in the string starting from the current start index, the function adds the character to prefix and calls itself with the updated prefix and the next index.

  generateCombinations("", 0);

  return results;
}

// Example usage
const inputString = "dog";
const combinations = getAllCombinations(inputString);
console.log(combinations);

//result ['d', 'do', 'dog', 'dg', 'o', 'og', 'g']
