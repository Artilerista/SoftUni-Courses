function aNDProcessors(input) {
    let GoalNumberProcesors = Number(input[0]);
    let people = Number(input[1]);
    let workDays = Number(input[2]);
    let totalHours = people * workDays * 8;
    let NumberProcesors = Math.floor(totalHours / 3);
    let diff = Math.abs(GoalNumberProcesors - NumberProcesors);
    let price = diff * 110.10;
    if (GoalNumberProcesors <= NumberProcesors) {
        console.log(`Profit: -> ${price.toFixed(2)} BGN`);
    } else {
        console.log(`Losses: -> ${price.toFixed(2)} BGN`);
    }
}
aNDProcessors(["500",
    "8",
    "20"])
