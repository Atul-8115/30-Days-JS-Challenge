// **************** Nested Objects ****************

// Task 5:

const library = {
    name: "Central Library",
    books: [
        {
            title: "The Atomic Habit",
            author: "Charles Duhigg",
            year: 1990
        },
        {
            title: "The Power of Habit",
            author: "Charles Marks",
            year: 2000
        },
        {
            title: "Rich Dad Poor Dad",
            author: "Robert T. Kiyosaki",
            year: 1980
        }
    ]
}

console.log(library)

// Task 6:
console.log("Name of the library -> ",library.name)
console.log("Printing titles of all the books -> ")

library.books.forEach((obj) => console.log(obj.title))