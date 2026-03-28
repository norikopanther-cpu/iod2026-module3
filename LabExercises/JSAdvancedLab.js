//Q1
//A decorator function is a function that wraps another function and adds extra behaviour without changing the original function.
//A decorator takes a function, enhances it, and returns a new function.

/*
function makeCounter() { 
    let currentCount = 0; 
    return function() { 
        currentCount++; 
        console.log(currentCount) 
        // document.getElementById("counter1").innerHTML += currentCount + "<br>" ;
        return currentCount; 
    }; } 
    
    let counter1 = makeCounter(); 
    counter1(); // 1 
    counter1(); // 2

    let counter2 = makeCounter();
    counter2(); // 1 
    counter2(); // 2 
    counter1(); // 3

function makeCounterStartFrom(startFrom) {
    let currentCount = startFrom; 
    return function() { 
        currentCount++; 
        console.log(currentCount) 
        return currentCount; 
    }; } 
    
    let counter3 = makeCounterStartFrom(5); 
    counter3(); // 6 
    counter3(); // 7

function makeCounterIncrementBy(startFrom, incrementBy) {
    let currentCount = startFrom; 
    return function() { 
        currentCount += incrementBy; 
        console.log(currentCount) 
        return currentCount; 
    }; } 
    
    let counter4 = makeCounterIncrementBy(10, 2); 
    counter4(); // 12 
    counter4(); // 14
*/

//Q2.The following delayMsg function is intended to be used to delay printing a message until some time has passed.
//a) What order will the four tests below print in? Why?
//b) Rewrite delayMsg as an arrow function
//c) Add a fifth test which uses a large delay time (greater than 10 seconds)
//d) Use clearTimeout to prevent the fifth test from printing at all. 

/*
function delayMsg(msg) { 
    console.log(`This message will be printed after a delay: ${msg}`) 
} 
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');  //3rd
setTimeout(delayMsg, 20, '#2: Delayed by 20ms'); //2nd
setTimeout(delayMsg, 0, '#3: Delayed by 0ms'); //1st
delayMsg('#4: Not delayed at all'); 

let timerId = setTimeout(() => {
    delayMsg('#5: Delayed by 10 seconds');
}, 10000);
clearTimeout(timerId);

*/

//Q3
/*'Debouncing' is a concept that refers to 'putting off' the execution of multiple, fast-timed, similar requests until there's a brief pause, then only executing the most recent of those requests. See https://www.techtarget.com/whatis/definition/debouncing
It's often used to handle fast-firing scrolling events in a browser, or to prevent multiple server requests being initiated if a user clicks repeatedly on a button.
Using the following code to test and start with:
a) Create a debounce(func) decorator, which is a wrapper that takes a function func and suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second pause, the most recent call to func should be executed and any others ignored.
b) Extend the debounce decorator function to take a second argument ms, which defines the length of the period of inactivity instead of hardcoding to 1000ms
c) Extend debounce to allow the original debounced function printMe to take an argument msg which is included in the console.log statement.

/*

function debounce(func, ms) { // create a function 'debounce' with 'func' that I want to control and 'ms' (how long to wait)
let timerId; // store timerId: 'Which timer is currently active?'
  return function (...args) { // when someone calls this function...
    clearTimeout(timerId); // cancel any previous waiing actions
    timerId = setTimeout(() => { // start a new waiting timer
      func(...args); // when the waiting finishes, run the function
    }, ms); // wait for ms milliseconds before running the function
  };
}

function printMe(msg) {
  console.log(`printing debounced message: ${msg}`);
}

printMe = debounce(printMe, 1000);

// fire off 3 calls within 300ms
setTimeout(() => printMe('first call'), 100);
setTimeout(() => printMe('second call'), 200);
setTimeout(() => printMe('third call'), 300);

*/

//Q4
//The Fibonacci sequence of numbers is a famous pattern where the next number in the sequence is the sum of the previous 
// a) Write a function printFibonacci() using setInterval that outputs a number in the Fibonacci sequence every second.
/*

function printFibonacci() {
    let a = 1, b = 1;
    console.log(a); // print the first number
    setInterval(() => {
        console.log(b); // print the next number
        [a, b] = [b, a + b]; // new a = old b, new b = old a + old b
    }, 1000);
}
printFibonacci(); 

*/

// b) Write a new version printFibonacciTimeouts() that uses nested setTimeout calls to do the same thing.
/*

function printFibonacciTimeouts() {
    let a = 1, b = 1;
    console.log(a); // print the first number   

    function nextStep() {
        console.log(b);
        [a, b] = [b, a + b];
        setTimeout(nextStep, 1000);
}
setTimeout(nextStep, 1000);
}
printFibonacciTimeouts(); 

*/

//Notes: setInterval runs every 1000ms no matter what, while setTimeout waits 1000ms after the previous step finishes before running the next step.

// c) Extend one of the above functions to accept a limit argument, which tells it how many numbers to print before stopping.
/*

function printFibonacciWithLimit(limit) {
    let a = 1, b = 1;
    let count = 0;
    console.log(a); // print the first number
    count++;
    if (count >= limit) return;

    function nextStep() {
        console.log(b);
        count++;
        if (count >= limit) return;
        [a, b] = [b, a + b];
        setTimeout(nextStep, 1000);
    }
    setTimeout(nextStep, 1000);
}
printFibonacciWithLimit(10);

*/


//Q5.
//The following car object has several properties and a method which uses them to print a description. 
//When calling the function normally this works as expected, but using it from within setTimeout fails. Why?

/*
let car = { 
    make: "Porsche", 
    model: '911', 
    year: 1964,
    description() { 
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}.`); // 'this' refers to the object that called the function, which is 'car' in this case.
    } 
}; 

car.description(); 

// setTimeout(car.description, 200);
// The problem is that when we pass car.description to setTimeout, it loses its connection to the car object, so 'this' inside description() does not refer to the car object anymore.

//a) Fix the setTimeout call by wrapping the call to car.description() inside a function - !! Course Reader JSAdvanced Page26-27.
setTimeout(() => car.description(), 200); //setTimeout requires the definition of a function as its first argument, so we can pass an anonymous arrow function that calls car.description() when executed. This way, 'this' inside description() will still refer to the car object.



//b)Change the year for the car by creating a clone of the original and overriding it.
let car2 = { ...car, year: 2020 }; // create a new object car2 that has all the properties of car, but with year overridden to 2020
car2.description(); // This car is a Porsche 911 from 2020.


//c)Does the delayed description() call use the original values or the new values from b)? Why?
//Old values.

//d)Use bind to fix the description method so that it can be called from within setTimeout without a wrapper function.
// Fix the setTimeout call by using bind to explicitly set 'this' to the car object:
setTimeout(car.description.bind(car), 200);

//e)Change another property of the car by creating a clone and overriding it, and test that setTimeout still uses the bound value from d).
let car3 = { ...car, make: 'Toyota' }; // create a new object car3 that has all the properties of car, but with model overridden to 'Toyota'
setTimeout(car3.description.bind(car3), 200); // This car is a Porsche 911 from 1964. The setTimeout call still uses the bound value from d) because we used bind to explicitly set 'this' to the original car object, so it will always refer to that object regardless of any clones we create.

*/

//Q6 
//Use the Function prototype to add a new delay(ms) function to all functions, which can be used to delay the call to that function by ms milliseconds.
//a) Use the example multiply function below to test it with, as above, and assume that all delayed functions will take two parameters.

/*
Function.prototype.delay = function(ms) { // add a new method 'delay' to the Function prototype, which means all functions will have this method available
    //Function = a built-in object/constructor vs function = a keyword used to define a function.
    const originalFunction = this; // store the original function in a variable
    return function(...args) { // return a new function that takes any number of arguments
        setTimeout(() => { // when this new function is called, it will set a timeout
            originalFunction(...args); // after ms milliseconds, it will call the original function with the provided arguments
        }, ms);
    }
}
*/


//b)Use apply to improve your solution so that delayed functions can take any number of parameters
Function.prototype.delay = function(ms) 
{
    const originalFunction = this;
    return function(...args) 
    {
        setTimeout(() => { originalFunction.apply(this, args); }, ms);
    }
}

/*
function multiply(a, b) { 
    console.log( a * b ); 
} 
multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds

*/


//c)Modify multiply to take 4 parameters and multiply all of them, and test that your delay prototype function still works.

/*
function multiply(a, b, c, d) {
    console.log(a * b * c * d);
}
multiply.delay(500)(2, 3, 4, 5); // prints 120 after 500 milliseconds
*/




//??? 
// Q7 The following DigitalClock class uses an interval to print the time every second once started, until stopped.

class DigitalClock { 
    constructor(prefix) { 
        this.prefix = prefix; 
    } 
    display() { 
        let date = new Date(); //create 3 variables in one go using array destructuring 
        let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];
        if (hours < 10) hours = '0' + hours; 
        if (mins < 10) mins = '0' + mins; 
        if (secs < 10) secs = '0' + secs; 
        console.log(`${this.prefix} ${hours}:${mins}:${secs}`); 
    } 
    stop() { 
        clearInterval(this.timer); 
    } 
    start() { 
        this.display(); 
        this.timer = setInterval(() => this.display(), 1000); 
    } 
} 
const myClock = new DigitalClock('my clock:') 
myClock.start()
setTimeout(() => myClock.stop(), 10000); // stop the clock after 10 seconds

//a) Create a new class PrecisionClock that inherits from DigitalClock and adds the parameter precision – the number of ms between 'ticks'. This precision parameter should default to 1 second if not supplied.
class PrecisionClock extends DigitalClock {
    constructor(prefix, precision = 1000) {
        super(prefix); // call the parent class constructor     
        this.precision = precision; // set the precision property
    }
    start() {
        this.display();
        this.timer = setInterval(() => this.display(), this.precision); // use the precision property for the interval
    }
}
const myPrecisionClock = new PrecisionClock('my precision clock:', 500); // create a new PrecisionClock with 500ms precision
myPrecisionClock.start();
setTimeout(() => myPrecisionClock.stop(), 10000); // stop the precision clock after 10 seconds  


//b) Create a new class AlarmClock that inherits from DigitalClock and adds the parameter wakeupTime in the format hh:mm. When the clock reaches this time, it should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should default to 07:00 if not supplied.
class AlarmClock extends DigitalClock {
    constructor(prefix, wakeupTime = '07:00') {
        super(prefix); // call the parent class constructor 
        this.wakeupTime = wakeupTime; // set the wakeupTime property
    }
    display() {
        let date = new Date();
        let [hours, mins] = [date.getHours(), date.getMinutes()];
        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        const currentTime = `${hours}:${mins}`;
        console.log(`${this.prefix} ${currentTime}`);
        if (currentTime === this.wakeupTime) {
            console.log('Wake Up');
            this.stop(); // stop the clock when wakeup time is reached
        }
    }
}
const myAlarmClock = new AlarmClock('my alarm clock:', '07:00'); // create a new AlarmClock with default wakeup time
myAlarmClock.start();   




//???
//Q8 Using the following starter code, create a decorator function to validate function arguments as strings. Test it by decorating the given orderItems function below.
// a) Create a decorator function validateStringArg(fn) which will validate an argument passed to fn to ensure that it is a string, throwing an error if not.
function orderItems(itemName) { 
    return `Order placed for: ${itemName}`; 
} // create a decorated version of the original function 

function validateStringArg(fn) {
    return function(arg) { // return a new function that takes one argument
        if (typeof arg !== 'string') { // check if the argument is not a string
            throw new Error('Argument must be a string'); // throw an error if it's not a string
        }
        return fn(arg); // if it is a string, call the original function with the argument
    }
}

const validatedOrderItem = validateStringArg(orderItems); 
console.log(validatedOrderItem("Apple Watch")); // should run the function 
console.log(validatedOrderItem(123)); // should throw an error

//b) Extend orderItems to use the ... rest operator, allowing multiple item name arguments, and include them all in the returned string.
function orderItems(...itemNames) { 
    return `Order placed for: ${itemNames.join(', ')}`; // join all item names into a single string separated by commas
}   


//c) Extend the decorator function to validate as strings all arguments passed to fn.
function validateStringArg(fn) {
    return function(...args) { // return a new function that takes any number of arguments
        for (const arg of args) { // loop through each argument
            if (typeof arg !== 'string') { // check if the argument is not a string
                throw new Error('All arguments must be strings'); // throw an error if any argument is not a string
            }
        }
        return fn(...args); // if all arguments are strings, call the original function with the arguments
    }
}   


//d) When testing the decorated function, use try-catch blocks to handle errors thrown for non-string arguments.
try {
    console.log(validatedOrderItem("Apple Watch", "iPhone", "iPad")); // should run the function 
    console.log(validatedOrderItem("Apple Watch", 123, "iPad")); // should throw an error
} catch (error) {
    console.log(`Error: ${error.message}`); // catch and log any errors thrown by the decorated function
}       



//???
//Q9 We can delay execution of a function using setTimeout, where we need to provide both the callback function and the delay after which it should execute.

function randomDelay() { // your code 
} 
randomDelay().then(() => console.log('There appears to have been a delay.'));

//a) Create a promise-based alternative randomDelay() that delays execution for a random amount of time (between 1 and 20 seconds) and returns a promise we can use via .then(), as in the starter code below.
function randomDelay() {
    return new Promise((resolve) => {
        const delay = Math.floor(Math.random() * 20) + 1; // random delay between 1 and 20 seconds
        setTimeout(() => {
            resolve();
        }, delay * 1000);
    });
}

//b) If the random delay is even, consider this a successful delay and resolve the promise, and if the random number is odd, consider this a failure and reject it.
function randomDelay() {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 20) + 1; // random delay between 1 and 20 seconds
        setTimeout(() => {
            if (delay % 2 === 0) {
                resolve();
            } else {
                reject(new Error('Delay failed'));
            }
        }, delay * 1000);
    });
}

//c) Update the testing code to catch rejected promises and print a different message.
randomDelay()
    .then(() => console.log('There appears to have been a successful delay.'))
    .catch((error) => console.log(`There was an error: ${error.message}`)); 


//d) Try to update the then and catch messages to include the random delay value.
function randomDelay() {    
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 20) + 1; // random delay between 1 and 20 seconds
        setTimeout(() => {
            if (delay % 2 === 0) {
                resolve(delay);
            } else {
                reject(new Error(`Delay failed with a delay of ${delay} seconds`));
            }
        }, delay * 1000);
    });
}

randomDelay()
    .then((delay) => console.log(`There appears to have been a successful delay of ${delay} seconds.`))
    .catch((error) => console.log(`There was an error: ${error.message}`)); 



//Q10 Fetch is a browser-based function to send a request and receive a response from a server, which uses promises to handle the asynchronous response. 
// The below fetchURLData uses fetch to check the response for a successful status code, and returns a promise containing the JSON sent by the remote server if successful or an error if it failed. 
// (To run this code in a node.js environment, follow the instructions in the comments before the function.)


// run 'npm init' and accept all the defaults 
// // run 'npm install node-fetch' 
// // run 'npm pkg set type=module' 

import fetch from 'node-fetch' 
globalThis.fetch = fetch 

function fetchURLData(url) { 
    let fetchPromise = fetch(url).then(response => { 
        if (response.status === 200) { return response.json(); 

        } else { 
            throw new Error(`Request failed with status ${response.status}`); 
        } 
    }
); 
return fetchPromise; 
}
fetchURLData('https://jsonplaceholder.typicode.com/todos/1') 
.then(data => console.log(data)) 
.catch(error => console.error(error.message));


// a) Write a new version of this function using async/await.
// b) Test both functions with valid and invalid URLs.
// c) (Extension) Extend your new function to accept an array of URLs and fetch all of them, using Promise.all to combine the results.