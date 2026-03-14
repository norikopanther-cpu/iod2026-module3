/* What is a prototype in JavaScript?
In JavaScript, every object inherits properties and methods from a prototype.
Example: */

let text = "hello";
text.toUpperCase(); // "HELLO"

/* All strings inherit methods from String.prototype.
So internally:
"hello"
   ↓
String.prototype
   ↓
Object.prototype

That means all string methods like:
.toUpperCase()
.repeat()
.slice()
.includes()
come from String.prototype. */

/* Changing native prototypes
You can add new methods to built-in objects like String.
Example from the slide: */

String.prototype.show = function() {
  console.log(this);
};
"BOOM!".show(); // "BOOM!"

/* Classes in JavaScript
A class is basically a template (blueprint) for creating objects.
Classes usually start with a capital letter (e.g., class Car).

Think of it like this:
    Class = blueprint
    Object = actual thing created from the blueprint
Example:
    Blueprint: Car
    Objects: Toyota, BMW, Tesla

Basic class structure:
class ExampleClass {
  prop1 = 'value1';
  prop2 = 'value2';
  constructor() {
  }
  method1() {
  }
} */

class Person {
  constructor(name) {
    this.name = name;
  }
}
let p = new Person("Noriko"); 
console.log(p.name); // "Noriko"

sayHello() {
    console.log("Hello " + this.name);
  }
p.sayHello(); // "Hello Noriko"

/*Object-Oriented Programming (OOP)
OOP organizes programs using objects.
Objects contain:
    data + behaviour

Example object:
Car
 ├─ speed
 ├─ color
 └─ drive()

Main ideas of OOP
1️⃣ Encapsulation
Data + methods together.
2️⃣ Inheritance
Classes can inherit from other classes.
3️⃣ Abstraction
Hide unnecessary details.
4️⃣ Polymorphism
Objects behave differently with the same method.

Example in JavaScript:*/

class Car {
  constructor(color) {
    this.color = color;
  }
  drive() {
    console.log("Driving a " + this.color + " car!");
  } 
}
let myCar = new Car("red");
myCar.drive(); // "Driving a red car!" */

/*Functional Programming (FP)
Functional programming focuses on functions instead of objects.
Example:
function add(a, b) {
  return a + b;
}

Instead of objects, FP uses:    
    functions
    data transformations

Example: */
const numbers = [1,2,3];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6]

/*Simple analogy

Imagine a restaurant.

OOP style
Chef object
  ├─ ingredients
  ├─ tools
  └─ cook()

Everything belongs to the chef.

Functional style
cut(ingredients)
cook(ingredients)
serve(food)

Each function transforms data. */

/* In object-oriented programming (OOP), we try to separate:
    Internal implementation (inside the class)
    External interface (what users of the class can access)
This principle is called encapsulation.

The idea:
    Users should only interact with safe/public methods.
    Internal data should be hidden or protected.

Protected properties:
e.g., _hardDiskType = 'HDD'
The underscore _ indicates a protected property.
Important:
⚠️ JavaScript does NOT enforce protection.
The underscore is just a developer convention meaning: You CAN access it, but you SHOULD NOT.

/* Private properties & methods
Private properties & methods are enforced by JS, and cannot be accessed outside of the class itself. This lets us maintain
certain data as internal only.
Example: */

class Laptop {
_hardDiskType = 'HDD'; // _ indicates a protected property; it SHOULD only be used by inheriting classes.
#numCPUFans = 1; // # indicates a private property; it CAN only be used internally by class methods.
constructor(brand) { // constructors are always public
this.brand = brand; // public property
}
isGaming() { return false; } // public method
getHDiskType() { return this._hardDiskType; } // public method to access protected property
_increaseCPUFans() { // protected method
if (this.isGaming()) this.#numCPUFans++ // can access private properties internally
}
}
const macbook = new Laptop('Macbook Pro');
console.log(macbook.#numCPUFans) // error: private property is not accessible

class GamingLaptop extends Laptop {
constructor(brand) {
super(brand); // public property, externally available to instances
this._hardDiskType = 'SSD'; // protected props should be accessed by children, not instances
this.#numCPUFans = 2; // error: private property is not accessible
this._increaseCPUFans(); // use protected method to change #numCPUFans as it's internal
}
isGaming() { return true; } // public method
}
const alienware = new GamingLaptop('Alienware');
//console.log(alienware.#numCPUFans) // error: private property is not accessible
console.log(alienware._hardDiskType) // no error: but protected property SHOULD NOT be accessed
console.log(alienware.getHDiskType()) // better: public method for accessing protected property

