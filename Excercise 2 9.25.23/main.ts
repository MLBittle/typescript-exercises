//Exercise 2: Arrays & Tuples (Folder: Exercise-2)
//Declare an array named subjects containing strings.
//Declare a tuple named student that contains a string (for the name) and a number (for the age).

const subjects: string[] = ["HTML", "CSS", "JavaScript", "TypeScript"];

const student: [string, number] = ["Mary Linda", 64];


console.log(subjects); //"HTML", "CSS", "JavaScript", "TypeScript"


const studentName = student[0];
const studentAge = student[1];

console.log(studentName); // Mary Linda
console.log(studentAge); // 64
