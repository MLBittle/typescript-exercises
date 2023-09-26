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
var Student = /** @class */ (function () {
    // Define the constructor here
    function Student(studentName, studentAge, studentGrade) {
        this.studentName = studentName;
        this.studentAge = studentAge;
        this.studentGrade = studentGrade;
    }
    // Define the displayInfo method here
    Student.prototype.displayInfo = function () {
        console.log("Student name: ".concat(this.studentName));
        console.log("Student age: ".concat(this.studentAge));
        console.log("Student grade: ".concat(this.studentGrade));
    };
    // Define the isPassing method here
    Student.prototype.isPassing = function (gradeThreshold) {
        return this.studentGrade >= gradeThreshold;
    };
    return Student;
}());
// Instantiate a new student object and call the methods to test your class
var newStudent = new Student("Mary Linda Bittle", 64, 73);
student.displayInfo(); // Student name: Mary Linda Bittle, Student age: 64, Student grade: 73
var isPassing, student, isPassing;
( > 70); // true
