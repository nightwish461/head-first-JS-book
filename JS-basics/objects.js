/*
++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++  Objects in JS +++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++
*/

// Creating objects using object literal notation with curly braces {...}
// Each object consist of key-value pairs

let user = {
    name: 'Marina',
    age: 30,
    email: 'm@gmail.com',
    location: 'Berlin'
};

console.log(user);

// +++++++++ accessing properties in JS ++++++++++++
// accessing properties - using .dot notation 
console.log("accessing properties with dot notation: " + user.name);

nameProperty = 'name';
console.log("accessing properties with [] : " + user['name']);
console.log("accessing properties with [] : " + user[nameProperty]);

// Using object destructuring
const { name, age } = user;
console.log("accessing properties using object destructuring: " + name);
console.log("accessing properties using object destructuring: " + age);

// Using alias variable
let cat = {
    name: 'Kitty',
    age: 5
};
const { name: catName } = cat;
console.log("accessing properties using ALIAS and object destructuring: " + catName);

// Dynamic property name
const property2 = 'age';
const {[property2]: someProperty} = cat;
console.log("accessing properties using dynamic property name: " + someProperty); // will return age=5

// Using Object.keys() method
console.log("using Object.keys(): ", Object.keys(cat)); // Output: (2) ['name', 'age']

// Using Object.values() method
console.log("using Object.values(): ",  Object.values(cat)); // Output: (2) ['Kitty', 5]


