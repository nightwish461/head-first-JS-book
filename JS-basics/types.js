/*
    Type conversion
*/

// == Equality operator - If the two values have different types, try to convert them into the same type and then compare them
// === Strict equality operator - Two values are strictly equal only if they have the same type and the same value. No type conversion.
// With == type conversion is performed. With === there is NO type conversion.

/*
    == Equality operator
*/
console.log("### == Equality operator ###");

// 1) Comparing a number and a string.
// The string is converted into a number, and the two numbers are then compared.
// If this conversion is not possible, result is= false
console.log(99 == "99" ? true : false); //true
console.log(99 == "vanille" ? true : false); //false
console.log(99 == NaN ? true : false); //false, NaN is not equal to anything

// 2) Comparing a boolean with any other type
// Boolean is converted to a number, and compared. true is converted to 1, false is converted to 0.
console.log(1 == true ? true : false); //true
console.log(1 == "true" ? true : false); //false,string is converted into a number
console.log("1" == true ? true : false); //true, "1" == true -> "1" == 1 -> 1 == 1

//3) Comparing null and undefined
console.log(null == undefined ? true : false); //true, both values essentially represent “no value”

// Other examples
console.log(0 == "" ? true : false); // true, empty string results in false

/*
    === Strict equality operator
*/
console.log("### === Strict equality operator ###");

console.log(99 === 99 ? true : false); //true
console.log("vanille" === "vanille" ? true : false); //true
console.log(99 === "99" ? true : false); //false
console.log(99 === "vanille" ? true : false); //false
console.log(99 === NaN ? true : false); //false
console.log(1 === true ? true : false); //false
console.log(1 === "true" ? true : false); //false
console.log("1" === true ? true : false); //false
console.log(null === undefined ? true : false); //false
console.log(0 === "" ? true : false); //false

console.log("### Type conversion with + ###");

// + operator with numbers you get addition, and when you use it with strings you get concatenation
// If you try to add a number and a string, JavaScript converts the number to a string and concatenates the two.
// The opposite of what it does with equality.
var add1 = 3 + "4";
console.log(add1); // output is 34

// When it comes the other arithmetic operators—like multiplication, division and subtraction—JavaScript
// prefers to treat those as arithmetic operations, not string operations.
var multi = 3 * "4";
console.log(multi); // output is 12

var div = 80 / "10";
console.log(div); // output is 8

var mini = "10" - 2;
console.log(mini); // output is 8

var mini2 = "1" - "1";
console.log(mini2); // output is 8

// Here starting from left to right, first addition, than concatination is performed
var order = 1 + 2 + " pizzas";
console.log(order); // output is 3 pizzas

var order2 = 1 + (2 + " pizzas");
console.log(order2); // output is 12 pizzas

// If you want JavaScript to convert a string into a number to add it to another number,
// use Number() function
var num = 3 + Number("4");
console.log(num); // output is 12 pizzas

/*
    Comparing objects
*/

// If both operands are objects, then you can use either == or === they work in exactly the same way.

// When we test equality of two object variables, we compare the references to those objects.
// Variables hold references to objects, and so whenever we compare two objects, we’re comparing object references.

let cat = {
  name: "Kitty",
  age: 5,
};

let cat2 = {
  name: "Kitty",
  age: 5,
};

var cat3 = cat;

// cat and cat2 are not equal
if (cat === cat2) {
  console.log("objects are equal");
} else {
  console.log("objects are NOT equal");
}

// cat and cat3 are not equal
if (cat === cat3) {
  console.log("objects are equal");
} else {
  console.log("objects are NOT equal");
}

// Empty array resolves to true, it is empty but not null, undefined, NaN or 0
console.log([] ? true : false);
