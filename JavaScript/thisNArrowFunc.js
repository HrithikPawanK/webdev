const person = {
    firstName : 'Kakkireni',
    lastName : 'Hrithik Pawan',
    fullName(){
        console.log(this);
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(person.fullName());

// this , arrow function 

// this in array function refers to window object so if fullName is implement using arrow function then
// it will be undefined as window object doesn't have firstName, lastName properties.