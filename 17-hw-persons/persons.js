const addPerson = document.getElementById('addPerson');
const calcStats = document.getElementById('calcStats');
const register = [];


calcStats.onclick = function () {
    let totalAge = 0;
    let youngestAge = Infinity;
    let oldestAge = 0;
    const result = document.getElementById('statsContainer');
    result.innerHTML = '';
    const container = document.createElement('div');


    for (let index = 0; index < register.length; index++) {
        const age = register[index].calculateAge();
        totalAge += age;
        if (youngestAge > age) {
            youngestAge = age;
        }
        if (oldestAge < age) {
            oldestAge = age;
        }
    }

    const averageLi = document.createElement('p');
    averageLi.textContent = 'Average age: ' + totalAge / register.length + 'years';

    const youngestLi = document.createElement('p');
    youngestLi.textContent = 'Youngest age: ' + youngestAge + 'years';

    const oldestLi = document.createElement('p');
    oldestLi.textContent = 'Oldest age: ' + oldestAge + 'years';


    container.append(youngestLi, averageLi, oldestLi);

    if (result.firstElementChild) {
        result.replaceChild(container, result.firstElementChild);
    } else {
        result.appendChild(container);
    }
}


addPerson.onclick = function () {


    const id = document.getElementById('personId').value.trim();
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const birthDate = document.getElementById('birthDate').value.trim();

    const existingPerson = register.find(person => person.id === id);


    if (existingPerson) {
        alert('Person with this ID already exists');
    } else if (id && firstName && lastName && birthDate) {
        const person = new Person(id, firstName, lastName, birthDate);
        register.push(person);

        document.getElementById('personId').value = '';
        document.getElementById('firstName').value = '';
        document.getElementById('lastName').value = '';
        document.getElementById('birthDate').value = '';

        const container = document.getElementById('statsContainer');
        container.innerHTML = '';

        displayPersons();

    } else {
        alert('Please fill all fields');
    }
}

function displayPersons() {
    const result = document.getElementById('personsList');
    result.innerHTML = '';

    for (let i = 0; i < register.length; i++) {
        const li = document.createElement('li');
        li.textContent = register[i].toString();

        const deleteButton = document.createElement('button');
        deleteButton.textContent = ' ✖ ';


        deleteButton.onclick = function () {
            deletePerson(i);
        };


        li.appendChild(deleteButton);

        result.appendChild(li);
    }
}

function deletePerson(index) {
    register.splice(index, 1);
    displayPersons();
}



function Person(id, firstName, lastName, birthDate) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = new Date(birthDate);

    this.calculateAge = function () {
        const today = new Date();
        const birthDate = new Date(this.birthDate);
        let age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
    this.toString = function () {
        return `ID: ${this.id}, First Name: ${this.firstName}, Last Name: ${this.lastName}, Age: ${this.calculateAge()} years old`;
    }
}
