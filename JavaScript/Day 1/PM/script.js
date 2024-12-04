//!String conversion
//String (valueForwhichTypeToBeConvert)
let oneThousand = 1000;
console.log(typeof oneThousand);
console.log(oneThousand);

let boolean = String(true);
console.log(boolean);

//!Number conversion
//Number ()
let number1 = Number("100");
let number2 = Number("200");
console.log(number1 + number2);

let number3 = "three";
//NaN - Not a number  - will be return when we convert a string to a number
console.log(Number(number3));
//true - 1 false - 0
console.log(Number(false));

//!Boolean Conversion
//Boolean is used to represent and work with true/false values
//empty value=false
//any other value is true
//null and 0 are empty value
console.log(Boolean(10));
console.log(Boolean(0));
console.log(Boolean(-20));
let Boolean1 = Boolean("false");
console.log(Boolean1);
console.log(Boolean(" "));
console.log(Boolean(""));
console.log(Boolean(String(Number(false)))); //true
//Parent is always read first if nested so String prior to the Number

console.log(Number(100 < 200)); //1 because true - converts to number

//Type conversion - auto converted to number type
let values = 1 + true; //true automatically converted to number
console.log(values);

//String - any value in "" '' and ``
let string1 = "Single Quotes";
let string2 = "Double quotes";
let string3 = `Backticks`;

let sentence = "This isnt a number";
console.log(sentence);

let firstName = "Zak";
let lastName = "Pardis";
let age = 28;

//Template literal
console.log(firstName + " " + lastName);
console.log(`My full name is: ${firstName}${lastName} and my age is ${age}`);
console.log(
  "My first name is " +
    firstName +
    ", my last name is " +
    lastName +
    " and my age is " +
    age
);

//Task

let firstName1 = "Jo";
let lastName1 = "Atkins";
let name = "Jo Atkins";
let greeting1 = "Nice to meet you";

console.log(greeting1 + " " + firstName1 + " " + lastName1);
//or
console.log(`Nice to meet you ${firstName1} ${lastName1}!`);
//or
console.log(`Nice to meet you, ${name}!`);

let hobby = "swimming";
let food = "steak";
let book = "Dummies guide to Javascript";
console.log(
  `Hello, i'm ${firstName1} ${lastName1}. I enjoy ${hobby}, love eating ${food} and my favourite book is ${book}`
);
// could have used const instead of let

let sentence1 = `I enjoy ${hobby}, love eating ${food}, and my favourite book is ${book}`;

console.log(sentence1);

//console.log("5" + 3 + 3);

Boolean("false");
"10" === 10;

let value = Boolean(0);
console.log(value);

let value1 = Number(false);
console.log(value1);

let value2 = Number(true);
console.log(value2);

console.log(Number(Boolean(null)));

console.log(Number(Boolean("5")));

/*=assignment
== value to be equal
=== value and type both to be equal
*/

console.log("10" == 10); //true
//would be true as both are equal to 10

console.log("10" === 10); //false as both value and type are not the same

//Interaction
alert("Do you want to stay!"); //Alert message box

//prompt
let userName = prompt("Type your Name");
console.log(userName);
//if click nothing will return null, if type in name will return name6

console.clear();

//confirm
let isHappy = confirm("Are you happy");
//console.log(`You are ${isHappy}`); //if click yes - true, if click cancel = false

console.clear();

//Task 2
let userName1 = prompt("What is your Name?");
console.log(userName1);
console.log(`Welcome ${userName1} to my website`);

/*let userInput = prompt("Please enter a number");
let number = parseFloat(userInput);
let result = number * 10;
alert("The result is:" + result);*/

let Name = prompt("What is your name?", "Name:");
console.log(`Hello, ${Name}`);

let number = prompt("Enter a value");
let value6 = Number(number) * 10;
alert(value6);
