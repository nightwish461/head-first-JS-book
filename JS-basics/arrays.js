const {employeeData} = require("./employeeData");

/*
++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++  Arrays in JS ++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++
*/

// Creating an array in JS

// using literal notation
// accessing an array using []
var colors = ["red", "blue", "green", "gray"];
console.log(colors);
console.log(colors.length);
console.log(colors[0]);

// using array constructor, new keyword can be ammended, is not necessary
var colors2 = new Array("red", "blue", "green", "gray"); 
console.log(colors2);
console.log(colors2.length);
console.log(colors2[0]);

// using Array.of()
var colors3 = Array.of("red", "blue", "green", "gray");
console.log(colors3);
console.log(colors3.length);

// comparison Array.of() and array constructor
var array1 = Array.of(4); 
var array2 = Array(4);

console.log(array1); // --> returns an array of length=1 with value 4 in it
console.log(array2); // --> returns an array with 4 emty slots, lenth=4

// comparison array literal and array constructor
var someArray1 = Array(4);
console.log(someArray1); // --> returns an array with 4 emty slots, lenth=4
console.log(someArray1.constructor === Array);

var someArray2 = [4];
console.log(someArray2); // --> returns an array with length=1 and value 4
console.log(someArray2.constructor === Array); 

// Creating an array from a string using the split() method ToDo
var str = "Today is a good day";
str.split();

// An array literal can contain elements of any type, including null and undefined, primitives and objects:
var mixed = [1, "earth", null, undefined, ['green']];
console.log(mixed);

// A noop comma at the end - comma after last elemnt is ignored. Array with no commas in between = dense array
var colorsComma = ["red", "blue", "green", "gray",];
console.log("array with commas ", colorsComma.length); // --> length is 4

// Commas before the first element or in between creates an empty array element. 
// Commas before and in between create a sparse array
var colorsComma2 = [,"red", "blue", "green", "gray"];
console.log("array with commas ", colorsComma2.length); // --> length is 5

var colorsComma3 = ["red", "blue",, "green", "gray"];
console.log("array with commas ", colorsComma3.length); // --> length is 5

// Spread operator
var moreColors = ["pink", "yellow", ...colors];
console.log("spread operator ", moreColors);

// Generator function with a spread operator:
function* elements(element, length) {
  let index = 0;
  while (length > index++) {
    yield element;
  }
}

console.log("spread operator ", [...elements("hi", 5)]);

// Joining the array with concat
var otherColors = ["violet"];
var all = otherColors.concat(colors);
console.log(all);

// Filtering an array
console.log("filtering original array ", employeeData);

// Filter undefined values

if (employeeData != undefined) {
  const employees = employeeData.filter(function (exists){
    return exists;
  });
  console.log("filtering without arrow function ", employees);
  
  const employeesArrow = employeeData.filter((exists) => exists);
  console.log("filtering with arrow function ", employeesArrow);
}



// Checking if an Array Contains a Value in JavaScript --> include() function
console.log(colors.includes("red")); // --> true

/*
  ####################
  Operations on arrays
  ####################
*/

// Map function
var colorsUpperCase = colors.map(x => x.toUpperCase());
console.log("map function upperCase ", colorsUpperCase);

// sorting array in descending order

let numbers = [4,2,6];
numbers.sort(function(a,b){ 
    return b - a; 
});

numbers.sort((a,b) => b-a);

// transform an array of strings into an array of the string’s lengths
let names = ['John', 'Mac', 'Peter'];

let lengths = names.map(function(name) {
    return name.length;
});
console.log("lengths: ", lengths);

let lengthsArrow = names.map(name => name.length);
console.log("lengthsArrow: ", lengthsArrow);

/*
    JavaScript arrow functions and object literal
*/

let setColor = function (color) {
  return {value: color}
};

let backgroundColor = setColor('Red');
console.log(backgroundColor.value); // "Red"

// Same as arrow function needs to be written in (...)
let setColor3 = color => ({value: color });


// a) Map an array of objects like this [{num: 3}, {num:5}] to an array of numbers [4,3]

var array1 = [{num: 3, points: 657}, {num:5}, {num:7}, {num:9}, {num:46}];

function filterNumbers(array) {
    return array.map(object => object.num);
}

const result1 = filterNumbers(array1);
console.log("Map/ filter out numbers", result1);


// b) Filter only even/odd numbers, only bigger than 4

// filtering out even numbers. The input to filter(...) function needs to be true or false.
function evenOdd(number) {
    return number % 2 === 0;
}


// c) Advanced map: [{a:4, b:3}, {a:3, b:7}] => multiply a*b and put it in array [12, 21]

const array33 = [{a:4, b:3}, {a:3, b:7}, {a:5, b:7}, {a:3, b:5}];
function mapMultiplyNumbers(array) {
    return array.map(object => object.a*object.b);
}

const result2 = mapMultiplyNumbers(array33);
console.log("Map + multiply values ", result2);


// d) Combine map and filter: use previous advanced map + filter numbers that are multiple of 3 (or even etc.)



// e) Operations on strings: remove first char, last char, split string in array on spaces, replace empty string


module.exports = { filterNumbers };


