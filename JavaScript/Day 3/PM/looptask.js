//1. Counting 1 to 5:

for (let i = 1; i <= 5; i++) {
  console.log(i);
}
//bracket in wrong place

// 2. Printing "Hello" 3 Times :

for (let i = 0; i < 3; i++) {
  console.log("Hello");
}
//missing speech marks ""

// 3. Printing Even Numbers 2 to 6 :

for (let i = 2; i <= 6; i += 2) {
  console.log(i);
}
//missing brackets

// 4. Counting Down from 3 to 1 :

for (let i = 3; i >= 1; i--) {
  console.log(i);
}

console.clear();

//missing brackets

// 5. Printing a Simple Pattern:

for (let i = 0; i < 3; i++) {
  console.log("*");
}
//missing curly and square bracket

// 6. Printing Letters of a Word "JS" :

const word = "JS"; //speech mark

for (let i = 0; i < word.length; i++) {
  //curly bracket

  console.log(word[i]);
}

console.clear();

// 7. Printing Colors: Red, Green, Blue:

const colors = ["Red", "Green", "Blue"]; //commas needed

for (let color of colors) {
  console.log(color);
}

console.clear();

// 8. Printing Properties of an Object:

const person = {
  name: "John",
  age: 25, //needed :
  gender: "Male",
};

for (let key in person) {
  console.log(person[key]); //) on end
}

// 9. Printing Numbers in a Simple Sequence :

let num = 1;

while (num <= 5) {
  console.log(num);

  num++;
}
//; after num? final line?

console.clear();

// 10. Counting from 1 to 5 with a While Loop :

let count = 1;

while (count <= 5) {
  //missing ) bracket
  console.log(count); //missing ;
  count++; //missing ;
}

console.clear();

//Smile generator with while loop

let smileCount = 0;
const maxSmiles = 10;
while (smileCount < maxSmiles) {
  console.log(":)");
  smileCount++;
}

console.clear();

//For loop practice
let greetings = ["Hello", "Hi", "Hey", "Howdy", "Greetings"];
for (let i = 0; i < greetings.length; i++) {
  console.log(greetings[i]);
}

//greetings[i] prints each of the greetings to the array
//result
//Hello
// Hi
// Hey
// Howdy
// Greetings

//Hello World loop
let count1 = 0;
const maxCount1 = 5;

while (count1 < maxCount1) {
  console.log("Hello, World");
  count1++;
}
//result
// Hello, World
// Hello, World
// Hello, World
// Hello, World
// Hello, World

console.clear();

//counting to five
let number2 = 1;
const maxNumber2 = 5;
while (number2 <= maxNumber2) {
  console.log(number2);
  number2++;
}
//result
//1 2 3 4 5

console.clear();

//The Letter 'A' to console 10 x

let count2 = 0;
const maxCount2 = 10;

while (count2 < maxCount2) {
  console.log("A");
  count2++;
}
//result AAAAAAAAAA

//output a single line with X repeated 5 times
//concatenation

let count3 = 0;
const maxCount3 = 5;
let output = "";

while (count3 < maxCount3) {
  output += "X"; //inside the loop X is concatenated to the output string
  count3++;
}

console.log(output);
//let output = "" - initializes an empty string output, this will be used to build the final output by concatenating X to it

//new line numbers
//print number 1 to 3 each to a new line

let number3 = 1;
const maxNumber3 = 3;

while (number3 <= maxNumber3) {
  console.log(number3);
  number3++;
}
//result
// 1
// 2
// 3
