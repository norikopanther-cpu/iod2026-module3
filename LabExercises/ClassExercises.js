const numbers = [1, 2, 3, 4, 6, 7];

// add 0 at beginning
numbers.unshift(0) // [0, 1, 2, 3, 4, 6, 7]

// add 5 at position after number "4"
numbers.splice(5, 0, 5) // [0, 1, 2, 3, 4, 5, 6, 7]

// update number 4 with "four"
numbers.splice(4, 1, "four") // [0, 1, 2, 3, "four", 5, 6, 7]

function updateElementInArray(numberToMatch, stringToUpdate) {
const index = numbers.indexOf(numberToMatch)
if (index !== -1) {
    numbers.splice(index, 1, stringToUpdate);
    console.log(numbers)
} else {
    console.log(`Number ${numberToMatch} not found in the array.`)
}
}
updateElementInArray(4, "four") // [0, 1, 2, 3, "four", 5, 6, 7]
updateElementInArray(10, "ten") // Number 10 not found in the array.    


    