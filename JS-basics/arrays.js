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
var mixed = [1, "earth", null, undefined, ["green"]];
console.log(mixed);

// A noop comma at the end - comma after last elemnt is ignored. Array with no commas in between = dense array
var colorsComma = ["red", "blue", "green", "gray"];
console.log("array with commas ", colorsComma.length); // --> length is 4

// Commas before the first element or in between creates an empty array element.
// Commas before and in between create a sparse array
var colorsComma2 = [, "red", "blue", "green", "gray"];
console.log("array with commas ", colorsComma2.length); // --> length is 5

var colorsComma3 = ["red", "blue", , "green", "gray"];
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

// Checking if an Array Contains a Value in JavaScript --> include() function
console.log(colors.includes("red")); // --> true

/*
  ####################
  Operations on arrays
  ####################
*/

// Map function
var colorsUpperCase = colors.map((x) => x.toUpperCase());
console.log("map function upperCase ", colorsUpperCase);

// sorting array in descending order

let numbers = [4, 2, 6];
numbers.sort(function (a, b) {
  return b - a;
});

numbers.sort((a, b) => b - a);

// transform an array of strings into an array of the string’s lengths
let names = ["John", "Mac", "Peter"];

let lengths = names.map(function (name) {
  return name.length;
});
console.log("lengths: ", lengths);

let lengthsArrow = names.map((name) => name.length);
console.log("lengthsArrow: ", lengthsArrow);

/*
    JavaScript arrow functions and object literal
*/

let setColor = function (color) {
  return { value: color };
};

let backgroundColor = setColor("Red");
console.log(backgroundColor.value); // "Red"

// Same as arrow function needs to be written in (...)
let setColor3 = (color) => ({ value: color });

// a) Map an array of objects like this [{num: 3}, {num:5}] to an array of numbers [4,3]

var array1 = [
  { num: 3, points: 657 },
  { num: 5 },
  { num: 7 },
  { num: 9 },
  { num: 46 },
];

function mapNumbers(array) {
  return array.map((object) => object.num);
}

const result1 = mapNumbers(array1);
console.log("Map numbers", result1);

// b) Filter only even/odd numbers, only bigger than 4

// filtering out even numbers. The input to filter(...) function needs to be true or false.
function evenOdd(number) {
  return number % 2 === 0;
}

// c) Advanced map: [{a:4, b:3}, {a:3, b:7}] => multiply a*b and put it in array [12, 21]

const arrayAdvancedMap = [
  { a: 4, b: 3 },
  { a: 3, b: 7 },
  { a: 5, b: 7 },
  { a: 3, b: 5 },
];
function mapMultiplyNumbers(array) {
  return array.map((object) => object.a * object.b);
}

const result2 = mapMultiplyNumbers(arrayAdvancedMap);
console.log("Map + multiply values ", result2);

// d) Combine map and filter: use previous advanced map + filter numbers that are multiple of 3 (or even etc.)
// Examples from https://medium.com/@elirobbins0/javascript-using-map-and-filter-together-818b040ac319

// --> In array-test file

// e) Operations on strings: remove first char, last char, split string in array on spaces, replace empty string with -

var countries = ["Switzerland", "Germany", "", , "France", "Italy"];

// remove first character
var newCountries1 = countries.map((country) => country.substring(1));
console.log(newCountries1);

var newCountries2 = countries.map((country) => country.substring(1, 3));
console.log(newCountries2);

// remove last char, substring - trim from char at 0 to length-1
var newCountries3 = countries.map((c) => c.substring(0, c.length - 1));
console.log(newCountries3);

// Split string into array on spaces
var name = "cateNameInHere";
var nameSplit = name.split("");
console.log(nameSplit);

//replace empty string with -
var newCountries4 = countries.map((c) => {
  if (c === "") {
    console.log(true);
    return (c = "-");
  } else {
    console.log(false);
    return c;
  }
});
console.log(newCountries4);

// Same without if
var newCountries5 = countries.map((c) => (c === "" ? (c = "-") : c));
console.log(newCountries5);

// Replacing space in string with replace(regexp, newSubstring)
// from https://thispointer.com/javascript-string-replace-all-spaces-with-underscores-4-ways/
let dummyString = "Javascript is the most popular language";
let newDummyString = dummyString.replace(/\s+/g, "");
console.log("New String is: " + newDummyString);

/*
  Arrays reduce function
*/

// Source: https://www.programiz.com/javascript/library/array/reduce
// Adding up all values in the array. 1+2+3
var numbersReduce1 = [1, 2, 3];
var sum = numbersReduce1.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue;
});

console.log("array reduce() add: ", sum);

// Subtracting numbers in an array
const numbersReduce2 = [1800, 50, 300, 20, 100];

var difference = numbersReduce2.reduce(
  (previousValue, currentValue) => previousValue - currentValue
);

console.log("array reduce() subtract: ", difference);

// function to join each string elements
const message = ["JavaScript ", "is ", "fun."];

function joinStrings(accumulator, currentValue) {
  return accumulator + currentValue;
}

let joinedString = message.reduce(joinStrings);
console.log("Join strings: ", joinedString);

// Remove duplicate items from array

let ageGroup = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];

// Initial value here is an empty array, thus we return an array here, not a single value
let uniqueAgeGroup = ageGroup.reduce((previousValue, currentValue) => {
  if (previousValue.indexOf(currentValue) === -1) {
    previousValue.push(currentValue);
  }
  return previousValue;
}, []);

console.log("array reduce() uniqueAgeGroup: ", uniqueAgeGroup);

// Adding shopping card items
let shoppingCart = [
  {
    product: "phone",
    qty: 1,
    price: 500,
  },
  {
    product: "Screen Protector",
    qty: 1,
    price: 10,
  },
  {
    product: "Memory Card",
    qty: 2,
    price: 20,
  },
];

// Calculate the total amount
let total = shoppingCart.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue.qty * currentValue.price;
}, 0);

console.log("Total amount in shopping card ", total);

// Calculate average price
let averagePrice = shoppingCart.reduce(
  (previousValue, currentValue) =>
    previousValue + currentValue.price / shoppingCart.length,
  0
);

console.log("Average price in shopping card ", averagePrice);

// Grouping objects by property
let people = [
  { name: "John", age: 21 },
  { name: "Oliver", age: 55 },
  { name: "Michael", age: 55 },
  { name: "Dwight", age: 19 },
  { name: "Oscar", age: 21 },
  { name: "Kevin", age: 55 },
];

function groupBy(objectArray, property) {
  return objectArray.reduce(function (accumulator, currentObject) {
    let key = currentObject[property];
    if (!accumulator[key]) {
      accumulator[key] = [];
    }
    accumulator[key].push(currentObject);
    return accumulator;
  }, {});
}

let groupedPeople = groupBy(people, "age");
console.log("Grouping objects by property: ", groupedPeople);

// Grouping objects by property Zoo example

let zoo = [
  { animal: "lion", gender: "female" },
  { animal: "panda", gender: "male" },
  { animal: "wolf", gender: "female" },
  { animal: "snake", gender: "male" },
  { animal: "zebra", gender: "female" },
];

let zooGroupedByGender = groupBy(zoo, "gender");
console.log("Grouping objects by property: ", zooGroupedByGender);

// Filtering an array
const { employeeData } = require("./employeeData");
console.log("filtering original array ", employeeData);

// Filter undefined values
if (employeeData != undefined) {
  const employees = employeeData.filter(function (exists) {
    return exists;
  });
  console.log("filtering without arrow function ", employees);

  const employeesArrow = employeeData.filter((exists) => exists);
  console.log("filtering with arrow function ", employeesArrow);
}

module.exports = { evenOdd, mapNumbers };
