// *************** Function Parameters and Default Values ***************

// Task 7:
const productOfTwoNumber = (num1, num2 = 1) => {
    return num1 * num2
}

console.log(productOfTwoNumber(5,3))

// Task 8:
const greetingMessage = (name,age = 10) => {
    console.log(`Hello Dear ${name} Happy Birthday your are now ${age} years old.`)
}

greetingMessage("Atul",22)