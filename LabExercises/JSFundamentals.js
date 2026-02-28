//Q1
console.log("" + 1 + 0);
console.log("" - 1 + 0);
console.log(true + false);
console.log(6 / "3");
console.log("2" * "3");
console.log(4 + 5 + "px");
console.log("$" + 4 + 5);
console.log("4" - 2);
console.log("4px" - 2);
console.log("-9" + 5);
console.log("-9" - 5);
console.log(null + 1);
console.log(undefined + 1);
console.log(" \t \n" - 2);  

//Q2
let three = "3"
let four = "4"
let thirty = "30"
//what is the value of the following expressions?
let addition = three + four
let multiplication = three * four
let division = three / four
let subtraction = three - four
let lessThan1 = three < four
let lessThan2 = thirty < four
console.log(addition);
console.log(multiplication);
console.log(division);
console.log(subtraction);
console.log(lessThan1);
console.log(lessThan2); 
//fix the problems
let additionFixed = Number(three) + Number(four)
let multiplicationFixed = Number(three) * Number(four)
let divisionFixed = Number(three) / Number(four)
let subtractionFixed = Number(three) - Number(four)
let lessThan1Fixed = Number(three) < Number(four)
let lessThan2Fixed = Number(thirty) < Number(four)
console.log(additionFixed);
console.log(multiplicationFixed);
console.log(divisionFixed);
console.log(subtractionFixed);
console.log(lessThan1Fixed);
console.log(lessThan2Fixed);    

//Q3
if (0) console.log('#1 zero is true')
if ("0") console.log('#2 zero is true')
if (null) console.log('null is true')
if (-1) console.log('negative is true')
if (1) console.log('positive is true')
// Seven types of falsy values: 0, -0, null, undefined, NaN, false, and "" (empty string)

//Q4
//Full operators:
let a = 2, b = 3;
let result = `${a} + ${b} is `;

if (a + b < 10) {
  result += 'less than 10';
} else {
  result += 'greater than 10';
}
console.log(result);

//Full arrow function:
const resultArrowFunction = (a, b) => {
  let result = `${a} + ${b} is `;
  if (a + b < 10) {
    result += 'less than 10';
  } else {
    result += 'greater than 10';
  }
  return result;
};
console.log(resultArrowFunction(a, b));

//Ternary operator:
let resultTernary = `${a} + ${b} is ` + ((a + b < 10) ? 'less than 10' : 'greater than 10');
console.log(resultTernary);

//Q5 Function Expression Syntax:
function getGreeting (name) {
    return 'Hello ' + name + '!';
}
console.log(getGreeting('Alice'));

//Arrow Function Syntax:
const getGreetingArrow = (name) => {
    return 'Hello ' + name + '!';
}
console.log(getGreetingArrow('Bob'));

//Ternary Operator Syntax:
const getGreetingTernary = (name) => 'Hello ' + name + '!';
console.log(getGreetingTernary('Charlie')); 

//Q6
const westley = {
    firstName: 'Westley',
    lastName: 'Smith',
    numFingers: 5,
}

const rugen = {
    firstName: 'Rugen',
    lastName: 'Black',
    numFingers: 6,
}

const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya',
    numFingers: 5,

    //Regular function syntax:
    getCatchPhrase(person) {
      if (person.numFingers === 6) {
      return 'You killed my father. Prepare to die.';
    } else {
      return 'Nice to meet you.';
    }
    },

    //Arrow function syntax:
    getCatchPhraseArrow: (person) => {
      if (person.numFingers === 6) {
      return 'You killed my father. Prepare to die.';
    } else {
      return 'Nice to meet you.';
    }
    },   

    //Ternary operator syntax:
     getCatchPhraseTernary: (person) => 
     person.numFingers === 6 
     ? 'You killed my father. Prepare to die.' 
     : 'Nice to meet you.',

    greeting(person) {
    let greeting = 
    `Hello ${person.firstName} ${person.lastName}, my name is ${this.firstName} ${this.lastName}. `;
    
    console.log("Regular: " + greeting + this.getCatchPhrase(person));
    console.log("Arrow: " + greeting + this.getCatchPhraseArrow(person));
    console.log("Ternary: " + greeting + this.getCatchPhraseTernary(person));
  },
};

inigo.greeting(westley);
inigo.greeting(rugen);





