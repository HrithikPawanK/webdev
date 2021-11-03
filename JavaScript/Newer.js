// default params
function rollDie(numSides = 6){
    return Math.floor(Math.random() * numSides) + 1
}
console.log(rollDie());

function greet(person, msg = 'hello'){
    console.log(`${msg} ${person}`)
}

greet('hrithik');

// spread

const nums = [1, 2, 3, 4];

const max = Math.max(1, 2, 10, 2, 3, 5);

// const max = Math(nums) --> return NaN

// spread -> spreading as arguments from array or objects.

const max2 = Math.max(...nums);

console.log(max, max2);

console.log(...nums);

console.log(...'hello');

// spread --> copying array from one to another

const even = [2, 4, 6], odd = [1, 3, 5];
const allPets = [...even, ...odd];

console.log(allPets);

// spread --> copying object from one to another.

const a = {
    x : '2',
    y : '3'
}
const b = {
    t : '7',
    y : '10'
}

const test = {...a, ...b};

// when there is a conflict then last one overides the previous one's conflict.

console.log(test);

// rest param --> collect rest of the values (parameters) as an array so that we can perform array methods.

function sum(...nums) {
    return nums.reduce((total, num) => total + num);
}

function raceResults(gold, silver, ...nums){
    console.log(`Gold medal goes to ${gold}`);
    console.log(`Silver medal goes to ${silver}`);
    console.log(`Everyone else ${nums}`);
}

console.log(sum(1, 2, 3, 4));

raceResults('hp', 'manju', 'x', 'y', 'z');

// destructuring --> if we want to copy array elements to individual variable we can use them.

const results = ['hp', 'manju', 'x', 'y', 'z'];

const [gold, silver, bronze] = results;

// now gold -> 'hp', silver -> 'manju', bronze -> 'x'

const [first, ...remaining] = results;

// remaining --> rest param

console.log(gold, remaining);

// destructuring in objects

const user = {
    email : 'hrithikkakkireni@gmail.com',
    password : '#Hrithik959',
    firstName : 'Kakkireni',
    lastName : 'Hrithik Pawan'
}

// with the same name
const {email, password} = user;

// with different names
const {email : userMail = 'not found'} = user;
// userMail is variable and we can also use default argument if given property is not found.

// destructuring params -> if we need only few properties of an object while passing as an argument
// then we can do this in params

function fullNameParamsDest({firstName, lastName}) {
    return `${firstName} ${lastName}`;
}

const movies = [
    {
        title : 'xyz',
        rating : 10
    },
    {
        title : 'abc',
        rating : 20
    },
    {
        title : 'pqr',
        rating : 30
    }
];

const goodMovies = movies.filter(({rating})=> rating > 10);

const moviesArray = movies.map(({title, rating}) => `${title} has rating ${rating}`);

console.log(goodMovies);
console.log(moviesArray);