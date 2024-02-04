const human = {
    hobby: 'chess',
    fullName: function() {
        return `${this.firstName} ${this.lastName}`
    }
}

const john = {
    firstName: 'John',
    lastName: 'Peterson'
}

console.log(human);
console.log(john.hobby);
john.__proto__ = human;
console.log(john);
console.log(john.hobby);
john.hobby = 'cannabis';
console.log(john.fullName());

console.log('======== Constructor ============');
// Person.prototype = human;
Person.prototype.fullName = human.fullName;
Person.prototype.hobby = 'JS';
console.log(Person.prototype.constructor === Person);
const peter = new Person('Peter', 'Jackson');
const mary = new Person('Mary', 'Smith');
console.log(peter);
console.log(mary);
peter.__proto__ = human;
mary.__proto__ = human;
console.log(peter.fullName());

console.log(mary.fullName());

Array.prototype.printArrays = function(){
    for (let i = 0; i < this.length; i++) {
        const element = array[i];
    
    }
}
const numbers = new Array(2, 3, 5, 7, 11, 13);
console.log(numbers);
numbers.printArrays();



function Person (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}