// **************** Object Iteration ****************

// Task 8:

const books = {
        title: "The Atomic Habit",
        author: "Charles Duhigg",
        year: 1990,   
    }

for(let obj in books) {
    console.log("property -> ",obj," value -> ",books[obj])
}

// Task 9:

console.log("All keys of Object -> ",Object.keys(books))
console.log("All values of Object -> ",Object.values(books))