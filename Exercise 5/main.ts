//
//Exercise 5: Classes with TypeScript (Folder: Exercise-5)
//Objective: Create a class named Student in TypeScript. The class should define certain properties and methods.

//Properties:
//studentName: string
//studentAge: number
//studentGrade: number
//Constructor:
//The constructor should take in the above three properties when instantiating a new student object.
//Methods:
//displayInfo(): Log the student's name, age, and grade to the console.
//isPassing(gradeThreshold: number): Takes in a grade threshold and returns a boolean indicating if the student's grade is above the threshold.

//typescriptCopy code

class Student {
    // Define the properties here
    studentName: string;
    studentAge: number;
    studentGrade: number;
    
    // Define the constructor here
    constructor(studentName: string, studentAge: number, studentGrade: number) {
      this.studentName = studentName;
      this.studentAge = studentAge;
      this.studentGrade = studentGrade;
    }
    // Define the displayInfo method here

    displayInfo(): void {
      console.log(`Student name: ${this.studentName}`);
      console.log(`Student age: ${this.studentAge}`);
      console.log(`Student grade: ${this.studentGrade}`);
    }
    
    // Define the isPassing method here
    isPassing(gradeThreshold: number): boolean {
      return this.studentGrade >= gradeThreshold;
    }

  }
// Instantiate a new student object and call the methods to test your class

const newStudent = new Student("Mary Linda Bittle", 64, 73);

student.displayInfo(); // Student name: Mary Linda Bittle, Student age: 64, Student grade: 73

const isPassing: boolean, student.isPassing(>70); // true