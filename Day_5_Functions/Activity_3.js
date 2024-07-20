// *************** Arrow Functions ***************

// Task 5:

const sumOfTwoNumbers = (num1, num2) => {
    return num1+num2
}

// console.log(sumOfTwoNumbers(10,15))

// Task 6:

// Using spread operator
let checkCharPresentOrNot = (str, ch) => {
    console.log(str)
    const chars = [...str]
    for(let i = 0;i<chars.length;i++) {
        if(chars[i] === ch) {
            return true
        }
    }
    return false
}

// Using for...of loop
checkCharPresentOrNot = (str, ch) => {
    for(const char of str) {
        if(char === ch) {
            return true
        }
    }
    return false
}

// Using for loop
checkCharPresentOrNot = (str, ch) => {
    for(let i = 0;i<str.length;i++) {
        if(str[i] === ch) {
            return true
        }
    }
    return false
}


console.log(checkCharPresentOrNot("Atul", 'A'))