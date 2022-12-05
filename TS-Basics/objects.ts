// Creating objects using object literal notation

let someObject = {
  b: "x",
}; // type of someObject is {b: string}
someObject.b;

// You can either let TypeScript infer your object’s shape for you, or explicitly describe it inside curly braces({}):

let someObject2: { b: string } = {
  b: "x",
}; // type of someObject is {b: string}

// What would have happened if we’d used const to declare the object instead?
// TypeScript inferred b as a number, and not as the literal 12
// Unlike the primitive types (boolean, number, bigint, string, and symbol)
// declaring an object with const won’t hint to TypeScript to infer its type more narrowly.
const someObject3: { b: number } = {
  b: 12,
}; // Still {b: number}

// Using class interface
// {firstName: string, lastName: string} describes the shape of an object, and both the object literal
// and the class instance from the last example satisfy that shape, so TypeScript lets us assign a Person to c

let personObject: {
  firstName: string;
  lastName: string;
} = {
  firstName: "john",
  lastName: "barrowman",
};

class Person {
  constructor(
    public firstName: string, // public is shorthand for this.firstName = firstName
    public lastName: string
  ) {}
}

personObject = new Person("matt", "smith");

// What happens when we add extra properties, or leave out required ones:
let someObject4: { b: number };

//a = {}  // Error TS2741: Property 'b' is missing in type '{}'
// but required in type '{b: number}'.

/* a = {
  b: 1,
  c: 2  
} */
// Error TS2322: Type '{b: number; c: number}' is not assignable
// to type '{b: number}'. Object literal may only specify known
// properties, and 'c' does not exist in type '{b: number}'.

// When you declare a variable in one place and initialize it later,
// TypeScript will make sure that your variable is definitely assigned a value by the time you use it
// let i: number
// let j = i * 3  // Error TS2454: Variable 'i' is used
// before being assigned.
