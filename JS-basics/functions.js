/*
    ### Creating an arrow function ###
*/

// add as arrow function
//In this example, the arrow function has one expression x + y so it returns the result of the expression.
let addArrow = (x, y) => x + y;
console.log(addArrow(10, 100));

// The typeof operator returns function indicating the type of arrow function.
console.log(typeof addArrow); // function

// The arrow function is also an instance of the Function type as shown in the following example:
console.log(addArrow instanceof Function); // true

/*
    Inline functions
*/

/*
    Return the number (count) of vowels in the given string.
    We will consider a, e, i, o, u as vowels for this Kata (but not y).
    The input string will only consist of lower case letters and/or spaces.
*/

// 1st solution without regex:
// In JS it is possible to iterate over a string
// https://stackoverflow.com/questions/1966476/how-can-i-process-each-letter-of-text-using-javascript

function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str.charAt(i) === "a" ||
      str.charAt(i) === "e" ||
      str.charAt(i) === "i" ||
      str.charAt(i) === "o" ||
      str.charAt(i) === "u"
    ) {
      count++;
    }
  }
  return count;
}

console.log("Count vowels ", countVowels("abracadabra")); // Result is 5

// Using JS .match() - match() returns an array with found items that match the pattern
// The match() method retrieves the result of matching a string against a regular expression.
function countVowels2(str) {
  var m = str.match(/[aeiou]/gi);
  return m === null ? 0 : m.length;
}

console.log("Count vowels with regex ", countVowels2("abracadabra")); // Result is 5

/*
    Count the occurence of n-z in a string
    Source: challenge comes from g964 on CodeWars
*/
function printerError(s) {
  var errors = "";
  var m = s.match(/[n-z]/gi);
  console.log(m); // if no match, the result is null
  if (m === null) {
    errors = "0/" + s.length;
  } else {
    errors = m.length + "/" + s.length;
  }
  return errors;
}

console.log("printerError with regex ", printerError("aaabbbbhaijjjm"));

function printerErrorV2(s) {
  console.log("string length ", s.length);
  const regex = /[n-z]/gi;
  const errors = (s.match(regex) || []).length;
  console.log("number of errors ", errors); // if no match, the result is null
  return `${errors}/${s.length}`;
}

console.log(
  "printerError with regex improved ",
  printerErrorV2("gggguuuwbbbbbbhhhhhhhhhhuuuupppzzzzzzzz")
);

/*
  Complete the solution so that it reverses the string passed into it.

  'world'  =>  'dlrow'
  'word'   =>  'drow'

  Source: Codewars
*/
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log("reverseString ", reverseString("world"));

/*
  Given two integers a and b, which can be positive or negative, find the sum of all the integer
  between and including them and return it. If the two numbers are equal return a or b.

  Note: a and b are not ordered!

  Examples (a, b) --> output (explanation)
  (1, 0) --> 1 (1 + 0 = 1)
  (1, 2) --> 3 (1 + 2 = 3)
  (1, 3) --> 3 (1 + 2 + 3 = 6)
  (0, 1) --> 1 (0 + 1 = 1)
  (1, 1) --> 1 (1 since both are same)
  (-1, 0) --> -1 (-1 + 0 = -1)
  (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
  Source: Codewars
*/
function getSum(a, b) {
  if (a > b) {
    let tmp = a;
    a = b;
    b = tmp;
  }
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
}
console.log("getSum V1: ", getSum(1, 3));
console.log("getSum V1: ", getSum(-1, 3));
console.log("getSum V1: ", getSum(0, -1));
console.log("getSum V1: ", getSum(17, -453));

/*
  Given a non-empty array of integers, return the result of multiplying the values together in order. 
  Example: [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
  Source: Codewars
*/
function growMultiply(x) {
  let result = 1;
  for (let i = 0; i < x.length; i++) {
    result *= x[i];
  }
  return result;
}
console.log("growMultiply V1: ", growMultiply([1, 2, 3, 4]));

// Improved version with reduce()
function growMultiplyV2(x) {
  return x.reduce(function (product, n) {
    return product * n;
  });
}
console.log("growMultiply reduce V2: ", growMultiplyV2([1, 2, 3, 4]));

module.exports = {
  countVowels,
  countVowels2,
  printerErrorV2,
  reverseString,
  getSum,
  growMultiply,
};
