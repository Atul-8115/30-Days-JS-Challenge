// *************** Destructuring ***************

// Task 3:

const arr = [1,2,3,4,5,8]

const [first, , , , ,last] = arr

console.log(first," ",last)

const [first1, ...rest] = arr

const last1 = rest.pop()

console.log(first1," ",last1)

// Task 4:
const book = {
    name: "Rich Dad Poor Dad",
    author: "Robert T. Kiyoshaki",
    year: 1990
}

const {name, author} = book

console.log(name," ",author)