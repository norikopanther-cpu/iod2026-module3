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


//Exercise: Count unique fruits
const fruits = ['Apple', 'banana', 'orange', 'aPPle', 'Banana', 'ORANGE']
const formattedFruits = fruits.map(fruit => fruit.toLowerCase()) // ['apple', 'banana', 'orange', 'apple', 'banana', 'orange']
const uniqueFruits = new Set(formattedFruits) // Set(3) {'apple', 'banana', 'orange'}
console.log(uniqueFruits.size) // 3

/*let fruitsStartWithCapitalLetter = 0
for (let fruit of fruits) {
    if (fruit[0] === fruit[0].toUpperCase()) {
        fruitsStartWithCapitalLetter++
    }
}
console.log(fruitsStartWithCapitalLetter) 

let fruitsOnlyWithCapitalLetters = 0
for (let fruit of fruits) {
    if (fruit === fruit.toUpperCase()) {
        fruitsOnlyWithCapitalLetters++
    }
}
console.log(fruitsOnlyWithCapitalLetters) 

let fruitsWithMiddleCapitalLetter = 0
for (let fruit of fruits) {
    if (fruit.slice(1, -1).includes(fruit[0].toUpperCase())) {
        fruitsWithMiddleCapitalLetter++
    }
}
console.log(fruitsWithMiddleCapitalLetter)  */

//Write a function to consume destricting student objects
//and return a string with the format: "Name: [name], Age: [age], Grade: [grade]"
const student = 



