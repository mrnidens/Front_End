const john = {
    firstName: 'John',
    lastName: 'Smith',
    age: 27,
    fullName: function (params) {
        return `${this.firstName} ${this.lastName}`;
    }
}
console.log(typeof john);
console.log(john.firstName);
console.log(john.lastName);
console.log(john.age);
console.log(john.fullName());
john.age = 28;
console.log(john.age);

const peter = {
    firstName: 'Peter',
    lastName: 'Jackson',
    age: 34,
}
console.log(peter);
peter.fullName = function() {
    return `${this.firstName} ${this.lastName}`;
}
console.log(peter.fullName());
console.log(peter.id);
console.log(peter.hobby);
peter.id = 2000;
console.log(peter.id);
console.log(peter);
printObject(peter);

const mary = new Person(3000, 'Mary', 'Smith', 19)
console.log(mary);

function printObject(obj) {
    for (let key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }
}

function Person(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = +age;
    this.fullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}