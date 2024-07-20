// *************** Higher Order Function ***************

// Task 9:

function higherOrderFunction (anotherFunction,num) {
    let n = 1;
    while(num--) {
        anotherFunction(n)
        n++
    }
}

function anotherFunction(num) {
    console.log("I'm calling ",num)
}

higherOrderFunction(anotherFunction,5)

// Task 10:

function higherOrderFunction2 (function1, function2, val) {
    let result = function1(val)
    let finalResult = function2(result)
    return finalResult
}

function function1(val) {
    return val * 10
}

function function2(result) {
    return result * 10
}

const result = higherOrderFunction2(function1,function2,5)
console.log("Printing the result -> ",result)