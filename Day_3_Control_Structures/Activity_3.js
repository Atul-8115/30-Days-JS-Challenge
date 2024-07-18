// *************  Switch Case  *************

// Task 4:
let day = 7

switch(day) {
    case 1:
        console.log("Sunday")
        break;
    case 2:
        console.log("Monday")
        break;
    case 3:
        console.log("Tuesday")
        break;
    case 4:
        console.log("Wednesday")
        break;
    case 5:
        console.log("Thursday")
        break;
    case 6:
        console.log("Friday")
        break;
    case 7:
        console.log("Saturday")
        break;
    default:
        console.log("Please enter number 1-7")
}

// Task 5:

let marks = 90
let grade;

switch(marks) {
    case 90:
        grade = 'A'
        break
    case 80:
        grade = 'B'
        break
    case 70:
        grade = 'C'
        break
    case 40:
        grade = 'D'
        break
    default:
        grade = 'F'
}

console.log(grade)