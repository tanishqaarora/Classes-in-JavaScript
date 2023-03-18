

// 2. By using: class keyword in JS

class User {

    constructor(name) {
        this.name = name
    }
    // add new function
    sayHi() {
        console.log("Hello there");
    }

}

const user2 = new User("Mike");
console.log(user2);
user2.sayHi();



