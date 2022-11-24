/*
++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++  Objects in JS +++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++
*/

// Creating objects using object literal notation with curly braces {...}
// Each object consist of key-value pairs

let user = {
  name: "Marina",
  age: 30,
  email: "m@gmail.com",
  location: "Berlin",
};

console.log(user);

// +++++++++ accessing properties in JS ++++++++++++
// accessing properties - using .dot notation
console.log("accessing properties with dot notation: " + user.name);

nameProperty = "name";
console.log("accessing properties with [] : " + user["name"]);
console.log("accessing properties with [] : " + user[nameProperty]);

// Using object destructuring
const { name, age } = user;
console.log("accessing properties using object destructuring: " + name);
console.log("accessing properties using object destructuring: " + age);

// Using alias variable
let cat = {
  name: "Kitty",
  age: 5,
};

const { name: catName } = cat;
console.log(
  "accessing properties using ALIAS and object destructuring: " + catName
);

// Dynamic property name
const property2 = "age";
const { [property2]: someProperty } = cat;
console.log(
  "accessing properties using dynamic property name: " + someProperty
); // will return age=5

// Using Object.keys() method
console.log("using Object.keys(): ", Object.keys(cat)); // Output: (2) ['name', 'age']

// Using Object.values() method
console.log("using Object.values(): ", Object.values(cat)); // Output: (2) ['Kitty', 5]

// Operations with obj
let obj = {
  num: 56776,
  points: 368,
  degree: 5,
};

var result1 = obj.points + 5;
console.log("operations with objects ", result1);

// Adding new value to an object https://stackoverflow.com/questions/1168807/how-can-i-add-a-key-value-pair-to-a-javascript-object
// Using dot notation. This form is used when you know the name of the property.
cat.weight = 5;

console.log("Add new value to object using dot notation: ", cat);

// Using square braket notation. This form is used when the name of the property is dynamically determined.
cat["friends"] = ["mouse"];
console.log("Add new value to object using square braket: ", cat);

// Getting property dynamically
var getProperty = function (propertyName) {
  return obj[propertyName];
};
