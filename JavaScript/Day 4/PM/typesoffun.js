//!Types of function

//Named functions - functions with a name which are hosted to the top of their scope - best for reusable, easily readable code //most used function

function sayHello() {
  console.log("Hello");
}
sayHello();

//outputs Hello!
//hoisted functions - can be called before the function is declared in the code already

//Anonymous functions - functions without a nam, typically assigned to variables or used as call backs -- not hoisted, so they must be defined before they are called
const sayHello1 = function () {
  console.log("Hello");
};

sayHello1();

//main difference is that the function is not named and saved to a variable instead
//cannot be called before it is named
//good for single use functions and where function doesnt need to be reused in code

//Arrow - provide a shorter syntax and do not have their own context -- ideal for concise functions and situations where this context should not change
const sayHello2 = () => {
  console.log("Hello");
};
sayHello2(); //outputs Hello

//used to write concise functions
//function does not need to be defined, we are providing the parameters
//calls function by using ()

//Higher-order -- functions that take other functions as arguments or return a function as a result
function greet(name) {
  return function (message) {
    console.log(name + "," + message);
  };
}
const greetAlice = greet("Alice");
greetAlice("Welcome"); //outputs Alice, Welcome
// take other functions as arguments or returns function as a result
//

//Global scope - variables declared outside any function
var globalVar = "I am global";
function checkScope() {
  console.log(globalVar); //Accessible
}
checkScope();
console.log(globalVar); //Accessible

//Keira example
let globalScope = "I am outside the function";
function checkScope() {
  console.log(globalScope);
}
checkScope();

//Local scope - variables declared within a function
function checkScope() {
  let localVar = "I am local";
  console.log(localVar);
}
checkScope();

//Block scope - let and const confined to block which they are assigned

//TASK
//WRITE 2 different functions
//function 1 should call in a variable from outside so should be global
//function 2 should call a variable from inside and so should be Local
//use template literals to print the variables for each function into a string
//function 1

const globalVar1 = "I am a global variable";

function printGlobalVariable() {
  console.log(`Function 1: ${globalVar1}`);
}
printGlobalVariable();

//function 2

function printLocalVariable() {
  const localVariable = "I am a local variable";
  console.log(`Function 2: ${localVariable}`);
}
printLocalVariable();

//keiras example
//global - define outside
let pinNumber = prompt("What is your PIN?"); //global variable

function pinCheck() {
  if (pinNumber == 1234) {
    console.log("Welcome to your bank account");
  } else {
    console.log("Incorrect Pin");
  }
}
pinCheck();

//Local variable

function pizzaOrder() {
  let toppings = prompt("What toppings would you like?");
  console.log(`You have ordered a large ${toppings} Pizza`);
}

pizzaOrder();

//Return statement
//used in functions to send a value back to the caller
//terminates the function execution and specifies the value to be returned
//allows function to produce an output that can be used elsewhere in the code
//return stores information doesnt print it out

function calculateArea(width, height) {
  return width * height;
}
let area = calculateArea(5, 10);
console.log(`The area is ${area}`);

//
function checkAge(age) {
  if (age >= 18) {
    return "You are an adult.";
  }
  return "Your are a minor.";
}

let message = checkAge(20);
console.log(message);
//output you are an adult - stores the info into the variable until you need to use it
//return mainly used in mathematical equations when trying to add or multiply
