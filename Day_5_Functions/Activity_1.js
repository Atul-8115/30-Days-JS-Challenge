
// *************** Function Declaration ***************

// Task 1:
function checkOddOrEven(num) {
    if(num % 2 === 0) {
        console.log("The given number is even")
    } else {
        console.log("The given number is odd")
    }
}

let number = 8
checkOddOrEven(8)

// Task 2:
const square = (num) => {
    return num * num
}

let num = 8
console.log("Square of the number is -> ",square(num)) 