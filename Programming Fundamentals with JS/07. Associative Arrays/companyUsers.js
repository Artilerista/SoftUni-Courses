function companyUsers(array) {
    let company = {};
    for (let line of array) {
        let [name, id] = line.split(' -> ');
        if (!company.hasOwnProperty(name)) {
            company[name] = new Set();
        }
        company[name].add(id);
    }
    let sorted = Object.entries(company).sort((a, b) => a[0].localeCompare(b[0]));
    for (let [name, set] of sorted) {
        console.log(name)
        for (let id of set) {
            console.log(`-- ${id}`);
        }
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]
)