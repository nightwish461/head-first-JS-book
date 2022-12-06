// Named function
function greetFunction(name: string) {
  return "hello " + name;
}

// Function expression
let greetFunction2 = function (name: string) {
  return "hello " + name;
};

// Arrow function expression
let greetFunction3 = (name: string) => {
  return "hello " + name;
};

// Shorthand arrow function expression
let greetFunction4 = (name: string) => "hello " + name;

// Function constructor --> avoid using it
let greetFunction5 = new Function("name", 'return "hello " + name');

/*
    Like in object and tuple types, you can use ? to mark parameters as optional. 
    When declaring your function’s parameters, required parameters have to come first, followed by optional parameters.
*/
function logFunct(message: string, userId?: string) {
  let time = new Date().toLocaleTimeString();
  console.log(time, message, userId || "Not signed in");
}

logFunct("Page loaded"); // Logs "12:38:31 PM Page loaded Not signed in"
logFunct("User signed in", "da763be"); // Logs "12:38:31 PM User signed in da763be"

// Providing default parameter values

function logFunct2(message: string, userId = "Not signed in") {
  let time = new Date().toISOString();
  console.log(time, message, userId);
}

log2("User clicked on a button", "da763be"); // Output: User clicked on a button da763be
log2("User signed out"); // Output: User signed out Not signed in
