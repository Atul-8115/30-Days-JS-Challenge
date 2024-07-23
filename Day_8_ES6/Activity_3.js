// *************** Spread and Rest Operators ***************

// Task 5:

const arr1 = [1,2,3,4,5,6]

const anotherArray = [...arr1,7,8,9,10]

console.log(anotherArray)

// Task 6:

function sumAllTheNumber(num1,num2,...remainingNum) {
    let sum = num1 + num2
    for(let num of remainingNum) {
        sum += num
    }
    return sum
}

const result = sumAllTheNumber(1,2,3,4,5)
console.log("Printing result -> ",result)