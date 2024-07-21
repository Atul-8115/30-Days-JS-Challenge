// **************** Array Methods(Intermediate) ****************

// Task 7:
const arr = [1,2,3,4,5]

const doubledArr = arr.map((ele) => ele*2)

console.log('Printing doubled array -> ',doubledArr)

// Task 8:
const arr2 = [1,2,3,4,5,6,7,8,9,10]

const filteredArray = arr2.filter((ele) => {
    if(ele % 2 === 0) {
        return ele
    }
})

console.log("Printing array after applying filter on the array -> ",filteredArray)

// Task 9:
const sum = filteredArray.reduce((acc,crrVal) => acc + crrVal, 0)

console.log("Sum of the array using reduce method -> ",sum)