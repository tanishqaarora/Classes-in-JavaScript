
class Book {

    static newBooks = true;
    static oldBooks = true;

    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary(){
        return `${this.title} was written by ${this.author} in year ${this.year}`;
    }

    getAge(){
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} old`;
    }

}

const book1 = new Book('Book One', 'John Doe', '2013');

// instance of Book do not contain static methods
console.log(book1);

// static methods can only be accessed by the class
console.log(Book.newBooks);
console.log(Book.oldBooks);