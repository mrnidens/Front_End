console.log('=== Spread Array ====');
const arr1 =[2,3,5];
const arr2 = [7,11];
const[...arr3] = arr1;
console.log(arr3);
console.log('==== Spread object ======');
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
    }
}