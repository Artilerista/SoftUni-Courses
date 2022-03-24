function salary(input) {
    let index = 0;
    let countTabs = Number(input[index]);
    index++;
    let salary = Number(input[index]);
    index++;
    let isHaveSalary = true
    for (i = 1; i <= countTabs; i++) {
        let name = input[index];
        index++;
        switch (name) {
            case 'Facebook': salary -= 150; break;
            case 'Instagram': salary -= 100; break;
            case 'Reddit': salary -= 50; break;
        }
        if (salary <= 0) {
            console.log(`You have lost your salary.`);
            isHaveSalary = false;
            break;
        }
    }
    if (isHaveSalary) {
        console.log(Math.trunc(salary));
    }


}
salary(["10",
    "750",
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"])

