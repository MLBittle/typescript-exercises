//Exercise 4: Functions & Types (Folder: Exercise-4)
//Write a function greet that takes in a name (string) and returns a greeting (string).

function greet(name: string): string {
  return `Hello, ${name}!`;
}

const greeting = greet("Mary Linda");
console.log(greeting);