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