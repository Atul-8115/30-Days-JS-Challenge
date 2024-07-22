// **************** Object Methods ****************

// Task 3:
const book = {
    title: "The Atomic Habit", 
    author: "Charles Duhigg", 
    year: 1998
}

book.objectMethod = function () {
    return `title -> ${this.title} , author -> ${this.author}`
}

console.log(book.objectMethod())

// Task 4:
book.updateYearOfPublication = function (year) {
    this.year = year
}

book.updateYearOfPublication(2000)
console.log("Updated object will be -> ",book)