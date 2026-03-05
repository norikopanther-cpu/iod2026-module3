//Q1 
const ucFirstLetters = (str) => {
    const words = str.split(' ')
    //console.log(words) // ['los', 'angeles']
    const capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    })
    console.log(capitalizedWords) 
    return capitalizedWords.join(' ')
//return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}
//console.log(ucFirstLetters("los angeles") ) //Los Angeles
const result = ucFirstLetters("los angeles")
console.log(result)

//Q2
//const truncate = (str, maxLength) => {
   /* if (str.length > maxLength) {
      const truncatedString = str.slice(0, maxLength)
        return truncatedString + '...'
    }
    return str */

//console.log(truncate('This text will be truncated if it is too long', 25)) // This text will be truncat...

const truncateSentence = (string, maxLength) => {
    if (string.length > maxLength) {
        let truncatedString = string.slice(0, maxLength)
        return truncatedString + '...'
    } else {
        return string
    }
}
console.log(truncateSentence("This text will be truncated if it is too long", 25))

//Q3
const animals = ['Tiger', 'Giraffe'] 
animals.push('Elephant', 'Zebra') // ['Tiger', 'Giraffe', 'Elephant', 'Zebra']
animals.unshift('Lion', 'Monkey') // ['Lion', 'Monkey', 'Tiger', 'Giraffe', 'Elephant', 'Zebra']
animals.sort() // ['Elephant', 'Giraffe', 'Lion', 'Monkey', 'Tiger', 'Zebra']
const replaceMiddleAnimal = (newValue) => {
    animals.splice(2, 1, newValue)
}
replaceMiddleAnimal('Bear') // ['Elephant', 'Giraffe', 'Bear', 'Monkey', 'Tiger', 'Zebra']


const findMatchingAnimals = (beginsWith) => {
    const matchingAnimals = animals.filter(animal => animal.startsWith(beginsWith))
    return matchingAnimals
}
const animalsStartingWithT = findMatchingAnimals('T') // ['Tiger']

console.log(animals)
console.log(animalsStartingWithT)