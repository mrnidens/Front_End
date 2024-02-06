class Company {
    constructor() {
        this._employees = [];
    }

    get employees() {
        return [...this._employees];
    }

    addEmployee(employee) {
        const index = this._employees.findIndex(({ id }) => id === employee.id);
        if (index < 0) {
            this._employees.push(employee);
        }
        return index < 0;
    }

    calculateStats() {
        let totalAge = 0;
        let youngestAge = Infinity;
        let oldestAge = 0;
        let totalSalary = 0;


        this._employees.forEach(employee => {
            const age = employee.calculateAge();
            totalAge += age;
            if (youngestAge > age) {
                youngestAge = age;
            }
            if (oldestAge < age) {
                oldestAge = age;
            }
            totalSalary += employee.salary;
        });
        const averageAge = totalAge / this._employees.length;
        const averageSalary = totalSalary / this._employees.length;

        return {
            averageAge: averageAge,
            youngestAge: youngestAge,
            oldestAge: oldestAge,
            totalSalary: totalSalary,
            averageSalary: averageSalary
        };
    }


    removeEmployee(index) {
        if (index >= 0 && index < this._employees.length) {
            this._employees.splice(index, 1);
            return true;
        }
        return false;
    }

    get size() {
        return this._employees.length;
    }
}