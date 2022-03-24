function goldMine(input) {
    let NumberLocations = Number(input[0]);
    let index = 1;
    for (i = 1; i <= NumberLocations; i++) {
        let GoalAvgOutput = Number(input[index]);
        index++;
        let DaysForMining = Number(input[index]);
        index++;
        let totalGold = 0;
        for(j = 1 ; j <= DaysForMining ; j++){
            let OutputGoldForDay = Number(input[index]);
            index++;
            totalGold += OutputGoldForDay;
        }
        let avg = totalGold / DaysForMining;
        let diff = Math.abs(GoalAvgOutput - avg);
        if(GoalAvgOutput <= avg){
            console.log(`Good job! Average gold per day: ${avg.toFixed(2)}.`);
        } else {
            console.log(`You need ${diff.toFixed(2)} gold.`);
        }
    }
}
goldMine(["2",
    "10",
    "3",
    "10",
    "10",
    "11",
    "20",
    "2",
    "20",
    "10"])
