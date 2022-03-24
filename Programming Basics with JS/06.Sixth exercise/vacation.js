function vacation(input) {
    let moneyForHoliday = Number(input[0]);
    let currentMoney = Number(input[1]);
    let index = 2;
    let comand = input[index];
    index++;
    let moneyChange = Number(input[index]);
    let days = 0;
    let spendDays = 0;
    let isSavedMoney = true;
    while (currentMoney < moneyForHoliday) {
        days++;
        switch (comand) {
            case 'spend':
                spendDays++;
                currentMoney -= moneyChange;
                if (currentMoney < 0) {
                    currentMoney = 0;
                }
                break;
            case 'save':
                spendDays = 0;
                currentMoney += moneyChange;
                break;
        }
        if (spendDays === 5) {
            console.log("You can't save the money.");
            console.log(days);
            break;
        }
        index++;
        comand = input[index];
        index++;
        moneyChange = Number(input[index]);
    }
    if (currentMoney >= moneyForHoliday) {
        console.log(`You saved the money for ${days} days.`);
    }
}
vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])

