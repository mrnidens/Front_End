console.log('====== destructuring of array ========');
const arr = [2,3,5,7,11];
let [a,b,...c] = arr;
console.log(a,b);
console.log(c);
console.log('==== swap =====');

console.log('=== destructuring of object =====');
const person = {
    firstName: 'John',
    lastName: 'Smith',
    age: 34,
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

let {firstName, lastName,... rest} = person;
console.log(firstName);
console.log(lastName);
console.log(rest);
personInfo(person);

function personInfo(human) {
    let lastName = human.lastName;
    let age = human.age;
    console.log(`${lastName} - ${age}`);
}