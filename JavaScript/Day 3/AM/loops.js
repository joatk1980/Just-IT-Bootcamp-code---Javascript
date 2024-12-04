//! Loops

// for (let i = 0; i < 10; i++) {
//   console.log("Hello Javascript");
// }
//this will print Hello Javascript 5x
// do not have to use i can use anything else i.e Hello
//i is set to value of 0 initialization
//condition - while i is LESS than 10
// add 1 to i print the statement with the number of iterations done and go again until you reach 10 - so does it 10 x

let items = ["Apple", "Banana", "Cherry"];

for (let items = 0; items < 10; items++) {
  console.log(items);
}

//TASK 1
//Write a loop to iterate through items in a list and print to terminal
// let items = ["Apple", "Banana", "Cherry"];

//breakdown into plain english
//write a for loop
//call in items from an array
let items1 = ["Apple", "Banana", "Cherry"];

for (let item = 0; item < items1.length; item++) {
  console.log(items1[item]);
}

//know how long we need it to run as we know how long the list of items is; 3 items
//for(where to start 0 because that is the start of the list; condition check to see if all items have been printed out while item is less than length of overall array; what we want it to do - whilst it is less than the length of the overall array then increment by 1 until it reaches the end of the list){

//what we need it to iterate through
// we want body of for loop to print each item out
// console.log()
//cannot redefine the variable you have already used
//}

//TASK 2
//Print only the even numbers from 0-10
let items2 = ["Apple", "Banana", "Cherry"];

for (let num = 0; num <= 10; num++) {
  if (num % 2 == 0) {
    console.log(num);
  }
}

//WHILE loops
//while (condition){
//code block to be executed

//}

let i = 0;
while (i < 5) {
  console.log("Loop iteration:" + i);
  i++;
}

//answer:
// Loop iteration:0
// Loop iteration:1
// Loop iteration:2
// Loop iteration:3
// Loop iteration:4

//need to add i++ otherwise will keep going on infinite loop - condition can never be met as i would always be 0

let number = 0;
let inc = 0;
while (number < 5) {
  console.log("Loop iteration number : " + number + ", " + inc);
  number++;
}
// answer
// Loop iteration number : 0, 0
// Loop iteration number : 1, 0
// Loop iteration number : 2, 0
// Loop iteration number : 3, 0
// Loop iteration number : 4, 0

//TASK 3
//using while loop console.log a smiley face into the terminal 10 times

let smileCount = 0;
while (smileCount < 10) {
  console.log(":)");
  smileCount++;
}

//answer
// :) // :) // :) // :) // :) // :) // :) // :) // :) // :)

//another example
let emoji = ":)";
let count = 0;
while (count < 10) {
  console.log(emoji);
  count++;
}

//

//use for loop and while loop
//each should print the numbers from 10 down to 1 in the console

//FOR loop

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

//initialization 'let i = 10'
//This is the starting point of the loop
//Condition 'i >= 1'
//Before each iteration the condition is checked  - if the condition is true the code in the {} is executed , if false the loop stops
//update 'i--' (need this to stop infinite loop)
//after each iteration of the loop the update expression 'i--' is executed this decreases the value of i by 1

//WHILE loop

let number1 = 10;
while (number1 >= 1) {
  console.log(number1);
  number1--;
}

// let number1 = 10 initializes variable and assigns it value 10
//while loop continues to execute as long as the condition 'number >= 1' is true  - will run as long as 'number' is greater or equal to 1
// line prints current number to console
//number1 --; decrements the value number1 by 1 after each iteration - shorthand for number = number - 1
//once the condition number >= 1 is false the loop terminates
// have to use number1 --; otherwise would be infinite loop

//BREAK Statement
//Break statement breaks out of a switch or loop
//In a loop it breaks out of the loop when it reaches the required word i.e below it will only bring back Apple Banana and Cherry
//
let words = ["Apple", "Banana", "Cherry", "Stop", "Date"];

for (let i = 0; i < words.length; i++) {
  if (words[i] === "Stop") break;
  console.log(words[i]);
}
// i is index has to be in square brackets when it searches to access the index convention

//CONTINUE statement
//used to skip rest of code inside loop of the current iteration and proceed to the next

let words1 = ["apple", "banana", "apricot", "cherry", "date"];

for (let i = 0; i < words1.length; i++) {
  if (words1[i].startsWith("a")) {
    continue;
  }
  console.log(words1[i]);
}
//this will bypass those fruits starting with an a

//Do While loop
//checks condition at end of loop body
let i1 = 0;
do {
  console.log("Loop iteration:" + i1);
  i1++;
} while (i1 < 5);

//starts at do statement, then loops back to check the let variable value
//do block contains the code that will be executed at least once
//while condition at the end determines whether the loop will continue to run

//Task 4 - Do while
//Create a simple program that uses a do-while loop to increment a counter from 1 up to pre defined number, displaying each step in the terminal

let counter = 1; //counting from 0 if = 1 counting from 1
do {
  console.log("Counter value:" + counter);
  counter++;
} while (counter <= 8);
//once it gets to 8 stop

//initialise the variable let counter = 1;
//do block: console log prints the current value of the counter to the console
//counter++ increments the value of counter by 1
//while condition - the condition 'counter <=8' is checked
//if condition is true loop continues to execute the do block
//if the condition is false the loop terminates

let counter1 = 1;
const maxCount = 10;
do {
  console.log("Counter is at" + counter1);
  counter1++;
} while (counter1 <= maxCount);
//Keiras example

//Nested loop example
//using template literals ``
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`i= ${i} and j = ${j}`);
  }
}
//result
//i= 0 and j = 0
// i= 0 and j = 1
// i= 0 and j = 2
// i= 1 and j = 0
// i= 1 and j = 1
// i= 1 and j = 2
// i= 2 and j = 0
// i= 2 and j = 1
// i= 2 and j = 2
