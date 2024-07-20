// *************** Function Expression ***************

// Task 3:
const maxNumber = (num1, num2) => {
    if(num1 >= num2) {
        return num1
    } else {
        return num2
    }
}

console.log("Greater number is -> ",maxNumber(5,6))

// Task 4:
const concateTwoStrings = (str1, str2) => {
    return str1 + str2
}

console.log("Concatinated strings are -> ",concateTwoStrings("Atul ","Pandey"))