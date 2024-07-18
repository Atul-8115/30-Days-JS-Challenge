// *************  Nested if-else Statements  *************

// Task 3:

let num1 = 10
let num2 = 15
let num3 = 1

if(num1 > num2) {
    if(num2 > num3) {
        console.log("First number is greates number -> ",num1)
    } else {
        console.log("Third number is greatest number -> ",num3)
    }
} else {
    if(num2 > num3) {
        console.log("Second number is greatest number -> ",num2)
    } else {
        console.log("Third number is greatest number -> ",num3)
    }
}