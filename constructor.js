// Constructors in JS are special functions that are used to construct objects.
// they are special because they are invoked along with a new operator in JS


// one rule of the "this" variable is that when it is used inside a function it points to the global object
// but when it is used inside a method (a function in an object) it would point to that object

function Person() {
    this.name = "John",
    this.occupation = "Software Developer",
    this.gender = "Male"
}

// This statement will create a new object and stores a reference to it in the John variable.
// The object has all properties specified in Person constructor
// This will give the Person function the power of a constructor (the power to construct objects)
const John = new Person();

console.log(John);
console.log(typeof John);  // object