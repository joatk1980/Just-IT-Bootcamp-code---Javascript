//all stored in same array diff data types

let myArray = [1, "hello", true];

console.log(myArray);

//use to find the index of a specific item in an array
console.log(myArray.indexOf("hello"));
//find length of array
console.log(myArray.length);

console.log(myArray[0]);
// 1 because the position 0 is 1
console.log(myArray[2]);
//would be True as position 0 = 1 1 =hello 2= true

let faveFilm = ["Grease", "Bambi", "Top Gun", "Notting Hill"];

//console.log(faveFilm);

console.log(faveFilm[1]);

//adds item to the end of the array
myArray.push(3.1);
console.log(myArray);

//takes last item off the end of the array
myArray.pop();
console.log(myArray);

//add an item on to fave film
faveFilm.push("The Goonies");
console.log(faveFilm);

//take the item back off fave film
faveFilm.pop();
console.log(faveFilm);

//use to find the index of a specific item in an array
console.log(myArray.indexOf("hello"));
//find length of array
console.log(myArray.length);

//Array activity//

//.shift()
//removes first item in array
//Array shift()
//Shift(remove) the first element of the array
let fruits = ["banana", "orange", "apple", "mango"];
fruits.shift();
console.log(fruits);
//result ['orange, 'apple', 'mango']

//The shift() method returns the shifted element
fruits.shift();
//result should return "banana"

//.unshift()
//The unshift() method adds new elements to the beginning of an array
//The unshift() method overwrites the original array

let fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.unshift("Lemon, Pineapple");
console.log(fruits1);
//result lemon pineapple banana orange apple mango

//.slice()
//The slice() method returns selected elements in an array, as a new array.
//The slice() method selects from a given start, up to a (not inclusive) given end.
//The slice() method does not change the original array.

let fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits2.slice(1, 3);
//start at index pos 1 and end at 3
console.log(citrus);
//orange, lemon

//select fruits using negative value
let fruits3 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const myBest = fruits3.slice(-3, -1);
console.log(myBest);
//lemon, apple

//.splice()
//The splice() method adds and/or removes array elements.
//The splice() method overwrites the original array.
// Create an Array
let fruits4 = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add "Lemon" and "Kiwi"
fruits4.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits4);
//answer 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango'
//why use 0? adds it in to the list

//.concat()
//The concat() method concatenates (joins) two or more arrays.
//The concat() method returns a new array, containing the joined arrays.
//The concat() method does not change the existing arrays.
let fruits5 = ["Banana", "Orange", "Apple", "Mango"];
let moreFruits = ["Cherry", "Date"];
let allFruits = fruits5.concat(moreFruits);
//has added the arrays together
//result banana orange apple mango cherry date

//.join()
//joins all elements into a string and adds hyphen
let fruits6 = ["Banana", "Orange", "Apple", "Mango"];
let fruitString = fruits6.join(", ");
console.log(fruitString);
//result banana, orange, apple, mango
//add in whichever seperator you want i.e , - . /
