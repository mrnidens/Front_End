console.log(this === window);
// window.firstName = 'Super';
// window.lastName = 'Boss';
const getFullName = function(){
    console.log(this);
    return `${this.firstName} ${this.lastName}`;
}

const john = {
    firstName: 'John',
    lastName: 'Smith'
}

const peter = {
    firstName: 'Peter',
    lastName: 'Jackson'
}

john.fullName = getFullName;
peter.fullName = getFullName;
console.log(john.fullName());
console.log(peter.fullName());
console.log(getFullName());