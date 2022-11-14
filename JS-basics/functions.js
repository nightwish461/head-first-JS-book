/*
    ### Creating an arrow function ###
*/

// add as arrow function
//In this example, the arrow function has one expression x + y so it returns the result of the expression.
let addArrow = (x,y) => x+y;
console.log(addArrow(10, 100));

// The typeof operator returns function indicating the type of arrow function.
console.log(typeof addArrow); // function

// The arrow function is also an instance of the Function type as shown in the following example:
console.log(addArrow instanceof Function); // true

