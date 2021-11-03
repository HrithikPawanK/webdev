// prototype is the template (base class)
// Like, Array has these prototype methods 
// when we create an array we can acccess those prototype methods

// adding new prototype methods for String
String.prototype.yell = function () {
    return `${this.toUpperCase()} !!!! OMG`
};

Array.prototype.pop = function () {
    return 'sorry i am busy'
}

// INTRO TO OOPS

// Factory Functions to create objects
// drawbacks -> it will have member functions unique for every object
function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function () {
        const {r, g, b} = this; // it refers to color object
        return `rgb(${r},${g},${b})`;
    };
    return color;
}

const firstColor = makeColor(35, 255, 150);
console.log(makeColor(1, 2, 3).rgb());

// Constructor

function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

// new -> creates a new object 

const object = new Color(255, 50, 100); // new keyword create a new object and in that function this refers to newly creater object
// it returns this if we dont return anything

// if we want to define member functions which are not unique for every object then we declare them under
// prototype

Color.prototype.rgb = function() {
    const {r, g, b}  = this;
    return `rgb(${r}, ${g}, ${b})`;
}

// Classes
// No need to use prototypes when we use class to declare member fucntions

class Car {
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
    run() {
        return `${this.name} is running`;
    }
}

const newCar = new Car('Honda', 'Silver');
console.log(newCar.run())

// extends, super

class Pet {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating`;
    }
}

class Cats extends Pet{
    // super
    constructor(name, age, livesLeft = 9){
        super(name, age); // reference to parent class // constructor // we can also use the other way
        this.livesLeft = livesLeft;
    }
    meow() {
        return 'Meowwws!';
    }
}

class Dog extends Pet{
    bark() {
        return 'BHOOO!!';
    }
}

const newDog = new Dog('Snoopy', 2);
console.log(newDog.eat())

