const year = 1600

if( (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    console.log("This year is a leap year -> ",year)
} else {
    console.log("This year is not a leap year -> ",year)
}