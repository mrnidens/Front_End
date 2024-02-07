const firm = new Company();
const addPerson = document.getElementById('addPerson');
const calcStats = document.getElementById('calcStats');


addPerson.onclick = function () {


    const id = document.getElementById('personId').value.trim();
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const birthDate = document.getElementById('birthDate').value.trim();
    const salary = document.getElementById('salary').value.trim();


    const employee = new Employee(id, firstName, lastName, birthDate, salary);

    const employeeAdded = firm.addEmployee(employee);

    if (employeeAdded) {
        id.value = '';
        firstName.value = '';
        lastName.value = '';
        birthDate.value = '';
        salary.value = '';

        const container = document.getElementById('statsContainer');
        container.innerHTML = '';

        displayPersons(firm.employees);

    }
}

calcStats.onclick = function () {
    const stats = firm.calculateStats();
    const result = document.getElementById('statsContainer');
    result.innerHTML = '';

    const container = document.createElement('div');


    const averageLi = document.createElement('p');
    averageLi.textContent = 'Average age: ' + stats.averageAge + ' years';

    const youngestLi = document.createElement('p');
    youngestLi.textContent = 'Youngest age: ' + stats.youngestAge + ' years';

    const oldestLi = document.createElement('p');
    oldestLi.textContent = 'Oldest age: ' + stats.oldestAge + ' years';

    const totalLi = document.createElement('p');
    totalLi.textContent = 'Total salary: ' + stats.totalSalary + ' euro';

    const avgSalaryLi = document.createElement('p');
    avgSalaryLi.textContent = 'Average salary: ' + stats.averageSalary + ' euro';


    container.append(youngestLi, averageLi, oldestLi, totalLi, avgSalaryLi);

    if (result.firstElementChild) {
        result.replaceChild(container, result.firstElementChild);
    } else {
        result.appendChild(container);
    }
}