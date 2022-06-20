
class Company {
    constructor() {
        this.departments = {};
    }
    addEmployee(name, salary, position, company) {
        if (!name || !salary || !position || !company || salary < 0) {
            throw new Error('Invalid input!');
        } else {
            if (this.departments.hasOwnProperty(company) === false) {
                this.departments[company] = [];
            }
            this.departments[company].push([name, salary, position]);
            return `New employee is hired. Name: ${name}. Position: ${position}`
        }
    }
    bestDepartment() {
        let bestComapny = '';
        let bestAvrSalary = 0;
        let list = [];
        for (const key in this.departments) {
            let sum = 0;
            let counter = 0;
            let currentAvgSalary = 0;
            for (const iterator of this.departments[key]) {
                let salary = Number(iterator[1]);
                sum += salary
                counter++;
            }
            currentAvgSalary = sum / counter;
            if (currentAvgSalary > bestAvrSalary) {
                bestAvrSalary = currentAvgSalary;
                bestComapny = key;
            }
        }
        list.push(`Best Department is: ${bestComapny}`);
        list.push(`Average salary: ${bestAvrSalary.toFixed(2)}`);
        let sorted = Object.values(this.departments[bestComapny]).sort((a, b) => a[0].localeCompare(b[0]))
        sorted.sort((a, b) => b[1] - a[1]);
        for (const line of sorted) {
            list.push(line.join(' '));
        }
        return list.join('\n');
    }

}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
