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

//Q4
const camelCase = (CSSPropertyRule) => { // constructing a function called camelCase, and setting an input parameter called CSSPropertyRule.
    const words = CSSPropertyRule.split('-') // splitting the input string into an array of words, using the hyphen as a separator.
    const camelCased = words.map((word, index) => {
        if (index === 0) {
            return word // if the index of the current word is 0 (the first word), return the word as is (in lowercase).
        } else {
            return word.charAt(0).toUpperCase() + word.slice(1) // if the index is not 0, capitalize the first letter of the word (charAt(0)) and concatenate/combine it with the rest of the word (slice(1)) in lowercase.
        }
    })
    return camelCased.join('') // joining the array of words back into a single string without any spaces or hyphens, and returning the final camelCase string.
}
console.log(camelCase('margin-left'))

const camelCaseFor = (CSSPropertyRule) => {
  const words = CSSPropertyRule.split('-'); // Split the input string into an array of words using the hyphen as a separator
  let result = ''; // Initialize an empty string to build the camelCase result
  
  words.forEach((word, index) => {
    if (index === 0) {
      result += word;
    } else {
      result += word.charAt(0).toUpperCase() + word.slice(1);
    }
  });
  return result;
};
console.log(camelCaseFor('background-image'))

const camelCaseCond = (CSSPropertyRule) => {
  const words = CSSPropertyRule.split('-');
  let result = '';

  for (let i = 0; i < words.length; i++) {
    result += (i === 0)
      ? words[i]
      : words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return result;
    };
    console.log(camelCaseCond('display'))

//Q5
let twentyCents = 0.20 
let tenCents = 0.10
let fixedTwenty = twentyCents.toFixed(2); 
let fixedTen = tenCents.toFixed(2); 
console.log(fixedTwenty + fixedTen) // "0.200.10" (string concatenation instead of addition)

const currencyAddition = (float1, float2) => {
  const cents1 = Math.round(float1 * 100); // Convert the first float to cents (integer)
  const cents2 = Math.round(float2 * 100); // Convert the second float to cents (integer)
  const totalCents = cents1 + cents2; // Add the two amounts in cents
  return totalCents / 100; // Convert the total back to dollars (float) and return it
};
console.log(currencyAddition(0.20, 0.10));

const currencyOperation = (float1, float2, operation) => { // Define a function that takes two floats and an operation as parameters
  const cents1 = Math.round(float1 * 100);
  const cents2 = Math.round(float2 * 100);
  let result;

  switch (operation) {
    case '+':
      result = cents1 + cents2;
      break;

    case '-':
      result = cents1 - cents2;
      break;

    case '*':
      result = (cents1 * cents2) / 100;
      break;

    case '/':
      result = (cents1 / cents2) * 100;
      break;

    default:
      throw new Error("Invalid operation");
  }

  return result / 100;
};

console.log(currencyOperation(0.2, 0.1, '+'));
console.log(currencyOperation(0.3, 0.1, '-'));
console.log(currencyOperation(0.2, 0.1, '*'));
console.log(currencyOperation(0.2, 0.1, '/'));

// Q5 d - skipped for now

// Q6
const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow'] 
const unique = (duplicatesArrayColours) => {
  return [...new Set(duplicatesArrayColours)]; 
}
console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]

/*A Set is a special object in JavaScript that only stores unique values.
By converting the input array to a Set, we automatically remove any duplicate values. 
Then, we use the spread operator (...) to convert the Set back into an array, which contains only the unique values from the original array. 
Finally, we return this new array of unique values. */

const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43] 
const uniqueTestScores = (duplicatesArrayScores) => {
    return [...new Set(duplicatesArrayScores)];
};
console.log(uniqueTestScores(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]

// Q7
const books = [ 
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 }, 
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }, 
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 }, 
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 }, 
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 }, 
];
const getBookTitle = (bookId) => {
    const book = books.find(book => book.id === bookId); // Use the find method to search for the book with the matching id
    return book ? book.title : null; // If the book is found, return its title; otherwise, return null
}
console.log(getBookTitle(3)) // "1984"
console.log(getBookTitle(10)) // null

const getOldBooks = (year) => {
    return books.filter(book => book.year <= year); // Use the filter method to create a new array of books published before the specified year
}
console.log(getOldBooks(1950)) 

const addGenre = () => {
    return books.map(book => { // Use the map method to create a new array of books with the added genre property
        return { ...book, genre: 'Classic' }; // Use the spread operator to copy the existing properties of the book and add a new genre property with the value 'Classic'
    });
}
console.log(addGenre()) 

// Q7 d and e are skipped for now

// Q8
const phoneBookABC = new Map() //an empty map to begin with 
phoneBookABC.set('Annabelle', '0412312343') 
phoneBookABC.set('Barry', '0433221117') 
phoneBookABC.set('Caroline', '0455221182')

const phoneBookDEF = new Map()
phoneBookDEF.set('David', '0422334455')
phoneBookDEF.set('Emily', '0444556677')
phoneBookDEF.set('Frank', '0466778899')

const phoneBookDEFExtended = new Map([...phoneBookDEF, ['Grace', '0488990011']]) // Create a new Map by spreading the entries of phoneBookDEF and adding a new entry for Grace

for (let [name, number] of phoneBookABC) {
  console.log(`${name}: ${number}`)
}

for (let [name, number] of phoneBookDEF) {
  console.log(`${name}: ${number}`)
}

for (let [name, number] of phoneBookDEFExtended) {
  console.log(`${name}: ${number}`)
}   

phoneBookABC.set('Caroline', '0123456789') // Update Caroline's number in phoneBookABC
console.log('Caroline (Updated):', phoneBookABC.get('Caroline')) // Retrieve and log Caroline's updated number from phoneBookABC

const printPhoneBook = (phoneBook) => {
  for (let [name, number] of phoneBook) {
    console.log(`${name}: ${number}`)
  }
}
console.log('Phone Book:')
printPhoneBook(phoneBookABC)
printPhoneBook(phoneBookDEF)
printPhoneBook(phoneBookDEFExtended)   

const mergePhoneBooks = (phoneBook1, phoneBook2, phoneBook3) => {
  return new Map([...phoneBook1, ...phoneBook2, ...phoneBook3]) // Create a new Map by spreading the entries of all three phone books, with phoneBook3 taking precedence in case of duplicate keys
}
const mergedPhoneBook = mergePhoneBooks(phoneBookABC, phoneBookDEF, phoneBookDEFExtended)
console.log('Merged Phone Book:')
printPhoneBook(mergedPhoneBook) 

// Q9
let salaries = { 
    "Timothy" : 35000, 
    "David" : 25000, 
    "Mary" : 55000, 
    "Christina" : 75000, 
    "James" : 43000 
};
const sumSalaries = (salaries) => {
    let total = 0; // Initialize a variable to hold the total salary
    for (let salary of Object.values(salaries)) { // Use Object.values to get an array of salary values and iterate over them
        total += salary; // Add each salary to the total
    }
    return total; // Return the final total salary
}
console.log(sumSalaries(salaries)) // 233000

const averageSalary = (salaries) => {
    const total = sumSalaries(salaries); // Call the sumSalaries function to get the total salary
    const numberOfEmployees = Object.keys(salaries).length; // Use Object.keys to get an array of employee names and determine the number of employees
    return total / numberOfEmployees; // Calculate and return the average salary by dividing the total by the number of employees
}
console.log(averageSalary(salaries)) // 46600

function topEarner(salaries) {
    let highestSalary = 0;
    let topEmployee = '';

    for (let [employee, salary] of Object.entries(salaries)) { // Use Object.entries to get an array of [employee, salary] pairs and iterate over them
        if (salary > highestSalary) { // Check if the current salary is greater than the highest salary found so far
            highestSalary = salary; // Update the highest salary
            topEmployee = employee; // Update the top employee's name
        }
    }
    return topEmployee; // Return the name of the employee with the highest salary
}
console.log(`Top Earner: ${topEarner(salaries)} for $${salaries[topEarner(salaries)]}.`) 

// Q10
const today = new Date(); 
console.log('Current time is ' + today.toLocaleTimeString()) 

const hours = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();
console.log(`Current time is ${hours}:${minutes}:${seconds}`)
console.log(today.getHours() + ' hours have passed so far today')   
console.log(`Current date is ${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`)

const locations = [
    { name: 'Sydney', timezone: 'Australia/Sydney' },
    { name: 'New York', timezone: 'America/New_York' },
    { name: 'London', timezone: 'Europe/London' },
    { name: 'Tokyo', timezone: 'Asia/Tokyo' },
    { name: 'Paris', timezone: 'Europe/Paris' },
];
locations.forEach(location => {
    const localTime = new Date().toLocaleTimeString('en-US', { timeZone: location.timezone });
    console.log(`Current time in ${location.name} is ${localTime}`);
});

const daysInBetween = (date1, date2) => {
    const oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in one day
    const diffInTime = Math.abs(date2.getTime() - date1.getTime()); // Calculate the absolute difference in time between the two dates in milliseconds
    return Math.round(diffInTime / oneDay);
}
const date1 = new Date('2026-03-14');
const date2 = new Date('2019-06-03');
console.log(`Days between ${date1.toDateString()} and ${date2.toDateString()}: ${daysInBetween(date1, date2)}`)

const dateDifference = (date1, date2) => {
    if (date1 > date2) {
        [date1, date2] = [date2, date1]; // Swap dates if date1 is later than date2
    }
    let years = date2.getFullYear() - date1.getFullYear();
    let months = date2.getMonth() - date1.getMonth();
    let days = date2.getDate() - date1.getDate();

    if (days < 0) {
    months--; // If the day of date2 is less than the day of date1, we need to borrow days from the previous month
    const lastMonth = new Date(date2.getFullYear(), date2.getMonth(), 0); // Get the last day of the previous month
    days += lastMonth.getDate();
    }

    if (months < 0) {
    years--;
    months += 12;
    }

        return { years, months, days };
};

const date3 = new Date('2021-05-03');
const date4 = new Date('2023-10-07');

const diff1 = dateDifference(date1, date2); // Calculate the difference between date1 and date2 in years, months, and days
console.log(`Difference between ${date1.toDateString()} and ${date2.toDateString()}: ${diff1.years} years, ${diff1.months} months, ${diff1.days} days`);

const diff2 = dateDifference(date1, date3);
console.log(`Difference between ${date1.toDateString()} and ${date3.toDateString()}: ${diff2.years} years, ${diff2.months} months, ${diff2.days} days`);

const diff3 = dateDifference(date1, date4);
console.log(`Difference between ${date1.toDateString()} and ${date4.toDateString()}: ${diff3.years} years, ${diff3.months} months, ${diff3.days} days`);