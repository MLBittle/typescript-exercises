//Exercise 3: Interfaces (Folder: Exercise-3)
//Use the above interface and object. Add another method in the interface called brake and implement it in the car object.
var car = {
    brand: "Toyota",
    speed: 120,
    accelerate: function () {
        console.log("The ".concat(this.brand, " is accelerating"));
    },
    brake: function () {
        console.log("The ".concat(this.brand, " is braking"));
    }
};
car.accelerate();
car.brake();