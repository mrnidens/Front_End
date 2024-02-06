class Person {
    constructor(id, firstName, lastName, birthDate) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthDate = new Date(birthDate);

    }
    get id() {
        return this._id;
    }
    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }
    get birthDate() {
        return this._birthDate;
    }
    get age() {
        const today = new Date();
        const birthDate = new Date(this.birthDate);
        let age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
    fullName() {
        return `${this._firstName} ${this._lastName}`
    }
}

class Employee extends Person {
    constructor(id, firstName, lastName, birthDate, salary) {
        super(id, firstName, lastName, birthDate);
        this._salary = +salary;
    }

    get salary() {
        return this._salary;
    }
    set salary(value) {
        if(value > this._salary) {
        this._salary = +value;
        }
    }
}

class Company {
    constructor() {
        this._employees = [];
    }

    get employees() {
        return this._employees;
    }
    addEmployee(employee) {
        const index = this._employees.findIndex(({id}) => e.id === employee.id);
        if (index < 0) {
            this._employees.push(employee);
        }
        return index < 0;
    }
    removeEmployee(id) {
        const index = this._employees.findIndex(({id}) => e.id === employee.id);
        if(index >= 0) {
            this._employees.splice(index, 1);
        }
        return index >= 0;
    }
}

const john = new Person(1000, 'John', 'Smith', '2001-04-28');
console.log(john);
console.log(john.fullName());
console.log(john.getId);
john.firstName = 'Johny';
console.log(john.age);
const peter = new Employee(2000, 'Peter', "Jerkson", '2003-02-24', 3500);

