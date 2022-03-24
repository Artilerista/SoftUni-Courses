function walking(input) {
    let goal = 10000;
    let index = 0;
    let comand = input[index];
    let counterSteps = 0;
    while (comand !== 'Going home') {
        let steps = Number(comand);
        counterSteps += steps;
        if (counterSteps >= goal) {
            let diff = Math.abs(counterSteps - goal);
            console.log('Goal reached! Good job!');
            console.log(`${diff} steps over the goal!`);
            break;
        }
        index++;
        comand = input[index];
    }
    if (comand === 'Going home') {
        index++
        let steps = Number(input[index]);
        counterSteps += steps;
        let diff = Math.abs(counterSteps - goal);
        if(counterSteps >= goal){
            console.log('Goal reached! Good job!');
            console.log(`${diff} steps over the goal!`);
        } else {
            console.log(`${diff} more steps to reach goal.`);
        }
    }
}
walking(["1500",
"300",
"2500",
"3000",
"Going home",
"200"])

