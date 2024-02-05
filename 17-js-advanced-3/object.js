const person = {
    firstName: 'John',
    lastName: 'Smith',
    age: 34,
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    address : {
        city: 'Hamburg',
        street: 'Hauptstrasse',
        building: 3
    },
    salary: 3600
}
let arr = Object.keys(person);
console.log(arr);