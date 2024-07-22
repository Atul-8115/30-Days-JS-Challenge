// **************** The this Keyword ****************

// Task 7:

const book = {
    title: "The Power of Habit",
    author: "Charles Duhigg",
    year: 1990
}

book.useOfThisKeyword = function () {
    return `Book's Title: ${this.title} && Book's Author: ${this.author}`
}

console.log(book.useOfThisKeyword())