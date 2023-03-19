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