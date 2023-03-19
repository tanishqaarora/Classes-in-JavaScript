

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

const user1 = new User("Mike");       // created a new object of class User
console.log(user1);                   // this will not contain sayHi() [the prototype property]

// To access the prototype property, call it separately on the user object you want to use.
user1.sayHi();



