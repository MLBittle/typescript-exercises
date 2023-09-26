//Operators, Comparisons, and Conditionals
//Arithmetic operators: addition, subtraction, multiplication, division, modulus
//Comparison operators: equality, inequality, greater than, less than
//Logical operators: AND, OR, NOT
//Using comparison operators in conditional statements
//If statements and their syntax
//Nesting if statements for complex conditions
//The else statement and else if clauses

function add (a: number, b: number): number {
return a + b;
}

console.log(add (5, 5));


function subtraction (a: number, b: number): number {
  return a - b;
}

console.log(subtraction (10, 7));


function multiplication (a: number, b: number): number {
  return a * b;
}

console.log(multiplication(10, 2)); 

function division(a: number, b: number): number {
  return a / b;

}

console.log(division (30, 2));



const a = 1;
const b = 1;

console.log(a === b); // true

const a = 5;
const b = 1;

console.log(a === b); // false