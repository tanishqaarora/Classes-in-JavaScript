
// BOOK CLASS
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary(){
        return `${this.title} was written by ${this.author} in year ${this.year}`;
    }

}

// MAGAZINE SUBCLASS
class Magazine extends Book {
    constructor(title, author, year, month) {
        // call the parent constructor
        super(title, author, year);
        this.month = month;
    }
}

// Instantiate Magazine
const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');
console.log(mag1);
console.log(mag1.getSummary());

