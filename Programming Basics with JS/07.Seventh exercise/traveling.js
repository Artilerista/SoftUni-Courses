function traveling(input) {
    let index = 0;
    let destination = input[index];
    index++;
    let minBudget = Number(input[index]);
    index++;
    let money = Number(input[index]);
    index++;
    while (destination !== 'End') {
        while (money < minBudget) {
            money += Number(input[index]);
            index++;
            if (money >= minBudget) {
                console.log(`Going to ${destination}!`);
                break;
            }
        }
        destination = input[index];
        index++;
        minBudget = Number(input[index]);
        index++;
        money = 0;
        
    }
}
traveling(["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"])
