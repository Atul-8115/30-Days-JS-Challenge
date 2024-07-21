// **************** Array Creation and Access ****************

// Task 1:

let arr = [1,2,3,4,5]

// Classic for loop
for(let i = 0;i<arr.length;i++) {
    console.log(arr[i])
}

// Foreach loop
arr.forEach(element => {
    console.log(element)
})

// for of loop
for(let ele of arr) {
    console.log(ele)
}

// for in loop
for(let ele in arr) {
    console.log(arr[ele])
}

// map
arr.map(ele => {
    console.log(ele)
})

// Task 2:
console.log("First element of the array -> ",arr[0])
console.log("Last element of the array -> ",arr[arr.length-1])