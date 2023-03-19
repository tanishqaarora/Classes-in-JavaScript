// Classes were introduced in ES6 to provide a cleaner wayto follow object-oriented programming patterns.
// Before clasees, we used constructor functions to do OOP in JS.

// 1. By using: User Construnctor function

function User(name) {
    this.name = name,
    this.getOne = function(){
        console.log("1");
    }
}

const user1 = new User("Harry");

// Now, we can new property (a function) either into the constructor or inside the prototype
// But we don't see the added function in the "User" object if function is added inside the prototype
// Let's add the function "sayHi" into the prototype property of User

User.prototype.sayHi = function() {
    console.log("Hello there");
}

console.log(user1);                // this will not show the function added in the prototype
// user1.sayHi(); 
// user1.one()                    // we can access the prototype function by calling it separately


// 2. By using: class keyword in JS

// Here, getOne added into the constructor
// sayHi added into the prototype

class User {

    constructor(name) {
        this.name = name,
        this.getOne = function(){
            console.log("1");
        }
    }
    // add new function
    sayHi() {
        console.log("Hello there");
    }

}

const user2 = new User("Mike");       // initiate an object of class User
console.log(user2);                   // this will not contain sayHi() [the prototype property]

// To access the prototype property, call it separately on the user object you want to use.
user2.sayHi();