// *************** Enhanced Object Literals ***************

// Task 8:

const title = "Book1"
const author = "Atul"

const details = function() {
    console.log(`${this.title} is written by ${this.author}`)
}

const book = {title, author, details: details}

console.log(book)
book.details();

// Task 9:

const propertyName = "name"
const name = "Atul"

const person = {
    [propertyName] : name
}

console.log(person.name)