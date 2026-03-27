//alert("JavaScript is working!");

//Q1
/*A decorator function is a function that wraps another function and adds extra behaviour without changing the original function.
A decorator takes a function, enhances it, and returns a new function.*/

function makeCounter() { 
    let currentCount = 0; 
    return function() { 
        currentCount++; 
        console.log(currentCount) 
        /*document.getElementById("counter1").innerHTML += currentCount + "<br>" ;*/
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

/*Q2.
The following delayMsg function is intended to be used to delay printing a message until some time has passed.
a) What order will the four tests below print in? Why?
b) Rewrite delayMsg as an arrow function
c) Add a fifth test which uses a large delay time (greater than 10 seconds)
d) Use clearTimeout to prevent the fifth test from printing at all. */

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


//Q3
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


//Q4
//The Fibonacci sequence of numbers is a famous pattern where the next number in the sequence is the sum of the previous 
// a) Write a function printFibonacci() using setInterval that outputs a number in the Fibonacci sequence every second.
function printFibonacci() {
    let a = 1, b = 1;
    console.log(a); // print the first number
    setInterval(() => {
        console.log(b); // print the next number
        [a, b] = [b, a + b]; // new a = old b, new b = old a + old b
    }, 1000);
}

// b) Write a new version printFibonacciTimeouts() that uses nested setTimeout calls to do the same thing.
/* function printFibonacciTimeouts() {
    let a = 1, b = 1;
    console.log(a); // print the first number
    function printNext() {
        console.log(b); // print the next number
        [a, b] = [b, a + b]; // update a and b to the next two numbers in the sequence
        setTimeout(printNext, 1000); // schedule the next call
    }
    setTimeout(printNext, 1000); // start the first call after 1 second
}
