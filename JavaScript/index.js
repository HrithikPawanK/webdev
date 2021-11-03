function makeBetweenFunc(min, max) {
    return function(num){
        return num >= min && num <= max;
    }
}
const testRange = makeBetweenFunc(10, 100);
console.log(testRange(5));
function makeBetween(num) {
    return num >= 50 && num <= 100;
}
function makeBetween2(num) {
    return num >= 1 && num <= 10;
}

const math = {
    PI : 3.141,
    square : function (num) {
        return num * num;
    },
    cube : function (num) {
        return num * num * num;
    }, 
    add(x, y){
        return x + y;
    },
    mul(x, y){
        return x * y;
    }
}

//*
const myCat = {
    name : 'snoopy',
    color : 'blue',
    meow(){
        console.log(`${this.name}`);
    }
}

const test = myCat.meow;

try{
    hello.toUpperCase();
} catch {
    console.log('ERROR!');
}

function yell(msg){
    try {
        console.log(msg.toUpperCase().repeat(5));
    } catch(e) {
        console.log(e);
        console.log('Enter a string');
    }
}   

const nums = [1, 2, 3, 4, 5];

nums.forEach(function (e){
    if(e % 2 === 0){
        console.log(e);
    }
});

const movies = [
    {
        name : 'evadu',
        rating : 98
    },
    {
        name : 'khaidhi No 150',
        rating : 49
    }
]

movies.forEach(function (obj){
    console.log(`${obj.name}-${obj.rating}/100`);
});

const numbers = [1, 2, 3];
const doubleNums = numbers.map(function (num){
    return num * 2;
});

for(let x of doubleNums){
    console.log(x);
}

const names = movies.map(function (obj) {
    return obj.name;
});

const add = (x, y) => {
    return x + y;
};

const square = (x) => {
    return x * x;
};

const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
};

// if there is only single argument we can remove parenthesis.
const cube = x => {
    return x * x * x;
};

// if there is only one statement in array function and if that should be return then we can use below syntax.

// implicit return // one liner // we can remove return key word 

// also make curly braces to parentesis.

// notice ';' not required.

const rollDie2 = () => (
    Math.floor(Math.random() * 6) + 1
)

// one line without parenthesis
const add2 = (x, y) => a + b;

const ratingDiv10 = movies.map( movie => (
    `${movie.name} - ${movie.rating / 10}`
));

// setTimeOut --> wait for given time and execute
console.log('hello');
// 1st parameter can be any type of function like normal or arrow
setTimeout(() => (console.log('Are you still there')), 3000);
console.log('good bye');

// setInterval --> execute for every given interval

setInterval(() => (console.log('hi')), 2000);

// clearInterval() --> to stop setInterval execute we use set interval

const id = setInterval(() => (console.log('clearInterval'), 2000));

// use clearInterval(id) to stop

clearInterval(id);

// filter --> to get all the elements which pass the given condition

const numbs = [1, 2, 3, 4, 5];

const even = numbs.filter(n => n % 2 == 0);

const scores = [10, 3, 4, 2, 5];

// every -> if all satifies the given condition then return true
// some -> if some satifies the given condition then return true

scores.every(score => score > 5);

scores.some(score => score > 5);

// reduce --> reducing an array to single element

[3, 5, 7, 9, 11].reduce((accumulator, currentValue) => accumulator + currentValue);
// sum of all values

const min = nums.reduce((min, curr) => {  // min element from the array
    if(curr < min){
        return curr;
    }
    return min;
});

movies.reduce((bestMovie, currentMovie) => {
    if(currentMovie.rating > bestMovie.rating){
        return currentMovie;
    }
    return bestMovie;
});

// if we want a initial for accumulator we can pass seecond argument for reduce

const sum = nums.reduce((sum, num) => sum + num, 100);




