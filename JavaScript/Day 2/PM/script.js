//if statement
//> above
//>= above or equal too
// ! = is not equal to

temperature = 39;

if (temperature < 30);
console.log("It's not hot");

//Ask the user for their age and store it in a variable, check users age - if 18 or over then display message 'you may be served at the bar'

/*let age = prompt("How old are you?");

/*if (age >= 18) {
  console.log("You may be served at the bar");
}*/

//else statement
//if age over 18 can be served if under 18 cannot be served
/*if (age >= 18) {
  console.log("You may be served at the bar");
} else {
  console.log("You may NOT be served at the bar!");
}*/

//elseif is a second true condition and picks up anything else doesnt

temperature = 39;

if (temperature < 30) {
  console.log("It's a hot day!");
} else if (temperature > 40) {
  console.log("Its the hottest temp ever!");
} else {
  console.log("Its too hot");
}

//task - two outcomes based on age - diff messages for under 18, 18-20, 21 and over // if else elseif
age = 21;
//let age = prompt("How old are you?");//

if (age < 18) {
  console.log("You may NOT be served at the bar");
} else if (age <= 20) {
  console.log("Your are old enough to be served");
} else {
  console.log("You may be served at the bar!");
}

console.clear();

// && (AND) || (OR) logical operators
// || OR only one needs to be true
let weather = "sunny";
let place = "beach";
/*if (weather === "sunny" || place === "beach") {
  console.log("Great day for beach volleyball");
} else {
  console.log("How about a museum visit instead?");
}*/
// || OR result is Great day for beach volleyball
// if place changed to city would be How about a museum visit instead

//&& AND statement both need to be true
if (weather === "sunny" && place === "beach") {
  console.log("Great day for beach volleyball");
} else {
  console.log("How about a museum visit instead?");
}
// would bring back Great day for beach volleyball
//if place change to city would be How about a museum instead
console.clear();

//expand upon the age checker further to check multiple conditions and scenarios - use && and ||//
age = 25;
name = "Tony";
//let age = prompt("How old are you?");//

if (age < 18 || name == "John") {
  console.log("You may NOT be served at the bar");
} else if (age <= 20 && name == "Tony") {
  console.log("Your are old enough to be served");
} else {
  console.log("You may be served at the bar!");
}
