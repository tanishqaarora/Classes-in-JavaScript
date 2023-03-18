// Classes were introduced in ES6 to provide a cleaner wayto follow object-oriented programming patterns.
// Before clasees, we used constructor functions to do OOP in JS.

// 1. By using: User Construnctor function

function User(name) {
    this.name = name
}

const user1 = new User("Harry");
console.log(user1);

// Add a new method (a function) to this constructor
// this can be done by adding the function  into the prototype property of User

User.prototype.sayHi = function() {
    console.log("Hello there");
}

user1.sayHi();