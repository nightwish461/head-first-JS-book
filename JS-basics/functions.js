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

module.exports = { countVowels, countVowels2, printerErrorV2 };
