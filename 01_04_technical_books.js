class Book {
    constructor(title, author, ISBN, numCopies) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.numCopies = numCopies;
    }

    // Getter
    get availability() {
        return this.getAvailability();
    }

    // Method
    getAvailability() {
        if (this.numCopies === 0) {
            return "Out of stock";
        } else if (this.numCopies < 10) {
            return "Low stock";
        }
        return "In stock";     
    }

    sell(numCopiesSold = 1) {
        this.numCopies -= numCopiesSold;
    }

    restock(numCopiesStocked = 5) {
        this.numCopies += numCopiesStocked;
    }
}

class TechnicalBook extends Book {
    constructor(title, author, ISBN, numCopies, edition) {
        super(title, author, ISBN, numCopies);  // Inherits these arguments from this 'Books' class
        this.edition = edition                  // Extend/Add in one more argument
    }

    getEdition() {
        return `The current edition of this book is ${this.edition}.`;
    }
}

const CrackingTheCodingInterview = new TechnicalBook(
    "Cracking The Coding Interview",
    "Gayle Laakmann McDowell",
    "0984782869",
    5,
    2.3
);

console.log(CrackingTheCodingInterview.getAvailability())
console.log(CrackingTheCodingInterview.ISBN)
console.log(CrackingTheCodingInterview.getEdition())